# SeeAI MVP 技术设计 + Kimi Code 开发任务书 v1.1

**项目：** SeeAI
**Domain：** seeai.site
**Tagline：** Understand AI by Seeing It in Action.
**中文：** 通过看 AI 如何工作，真正理解 AI。
**版本：** v1.1
**状态：** 开发前最终技术规格

---

# 1. 本版本相对于 v1.0 的关键修订

本版本正式加入上一轮评审提出的所有关键问题。

## 1.1 新增：Sprint 3 内容验证

不再等到 Sprint 7 才第一次测试。

Sprint 3 完成静态内容后，立即邀请 **2–3 名不了解 Ontology 的真实用户**进行低保真 / 纸面测试。

目标不是测试 UI，而是验证：

> **“Product A 成本上涨”这个故事本身是否容易理解、是否有代入感、是否能够自然引出 Ontology。**

---

## 1.2 新增：双语内容同步规则

`zh.mdx` 和 `en.mdx` 必须被视为：

> **一个 Concept 的两个语言版本**

任何内容修改必须同时检查：

```text
zh.mdx
en.mdx
```

内容 PR 不允许只修改其中一个语言版本后直接合并。

---

## 1.3 明确根路径 `/`

`/` **不是第三个首页版本，也不是独立内容页面。**

它只承担：

> **语言入口 / Language Gateway**

页面内容极简：

```text
SeeAI

Understand AI by Seeing It in Action.

[ 中文 ]
[ English ]
```

同时提供：

> Continue in your preferred language.

中文：

> 请选择语言继续。

如果浏览器语言可以识别，则可以提供推荐：

```text
Your browser language appears to be Chinese.

[ Continue in Chinese ]
```

但：

**不得自动强制跳转。**

---

## 1.4 Analytics 改为 Cloudflare Web Analytics

MVP 不使用自建 Umami。

原因：

Umami 自建部署会引入数据库和额外基础设施，与 MVP：

> Zero Database / Zero Backend

原则不一致。

MVP 使用：

> **Cloudflare Web Analytics**

因为 SeeAI 最终部署在 Cloudflare Pages。

对于自定义学习行为事件，如果 Cloudflare Web Analytics 不提供足够能力，则建立一个轻量：

```text
analytics.ts
```

抽象层。

第一阶段只保证：

```text
page_view
```

以及必要的学习行为事件可以被替换/扩展。

**MVP 不自建 Analytics Server。**

---

# 2. 产品目标

SeeAI 不是：

* AI 新闻站
* AI Wiki
* AI 工具目录
* AI Chat
* AI 内容农场
* SEO 内容矩阵

SeeAI 是：

> **通过真实问题 + Before/After + 交互式 Demo，让用户真正理解 AI 概念。**

MVP 只验证：

> 一个完全不了解 Ontology 的用户，第一次访问 SeeAI 后，能否在 3–5 分钟内通过 Demo 理解 Ontology 的核心价值。

---

# 3. 核心产品原则

## Principle 1

> Don't build more. Explain better.

## Principle 2

> Show the difference.

核心表达：

```text
Without X
     ↓
Why?
     ↓
With X
```

## Principle 3

> Validate understanding before expanding.

## Principle 4

> Copy the teaching method, not the articles.

---

# 4. 技术栈

| 层              | 技术                        |
| -------------- | ------------------------- |
| Framework      | Astro                     |
| Language       | TypeScript                |
| Styling        | Tailwind CSS              |
| Content        | MDX                       |
| Content Schema | Astro Content Collections |
| Interactive    | React Islands             |
| Analytics      | Cloudflare Web Analytics  |
| Deployment     | Cloudflare Pages          |
| Database       | 无                         |
| Backend        | 无                         |
| CMS            | 无                         |
| Graph DB       | 无                         |
| LLM            | 无                         |
| Authentication | 无                         |

---

# 5. 架构原则

MVP 架构：

```text
Astro
 │
 ├── Static Content
 │      ↓
 │     MDX
 │
 ├── Interactive Demo
 │      ↓
 │   React Island
 │
 └── Analytics
        ↓
 Cloudflare Web Analytics
```

禁止：

```text
Browser
   ↓
API Server
   ↓
Database
```

MVP 不需要这条链路。

---

# 6. 路由设计

正式路由：

```text
/
 /zh/
 /en/

/zh/ontology
/en/ontology
```

未来页面：

```text
/zh/...
/en/...
```

---

# 7. 根路径 `/` 的职责

这是本版本新增的明确规则。

## `/` = Language Gateway

不重复 `/zh/` 或 `/en/` 的完整首页内容。

内容：

```text
SeeAI

Understand AI by Seeing It in Action.

请选择语言继续

[ 中文 ]
[ English ]
```

英文：

```text
SeeAI

Understand AI by Seeing It in Action.

Choose your language.

[ 中文 ]
[ English ]
```

---

## 浏览器语言

允许根据：

```text
navigator.language
```

显示推荐。

例如：

```text
Your browser language appears to be Chinese.

[ Continue in Chinese ]
```

但：

> **禁止自动重定向。**

用户必须主动点击。

---

## SEO

`/` 设置：

```html
<meta name="robots" content="noindex">
```

并且：

```text
canonical
```

不指向 `/zh/` 或 `/en/`。

原因：

`/` 是语言入口，不是内容页面。

这样避免：

```text
/
 /zh/
 /en/
```

产生重复首页内容。

---

# 8. Homepage

正式首页：

```text
/zh/
/en/
```

结构：

```text
Hero
 ↓
SEE THE PROBLEM
 ↓
SEE THE DIFFERENCE
 ↓
UNDERSTAND THE CONCEPT
 ↓
Featured Concept
 ↓
Footer
```

---

# 9. Homepage 文案

## English

```text
SeeAI

Understand AI by Seeing It in Action.

Complex AI concepts explained through
real-world scenarios and interactive demos.

[ Explore Ontology ]
```

## 中文

```text
SeeAI

通过看 AI 如何工作，真正理解 AI。

用真实场景和交互式 Demo，
把复杂的 AI 概念讲明白。

[ 探索 Ontology ]
```

---

# 10. 项目结构

```text
seeai/
│
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── og/
│
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── LanguageSwitch.astro
│   │   ├── ConceptCard.astro
│   │   ├── ScenarioCard.astro
│   │   │
│   │   └── demo/
│   │       ├── OntologyDemo.tsx
│   │       ├── DemoQuestion.tsx
│   │       ├── WithoutOntology.tsx
│   │       ├── WithOntology.tsx
│   │       ├── RelationshipGraph.tsx
│   │       ├── ReasoningSteps.tsx
│   │       ├── DemoResult.tsx
│   │       └── DemoComplete.tsx
│   │
│   ├── content/
│   │   ├── config.ts
│   │   └── concepts/
│   │       └── ontology/
│   │           ├── zh.mdx
│   │           └── en.mdx
│   │
│   ├── data/
│   │   └── demos/
│   │       └── ontology.ts
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── ConceptLayout.astro
│   │
│   ├── lib/
│   │   ├── i18n.ts
│   │   ├── analytics.ts
│   │   └── seo.ts
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   │
│   │   ├── zh/
│   │   │   ├── index.astro
│   │   │   └── ontology/
│   │   │       └── index.astro
│   │   │
│   │   └── en/
│   │       ├── index.astro
│   │       └── ontology/
│   │           └── index.astro
│   │
│   └── styles/
│       └── global.css
│
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

### 特别说明

MVP 阶段：

**不要创建：**

```text
ontology-vs-knowledge-graph/
```

也不要预建：

```text
why-enterprise-ai-needs-ontology/
ontology-example/
```

这些页面只有在：

> 内容真正产生自然需求

后才创建。

---

# 11. Ontology 页面

URL：

```text
/zh/ontology
/en/ontology
```

结构：

```text
Hero
 ↓
Core Demo
 ↓
That’s the Idea
 ↓
Deep Dive
 ↓
Enterprise Scenario
 ↓
Common Misconceptions
 ↓
Quick Check
 ↓
Further Learning
```

---

# 12. Core Demo

目标时间：

> 3–5 分钟

状态：

```text
QUESTION
 ↓
WITHOUT_ONTOLOGY
 ↓
PROBLEM
 ↓
WITH_ONTOLOGY
 ↓
REASONING
 ↓
RESULT
 ↓
COMPLETE
```

---

# 13. 核心问题

```text
Why did Product A’s cost increase?
```

中文：

```text
为什么 Product A 的成本上涨了？
```

---

# 14. Without Ontology

展示：

```text
PLM
ERP
SRM
QMS
Certification
```

AI：

```text
I found the data.

But I need more context.
```

然后：

```text
Which Product?
Which BOM?
Which Part?
Which Supplier?
Which Cost?
```

---

# 15. Problem

核心：

```text
The data exists.

But the relationships are missing.
```

中文：

```text
数据存在。

但业务关系缺失。
```

进一步解释：

> 问题不是企业没有数据，而是这些数据之间的业务语义和关系没有被 AI 以结构化方式理解。

---

# 16. With Ontology

```text
Product A
     │
  contains
     ↓
Part 001
     │
 supplied by
     ↓
Supplier X
     │
 has price
     ↓
$23.60
```

动画：

```text
Product A
   ↓
Part 001
   ↓
Supplier X
   ↓
$23.60
```

---

# 17. Reasoning Visualization

只展示：

> User-facing business reasoning path

禁止展示真实：

> LLM Chain-of-Thought

步骤：

```text
01 Identify Product A

02 Find its BOM

03 Find high-cost Parts

04 Identify Suppliers

05 Compare historical prices
```

---

# 18. Result

```text
Product A

BOM Cost
$435.55

Increase
+14.2%
```

原因：

```text
Supplier price increase     3.4%
Specification change        2.1%
Certification cost          1.8%
```

最后：

```text
Understand
     ↓
Reason
     ↓
Decide
     ↓
Act
```

---

# 19. Deep Dive

Deep Dive 是 Core Demo 后的可选学习路径。

目标：

> 额外 3–5 分钟。

内容：

```text
What is Ontology?
 ↓
Enterprise Scenario
 ↓
Common Misconceptions
 ↓
Quick Check
 ↓
Further Learning
```

---

# 20. Ontology 定义

英文：

> An Ontology describes the important things in a business, how they relate to each other, and what can happen to them.

中文：

> Ontology 描述企业世界中的重要对象、它们之间的关系，以及这些对象可以发生什么业务动作。

模型：

```text
Objects
Relationships
Properties
Actions
```

---

# 21. Enterprise Scenario

```text
Product
 ↓
BOM
 ↓
Part
 ↓
Supplier
 ↓
Cost
 ↓
Certification
```

用户可以：

* Hover
* Click

查看简短解释。

---

# 22. Common Misconceptions

### 01

```text
Ontology = Database
```

结果：

```text
No.
```

---

### 02

```text
Ontology = Knowledge Graph
```

结果：

```text
Related, but not identical.
```

---

### 03

```text
Ontology replaces ERP / PLM / CRM
```

结果：

```text
No.
```

---

# 23. Quick Check

问题：

> What is the core value of an Ontology?

```text
A. Store more data

B. Help AI understand business
   objects, relationships and actions

C. Replace enterprise databases

D. Generate dashboards
```

正确：

```text
B
```

---

# 24. Content Schema

```text
Concept
├── id
├── slug
├── title
├── locale
├── summary
├── category
├── difficulty
├── problem
├── without_x
├── why
├── definition
├── with_x
├── scenario
├── demo_id
├── misconceptions[]
├── quiz
├── related_concepts[]
├── comparison_concepts[]
├── prerequisite_concepts[]
├── further_learning[]
├── seo
└── published_at
```

---

# 25. 双语内容规则

这是 MVP 的强制规则。

一个 Concept：

```text
ontology
```

对应：

```text
zh.mdx
en.mdx
```

二者必须保持：

```text
same concept_id
same slug
same demo_id
same quiz structure
same correct answer
same conceptual structure
```

但：

> 英文允许自然改写，不要求逐句翻译。

---

# 26. Content PR 规则

任何内容修改都必须检查：

```text
zh.mdx
en.mdx
```

如果修改了：

```text
problem
definition
scenario
quiz
misconception
further_learning
```

必须同步检查另一语言版本。

---

## PR Checklist

每个 Content PR 必须包含：

```text
[ ] zh content reviewed
[ ] en content reviewed
[ ] same core concept
[ ] same demo
[ ] same quiz answer
[ ] same learning outcome
```

---

# 27. 双语一致性检查

建立：

```text
scripts/check-content.ts
```

至少检查：

```text
concept_id
slug
demo_id
quiz.answer
related concept IDs
```

如果不一致：

```text
npm run check:content
```

必须失败。

---

# 28. Demo Data

```typescript
{
  id: "ontology-cost-analysis",

  conceptId: "ontology",

  scenario: "product-cost",

  objects: [],

  relationships: [],

  reasoningSteps: [],

  result: {}
}
```

数据全部静态。

---

# 29. Demo State Machine

```typescript
type DemoState =
  | "IDLE"
  | "QUESTION"
  | "WITHOUT_ONTOLOGY"
  | "PROBLEM"
  | "WITH_ONTOLOGY"
  | "REASONING"
  | "RESULT"
  | "COMPLETE";
```

要求：

* Back
* Restart
* Mobile
* Skip animation
* 不阻塞用户
* 状态明确

---

# 30. Analytics

MVP 使用：

> Cloudflare Web Analytics

不部署：

```text
Analytics Server
Database
Umami self-hosted
```

---

# 31. Analytics Adapter

所有自定义事件通过：

```typescript
track(
  eventName,
  properties
)
```

统一封装。

例如：

```typescript
track("demo_start", {
  locale,
  concept_id
});
```

这样未来如果更换：

```text
Cloudflare
Plausible
Umami Cloud
其他 analytics
```

不需要修改业务组件。

---

# 32. MVP Analytics

核心事件：

```text
page_view

language_switch

demo_start

demo_step_view

demo_step_complete

demo_complete

deep_dive_start

further_learning_click

concept_click

quiz_start

quiz_answer

quiz_complete
```

公共属性：

```text
locale
page
concept_id
```

---

# 33. Sprint 1 — 基础架构

目标：

> 让项目能够运行。

任务：

```text
[ ] 初始化 Astro
[ ] TypeScript strict
[ ] Tailwind
[ ] MDX
[ ] Content Collections
[ ] i18n
[ ] BaseLayout
[ ] Header
[ ] Footer
[ ] LanguageSwitch
[ ] SEO utilities
[ ] Analytics adapter
[ ] / Language Gateway
```

验收：

```text
/
 /zh/
/en/
/zh/ontology
/en/ontology
```

全部可以访问。

---

# 34. Sprint 1 验收新增规则

必须确认：

### Root

```text
/
```

只显示：

> Language Gateway

### `/zh/`

中文完整首页。

### `/en/`

英文完整首页。

禁止：

```text
/
```

复制完整首页。

---

# 35. Sprint 2 — Homepage

完成：

```text
Hero
Problem
Difference
Concept
Featured Ontology
CTA
Footer
```

必须：

```text
Desktop
Mobile
zh
en
```

均正常。

---

# 36. Sprint 3 — Ontology 内容

完成：

```text
Problem
Without X
Why
Definition
With X
Scenario
Misconceptions
Quiz
Further Learning
```

并完成：

```text
zh.mdx
en.mdx
```

---

# 37. Sprint 3 的新增硬性 Gate

这是本版本最重要的新增内容。

## Content Validation Gate

Sprint 3 完成后：

> **暂停开发 Sprint 4。**

先找：

> 2–3 名完全不了解 Ontology 的真实用户。

---

# 38. Sprint 3 低保真测试

不要求 Demo 已开发完成。

可以使用：

```text
静态页面
纸面流程
Figma
简单 HTML
甚至文案稿
```

测试重点：

> 内容叙事，而不是 UI。

---

# 39. 测试流程

给用户：

> “请阅读 SeeAI 的 Ontology 页面，然后告诉我你认为 Ontology 是什么。”

不要提前解释答案。

观察：

```text
用户是否理解 Product A 的问题？

用户是否理解 Without Ontology？

用户是否理解为什么数据存在但 AI 仍然缺少上下文？

用户是否理解 With Ontology？

用户能否说出 Ontology 的核心价值？
```

---

# 40. Sprint 3 测试记录

每位用户记录：

```text
User
Locale
Completion
Confusion Point
Core Understanding
Own-word Explanation
```

简单评分：

```text
1 = 完全不理解
2 = 理解很少
3 = 基本理解
4 = 理解清楚
5 = 可以解释给别人
```

---

# 41. Sprint 3 Gate 判定

如果：

```text
≥2/3 users
```

能够：

> 用自己的话大致解释 Ontology 的核心价值。

则：

```text
PASS
 ↓
Sprint 4
```

如果不能：

```text
FAIL
 ↓
修改内容
 ↓
重新测试
```

**不得直接进入 Sprint 4。**

---

# 42. 为什么 Sprint 3 要提前测试

因为：

```text
Content
 ↓
Demo
 ↓
UI
 ↓
Analytics
 ↓
SEO
```

如果内容故事本身错误：

> 后面的所有开发都是在错误基础上继续投资。

因此：

> **先验证故事，再开发交互。**

---

# 43. Sprint 4 — Core Demo

只有 Sprint 3 Gate PASS 后才开始。

完成：

```text
Question
Without Ontology
Problem
With Ontology
Relationships
Reasoning
Result
Complete
Restart
```

---

# 44. Sprint 5 — Deep Dive

完成：

```text
Deep Dive
Enterprise Scenario
Misconceptions
Quick Check
Further Learning
Related Concepts
```

---

# 45. Sprint 6 — SEO + Analytics

完成：

```text
Cloudflare Web Analytics
Custom events
SEO metadata
Canonical
hreflang
Sitemap
Robots
OG
Structured Data
```

注意：

**不要因为做 SEO 而新增大量页面。**

---

# 46. Sprint 7 — Final User Validation

至少：

> 5 名不了解 Ontology 的真实用户。

流程：

```text
Before
 ↓
Understanding 1–5
 ↓
Use SeeAI
 ↓
Core Demo
 ↓
Deep Dive
 ↓
Quiz
 ↓
After
 ↓
Understanding 1–5
 ↓
Own-word explanation
```

---

# 47. 最终验证指标

内部产品判断：

```text
Core Demo completion ≥ 4/5 users

Core Quiz correct ≥ 4/5 users

Self-rated understanding shows positive movement

≥4/5 users can broadly explain
Ontology in their own words
```

---

# 48. 两个验证 Gate

SeeAI MVP 不再只有一个最终 Gate。

## Gate 1 — Content Validation

发生在：

```text
Sprint 3
```

验证：

> 故事有没有讲通？

参与：

```text
2–3 users
```

---

## Gate 2 — MVP Validation

发生在：

```text
Sprint 7
```

验证：

> 完整产品有没有让用户真正理解？

参与：

```text
≥5 users
```

---

# 49. Gate 规则

```text
Sprint 3
   ↓
Content Gate
   │
   ├── FAIL → 修改内容 → 重测
   │
   └── PASS
        ↓
Sprint 4
        ↓
Sprint 5
        ↓
Sprint 6
        ↓
Sprint 7
        ↓
MVP Gate
   │
   ├── FAIL → 优化
   │
   └── PASS → Phase 2
```

---

# 50. MVP Non-goals

明确禁止：

```text
❌ Real LLM
❌ AI Chat
❌ Agent
❌ Graph Database
❌ Ontology Builder
❌ Headless CMS
❌ Login
❌ Community
❌ Comments
❌ Subscription
❌ Multi-Agent
❌ Programmatic SEO
❌ SEO content matrix
❌ AI Scenario Simulator
```

---

# 51. Phase 2

只有 MVP Gate PASS 后进入：

```text
Digital Employee
MCP
FDE
```

三个概念都必须复用同一教学方法：

```text
Problem
 ↓
Without X
 ↓
Why
 ↓
What
 ↓
With X
 ↓
Scenario
 ↓
Demo
 ↓
Misconceptions
 ↓
Quiz
```

---

# 52. Phase 3

建立：

```text
AI Concept Network
```

例如：

```text
AI
├── Agent
│   ├── MCP
│   ├── Memory
│   └── Tool
│
├── Data
│
├── Model
│
└── Enterprise AI
    ├── Ontology
    ├── Digital Employee
    └── FDE
```

继续使用：

```text
related_concepts
comparison_concepts
prerequisite_concepts
```

暂时不使用 Graph DB。

---

# 53. Phase 4

在产品验证成功以后，再考虑：

```text
Ontology Playground
AI Concept Explorer
Scenario Engine
```

核心原则：

> One Demo Engine + Multiple Scenarios

---

# 54. SEO 原则

MVP SEO：

```text
Real Content
     ↓
Natural Search Demand
     ↓
Useful Page
     ↓
SEO
```

而不是：

```text
Keyword
 ↓
Generate Page
 ↓
Generate 100 pages
```

---

# 55. 页面创建规则

一个页面只有满足以下条件才创建：

```text
[ ] 有真实学习价值
[ ] 有完整内容
[ ] 有独立搜索意图
[ ] 不只是已有内容换标题
[ ] 不只是为了关键词
```

因此：

```text
ontology-vs-knowledge-graph
```

在 MVP 阶段：

> 不创建。

等未来确实形成独立内容后再创建。

---

# 56. Kimi Code 开发纪律

Kimi Code 不得：

```text
自行增加产品功能
自行增加数据库
自行引入 CMS
自行引入 LLM
自行创建 Graph DB
自行创建 SEO 页面
自行改变 URL
自行改变 i18n 结构
```

如果发现：

> 某功能未来可能有用

先记录：

```text
TODO / Future
```

不要直接实现。

---

# 57. 每个 Sprint 的统一要求

完成代码后必须：

```text
npm run typecheck
npm run build
npm run check:content
```

如果项目尚未实现某个 script：

> 必须先补齐，而不是跳过。

---

# 58. PR 纪律

代码 PR：

```text
One logical change
```

Content PR：

```text
zh + en together
```

例如：

```text
feat(content): improve ontology explanation
```

必须检查：

```text
zh.mdx
en.mdx
```

---

# 59. README 必须记录

```text
Project purpose

Tech stack

Local development

Build

Content structure

i18n

Demo architecture

Analytics

Deployment

Content PR rules

MVP non-goals
```

---

# 60. 第一阶段最终目标

不是：

> 把网站做完。

而是：

```text
一个陌生用户
      ↓
看到一个真实问题
      ↓
看到 Without Ontology
      ↓
发现问题
      ↓
看到 With Ontology
      ↓
理解对象 + 关系 + 动作
      ↓
看到 AI 如何完成业务推理
      ↓
理解 Ontology 的价值
```

---

# 61. 最终产品判断

SeeAI MVP 最终只需要回答一个问题：

> **一个完全不了解 Ontology 的人，第一次打开 SeeAI，能不能在 3–5 分钟内通过 Demo 形成正确的核心认知，并在 5–10 分钟内完成一次完整学习？**

如果：

```text
YES
```

进入：

> Digital Employee

如果：

```text
NO
```

继续：

> Improve Ontology

直到验证成功之前：

```text
No content expansion
No feature expansion
No SEO expansion
No architecture expansion
```

---

# 62. 开发优先级

最终优先级严格按照：

```text
P0
内容叙事
 ↓
P0
Ontology Core Demo
 ↓
P0
Bilingual experience
 ↓
P1
Deep Dive
 ↓
P1
Analytics
 ↓
P1
SEO
 ↓
P2
Concept Network
 ↓
P3
Advanced interactive features
```

不要倒置。

---

# 63. 给 Kimi Code 的最终执行原则

> **Build the smallest system that can prove the learning experience.**

不要试图一次性把 SeeAI 做成完整 AI 学习平台。

第一阶段只做：

```text
SeeAI
   ↓
Ontology
   ↓
One real business problem
   ↓
One Before/After experience
   ↓
One interactive Demo
   ↓
One measurable learning outcome
```

**先证明方法有效，再规模化。**
