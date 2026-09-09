
# SeeAI 产品 PRD v1.1

**Product:** SeeAI
**Domain:** seeai.site
**Version:** v1.1
**Status:** Development Ready
**Phase:** Content Product MVP

---

# 1. 产品定义

## 1.1 品牌

**SeeAI**

## 1.2 Tagline

### English

> **Understand AI by Seeing It in Action.**

### 中文

> **通过看 AI 如何工作，真正理解 AI。**

---

# 2. 产品定位

SeeAI 是一个：

> **通过真实场景、Before / After 对比和交互式 Demo，帮助用户理解前沿 AI 概念的双语学习平台。**

核心不是：

> “告诉用户一个 AI 概念的定义。”

而是：

> **让用户看到这个概念解决了什么问题，以及它出现之后 AI 的行为发生了什么变化。**

---

# 3. 核心产品理念

```text
See the Problem
      ↓
See the Difference
      ↓
Understand the Concept
      ↓
Explore the Scenario
      ↓
Go Deeper
```

中文：

```text
看到问题
   ↓
看到变化
   ↓
理解概念
   ↓
体验场景
   ↓
继续探索
```

核心原则：

> **Don't just explain AI. Let people see it work.**

---

# 4. 目标用户

## 4.1 Primary Users

### 中文用户

* 企业 AI 从业者
* 产品经理
* 数字化转型人员
* 企业管理者
* AI 初学者
* 对 Enterprise AI 感兴趣的技术人员

### English Users

* AI Product Managers
* Enterprise AI practitioners
* Digital Transformation professionals
* Business leaders
* AI learners
* Enterprise architects

---

# 5. 双语策略

## 5.1 正式确定

**SeeAI 从 MVP 开始采用中英文双语。**

不是：

> 中文网站 + 英文标题

而是：

> **同一套产品内容，同时提供完整中文和英文版本。**

---

# 6. URL 语言结构

采用：

```text
/
 /zh/
 /en/
```

默认语言：

**根据浏览器语言自动推荐，不强制自动跳转。**

建议：

```text
seeai.site/
seeai.site/zh/
seeai.site/en/
```

核心页面：

```text
/zh/ontology
/en/ontology
```

---

# 7. 双语切换

Header：

```text
中文 | English
```

用户切换语言后：

```text
/zh/ontology
        ↕
/en/ontology
```

尽可能保持相同页面位置。

例如：

```text
English
Ontology
↓
中文
本体论
```

---

# 8. 双语内容原则

## 8.1 不是机械翻译

英文内容允许根据英文用户习惯重新组织表达。

但必须保持：

* 相同核心概念
* 相同 Demo
* 相同 Scenario
* 相同逻辑
* 相同 Quiz 答案

---

## 8.2 专业术语统一

建立术语表：

| 中文      | English                         |
| ------- | ------------------------------- |
| 本体论     | Ontology                        |
| 企业本体    | Enterprise Ontology             |
| 对象      | Object                          |
| 属性      | Property                        |
| 关系      | Relationship / Link             |
| 动作      | Action                          |
| 数字员工    | Digital Employee                |
| 模型上下文协议 | Model Context Protocol / MCP    |
| 现场解决工程师 | Forward Deployed Engineer / FDE |

所有模块统一使用术语表。

---

# 9. MVP 核心验收目标

第一阶段不是验证：

> “用户是否喜欢这个网站。”

而是验证：

> **用户能不能真正理解 Ontology。**

---

# 10. 两层时间目标

上一版“5–10 分钟看懂”和 11 个 Section 连续推进存在冲突。

因此正式拆成两个层级。

## Level 1：Core Demo

目标：

> **3–5 分钟完成。**

用户只需要理解：

```text
Problem
 ↓
Without Ontology
 ↓
Why it fails
 ↓
With Ontology
 ↓
AI Reasoning
 ↓
Result
```

完成后用户应该已经形成基本直觉。

---

## Level 2：Deep Dive

目标：

> **额外 3–5 分钟。**

包括：

* What is Ontology
* Enterprise Example
* Common Misconceptions
* Quiz
* Further Learning

因此：

```text
Core Demo
3–5 min
   +
Deep Dive
3–5 min
   =
完整学习路径
5–10 min
```

**5–10 分钟不再是“必须连续走完所有 Section”，而是完整学习路径的目标时长。**

---

# 11. Ontology 页面信息架构

重新划分为：

```text
┌──────────────────────────┐
│ Hero                     │
├──────────────────────────┤
│ Core Demo                │
│                          │
│ 1. Problem               │
│ 2. Without Ontology      │
│ 3. Why                   │
│ 4. With Ontology         │
│ 5. Reasoning             │
│ 6. Result                │
├──────────────────────────┤
│ Deep Dive                │
│                          │
│ 7. What is Ontology?     │
│ 8. Enterprise Scenario   │
│ 9. Common Misconceptions │
│ 10. Quick Check          │
│ 11. Further Learning     │
└──────────────────────────┘
```

---

# 12. Core Demo

## Demo Title

### English

> **See the Difference**

### 中文

> **看见区别**

副标题：

> Without Ontology vs With Ontology

---

# 13. Core Demo Step 1 — Problem

### English

> **Why did Product A's cost increase?**

### 中文

> **为什么 Product A 的成本上涨了？**

页面展示：

```text
PLM
ERP
SRM
QMS
Certification
```

用户点击：

```text
Ask AI
```

---

# 14. Core Demo Step 2 — Without Ontology

### English

> **Without Ontology**

### 中文

> **没有 Ontology**

展示多个孤立系统：

```text
PLM
ERP
SRM
QMS
```

AI：

```text
I found the data.

But I need more context.
```

中文：

```text
我找到了相关数据。

但我还需要更多业务上下文。
```

进一步显示：

```text
Which Product?
Which BOM?
Which Part?
Which Supplier?
Which Cost?
```

中文：

```text
哪个产品？
哪份 BOM？
哪个零件？
哪个供应商？
哪个成本？
```

---

# 15. Core Demo Step 3 — Why

这一部分不单独占一个长 Section。

改成 Demo 中的短解释状态。

### English

> **The data exists.
> The relationships are missing.**

### 中文

> **数据存在，但业务关系没有被 AI 理解。**

停留目标：

**20–30 秒。**

---

# 16. Core Demo Step 4 — With Ontology

### English

> **With Ontology**

### 中文

> **有了 Ontology**

展示：

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

用户开始看到：

> 数据不再是孤立的。

---

# 17. Core Demo Step 5 — Reasoning

### English

> **Watch AI follow the business relationships.**

### 中文

> **看看 AI 如何沿着业务关系寻找答案。**

显示 5 个步骤：

```text
1. Identify Product A
2. Find its BOM
3. Find high-cost Parts
4. Identify Suppliers
5. Compare historical prices
```

中文：

```text
1. 找到 Product A
2. 找到它的 BOM
3. 找到高成本零件
4. 找到对应供应商
5. 对比历史价格
```

---

# 18. Core Demo Step 6 — Result

显示：

```text
Product A

BOM Cost
$435.55

Increase
+14.2%
```

中文：

```text
Product A

BOM 成本
$435.55

上涨
+14.2%
```

主要原因：

```text
Supplier price increase    3.4%
Specification change       2.1%
Certification cost        1.8%
```

中文：

```text
供应商涨价                3.4%
规格变更                  2.1%
认证费用                  1.8%
```

---

# 19. Core Demo 完成

Demo 结束时立即出现：

### English

> **That's the idea.**

> Ontology gives AI a structured view of the business world — its objects, relationships, and actions.

### 中文

> **这就是 Ontology 的核心思想。**

> Ontology 让 AI 能够以结构化方式理解企业世界中的对象、关系和业务动作。

按钮：

```text
[ Understand It Deeper ]
```

中文：

```text
[ 深入理解 ]
```

---

# 20. Deep Dive — What is Ontology?

这一部分才正式进入概念解释。

### English

> An Ontology describes the important things in a business, how they relate to each other, and what can happen to them.

### 中文

> Ontology 描述企业世界中的重要对象、它们之间的关系，以及这些对象可以发生什么业务动作。

核心模型：

```text
Objects
   +
Relationships
   +
Properties
   +
Actions
```

---

# 21. Deep Dive — Enterprise Scenario

示例：

> Supplier Cost Increase

供应商：

```text
Supplier X
     ↓
supplies
     ↓
Part 001
     ↓
belongs to
     ↓
Product A
```

进一步：

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

---

# 22. Deep Dive — Common Misconceptions

至少三个。

### Myth 1

**Ontology = Database**

中文：

> Ontology 就是数据库。

答案：

> No.

Ontology 是对业务世界的语义表达，而不是简单的数据存储。

---

### Myth 2

**Ontology = Knowledge Graph**

中文：

> Ontology 就是 Knowledge Graph。

答案：

> They are related, but not identical.

---

### Myth 3

**Ontology replaces ERP / PLM / CRM**

中文：

> Ontology 会替代 ERP / PLM / CRM。

答案：

> No.

Ontology 位于现有企业系统之上，为 AI 提供统一的业务语义和关系视图。

---

# 23. Quick Check

### English

> What is the core value of an Ontology?

### 中文

> Ontology 最核心的价值是什么？

选项：

```text
A. Store more data
存储更多数据

B. Help AI understand business objects,
   relationships and actions
帮助 AI 理解业务对象、关系和动作

C. Replace enterprise databases
替代企业数据库

D. Generate dashboards
生成数据看板
```

正确答案：

**B**

---

# 24. Further Learning

只展示已经存在的内容。

例如：

```text
Ontology
    ↓
Ontology vs Knowledge Graph
    ↓
Semantic Layer
    ↓
Enterprise AI
```

未来：

```text
Ontology
   ↓
Digital Employee
   ↓
MCP
   ↓
FDE
```

---

# 25. Homepage

## Hero

### English

# SeeAI

## Understand AI by Seeing It in Action.

> Complex AI concepts explained through real-world scenarios and interactive demos.

CTA：

**Explore Ontology**

---

### 中文

# SeeAI

## 通过看 AI 如何工作，真正理解 AI。

> 用真实场景和交互式 Demo，把复杂的 AI 概念讲明白。

CTA：

**探索 Ontology**

---

# 26. Homepage 第二屏

```text
SEE THE PROBLEM

SEE THE DIFFERENCE

UNDERSTAND THE CONCEPT
```

中文：

```text
看到问题

看到变化

理解概念
```

---

# 27. Homepage Featured Concept

```text
FEATURED CONCEPT

ONTOLOGY

How does AI understand
an enterprise?

[ Explore ]
```

中文：

```text
精选概念

ONTOLOGY

AI 如何理解一个企业？

[ 开始探索 ]
```

---

# 28. 网站导航

Desktop：

```text
SeeAI

Concepts
Scenarios
About

中文 | English
```

Mobile：

```text
☰
```

---

# 29. Concept 内容模型

MVP 不直接引入 Headless CMS。

使用：

> **Astro Content Collections + MDX**

但数据模型按照未来 CMS 迁移标准设计。

---

# 30. Concept Schema

```text
Concept
├── id
├── slug
├── title
├── locale
├── summary
├── category
├── difficulty
│
├── problem
├── without_x
├── why
├── definition
├── with_x
├── scenario
│
├── demo_id
│
├── misconceptions[]
├── quiz
│
├── related_concepts[]
├── comparison_concepts[]
├── prerequisite_concepts[]
├── further_learning[]
│
├── seo
└── published_at
```

---

# 31. 双语 Content Schema

同一 Concept：

```text
ontology
```

拥有：

```text
ontology.zh.mdx
ontology.en.mdx
```

或者：

```text
concepts/
  ontology/
    zh.mdx
    en.mdx
```

要求：

```text
same concept ID
same demo ID
different locale
```

---

# 32. Scenario Schema

```text
Scenario
├── id
├── concept_id
├── title
├── description
├── locale
├── problem
├── objects[]
├── relationships[]
├── reasoning_steps[]
├── result
└── actions[]
```

---

# 33. Demo JSON

示例：

```json
{
  "id": "ontology-cost-increase",
  "conceptId": "ontology",
  "scenario": "supplier-cost-increase",
  "objects": [
    {
      "id": "product-a",
      "type": "Product",
      "name": "Product A"
    },
    {
      "id": "part-001",
      "type": "Part",
      "name": "Part 001"
    },
    {
      "id": "supplier-x",
      "type": "Supplier",
      "name": "Supplier X"
    }
  ],
  "relationships": [
    {
      "from": "product-a",
      "type": "contains",
      "to": "part-001"
    },
    {
      "from": "part-001",
      "type": "supplied_by",
      "to": "supplier-x"
    }
  ],
  "reasoningSteps": [
    "identify-product",
    "find-bom",
    "find-high-cost-part",
    "find-supplier",
    "compare-price"
  ]
}
```

---

# 34. Demo State Machine

```text
IDLE
 ↓
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

Deep Dive 不属于 Demo State Machine。

这样可以明确解决：

> “教程太长导致 Demo 主线过重”

的问题。

---

# 35. 技术栈

## Frontend

**Astro**

原因：

* 内容型网站性能优秀
* SEO 友好
* 静态页面简单
* 交互组件可以局部 hydration
* 非常适合 Concept + Demo 架构

---

## Language

**TypeScript**

---

## Styling

**Tailwind CSS**

---

## Content

**MDX + Astro Content Collections**

第一阶段不使用 Headless CMS。

---

## Interactive Demo

建议：

**React Islands / Astro Islands**

仅 Demo 使用客户端交互。

页面其他部分尽量静态渲染。

---

## Analytics

MVP 采用：

**Umami**

或者其他轻量 privacy-friendly analytics。

具体实现保持 Analytics Adapter：

```text
track(eventName, properties)
```

避免以后更换统计系统时修改业务代码。

---

# 36. Deployment

第一版采用：

> **Cloudflare Pages**

部署：

```text
GitHub
   ↓
Build
   ↓
Cloudflare Pages
   ↓
seeai.site
```

MVP 不需要服务器。

---

# 37. 数据层

MVP：

**不需要数据库。**

内容：

```text
MDX
+
JSON
```

未来如果需要：

```text
D1
+
Headless CMS
```

再加入。

---

# 38. 为什么 MVP 不上 CMS

当前只有：

```text
Ontology
```

一个核心 Concept。

此时引入完整 CMS：

* 增加部署复杂度
* 增加权限体系
* 增加 API
* 增加数据维护成本

收益很低。

但 Schema 从第一天按照 CMS 思路设计。

这样未来：

```text
MDX
 ↓
Headless CMS
```

迁移成本可控。

---

# 39. SEO

## MVP

只做基础 SEO：

* Title
* Description
* Canonical
* hreflang
* Open Graph
* Sitemap
* Robots
* Structured Data

---

# 40. 双语 SEO

必须使用：

```html
hreflang
```

建立：

```text
/en/ontology
/zh/ontology
```

互相指向。

例如：

```text
English
hreflang=en

中文
hreflang=zh-CN
```

---

# 41. SEO 页面原则

不建立 Keyword Matrix。

只有核心内容自然产生页面。

例如：

```text
/ontology
/ontology-vs-knowledge-graph
/why-enterprise-ai-needs-ontology
/ontology-example
```

每一个页面必须有真实内容价值。

---

# 42. Analytics Events

统一：

```text
page_view

language_switch

demo_start

demo_step_view

demo_step_complete

demo_complete

deep_dive_start

scroll_depth

further_learning_click

concept_click

quiz_start

quiz_answer

quiz_complete
```

所有事件增加：

```text
locale
page
concept_id
```

例如：

```json
{
  "event": "demo_complete",
  "locale": "en",
  "concept_id": "ontology"
}
```

---

# 43. Demo 指标

核心：

### Demo Completion Rate

```text
demo_complete
----------------
demo_start
```

---

### Step Drop-off

```text
Step 1
Step 2
Step 3
Step 4
Step 5
Step 6
```

观察哪个步骤流失最多。

---

# 44. 内容指标

记录：

* Average Engagement Time
* Scroll Depth
* Deep Dive Start Rate
* Further Learning CTR
* Concept Navigation Rate

---

# 45. 理解度指标

不再使用：

> “理解率从 20% 提升到 75%”

这种当前阶段无法可靠证明的 KPI。

改为：

## Understanding Score

用户完成 Quiz 后：

```text
1 = 完全不了解
2 = 有一些印象
3 = 基本理解
4 = 能解释核心概念
5 = 能用自己的话解释并举例
```

同时记录：

> **用户自己的解释。**

---

# 46. MVP 用户测试

最低：

# 5 名真实用户

要求：

* 完全不了解 Ontology
* 不提前阅读答案
* 独立完成体验

---

# 47. 测试流程

每位用户：

### Step 1

记录进入页面前的自评：

> “你对 Ontology 的了解程度是多少？”

1–5 分。

---

### Step 2

独立使用 SeeAI。

不提供解释。

---

### Step 3

记录：

* 是否完成 Core Demo
* 完成时间
* 中途退出位置
* 是否进入 Deep Dive
* Quiz 答案

---

### Step 4

完成后再次回答：

> “现在你觉得自己理解 Ontology 到什么程度？”

1–5 分。

---

### Step 5

让用户用自己的话解释：

> “你会怎么向一个同事解释 Ontology？”

---

# 48. MVP 验收不采用简单 PASS / FAIL

建立四项观察：

| 指标           | 目标             |
| ------------ | -------------- |
| Core Demo 完成 | ≥ 4/5          |
| 核心 Quiz 正确   | ≥ 4/5          |
| 理解自评         | 有明显正向变化        |
| 能用自己的话解释     | ≥ 4/5 基本说清核心思想 |

这里的数字是**内部产品迭代参考阈值**，不是统计学结论。

---

# 49. 用户测试重点

不要只问：

> “你喜欢这个网站吗？”

重点问：

### Q1

> 你觉得 Ontology 是什么？

### Q2

> 为什么没有 Ontology 时 AI 会遇到问题？

### Q3

> Demo 中哪个部分让你真正理解了？

### Q4

> 哪一步最难理解？

### Q5

> 你会怎么向同事解释它？

---

# 50. MVP Definition of Done

## Product

* [ ] Homepage
* [ ] 中文版本
* [ ] English version
* [ ] Language Switch
* [ ] Ontology Concept Page
* [ ] Core Demo
* [ ] Deep Dive
* [ ] Quiz
* [ ] Further Learning

---

## Demo

* [ ] Without Ontology
* [ ] With Ontology
* [ ] Relationship Visualization
* [ ] Reasoning Visualization
* [ ] Result
* [ ] Complete State
* [ ] Mobile interaction

---

## Content

* [ ] Problem
* [ ] Without X
* [ ] Why
* [ ] What is X
* [ ] With X
* [ ] Scenario
* [ ] Misconceptions
* [ ] Quiz
* [ ] Further Learning

---

## Bilingual

* [ ] zh
* [ ] en
* [ ] Language Switch
* [ ] hreflang
* [ ] Bilingual metadata
* [ ] Bilingual navigation

---

## Analytics

* [ ] page_view
* [ ] demo_start
* [ ] demo_step_complete
* [ ] demo_complete
* [ ] deep_dive_start
* [ ] further_learning_click
* [ ] concept_click
* [ ] quiz_answer

---

## Testing

* [ ] 至少 5 名真实用户
* [ ] 记录 Core Demo 完成率
* [ ] 记录完成时间
* [ ] 记录 Drop-off
* [ ] 记录 Quiz
* [ ] 记录理解度 1–5
* [ ] 收集用户自己的解释

---

# 51. MVP 明确不做

```text
❌ Real LLM
❌ AI Chat
❌ Agent
❌ Graph Database
❌ Ontology Builder
❌ Headless CMS
❌ User Login
❌ Community
❌ Comments
❌ Subscription
❌ Multi-Agent
❌ Large SEO Matrix
❌ Programmatic SEO
```

---

# 52. Phase 2

验证 Ontology 成功后：

## Digital Employee

```text
Traditional Employee
       ↓
Repetitive Digital Work
       ↓
AI Agent
       ↓
Digital Employee
```

## MCP

```text
AI
 ↓
Many Tool Integrations
 ↓
High Integration Cost
 ↓
MCP
 ↓
Standardized Tool Connection
```

## FDE

```text
Standard Software
 ↓
Enterprise AI
 ↓
Highly Non-standard Business
 ↓
FDE
```

路线顺序保持：

> Ontology → Digital Employee → MCP → FDE。

---

# 53. Phase 3

建立：

# AI Concept Network

但仍然：

> **CMS Relations First**

而不是：

> Graph Database First

概念关系：

```text
AI
│
├── Agent
│   ├── MCP
│   ├── Memory
│   └── Tool
│
├── Data
│
└── Model
       ↓
Enterprise AI
       │
       ├── Ontology
       ├── Digital Employee
       └── FDE
```

---

# 54. Phase 4

当内容体系和用户行为验证后：

### Ontology Playground

### AI Concept Explorer

### Scenario Engine

其中 Scenario Engine 的原则：

> **One Demo Engine + Multiple Scenarios**

而不是重新包装成一个独立的“AI Scenario Simulator”。

---

# 55. 第一阶段开发顺序

## Sprint 1

### 基础框架

* Astro
* TypeScript
* Tailwind
* i18n
* MDX
* Routing
* Layout
* Header
* Footer

---

## Sprint 2

### Homepage

* Hero
* Product Method
* Featured Ontology
* CTA
* Responsive

---

## Sprint 3

### Ontology Content

* Problem
* Without Ontology
* What is Ontology
* Scenario
* Misconceptions

---

## Sprint 4

### Ontology Demo

* State Machine
* Data Model
* Relationship Visualization
* Reasoning Animation
* Result
* Complete

---

## Sprint 5

### Deep Dive

* Quiz
* Further Learning
* Concept Relations

---

## Sprint 6

### Analytics + SEO

* Events
* Scroll
* Demo completion
* hreflang
* Sitemap
* Metadata

---

## Sprint 7

### User Testing

至少：

**5 人**

然后根据真实反馈迭代。

---

# 56. 开发交接原则

交给 Kimi Code 时：

> **不要让 AI 自己决定产品架构。**

PRD 已经确定：

```text
Framework
Astro

Language
TypeScript

Styling
Tailwind

Content
MDX

Architecture
Static-first

Interactive
Astro Islands / React

Deployment
Cloudflare Pages

Database
None in MVP

CMS
None in MVP

LLM
None in MVP
```

Kimi Code 的任务是：

> **实现已经确定的产品，而不是重新设计产品。**

---

# 57. 最终 MVP 产品结构

```text
                     SeeAI
                       │
          Understand AI by Seeing
                  It in Action
                       │
              ┌────────┴────────┐
              ↓                 ↓
          Concepts           Scenarios
              │
          Ontology
              │
       ┌──────┴──────┐
       ↓             ↓
   Core Demo      Deep Dive
       │             │
       ↓             ├── Definition
   Problem           ├── Scenario
       ↓             ├── Misconceptions
   Without X         ├── Quiz
       ↓             └── Further Learning
   With X
       ↓
   Reasoning
       ↓
    Result
       ↓
  Understanding
```

---

# 58. 产品北极星

SeeAI 不追求：

> **让用户读更多。**

而追求：

> **让用户在更短时间内真正理解一个复杂 AI 概念。**

因此：

# SeeAI = See → Understand → Explore

而不是：

# Read → Read → Read

---

# 59. MVP 最终验收问题

上线前必须回答：

> **一个完全不了解 Ontology 的人，第一次打开 SeeAI，能不能在 3–5 分钟内通过 Demo 形成正确的核心认知，并在 5–10 分钟内完成一次完整学习？**

如果：

**Yes → 开始复制到 Digital Employee。**

如果：

**No → 继续优化 Ontology。**

在 Ontology 没有验证之前：

> **不扩内容，不扩功能，不扩 SEO。**

---

# 60. 产品原则最终版

> **Don't build a bigger AI knowledge base.**
>
> **Build a better way to understand AI.**

中文：

> **不要做一个更大的 AI 知识库。**
>
> **要做一种更好的 AI 理解方式。**


