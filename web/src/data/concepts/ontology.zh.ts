import type { OntologyContent } from './ontology.types';

export const ontologyZh: OntologyContent = {
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

  idea: {
    label: 'The Mental Model',
    title: '这就是本体论。',
  },

  definition: {
    eyebrow: '正式定义',
    title: '什么是本体论？',
    quote: '“本体论描述业务中的重要事物、它们之间的关系，以及可能发生的变化。”',
    db_label: '传统关系型数据库',
    db_body: '记录原始状态、事务键和静态表。它核验“哪一行存在”，但不保留任何组织语义。',
    onto_label: '企业语义本体论',
    onto_body: '直接形式化业务语义与操作边界。AI 查询这张图时，沿已核验的规则遍历，零幻觉。',
    components_label: '三个核心构件',
    components: [
      {
        index: '构件 01',
        icon: 'category',
        name: '对象',
        role: '“名词”',
        body: '企业生命周期中有身份、有价值的离散业务实体。',
        example: '产品、供应商、零件、订单、工厂',
      },
      {
        index: '构件 02',
        icon: 'tune',
        name: '属性',
        role: '“状态”',
        body: '锚定在对象上的可度量事实与数值。',
        example: '价格、状态、规格、交付周期',
      },
      {
        index: '构件 03',
        icon: 'schema',
        name: '关系与动作',
        role: '“动词”与规则',
        body: '把对象连成可操作真相网络的类型化、有方向的依赖。',
        example: '包含、由…供应、影响、违反',
      },
    ],
  },

  scenario: {
    eyebrow: '企业场景',
    title: '供应链中断如何层层传导',
    intro:
      '一家电动汽车制造商，关键零部件供应商延迟 14 天。没有本体论时，这是一次需要人盯一周的救火；有本体论时，这是四次确定性遍历。',
    levels: [
      {
        tag: 'L1',
        title: '供应商延迟',
        body: 'ERP 显示：Micro-Controller P-8821 库存 0，延迟 +14 天。',
      },
      {
        tag: 'L2',
        title: '零部件短缺',
        body: '本体关系：EV-Truck-X 的底盘航电工序 Requires #P-8821，该工序为 Line-Stopper 级。',
      },
      {
        tag: 'L3',
        title: '影响范围',
        body: '沿订单关系遍历：客户 Apex Dynamics 的订单 #ORD-9902（VIP Tier-1）命中，违约罚金 $50,000/天。',
      },
      {
        tag: 'L4',
        title: '管理层决策',
        body: '切换备用供应商 / 重排产线 / 提前通知客户——三个选项的代价都基于同一套关系事实计算。',
      },
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
          '图谱是存储结构——节点和边；本体论是语义规则——什么可以连接、如何连接、连接意味着什么。没有本体论的图谱，只是一张没有语法的网。',
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
    lang_switch: 'English Version',
  },
};
