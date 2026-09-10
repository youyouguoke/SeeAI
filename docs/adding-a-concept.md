# SeeAI · 新增概念操作手册

> 目标：新增一个标准型 AI 概念 = **1 份 ConceptSpec（zh/en）+ 2 份 MDX + 可选 Demo 插件**，
> `npm run build` 出页，**零 Engine 组件改动**。
> 已验证样例：`ontology`（本仓库的第一个 Concept）。

---

## 0. 心智模型

```
Concept Learning Engine（src/engine/）
│
├── 教学骨架（概念无关，怎么教）
│   ├── ConceptPage.astro     认知叙事顺序的组装器
│   ├── DemoSlot.astro        Demo 插件分发（唯一注册点）
│   └── components/           Hero / IdeaSection / Definition / Scenario /
│                             Misconceptions / Quiz / FurtherLearning
│
└── Demo 插件（概念专属，怎么让用户"看见"概念工作）
    └── demos/<concept>/      核心交互机制，Ontology 已注册一个实例

ConceptSpec（src/concepts/<concept>/content.{zh,en}.ts）
└── 教什么：所有文案、构件、场景、误区、Demo payload（TS 编译器强制双语键一致）

MDX（src/content/concepts/{zh,en}/<slug>.mdx）
└── frontmatter（title/slug/quiz/next_concept 等 meta）+ 深度散文
```

**边界**：Engine 统一教学骨架，**不统一 Demo 机制**。每个概念的核心交互
（Ontology=语义关系图、Embedding=向量空间、RAG=检索→生成）在自己的插件里实现。

---

## 1. 新增概念 checklist

### 1.1 内容模块（必做）

新建 `src/concepts/<slug>/content.zh.ts` 与 `content.en.ts`：

```ts
import type { ConceptSpec } from '../../engine/types';

export const spec: ConceptSpec = {
  id: '<slug>',
  demo: { type: '<slug>' /* 或复用已注册插件 */, payload: { /* 插件数据，插件内 narrow */ } },
  nav?: [{ id, label }],              // 页内锚点导航（可选）
  idea:        { label, title, questions[] },
  definition:  { eyebrow, title, quote, compare{a,b}, components_label, components[], contrast? },
  enterprise?: { ... },               // Part 2 企业语义平台（可选，EnterprisePlatform 组件）
  caseStudy?:  { ... },               // Part 4 商业案例研究（可选，CaseStudy 组件）
  gallery?:    { ... },               // Part 5 场景集（可选，ScenarioGallery 组件，带证据等级）
  scenario:    { eyebrow, title, intro, levels[], takeaway_title, takeaway_body },
  misconceptions: { ..., cost?: {...} }, // Part 6 批判思考；cost 为可选扩展
  further:     { eyebrow, back_home, review_label },
};
```

- `contrast`、`components[].layer` 为可选——不用就不写。
- zh/en 文件**顶层键必须一致**（`npm run check:content` 门禁强制）。

### 1.2 MDX（必做）

新建 `src/content/concepts/zh/<slug>.mdx` 与 `en/<slug>.mdx`：

```mdx
---
title: '…'
slug: '<slug>'
locale: 'zh'
order: 2
draft: false
concept_label: '…'
reading_time: '…'
est_minutes: …
summary: '…（meta description）'
teaser: '…'
teaser_emphasis: '…'
hero_meta: ['…', '…', '…']
quiz:
  eyebrow: '…'
  badge: '…'
  scenario: '…'
  question: '…'
  options: ['…', '…', '…']
  answer_index: 0
  feedbacks: ['…', '…', '…']
  correct_title: '…'
  wrong_title: '…'
next_concept: '…'
---

正文散文（渲染在 Mental Model 区块内）。
```

### 1.3 Demo 插件（核心交互无法由骨架表达时）

1. 新建 `src/engine/demos/<slug>/<Slug>Demo.astro`：接收 `{ spec, locale }`，
   用 `spec.demo.payload as YourPayload` narrow 后渲染交互。
2. 在 `src/engine/DemoSlot.astro` 注册表加一行 `{ <slug>: <Slug>Demo }`。
3. 概念专属类型放 `src/concepts/<slug>/types.ts`；静态模拟数据放
   `src/concepts/<slug>/demo-data.json`（插件自行 import）。

> 若概念的交互恰好与已注册插件同构（如另一个"批准流"），可直接复用其
> `demo.type`，跳过 1.3 的 1–2 步。

---

## 2. 验证

```bash
npm run check:content   # 双语一致性门禁（会扫 src/concepts/*/）
npx astro check         # 类型检查
npm run build           # 产物含 /zh/<slug>/ /en/<slug>/ 与 sitemap
```

本地预览后检查：双语内容、Quiz 反馈、Demo 交互、语言切换 localStorage 记忆。

## 3. 上线

```bash
source /root/.cloudflare_env
npx wrangler pages deploy dist --project-name=seeai --branch=main
```

---

**文件地图**

| 路径 | 角色 |
| --- | --- |
| `src/engine/` | 教学骨架（概念无关） |
| `src/concepts/<slug>/` | 该概念的 ConceptSpec + 专属类型 + Demo 数据 |
| `src/content/concepts/{zh,en}/` | frontmatter + 深度散文 |
| `src/pages/[locale]/[concept].astro` | 唯一概念路由（新增概念不用改） |
