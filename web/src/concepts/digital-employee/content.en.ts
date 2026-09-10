import type { ConceptSpec } from '../../engine/types';
import type { DeDemoPayload } from './types';

/** Digital Employee (EN) — Concept 02. Same concept_id / demo state machine / quiz answer as zh (design doc §39). */
export const spec: ConceptSpec = {
  id: 'digital-employee',
  demo: {
    type: 'digital-employee',
    payload: {
      workbench_label: 'INTERACTIVE WORKBENCH',
      title: 'See How a Digital Employee Handles It',
      sim_note: 'This demo makes no calls to real ERP or supplier systems. Every operation is a deterministic pedagogical simulation.',
      status_label: 'Status',
      status_processing: 'Processing',
      status_waiting: 'Waiting for human confirmation',
      status_done: 'Case resolved',
      event_badge: 'BUSINESS EVENT',
      agent_badge: 'DIGITAL EMPLOYEE',
      start_button: 'Start Processing',
      next_button: 'Next Step',
      stepper: ['Event', 'Context', 'Reason', 'Verify', 'Action', 'Result'],

      event: {
        time: '02:00 AM',
        title: 'Supplier X · Delivery Delay',
        detail: '+5 days',
        detected: 'New business event detected.',
        detected_body: 'Supplier X delivery delay detected: Part 001, +5 days.',
        note: 'A digital employee does not wait to be asked — it can be triggered by a business event.',
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
        note: 'It begins to understand how this exception relates to other objects in the enterprise.',
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
        note: 'Before acting, verify the key results.',
      },

      action: {
        recommended_badge: 'RECOMMENDED ACTION',
        recommended_body: 'Production risk detected. Alternative supplier available.',
        alt_supplier: 'Supplier Y · Alternative available',
        alt_price: 'Price +6%',
        cr_title: 'Change Request',
        cr_change: 'Supplier X → Supplier Y',
        status_pending: 'Pending Approval',
        submit_button: 'Submit Change Request',
        submitted: '✓ Change Request Created · Status: Pending Approval',
        need_human: 'Human confirmation required',
        approve_button: 'Approve Change',
        approved: 'Approved',
        log_time: '06:14 AM',
        log_line: 'Change Request approved.',
        neq_left: '"Consider switching to Supplier Y" — Recommendation',
        neq_right: '"Supplier change request submitted" — Action',
        neq_note: 'A recommendation is not an action. Recommendation → Verification → Authorization → Action.',
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
        statement: "It wasn't answering a question. It was handling a piece of work.",
        definition: 'That is a Digital Employee.',
        cta: 'Understand It Deeper',
        cta_href: '#deepdive',
      },
    } satisfies DeDemoPayload,
  },

  nav: [
    { id: 'problem', label: 'Problem' },
    { id: 'workbench', label: 'Core Demo' },
    { id: 'deepdive', label: 'Deep Dive' },
    { id: 'scenario', label: 'Scenario' },
    { id: 'connection', label: 'Connection' },
    { id: 'critical', label: 'Critical Thinking' },
  ],

  problem: {
    strip: {
      left_label: 'CHATBOT',
      left_flow: ['Question', '   ↓', 'Answer'],
      right_label: 'DIGITAL EMPLOYEE',
      right_flow: ['Business Event', '   ↓', 'Work'],
      punchline: 'Answering a question is not the same as getting work done.',
    },
    eyebrow: 'SEE THE PROBLEM',
    title: 'Why does something that happens at 2:00 AM wait until 9:00 AM to even start being handled?',
    event: { time: '02:00 AM', title: 'Supplier X · Delivery Delay', detail: '+5 days' },
    human: {
      title: 'The procurement specialist has to',
      items: ['Check inventory', 'Confirm delivery dates', 'Judge the impact', 'Find options', 'Submit for handling'],
    },
    note: 'The supplier has already sent the notification — but the enterprise handling process has not started.',
    steps: [
      { time: '02:00', system: 'Supplier', action: 'Supplier sends delay notification', status: 'Waiting for employee' },
      { time: '09:00', system: 'Human', action: 'Employee opens the email', status: 'Work starts' },
      { time: '09:05', system: 'ERP', action: 'Log into ERP, check inventory', status: 'Manual query' },
      { time: '09:15', system: 'SRM', action: 'Log into SRM, confirm supplier dates', status: 'Manual query' },
      { time: '09:30', system: 'Excel', action: 'Open Excel, calculate inventory risk', status: 'Manual calculation' },
      { time: '10:00', system: 'Human', action: 'Compile the report', status: 'Preparing' },
      { time: '10:30', system: 'Human', action: 'Submit to manager for approval', status: 'Waiting for approval' },
    ],
    chatbot: {
      user: '"Supplier X is delayed — will it affect production?"',
      bot: '"It might. Consider checking inventory and production schedules."',
      conclusion: 'It answered the question, but the work still remains.',
    },
    why: {
      columns: [
        { label: 'DATA', items: ['ERP', 'SRM', 'PLM', 'MES', 'All the data exists'] },
        { label: 'HUMAN', items: ['Query', 'Copy', 'Judge', 'Fill in', 'Humans connect the dots'] },
        { label: 'WORK', items: ['Spot exceptions', 'Assess impact', 'Prepare options', 'Move the process'] },
      ],
      conclusion: 'What the enterprise often lacks is not more data — it is an actor that can take on work within clear boundaries.',
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
    conclusion: 'What it truly changes is not the way we chat — it is the role of AI in the enterprise.',
  },

  deepDive: {
    eyebrow: 'UNDERSTAND IT DEEPER',
    title: 'What kind of AI starts to feel like an "employee" in the enterprise?',
    definition:
      'A Digital Employee is an AI system assigned a defined business role, with access to relevant enterprise information and the ability to perform a bounded set of actions governed by permissions and business rules.',
    definition_note:
      'A digital employee may be implemented with mechanisms such as agents — but "digital employee" describes its role and work boundaries in the enterprise, not a specific technical architecture.',
    cards: [
      {
        title: 'Role — what is it responsible for?',
        question: 'What is it responsible for?',
        body: 'A digital employee is not an AI that "can do anything". It is assigned a defined business role — e.g. a digital procurement specialist.',
        lists: [
          {
            label: 'Digital Procurement Employee · responsible for',
            tone: 'allow',
            items: ['Supplier Risk', 'Delivery Monitoring', 'Price Anomaly', 'Exception Handling'],
          },
        ],
      },
      {
        title: 'Access — what can it see?',
        question: 'What can it see?',
        body: 'Its scope of work depends on the information it is allowed to access. What it can see is itself a boundary.',
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
        title: 'Action — what can it do?',
        question: 'What can it do?',
        body: 'Both what it can see and what it can do should have explicit boundaries. Critical actions stay with humans.',
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
        title: 'Governance — under what conditions?',
        question: 'Where are the boundaries?',
        body: 'No complex technology — just three questions: who is responsible, what can be done, and when can it be done.',
        lists: [
          { label: 'WHO — who is responsible?', tone: 'pending', items: ['A defined business owner'] },
          { label: 'WHAT — what can it do?', tone: 'pending', items: ['An action list and a forbidden list'] },
          { label: 'WHEN — when can it act?', tone: 'pending', items: ['Trigger conditions and approval thresholds'] },
        ],
      },
    ],
    governance_conclusion: 'A digital employee earns its place in the enterprise not because it "can do things", but because its behavior has boundaries.',
  },

  comparison: {
    title: 'Chatbot vs Digital Employee',
    left_label: 'CHATBOT',
    right_label: 'DIGITAL EMPLOYEE',
    rows: [
      { left: 'Conversation assistant', right: 'Enterprise work actor' },
      { left: 'Usually waits for questions', right: 'Can be triggered by business events' },
      { left: 'Answers / suggests', right: 'Moves business work forward' },
      { left: 'Conversation context', right: 'Authorized enterprise information' },
      { left: 'Typically limited action scope', right: 'Governed action scope' },
      { left: 'No explicit enterprise work responsibility', right: 'Defined business role and responsibility' },
    ],
    footnote: 'This does not mean no chatbot can call tools — the two emphasize different modes of work.',
  },

  scenario: {
    eyebrow: 'ENTERPRISE SCENARIO',
    title: 'A Day of a Digital Procurement Specialist',
    intro: 'If this role really entered the enterprise, what would it do every day?',
    levels: [
      { tag: '02:00', title: 'Supplier X delivery delay detected', body: 'Triggered by a business event: Part 001 delayed by +5 days. Handling starts automatically.' },
      { tag: '02:05', title: 'Impact identified', body: 'Impact located along the Ontology relationship chain: Product A · Order #1024.' },
      { tag: '02:10', title: 'Alternative supplier found', body: 'Alternatives compared: Supplier Y available at +6% price.' },
      { tag: '02:15', title: 'Change request prepared', body: 'Change request ready, moved to pending-approval state.' },
      { tag: '08:00', title: 'Procurement manager reviews', body: 'The manager arrives and reviews the handling record of the digital employee.' },
      { tag: '09:00', title: 'Approved', body: 'Human approval. The change moves into execution.' },
      { tag: '14:00', title: 'Material price +8%', body: 'A second event: threshold checked, no alert triggered — recorded only.' },
    ],
    takeaway_title: 'Continuous business responsibility',
    takeaway_body: 'A digital employee takes on continuous business responsibility — not one-off Q&A.',
  },

  connection: {
    eyebrow: 'CONCEPT CONNECTION',
    prev: {
      label: 'ONTOLOGY · Concept 01',
      points: ['What exists in the enterprise?', 'How are things related?'],
    },
    current: {
      label: 'DIGITAL EMPLOYEE · Concept 02',
      points: ['Who works here?', 'What can it access? What can it do?'],
    },
    chain: ['Ontology', 'Understand the Enterprise', 'Digital Employee', 'Work in the Enterprise'],
    statement: 'Ontology gives AI a model of the enterprise world; the Digital Employee lets AI take on work within it.',
  },

  misconceptions: {
    eyebrow: 'CRITICAL THINKING',
    title: 'Common Misconceptions',
    intro: 'Four of the most common confusions.',
    myth_label: 'Myth',
    reality_label: 'Reality',
    items: [
      {
        myth: '"Digital employee = chatbot"',
        reality: 'A chatbot mainly handles conversation; a digital employee is defined by taking on a clear business role and moving work forward within authorized boundaries.',
        tagline: 'Conversation ≠ work.',
      },
      {
        myth: '"A digital employee must be fully autonomous"',
        reality: 'Not necessarily. Critical business actions can require human confirmation — human oversight is part of the design.',
        tagline: 'Autonomy has boundaries; confirmation is design.',
      },
      {
        myth: '"Digital employee = a stronger LLM"',
        reality: 'It is not just model capability. Enterprise role, information access, action scope, and governance boundaries matter just as much.',
        tagline: 'Role and boundaries matter more than model size.',
      },
      {
        myth: '"Recommendation = action"',
        reality: '"Consider switching suppliers" is not "a supplier change request has been submitted". A recommendation must pass verification and authorization before it becomes an action.',
        tagline: 'Recommendation ≠ Action.',
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
    conclusion: 'From understanding the world to working within it.',
  },

  further: {
    eyebrow: 'Keep Learning',
    back_home: 'Back to Home',
    review_label: 'Review the Demo',
  },
};
