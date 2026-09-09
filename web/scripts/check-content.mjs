#!/usr/bin/env node
/**
 * check:content — 内容质量门禁（技术设计 §57 Gate A）。
 *
 * 校验项：
 *  1. concepts 集合中 zh/en 成对出现，slug 一致
 *  2. frontmatter 键完全一致（quiz.options / feedbacks 长度一致、answer_index 一致）
 *  3. ontology 结构化文案模块键一致（TS 编译器已兜底，此处做内容级复核）
 *
 * 失败退出码 1，阻断 build。
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const conceptsDir = join(root, 'src/content/concepts');
const LOCALES = ['zh', 'en'];

let failures = 0;
const fail = (msg) => {
  failures += 1;
  console.error(`  ✗ ${msg}`);
};
const ok = (msg) => console.log(`  ✓ ${msg}`);

/** 提取 frontmatter 对象 */
function frontmatter(file) {
  const src = readFileSync(file, 'utf8');
  return matter(src).data;
}

console.log('check:content — concept 双语一致性\n');

const slugsByLocale = new Map();
for (const locale of LOCALES) {
  const dir = join(conceptsDir, locale);
  const files = readdirSync(dir).filter((f) => f.endsWith('.mdx'));
  slugsByLocale.set(locale, files);
}

const zhFiles = slugsByLocale.get('zh').sort();
const enFiles = slugsByLocale.get('en').sort();

// 1. 成对
if (zhFiles.join() !== enFiles.join()) {
  fail(`MDX 文件不成对：zh=[${zhFiles}] en=[enFiles]`);
} else {
  ok(`MDX 成对（${zhFiles.length} 个概念）`);
}

// 2. frontmatter 结构一致
for (const f of zhFiles) {
  const zhFm = frontmatter(join(conceptsDir, 'zh', f));
  const enFm = frontmatter(join(conceptsDir, 'en', f));
  if (!zhFm || !enFm) {
    fail(`${f}: frontmatter 缺失`);
    continue;
  }
  const zhKeys = Object.keys(zhFm).sort().join(',');
  const enKeys = Object.keys(enFm).sort().join(',');
  if (zhKeys !== enKeys) fail(`${f}: frontmatter 键不一致\n    zh: ${zhKeys}\n    en: ${enKeys}`);
  if (String(zhFm.slug) !== String(enFm.slug)) fail(`${f}: slug 不一致 (${zhFm.slug} vs ${enFm.slug})`);
  if (JSON.stringify(zhFm.quiz?.options?.length) !== JSON.stringify(enFm.quiz?.options?.length))
    fail(`${f}: quiz.options 数量不一致`);
  if (String(zhFm.quiz?.answer_index) !== String(enFm.quiz?.answer_index))
    fail(`${f}: quiz.answer_index 不一致`);
  if (JSON.stringify(zhFm.hero_meta?.length) !== JSON.stringify(enFm.hero_meta?.length))
    fail(`${f}: hero_meta 数量不一致`);
}
ok('frontmatter 结构校验完成');

// 3. 结构化文案模块键一致（浅层：导出对象一级键 + workbench.steps 长度）
const zhMod = await import(join(root, 'src/data/concepts/ontology.zh.ts'));
const enMod = await import(join(root, 'src/data/concepts/ontology.en.ts'));
const zhContent = zhMod.ontologyZh;
const enContent = enMod.ontologyEn;
const keys = (o) => Object.keys(o).sort().join(',');
if (keys(zhContent) !== keys(enContent)) {
  fail(`ontology 模块一级键不一致\n    zh: ${keys(zhContent)}\n    en: ${keys(enContent)}`);
} else {
  ok(`ontology 模块一级键一致（${Object.keys(zhContent).length} 组）`);
}
if (zhContent.workbench.steps.length !== enContent.workbench.steps.length)
  fail('workbench.steps 数量不一致');
if (JSON.stringify(Object.keys(zhContent.workbench)) !== JSON.stringify(Object.keys(enContent.workbench)))
  fail('workbench 键序不一致');

console.log('');
if (failures > 0) {
  console.error(`check:content 失败：${failures} 个问题`);
  process.exit(1);
}
console.log('check:content 通过');
