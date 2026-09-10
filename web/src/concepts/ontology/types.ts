/**
 * Ontology 概念的专属类型 —— Engine 插件 payload 的 narrow 目标。
 * 通用教学区块类型见 src/engine/types.ts；本文件只放 Ontology Demo 特有的结构。
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
  silo_badge: string;
  silo_sub: string;
  silo_cards: SiloCard[];
  query_label: string;
  query_text: string;
  query_answer: string;
  query_fail: string;
  missing_label: string;
  missing_items: string[];
  isolated_chips: string[];
  barrier_label: string;
  barrier_quote: string;
  barrier_body: string;
  status_line: string;
  chain_badge: string;
  chain_sub: string;
  chain_note: string;
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

export interface ActionDemoContent {
  eyebrow: string;
  title: string;
  intro: string;
  cr_label: string;
  cr_title: string;
  cr_body: string;
  field_label: string;
  pending: string;
  approved: string;
  button: string;
  done_line: string;
  log_label: string;
  real_note: string;
  action_id: string;
}

/** OntologyDemo 插件的 payload（DemoDefinition.payload 的 narrow 目标） */
export interface OntologyDemoPayload {
  workbench: WorkbenchContent;
  action: ActionDemoContent;
}
