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
    eyebrow: '关键澄清',
    title: '常见误解',
    intro: '为什么传统捷径替代不了显式的语义治理。',
    myth_label: '误解',
    reality_label: '事实',
    items: [
      {
        myth: '“本体论 = 知识图谱”',
        reality:
          '知识图谱主要用于表达对象、属性和关系；企业级本体论则进一步定义这些对象的业务语义、约束，以及可以对它们执行的业务动作。没有本体论的图谱，只是一张没有语法的网。',
        tagline: '图谱是介质，本体论是语法。',
      },
      {
        myth: '“把 PDF 喂给大模型就够了”',
        reality:
          '语言模型从文本中学习统计相关性，不核验事实关系。没有显式关系链，“供应商 X 影响订单 Y”只是概率上的猜测，不是可审计的结论。',
        tagline: '文本概率 ≠ 业务事实。',
      },
      {
        myth: '“本体论会替代 ERP / PLM”',
        reality:
          '不会。它作为非侵入的语义层叠加在现有系统之上——ERP 和 PLM 继续处理事务记录，本体论负责把它们连成 AI 可用的上下文。',
        tagline: '记录系统照旧运转，本体论负责编排语义。',
      },
    ],
  },

  further: {
    eyebrow: '继续学习',
    back_home: '返回首页',
    review_label: '重看演示',
  },
};
