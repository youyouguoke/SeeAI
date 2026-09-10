import { useEffect, useState } from 'react';
import { track, ANALYTICS_EVENTS } from '../../../lib/analytics';
import type { ConceptSpec, Locale } from '../../types';
import type { AgentDemoPayload } from '../../../concepts/agent/types';

type AgentStep = 'idle' | 'goal' | 'plan' | 'tool' | 'observe' | 'decide' | 'replan' | 'action' | 'result';

const ORDER: AgentStep[] = ['goal', 'plan', 'tool', 'observe', 'decide', 'replan', 'action', 'result'];
const STAGE_INDEX: Record<string, number> = {
  goal: 0, plan: 1, tool: 2, observe: 3, decide: 4, replan: 5, action: 6, result: 7,
};

export default function AgentDemo({ spec, locale }: { spec: ConceptSpec; locale: Locale }) {
  const p = spec.demo.payload as unknown as AgentDemoPayload;
  const [state, setState] = useState<AgentStep>('idle');
  const [maxReached, setMaxReached] = useState(0);
  const [crSubmitted, setCrSubmitted] = useState(false);
  const [approved, setApproved] = useState(false);
  const [log, setLog] = useState<string[]>([]);

  useEffect(() => {
    track(ANALYTICS_EVENTS.AGENT_DEMO_START, { concept_id: 'agent', locale });
  }, [locale]);

  const props = { concept_id: 'agent', locale };
  const stage = state === 'idle' ? -1 : STAGE_INDEX[state];
  const stepKey = state === 'idle' ? null : state;

  const advance = (next: AgentStep) => {
    setState(next);
    setMaxReached((m) => Math.max(m, STAGE_INDEX[next]));
    track(ANALYTICS_EVENTS.AGENT_STEP_VIEW, { ...props, step: next });
    if (next === 'replan') track(ANALYTICS_EVENTS.AGENT_REPLAN_VIEW, props);
    if (next === 'result') track(ANALYTICS_EVENTS.AGENT_DEMO_COMPLETE, props);
  };

  const jump = (i: number) => {
    // Inspect：仅可回看已达成的步骤
    if (i <= maxReached) setState(ORDER[i]);
  };

  const reset = () => {
    setState('idle');
    setMaxReached(0);
    setCrSubmitted(false);
    setApproved(false);
    setLog([]);
    track(ANALYTICS_EVENTS.AGENT_DEMO_START, { ...props, replay: true });
  };

  const submitCr = () => {
    setCrSubmitted(true);
    track(ANALYTICS_EVENTS.AGENT_ACTION, { ...props, action_id: 'prepare_change_request' });
  };
  const approve = () => {
    setApproved(true);
    setLog((l) => [...l, `${p.steps.action.log_time} — ${p.steps.action.log_line}`]);
    track(ANALYTICS_EVENTS.AGENT_APPROVAL, { ...props, action_id: 'approve_change_request' });
  };

  const primaryButton = () => {
    if (state === 'idle')
      return (
        <button
          type="button"
          onClick={() => advance('goal')}
          className="px-5 py-2.5 rounded-lg bg-primary text-on-primary text-label font-semibold hover:opacity-90 transition-opacity"
        >
          {p.start_button}
        </button>
      );
    const nextMap: Partial<Record<AgentStep, AgentStep>> = {
      goal: 'plan', plan: 'tool', tool: 'observe', observe: 'decide', decide: 'replan', replan: 'action',
    };
    if (state === 'action' && approved) nextMap.action = 'result';
    const n = nextMap[state];
    if (n)
      return (
        <button
          type="button"
          onClick={() => advance(n)}
          className="px-5 py-2.5 rounded-lg bg-primary text-on-primary text-label font-semibold hover:opacity-90 transition-opacity"
        >
          {p.next_button}
        </button>
      );
    return null;
  };

  const inspect = (s: { what: string; why: string }) => (
    <div className="mt-4 grid sm:grid-cols-2 gap-3">
      <div className="rounded-lg bg-surface border border-surface-variant p-3.5">
        <p className="font-label text-label text-primary font-semibold mb-1">{p.what_label}</p>
        <p className="text-body text-secondary">{s.what}</p>
      </div>
      <div className="rounded-lg bg-surface border border-surface-variant p-3.5">
        <p className="font-label text-label text-primary font-semibold mb-1">{p.why_label}</p>
        <p className="text-body text-secondary">{s.why}</p>
      </div>
    </div>
  );

  const s = p.steps;

  return (
    <section className="max-w-content mx-auto px-5 md:px-8 py-8" id="workbench">
      <p className="font-label text-label text-primary font-semibold tracking-wider">{p.workbench_label}</p>
      <h2 className="font-headline text-headline text-on mt-2">{p.title}</h2>
      <p className="text-body text-secondary mt-2 mb-6">{p.sim_note}</p>

      <div className="rounded-xl border border-surface-variant bg-surface-container overflow-hidden">
        <div className="grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* 左：Goal 面板 */}
          <div className="p-5 md:p-6 border-b md:border-b-0 md:border-r border-surface-variant">
            <p className="font-mono text-label text-secondary font-bold mb-3">{p.goal_badge}</p>
            <div className="rounded-lg bg-surface border border-primary-container p-4">
              <p className="font-title text-title text-on font-semibold">{p.goal_text}</p>
              <p className="text-body text-secondary mt-1">{p.goal_detail}</p>
            </div>
            {log.length > 0 && (
              <div className="mt-4 rounded-lg bg-surface border border-surface-variant p-3.5">
                {log.map((l, i) => (
                  <p key={i} className="font-mono text-label text-on">{l}</p>
                ))}
              </div>
            )}
            {state !== 'idle' && (
              <button
                type="button"
                onClick={reset}
                className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-surface text-secondary text-label font-medium border border-surface-variant hover:border-outline-variant transition-colors"
              >
                <span className="material-symbols-outlined text-[1.1rem]" aria-hidden="true">rotate_left</span>
                {p.reset_button}
              </button>
            )}
          </div>

          {/* 右：步骤内容 */}
          <div className="p-5 md:p-6 min-h-[360px] flex flex-col">
            {state === 'idle' && (
              <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
                <span className="material-symbols-outlined text-[2.5rem] text-outline" aria-hidden="true">route</span>
                {primaryButton()}
              </div>
            )}

            {stepKey === 'goal' && (
              <div>
                <p className="font-mono text-label text-primary font-bold mb-3">{p.goal_badge}</p>
                <div className="rounded-lg bg-surface border border-primary-container p-4">
                  <p className="font-title text-title text-on font-semibold">{p.goal_text}</p>
                  <p className="text-body text-secondary mt-1">{p.goal_detail}</p>
                </div>
                <p className="mt-4 text-body text-on font-medium border-l-2 border-primary pl-3">{s.goal.note}</p>
                {inspect(s.goal)}
                <div className="mt-5">{primaryButton()}</div>
              </div>
            )}

            {stepKey === 'plan' && (
              <div>
                <p className="font-mono text-label text-primary font-bold mb-3">{s.plan.badge}</p>
                <div className="rounded-lg bg-surface border border-surface-variant p-4">
                  <p className="font-label text-label text-secondary mb-2.5">{s.plan.plan_label}</p>
                  {s.plan.items.map((it, i) => (
                    <p key={i} className="flex items-start gap-2.5 text-body text-on py-1">
                      <span className="font-mono text-label text-primary font-bold mt-0.5">{i + 1}</span>
                      {it}
                    </p>
                  ))}
                </div>
                <p className="mt-4 text-body text-on font-medium border-l-2 border-primary pl-3">{s.plan.note}</p>
                {inspect(s.plan)}
                <div className="mt-5">{primaryButton()}</div>
              </div>
            )}

            {stepKey === 'tool' && (
              <div>
                <p className="font-mono text-label text-primary font-bold mb-3">{s.tool.badge} · {s.tool.tool_name}</p>
                <div className="rounded-lg bg-surface border border-surface-variant p-4">
                  <p className="font-label text-label text-secondary mb-2">{s.tool.query_label}</p>
                  <p className="font-mono text-body text-on">{s.tool.query.join(' → ')}</p>
                  <div className="my-3 border-t border-surface-variant" />
                  <p className="font-label text-label text-secondary mb-2">{s.tool.result_label}</p>
                  {s.tool.result.map((r, i) => (
                    <p key={i} className="text-body text-on">{r}</p>
                  ))}
                </div>
                <p className="mt-4 text-body text-on font-medium border-l-2 border-primary pl-3">{s.tool.note}</p>
                {inspect(s.tool)}
                <div className="mt-5">{primaryButton()}</div>
              </div>
            )}

            {stepKey === 'observe' && (
              <div>
                <p className="font-mono text-label text-primary font-bold mb-3">{s.observe.badge}</p>
                <div className="rounded-lg bg-surface border border-surface-variant p-4">
                  {s.observe.facts.map((f, i) => (
                    <p key={i} className="text-body text-on">{f.label}: <strong>{f.value}</strong></p>
                  ))}
                  <p className="mt-3 font-mono text-title text-error font-bold">{s.observe.comparison}</p>
                  <p className="mt-1 text-body text-on font-semibold">{s.observe.conclusion}</p>
                </div>
                <p className="mt-4 text-body text-on font-medium border-l-2 border-primary pl-3">{s.observe.note}</p>
                {inspect(s.observe)}
                <div className="mt-5">{primaryButton()}</div>
              </div>
            )}

            {stepKey === 'decide' && (
              <div>
                <p className="font-mono text-label text-primary font-bold mb-3">{s.decide.badge}</p>
                <div className="rounded-lg bg-surface border border-primary-container p-4">
                  <p className="font-title text-title text-on font-semibold">{s.decide.decision}</p>
                </div>
                <p className="mt-4 text-body text-on font-medium border-l-2 border-primary pl-3">{s.decide.note}</p>
                {inspect(s.decide)}
                <div className="mt-5">{primaryButton()}</div>
              </div>
            )}

            {stepKey === 'replan' && (
              <div>
                <p className="font-mono text-label text-primary font-bold mb-3">{s.replan.badge}</p>
                <div className="rounded-lg bg-surface border border-surface-variant p-4 opacity-80">
                  <p className="font-label text-label text-secondary mb-2 line-through decoration-1">{s.replan.original_label}</p>
                  {s.replan.original.map((it, i) => (
                    <p key={i} className="text-body text-secondary line-through decoration-1 py-0.5">{it}</p>
                  ))}
                </div>
                <p className="my-3 flex items-center gap-2 font-label text-label text-error font-semibold">
                  <span className="material-symbols-outlined text-[1.1rem]" aria-hidden="true">priority_high</span>
                  {s.replan.observation_label}: {s.replan.observation}
                </p>
                <div className="rounded-lg bg-surface border-2 border-primary p-4">
                  <p className="font-label text-label text-primary font-semibold mb-2">{s.replan.updated_label}</p>
                  {s.replan.updated.map((it, i) => (
                    <p key={i} className="flex items-start gap-2.5 text-body text-on py-1">
                      <span className="font-mono text-label text-primary font-bold mt-0.5">{i + 1}</span>
                      {it}
                    </p>
                  ))}
                </div>
                <p className="mt-4 text-body text-on font-semibold border-l-2 border-primary pl-3">{s.replan.callout}</p>
                {inspect(s.replan)}
                <div className="mt-5">{primaryButton()}</div>
              </div>
            )}

            {stepKey === 'action' && (
              <div>
                <p className="font-mono text-label text-primary font-bold mb-3">{s.action.badge}</p>
                <div className="rounded-lg bg-surface border border-surface-variant p-4">
                  <p className="font-label text-label text-secondary mb-2.5">{s.action.options_label}</p>
                  {s.action.options.map((o, i) => (
                    <p key={i} className="text-body text-on py-1">
                      <strong>{o.name}</strong> · {o.lead} · {o.cost}
                    </p>
                  ))}
                </div>
                <div className="mt-3 rounded-lg border border-primary-container bg-surface p-4">
                  <p className="font-mono text-label text-primary font-bold">{s.action.recommended_badge}</p>
                  <p className="text-body text-on mt-1.5 font-semibold">{s.action.recommended}</p>
                  <p className="text-body text-secondary mt-1">{s.action.recommended_reason}</p>
                </div>
                <div className="mt-3 rounded-lg bg-surface border border-surface-variant p-4">
                  <p className="font-title text-title text-on font-semibold">{s.action.cr_title}</p>
                  <p className="text-body text-on mt-1">{s.action.cr_change}</p>
                  <p className="mt-2">
                    <span
                      className={`px-2.5 py-1 rounded-full text-label font-semibold ${
                        approved ? 'bg-primary-container text-primary-deep' : 'bg-surface-container text-secondary border border-surface-variant'
                      }`}
                    >
                      {approved ? s.action.approved : s.action.status_pending}
                    </span>
                  </p>
                </div>
                {!crSubmitted && (
                  <button
                    type="button"
                    onClick={submitCr}
                    className="mt-4 px-5 py-2.5 rounded-lg bg-primary text-on-primary text-label font-semibold hover:opacity-90 transition-opacity"
                  >
                    {s.action.submit_button}
                  </button>
                )}
                {crSubmitted && !approved && (
                  <div className="mt-4">
                    <p className="text-body text-on font-semibold mb-2.5 border-l-2 border-primary pl-3">{s.action.need_human}</p>
                    <button
                      type="button"
                      onClick={approve}
                      className="px-5 py-2.5 rounded-lg bg-primary text-on-primary text-label font-semibold hover:opacity-90 transition-opacity"
                    >
                      {s.action.approve_button}
                    </button>
                  </div>
                )}
                {approved && <p className="mt-3 text-label text-secondary">{s.action.note}</p>}
                {approved && <div className="mt-4">{primaryButton()}</div>}
                {!approved && inspect(s.action)}
              </div>
            )}

            {stepKey === 'result' && (
              <div>
                <div className="rounded-lg border border-primary-container bg-surface p-4">
                  <p className="font-mono text-label text-primary font-bold">{s.result.badge}</p>
                  {s.result.rows.map((r, i) => (
                    <p key={i} className="text-body text-on mt-1.5">{r.label}: <strong>{r.value}</strong></p>
                  ))}
                </div>
                {inspect(s.result)}
                <p className="mt-5 font-headline text-headline text-on leading-snug">{s.result.statement}</p>
              </div>
            )}
          </div>
        </div>

        {/* Stepper：可点击回看已达成的步骤（Inspect） */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 px-5 md:px-6 py-4 border-t border-surface-variant">
          {p.stepper.map((label, i) => (
            <button
              key={i}
              type="button"
              onClick={() => jump(i)}
              disabled={i > maxReached}
              className={`flex items-center gap-2 font-label text-label transition-colors ${
                i > maxReached ? 'text-outline-variant cursor-not-allowed' : i === stage ? 'text-primary font-semibold' : 'text-secondary hover:text-on'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  i < maxReached || (i === maxReached && state === 'result') ? 'bg-primary' : i === stage ? 'bg-primary ring-4 ring-primary-container' : 'bg-outline-variant'
                }`}
              />
              {label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
