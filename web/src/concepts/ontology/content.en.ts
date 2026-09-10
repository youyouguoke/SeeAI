import type { ConceptSpec } from '../../engine/types';
import type { OntologyDemoPayload } from './types';

export const spec: ConceptSpec = {
  id: 'ontology',
  demo: {
    type: 'ontology',
    payload: {
      workbench: {
        eyebrow: 'Architecture Workbench',
        title: "Relationship Workbench: Product A's Cost Question",
        toggle_aria: 'Toggle business relationships',
        states: [
          { tab: '1. Siloed Tables', state_label: 'Data scattered across disconnected relational stores' },
          { tab: '2. Disconnection Point', state_label: 'Cross-table semantics missing — queries cannot land' },
          { tab: '3. Ontology Activated', state_label: 'Explicit business relationship chain established' },
          { tab: '4. Context Resolved', state_label: 'Deterministic reasoning complete — root cause located' },
        ],
        silo_badge: 'Without Ontology — Disconnected Sources',
        silo_sub: 'Isolated database tables',
        silo_cards: [
          { system: 'PLM', subtitle: 'Part Specs', detail: 'Rev 4.2', badge: 'Isolated' },
          { system: 'ERP', subtitle: 'Inventory', detail: 'Lot #9021', badge: 'Isolated' },
          { system: 'SRM', subtitle: 'Vendor POs', detail: 'Contract V-4', badge: 'Isolated' },
          { system: 'QMS', subtitle: 'Inspection', detail: 'Pass Rate', badge: 'Isolated' },
          { system: 'Cert', subtitle: 'ISO / Audit', detail: 'Tariff Log', badge: 'Isolated' },
        ],
        query_label: 'Enterprise Inquiry',
        query_text: '"Why did Product A\'s cost increase?"',
        query_answer: '"I found the data."',
        query_fail: '"But I need more context."',
        missing_label: 'Missing cross-table semantics:',
        missing_items: ['Which product?', 'Which BOM?', 'Which part?', 'Which supplier?', 'Which cost?'],
        isolated_chips: ['PLM', 'ERP', 'SRM', 'QMS'],
        barrier_label: 'Key Epistemic Barrier',
        barrier_quote: '"The data exists, but the relationships are missing."',
        barrier_body:
          'Every system holds verified records. But without explicit business connections linking parts to suppliers and suppliers to cost spikes, any database query or LLM can only guess.',
        status_line: 'Status: 5 disconnected silos · 0 formal links',
        chain_badge: 'With Ontology — Semantic Relationship Chain',
        chain_sub: 'Explicit business semantics',
        chain_note:
          'Notice: the database records remained the same — explicit relationships turned them into an operable semantic graph.',
        path_badge: 'Predefined Business Reasoning Path',
        path_sub: 'Deterministic Traversal',
        path_intro: 'How an AI or human operator walks the graph to deduce root cause with full transparency:',
        steps: [
          { title: 'Identify Product A', detail: 'Locate the root entity across the enterprise catalog', result: 'Found', tone: 'neutral' },
          { title: 'Find its BOM', detail: 'Traverse to Bill-of-Materials Revision 4.2', result: 'Connected', tone: 'neutral' },
          { title: 'Find high-cost parts', detail: 'Filter sub-assemblies exceeding budget variance', result: 'Part #001', tone: 'warn' },
          { title: 'Identify suppliers', detail: 'Follow supply contracts to active Tier-1 vendors', result: 'Supplier X', tone: 'neutral' },
          { title: 'Compare historical prices', detail: 'Evaluate contract price delta against baseline quotes', result: '+$3.60 / unit', tone: 'bad' },
        ],
        resolved_badge: 'Resolved Output',
        resolved_sub: 'Root Cause Decomposition',
        resolved_labels: { root: 'Root Entity', bom: 'BOM Cost', increase: 'Total Increase' },
        resolved_values: { root: 'Product A', bom: '$435.55', increase: '+14.2%' },
        factors_label: 'Contribution factors breakdown:',
        factors: [
          { label: 'Supplier price increase', value: '+3.4%', note: 'Tier-1 raw material escalation (Titanium Bracket #001)' },
          { label: 'Specification change', value: '+2.1%', note: 'ECO-491 engineering upgrade to aerospace-grade alloy' },
          { label: 'Certification cost', value: '+1.8%', note: 'ISO 14001 low-carbon audit fee adjustment' },
        ],
        resolved_answer:
          'Root cause: Supplier X raised the price of Part #001 by $3.60/unit, compounded by the ECO-491 spec upgrade and ISO 14001 certification costs — driving a 14.2% BOM cost increase for Product A.',
        prev_aria: 'Previous step',
        next_aria: 'Next step',
        sim_note: 'Predefined pedagogical simulation — deterministic business logic, no external LLM API calls',
        scenario_note: 'Enterprise scenario: aerospace supply chain',
      },
      action: {
        eyebrow: 'Operational Model · Dynamic Layer',
        title: 'Actions in Practice: Watch a State Change',
        intro:
          'Relationships answer "how things are connected"; actions answer "what can be done to them". Click approve and watch one minimal business action change the system state.',
        cr_label: 'Change Request',
        cr_title: 'Change Request #CR-2201',
        cr_body: 'Supplier X · Part 001 · Change Supplier',
        field_label: 'Status',
        pending: 'Pending Approval',
        approved: 'Approved',
        button: 'Approve Change',
        done_line: 'Action executed: Change Request approved.',
        log_label: 'Action Log',
        real_note:
          'In a real enterprise system, an action may also trigger governed approval workflows, system updates, and follow-up business actions.',
        action_id: 'approve_change_request',
      },
    } satisfies OntologyDemoPayload,
  },

  nav: [
    { id: 'workbench', label: 'Core Demo' },
    { id: 'definition', label: 'Definition' },
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'case-study', label: 'Case Study' },
    { id: 'scenarios', label: 'Scenarios' },
    { id: 'critical', label: 'Critical Thinking' },
  ],

  idea: {
    label: 'The Mental Model',
    title: "That's the idea.",
    questions: [
      { q: 'What exists?', a: 'Objects' },
      { q: 'What does it have?', a: 'Properties' },
      { q: 'How is it connected?', a: 'Relationships' },
      { q: 'What can happen?', a: 'Actions' },
    ],
  },

  definition: {
    eyebrow: 'Formal Definition',
    title: 'What is an Ontology?',
    quote: '“An ontology describes the important objects in a business, their properties and relationships, and the actions that can be performed within that business context.”',
    compare: {
      a: { icon: 'table_rows', label: 'Traditional Relational Databases', body: 'Databases preserve facts, but cross-system business semantics are often not expressed as a unified layer.' },
      b: { icon: 'hub', label: 'Enterprise Semantic Ontology', body: 'Formalizes business semantics, constraints, and actions directly — providing structured business context for more reliable reasoning.', emphasized: true },
    },
    components_label: 'Four Core Primitives',
    components: [
      { index: 'Primitive 01', icon: 'category', name: 'Objects', role: 'The “Nouns”', layer: 'static', body: 'Important things that exist in the business world.', example: 'Product, Part, Supplier, BOM' },
      { index: 'Primitive 02', icon: 'tune', name: 'Properties', role: 'The “States”', layer: 'static', body: 'Data describing an object’s state and facts.', example: 'Cost = $435.55, Status = Active' },
      { index: 'Primitive 03', icon: 'account_tree', name: 'Relationships', role: 'Structural Verbs', layer: 'static', body: 'Business-meaningful connections between objects.', example: 'contains, supplied by, depends on' },
      { index: 'Primitive 04', icon: 'bolt', name: 'Actions', role: 'Operational Verbs', layer: 'dynamic', body: 'Operations that can be performed in a business context, and the state changes they cause.', example: 'Approve, Schedule, Change Supplier' },
    ],
    contrast: {
      left: { label: 'RELATIONSHIP', role: 'Structural Verbs', from: 'Product A', verb: '↓ contains', to: 'Part 001' },
      right: { label: 'ACTION', role: 'Operational Verbs', from: 'Change Request', verb: '↓ approve', to: 'Approved', highlight: true },
      summary: 'Relationships describe how things are connected. Actions describe how things can change.',
    },
  },

  enterprise: {
    eyebrow: 'PART 02 · ENTERPRISE AI PLATFORM',
    title: 'From Data to Business Context',
    intro:
      'A manufacturing enterprise rarely lacks data — what it lacks is business semantics spanning systems. See where Ontology sits between existing systems and AI applications, turning scattered data into reason-able business context.',
    systems: [
      { code: 'ERP', name: 'Enterprise Resource Planning', knows: 'Orders' },
      { code: 'PLM', name: 'Product Lifecycle', knows: 'Products' },
      { code: 'MES', name: 'Manufacturing Execution', knows: 'Production' },
      { code: 'SRM', name: 'Supplier Management', knows: 'Suppliers' },
      { code: 'QMS', name: 'Quality Management', knows: 'Quality' },
      { code: 'CRM', name: 'Customer Relations', knows: 'Customers' },
      { code: 'WMS', name: 'Warehouse Management', knows: 'Inventory' },
    ],
    ontology_label: 'Ontology · Semantic & Operational Layer',
    ai_label: 'AI Applications · Agents · Business Operations',
    note_title: 'Semantic Overlay',
    note_body: 'Ontology does not replace ERP / PLM / MES — it builds a unified business semantics and operations model on top of existing systems',
    twin: {
      quote: '“You can think of an enterprise ontology as a semantic model of the enterprise.”',
      body: 'Products, machines, people, orders, and suppliers in the real world are represented as business objects with identity, state, and relationships. This is a helpful framing, not a strict definition of Ontology = Digital Twin.',
    },
    conclusion:
      'The enterprise does not necessarily lack data. The problem is that business meaning is distributed across systems — and that is exactly what AI needs.',
  },

  caseStudy: {
    eyebrow: 'PART 04 · CASE STUDY',
    title: "Case Study: Palantir's Approach",
    note: {
      label: 'About This Case',
      body: "Palantir is one of the more complete commercial cases combining Ontology, business logic, AI, and business operations. This section analyzes how Palantir implements these ideas — it does not define how Ontology must be implemented. Enterprises can also take different paths: self-built knowledge graphs with rule engines, semantic layers, or other enterprise AI platforms.",
    },
    steps: [
      {
        index: '01',
        title: 'Map the World',
        body: 'Factories, products, parts, suppliers, orders, employees, machines — real-world business things are first represented as Objects.',
        diagram: ['Factory · Product · Part', 'Supplier · Order · Machine', '        ↓ map', 'Objects'],
      },
      {
        index: '02',
        title: 'Connect the World',
        body: 'Objects are linked by business relationships: contains, supplied by, depends on. The point is Object + Property + Link — not that Palantir invented these concepts.',
        diagram: ['Product A', '   ↓ contains', 'Part 001', '   ↓ supplied by', 'Supplier X'],
      },
      {
        index: '03',
        title: 'Model Decisions',
        body: 'An ontology does not merely tell AI "Supplier X is delayed" — it helps the system understand which business object chain the supplier belongs to, and what this change will affect.',
        diagram: ['Supplier delay', '   → Part shortage', '   → Production impact', '   → Customer order', '   → Business decision'],
      },
      {
        index: '04',
        title: 'Operate the World',
        body: 'Decisions land as actions: governed workflows, access control, system updates — the semantic model becomes an operational layer, not just a query layer.',
        diagram: ['Decision → Action', '   → Business System', '   → State Change'],
      },
    ],
    callout:
      'The important idea is not that Palantir has an "Ontology product." It is that Palantir demonstrates one possible enterprise-grade implementation: letting the semantic model become the operational layer connecting data, logic, decisions, actions, and AI.',
    alt_label: 'Ontology is a modeling approach, not a single product architecture. Other implementation paths:',
    alt_items: ['Self-built knowledge graph + rules', 'Semantic Layer', 'Ontology / operational platform', 'Other enterprise AI platforms'],
  },

  gallery: {
    eyebrow: 'PART 05 · ENTERPRISE SCENARIOS',
    title: 'Enterprise Scenario Gallery',
    intro:
      'Three implementation scenarios from different industries. Every case carries an evidence level — SeeAI explains mechanisms with sources, not storytelling.',
    evidence_legend:
      'Evidence levels: A — primary/official source · B — reputable secondary source · C — analyst/industry interpretation · D — illustrative/simplified. Mechanism descriptions below are based on public practice; no unverified figures are quoted.',
    items: [
      {
        tag: 'Scenario 01',
        title: 'Data Silos After a Cross-border Merger',
        body: "The German plant runs SAP, the Chinese plant runs a domestic ERP, plus MES and WMS: the same raw material has different IDs, schemas, and safety-stock rules in each system — inventory alerts never line up. An ontology maps SAP-DE-88231 and YS-CN-40217 to the same Titanium Dioxide object via a 'same material' relationship, and the alerts finally agree. Data exists ≠ business context is aligned.",
        evidence: 'Adapted from publicly reported enterprise integration challenges; operational details simplified for teaching',
        evidence_level: 'D',
      },
      {
        tag: 'Scenario 02',
        title: 'Construction: Change Propagation',
        body: 'A schedule change propagates along the relationship chain: Schedule → Contract → Budget → People → Operations. Relationships are not static decoration — a state change in one object ripples through related business objects. This is why Relationships and Actions belong together.',
        evidence: 'Specific figures (e.g. employee coverage) are not quoted until verified against public sources; mechanism only',
        evidence_level: 'D',
      },
      {
        tag: 'Scenario 03',
        title: 'Financial Risk & Compliance',
        body: 'Customer → owns → Account → performs → Transaction → originates from → IP → associated with → Device. An ontology provides structured context for risk patterns and governed investigative actions: investigate, freeze, approve — every step leaves an audit trail. Note: it does not "automatically detect all fraud."',
        evidence: 'Mechanism described from public industry practice; no data from any specific institution',
        evidence_level: 'D',
      },
    ],
  },

  scenario: {
    eyebrow: 'Enterprise Scenario',
    title: 'How a Supply Chain Disruption Cascades',
    intro:
      'Zoom out to the whole supply chain: Supplier X’s titanium bracket is 14 days late — where does the impact cascade?',
    levels: [
      { tag: 'L1', title: 'Supplier Delay', body: 'SRM shows: Supplier X’s titanium bracket (Part 001) is +14 days late.' },
      { tag: 'L2', title: 'Part Shortage', body: 'Ontology: Product A’s BOM Rev 4.2 Requires Part 001 — a critical-path component.' },
      { tag: 'L3', title: 'Blast Radius', body: 'Traversing order relationships: a VIP customer order is hit — $50,000/day SLA penalty.' },
      { tag: 'L4', title: 'Executive Decision', body: 'Switch to a backup supplier / start a change request / expedite shipping — every option priced against the same relationship facts.' },
    ],
    takeaway_title: 'Same data, two worlds',
    takeaway_body:
      'Delays, inventory, penalties — every row already sat on disk. The only difference: once relationships are written down, impact analysis turns from human jigsaw-puzzling into a graph traversal.',
  },

  misconceptions: {
    eyebrow: 'PART 06 · CRITICAL THINKING',
    title: 'Ontology Is Not a Silver Bullet',
    intro: 'Before committing, look at the boundaries, governance responsibilities, and real costs.',
    myth_label: 'Myth',
    reality_label: 'Reality',
    items: [
      {
        myth: '"With an ontology, AI will not hallucinate."',
        reality:
          'An ontology provides more structured, constrained business context, but it does not automatically eliminate model errors or hallucinations.',
        tagline: 'Structured context narrows the room for fabrication; it is not zero error.',
      },
      {
        myth: '"An ontology is just a Knowledge Graph"',
        reality:
          'A knowledge graph primarily represents entities, properties, and relationships. An enterprise ontology goes further by formally defining the business semantics, constraints, and actions that operate on those objects. A graph without an ontology is a network without grammar.',
        tagline: 'The graph is the medium; the ontology is the grammar.',
      },
      {
        myth: '"An ontology solves data governance."',
        reality:
          'An ontology helps express unified semantics, but data quality, ownership, and master data management still require organizational governance.',
        tagline: 'A semantic layer is not a substitute for governance.',
      },
      {
        myth: '"An ontology is just a tech project."',
        reality:
          'The hard parts are often business definition, cross-team alignment, data ownership, governance, security, and compliance. Defining "what a Product is" can be harder than building the database.',
        tagline: 'The difficulty is organizational, not in the schema.',
      },
      {
        myth: '"Palantir\'s approach is the standard answer for Ontology."',
        reality:
          "Palantir is a mature commercial implementation path, but not the only one. Ontology is a modeling approach — not a product architecture defined by any single vendor.",
        tagline: 'Method ≠ vendor implementation.',
      },
    ],
    cost: {
      title: 'The True Cost of Ontology: value comes from long-term accumulation, not from finishing a schema',
      items: [
        'Ontology model',
        'Business rules',
        'Connectors',
        'Data mapping',
        'Security model',
        'Test data',
        'Operational knowledge',
      ],
      flywheel_title: 'Knowledge Flywheel',
      flywheel_steps: ['Enterprise Knowledge', 'Ontology', 'AI · Decisions · Actions', 'Operational Data', 'Continuous Learning'],
      summary:
        'The real moat is usually not any single model — it is the business model, data connections, testing systems, access design, and operational knowledge accumulated over years.',
      discipline: 'The above is analytical judgment to help technical decision-makers evaluate investment; it is not any vendor\'s official claim.',
    },
  },

  further: {
    eyebrow: 'Keep Learning',
    back_home: 'Back to Home',
    review_label: 'Review the Demo',
  },
};
