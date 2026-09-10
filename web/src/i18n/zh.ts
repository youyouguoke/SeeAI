/**
 * 共享界面文案（中文）—— 页内主要内容以各页面/MDX 内容为准。
 */
export const zh = {
  locale: 'zh',
  htmlLang: 'zh-CN',
  site: {
    name: 'SeeAI',
    title: 'SeeAI — 看清 AI 如何真正运作',
    tagline: '交互式 AI 概念学习平台',
    description:
      'SeeAI 用真实企业场景与交互演示讲清 AI 底层概念。首个概念：本体论（Ontology）——为什么数据都在，AI 却仍然答错。',
  },
  header: {
    badge: '交互式 AI 概念',
    nav: {
      concepts: '概念',
      methodology: '方法论',
    },
  },
  lang: {
    label: '语言',
    zh: '中文',
    en: 'English',
    switchToEn: 'English',
  },
  footer: {
    tagline: 'Understand AI by Seeing It in Action.',
    note: '确定性教学演示 · 不调用外部 LLM API',
    allConcepts: '所有概念',
    methodology: '方法论',
    privacy: '隐私政策',
    terms: '使用条款',
    contact: '联系我们',
  },
  common: {
    minExperience: '分钟交互体验',
    readingTime: '阅读时长',
    concept: '概念',
    beginReading: '开始阅读',
    scenario: '场景',
  },
};

export type UIStrings = typeof zh;
