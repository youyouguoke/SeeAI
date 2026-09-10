/**
 * Agent Demo payload —— 概念专属类型，插件内 narrow 目标。
 * 状态机：idle → goal → plan → tool → observe → decide → replan → action → result
 * 全部确定性教学模拟，不连接真实 ERP / SRM / PLM。
 */

export interface AgentDemoPayload {
  workbench_label: string;
  title: string;
  sim_note: string;
  goal_badge: string;
  goal_text: string;
  goal_detail: string;
  stepper: string[];
  start_button: string;
  next_button: string;
  reset_button: string;
  status_label: string;
  status_processing: string;
  status_done: string;
  what_label: string;
  why_label: string;

  steps: {
    goal: { note: string; what: string; why: string };
    plan: { badge: string; plan_label: string; items: string[]; note: string; what: string; why: string };
    tool: {
      badge: string;
      tool_name: string;
      query_label: string;
      query: string[];
      result_label: string;
      result: string[];
      note: string;
      what: string;
      why: string;
    };
    observe: {
      badge: string;
      facts: { label: string; value: string }[];
      comparison: string;
      conclusion: string;
      note: string;
      what: string;
      why: string;
    };
    decide: { badge: string; decision: string; note: string; what: string; why: string };
    replan: {
      badge: string;
      original_label: string;
      original: string[];
      observation_label: string;
      observation: string;
      updated_label: string;
      updated: string[];
      callout: string;
      note: string;
      what: string;
      why: string;
    };
    action: {
      badge: string;
      options_label: string;
      options: { name: string; lead: string; cost: string }[];
      recommended_badge: string;
      recommended: string;
      recommended_reason: string;
      cr_title: string;
      cr_change: string;
      status_pending: string;
      approved: string;
      submit_button: string;
      approve_button: string;
      need_human: string;
      log_time: string;
      log_line: string;
      note: string;
      what: string;
      why: string;
    };
    result: {
      badge: string;
      rows: { label: string; value: string }[];
      statement: string;
      what: string;
      why: string;
    };
  };
}
