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
      'SeeAI 用真实企业场景与交互演示讲清企业 AI：本体论——AI 如何理解企业世界；数字员工——AI 如何在企业里承担工作；Agent（智能体）——AI 如何完成多步任务。',
  },
  header: {
    badge: '交互式 AI 概念',
    nav: {
      concepts: '概念',
      methodology: '方法论',
      ontology: '本体论 · Ontology',
      digitalEmployee: '数字员工 · Digital Employee',
      agent: 'Agent · 智能体',
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
