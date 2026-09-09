import { zh } from './zh';
import { en } from './en';

export type Locale = 'zh' | 'en';
export type UIStrings = typeof zh;

const strings: Record<Locale, UIStrings> = { zh, en };

export function getStrings(locale: Locale): UIStrings {
  return strings[locale];
}

/** 同内容跨语言路径映射 */
export const localePair: Record<Locale, Locale> = { zh: 'en', en: 'zh' };
