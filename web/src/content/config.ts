import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Concept 集合 —— 每个概念一个目录：concepts/<locale>/<slug>.mdx
 * frontmatter 即 Concept Schema（技术设计 §30），check:content 校验 zh/en 键与答案一致。
 */
const concepts = defineCollection({
  loader: glob({
    pattern: '**/*.mdx',
    base: './src/content/concepts',
    // frontmatter 自带 slug 字段，默认 generateId 会让 zh/en 撞 id —— 用 locale/slug 保证唯一
    generateId: ({ data }) => `${data.locale}/${data.slug}`,
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    locale: z.enum(['zh', 'en']),
    order: z.number(),
    concept_label: z.string(),
    chapter_label: z.string().optional(),
    reading_time: z.number(),
    est_minutes: z.number(),
    summary: z.string(),
    /** Hero 下方引导段 */
    teaser: z.string(),
    /** 引导段末尾的加粗强调句 */
    teaser_emphasis: z.string(),
    /** Hero 元信息行（3 项） */
    hero_meta: z.array(z.string()).length(3),
    /** 快速检查 */
    quiz: z.object({
      eyebrow: z.string(),
      badge: z.string(),
      scenario: z.string(),
      question: z.string(),
      options: z.array(z.string()).length(3),
      answer_index: z.number().int().min(0).max(2),
      feedbacks: z.array(z.string()).length(3),
      correct_title: z.string(),
      wrong_title: z.string(),
    }),
    /** 进一步学习：下一概念预告 */
    next_concept: z.object({
      label: z.string(),
      title: z.string(),
      description: z.string(),
      read_minutes: z.number(),
      preview_note: z.string(),
    }),
    draft: z.boolean().default(false),
  }),
});

export const collections = { concepts };
