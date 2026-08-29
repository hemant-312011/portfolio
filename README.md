# Jenga Hemant Rao — Portfolio

A premium, colorful, futuristic developer portfolio built with Next.js 15,
TypeScript, Tailwind CSS, and Framer Motion — for a Frontend + Generative AI
Developer. Deep navy → indigo → violet → magenta gradient theme, glassmorphism,
3D-tilt project cards, an interactive project carousel, and a curved animated
"Learning Journey" path.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. (`npm run build` needs internet access once, to
fetch Space Grotesk / Inter / JetBrains Mono from Google Fonts via `next/font`.)

## What's real vs. placeholder right now

Everything below is already filled in with your **real** information from your
resume and the details you provided:

- Name, email, GitHub, LinkedIn, location → `data/personal.ts`
- Summary / bio → `data/personal.ts`
- Skills (Frontend, Tools, Generative AI) → `data/skills.ts`
- Developer journey timeline → `data/journey.ts`
- Your **5 real projects** (Multi-Agent AI Task Orchestration System, DocuMind AI,
  Nexa AI Helpdesk, Nexus Admin Dashboard, Quiz Time) with real descriptions,
  features, and tech stacks — synced with your latest resume
  → `data/projects.ts`
- Resume PDF → `public/resume.pdf` (your uploaded PDF, already wired to both
  the "View Resume" and "Download Resume" buttons)

## Exactly where to add the rest

| What | File | Notes |
|---|---|---|
| **Project GitHub links** | `data/projects.ts` → `github: "#"` | Replace `"#"` on each project with your real repo URL. |
| **Project live demo links** | `data/projects.ts` → `live: "#"` | Replace with your real deployed URL. If a project has no live demo, leave it as `"#"` — the button hides automatically. |
| **Project screenshots** | `public/projects/` | Drop an image per project (e.g. `documind-ai.png`) and point `image:` at it. Currently each card shows a placeholder icon/gradient instead of a screenshot — see "Adding real project images" below. |
| **Projects 6–9** | `data/projects.ts`, bottom of the array | These are marked `isPlaceholder: true` with `[bracketed]` text. Replace every field, or delete the object if you have fewer than 9 projects. The grid, carousel, and category filters adapt automatically. |
| **Email / GitHub / LinkedIn** | `data/personal.ts` | Already set to your real values — edit here if anything changes. |
| **Resume PDF** | `public/resume.pdf` | Already your uploaded file. To update later, just overwrite this file — the filename must stay `resume.pdf`, or update `resumePath` in `data/personal.ts`. |
| **Contact form backend** | `components/Contact.tsx` | The form is UI-only right now (no emails actually send). Read the comment at the top of the file for the two easiest ways to wire it up: Formspree (no backend needed) or a custom API route with Resend. |
| **Site URL for SEO/OG tags** | `app/layout.tsx` → `metadataBase` | Currently `https://example.com` — replace with your real deployed domain once you have one. |
| **Favicon** | `public/favicon.ico` | Not included — drop your own `favicon.ico` into `public/`. |

### Adding real project images

Each project card currently renders a placeholder (a subtle gradient + folder
icon) instead of a screenshot, since no images were provided. To use real
screenshots:

1. Add an image to `public/projects/` (e.g. `public/projects/documind-ai.png`).
2. Open `components/ProjectCard.tsx` and `components/FeaturedProject.tsx`,
   and swap the placeholder `<div>` block for a Next.js `<Image>` pointing at
   `project.image` (the field already exists on every project in
   `data/projects.ts` — it's just not rendered yet).

## Project structure

```
app/                 → routes, layout, global styles
components/           → page sections (Hero, About, Skills, Projects, ...)
components/ui/        → small reusable pieces (Badge, SectionHeading)
data/                 → all editable content (personal info, projects, skills, journey)
public/                → resume.pdf, project images, favicon
```

Content is intentionally kept out of the components — everything you're
likely to update lives in `data/*.ts`.

## Deploying

The easiest path is [Vercel](https://vercel.com): push this repo to GitHub,
import it in Vercel, and it deploys automatically on every push. No
environment variables are required unless you wire up the contact form.
