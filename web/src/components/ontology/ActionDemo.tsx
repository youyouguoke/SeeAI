import { useEffect, useState } from 'react';
import type { ActionDemoContent } from '../../data/concepts/ontology.types';
import { track, ANALYTICS_EVENTS } from '../../lib/analytics';

type ActionState = 'PENDING' | 'APPROVED';

interface Props {
  a: ActionDemoContent;
  locale: 'zh' | 'en';
}

const pad = (n: number) => String(n).padStart(2, '0');

export default function ActionDemo({ a, locale }: Props) {
  const [state, setState] = useState<ActionState>('PENDING');
  const [logLine, setLogLine] = useState<string | null>(null);

  useEffect(() => {
    track(ANALYTICS_EVENTS.ACTION_DEMO_START, {
      concept_id: 'ontology',
      action_id: a.action_id,
      locale,
    });
  }, [a.action_id, locale]);

  const approve = () => {
    if (state === 'APPROVED') return;
    const props = { concept_id: 'ontology', action_id: a.action_id, locale };
    track(ANALYTICS_EVENTS.ACTION_DEMO_CLICK, props);
    const now = new Date();
    const stamp = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
    setState('APPROVED');
    setLogLine(`${stamp} — ${locale === 'zh' ? '批准已记录' : 'Approval recorded'}`);
    track(ANALYTICS_EVENTS.ACTION_DEMO_COMPLETE, props);
  };

  const approved = state === 'APPROVED';

  return (
    <section className="max-w-content mx-auto px-5 md:px-8 py-8 border-t border-surface-variant" id="action-demo">
      <p className="font-label text-label text-primary font-semibold tracking-wider">{a.eyebrow}</p>
      <h2 className="font-headline text-headline text-on mt-2 mb-4">{a.title}</h2>
      <p className="text-body text-secondary max-w-2xl mb-8">{a.intro}</p>

      <div className="max-w-3xl bg-surface-container rounded-xl border border-surface-variant overflow-hidden">
        <div className="p-5 md:p-6">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-label font-bold text-on px-2.5 py-1 rounded border border-surface-variant bg-surface">
              {a.cr_label}
            </span>
            <span className="font-mono text-label text-secondary">{a.cr_title}</span>
          </div>
          <p className="text-body text-on font-medium mb-6">{a.cr_body}</p>

          <div className="flex flex-wrap items-center gap-4">
            <div>
              <p className="text-label text-secondary">{a.field_label}</p>
              <p
                className={
                  approved
                    ? 'mt-1 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-label font-semibold bg-primary-container text-primary-deep border border-primary-container'
                    : 'mt-1 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-label font-semibold bg-surface text-on border border-outline-variant'
                }
              >
                <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">
                  {approved ? 'check_circle' : 'schedule'}
                </span>
                {approved ? a.approved : a.pending}
              </p>
            </div>
            <button
              type="button"
              onClick={approve}
              disabled={approved}
              className={
                approved
                  ? 'ml-auto inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-surface text-secondary text-label font-semibold border border-surface-variant cursor-default'
                  : 'ml-auto inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-on-primary text-label font-semibold hover:bg-primary-deep transition-colors cursor-pointer'
              }
            >
              <span className="material-symbols-outlined text-[1.1rem]" aria-hidden="true">
                {approved ? 'check' : 'bolt'}
              </span>
              {a.button}
            </button>
          </div>

          {approved && (
            <div className="mt-6 space-y-3 anim-fade-in">
              <p className="text-body text-on font-medium flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[1.1rem]" aria-hidden="true">
                  task_alt
                </span>
                {a.done_line}
              </p>
              <div className="bg-surface rounded-lg border border-surface-variant p-4 font-mono text-label text-secondary">
                <p className="font-sans font-semibold text-on mb-1.5">{a.log_label}</p>
                <p>{logLine}</p>
              </div>
              <p className="text-label text-secondary">{a.real_note}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
