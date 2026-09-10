import type { ConceptSpec } from '../../engine/types';
import type { AgentDemoPayload } from './types';

/** Agent (EN) — Concept 03. Same concept_id / demo state machine / quiz answer as zh (§39). */

export const spec: ConceptSpec = {
  id: 'agent',
  demo: {
    type: 'agent',
    payload: {
      workbench_label: 'INTERACTIVE WORKBENCH',
      title: 'See How an Agent Completes a Task',
      sim_note: 'No real enterprise systems are accessed. Every step is a deterministic pedagogical simulation.',
      goal_badge: 'GOAL',
      goal_text: 'Reduce production risk caused by Supplier X delay',
      goal_detail: 'Assess the production risk and prepare the best response.',
      stepper: ['Goal', 'Plan', 'Tool', 'Observe', 'Decide', 'Re-plan', 'Action', 'Result'],
      start_button: 'Start the Task',
      next_button: 'Next',
      reset_button: 'Replay',
      status_label: 'Status',
      status_processing: 'Working',
      status_done: 'Task complete',
      what_label: 'What happened',
      why_label: 'Why this step matters',

      steps: {
        goal: {
          note: 'The Agent starts with an outcome, not a single instruction.',
          what: 'The user gives a goal: reduce the production risk caused by Supplier X’s delay.',
          why: 'The goal is the anchor for every later step — progress is measured against it.',
        },
        plan: {
          badge: 'PLAN',
          plan_label: 'Initial plan',
          items: [
            'Identify affected products',
            'Check inventory coverage',
            'Find alternative suppliers',
            'Compare the options',
            'Prepare a recommendation',
          ],
          note: 'A common pattern is to form a plan, then adapt it as new information appears — not to lock a complete plan upfront.',
          what: 'The Agent turns the goal into a sequence of possible actions.',
          why: 'Without a plan, tool calls are just isolated moves; the plan makes each step serve the goal.',
        },
        tool: {
          badge: 'TOOL',
          tool_name: 'ERP Query',
          query_label: 'Query',
          query: ['Supplier X', 'Part 001', 'Product A', 'Order #1024'],
          result_label: 'Returns',
          result: ['Inventory coverage: 3 days', 'Supplier delay: 5 days'],
          note: 'The Agent does not naturally own enterprise information — it gets it through tools.',
          what: 'The Agent calls the ERP tool and walks the object chain to inventory and delay data.',
          why: 'Tools are the bridge between the Agent and enterprise systems — without them, it can only reason in a vacuum.',
        },
        observe: {
          badge: 'OBSERVE',
          facts: [
            { label: 'Inventory coverage', value: '3 days' },
            { label: 'Supplier delay', value: '5 days' },
          ],
          comparison: '5 days > 3 days → Production risk',
          conclusion: 'Production interruption risk confirmed',
          note: 'The results of actions are observed and interpreted, not ignored.',
          what: 'The ERP returns 3 days of inventory against a 5-day delay; the Agent confirms production risk.',
          why: 'Observation is the entry point of the feedback loop — without it, the Agent cannot know what to do next.',
        },
        decide: {
          badge: 'DECIDE',
          decision: 'Next: find alternative suppliers',
          note: 'The Agent does not simply continue a fixed list — new information changes what it needs to do next.',
          what: 'Based on the “risk confirmed” observation, the Agent decides to prioritize finding alternatives.',
          why: 'Decision is the watershed between an Agent and a fixed workflow: the next step depends on the current context.',
        },
        replan: {
          badge: 'RE-PLAN',
          original_label: 'Original plan',
          original: ['Check inventory', 'Find suppliers', 'Compare options', 'Recommend'],
          observation_label: 'New observation',
          observation: 'Production risk confirmed — time now matters more than price',
          updated_label: 'Updated plan',
          updated: [
            'Prioritize alternatives with available capacity',
            'Compare lead time and cost',
            'Prepare the safest option',
          ],
          callout: 'New information changed the next step.',
          note: 'Re-planning is not failure — it is the normal state of Agent work.',
          what: 'The original plan is re-sequenced from “generic comparison” to “capacity and lead time first”.',
          why: 'This is the defining Agent capability — adjusting actions as task information changes.',
        },
        action: {
          badge: 'ACTION',
          options_label: 'Alternatives returned by the tool',
          options: [
            { name: 'Supplier Y', lead: 'Lead time 2 days', cost: 'Cost +6%' },
            { name: 'Supplier Z', lead: 'Lead time 4 days', cost: 'Cost +3%' },
          ],
          recommended_badge: 'RECOMMENDATION',
          recommended: 'Recommend switching to Supplier Y',
          recommended_reason: 'Reason: maintaining production continuity outweighs a 3% cost difference.',
          cr_title: 'Change Request',
          cr_change: 'Supplier X → Supplier Y',
          status_pending: 'Pending Human Approval',
          approved: 'Approved',
          submit_button: 'Prepare Change Request',
          approve_button: 'Approve Change',
          need_human: 'Human confirmation required',
          log_time: '09:40 AM',
          log_line: 'Change Request approved.',
          note: 'The recommendation becomes a change request, effective once a human approves it.',
          what: 'The Agent compares both options, chooses Y against the goal, and prepares the change request.',
          why: 'The Agent answers to the business goal — but it does not bypass human approval, consistent with the digital employee’s governance boundaries.',
        },
        result: {
          badge: 'RESULT',
          rows: [
            { label: 'Production risk', value: 'Identified and addressed' },
            { label: 'Alternative', value: 'Supplier Y (2-day lead time)' },
            { label: 'Change request', value: 'Submitted and human-approved' },
          ],
          statement: 'One goal, eight steps — each one decided by the result of the step before it.',
          what: 'Goal achieved: risk addressed, action executed under governance.',
          why: 'That is an Agent: goal-directed multi-step execution with feedback and adaptation.',
        },
      },
    } as unknown as AgentDemoPayload,
  },

  nav: [
    { id: 'problem', label: 'Problem' },
    { id: 'workbench', label: 'Core Demo' },
    { id: 'deepdive', label: 'Deep Dive' },
    { id: 'vs', label: 'Compare' },
    { id: 'scenario', label: 'Scenario' },
    { id: 'connection', label: 'Connection' },
    { id: 'critical', label: 'Critical Thinking' },
  ],

  problem: {
    strip: {
      left_label: 'CHATBOT',
      left_flow: ['Question', 'Answer'],
      right_label: 'AGENT',
      right_flow: ['Goal', 'Plan', 'Act', 'Observe', 'Decide', 'Re-plan', 'Result'],
      punchline: 'A task is not a single action.',
    },
    eyebrow: 'SEE THE PROBLEM',
    title: 'The answer is useful, but the task is not finished.',
    event: { time: '02:00 AM', title: 'Supplier X · Delivery Delay', detail: '+5 days' },
    human: {
      title: 'The goal given to the AI',
      items: ['Assess the production risk', 'Prepare the best response'],
    },
    note: 'This time it is not a question — it is a task.',
    steps: [
      { time: '02:00', system: 'Supplier', action: 'Supplier sends delay notice', status: 'Waiting for employee' },
      { time: '09:00', system: 'Human', action: 'Employee opens the email', status: 'Work starts' },
      { time: '09:10', system: 'ERP', action: 'Check inventory coverage', status: 'Manual query' },
      { time: '09:20', system: 'ERP', action: 'Check affected orders', status: 'Manual query' },
      { time: '09:35', system: 'SRM', action: 'Check alternative suppliers', status: 'Manual query' },
      { time: '09:50', system: 'Human', action: 'Compare cost and lead time', status: 'Manual comparison' },
      { time: '10:10', system: 'Human', action: 'Prepare recommendation', status: 'Preparing' },
      { time: '10:30', system: 'Human', action: 'Submit change request', status: 'Waiting for approval' },
    ],
    chatbot: {
      user: 'Will this delay affect production?',
      bot: 'It might. Check inventory and production schedules.',
      conclusion: 'The answer is useful, but the task is not finished.',
    },
    why: {
      columns: [
        { label: 'The enterprise already has', items: ['Data', 'Tools', 'Business rules', 'People', 'Systems'] },
        { label: 'A task still needs', items: ['A goal', 'Decide what to do', 'Use the right tool', 'Interpret the result', 'Decide what is next'] },
      ],
      conclusion: 'The difficult part is not only taking an action. It is deciding what the next action should be.',
    },
  },

  mentalModel: {
    eyebrow: 'MENTAL MODEL',
    title: 'The Agent Loop',
    steps: ['Goal', 'Plan', 'Act / Tool', 'Observe', 'Decide', 'Re-plan', 'Act / Tool', 'Result'],
    conclusion: 'An Agent is not just executing a sequence — it uses the results of previous actions to decide what to do next.',
  },

  deepDive: {
    eyebrow: 'UNDERSTAND IT DEEPER',
    title: 'What exactly is an Agent?',
    definition:
      'An AI agent is a system that pursues a goal by selecting and executing actions, observing their results, and adapting its next steps based on the available context.',
    definition_note:
      'Different Agent systems may implement these capabilities differently. The loop is a common conceptual pattern, not a universal architecture — resist reducing it to a fixed recipe of “LLM + Tools + Memory + Planning”.',
    cards: [
      { title: 'Goal', question: 'What are we trying to achieve?', body: 'The anchor for every action. Without a goal, tool calls are just isolated moves.' },
      { title: 'Planning', question: 'What should happen next?', body: 'Turns the goal into a candidate sequence of actions, open to adjustment as new information arrives.' },
      { title: 'Tools', question: 'What can the system interact with?', body: 'Querying the ERP, checking inventory, calling external APIs — the tool set defines the Agent’s capability boundary.' },
      { title: 'Observation', question: 'What happened after an action?', body: 'Tool results are read and interpreted, becoming the input for the next decision.' },
      { title: 'Decision', question: 'What should happen now?', body: 'Choosing the next step against the goal and observations — the watershed between an Agent and a fixed workflow.' },
      { title: 'Re-planning', question: 'Does the next step need to change?', body: 'New information can invalidate the original plan. Re-planning is not failure — it is the normal state of Agent work.' },
      { title: 'Execution', question: 'What action is actually taken?', body: 'Executing the chosen action within boundaries, then observing again — until the goal is met or a human must step in.' },
    ],
  },

  comparisons: [
    {
      title: 'Agent vs Workflow',
      left_label: 'WORKFLOW',
      right_label: 'AGENT',
      rows: [
        { left: 'Predefined sequence', right: 'Goal-oriented execution' },
        { left: 'A → B → C', right: 'Decide the next step' },
        { left: 'Logic mostly predefined', right: 'Next action can adapt' },
        { left: 'Predictable path', right: 'Dynamic path' },
        { left: 'Excellent for stable processes', right: 'Useful for uncertain, multi-step tasks' },
      ],
      footnote: 'Agents and workflows can also be combined — an enterprise system may run an Agent inside a governed workflow.',
    },
    {
      title: 'Agent vs Chatbot',
      left_label: 'CHATBOT',
      right_label: 'AGENT',
      rows: [
        { left: 'Conversation-oriented', right: 'Goal-oriented' },
        { left: 'Usually waits for user input', right: 'Can operate from events and tasks' },
        { left: 'Primarily responds', right: 'Can execute multi-step work' },
        { left: 'The answer is the end', right: 'Action + result is the end' },
        { left: 'Conversation context', right: 'Task context + tools' },
        { left: 'Often stops after responding', right: 'Can continue through a task loop' },
      ],
      footnote: 'A chatbot can also use tools — the distinction is the system’s primary mode of work, not the existence of a tool call.',
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
      footnote: 'The Digital Employee defines who can do the work. The Agent describes how the work can be carried out.',
    },
  ],

  scenario: {
    eyebrow: 'ENTERPRISE SCENARIO',
    title: 'A Digital Procurement Specialist, Powered by an Agent',
    intro: 'When all three concepts play their roles in one flow, enterprise AI starts to look like a system.',
    levels: [
      { tag: 'Event', title: 'Business event: supplier delay detected', body: 'Supplier X delayed by +5 days; the exception enters the handling pipeline.' },
      { tag: 'WHO', title: 'Digital Employee: procurement responsibility', body: 'Owns supplier risk and exception handling — role, access, and governance already defined.' },
      { tag: 'HOW', title: 'Agent: Goal → Plan → Tool → Observe → Re-plan', body: 'Advances a multi-step task toward “reduce production risk”, handing critical actions to humans.' },
      { tag: 'Systems', title: 'Enterprise systems: ERP / SRM / PLM', body: 'Accessed through governed tools; no system permission is bypassed.' },
      { tag: 'Human', title: 'Human approval', body: 'The change request takes effect only after the procurement manager approves it.' },
      { tag: 'Action', title: 'Business action completed', body: 'Alternative supplier in place; production continuity secured.' },
    ],
    takeaway_title: 'Three concepts form one chain',
    takeaway_body: 'Ontology lets AI understand relationships, the Digital Employee defines who works, and the Agent gets the work done.',
  },

  connection: {
    eyebrow: 'CONCEPT CONNECTION',
    prev: {
      label: 'DIGITAL EMPLOYEE · Concept 02',
      points: ['Who is responsible? What can it access? What can it do?'],
    },
    current: {
      label: 'AGENT · Concept 03',
      points: ['How is the work completed? How is the next step decided?'],
    },
    chain: ['Ontology', 'Understand relationships', 'Digital Employee', 'Define role and authority', 'Agent', 'Perform multi-step work'],
    statement:
      'Ontology gives AI a model of the enterprise world; the Digital Employee gives AI a role within that world; the Agent enables AI to carry out multi-step work within that role.',
  },

  misconceptions: {
    eyebrow: 'CRITICAL THINKING',
    title: 'Common Misconceptions',
    intro: 'Six of the most common confusions about agents.',
    myth_label: 'Myth',
    reality_label: 'Reality',
    items: [
      {
        myth: '"Agent = a smarter chatbot"',
        reality: 'A chatbot focuses primarily on conversation; an Agent focuses on achieving a goal through actions and feedback.',
        tagline: 'Conversation ≠ a task loop.',
      },
      {
        myth: '"A real Agent never asks a human"',
        reality: 'Enterprise Agents can operate within human approval boundaries — autonomy is a design choice, not a definition.',
        tagline: 'Autonomy has boundaries; confirmation is design.',
      },
      {
        myth: '"If there is an LLM, there is an Agent"',
        reality: 'An LLM can be part of an Agent system, but an Agent involves goal-directed action and interaction with its environment.',
        tagline: 'A model is not a system.',
      },
      {
        myth: '"Calling an API makes something an Agent"',
        reality: 'A tool call is an action; an Agent coordinates actions toward a goal.',
        tagline: 'An action is not coordination.',
      },
      {
        myth: '"Agent planning = a fixed workflow"',
        reality: 'An Agent adapts its next steps based on observations and changing task context — that is exactly what distinguishes it from a fixed process.',
        tagline: 'Plans update as information changes.',
      },
      {
        myth: '"An Agent can endlessly do anything by itself"',
        reality: 'Real enterprise Agents operate within defined tools, permissions, business rules, and approval boundaries.',
        tagline: 'Unbounded is not the definition.',
      },
    ],
  },

  finalModel: {
    steps: [
      'ENTERPRISE',
      'ONTOLOGY · Understand',
      'DIGITAL EMPLOYEE · WHO',
      'AGENT · HOW',
      'Goal → Plan → Tool → Observe → Decide → Re-plan → Action',
    ],
    conclusion: 'Understand → Assign → Act.',
  },

  further: {
    eyebrow: 'Keep Learning',
    back_home: 'Back to Home',
    review_label: 'Review the Demo',
  },
};
