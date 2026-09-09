# SeeAI MVP UI/UX Design Specification v1.0

**Project:** SeeAI
**Domain:** seeai.site
**Version:** v1.0
**Status:** Ready for Implementation
**Target:** MVP
**Related:** SeeAI MVP PRD v1.1 / Technical Design / Kimi Code Development Tasks

---

# 1. Design Vision

## 1.1 Product Positioning

SeeAI 不是：

* AI 新闻网站
* AI Wiki
* AI 工具导航
* AI 教程内容农场
* 企业软件 Demo 展示站

SeeAI 是：

> **通过看 AI 如何工作，真正理解 AI。**

英文：

> **Understand AI by Seeing It in Action.**

因此 UI/UX 的第一目标不是“科技感”，而是：

> **让用户看见一个 AI 概念为什么重要，以及它到底改变了什么。**

---

# 2. Core UX Principle

SeeAI 所有核心学习页面必须遵循：

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

对应中文：

```text
看见问题
  ↓
看见差异
  ↓
理解概念
  ↓
探索场景
  ↓
深入学习
```

### 设计原则

| 原则                     | 要求                     |
| ---------------------- | ---------------------- |
| Visual First           | 优先通过视觉和交互解释，而不是大段文字    |
| Problem First          | 先展示用户为什么需要这个概念         |
| Before / After         | 尽可能展示没有 X 与有 X 的差异     |
| Progressive Disclosure | 不一次展示所有复杂信息            |
| One Concept at a Time  | 每个屏幕只承担一个核心认知          |
| Interactive Learning   | 核心概念尽量通过 Demo 理解       |
| Editorial Quality      | 像优秀科技杂志，而不是传统后台系统      |
| Calm Technology        | 克制、专业，不堆 AI 光效         |
| Mobile First Thinking  | Desktop 和 Mobile 都必须成立 |
| No Dark Patterns       | 不强迫点击、不自动播放、不阻塞用户      |

---

# 3. Target User

MVP 不针对 AI 专业人士。

核心用户：

```text
普通职场人士
        ↓
对 AI 感兴趣
        ↓
听过 Ontology
        ↓
但不知道它到底解决什么问题
```

典型状态：

> “我知道 Ontology 是 AI 领域的一个东西，但不知道它为什么重要。”

因此 UX 必须避免：

* 一上来定义术语
* 一上来展示复杂架构
* 一上来展示 Knowledge Graph
* 一上来展示技术代码
* 一上来讲企业本体建模理论

而应该：

> **先让我看到一个我能理解的问题。**

---

# 4. Information Architecture

MVP 信息架构：

```text
/
│
└── Language Gateway

/zh/
│
├── Homepage
│
└── ontology/
    │
    ├── Problem
    ├── Without Ontology
    ├── Why
    ├── Core Demo
    ├── Definition
    ├── Scenario
    ├── Misconceptions
    ├── Quick Check
    └── Further Learning

/en/
│
├── Homepage
│
└── ontology/
```

MVP 不创建：

```text
/ontology-vs-knowledge-graph
/why-enterprise-ai-needs-ontology
/ontology-example
```

除非未来有真实内容需求。

---

# 5. Visual Direction

## 5.1 Overall Style

推荐视觉方向：

> **Editorial + Modern SaaS + Interactive Learning**

而不是：

> “典型 AI 网站”。

---

## 5.2 Visual Characteristics

### 应该有

* 大留白
* 强排版
* 清晰层级
* 柔和背景
* 精确的网格
* 简洁卡片
* 细线
* 微妙阴影
* 克制动画
* 高质量图表
* 大标题
* 清晰的视觉节奏

### 不应该有

* 紫蓝渐变背景
* 发光粒子
* AI 机器人
* 大量霓虹
* 3D AI 大脑
* 大量玻璃拟态
* 复杂背景动画
* 无意义的动态图标

---

# 6. Color System

建议建立以下语义颜色系统。

## 6.1 Base

```text
Background
#FAFAF8

Surface
#FFFFFF

Primary Text
#18181B

Secondary Text
#71717A

Muted Text
#A1A1AA

Border
#E4E4E7
```

---

## 6.2 Brand

```text
Brand
#2563EB

Brand Hover
#1D4ED8

Brand Soft
#EFF6FF
```

Brand 色只用于：

* CTA
* Link
* Active state
* Important relationship
* Interactive elements

不要让整个页面变成蓝色。

---

# 7. Semantic Colors

```text
Problem
#DC2626

Warning
#D97706

Success
#16A34A

Info
#2563EB
```

注意：

**颜色不是唯一的信息表达方式。**

必须同时使用：

* 文字
* 图标
* 位置
* 边框
* 状态

确保无障碍。

---

# 8. Typography

推荐：

### English

```text
Inter
```

### Chinese

```text
Noto Sans SC
```

Fallback：

```text
system-ui
-apple-system
BlinkMacSystemFont
"Segoe UI"
sans-serif
```

---

## 8.1 Type Scale

Desktop：

```text
Display
56–64px

H1
44–48px

H2
32–36px

H3
24px

Body Large
20px

Body
16–18px

Small
14px

Caption
12px
```

Mobile：

```text
Display
40px

H1
32px

H2
26px

H3
22px

Body
16px
```

---

# 9. Layout System

Desktop 最大内容宽度：

```text
1200px
```

Reading content：

```text
720–760px
```

Demo：

```text
1000–1100px
```

页面左右：

```text
Desktop
32–48px

Tablet
24–32px

Mobile
20px
```

---

# 10. Grid

Desktop：

```text
12-column grid
```

常用：

```text
8 / 4
6 / 6
4 / 4 / 4
```

Mobile：

```text
1-column
```

不要在移动端强制保留 Desktop 的复杂布局。

---

# 11. Global Navigation

## Desktop

```text
┌───────────────────────────────────────────────┐
│ SeeAI                 Concepts     中文       │
└───────────────────────────────────────────────┘
```

建议：

* Logo 左
* 导航中间/右
* Language Switch 右侧
* Header 固定或 sticky
* 背景透明 → 滚动后出现轻微背景

MVP 不需要：

* 登录
* Search
* User profile
* Notification
* Mega menu

---

# 12. Language Gateway `/`

`/` 不是完整 Homepage。

它是：

> **Language Gateway**

视觉保持极简。

```text
                 SeeAI

      Understand AI by Seeing It in Action.

      通过看 AI 如何工作，真正理解 AI。


             [ 中文 ]

             [ English ]
```

可以检测浏览器语言：

```text
Browser Language
       ↓
Recommendation
```

但：

> **禁止自动跳转。**

用户必须主动选择。

---

# 13. Homepage UX

## 13.1 Hero

English：

> **Understand AI by Seeing It in Action.**

副标题：

> Complex AI concepts explained through real-world scenarios and interactive demos.

CTA：

> Explore Ontology

中文：

> **通过看 AI 如何工作，真正理解 AI。**

副标题：

> 用真实场景和交互式 Demo，把复杂的 AI 概念讲明白。

CTA：

> 探索 Ontology

---

# 14. Homepage Visual Rhythm

推荐：

```text
Hero
 ↓
large whitespace

SEE THE PROBLEM
 ↓
problem visualization

SEE THE DIFFERENCE
 ↓
before / after

UNDERSTAND THE CONCEPT
 ↓
concept card

Featured Concept
 ↓
Ontology

Footer
```

首页不要塞：

* 大量 Concept Cards
* Blog
* Latest AI News
* Categories
* Search
* Newsletter
* Testimonials

MVP 保持单一目标。

---

# 15. Concept Card

Featured Ontology Card：

```text
ONTOLOGY

Why does AI struggle
to understand enterprise data?

See how relationships
change the way AI works.

[ Explore ]
```

卡片应该：

* 简洁
* 有问题意识
* 有明确 CTA

而不是：

```text
Ontology
★★★★☆
Advanced
12 min
Enterprise AI
Knowledge Graph
...
```

避免变成课程目录。

---

# 16. Ontology Learning Page

这是 MVP 最重要页面。

页面结构：

```text
01 Problem
↓
02 Without Ontology
↓
03 Why
↓
04 With Ontology
↓
05 Interactive Demo
↓
06 Definition
↓
07 Real Scenario
↓
08 Misconceptions
↓
09 Quick Check
↓
10 Further Learning
```

---

# 17. Section Navigation

Desktop 可以提供一个非常轻量的进度指示：

```text
01 Problem
02 Difference
03 Concept
04 Demo
05 Deep Dive
```

不要做成复杂 Sidebar。

Mobile：

```text
●────○────○────○────○
```

或者顶部：

```text
Part 2 of 5
```

---

# 18. Problem Section

核心问题：

> **Why did Product A’s cost increase?**

中文：

> **为什么 Product A 的成本上涨了？**

视觉：

```text
Product A

BOM
ERP
PLM
SRM
QMS
Certification
```

这些系统可以作为独立数据来源出现。

重点：

> 数据很多，但用户的问题跨越多个系统。

---

# 19. Without Ontology

视觉：

```text
┌─────┐      ┌─────┐
│ PLM │      │ ERP │
└─────┘      └─────┘

┌─────┐      ┌─────┐
│ SRM │      │ QMS │
└─────┘      └─────┘
```

AI：

> “I found the data.”

然后：

> “But I need more context.”

下面出现：

```text
Which Product?
Which BOM?
Which Part?
Which Supplier?
Which Cost?
```

---

# 20. UX Principle：Don't Say “AI Doesn't Understand”

避免：

> AI 不理解数据。

推荐：

> **The data exists, but the relationships are missing.**

中文：

> **数据存在，但业务关系缺失。**

原因：

这更准确，也更符合 SeeAI 的教学定位。

---

# 21. Visual Transition

这是整个页面最重要的视觉转折。

Before：

```text
PLM      ERP      SRM
 │        │        │
 ?        ?        ?
```

Transition：

```text
        Relationships
             ↓
```

After：

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

用户应该明显感受到：

> **数据没有突然增加，关系变清楚了。**

---

# 22. Core Demo

Demo 是 SeeAI MVP 的核心产品体验。

它不是普通动画。

它必须让用户：

> **参与一次“理解过程”。**

---

# 23. Demo UI

推荐容器：

```text
┌──────────────────────────────────────┐
│  ONTOLOGY DEMO                       │
│                                      │
│  Why did Product A's cost increase?  │
│                                      │
│                                      │
│             Demo Area                │
│                                      │
│                                      │
│  ← Back                    Next →    │
└──────────────────────────────────────┘
```

底部：

```text
Step 2 of 7
```

提供：

```text
Back
Next
Restart
Skip animation
```

---

# 24. Demo State Machine

严格对应：

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

UI 不应该依赖复杂自由状态。

---

# 25. Question State

```text
Why did Product A's cost increase?

[ Start Demo ]
```

视觉重点：

问题本身。

不要在这里解释 Ontology。

---

# 26. Without Ontology State

动画依次展示：

```text
PLM
ERP
SRM
QMS
Certification
```

然后 AI 提示：

> I found the data.

随后：

> But I need more context.

---

# 27. Problem State

页面逐步出现：

```text
Product?
BOM?
Part?
Supplier?
Cost?
```

最后：

> The data exists, but the relationships are missing.

中文：

> 数据存在，但业务关系缺失。

这是第一个认知峰值。

---

# 28. With Ontology State

重新展示同样的问题。

但这次：

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

关系线逐步出现。

---

# 29. Relationship Animation

关系出现顺序：

```text
Product A
    ↓
contains
    ↓
Part 001
    ↓
supplied by
    ↓
Supplier X
    ↓
has price
    ↓
$23.60
```

每一步：

```text
fade in
+
line draw
+
subtle emphasis
```

不要使用：

* 爆炸
* 光晕
* 粒子
* 旋转 3D
* 大幅缩放

---

# 30. Reasoning Visualization

用户看到的是：

```text
01 Identify Product A

02 Find its BOM

03 Find high-cost Parts

04 Identify Suppliers

05 Compare historical prices
```

重要：

这不是展示模型的内部 Chain-of-Thought。

它是：

> **用户可理解的业务分析路径。**

禁止显示：

```text
LLM thought:
...
I think...
Maybe...
Internal reasoning...
```

---

# 31. Result State

```text
Product A

BOM Cost
$435.55

Increase
+14.2%
```

下面：

```text
Supplier price increase     3.4%

Specification change        2.1%

Certification cost          1.8%
```

建议使用横向/纵向 contribution bars。

---

# 32. Decision Layer

Result 后出现：

```text
Understand
      ↓
Reason
      ↓
Decide
      ↓
Act
```

下面：

```text
Find Alternative Supplier
Compare Suppliers
Run Cost Simulation
Start Change Request
```

MVP 中：

> 这些是 Conceptual Actions。

不是实际企业系统操作。

按钮可以：

* disabled
* secondary
* “Coming in future”

不要假装已经连接企业系统。

---

# 33. Demo Complete

核心文案：

English：

> **That’s the idea.**

> Ontology gives AI a structured view of the business world — its objects, relationships, and actions.

中文：

> **这就是核心。**

> Ontology 让 AI 能够以结构化方式理解企业世界：其中有哪些对象、它们如何关联，以及可以发生哪些业务动作。

CTA：

> Understand It Deeper

中文：

> 深入理解

---

# 34. Deep Dive UX

Deep Dive 不应该重新讲一遍 Demo。

它负责：

> **把用户刚才看到的东西抽象成概念。**

结构：

```text
What is Ontology?
        ↓
Objects
        ↓
Relationships
        ↓
Properties
        ↓
Actions
        ↓
Enterprise Example
```

---

# 35. Ontology Definition

重点定义：

> An Ontology describes the important things in a business, how they relate to each other, and what can happen to them.

中文：

> Ontology 描述企业世界中的重要对象、它们之间的关系，以及这些对象可以发生什么业务动作。

定义应该作为一个视觉 Highlight。

例如：

```text
┌─────────────────────────────────┐
│                                 │
│ An Ontology describes...        │
│                                 │
└─────────────────────────────────┘
```

---

# 36. Four Core Elements

使用四张简洁卡片：

```text
┌──────────┐
│ Objects  │
│          │
│ Product  │
│ Supplier │
└──────────┘

┌──────────────┐
│ Relationships│
│              │
│ supplied by  │
└──────────────┘

┌────────────┐
│ Properties │
│            │
│ price      │
│ status     │
└────────────┘

┌───────────┐
│ Actions   │
│           │
│ compare   │
│ simulate  │
└───────────┘
```

---

# 37. Enterprise Scenario

核心关系：

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

建议设计成可横向滚动的关系链。

Desktop：

```text
Product → BOM → Part → Supplier → Cost → Certification
```

Mobile：

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

# 38. Misconceptions

不要做成 FAQ 列表。

推荐：

```text
MISCONCEPTION 01

Ontology = Database?

        NO

Ontology describes meaning
and relationships.
```

然后：

```text
02
Ontology = Knowledge Graph?

Related, but not identical.

03
Ontology replaces ERP / PLM?

No.
It works as a semantic /
operational layer.
```

采用：

> Myth → Reality

视觉结构。

---

# 39. Quick Check

Quiz 必须简单。

问题：

> What is the core value of an Ontology?

选项：

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

# 40. Quiz UX

用户点击选项后：

正确：

```text
✓ Correct

Ontology gives AI structured
business context.
```

错误：

```text
Not quite.

Think about what changed
between the Before and After.
```

不要直接暴露答案前的强提示。

---

# 41. Further Learning

MVP 不建立庞大内容网络。

推荐：

```text
Go Deeper

Ontology
   ↓

Related concepts
   ↓

Coming later
```

只有真正存在的内容才能进入 Related Concepts。

---

# 42. Mobile UX

移动端不是 Desktop 缩小版。

## 原则

```text
Desktop
Information Layout

Mobile
Narrative Flow
```

例如 Desktop：

```text
Product A ── contains ── Part 001
```

Mobile：

```text
Product A

      ↓

   contains

      ↓

Part 001
```

---

# 43. Mobile Navigation

顶部：

```text
SeeAI                    ☰
```

或者：

```text
SeeAI              中文
```

MVP 导航尽可能简单。

---

# 44. Mobile Demo

Demo 使用：

```text
Full-width card
```

底部固定操作区域：

```text
┌─────────────────────────────┐
│                             │
│        Demo Content         │
│                             │
│                             │
├─────────────────────────────┤
│ ← Back              Next →  │
└─────────────────────────────┘
```

按钮至少：

```text
44 × 44px
```

---

# 45. Animation System

## Duration

```text
Micro interaction
150–200ms

Normal transition
250–350ms

Educational animation
400–700ms
```

尽量避免：

```text
> 1000ms
```

除非是用户明确等待的教学动画。

---

# 46. Easing

推荐：

```text
ease-out
```

进入：

```text
opacity
0 → 1

transform
8px → 0
```

退出：

```text
opacity
1 → 0
```

避免：

* bounce
* elastic
* excessive spring

SeeAI 的动画应该：

> **让用户理解变化，而不是吸引用户注意。**

---

# 47. Reduced Motion

必须支持：

```text
prefers-reduced-motion
```

开启后：

* 关闭复杂动画
* 保留状态变化
* 使用 instant / fade
* 不影响 Demo 功能

---

# 48. Interaction Rules

所有 Interactive Elements：

```text
Hover
Focus
Active
Disabled
```

必须有明确状态。

例如 CTA：

```text
Default
Hover
Pressed
Focus
Disabled
```

---

# 49. Accessibility

MVP 最低要求：

### Keyboard

所有：

* Button
* Link
* Quiz
* Demo Controls

必须键盘可操作。

### Focus

必须存在清晰：

```text
focus-visible
```

### Contrast

正文必须满足合理对比度。

### Semantic HTML

优先：

```html
button
a
nav
main
section
article
header
footer
```

禁止用：

```html
<div onclick="">
```

代替 Button。

---

# 50. Empty / Error / Loading

由于 MVP 是静态站点：

### Loading

尽可能避免。

### Error

Demo 数据加载异常：

```text
Something went wrong.

[ Restart Demo ]
```

### Unknown State

禁止显示：

```text
undefined
null
NaN
```

---

# 51. Responsive Breakpoints

建议：

```text
Mobile
< 640px

Tablet
640–1023px

Desktop
≥ 1024px

Wide
≥ 1280px
```

不要过度依赖 breakpoint。

优先：

```text
fluid layout
max-width
minmax()
clamp()
```

---

# 52. Component Design

建议组件：

```text
Header
Footer
LanguageSwitch

SectionLabel
SectionHeading
ConceptCard
ScenarioCard
Button
Callout
ProgressIndicator

DemoShell
DemoQuestion
WithoutOntology
WithOntology
RelationshipGraph
ReasoningSteps
DemoResult
DemoComplete

Quiz
MisconceptionCard
FurtherLearning
```

---

# 53. Component Principle

组件不是为了“组件化而组件化”。

判断标准：

> 是否存在重复视觉模式或独立交互逻辑？

例如：

```text
SectionLabel
```

可以复用。

但是：

```text
OntologyProblemSection
```

如果只出现一次，没有必要强行抽象。

---

# 54. Astro / React Boundary

必须保持：

```text
Astro
  ↓
Static Content
```

只有 Demo：

```text
React Island
```

即：

```text
Astro Page
├── Static Content
├── Static Content
├── React Demo
└── Static Content
```

禁止：

> 整个页面 React 化。

---

# 55. Demo Interaction Architecture

```text
Demo UI
   ↓
Demo State
   ↓
Static Demo Data
   ↓
Predefined Transition
```

不需要：

```text
LLM API
Backend
Database
Graph Database
```

---

# 56. Analytics UX Events

UI/UX 需要为以下行为预留埋点：

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

统一：

```text
track(eventName, properties)
```

不要在组件里直接依赖具体 Analytics SDK。

---

# 57. SEO UX

UI 必须支持：

```text
title
description
canonical
hreflang
OG image
```

中文：

```text
/zh/ontology
```

英文：

```text
/en/ontology
```

二者互相：

```text
hreflang
```

关联。

---

# 58. OG Image

每个核心概念应该有：

```text
SeeAI
+
Concept Name
+
Short Question
```

例如：

```text
SeeAI

ONTOLOGY

Why does AI struggle
to understand enterprise data?
```

不要做成传统 SEO Banner。

---

# 59. Design Tokens

建议统一使用：

```text
--color-bg
--color-surface
--color-text
--color-text-muted
--color-border
--color-brand
--color-brand-hover

--space-1
--space-2
--space-3
--space-4
--space-6
--space-8
--space-12
--space-16
--space-24

--radius-sm
--radius-md
--radius-lg

--shadow-sm
--shadow-md
```

禁止在组件中大量出现：

```text
margin: 17px
padding: 13px
```

---

# 60. UX Content Rules

SeeAI 的文案遵循：

### 先问题

不要：

> Ontology is a formal representation...

而是：

> Why does AI struggle to answer a simple business question?

---

### 少术语

第一次出现：

```text
Ontology
```

必须解释。

---

### 一句话一个认知

不要一个 Paragraph 里塞：

* Ontology
* Knowledge Graph
* Semantic Layer
* Agent
* MCP

---

### 不夸大

禁止：

> Ontology makes AI understand everything.

推荐：

> Ontology gives AI structured business context.

---

# 61. Visual Hierarchy

每个 Section 最多：

```text
1 Primary Message
1 Supporting Message
1 CTA
```

例如：

```text
Primary
The data exists, but the relationships are missing.

Supporting
AI can find information across systems,
but business context is fragmented.

CTA
See how Ontology changes this.
```

---

# 62. Scroll Experience

页面应该有明显的：

```text
Chapter 1
Problem

Chapter 2
Difference

Chapter 3
Concept

Chapter 4
Demo

Chapter 5
Deep Dive
```

但不要做成：

```text
50% ━━━━━
```

这种强制进度体验。

---

# 63. UX Anti-Patterns

MVP 明确禁止：

### 1. 首页信息过载

```text
Concepts
Articles
News
Tools
Trending
Community
...
```

### 2. 一上来定义

```text
Ontology is...
```

### 3. 一上来展示复杂图

```text
100+ nodes
```

### 4. Demo 自动播放

用户不知道发生了什么。

### 5. 动画太快

用户看不到关系变化。

### 6. 动画太慢

用户感觉网站卡住。

### 7. 技术术语堆叠

造成学习门槛。

---

# 64. UI/UX Acceptance Criteria

## Homepage

用户进入：

`/zh/`

应该：

* 5 秒内知道 SeeAI 是什么
* 知道它不是 AI 新闻站
* 知道可以通过 Demo 学习 AI
* 能发现 Ontology

---

## Ontology Page

第一次阅读：

用户应该理解：

> “这里是在解决一个企业数据关系问题。”

---

## Core Demo

用户完成 Demo 后：

至少能够回答：

> **Ontology 为什么有用？**

而不是只记住：

> “Ontology 是四个字母。”

---

# 65. Content Validation Gate

Sprint 3 完成后，**不要直接进入 Sprint 4**。

必须做：

> **2–3 人低保真内容测试。**

可以使用：

* Figma
* 静态 HTML
* 纸面流程
* 已实现页面

测试重点不是视觉，而是：

> **叙事是否有效。**

测试问题：

> “请阅读 SeeAI 的 Ontology 页面，然后告诉我你认为 Ontology 是什么。”

---

# 66. Validation Score

每个用户：

```text
1 = 完全不理解

2 = 有一点理解

3 = 基本理解

4 = 清楚理解

5 = 可以解释给别人
```

观察：

```text
Product A 问题
      ↓
Without Ontology
      ↓
数据存在但关系缺失
      ↓
With Ontology
      ↓
Ontology 的价值
```

---

# 67. Content Gate

```text
2–3 users
      ↓
≥ 2 users
能够大致解释核心概念
      ↓
PASS
      ↓
Sprint 4
```

如果：

```text
FAIL
 ↓
修改内容
 ↓
重新测试
 ↓
PASS
```

---

# 68. MVP Final UX Validation

Sprint 7：

至少：

```text
5 real users
```

记录：

```text
Before understanding
After understanding

Demo completion
Quiz result
Own-word explanation
Completion time
Drop-off
```

内部目标：

```text
Demo completion ≥ 4/5

Quiz correct ≥ 4/5

≥ 4/5
能够大致解释 Ontology
```

这些是：

> **内部产品验收指标**

不是统计学意义上的用户研究结论。

---

# 69. Design-to-Code Rules

交给 Kimi Code 后必须遵循：

### Rule 1

**不要自行改变信息架构。**

### Rule 2

**不要自行增加页面。**

### Rule 3

**不要自行引入 UI Framework。**

已有：

```text
Astro
Tailwind
TypeScript
React Islands
```

---

### Rule 4

不要自行引入：

```text
Framer Motion
GSAP
Three.js
D3
Chart.js
```

除非后续明确需要。

MVP 的 Demo 可以通过：

```text
CSS transition
CSS animation
React state
SVG
```

完成。

---

# 70. Design Priority

如果开发资源有限，优先级：

```text
P0
Core Demo UX
Before / After
Typography
Spacing
Mobile

P1
Homepage
Deep Dive
Quiz
Animation

P2
Micro interactions
OG visual polish
Advanced animation
```

---

# 71. Definition of Done

UI/UX MVP 完成必须同时满足：

```text
□ Homepage 完成
□ Language Gateway 完成
□ Ontology 页面完成
□ Core Demo 完成
□ Mobile 完成
□ Tablet 完成
□ Desktop 完成
□ Keyboard navigation
□ Focus states
□ Reduced motion
□ Loading / error states
□ Analytics hooks
□ SEO hooks
□ zh/en 同步
□ Content Validation Gate
```

---

# 72. 最终设计原则

整个 SeeAI MVP 最重要的一句话：

> **Don't explain first. Show first.**

中文：

> **不要先解释，先让用户看见。**

因此整个产品应该形成这样的体验：

```text
用户进入 SeeAI
       ↓
看到一个真实问题
       ↓
发现 AI 为什么回答不好
       ↓
看到关系如何改变
       ↓
看到 Ontology 如何提供结构化业务上下文
       ↓
自己得出结论
       ↓
再给出正式定义
       ↓
用 Quiz 验证理解
```

而不是：

```text
定义
 ↓
理论
 ↓
术语
 ↓
架构图
 ↓
案例
```

---

# 73. UI/UX 与现有技术方案的最终关系

最终架构建议锁定为：

```text
                 SeeAI MVP
                    │
        ┌───────────┴───────────┐
        │                       │
     Content                 UI/UX
        │                       │
       MDX                 Design System
        │                       │
        └───────────┬───────────┘
                    ↓
                  Astro
                    │
        ┌───────────┴───────────┐
        │                       │
    Static Page             React Island
        │                       │
        │                  Core Demo
        │                       │
        └───────────┬───────────┘
                    ↓
              Cloudflare Pages
```

**不增加：**

```text
Database
Backend
LLM
Graph DB
CMS
Auth
Agent
```

---

