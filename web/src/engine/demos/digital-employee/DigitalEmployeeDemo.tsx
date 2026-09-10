import { useEffect, useState } from 'react';
import { track, ANALYTICS_EVENTS } from '../../../lib/analytics';
import type { ConceptSpec, Locale } from '../../types';
import type { DeDemoPayload } from '../../../concepts/digital-employee/types';

/**
 * Digital Employee Workbench —— 六步推演沙盘（确定性教学模拟，零外部 API）。
 * 状态机：IDLE → EVENT → CONTEXT → REASONING → VERIFY → ACTION → APPROVAL → RESULT → COMPLETE
 * 只展示用户可见的业务判断路径，不展示模型内部思维过程（设计文档 §11/§37）。
 */

type DemoState =
  | 'IDLE'
  | 'EVENT'
  | 'CONTEXT'
  | 'REASONING'
  | 'VERIFY'
  | 'ACTION'
  | 'APPROVAL'
  | 'RESULT'
  | 'COMPLETE';

const STAGE_INDEX: Record<Exclude<DemoState, 'IDLE' | 'APPROVAL' | 'COMPLETE'>, number> = {
  EVENT: 0,
  CONTEXT: 1,
  REASONING: 2,
  VERIFY: 3,
  ACTION: 4,
  RESULT: 5,
};

interface Props {
  spec: ConceptSpec;
  locale: Locale;
}

export default function DigitalEmployeeDemo({ spec, locale }: Props) {
  const p = spec.demo.payload as DeDemoPayload;
  const [state, setState] = useState<DemoState>('IDLE');
  const [verified, setVerified] = useState<string[]>([]);
  const [crSubmitted, setCrSubmitted] = useState(false);
  const [approved, setApproved] = useState(false);
  const [log, setLog] = useState<string[]>([]);

  useEffect(() => {
    track(ANALYTICS_EVENTS.DE_DEMO_START, { concept_id: 'digital-employee', locale });
  }, [locale]);

  const props = { concept_id: 'digital-employee', locale };
  const stage = state === 'APPROVAL' ? 4 : state in STAGE_INDEX ? STAGE_INDEX[state as keyof typeof STAGE_INDEX] : -1;

  const advance = (next: DemoState, event?: string) => {
    setState(next);
    if (event) track(event, props);
    track(ANALYTICS_EVENTS.DE_STEP_VIEW, { ...props, step: next.toLowerCase() });
    if (next === 'VERIFY') {
      setVerified([]);
      p.verify.items.forEach((_, i) => {
        window.setTimeout(() => setVerified((v) => [...v, p.verify.items[i]]), 400 * (i + 1));
      });
    }
  };

  const submitCr = () => {
    setCrSubmitted(true);
    setLog((l) => [...l, p.action.submitted]);
    track(ANALYTICS_EVENTS.DE_ACTION, { ...props, action_id: 'submit_change_request' });
  };

  const approve = () => {
    setApproved(true);
    setLog((l) => [...l, `${p.action.log_time} — ${p.action.log_line}`]);
    track(ANALYTICS_EVENTS.DE_APPROVAL, { ...props, action_id: 'approve_change_request' });
  };

  const primaryButton = () => {
    if (state === 'IDLE')
      return (
        <button
          type="button"
          onClick={() => advance('EVENT')}
          className="px-5 py-2.5 rounded-lg bg-primary text-on-primary text-label font-semibold hover:opacity-90 transition-opacity"
        >
          {p.start_button}
        </button>
      );
    const nextMap: Partial<Record<DemoState, { to: DemoState; label: string }>> = {
      EVENT: { to: 'CONTEXT', label: p.next_button },
      CONTEXT: { to: 'REASONING', label: p.next_button },
      REASONING: { to: 'VERIFY', label: p.next_button },
      VERIFY: { to: 'ACTION', label: p.next_button },
      RESULT: { to: 'COMPLETE', label: p.next_button },
    };
    // ACTION 阶段以 crSubmitted/approved 为子状态：批准后放行到 RESULT
    const n =
      nextMap[state] ?? (state === 'ACTION' && approved ? { to: 'RESULT' as DemoState, label: p.next_button } : undefined);
    if (n)
      return (
        <button
          type="button"
          onClick={() => advance(n.to)}
          className="px-5 py-2.5 rounded-lg bg-primary text-on-primary text-label font-semibold hover:opacity-90 transition-opacity"
        >
          {n.label}
        </button>
      );
    return null;
  };

  return (
    <section className="max-w-content mx-auto px-5 md:px-8 py-8" id="workbench">
      <p className="font-label text-label text-primary font-semibold tracking-wider">{p.workbench_label}</p>
      <h2 className="font-headline text-headline text-on mt-2">{p.title}</h2>
      <p className="text-body text-secondary mt-2 mb-6">{p.sim_note}</p>

      <div className="rounded-xl border border-surface-variant bg-surface-container overflow-hidden">
        <div className="grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* 左：业务事件面板 */}
          <div className="p-5 md:p-6 border-b md:border-b-0 md:border-r border-surface-variant">
            <p className="font-mono text-label text-secondary font-bold mb-3">{p.event_badge}</p>
            <div className="rounded-lg bg-surface border border-error/40 p-4">
              <p className="font-mono text-label text-error font-bold">{p.event.time}</p>
              <p className="font-title text-title text-on font-semibold mt-1">{p.event.title}</p>
              <p className="text-body text-secondary mt-1">{p.event.detail}</p>
            </div>

            {state !== 'IDLE' && state !== 'EVENT' && (
              <div className="mt-4">
                <p className="font-mono text-label text-primary font-bold mb-2">{p.agent_badge}</p>
                <div className="rounded-lg bg-surface border border-primary-container p-4">
                  <p className="font-label text-label text-secondary">{p.status_label}</p>
                  <p className="text-body text-on font-medium">
                    {state === 'RESULT' || state === 'COMPLETE' ? p.status_done : p.status_processing}
                  </p>
                  {log.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-surface-variant">
                      <p className="font-label text-label text-secondary mb-1">{p.action.cr_title}</p>
                      {log.map((l, i) => (
                        <p key={i} className="font-mono text-label text-on">{l}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* 右：步骤内容 */}
          <div className="p-5 md:p-6 min-h-[320px] flex flex-col">
            {state === 'IDLE' && (
              <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
                <span className="material-symbols-outlined text-[2.5rem] text-outline" aria-hidden="true">smart_toy</span>
                {primaryButton()}
              </div>
            )}

            {state === 'EVENT' && (
              <div>
                <p className="font-mono text-label text-primary font-bold mb-3">{p.agent_badge}</p>
                <div className="rounded-lg bg-surface border border-surface-variant p-4">
                  <p className="text-body text-on font-medium">{p.event.detected}</p>
                  <p className="text-body text-secondary mt-1">{p.event.detected_body}</p>
                </div>
                <p className="mt-4 text-body text-on font-medium border-l-2 border-primary pl-3">{p.event.note}</p>
                <div className="mt-5">{primaryButton()}</div>
              </div>
            )}

            {state === 'CONTEXT' && (
              <div>
                <div className="rounded-lg bg-surface border border-surface-variant p-4">
                  {p.context.chain.map((c, i) => (
                    <div key={i}>
                      <p className="text-body text-on font-medium">{c.from}</p>
                      <p className="font-label text-label text-primary pl-3 py-0.5">{c.verb}</p>
                    </div>
                  ))}
                  <p className="text-body text-on font-medium">{p.context.chain_end}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.context.facts.map((fct, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-full bg-surface border border-surface-variant text-label text-on">
                      {fct.label}: <strong>{fct.value}</strong>
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-body text-on font-medium border-l-2 border-primary pl-3">{p.context.note}</p>
                <div className="mt-5">{primaryButton()}</div>
              </div>
            )}

            {state === 'REASONING' && (
              <div>
                <div className="rounded-lg bg-surface border border-surface-variant p-4">
                  {p.reasoning.path.map((s, i) => (
                    <p key={i} className="font-mono text-label text-on py-0.5">{s}</p>
                  ))}
                </div>
                <div className="mt-3 rounded-lg border border-error/40 bg-surface p-4">
                  <p className="font-mono text-label text-error font-bold">{p.reasoning.risk_badge}</p>
                  {p.reasoning.facts.map((fct, i) => (
                    <p key={i} className="text-body text-on mt-1.5">
                      {fct.label}: <strong>{fct.value}</strong>
                    </p>
                  ))}
                </div>
                <div className="mt-5">{primaryButton()}</div>
              </div>
            )}

            {state === 'VERIFY' && (
              <div>
                <div className="rounded-lg bg-surface border border-surface-variant p-4">
                  {p.verify.items.map((item, i) => (
                    <p key={i} className="flex items-center gap-2 text-body py-1">
                      <span className="material-symbols-outlined text-[1.1rem] text-primary" aria-hidden="true">
                        {verified.includes(item) ? 'check_circle' : 'radio_button_unchecked'}
                      </span>
                      <span className={verified.includes(item) ? 'text-on' : 'text-outline'}>{item}</span>
                    </p>
                  ))}
                </div>
                <p className="mt-4 text-body text-on font-medium border-l-2 border-primary pl-3">{p.verify.note}</p>
                <div className="mt-5">{verified.length === p.verify.items.length ? primaryButton() : null}</div>
              </div>
            )}

            {(state === 'ACTION' || state === 'APPROVAL') && (
              <div>
                <div className="rounded-lg border border-primary-container bg-surface p-4">
                  <p className="font-mono text-label text-primary font-bold">{p.action.recommended_badge}</p>
                  <p className="text-body text-on mt-1.5">{p.action.recommended_body}</p>
                  <p className="text-body text-on mt-1.5">
                    {p.action.alt_supplier} · <strong>{p.action.alt_price}</strong>
                  </p>
                </div>
                <div className="mt-3 rounded-lg bg-surface border border-surface-variant p-4">
                  <p className="font-title text-title text-on font-semibold">{p.action.cr_title}</p>
                  <p className="text-body text-on mt-1">{p.action.cr_change}</p>
                  <p className="mt-2">
                    <span
                      className={`px-2.5 py-1 rounded-full text-label font-semibold ${
                        approved
                          ? 'bg-primary-container text-primary-deep'
                          : 'bg-surface-container text-secondary border border-surface-variant'
                      }`}
                    >
                      {approved ? p.action.approved : p.action.status_pending}
                    </span>
                  </p>
                </div>

                {!crSubmitted && state === 'ACTION' && (
                  <button
                    type="button"
                    onClick={submitCr}
                    className="mt-4 px-5 py-2.5 rounded-lg bg-primary text-on-primary text-label font-semibold hover:opacity-90 transition-opacity"
                  >
                    {p.action.submit_button}
                  </button>
                )}
                {crSubmitted && !approved && (
                  <div className="mt-4">
                    <p className="text-body text-on font-semibold mb-2.5 border-l-2 border-primary pl-3">
                      {p.action.need_human}
                    </p>
                    <button
                      type="button"
                      onClick={approve}
                      className="px-5 py-2.5 rounded-lg bg-primary text-on-primary text-label font-semibold hover:opacity-90 transition-opacity"
                    >
                      {p.action.approve_button}
                    </button>
                  </div>
                )}
                {approved && (
                  <div className="mt-4 grid sm:grid-cols-2 gap-3">
                    <div className="rounded-lg bg-surface border border-surface-variant p-3.5">
                      <p className="font-label text-label text-secondary">{p.action.neq_left}</p>
                    </div>
                    <div className="rounded-lg bg-surface-container border border-primary-container p-3.5">
                      <p className="font-label text-label text-primary-deep">{p.action.neq_right}</p>
                    </div>
                  </div>
                )}
                {approved && <p className="mt-2.5 text-label text-secondary">{p.action.neq_note}</p>}
                {approved && <div className="mt-4">{primaryButton()}</div>}
              </div>
            )}

            {state === 'RESULT' && (
              <div>
                <div className="rounded-lg border border-primary-container bg-surface p-4">
                  <p className="font-mono text-label text-primary font-bold">{p.result.badge}</p>
                  {p.result.rows.map((r, i) => (
                    <p key={i} className="text-body text-on mt-1.5">
                      {r.label}: <strong>{r.value}</strong>
                    </p>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div className="rounded-lg bg-surface border border-surface-variant p-3.5">
                    <p className="font-label text-label text-secondary">{p.result.before_label}</p>
                    <p className="text-body text-on font-medium mt-0.5">{p.result.before_value}</p>
                  </div>
                  <div className="rounded-lg bg-surface-container border border-primary-container p-3.5">
                    <p className="font-label text-label text-primary">{p.result.after_label}</p>
                    <p className="text-body text-on font-medium mt-0.5">{p.result.after_value}</p>
                  </div>
                </div>
                <div className="mt-5">{primaryButton()}</div>
              </div>
            )}

            {state === 'COMPLETE' && (
              <div className="flex-1 flex flex-col items-center justify-center text-center gap-3 py-6">
                <p className="font-headline text-headline text-on leading-snug max-w-md">{p.complete.statement}</p>
                <p className="font-title text-title text-primary font-semibold">{p.complete.definition}</p>
                <a
                  href={p.complete.cta_href}
                  className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-on-primary text-label font-semibold hover:opacity-90 transition-opacity"
                >
                  {p.complete.cta}
                  <span className="material-symbols-outlined text-[1.1rem]" aria-hidden="true">arrow_downward</span>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* 步骤指示器 */}
        <div className="flex flex-wrap items-center gap-2 px-5 md:px-6 py-4 border-t border-surface-variant">
          {p.stepper.map((s, i) => (
            <span key={i} className="flex items-center gap-2">
              <span
                className={`w-2 h-2 rounded-full ${
                  i < stage || state === 'COMPLETE'
                    ? 'bg-primary'
                    : i === stage
                      ? 'bg-primary ring-4 ring-primary-container'
                      : 'bg-outline-variant'
                }`}
                aria-hidden="true"
              />
              <span className={`text-label ${i <= stage || state === 'COMPLETE' ? 'text-on font-medium' : 'text-outline'}`}>
                {s}
              </span>
              {i < p.stepper.length - 1 && <span className="w-4 h-px bg-surface-variant" aria-hidden="true" />}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
