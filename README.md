# Jenga Hemant Rao — Portfolio

A premium, colorful, animated developer portfolio built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**, showcasing frontend engineering and Generative AI projects — RAG pipelines, multi-agent workflows, and production-grade React interfaces.

**Live site:** (https://hemant-rao.vercel.app/)
**Resume:** [`/public/resume.pdf`](./public/resume.pdf)

---

## About

This is the personal portfolio of **Jenga Hemant Rao**, a Frontend Engineer specializing in AI-native web applications — building RAG pipelines, multi-agent AI systems, and production-grade UIs with Next.js, TypeScript, and LangChain.js.

The site is a single-page application built with the Next.js App Router, and every section — hero, about, journey, skills, projects, and contact — is a self-contained React component reading from typed data files, so content can be updated without touching layout or styling code.

---

## Tech Stack

Taken directly from `package.json`:

**Core**
- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)

**Styling**
- [Tailwind CSS 3](https://tailwindcss.com/) with a custom design token set (colors, gradients, keyframes) in `tailwind.config.ts`
- Custom global utilities (glassmorphism panels, gradient borders, gradient text) in `app/globals.css`

**Animation & Icons**
- [Framer Motion](https://www.framer.com/motion/) — scroll reveals, page transitions, drag/swipe carousel, 3D tilt
- [Lucide React](https://lucide.dev/) — icon set

**Fonts**
- Space Grotesk (display), Inter (body), JetBrains Mono (code/labels) — loaded via `next/font/google`

**Tooling**
- ESLint (`eslint-config-next`)
- PostCSS + Autoprefixer

No backend, database, or external API calls are used — the site is fully static/client-rendered content driven by local TypeScript data files.

---

## Features

### Hero
- Full name and role prominently displayed, gradient-highlighted headline
- Interactive AI agent-graph visual: animated node graph, floating tech badges, and a typed code snippet, with subtle mouse-tilt on desktop (`components/AgentGraph.tsx`)
- Magnetic hover effect on primary buttons (`components/ui/Magnetic.tsx`)

### About
- Split layout: focus-area cards alongside an interactive profile card with floating technology badges

### Learning & Building Journey
- Animated curved SVG path (desktop) that draws in on scroll, with each technology appearing as a node
- Falls back to a simple vertical list on mobile

### Skills
- Categorized cards (Frontend, Developer Tools, Generative AI) with per-category color accents
- Auto-scrolling technology badge marquee

### Projects
- **Interactive carousel** (`FeaturedCarousel.tsx`) — drag-to-swipe, previous/next arrows, and a position indicator, showing the active project alongside preview cards for its neighbors
- **Filterable grid** (`Projects.tsx` / `ProjectCard.tsx`) — category filters (All, Frontend, React, Next.js, AI, RAG, Multi-Agent) with animated transitions; cards have a subtle 3D mouse-tilt and staggered floating animation on desktop
- **Project detail modal** (`ProjectModal.tsx`) — goal, tech stack, features, challenges, and what-was-learned, opened from any card
- **Featured case study** (`FeaturedProject.tsx`) — a dedicated deep-dive section for the top project
- Real project screenshots rendered via `next/image` where provided (`public/projects/`); projects without a GitHub link or live demo simply hide that button rather than showing a dead link

### Generative AI Showcase
- Visual request-flow diagram (User → AI Application → Retriever/Tools → LLM → Response) with color-coded nodes
- Cards summarizing the AI/RAG/Multi-Agent projects specifically

### GitHub / Resume / Contact
- GitHub call-to-action section linking to the GitHub profile
- Resume section with **View Resume** and **Download Resume**, both wired to `public/resume.pdf`
- Contact section with email/GitHub/LinkedIn links and a UI-only contact form (see [Environment Variables](#environment-variables--backend-notes) below)

### Background & Micro-interactions
- Animated gradient-blob backdrop (`GradientBackdrop.tsx`)
- Cursor-following glow on desktop, disabled on touch devices and when `prefers-reduced-motion` is set (`CursorGlow.tsx`)

---

## Design & UI Approach

- **Color system:** deep navy background with an indigo → violet → pink gradient identity (`brand-gradient`), applied consistently across buttons, borders, and section accents via Tailwind theme tokens in `tailwind.config.ts`.
- **Glassmorphism:** reusable `.glass-panel`, `.gradient-border`, and `.card-surface` utility classes in `app/globals.css` used across cards, the navbar, and modals.
- **Typography:** Space Grotesk for headings, Inter for body copy, JetBrains Mono for code/labels and small UI tags.
- **Componentization:** every section is its own component under `components/`, with shared primitives (`Badge`, `SectionHeading`, `Magnetic`) in `components/ui/`.
- **Content/UI separation:** all editable content — personal info, projects, skills, journey steps — lives in typed files under `data/`, kept separate from presentation components.

---

## Responsive Design

- Mobile-first Tailwind breakpoints throughout; layouts collapse from multi-column grids to single-column stacks on small screens.
- Navbar switches to an animated slide-down mobile menu below the `md` breakpoint.
- The Journey section's animated SVG path is desktop-only; mobile renders a simplified vertical list instead of forcing the SVG into a cramped viewport.
- 3D card tilt and mouse-parallax effects check `window.matchMedia("(pointer: coarse)")` and are skipped on touch devices.
- The project carousel supports touch drag/swipe via Framer Motion's `drag="x"` in addition to button controls.

---

## Accessibility & Performance

**Accessibility (actually implemented in the code):**
- Skip-to-content link at the top of `app/layout.tsx`
- Semantic sectioning (`<header>`, `<main>`, `<footer>`, `<nav>`) with one `<h1>` in the hero and `<h2>`/`<h3>` hierarchy elsewhere
- Visible focus states (`:focus-visible`) defined globally in `app/globals.css` for links, buttons, and form fields
- `aria-label` on icon-only buttons (nav toggle, carousel arrows, social icons) and `aria-hidden="true"` on purely decorative elements (backdrop, grid overlays, connector lines)
- Project detail modal uses `role="dialog"`, `aria-modal="true"`, closes on <kbd>Escape</kbd>, and moves focus to its close button on open
- `prefers-reduced-motion` is respected globally (`app/globals.css`) and explicitly checked in `CursorGlow.tsx` before any animation runs
- Descriptive `alt` text on all project screenshots rendered via `next/image`

**Performance:**
- Next.js App Router with static generation (`next build` outputs a fully static/prerendered page)
- `next/image` used for all project screenshots (automatic optimization, responsive `sizes`)
- `next/font/google` for self-hosted, swap-strategy font loading (no render-blocking font requests)
- No client-side data fetching — all content is bundled at build time from local TypeScript files

---

## Getting Started

### Prerequisites
- Node.js 18.18+ (Next.js 15 requirement)
- npm (or your preferred package manager)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

> `next build` fetches Space Grotesk, Inter, and JetBrains Mono from Google Fonts via `next/font`, so an internet connection is required the first time you build.

### Lint

```bash
npm run lint
```

---

## Project Structure

```
.
├── app/
│   ├── globals.css        # Design tokens, glass/gradient utilities, base styles
│   ├── layout.tsx          # Root layout, fonts, SEO metadata, skip link
│   └── page.tsx            # Section order for the single-page site
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── AgentGraph.tsx       # Hero's animated AI/code visual
│   ├── About.tsx
│   ├── Journey.tsx          # Animated curved learning-journey path
│   ├── Skills.tsx
│   ├── Projects.tsx         # Filterable project grid
│   ├── ProjectCard.tsx
│   ├── ProjectModal.tsx     # Project detail modal
│   ├── FeaturedCarousel.tsx # Drag/swipe project carousel
│   ├── FeaturedProject.tsx  # Case-study section
│   ├── AIShowcase.tsx       # "Building with Generative AI" section
│   ├── GithubSection.tsx
│   ├── Resume.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── GradientBackdrop.tsx # Animated background blobs
│   ├── CursorGlow.tsx       # Cursor-following glow
│   └── ui/
│       ├── Badge.tsx
│       ├── Magnetic.tsx     # Magnetic-hover wrapper
│       └── SectionHeading.tsx
│
├── data/
│   ├── personal.ts          # Name, email, GitHub, LinkedIn, location, resume path, summary
│   ├── projects.ts           # All project entries (title, tech, features, links, images)
│   ├── skills.ts              # Skill categories + technology badge list
│   └── journey.ts              # Learning-journey timeline steps
│
├── public/
│   ├── resume.pdf             # Actual resume, served at /resume.pdf
│   └── projects/                # Project screenshots referenced from data/projects.ts
│
├── tailwind.config.ts         # Color tokens, gradients, keyframes, fonts
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## Environment Variables / Backend Notes

**No environment variables are required to run or build this project.** There is no backend, API route, or database — all content is static and bundled at build time.

The **contact form** (`components/Contact.tsx`) is UI-only: submitting it does not currently send an email or hit any API. To make it functional, wire up one of:

- **Formspree** — set the form's `action` to your Formspree endpoint (no backend needed), or
- **Resend / a custom API route** — replace the `handleSubmit` function with a `fetch()` call to your own `/api/contact` route.

Both options are noted in a comment at the top of `components/Contact.tsx`. Neither requires changing any other file.

---

## Deployment

The project is a standard Next.js app and deploys cleanly to [Vercel](https://vercel.com):

1. Push this repository to GitHub.
2. Import it in Vercel (or run `vercel` from the CLI).
3. No environment variables are required for the default build.
4. Every push to the connected branch redeploys automatically.

Any other Node.js-compatible host that supports `next build` / `next start` (or static export) will also work.

After deploying, update `metadataBase` and the Open Graph `url` in `app/layout.tsx` from the placeholder `https://example.com` to your real domain.

---

## Where to Customize

All editable content is isolated from the UI components:

| What to change | File |
|---|---|
| Name, email, GitHub, LinkedIn, location, summary | `data/personal.ts` |
| Resume file | Replace `public/resume.pdf` (keep the filename, or update `resumePath` in `data/personal.ts`) |
| Projects — title, description, tech, features, GitHub/live links, screenshots | `data/projects.ts` (images referenced from `public/projects/`) |
| Skills and technology badges | `data/skills.ts` |
| Learning/journey timeline steps | `data/journey.ts` |
| Site title, meta description, Open Graph/Twitter tags, `metadataBase` | `app/layout.tsx` |
| Contact form behavior (currently UI-only) | `components/Contact.tsx` |
| Color palette, gradients, fonts | `tailwind.config.ts` |

No project data is hardcoded inside component files — every section reads from the corresponding file in `data/`.

---

## Contact

- **Email:** hemant.rao.dev@gmail.com
- **GitHub:** [github.com/hemant-312011](https://github.com/hemant-312011)
- **LinkedIn:** [linkedin.com/in/hemant-rao-jenga](https://www.linkedin.com/in/hemant-rao-jenga)
- **Location:** Kolkata, India