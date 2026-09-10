import type { ConceptSpec } from '../../engine/types';
import type { DeDemoPayload } from './types';

/**
 * Digital Employee（数字员工）中文 ConceptSpec —— Concept 02。
 * 与 Ontology 构成主线互补：Understand the World → Work in the World。
 * 设计真源：《SeeAI Digital Employee 网页详细设计》§01–§40。
 */
export const spec: ConceptSpec = {
  id: 'digital-employee',
  demo: {
    type: 'digital-employee',
    payload: {
      workbench_label: 'INTERACTIVE WORKBENCH',
      title: '看看数字员工怎么处理这件事',
      sim_note: '下面的演示不会调用真实 ERP 或供应商系统。所有操作都是确定性教学模拟。',
      status_label: 'Status',
      status_processing: 'Processing',
      status_waiting: 'Waiting for human confirmation',
      status_done: 'Case resolved',
      event_badge: 'BUSINESS EVENT',
      agent_badge: 'DIGITAL EMPLOYEE',
      start_button: '开始处理',
      next_button: '下一步',
      stepper: ['Event', 'Context', 'Reason', 'Verify', 'Action', 'Result'],

      event: {
        time: '02:00 AM',
        title: 'Supplier X · Delivery Delay',
        detail: '+5 days',
        detected: 'New business event detected.',
        detected_body: 'Supplier X delivery delay detected: Part 001, +5 days.',
        note: '数字员工不是等人来问，而是可以由业务事件触发工作。',
      },

      context: {
        chain: [
          { from: 'Supplier X', verb: '↓ supplies' },
          { from: 'Part 001', verb: '↓ contained in' },
          { from: 'Product A', verb: '↓ in production for' },
        ],
        chain_end: 'Order #1024',
        facts: [
          { label: 'Inventory', value: '3 days' },
          { label: 'Supplier delay', value: '5 days' },
        ],
        note: '它开始理解这个异常与企业其他对象之间的关系。',
      },

      reasoning: {
        path: [
          'Supplier X',
          '↓ Part 001',
          '↓ Product A',
          '↓ Production Order #1024',
          'Inventory: 3 days',
          'Delay: 5 days',
          '↓ Production Risk',
        ],
        risk_badge: 'RISK DETECTED',
        facts: [
          { label: 'Inventory coverage', value: '3 days' },
          { label: 'Expected delay', value: '5 days' },
          { label: 'Assessment', value: 'Production interruption likely' },
        ],
      },

      verify: {
        items: ['Supplier confirmed', 'Part matched', 'Product relationship confirmed', 'Inventory data checked'],
        note: '执行前，先核验关键结果。',
      },

      action: {
        recommended_badge: 'RECOMMENDED ACTION',
        recommended_body: 'Production risk detected. Alternative supplier available.',
        alt_supplier: 'Supplier Y · Alternative available',
        alt_price: 'Price +6%',
        cr_title: 'Change Request',
        cr_change: 'Supplier X → Supplier Y',
        status_pending: 'Pending Approval',
        submit_button: '提交变更请求',
        submitted: '✓ Change Request Created · Status: Pending Approval',
        need_human: '需要人工确认',
        approve_button: '批准变更',
        approved: 'Approved',
        log_time: '06:14 AM',
        log_line: 'Change Request approved.',
        neq_left: '建议更换供应商 — Recommendation',
        neq_right: '供应商变更请求已提交 — Action',
        neq_note: '提出建议，不等于执行动作。建议 → 核验 → 授权 → 动作。',
      },

      result: {
        badge: 'CASE RESOLVED',
        rows: [
          { label: 'Risk', value: 'Production interruption identified' },
          { label: 'Impact', value: 'Product A · Order #1024' },
          { label: 'Alternative', value: 'Supplier Y' },
          { label: 'Action', value: 'Change Request submitted' },
          { label: 'Approval', value: 'Human confirmed' },
        ],
        before_label: 'Before',
        before_value: 'Multiple manual handoffs',
        after_label: 'After',
        after_value: 'Continuous processing + human confirmation',
      },

      complete: {
        statement: '它不是在回答一个问题。它在处理一项工作。',
        definition: '这就是 Digital Employee。',
        cta: '深入理解',
        cta_href: '#deepdive',
      },
    } satisfies DeDemoPayload,
  },

  nav: [
    { id: 'problem', label: '问题' },
    { id: 'workbench', label: '核心演示' },
    { id: 'deepdive', label: '深入理解' },
    { id: 'scenario', label: '场景' },
    { id: 'connection', label: '概念连接' },
    { id: 'critical', label: '批判思考' },
  ],

  problem: {
    strip: {
      left_label: 'CHATBOT',
      left_flow: ['Question', '   ↓', 'Answer'],
      right_label: 'DIGITAL EMPLOYEE',
      right_flow: ['Business Event', '   ↓', 'Work'],
      punchline: '回答问题，不等于完成工作。',
    },
    eyebrow: 'SEE THE PROBLEM',
    title: '凌晨 2 点发生的事情，为什么要等到早上 9 点才能开始处理？',
    event: { time: '02:00 AM', title: 'Supplier X · Delivery Delay', detail: '+5 days' },
    human: {
      title: '采购专员需要',
      items: ['检查库存', '确认交期', '判断影响', '寻找方案', '提交处理'],
    },
    note: '供应商已经发来了通知，但企业的处理流程还没有开始。',
    steps: [
      { time: '02:00', system: 'Supplier', action: '供应商发送延迟通知', status: 'Waiting for employee' },
      { time: '09:00', system: 'Human', action: '员工打开邮件', status: 'Work starts' },
      { time: '09:05', system: 'ERP', action: '登录 ERP 查询库存', status: 'Manual query' },
      { time: '09:15', system: 'SRM', action: '登录 SRM 确认供应商交期', status: 'Manual query' },
      { time: '09:30', system: 'Excel', action: '打开 Excel 计算库存风险', status: 'Manual calculation' },
      { time: '10:00', system: 'Human', action: '整理汇报', status: 'Preparing' },
      { time: '10:30', system: 'Human', action: '提交主管审批', status: 'Waiting for approval' },
    ],
    chatbot: {
      user: '“供应商 X 延迟了，会影响生产吗？”',
      bot: '“可能会有影响。建议检查库存和排产。”',
      conclusion: '它回答了问题，但没有继续处理问题。',
    },
    why: {
      columns: [
        { label: 'DATA', items: ['ERP', 'SRM', 'PLM', 'MES', '都已经有数据'] },
        { label: 'HUMAN', items: ['查询', '复制', '判断', '填写', '需要人串联'] },
        { label: 'WORK', items: ['发现异常', '分析影响', '准备方案', '推进流程'] },
      ],
      conclusion: '企业真正缺少的，不一定是更多数据，而是一个能够在明确边界内承担工作的主体。',
    },
  },

  mentalModel: {
    steps: [
      'BUSINESS EVENT',
      'DIGITAL EMPLOYEE',
      'Understand Context',
      'Assess Impact',
      'Prepare Action',
      'Verify',
      'Human Confirmation',
      'Action',
    ],
    conclusion: '它真正改变的，不是“聊天方式”，而是 AI 在企业中的角色。',
  },

  deepDive: {
    eyebrow: 'UNDERSTAND IT DEEPER',
    title: '什么样的 AI，才开始像企业里的一个“员工”？',
    definition:
      '数字员工是一类被赋予明确业务职责的 AI 系统：它可以在规定的业务范围内访问相关企业信息，并执行一组受到权限和业务规则约束的动作。',
    definition_note:
      '数字员工可以使用 Agent 等技术机制实现，但“数字员工”描述的是它在企业中的角色和工作边界，而不是某一种具体技术架构。',
    cards: [
      {
        title: 'Role — 它负责什么？',
        question: '负责什么？',
        body: '数字员工不是“什么都能做”的 AI。它被赋予一个明确的业务角色，例如数字采购员。',
        lists: [
          {
            label: 'Digital Procurement Employee · 负责',
            tone: 'allow',
            items: ['Supplier Risk', 'Delivery Monitoring', 'Price Anomaly', 'Exception Handling'],
          },
        ],
      },
      {
        title: 'Access — 它可以看到什么？',
        question: '看什么？',
        body: '数字员工的工作范围取决于它被允许访问的信息。能看什么，本身就有边界。',
        lists: [
          {
            label: 'Allowed',
            tone: 'allow',
            items: ['Supplier', 'Part', 'BOM', 'Inventory', 'Purchase Order'],
          },
          {
            label: 'Denied',
            tone: 'deny',
            items: ['Employee Salary', 'Unrelated Customer Data', 'Unauthorized Contract'],
          },
        ],
      },
      {
        title: 'Action — 它可以做什么？',
        question: '做什么？',
        body: '能看到什么和能做什么，都应该有明确边界。关键动作留在人手里。',
        lists: [
          {
            label: 'Allowed',
            tone: 'allow',
            items: ['Create Risk Alert', 'Create Exception Task', 'Query Alternative Supplier', 'Submit Change Request'],
          },
          {
            label: 'Human Confirmation',
            tone: 'pending',
            items: ['Change Critical Supplier', 'Modify Contract', 'Approve High-value Purchase'],
          },
        ],
      },
      {
        title: 'Governance — 什么情况下可以做？',
        question: '边界在哪？',
        body: '不讲复杂技术，只问三个问题：谁负责、能做什么、什么时候可以做。',
        lists: [
          { label: 'WHO · 谁负责？', tone: 'pending', items: ['明确的业务责任人'] },
          { label: 'WHAT · 能做什么？', tone: 'pending', items: ['动作清单与禁止清单'] },
          { label: 'WHEN · 什么时候可以做？', tone: 'pending', items: ['触发条件与审批门槛'] },
        ],
      },
    ],
    governance_conclusion: '数字员工真正进入企业，不只是因为它“会做事”，而是因为它的行为有边界。',
  },

  comparison: {
    title: 'Chatbot vs Digital Employee',
    left_label: 'CHATBOT',
    right_label: 'DIGITAL EMPLOYEE',
    rows: [
      { left: '对话助手', right: '企业工作主体' },
      { left: '等待提问', right: '可由业务事件触发' },
      { left: '回答问题', right: '推进业务工作' },
      { left: '对话上下文', right: '授权企业信息' },
      { left: '输出建议', right: '可执行受治理动作' },
      { left: '无明确职责', right: '明确职责与边界' },
    ],
    footnote: '这不是说所有 Chatbot 都不能调用工具，而是两者强调的工作模式不同。',
  },

  scenario: {
    eyebrow: 'ENTERPRISE SCENARIO',
    title: '一个数字采购员的一天',
    intro: '如果这个角色真的进入企业，它每天会做什么？',
    levels: [
      { tag: '02:00', title: 'Supplier X delivery delay detected', body: '业务事件触发：零件 001 延迟 +5 天，自动开始处理。' },
      { tag: '02:05', title: 'Impact identified', body: '沿 Ontology 关系链定位影响：Product A · Order #1024。' },
      { tag: '02:10', title: 'Alternative supplier found', body: '比选备选供应商：Supplier Y 可用，价格 +6%。' },
      { tag: '02:15', title: 'Change request prepared', body: '变更请求准备完毕，进入待审批状态。' },
      { tag: '08:00', title: 'Procurement manager reviews', body: '采购经理到岗，复核数字员工的处理记录。' },
      { tag: '09:00', title: 'Approved', body: '人工批准，变更进入执行。' },
      { tag: '14:00', title: 'Material price +8%', body: '第二个事件：核对价格阈值，未触发预警，仅记录。' },
    ],
    takeaway_title: '持续性的业务职责',
    takeaway_body: '数字员工承担的是持续性的业务职责，而不是一次性的问答。',
  },

  connection: {
    eyebrow: 'CONCEPT CONNECTION',
    prev: {
      label: 'ONTOLOGY · Concept 01',
      points: ['企业里有什么？', '它们如何关联？'],
    },
    current: {
      label: 'DIGITAL EMPLOYEE · Concept 02',
      points: ['谁在这里工作？', '它能看到什么？它能做什么？'],
    },
    chain: ['Ontology', 'Understand the Enterprise', 'Digital Employee', 'Work in the Enterprise'],
    statement: 'Ontology 让 AI 理解企业世界；Digital Employee 让 AI 在这个世界里承担工作。',
  },

  misconceptions: {
    eyebrow: 'CRITICAL THINKING',
    title: 'Common Misconceptions',
    intro: '四个最容易混淆的判断。',
    myth_label: '误解',
    reality_label: '事实',
    items: [
      {
        myth: '“数字员工 = Chatbot”',
        reality: 'Chatbot 主要解决对话；数字员工强调承担明确业务职责，并在授权范围内推进工作。',
        tagline: '对话 ≠ 工作。',
      },
      {
        myth: '“数字员工必须完全自主”',
        reality: '不一定。关键业务动作可以经过人工确认——人的监督本身就是设计的一部分（Human oversight is part of the design）。',
        tagline: '自主有边界，确认是设计。',
      },
      {
        myth: '“数字员工 = 更强的 LLM”',
        reality: '不只是模型能力。企业角色、信息访问、行动范围和治理边界同样重要。',
        tagline: '角色与边界，比模型大小更关键。',
      },
      {
        myth: '“建议 = 动作”',
        reality: '“建议更换供应商”并不等于“供应商变更请求已经提交”。建议需要经过核验与授权，才能成为动作。',
        tagline: 'Recommendation ≠ Action。',
      },
    ],
  },

  finalModel: {
    steps: [
      'ENTERPRISE',
      'DIGITAL EMPLOYEE',
      'ROLE · ACCESS · ACTION',
      'GOVERNANCE',
      'HUMAN OVERSIGHT',
    ],
    conclusion: '从理解世界，到在世界里工作。',
  },

  further: {
    eyebrow: '继续学习',
    back_home: '返回首页',
    review_label: '重看演示',
  },
};
