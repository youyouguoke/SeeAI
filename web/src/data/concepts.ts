/**
 * 概念状态注册表 —— 全站概念 Live / Coming Soon 状态的【唯一数据源】。
 *
 * 任何页面（首页 Chain、Header 下拉、概念页 Further Learning 的上下概念卡）
 * 引用概念状态时都必须从这里读取，禁止在页面/MDX 里手写状态标签。
 * 新概念上线只需：① 在这里登记并把 status 改为 'live'；② 加 ConceptSpec + MDX + Demo 插件。
 *
 * 教训：Embedding "In Production" 与 Agent "Coming Soon" 两次状态滞后，
 * 根因都是状态标签在多个页面手写（见 2026-09 评审）。
 */

export type ConceptStatus = 'live' | 'coming-soon' | 'coming-later';

export interface ConceptRef {
  slug: string;
  status: ConceptStatus;
  order: number;
}

export const concepts: ConceptRef[] = [
  { slug: 'ontology', status: 'live', order: 1 },
  { slug: 'digital-employee', status: 'live', order: 2 },
  { slug: 'agent', status: 'live', order: 3 },
];

export const liveConcepts = concepts.filter((c) => c.status === 'live');

export const isLive = (slug?: string): boolean =>
  !!slug && concepts.some((c) => c.slug === slug && c.status === 'live');

/** 状态徽标文案（Further Learning 等场景，按 locale 取） */
export function liveBadge(locale: 'zh' | 'en'): string {
  return locale === 'zh' ? '现已上线' : 'Live now';
}
