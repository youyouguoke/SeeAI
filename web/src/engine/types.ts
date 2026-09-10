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

export interface MisconceptionItem {
  myth: string;
  reality: string;
  tagline: string;
}

export interface MisconceptionsBlock {
  eyebrow: string;
  title: string;
  intro: string;
  myth_label: string;
  reality_label: string;
  items: MisconceptionItem[];
  /** Part 6 扩展：Ontology 的真正成本（可选，纯静态呈现，不用则不写） */
  cost?: {
    title: string;
    items: string[];
    flywheel_title: string;
    flywheel_steps: string[];
    summary: string;
    discipline: string;
  };
}

/* -------------------- Part 2 · 企业语义平台（可选区块） -------------------- */

export interface EnterpriseSystem {
  code: string;
  name: string;
  knows: string;
}

export interface EnterpriseBlock {
  eyebrow: string;
  title: string;
  intro: string;
  systems: EnterpriseSystem[];
  ontology_label: string;
  ai_label: string;
  note_title: string;
  note_body: string;
  twin: { quote: string; body: string };
  conclusion: string;
}

/* -------------------- Part 4 · 商业案例研究（可选区块） -------------------- */

export interface CaseStudyStep {
  index: string;
  title: string;
  body: string;
  diagram: string[];
}

export interface CaseStudyBlock {
  eyebrow: string;
  title: string;
  note: { label: string; body: string };
  steps: CaseStudyStep[];
  callout: string;
  alt_label: string;
  alt_items: string[];
}

/* -------------------- Part 5 · 企业场景集（可选区块，带证据等级） -------------------- */

export type EvidenceLevel = 'A' | 'B' | 'C' | 'D';

export interface GalleryItem {
  tag: string;
  title: string;
  body: string;
  evidence: string;
  evidence_level: EvidenceLevel;
}

export interface GalleryBlock {
  eyebrow: string;
  title: string;
  intro: string;
  evidence_legend: string;
  items: GalleryItem[];
}

/* ------------------------------ 页内锚点导航（可选） ------------------------------ */

export interface NavItem {
  id: string;
  label: string;
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
  /** 页内锚点导航（可选） */
  nav?: NavItem[];
  /** Problem/Without 叙事（可选：事件卡 + 人工时间线 + Chatbot 局限 + Why） */
  problem?: ProblemBlock;
  idea?: IdeaBlock;
  definition?: DefinitionBlock;
  /** Part 2 企业语义平台（可选） */
  enterprise?: EnterpriseBlock;
  /** Part 4 商业案例研究（可选） */
  caseStudy?: CaseStudyBlock;
  /** Part 5 企业场景集（可选） */
  gallery?: GalleryBlock;
  /** Demo 后的心智模型流图（可选） */
  mentalModel?: FlowModelBlock;
  /** Deep Dive：定义卡 + Role/Access/Action/Governance 模型卡（可选） */
  deepDive?: DeepDiveBlock;
  /** 横向对比表（可选） */
  comparison?: VsTableBlock;
  scenario: ScenarioBlock;
  /** 概念连接（可选，Connections 的雏形） */
  connection?: ConnectionBlock;
  misconceptions: MisconceptionsBlock;
  /** 页面末尾的最终心智模型（可选） */
  finalModel?: FlowModelBlock;
  further: FurtherBlock;
}

/* -------------------- Problem / Without X 叙事（可选区块） -------------------- */

export interface ProblemBlock {
  /** Hero 下方 "Answer ≠ Work" 轻视觉（可选） */
  strip?: { left_label: string; left_flow: string[]; right_label: string; right_flow: string[]; punchline: string };
  eyebrow: string;
  title: string;
  event: { time: string; title: string; detail: string };
  human: { title: string; items: string[] };
  note: string;
  steps: { time: string; system: string; action: string; status: string }[];
  chatbot?: { user: string; bot: string; conclusion: string };
  why?: { columns: { label: string; items: string[] }[]; conclusion: string };
}

/* -------------------- Deep Dive：定义 + 模型卡（可选区块） -------------------- */

export interface DeepDiveBlock {
  eyebrow: string;
  title: string;
  definition: string;
  definition_note: string;
  cards: {
    title: string;
    question: string;
    body: string;
    lists?: { label: string; items: string[]; tone: 'allow' | 'deny' | 'pending' }[];
  }[];
  governance_conclusion: string;
}

/* -------------------- 横向对比表（可选区块） -------------------- */

export interface VsTableBlock {
  title: string;
  left_label: string;
  right_label: string;
  rows: { left: string; right: string }[];
  footnote: string;
}

/* -------------------- 心智模型流图（可选区块） -------------------- */

export interface FlowModelBlock {
  eyebrow?: string;
  title?: string;
  steps: string[];
  conclusion?: string;
}

/* -------------------- 概念连接（可选区块，Connections 雏形） -------------------- */

export interface ConnectionBlock {
  eyebrow: string;
  prev: { label: string; points: string[] };
  current: { label: string; points: string[] };
  chain: string[];
  statement: string;
}
