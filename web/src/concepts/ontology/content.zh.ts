import type { ConceptSpec } from '../../engine/types';
import type { OntologyDemoPayload } from './types';

/**
 * Ontology 概念的中文 ConceptSpec —— Concept Learning Engine 的第一个实例。
 * 通用教学区块（idea/definition/scenario/misconceptions/further）由 Engine 渲染；
 * workbench + action 走 demo 插件位（type: 'ontology'）。
 */
export const spec: ConceptSpec = {
  id: 'ontology',
  demo: {
    type: 'ontology',
    payload: {
      workbench: {
        eyebrow: '架构工作台',
        title: '关系工作台：A 产品成本追问',
        toggle_aria: '切换业务关系',
        states: [
          { tab: '1. 孤岛表', state_label: '数据分散在互不连通的关系库中' },
          { tab: '2. 断链点', state_label: '跨表语义缺失，查询无法落地' },
          { tab: '3. 本体激活', state_label: '显式业务关系链已建立' },
          { tab: '4. 上下文已解析', state_label: '确定性推理完成，根因定位' },
        ],
        silo_badge: '没有本体论 — 互不相连的数据源',
        silo_sub: '彼此隔离的数据库表',
        silo_cards: [
          { system: 'PLM', subtitle: '零件规格', detail: 'Rev 4.2', badge: 'Isolated' },
          { system: 'ERP', subtitle: '库存台账', detail: 'Lot #9021', badge: 'Isolated' },
          { system: 'SRM', subtitle: '供应商订单', detail: 'Contract V-4', badge: 'Isolated' },
          { system: 'QMS', subtitle: '质检记录', detail: 'Pass Rate', badge: 'Isolated' },
          { system: '认证', subtitle: 'ISO / 审计', detail: 'Tariff Log', badge: 'Isolated' },
        ],
        query_label: '业务提问',
        query_text: '“A 产品的成本为什么上涨？”',
        query_answer: '“数据找到了。”',
        query_fail: '“但我还需要更多上下文。”',
        missing_label: '缺失的跨表语义：',
        missing_items: ['哪个产品？', '哪份物料清单？', '哪个零件？', '哪家供应商？', '哪项成本？'],
        isolated_chips: ['PLM', 'ERP', 'SRM', 'QMS'],
        barrier_label: '关键认知障碍',
        barrier_quote: '“数据都在，但关系缺失。”',
        barrier_body:
          '每个系统里都是核验过的记录。但没有显式的业务连接把“零件—供应商—涨价”串起来，任何数据库查询或大模型都只能靠猜。',
        status_line: '状态：5 个互不相连的孤岛 · 0 条形式化连接',
        chain_badge: '本体论激活 — 语义关系链',
        chain_sub: '显式业务语义',
        chain_note:
          '注意：数据库记录一条都没变，但显式关系把它们变成了可推理的语义图。',
        path_badge: '预定义业务推理路径',
        path_sub: '确定性遍历',
        path_intro: 'AI 或业务人员如何透明地走完这张图、推出根因：',
        steps: [
          { title: '定位 A 产品', detail: '在企业目录中找到根实体', result: '已找到', tone: 'neutral' },
          { title: '找到它的物料清单', detail: '遍历至物料清单 Rev 4.2', result: '已连接', tone: 'neutral' },
          { title: '筛出高成本零件', detail: '过滤超出预算偏差的部件', result: '零件 #001', tone: 'warn' },
          { title: '锁定供应商', detail: '沿供应合同找到 Tier-1 供应商', result: '供应商 X', tone: 'neutral' },
          { title: '比对历史价格', detail: '对照基线报价评估合同价差', result: '+$3.60 / 件', tone: 'bad' },
        ],
        resolved_badge: '已解析的输出',
        resolved_sub: '根因分解',
        resolved_labels: { root: '根实体', bom: '物料清单成本', increase: '总涨幅' },
        resolved_values: { root: 'A 产品', bom: '$435.55', increase: '+14.2%' },
        factors_label: '贡献因素分解：',
        factors: [
          { label: '供应商涨价', value: '+3.4%', note: 'Tier-1 原材料上涨（钛合金支架 #001）' },
          { label: '规格变更', value: '+2.1%', note: 'ECO-491 工程升级到航空级合金' },
          { label: '认证成本', value: '+1.8%', note: 'ISO 14001 低碳审计费用调整' },
        ],
        resolved_answer:
          '根因：供应商 X 对零件 #001 涨价 $3.60/件，叠加 ECO-491 规格升级与 ISO 14001 认证费用，推动 A 产品物料成本上涨 14.2%。',
        prev_aria: '上一步',
        next_aria: '下一步',
        sim_note: '确定性教学演示 — 不调用外部 LLM API',
        scenario_note: '企业场景：航空航天供应链',
      },
      action: {
        eyebrow: 'Operational Model · 动态操作层',
        title: '动作实践：亲眼看到状态变化',
        intro: '关系回答“它们如何连接”，动作回答“可以对它做什么”。点击批准，看一次最小的业务动作如何改变系统状态。',
        cr_label: 'Change Request · 变更请求',
        cr_title: 'Change Request #CR-2201',
        cr_body: 'Supplier X · Part 001 · Change Supplier',
        field_label: 'Status',
        pending: 'Pending Approval',
        approved: 'Approved',
        button: 'Approve Change · 批准变更',
        done_line: 'Action executed: Change Request approved.',
        log_label: 'Action Log · 操作日志',
        real_note:
          '在真实企业系统中，一个动作还可能触发受治理的审批流程、系统更新和后续业务动作。',
        action_id: 'approve_change_request',
      },
    } satisfies OntologyDemoPayload,
  },

  nav: [
    { id: 'workbench', label: '核心演示' },
    { id: 'definition', label: '定义' },
    { id: 'enterprise', label: '企业平台' },
    { id: 'case-study', label: '案例研究' },
    { id: 'scenarios', label: '场景集' },
    { id: 'critical', label: '批判思考' },
  ],

  idea: {
    label: 'The Mental Model',
    title: '这就是本体论。',
    questions: [
      { q: '企业里有什么？', a: '对象' },
      { q: '它有什么属性？', a: '属性' },
      { q: '它们如何关联？', a: '关系' },
      { q: '可以发生什么？', a: '动作' },
    ],
  },

  definition: {
    eyebrow: '正式定义',
    title: '什么是本体论？',
    quote: '“本体论描述企业里有哪些对象、它们有什么属性、彼此如何关联，以及可以对它们执行什么业务动作。”',
    compare: {
      a: { icon: 'table_rows', label: '传统关系型数据库', body: '数据库保存事实，但跨系统的业务语义往往没有被表达为一个统一的层。' },
      b: { icon: 'hub', label: '企业语义本体论', body: '直接形式化业务语义、约束与动作——为更可靠的业务推理提供结构化的上下文。', emphasized: true },
    },
    components_label: '四个核心构件',
    components: [
      { index: '构件 01', icon: 'category', name: '对象', role: '“名词”', layer: 'static', body: '企业世界中存在的重要事物。', example: 'Product、Part、Supplier、BOM' },
      { index: '构件 02', icon: 'tune', name: '属性', role: '“状态”', layer: 'static', body: '描述对象状态和事实的数据。', example: 'Cost = $435.55、Status = Active' },
      { index: '构件 03', icon: 'account_tree', name: '关系', role: '结构性动词', layer: 'static', body: '描述对象之间具有业务意义的连接。', example: 'contains、supplied by、depends on' },
      { index: '构件 04', icon: 'bolt', name: '动作', role: '操作性动词', layer: 'dynamic', body: '业务语境中可以执行的操作，以及由此产生的状态变化。', example: 'Approve、Schedule、Change Supplier' },
    ],
    contrast: {
      left: { label: 'RELATIONSHIP', role: '结构性动词', from: 'Product A', verb: '↓ contains', to: 'Part 001' },
      right: { label: 'ACTION', role: '操作性动词', from: 'Change Request', verb: '↓ approve', to: 'Approved', highlight: true },
      summary: '关系描述事物如何连接，动作描述业务如何发生变化。',
    },
  },

  enterprise: {
    eyebrow: 'PART 02 · ENTERPRISE AI PLATFORM',
    title: '从数据到业务上下文',
    intro:
      '一家制造企业里，数据并不缺——缺的是横跨系统的业务语义。看 Ontology 如何坐在现有系统与 AI 应用之间，把分散的数据变成可推理的业务上下文。',
    systems: [
      { code: 'ERP', name: '企业资源计划', knows: '订单' },
      { code: 'PLM', name: '产品生命周期', knows: '产品' },
      { code: 'MES', name: '制造执行', knows: '生产' },
      { code: 'SRM', name: '供应商管理', knows: '供应商' },
      { code: 'QMS', name: '质量管理', knows: '质量' },
      { code: 'CRM', name: '客户关系', knows: '客户' },
      { code: 'WMS', name: '仓储管理', knows: '库存' },
    ],
    ontology_label: 'Ontology · 企业语义与操作层',
    ai_label: 'AI 应用 · Agents · 业务操作',
    note_title: '语义叠加层',
    note_body: 'Ontology 不替换 ERP / PLM / MES——它在现有系统之上建立统一的业务语义与操作模型',
    twin: {
      quote: '“可以把企业 Ontology 理解成企业运营世界的一种语义化数字映射。”',
      body: '现实中的产品、设备、人员、订单和供应商，都被表示为有身份、有状态、有关联的业务对象。这是一种帮助理解的说法，而不是 Ontology = Digital Twin 的严格定义。',
    },
    conclusion:
      '企业未必缺数据。真正的问题是：业务语义分散在多个系统里，而 AI 需要的恰恰是这些语义。',
  },

  caseStudy: {
    eyebrow: 'PART 04 · CASE STUDY',
    title: '案例研究：Palantir 的实现路径',
    note: {
      label: '案例说明',
      body: 'Palantir 是目前将 Ontology、业务逻辑、AI 与业务操作结合得较为完整的商业案例之一。本节分析的是 Palantir 如何实现这些理念，而不是定义 Ontology 应该如何实现。企业也可以通过自建知识图谱与规则引擎、语义层或其他企业 AI 平台采用不同的实现路径。',
    },
    steps: [
      {
        index: '01',
        title: 'Map the World · 映射现实世界',
        body: '工厂、产品、零件、供应商、订单、人员、设备——先把现实世界中的业务事物表示为对象（Objects）。',
        diagram: ['Factory · Product · Part', 'Supplier · Order · Machine', '        ↓ 映射', 'Objects（对象）'],
      },
      {
        index: '02',
        title: 'Connect the World · 连接世界',
        body: '对象之间用业务关系连接起来：包含、供应、依赖。这里讲的是 Object + Property + Link，而不是“Palantir 发明了这些东西”。',
        diagram: ['Product A', '   ↓ contains', 'Part 001', '   ↓ supplied by', 'Supplier X'],
      },
      {
        index: '03',
        title: 'Model Decisions · 建模决策',
        body: 'Ontology 不只是告诉 AI“供应商 X 延迟了”，而是帮助系统理解：这个供应商属于哪条业务对象链？这个变化会影响什么？',
        diagram: ['Supplier delay', '   → Part shortage', '   → Production impact', '   → Customer order', '   → Business decision'],
      },
      {
        index: '04',
        title: 'Operate the World · 操作世界',
        body: '决策落到动作：受治理的工作流、权限控制、系统更新——语义模型成为业务操作层，而不只是查询层。',
        diagram: ['Decision → Action', '   → Business System', '   → State Change'],
      },
    ],
    callout:
      '真正值得理解的，不是“Palantir 有一个 Ontology 产品”，而是它展示了一种可能的企业级实现方式：让语义模型成为连接数据、业务逻辑、决策、动作和 AI 的操作层。',
    alt_label: 'Ontology 是一种业务建模方法，而不是某一家厂商定义的产品架构。其他实现路径：',
    alt_items: ['自建知识图谱 + 规则引擎', '语义层（Semantic Layer）', 'Ontology / 运营平台', '其他企业 AI 平台'],
  },

  gallery: {
    eyebrow: 'PART 05 · ENTERPRISE SCENARIOS',
    title: '企业场景集',
    intro:
      '三个来自不同行业的落地场景。每个案例都标注证据等级——SeeAI 只讲有出处的机制，不讲故事会。',
    evidence_legend:
      '证据等级：A 官方/一手来源 · B 可信二手来源 · C 分析/行业解读 · D 教学简化示例。以下三个场景的机制描述基于公开实践，具体数字一律不引用未经核验的数据。',
    items: [
      {
        tag: 'Scenario 01',
        title: '跨国并购后的数据孤岛',
        body: '德国工厂用 SAP，中国工厂用本土 ERP，外加 MES 与 WMS：同一种原料在两个系统里 ID 不同、Schema 不同、安全库存规则不同——库存预警永远对不上。Ontology 用“同一物料”关系把 SAP-DE-88231 与 YS-CN-40217 映射到同一个 Titanium Dioxide 对象上，预警第一次对齐。数据存在 ≠ 业务上下文对齐。',
        evidence: '改编自公开报道的企业整合挑战；操作细节为教学简化',
        evidence_level: 'D',
      },
      {
        tag: 'Scenario 02',
        title: '建筑项目：变更的连锁传播',
        body: '排期变化沿着关系链传播：Schedule → Contract → Budget → People → Operations。关系不是静态展示——一个对象的状态变化会沿关系波及相关业务对象，这正是 Relationships + Actions 一起存在的价值。',
        evidence: '具体数字（如员工覆盖率）在核验到公开来源前不引用；此处仅讲机制',
        evidence_level: 'D',
      },
      {
        tag: 'Scenario 03',
        title: '金融风控与合规',
        body: 'Customer → owns → Account → performs → Transaction → originates from → IP → associated with → Device。Ontology 为风险模式与受治理的调查动作提供结构化上下文：调查、冻结、审批——每一步都留下审计轨迹。注意：它不会“自动发现所有欺诈”。',
        evidence: '机制基于公开行业实践描述；不涉及任何具体机构数据',
        evidence_level: 'D',
      },
    ],
  },

  scenario: {
    eyebrow: '企业场景',
    title: '供应链中断如何层层传导',
    intro:
      '把同一个世界放大到整条供应链：供应商 X 的钛合金支架延迟 14 天，影响会一层层传导到哪里？',
    levels: [
      { tag: 'L1', title: '供应商延迟', body: 'SRM 显示：供应商 X 的钛合金支架（零件 001）交付延迟 +14 天。' },
      { tag: 'L2', title: '零部件短缺', body: '本体关系：A 产品（SKU-7701）的物料清单 Rev 4.2 Requires 零件 001——该零件在关键路径上。' },
      { tag: 'L3', title: '影响范围', body: '沿订单关系遍历：VIP 客户订单命中，SLA 违约罚金 $50,000/天。' },
      { tag: 'L4', title: '管理层决策', body: '切换备用供应商 / 发起变更请求 / 加急运输——三个选项的代价都基于同一套关系事实计算。' },
    ],
    takeaway_title: '同一份数据，两种世界',
    takeaway_body:
      '延迟、库存、罚金——每一行数据原本就躺在磁盘里。区别只在于：关系被写出来之后，影响计算从“人脑拼图”变成了“图遍历”。',
  },

  misconceptions: {
    eyebrow: 'PART 06 · CRITICAL THINKING',
    title: 'Ontology 不是银弹',
    intro: '在投入之前，先看清边界、治理责任与真实代价。',
    myth_label: '误解',
    reality_label: '事实',
    items: [
      {
        myth: '“上了 Ontology，AI 就不会幻觉。”',
        reality:
          'Ontology 可以提供更结构化、受约束的业务上下文，但不会自动消除模型错误或幻觉。',
        tagline: '结构上下文压缩胡编空间，不等于零错误。',
      },
      {
        myth: '“本体论 = 知识图谱”',
        reality:
          '知识图谱主要用于表达对象、属性和关系；企业级本体论则进一步定义这些对象的业务语义、约束，以及可以对它们执行的业务动作。没有本体论的图谱，只是一张没有语法的网。',
        tagline: '图谱是介质，本体论是语法。',
      },
      {
        myth: '“Ontology 解决了数据治理。”',
        reality:
          'Ontology 可以帮助表达统一语义，但数据质量、责任归属、主数据管理仍然需要组织治理。',
        tagline: '语义层不是治理的替代品。',
      },
      {
        myth: '“Ontology 只是技术项目。”',
        reality:
          '真正困难的往往是业务定义、跨团队对齐、数据所有权、治理、安全与合规。定义“什么是 Product”，可能比建数据库更难。',
        tagline: '难点在组织，不在 Schema。',
      },
      {
        myth: '“Palantir 的做法就是 Ontology 的标准答案。”',
        reality:
          'Palantir 是一种成熟的商业实现路径，但不是 Ontology 的唯一实现方式。Ontology 是一种业务建模方法，而不是某一家厂商定义的产品架构。',
        tagline: '方法 ≠ 厂商实现。',
      },
    ],
    cost: {
      title: 'Ontology 的真正成本：价值来自长期积累，而不是建完 Schema 就结束',
      items: [
        'Ontology 本体模型',
        'Business Rules 业务规则',
        'Connectors 系统连接器',
        'Data Mapping 数据映射',
        'Security Model 权限模型',
        'Test Data 测试数据',
        'Operational Knowledge 运营知识',
      ],
      flywheel_title: '知识飞轮',
      flywheel_steps: ['企业知识', 'Ontology', 'AI · 决策 · 动作', '运营数据', '持续学习'],
      summary:
        '真正形成壁垒的往往不是某个模型本身，而是企业长期沉淀的业务模型、数据连接、测试体系、权限设计和运营知识。',
      discipline: '以上为分析判断，用于帮助技术决策者评估投入，不代表任何厂商的官方结论。',
    },
  },

  further: {
    eyebrow: '继续学习',
    back_home: '返回首页',
    review_label: '重看演示',
  },
};
