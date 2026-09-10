/**
 * Concept Learning Engine — 类型契约（唯一真源）
 *
 * 设计原则（上线后优化方案 v1.1 §4/§7/§8）：
 * - Engine 统一"教学骨架"（Problem/Definition/Scenario/Misconceptions/Quiz/FurtherLearning + 认知叙事顺序）
 * - 不统一 Demo 机制：每个概念的核心交互通过 DemoDefinition.type 走插件位
 * - ConceptSpec 从 Ontology 实际代码提炼；新增概念 = 内容模块 + MDX + Demo 数据，零组件改动
 *
 * 分层：
 *   ConceptSpec（教什么：结构化内容 + demo 插件声明）
 *   ConceptPage（怎么教：渲染骨架，所有概念共用）
 *   demos/*（怎么让用户看到概念真正工作：插件，按概念注册）
 */

export type Locale = 'zh' | 'en';

/* ------------------------------ 定义区块 ------------------------------ */

export interface CompareSide {
  icon: string;
  label: string;
  body: string;
  /**  emphasized = 本体侧（蓝底高亮） */
  emphasized?: boolean;
}

export interface DefinitionBlock {
  eyebrow: string;
  title: string;
  quote: string;
  /** before/after 对照（Ontology: 数据库 vs 本体论；Embedding 可为关键词匹配 vs 向量） */
  compare: { a: CompareSide; b: CompareSide };
  components_label: string;
  /** 本概念的核心构件卡（Ontology 四构件；其他概念各自定义） */
  components: {
    index: string;
    icon: string;
    name: string;
    role: string;
    /** static=静态语义层 dynamic=动态操作层（可选视觉强调） */
    layer?: 'static' | 'dynamic';
    body: string;
    example: string;
  }[];
  /** 可选对照块（Ontology: Relationship vs Action；无则不渲染） */
  contrast?: {
    left: { label: string; role: string; from: string; verb: string; to: string };
    right: { label: string; role: string; from: string; verb: string; to: string; highlight?: boolean };
    summary: string;
  };
}

/* ------------------------------ 叙事区块 ------------------------------ */

export interface IdeaBlock {
  label: string;
  title: string;
  /** 认知级联问答（What exists? → Objects …） */
  questions: { q: string; a: string }[];
}

export interface ScenarioBlock {
  eyebrow: string;
  title: string;
  intro: string;
  levels: { tag: string; title: string; body: string }[];
  takeaway_title: string;
  takeaway_body: string;
}

export interface MisconceptionsBlock {
  eyebrow: string;
  title: string;
  intro: string;
  myth_label: string;
  reality_label: string;
  items: { myth: string; reality: string; tagline: string }[];
}

export interface FurtherBlock {
  eyebrow: string;
  back_home: string;
  review_label: string;
}

/* ------------------------------ Quiz（与 MDX frontmatter schema 对齐） ------------------------------ */

export interface QuizSpec {
  eyebrow: string;
  badge: string;
  scenario: string;
  question: string;
  options: string[];
  answer_index: number;
  feedbacks: string[];
  correct_title: string;
  wrong_title: string;
}

/* ------------------------------ Demo 插件位 ------------------------------ */

/**
 * Demo 插件声明。type 是 DemoSlot 注册表键；payload 为本概念 Demo 的内容数据
 * （TS 在插件内部 narrow 到具体概念的 payload 类型）。
 */
export interface DemoDefinition {
  type: string;
  payload?: unknown;
}

/* ------------------------------ ConceptSpec ------------------------------ */

export interface ConceptSpec {
  id: string;
  demo: DemoDefinition;
  idea: IdeaBlock;
  definition: DefinitionBlock;
  scenario: ScenarioBlock;
  misconceptions: MisconceptionsBlock;
  further: FurtherBlock;
}
