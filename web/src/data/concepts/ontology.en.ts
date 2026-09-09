import type { OntologyContent } from './ontology.types';

export const ontologyEn: OntologyContent = {
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

  idea: {
    label: 'The Mental Model',
    title: "That's the idea.",
  },

  definition: {
    eyebrow: 'Formal Definition',
    title: 'What is an Ontology?',
    quote: '“An ontology describes the important things in a business, how they relate to each other, and what can happen to them.”',
    db_label: 'Traditional Relational Databases',
    db_body: 'Record raw states, transactional keys, and static tables. They verify which row exists, but preserve zero organizational context.',
    onto_label: 'Enterprise Semantic Ontology',
    onto_body: 'Formalizes business semantics and operational boundaries directly. When AI queries the graph, it traverses validated rules with zero hallucination.',
    components_label: 'Three Core Primitives',
    components: [
      {
        index: 'Primitive 01',
        icon: 'category',
        name: 'Objects',
        role: 'The “Nouns”',
        body: 'Discrete business entities with identity and operational value across the enterprise lifecycle.',
        example: 'Product, Supplier, Part, Order, Factory',
      },
      {
        index: 'Primitive 02',
        icon: 'tune',
        name: 'Properties',
        role: 'The “States”',
        body: 'Measurable facts and quantitative values anchored to a defined object.',
        example: 'Price, Status, Specification, Lead time',
      },
      {
        index: 'Primitive 03',
        icon: 'schema',
        name: 'Relationships & Actions',
        role: 'The “Verbs” & Rules',
        body: 'Typed, directional dependencies binding objects into an interconnected web of operational truth.',
        example: 'Contains, Supplied by, Affects, Violates',
      },
    ],
  },

  scenario: {
    eyebrow: 'Enterprise Scenario',
    title: 'How a Supply Chain Disruption Cascades',
    intro:
      'An EV manufacturer learns a key component supplier is 14 days late. Without an ontology, this is a week of human firefighting. With one, it is four deterministic traversals.',
    levels: [
      {
        tag: 'L1',
        title: 'Supplier Delay',
        body: 'ERP shows: Micro-Controller P-8821 stock at 0, delay +14 days.',
      },
      {
        tag: 'L2',
        title: 'Part Shortage',
        body: 'Ontology: the EV-Truck-X chassis-avionics stage Requires #P-8821 — a Line-Stopper.',
      },
      {
        tag: 'L3',
        title: 'Blast Radius',
        body: 'Traversing order relationships: Apex Dynamics order #ORD-9902 (VIP Tier-1) is hit — $50,000/day SLA penalty.',
      },
      {
        tag: 'L4',
        title: 'Executive Decision',
        body: 'Switch to backup supplier / re-sequence the line / notify the customer early — every option priced against the same relationship facts.',
      },
    ],
    takeaway_title: 'Same data, two worlds',
    takeaway_body:
      'Delays, inventory, penalties — every row already sat on disk. The only difference: once relationships are written down, impact analysis turns from human jigsaw-puzzling into a graph traversal.',
  },

  misconceptions: {
    eyebrow: 'Critical Clarifications',
    title: 'Common Misconceptions',
    intro: 'Why traditional shortcuts fail to replace explicit semantic governance.',
    myth_label: 'Myth',
    reality_label: 'Reality',
    items: [
      {
        myth: '"An ontology is just a Knowledge Graph"',
        reality:
          'A graph is a storage structure — nodes and edges. An ontology is the semantic rulebook: what may connect, how, and what the connection means. A graph without an ontology is a network without grammar.',
        tagline: 'The graph is the medium; the ontology is the grammar.',
      },
      {
        myth: '"Just feed raw PDFs to an LLM"',
        reality:
          'Language models learn statistical correlations from text; they do not verify factual relationships. Without explicit relationship chains, “Supplier X affects Order Y” remains a probability guess, not an auditable conclusion.',
        tagline: 'Text probability ≠ business fact.',
      },
      {
        myth: '"An ontology replaces ERP / PLM"',
        reality:
          'No. It acts as a non-invasive semantic overlay — ERP and PLM keep processing transactional records while the ontology wires them into AI-usable context.',
        tagline: 'Systems of record persist; the ontology orchestrates meaning.',
      },
    ],
  },

  further: {
    eyebrow: 'Keep Learning',
    back_home: 'Back to Home',
    review_label: 'Review the Demo',
    lang_switch: '中文版',
  },
};
