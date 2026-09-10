/**
 * Digital Employee Demo payload —— 概念专属类型，插件内 narrow 目标。
 * 状态机：IDLE → EVENT → CONTEXT → REASONING → VERIFY → ACTION → APPROVAL → RESULT → COMPLETE
 */

export interface DeDemoPayload {
  workbench_label: string;
  title: string;
  sim_note: string;
  status_label: string;
  status_processing: string;
  status_waiting: string;
  status_done: string;
  event_badge: string;
  agent_badge: string;
  start_button: string;
  next_button: string;
  stepper: string[]; // Event / Context / Reason / Verify / Action / Result

  event: {
    time: string;
    title: string;
    detail: string;
    detected: string;
    detected_body: string;
    note: string;
  };

  context: {
    chain: { from: string; verb: string }[]; // 末段 to 单独给
    chain_end: string;
    facts: { label: string; value: string }[];
    note: string;
  };

  reasoning: {
    path: string[];
    risk_badge: string;
    facts: { label: string; value: string }[];
  };

  verify: {
    items: string[];
    note: string;
  };

  action: {
    recommended_badge: string;
    recommended_body: string;
    alt_supplier: string;
    alt_price: string;
    cr_title: string;
    cr_change: string;
    status_pending: string;
    submit_button: string;
    submitted: string;
    need_human: string;
    approve_button: string;
    approved: string;
    log_time: string;
    log_line: string;
    neq_left: string;
    neq_right: string;
    neq_note: string;
  };

  result: {
    badge: string;
    rows: { label: string; value: string }[];
    before_label: string;
    before_value: string;
    after_label: string;
    after_value: string;
  };

  complete: {
    statement: string;
    definition: string;
    cta: string;
    cta_href: string;
  };
}
