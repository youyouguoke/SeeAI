#!/usr/bin/env node
/**
 * check:content — 内容质量门禁（技术设计 §57 Gate A，Engine 化后泛化到多概念）。
 *
 * 校验项：
 *  1. concepts 集合中 zh/en MDX 成对出现，slug 一致
 *  2. MDX frontmatter 键一致（quiz.options/feedbacks 长度、answer_index、hero_meta）
 *  3. 每个概念的 ConceptSpec 内容模块（src/concepts/<slug>/content.zh|en.ts）：
 *     顶层键一致、demo.type 一致、构件/场景层级/误解条数一致
 *
 * 失败退出码 1，阻断 build。
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const conceptsDir = join(root, 'src/content/concepts');
const specsDir = join(root, 'src/concepts');
const LOCALES = ['zh', 'en'];

let failures = 0;
const fail = (msg) => {
  failures += 1;
  console.error(`  ✗ ${msg}`);
};
const ok = (msg) => console.log(`  ✓ ${msg}`);

const frontmatter = (file) => matter(readFileSync(file, 'utf8')).data;

console.log('check:content — concept 双语一致性\n');

/* 1+2. MDX 成对与 frontmatter 结构 */
const filesByLocale = new Map(LOCALES.map((l) => [l, readdirSync(join(conceptsDir, l)).filter((f) => f.endsWith('.mdx')).sort()]));
const zhFiles = filesByLocale.get('zh');
const enFiles = filesByLocale.get('en');

if (zhFiles.join() !== enFiles.join()) {
  fail(`MDX 文件不成对：zh=[${zhFiles}] en=[${enFiles}]`);
} else {
  ok(`MDX 成对（${zhFiles.length} 个概念）`);
}

for (const f of zhFiles) {
  const zhFm = frontmatter(join(conceptsDir, 'zh', f));
  const enFm = frontmatter(join(conceptsDir, 'en', f));
  if (!zhFm || !enFm) { fail(`${f}: frontmatter 缺失`); continue; }
  if (Object.keys(zhFm).sort().join(',') !== Object.keys(enFm).sort().join(','))
    fail(`${f}: frontmatter 键不一致`);
  if (String(zhFm.slug) !== String(enFm.slug)) fail(`${f}: slug 不一致`);
  if (JSON.stringify(zhFm.quiz?.options?.length) !== JSON.stringify(enFm.quiz?.options?.length))
    fail(`${f}: quiz.options 数量不一致`);
  if (String(zhFm.quiz?.answer_index) !== String(enFm.quiz?.answer_index))
    fail(`${f}: quiz.answer_index 不一致`);
  if (JSON.stringify(zhFm.hero_meta?.length) !== JSON.stringify(enFm.hero_meta?.length))
    fail(`${f}: hero_meta 数量不一致`);
}
ok('frontmatter 结构校验完成');

/* 3. ConceptSpec 内容模块（每个概念目录） */
const conceptDirs = readdirSync(specsDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

for (const slug of conceptDirs) {
  const zhPath = join(specsDir, slug, 'content.zh.ts');
  const enPath = join(specsDir, slug, 'content.en.ts');
  let zhSpec, enSpec;
  try {
    zhSpec = (await import(zhPath)).spec;
    enSpec = (await import(enPath)).spec;
  } catch (e) {
    fail(`${slug}: 内容模块缺失或无法导入 (${e.message})`);
    continue;
  }
  if (!zhSpec || !enSpec) { fail(`${slug}: spec 未导出`); continue; }

  const keys = (o) => Object.keys(o).sort().join(',');
  if (keys(zhSpec) !== keys(enSpec)) fail(`${slug}: spec 顶层键不一致\n    zh: ${keys(zhSpec)}\n    en: ${keys(enSpec)}`);
  if (zhSpec.id !== enSpec.id) fail(`${slug}: spec.id 不一致`);
  if (zhSpec.demo?.type !== enSpec.demo?.type) fail(`${slug}: demo.type 不一致`);
  if (JSON.stringify(keys(zhSpec.definition ?? {})) !== JSON.stringify(keys(enSpec.definition ?? {})))
    fail(`${slug}: definition 键不一致`);
  if ((zhSpec.definition?.components?.length ?? -1) !== (enSpec.definition?.components?.length ?? -2))
    fail(`${slug}: definition.components 数量不一致`);
  if ((zhSpec.scenario?.levels?.length ?? -1) !== (enSpec.scenario?.levels?.length ?? -2))
    fail(`${slug}: scenario.levels 数量不一致`);
  if ((zhSpec.misconceptions?.items?.length ?? -1) !== (enSpec.misconceptions?.items?.length ?? -2))
    fail(`${slug}: misconceptions.items 数量不一致`);
  if ((zhSpec.idea?.questions?.length ?? -1) !== (enSpec.idea?.questions?.length ?? -2))
    fail(`${slug}: idea.questions 数量不一致`);
  ok(`${slug}: spec 双语一致`);
}

console.log('');
if (failures > 0) {
  console.error(`check:content 失败：${failures} 个问题`);
  process.exit(1);
}
console.log('check:content 通过');
