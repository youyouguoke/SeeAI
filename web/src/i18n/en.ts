import type { UIStrings } from './zh';

/**
 * Shared UI strings (English) — shape is locked to UIStrings at compile time.
 */
export const en: UIStrings = {
  locale: 'en',
  htmlLang: 'en',
  site: {
    name: 'SeeAI',
    title: 'SeeAI — Understand AI by Seeing It',
    tagline: 'Interactive AI Concept Learning',
    description:
      'SeeAI explains core AI concepts through real enterprise scenarios and interactive demonstrations. First concept: Ontology — why AI still gets it wrong when all the data is there.',
  },
  header: {
    badge: 'Interactive AI Concepts',
    nav: {
      concepts: 'Concepts',
      methodology: 'Methodology',
      ontology: 'Ontology',
      digitalEmployee: 'Digital Employee',
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
