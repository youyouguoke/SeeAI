/**
 * Ontology 概念页结构化内容 —— zh/en 两个实现共享本接口。
 * TS 编译器强制双语键/结构一致；check:content 做内容级校验。
 */

export interface WorkbenchState {
  tab: string;
  state_label: string;
}

export interface SiloCard {
  system: string;
  subtitle: string;
  detail: string;
  badge: string;
}

export interface ReasoningStep {
  title: string;
  detail: string;
  result: string;
  tone: 'neutral' | 'warn' | 'bad';
}

export interface Factor {
  label: string;
  value: string;
  note: string;
}

export interface WorkbenchContent {
  eyebrow: string;
  title: string;
  toggle_aria: string;
  states: WorkbenchState[];
  /** state 1 — 孤岛表 */
  silo_badge: string;
  silo_sub: string;
  silo_cards: SiloCard[];
  query_label: string;
  query_text: string;
  query_answer: string;
  query_fail: string;
  /** state 2 — 断链点 */
  missing_label: string;
  missing_items: string[];
  isolated_chips: string[];
  barrier_label: string;
  barrier_quote: string;
  barrier_body: string;
  status_line: string;
  /** state 3 — 本体激活 */
  chain_badge: string;
  chain_sub: string;
  chain_note: string;
  /** state 4 — 上下文已解析 */
  path_badge: string;
  path_sub: string;
  path_intro: string;
  steps: ReasoningStep[];
  resolved_badge: string;
  resolved_sub: string;
  resolved_labels: { root: string; bom: string; increase: string };
  resolved_values: { root: string; bom: string; increase: string };
  factors_label: string;
  factors: Factor[];
  resolved_answer: string;
  prev_aria: string;
  next_aria: string;
  sim_note: string;
  scenario_note: string;
}

export interface DefinitionContent {
  eyebrow: string;
  title: string;
  quote: string;
  db_label: string;
  db_body: string;
  onto_label: string;
  onto_body: string;
  components_label: string;
  components: { index: string; icon: string; name: string; role: string; body: string; example: string }[];
}

export interface ScenarioContent {
  eyebrow: string;
  title: string;
  intro: string;
  levels: { tag: string; title: string; body: string }[];
  takeaway_title: string;
  takeaway_body: string;
}

export interface MisconceptionsContent {
  eyebrow: string;
  title: string;
  intro: string;
  myth_label: string;
  reality_label: string;
  items: { myth: string; reality: string; tagline: string }[];
}

export interface IdeaContent {
  label: string;
  title: string;
}

export interface FurtherLearningContent {
  eyebrow: string;
  back_home: string;
  review_label: string;
  lang_switch: string;
}

export interface OntologyContent {
  workbench: WorkbenchContent;
  idea: IdeaContent;
  definition: DefinitionContent;
  scenario: ScenarioContent;
  misconceptions: MisconceptionsContent;
  further: FurtherLearningContent;
}
