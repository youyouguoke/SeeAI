/**
 * Analytics adapter — 单一抽象入口（技术设计 §40）。
 * Sprint 1-3：Cloudflare Web Analytics beacon（token 未配置时优雅跳过）。
 * Sprint 6：确认埋点清单与 consent 逻辑，不换接口。
 */

type EventPayload = Record<string, string | number | boolean | undefined>;

let beaconToken: string | undefined;

export function initAnalytics(token: string | undefined): void {
  beaconToken = token;
}

declare global {
  interface Window {
    __seeaiTrack?: (event: string, props?: EventPayload) => void;
  }
}

export function track(event: string, props?: EventPayload): void {
  if (typeof window === 'undefined') return;
  if (beaconToken && typeof window.__seeaiTrack === 'function') {
    window.__seeaiTrack(event, props);
  }
  if (import.meta.env.DEV) {
    console.debug(`[analytics] ${event}`, props ?? {});
  }
}

/** 预定义事件名，避免散落魔法字符串 */
export const ANALYTICS_EVENTS = {
  LANG_SWITCH: 'lang_switch',
  WORKBENCH_STATE: 'workbench_state',
  QUIZ_SUBMIT: 'quiz_submit',
  CONCEPT_CTA: 'concept_cta',
  ACTION_DEMO_START: 'action_demo_start',
  ACTION_DEMO_CLICK: 'action_demo_click',
  ACTION_DEMO_COMPLETE: 'action_demo_complete',
  /* Phase 1 · Digital Employee 预置（方案 §三十二） */
  DE_DEMO_START: 'digital_employee_demo_start',
  DE_STEP_VIEW: 'digital_employee_step_view',
  DE_TOOL_CALL: 'digital_employee_tool_call',
  DE_ACTION: 'digital_employee_action',
  DE_COMPLETE: 'digital_employee_complete',
} as const;
