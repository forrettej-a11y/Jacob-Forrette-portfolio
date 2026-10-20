# Jacob Forrette — Engineering Portfolio

A Next.js engineering portfolio: industrial "drafting room" design system, data-driven project pages, interactive timelines, a full-screen media gallery, a 3D CAD viewer (GLB/GLTF), and a working contact form.

**Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · React Three Fiber / drei · Geist fonts

---

## 1. Run it locally

Requires **Node.js 18.18+** (20 or 22 recommended).

```bash
npm install
npm run dev          # http://localhost:3000
```

Other scripts:

```bash
npm run build        # production build (run this before deploying)
npm run start        # serve the production build
npm run typecheck    # TypeScript check
```

## 2. Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel: **Add New → Project → Import** the repository. Framework is detected as Next.js — no build settings to change.
3. Add environment variables (Project → Settings → Environment Variables) — see `.env.example`:
   - `NEXT_PUBLIC_SITE_URL` — your final URL, e.g. `https://jacobforrette.com` (used for SEO, sitemap, social cards)
   - `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` — contact form delivery (below)
4. Deploy. Add a custom domain under Project → Settings → Domains if you have one.

Every time you add photos, documents or CAD files, commit and push — Vercel rebuilds and the placeholders switch over automatically.

## 3. Contact form setup

The form validates input in the browser **and** on the server, and blocks spam with a hidden honeypot field, a minimum fill time, and a per-IP rate limit.

Delivery uses [Resend](https://resend.com) (free tier is plenty):

1. Create a Resend account and an API key.
2. Verify a sending domain in Resend (or use their test sender while developing).
3. Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL` (your inbox) and `CONTACT_FROM_EMAIL` (e.g. `Portfolio <contact@yourdomain.com>`).

Until those are set, the form still validates but tells visitors it isn't connected yet (HTTP 503). Messages set `reply-to` to the sender, so you can reply directly.

*Optional hardening:* add Cloudflare Turnstile to the form, or move the rate limiter to a shared store such as Upstash Redis (`src/app/api/contact/route.ts`).

---

## 4. Editing content — you shouldn't need to touch components

All content lives in `src/data/`:

| File | What it controls |
|---|---|
| `site.ts` | Name, headline, biography, education, interests, navigation, **contact links**, resume path |
| `projects.ts` | The six featured project collections and their full case studies |
| `cast-in-steel.ts` | The four Cast in Steel years (each is a full project page) and collection intro |
| `research.ts` | Thesis abstract, objectives, methodology, metrics, milestones, documents |
| `experience.ts` | DW Clark roles, dates and areas of work |
| `skills.ts` | Skill categories and which projects each skill links to |

Types for everything are in `src/lib/types.ts` — your editor will autocomplete fields and flag mistakes.

### Things to fill in first
- `site.ts → contact` — email, LinkedIn, GitHub (left empty on purpose)
- `experience.ts` — exact role titles and dates
- `cast-in-steel.ts → year-1 / year-2` — year, competition object, role, details
- `cast-in-steel.ts → 2027-flanged-mace` — your role; foundry partner for each year
- Team member names in each `contribution.teamMembers`
- Test results (Charpy, hardness, weight) once compiled — replace the `note` with a `value`
- `projects.ts → manufacturing-automation` — set each initiative's `status` (`completed`, `in-progress`, `planned`) and your role

### Honesty rules built into the data model
- A spec with no `value` renders as **Pending**.
- A section with `pending: "..."` renders a clearly-labelled "Documentation pending" note.
- A case study with no `status` renders **Status to be confirmed**.
- `contribution.personal` vs `contribution.team` keeps your own work separate from team scope.
- Research results stay labelled **Pending validation**.

### Statuses
`"completed" | "in-progress" | "research" | "planned"`

### Add a new project
Copy any entry in `projects.ts`, give it a new `slug`, and fill in what you have. It appears on `/projects` (with filters) and gets its own page at `/projects/<slug>` automatically. Give it `featuredOrder` to put it on the homepage.

---

## 5. Adding photos, videos, documents and CAD models

Paths in the data files are already filled in with suggested names. **Drop a file at that path in `/public` and it replaces the placeholder** — nothing else to change. If a file is missing, a labelled blueprint-style placeholder shows instead (no stock photos are ever used).

| Type | Folder | Notes |
|---|---|---|
| Images | `public/images/...` | JPG/PNG/WebP. Optimized automatically by `next/image`. |
| Hero photo | `public/images/hero.jpg` | Wide (≥ 2400 px). Replaces the animated drawing. |
| Portrait | `public/images/portrait.jpg` | Shown on the About page (4:5). |
| Videos | `public/videos/...` | MP4 (H.264). Add `poster` in the data for a thumbnail. Keep under ~20 MB; host larger videos elsewhere and use the full URL as `src`. |
| Documents | `public/documents/...` | PDFs. **Download buttons only enable when the file exists.** |
| Resume | `public/documents/Jacob-Forrette-Resume.pdf` | Enables the download buttons site-wide. |
| CAD models | `public/models/...` | `.glb` (preferred) or `.gltf`. |

### Exporting CAD for the 3D viewer
- **Onshape:** right-click the Part Studio or Assembly tab → *Export* and choose **GLTF/GLB** if offered. Otherwise export STEP or OBJ and convert to `.glb` with Blender (*File → Export → glTF 2.0*). Save to `public/models/` using the name in the data file (e.g. `2027-mace-head.glb`).
- Keep models under ~10 MB — simplify fillets/threads or reduce tessellation if needed.
- The viewer auto-centers and scales any model. Until a real file exists it shows **clearly labelled demonstration geometry**.

Viewer controls: drag to rotate, scroll/pinch to zoom, right-drag to pan, ISO/Front/Right/Top views, reset, auto-rotate, wireframe, fullscreen.

---

## 6. Project structure

```
src/
  app/                    Routes (App Router)
    page.tsx              Home
    projects/             Project index (filters) + [slug] template pages
    cast-in-steel/        Collection page + [slug] year pages
    research/             Thesis page
    experience/ skills/ about/ resume/ contact/
    api/contact/route.ts  Contact form endpoint (Resend)
    sitemap.ts robots.ts opengraph-image.tsx icon.svg
  components/
    projects/ProjectTemplate.tsx   The reusable project page template
    media/                Gallery + full-screen viewer, placeholder frames
    viewer/               React Three Fiber CAD viewer
    timeline/             Interactive timeline
    diagrams/             Data-driven architecture & process diagrams
    ui/ layout/ home/ skills/ contact/
  data/                   ← all editable content
  lib/                    Types, asset checks, validation helpers
public/                   images/ videos/ documents/ models/
```

## 7. Design system

Defined in `src/app/globals.css` (Tailwind 4 `@theme`):

- **Surfaces:** `ink-950 → ink-500` charcoal scale
- **Text / metal:** `steel-50 → steel-600`
- **Accent:** `volt-200 → volt-700` electric blue
- **Status colors:** completed · in progress · research · planned
- **Type:** Geist Sans (UI, headlines) + Geist Mono (labels, specs, drawing annotations)
- **Details:** blueprint grid, section hatching, CAD corner marks, title-block spec tables, dimension-line hero drawing

Accessibility: semantic landmarks, skip link, visible focus states, keyboard-operable tabs/timelines/gallery (← → Esc), `prefers-reduced-motion` respected throughout.
