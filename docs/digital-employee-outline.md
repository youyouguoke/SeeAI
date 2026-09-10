# Concept 02 · Digital Employee（数字员工）内容规格草案

> 依据《SeeAI 网站内容规划与下一步执行计划》Phase 1（§十六–十八、§三十二–三十三）编制。
> **本大纲经确认后才进入开发。** 工程上复用 Concept Learning Engine：新增 ConceptSpec + MDX + Demo 插件，零骨架改动。

---

## 1. 定位（为什么数字员工是 Concept 02）

与 Ontology 构成互补主线：

```text
Ontology          →  AI 如何理解企业世界？（Understand the World）
Digital Employee  →  AI 如何在企业世界中工作？（Work in the World）
```

核心叙事不是"什么是数字员工"，而是 **AI 如何真正进入企业工作**。

教学纪律不变：**Show → Name → Formalize**（先看到，再命名，最后形式化），不一开始堆十个定义。

---

## 2. 认知目标（验证标准，方案 §三十三）

用户看完应能回答：

| 问题 | 目标理解 |
| --- | --- |
| Q1 什么是 Digital Employee？ | 有目标、能获取上下文、会规划、调用工具、执行并验证的 AI 工作单元——不是升级版 Chatbot |
| Q2 与 Chatbot 的区别？ | Chatbot 只回答；数字员工完成任务（Goal → Action → State Change） |
| Q3 为什么需要 Tool？ | 没有工具，AI 只有语言没有手；工具让"决策"落到"系统状态变化" |
| Q4 为什么需要 Context？ | 没有企业上下文（Ontology），它不知道该对哪些对象、按什么规则行动 |
| Q5 哪一步让它真正"开始工作"？ | 验证（Verify）与行动（Action）——第一次产生可审计的真实效果 |

概念触点（不出现术语堆叠）：Goal / Context / Planning / Tools / Execution / Verification / Action。

---

## 3. 页面叙事结构（ConceptSpec 区块）

```text
Hero（锚点导航）
├── 01 Problem        一个真实的采购异常周五下午：零件延迟 + 库存对不上 + 三封邮件
├── 02 Before         员工跨 ERP/Excel/邮件/供应商系统的人工流程（8 步，30 分钟）
├── 03 After          数字员工七步推演（见 §4 Demo）
├── 04 Definition     数字员工 = Goal + Context + Plan + Tools + Execution + Verification + Action
├── 05 Scenario       与 Ontology 场景同一世界观（供应商 X / 零件 001）：体现 Ontology 是它的上下文来源
├── 06 Demo 插件      任务执行推演沙盘（React Island，确定性模拟）
├── 07 Deep Dive      LLM / Agent / Tool / Verification 的关系（MDX 散文 + 关系图）
├── 08 Misconceptions 批判思考（见 §6）
├── 09 Quiz           60 秒场景题（草案见 §7）
└── 10 Further        指向 Ontology（回看上下文）+ 下一概念 Coming Soon
```

与 Ontology 页的衔接：场景沿用航空航天供应链（Product A / Part 001 / Supplier X），
让"Ontology 提供 Context"这一层在叙事上闭环（对应未来 Connections：Ontology + Digital Employee）。

---

## 4. Demo 设计（数字员工任务执行推演沙盘）

确定性教学模拟（零外部 API），一次点击推进一步：

```text
任务目标：评估变更请求 #CR-2201 并给出处理建议
  │
  Step 1 理解目标   → 解析任务：评估变更 + 影响面
  Step 2 获取上下文 → 调用 Ontology：Part 001 / Supplier X / 库存 / 订单（复用现有 demo 数据世界观）
  Step 3 制定计划   → 生成三步计划：查库存 → 查在途订单 → 比选方案
  Step 4 调用工具   → tool_call 卡片逐个亮起（ERP 查询 / 库存查询 / 订单查询——模拟延迟与返回）
  Step 5 执行推理   → 给出两个方案 + 代价对比（沿用确定性数据，禁止编造数字）
  Step 6 验证       → 核对每一步来源，标注"依据：Ontology 关系链 + ERP 记录 #9021"
  Step 7 行动       → 输出建议动作（转人工审批），状态变化写入行动日志
```

边界纪律：

- 行动终点是 **建议 + 转人工审批**，不演示"AI 自动改生产系统"（No Overclaim：Agent 不能完全替代员工）
- 每步都有来源标注（Context 来自哪里），强化 Q4 的理解
- 埋点（已预置 ANALYTICS_EVENTS）：`digital_employee_demo_start / step_view / tool_call / action / complete`

---

## 5. 工程实现（零骨架改动）

```text
src/concepts/digital-employee/
├── content.zh.ts / content.en.ts   ConceptSpec（复用 Engine 全部通用区块）
├── types.ts                        Demo payload 类型
└── demo-data.json                  任务/步骤/工具调用模拟数据

src/engine/demos/digital-employee/DigitalEmployeeDemo.tsx  ← DemoSlot 注册一行
src/content/concepts/{zh,en}/digital-employee.mdx          frontmatter + 深度散文
```

预计可完全复用：ConceptPage / Definition / Scenario / Misconceptions / Quiz / FurtherLearning / 锚点导航。
`definition.components` 四构件 = Goal / Context / Planning+Tools / Execution+Verification+Action（按叙事自然分组，非强行四等分）。

---

## 6. Misconceptions 草案（4 条，遵守 No Overclaim）

1. **"数字员工 = 高级聊天机器人"** — 聊天机器人输出文本结束；数字员工以任务完成与状态变化结束。
2. **"接上 LLM 就能当数字员工用"** — 缺 Context 与 Tools 的 LLM 只会说不会做；说和做之间隔着上下文、工具与验证。
3. **"数字员工可以替代员工"** — 它承担流程性劳动；判断、责任与异常处置仍由人承担（验证步骤是它的边界，也是它的价值）。
4. **"数字员工自动知道企业规则"** — 它的上下文来自 Ontology / 知识库 / 系统连接，这些需要企业自己建设与治理（与 Concept 01 的批判思考呼应）。

---

## 7. Quiz 草案（60 秒场景题）

> 场景：数字员工接到任务"评估零件 001 的供应风险"。它先查询了物料清单与供应商合同，
> 又核对了在途订单，最后输出风险报告并建议启动备选供应商流程，等待人工批准。
>
> **问题：以上哪一步最能说明"数字员工与普通聊天机器人的区别"？**
>
> - A. 它能生成风险报告（聊天机器人也能生成文本）
> - B. 它核对了物料清单、合同与订单等结构化数据 ✓
> - C. 它等待人工批准（这是治理设计，不是区别本身）
>
> 反馈（对）：正确。区别在于它以任务为目标、调用工具获取真实上下文并完成验证闭环，而不是只生成一段文本。
> 反馈（错）：再想想——报告文本本身不是区别，区别在于它"如何获得信息、如何验证、以什么结束"。

---

## 8. 待确认事项

1. **Demo 任务选题**：上面用"变更请求 #CR-2201 评估"（与 Ontology 场景强联动）；也可换成"库存预警对齐"或"供应中断应急"。→ 建议保持 CR-2201，叙事闭环成本最低。
2. **步骤颗粒度**：7 步是否过多？可压缩为 5 步（合并 3-4）。→ 建议先按 7 步做完整版，验证时观察用户在哪一步走神。
3. **术语策略**："数字员工"为主称谓，英文页用 Digital Employee，不造新词。
4. **上线 Gate**：按方案 §三十三 5 题访谈，5 人 ≥4 通过即 PASS。

**确认后开发顺序**：内容数据（zh/en）→ Demo 插件 → MDX → 三门禁 → 5 人验证。
