import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

/** sitemap.xml —— 首页（双语）+ 全部已发布概念页；/ 为 noindex 跳转页，不列入 */
export const GET: APIRoute = async ({ site }) => {
  const base = (site ?? new URL('https://seeai.site')).href.replace(/\/$/, '');
  const entries = await getCollection('concepts', (e) => !e.data.draft);

  const urls: { loc: string; alternates?: { lang: string; href: string }[] }[] = [
    { loc: `${base}/zh/` },
    { loc: `${base}/en/` },
    { loc: `${base}/zh/privacy/` },
    { loc: `${base}/en/privacy/` },
    { loc: `${base}/zh/terms/` },
    { loc: `${base}/en/terms/` },
    ...entries.map((e) => {
      const other = e.data.locale === 'zh' ? 'en' : 'zh';
      return {
        loc: `${base}/${e.data.locale}/${e.data.slug}/`,
        alternates: [
          { lang: e.data.locale === 'zh' ? 'zh' : 'en', href: `${base}/${e.data.locale}/${e.data.slug}/` },
          { lang: other, href: `${base}/${other}/${e.data.slug}/` },
        ],
      };
    }),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
${(u.alternates ?? [])
  .map(
    (a) =>
      `    <xhtml:link rel="alternate" hreflang="${a.lang}" href="${a.href}" />`,
  )
  .join('\n')}
  </url>`,
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
