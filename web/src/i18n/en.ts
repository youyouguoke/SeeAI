import type { UIStrings } from './zh';

/**
 * Shared UI strings (English) — shape is locked to UIStrings at compile time.
 */
export const en: UIStrings = {
  locale: 'en',
  htmlLang: 'en',
  site: {
    name: 'SeeAI',
    title: 'SeeAI — Understand AI by Seeing It in Action',
    tagline: 'Interactive AI Concept Learning',
    description:
      'SeeAI teaches enterprise AI through real business scenarios and interactive simulations: Ontology — how AI understands the enterprise world; Digital Employee — how AI takes on work within it; Agent — how AI completes multi-step tasks.',
  },
  header: {
    badge: 'Interactive AI Concepts',
    nav: {
      concepts: 'Concepts',
      methodology: 'Methodology',
      ontology: 'Ontology',
      digitalEmployee: 'Digital Employee',
      agent: 'Agent',
    },
  },
  lang: {
    label: 'Language',
    zh: '中文',
    en: 'English',
    switchToEn: 'English',
  },
  footer: {
    tagline: 'Understand AI by Seeing It in Action.',
    note: 'Deterministic pedagogical simulation · No external LLM API calls',
    allConcepts: 'All Concepts',
    methodology: 'Methodology',
    privacy: 'Privacy',
    terms: 'Terms',
    contact: 'Contact',
  },
  common: {
    minExperience: 'min interactive experience',
    readingTime: 'Reading time',
    concept: 'Concept',
    beginReading: 'Begin reading',
    scenario: 'Scenario',
  },
};
