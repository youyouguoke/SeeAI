# SeeAI — Understand AI by Seeing It

双语（中文/English）交互式 AI 概念学习平台。MVP 只做一个概念：**本体论（Ontology）**——通过一次真实的成本追问，看清为什么数据都在、AI 却仍然答错。

线上：<https://seeai.site>

## 结构

- `web/` — Astro 5 + TypeScript strict + Tailwind CSS v4 + MDX Content Collections，静态导出，Cloudflare Pages 托管
- `web/src/engine/` — **Concept Learning Engine**：概念无关的教学骨架（ConceptPage 组装器 + Demo 插件注册表 DemoSlot + 7 个通用教学组件 + `types.ts` 契约）
- `web/src/concepts/<slug>/` — 每个概念的 ConceptSpec（zh/en 内容模块，TS 编译器强制互锁）+ 概念专属 Demo 类型与数据
- `docs/adding-a-concept.md` — **新增概念操作手册**（新增概念 = ConceptSpec + MDX + 可选 Demo 插件，零骨架改动）
- `01 SeeAI PRD.md` / `02 SeeAI MVP 技术设计 + Kimi Code 开发任务书.md` / `03 SeeAI MVP UIUX Design Specification v1.0.md` — 产品/技术/UIUX 定义文档
- stitch 设计包（本地资产，未入库）— UI 真源为 `editorial_intelligence/DESIGN.md`

## 路由

| 路径 | 说明 |
| --- | --- |
| `/` | 语言自动跳转（noindex） |
| `/zh/` `/en/` | 双语首页 |
| `/zh/ontology/` `/en/ontology/` | 概念 01：本体论（Core Demo + Action Demo + 四分构件） |
| `/sitemap.xml` | SEO sitemap（双语首页 + 已发布概念，hreflang 互链） |
| `/robots.txt` | 允许全站 + Sitemap 声明 |

## 开发

```bash
cd web
npm install
npm run dev          # 本地开发
npm run check        # 内容门禁 + typecheck + build（三道门禁）
npm run check:content  # 仅内容双语一致性校验
```

## 部署

Cloudflare Pages 直传（无 git provider）：

```bash
cd web && npm run build
source /root/.cloudflare_env
npx wrangler pages deploy dist --project-name=seeai --branch=main
```

## 设计纪律

- 设计 token 唯一真源：`stitch_seeai_interactive_learning_platform/editorial_intelligence/DESIGN.md` 的 YAML（纸薰衣草 `#fbf8fc` / 墨 `#1a1b20` / 钴蓝 `#004ac6` / 发丝线 1px）
- 所有演示为**确定性教学模拟**，零外部 LLM API 调用
- 不新增页面/功能、不改 IA；zh/en 内容强制同步（`check:content` + TS 接口互锁）
