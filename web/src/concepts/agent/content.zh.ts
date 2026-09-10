import type { ConceptSpec } from '../../engine/types';
import type { AgentDemoPayload } from './types';

/**
 * Agent（智能体）中文 ConceptSpec —— Concept 03。
 * 认知链收尾：Ontology 理解企业 → Digital Employee 承担工作 → Agent 完成复杂任务。
 * 与 Digital Employee 的边界：WHO（角色/权限/治理）vs HOW（目标/规划/工具/观察/决策/重规划）。
 */

export const spec: ConceptSpec = {
  id: 'agent',
  demo: {
    type: 'agent',
    payload: {
      workbench_label: 'INTERACTIVE WORKBENCH',
      title: '看看 Agent 如何完成一个任务',
      sim_note: '下面的演示不会调用真实 ERP、SRM 或供应商系统。所有操作都是确定性教学模拟。',
      goal_badge: 'GOAL',
      goal_text: '降低供应商 X 延迟带来的生产风险',
      goal_detail: 'Assess the production risk and prepare the best response.',
      stepper: ['Goal', 'Plan', 'Tool', 'Observe', 'Decide', 'Re-plan', 'Action', 'Result'],
      start_button: '开始任务',
      next_button: '下一步',
      reset_button: '重新体验',
      status_label: '状态',
      status_processing: '任务执行中',
      status_done: '任务完成',
      what_label: '这一步发生了什么',
      why_label: '为什么这一步重要',

      steps: {
        goal: {
          note: 'Agent 从一个结果出发，而不是一条单一指令。',
          what: '用户给出一个目标：降低供应商 X 延迟带来的生产风险。',
          why: '目标是 Agent 行动的锚点——后续每一步都由它来衡量是否有进展。',
        },
        plan: {
          badge: 'PLAN',
          plan_label: '初始计划',
          items: [
            '识别受影响的产品',
            '查询库存覆盖天数',
            '寻找备选供应商',
            '比较各选项',
            '准备处理建议',
          ],
          note: '常见模式是先形成计划，再随着新信息出现不断调整——而不是一次性生成不可变的完整计划。',
          what: 'Agent 把目标拆解成一个可能的行动序列。',
          why: '没有计划，工具调用只是零散动作；计划让每一步都服务于目标。',
        },
        tool: {
          badge: 'TOOL',
          tool_name: 'ERP 查询工具',
          query_label: '查询',
          query: ['Supplier X', 'Part 001', 'Product A', 'Order #1024'],
          result_label: '返回',
          result: ['库存覆盖：3 天', '供应商延迟：5 天'],
          note: 'Agent 本身不天然拥有企业信息——它通过工具获取。',
          what: 'Agent 调用 ERP 工具，沿对象关系链查到了库存与延迟数据。',
          why: '工具是 Agent 与企业系统之间的桥：没有工具，Agent 只能在空中推理。',
        },
        observe: {
          badge: 'OBSERVE',
          facts: [
            { label: '库存覆盖', value: '3 天' },
            { label: '供应商延迟', value: '5 天' },
          ],
          comparison: '5 天 > 3 天 → 生产风险',
          conclusion: '生产中断风险确认',
          note: '行动的结果被观察、解读，而不是被忽略。',
          what: 'ERP 返回 3 天库存对 5 天延迟，Agent 确认存在生产风险。',
          why: '观察是反馈回路的入口——没有观察，Agent 无法知道下一步该做什么。',
        },
        decide: {
          badge: 'DECIDE',
          decision: '下一步：寻找备选供应商',
          note: 'Agent 不是继续执行固定清单——新信息改变了它需要做什么。',
          what: '基于"风险确认"这一观察，Agent 决定优先寻找备选供应商。',
          why: '决策是 Agent 与固定 Workflow 的分水岭：下一步由当前上下文决定。',
        },
        replan: {
          badge: 'RE-PLAN',
          original_label: '原计划',
          original: ['查询库存', '寻找供应商', '比较选项', '提出建议'],
          observation_label: '新观察',
          observation: '生产风险已确认，时间比价格更关键',
          updated_label: '更新后的计划',
          updated: [
            '优先寻找有现货产能的备选供应商',
            '比较交期与成本',
            '准备最稳妥的选项',
          ],
          callout: '新信息改变了下一步。',
          note: '重规划不是失败，而是 Agent 工作的常态。',
          what: '原计划被重排：从"通用比较"改为"以产能与交期优先"。',
          why: '这是 Agent 的核心能力——根据任务过程中的信息变化调整行动。',
        },
        action: {
          badge: 'ACTION',
          options_label: '工具返回的备选',
          options: [
            { name: 'Supplier Y', lead: '交期 2 天', cost: '成本 +6%' },
            { name: 'Supplier Z', lead: '交期 4 天', cost: '成本 +3%' },
          ],
          recommended_badge: 'RECOMMENDATION',
          recommended: '建议切换到 Supplier Y',
          recommended_reason: '理由：保持生产连续性优先于 3% 的成本差异。',
          cr_title: 'Change Request',
          cr_change: 'Supplier X → Supplier Y',
          status_pending: 'Pending Human Approval',
          approved: 'Approved',
          submit_button: '准备变更请求',
          approve_button: '批准变更',
          need_human: '需要人工确认',
          log_time: '09:40 AM',
          log_line: 'Change Request approved.',
          note: '建议被提交为变更请求，由人批准后生效。',
          what: 'Agent 比较两个选项，按目标选择 Y，并准备变更请求。',
          why: 'Agent 对业务目标负责，但不绕过人的批准——与数字员工的治理边界一致。',
        },
        result: {
          badge: 'RESULT',
          rows: [
            { label: '生产风险', value: '已定位并处理' },
            { label: '备选方案', value: 'Supplier Y（交期 2 天）' },
            { label: '变更请求', value: '已提交并获人工批准' },
          ],
          statement: '一个目标，八步行动——每一步都由上一步的结果决定。',
          what: '目标达成：风险被处理，动作被治理地完成。',
          why: '这就是 Agent：围绕目标的多步执行，带反馈与调整。',
        },
      },
    } as unknown as AgentDemoPayload,
  },

  nav: [
    { id: 'problem', label: '问题' },
    { id: 'workbench', label: '核心演示' },
    { id: 'deepdive', label: '深入理解' },
    { id: 'vs', label: '对比' },
    { id: 'scenario', label: '场景' },
    { id: 'connection', label: '概念连接' },
    { id: 'critical', label: '批判思考' },
  ],

  problem: {
    strip: {
      left_label: 'CHATBOT',
      left_flow: ['Question', 'Answer'],
      right_label: 'AGENT',
      right_flow: ['Goal', 'Plan', 'Act', 'Observe', 'Decide', 'Re-plan', 'Result'],
      punchline: '一个任务，不只是执行一次动作。',
    },
    eyebrow: 'SEE THE PROBLEM',
    title: '答案有用，但任务没有完成。',
    event: { time: '02:00 AM', title: 'Supplier X · Delivery Delay', detail: '+5 days' },
    human: {
      title: '用户交给 AI 的目标',
      items: ['评估生产风险', '准备最优处理方案'],
    },
    note: '这次不是问一个问题，而是交给你一项任务。',
    steps: [
      { time: '02:00', system: 'Supplier', action: '供应商发送延迟通知', status: 'Waiting for employee' },
      { time: '09:00', system: 'Human', action: '员工打开邮件', status: 'Work starts' },
      { time: '09:10', system: 'ERP', action: '查询库存覆盖', status: 'Manual query' },
      { time: '09:20', system: 'ERP', action: '查询受影响订单', status: 'Manual query' },
      { time: '09:35', system: 'SRM', action: '查询备选供应商', status: 'Manual query' },
      { time: '09:50', system: 'Human', action: '比较成本与交期', status: 'Manual comparison' },
      { time: '10:10', system: 'Human', action: '整理处理建议', status: 'Preparing' },
      { time: '10:30', system: 'Human', action: '提交变更请求', status: 'Waiting for approval' },
    ],
    chatbot: {
      user: '供应商 X 延迟了，会影响生产吗？',
      bot: '可能会有影响。建议检查库存和排产。',
      conclusion: '它给出了有用的答案，但任务没有完成。',
    },
    why: {
      columns: [
        { label: '企业已经有', items: ['数据', '工具', '业务规则', '人员', '系统'] },
        { label: '完成任务还需要', items: ['目标', '决定做什么', '用对工具', '解读结果', '决定下一步'] },
      ],
      conclusion: '困难的不只是执行动作，而是决定下一个动作应该是什么。',
    },
  },

  mentalModel: {
    eyebrow: 'MENTAL MODEL',
    title: 'Agent 的核心循环',
    steps: [
      'Goal',
      'Plan',
      'Act / Tool',
      'Observe',
      'Decide',
      'Re-plan',
      'Act / Tool',
      'Result',
    ],
    conclusion: 'Agent 不只是执行一个序列——它用前面行动的结果来决定下一步做什么。',
  },

  deepDive: {
    eyebrow: 'UNDERSTAND IT DEEPER',
    title: 'Agent 到底是什么？',
    definition:
      'Agent 是一种围绕目标选择并执行行动、观察行动结果，并根据当前上下文调整后续步骤的 AI 系统。',
    definition_note:
      '不同的 Agent 系统可能以不同方式实现这些能力。这个循环是一种常见的概念模式，而不是普适架构——也不要把它简化为"LLM + Tools + Memory + Planning"的固定配方。',
    cards: [
      { title: 'Goal', question: '要达成什么？', body: '一切行动的锚点。没有目标，工具调用只是零散动作。' },
      { title: 'Planning', question: '接下来该发生什么？', body: '把目标变成候选行动序列，并允许随新信息调整。' },
      { title: 'Tools', question: '系统能与什么交互？', body: '查询 ERP、检索库存、调用外部 API——Agent 的能力边界由工具定义。' },
      { title: 'Observation', question: '行动之后发生了什么？', body: '工具返回的结果被读取和解读，成为下一步决策的输入。' },
      { title: 'Decision', question: '现在该做什么？', body: '基于目标与观察选择下一步——这是 Agent 与固定 Workflow 的分水岭。' },
      { title: 'Re-planning', question: '下一步需要改变吗？', body: '新信息可能让原计划失效。重规划不是失败，而是 Agent 工作的常态。' },
      { title: 'Execution', question: '实际执行哪个动作？', body: '在边界内执行选定动作，并继续观察结果，直到目标达成或需要人介入。' },
    ],
  },

  comparisons: [
    {
      title: 'Agent vs Workflow',
      left_label: 'WORKFLOW',
      right_label: 'AGENT',
      rows: [
        { left: '预先定义好的步骤序列', right: '围绕目标的执行' },
        { left: 'A → B → C', right: '决定下一步做什么' },
        { left: '逻辑大部分预先写死', right: '下一个动作可以调整' },
        { left: '路径可预测', right: '路径动态变化' },
        { left: '适合稳定流程', right: '适合不确定的多步任务' },
      ],
      footnote: 'Agent 与 Workflow 也可以结合：企业系统完全可以在受治理的 Workflow 内部使用 Agent。',
    },
    {
      title: 'Agent vs Chatbot',
      left_label: 'CHATBOT',
      right_label: 'AGENT',
      rows: [
        { left: '以对话为中心', right: '以目标为中心' },
        { left: '通常等待用户输入', right: '可以由事件或任务驱动' },
        { left: '主要给出回应', right: '可以执行多步工作' },
        { left: '答案是终点', right: '行动 + 结果才是终点' },
        { left: '对话上下文', right: '任务上下文 + 工具' },
        { left: '回应后通常停下', right: '可以在任务循环中持续推进' },
      ],
      footnote: 'Chatbot 也可以使用工具——区别在于系统的主要工作模式，而不在于是否存在工具调用。',
    },
    {
      title: 'Agent vs Digital Employee',
      left_label: 'DIGITAL EMPLOYEE · WHO',
      right_label: 'AGENT · HOW',
      rows: [
        { left: 'Role', right: 'Goal' },
        { left: 'Access', right: 'Planning' },
        { left: 'Authority', right: 'Tools' },
        { left: 'Responsibility', right: 'Observation' },
        { left: 'Governance', right: 'Decision + Re-planning' },
        { left: 'Human Oversight', right: 'Execution' },
      ],
      footnote: 'Digital Employee 定义谁可以做这项工作；Agent 描述这项工作如何被完成。',
    },
  ],

  scenario: {
    eyebrow: 'ENTERPRISE SCENARIO',
    title: '一个由 Agent 驱动的数字采购员',
    intro: '当三个概念在同一条流程里各司其职，企业 AI 开始形成系统。',
    levels: [
      { tag: 'Event', title: '业务事件：供应商延迟被检测到', body: 'Supplier X 延迟 +5 天，异常进入处理流程。' },
      { tag: 'WHO', title: '数字员工：采购职责', body: '负责供应商风险与异常处理——角色、访问与治理边界已定义。' },
      { tag: 'HOW', title: 'Agent：目标 → 计划 → 工具 → 观察 → 重规划', body: '围绕"降低生产风险"自主推进多步任务，遇到关键动作交人批准。' },
      { tag: 'Systems', title: '企业系统：ERP / SRM / PLM', body: 'Agent 通过受控工具访问，不绕过任何系统权限。' },
      { tag: 'Human', title: '人工批准', body: '变更请求经采购经理批准后生效。' },
      { tag: 'Action', title: '业务动作完成', body: '备选供应商就位，生产连续性保住。' },
    ],
    takeaway_title: '三个概念形成一条认知链',
    takeaway_body:
      'Ontology 让 AI 理解关系，Digital Employee 定义谁在工作，Agent 让这份工作被真正完成。',
  },

  connection: {
    eyebrow: 'CONCEPT CONNECTION',
    prev: {
      label: 'DIGITAL EMPLOYEE · Concept 02',
      points: ['谁负责？它能访问什么？它能做什么？'],
    },
    current: {
      label: 'AGENT · Concept 03',
      points: ['工作如何被完成？下一步如何决定？'],
    },
    chain: ['Ontology', '理解关系', 'Digital Employee', '定义角色与权限', 'Agent', '完成多步任务'],
    statement:
      'Ontology 给 AI 一个企业世界的模型；Digital Employee 给 AI 在这个世界中的角色；Agent 让 AI 在这个角色内完成多步工作。',
  },

  misconceptions: {
    eyebrow: 'CRITICAL THINKING',
    title: '常见误解',
    intro: '关于 Agent 最容易混淆的六件事。',
    myth_label: '误解',
    reality_label: '现实',
    items: [
      {
        myth: '"Agent = 更聪明的 Chatbot"',
        reality: 'Chatbot 主要处理对话；Agent 围绕目标，通过行动与反馈来达成结果。',
        tagline: '对话 ≠ 任务闭环。',
      },
      {
        myth: '"真正的 Agent 从不问人"',
        reality: '企业 Agent 可以在人工批准边界内运行——自主程度是设计选择，不是定义。',
        tagline: '自主有边界，确认是设计。',
      },
      {
        myth: '"有 LLM 就是 Agent"',
        reality: 'LLM 可以是 Agent 系统的一部分，但 Agent 的核心是目标导向的行动与环境交互。',
        tagline: '模型 ≠ 系统。',
      },
      {
        myth: '"会调 API 就是 Agent"',
        reality: '一次工具调用只是一个动作；Agent 把多个行动协调到一个目标上。',
        tagline: '动作 ≠ 协调。',
      },
      {
        myth: '"Agent 规划 = 固定 Workflow"',
        reality: 'Agent 会根据观察与变化的上下文调整下一步——这正是它与固定流程的区别。',
        tagline: '计划会随信息更新。',
      },
      {
        myth: '"Agent 可以无限自主地做任何事情"',
        reality: '真实的企业 Agent 在定义好的工具、权限、业务规则与审批边界内运行。',
        tagline: '无边界 ≠ Agent。',
      },
    ],
  },

  finalModel: {
    steps: [
      'ENTERPRISE',
      'ONTOLOGY · 理解',
      'DIGITAL EMPLOYEE · WHO',
      'AGENT · HOW',
      'Goal → Plan → Tool → Observe → Decide → Re-plan → Action',
    ],
    conclusion: '理解企业 → 承担工作 → 完成任务。',
  },

  further: {
    eyebrow: '继续学习',
    back_home: '返回首页',
    review_label: '重看演示',
  },
};
