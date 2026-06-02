# Sara Johnson — Premium Freelancer Portfolio

A dark-luxury, Awwwards-style personal portfolio with blush pink accents, aurora gradients, glassmorphism, and cinematic motion. Built on the project's TanStack Start + React + TypeScript + Tailwind v4 stack (note: the project already uses TanStack Start, not Next.js — routing/SSR semantics are equivalent for this build).

## Design system

- Theme: dark-first, optional light mode toggle (persisted in `localStorage`)
- Palette (in `src/styles.css`, oklch):
  - Background: near-black `oklch(0.13 0.01 300)` with subtle plum undertone
  - Surface/glass: white at 4–8% alpha with backdrop blur
  - Primary accent: blush pink `oklch(0.82 0.09 12)`
  - Secondary accent: warm rose `oklch(0.72 0.13 18)`
  - Aurora gradient: blush → mauve → indigo
- Typography: display serif (Instrument Serif) for headlines, geometric sans (Inter Tight or Geist) for body, mono for micro-labels
- Tokens: gradients, glass blur radii, elegant shadows, smooth easing curves all defined as CSS vars
- Light mode: ivory background, charcoal text, blush primary preserved

## Routes (TanStack Start file-based)

```
src/routes/
  __root.tsx              (shell, theme provider, cursor, scroll progress, nav, footer)
  index.tsx               (home: hero → about → services → projects → testimonials → blog → contact)
  about.tsx               (extended about + timeline + skills)
  work.tsx                (full project grid + filters)
  services.tsx            (services detail)
  blog.tsx                (blog index)
  contact.tsx             (full contact page)
  projects.$slug.tsx      (dynamic case study page)
```

Each route gets its own `head()` with unique title/description/og tags. Case study `head()` derives from project data.

## Component architecture

```
src/components/
  layout/         Nav, Footer, ThemeToggle, ScrollProgress, PageTransition
  effects/        AuroraBackground, FloatingParticles, CustomCursor, MagneticButton, ParallaxLayer, Reveal
  ui/             GlassCard, GradientText, Counter, Marquee, TiltCard
  sections/       Hero, About, Skills, Timeline, Services, FeaturedProjects, Testimonials, Blog, Contact, CTA
  case-study/     CaseHero, CaseOverview, CaseGallery, BeforeAfter, ResultsGrid, CaseTestimonial
src/data/         projects.ts, testimonials.ts, blog.ts, skills.ts, experience.ts
src/lib/          theme.ts, motion-presets.ts
```

## Hero

- Full-viewport cinematic stage with aurora blob background (Framer Motion + CSS conic gradients), mouse-follow parallax on layered orbs
- Eyebrow: "Karachi, Pakistan — Available for projects"
- H1: "Sara Johnson" in oversized serif with gradient sweep
- Rotating role (Framer Motion `AnimatePresence` text swap every 2.4s): Remote Manuscript Writer → Graphic Designer → UI/UX Designer → Web Designer → Video Editor
- Tagline + subtitle
- CTAs: "View Portfolio" (primary magnetic), "Hire Me" (ghost glass), "Download Resume" (link)
- 5 floating glass service chips orbiting hero with subtle drift
- Counter strip below: 20+ / 10+ / 3+ / 5 with intersection-triggered count-up

## About + Timeline

- Two-column: portrait placeholder card (generated image) + narrative
- Bullet grid of disciplines and creative deliverables
- Vertical timeline with GSAP ScrollTrigger pinning: 2023 freelance start → 2024 expansion → 2025 internship → 2026 current

## Skills

- 6 category glass cards (Web, Graphic, UI/UX, Video, Writing, Remote Collab) with tag chips
- Hover tilt + glow

## Services

- 6 service cards with custom Lucide icons, hover reveals "What you get" list and a CTA arrow

## Featured Projects (home) + Work page

- 8 projects from `projects.ts` rendered as asymmetric bento grid on home (featured 6) and full filterable grid on `/work`
- Each card: cover mockup, category eyebrow, title, deliverable chips, magnetic hover with gradient border glow
- Clicking opens `/projects/{slug}` — first 6 have full case studies, the last 2 (Amazon Listing, YouTube Growth) open a lighter case layout

## Case study page (`/projects/$slug`)

Sections in order: Hero Banner (full-bleed cover + meta), Overview, Challenge, Research, Wireframes, Design Process, UI Showcase (gallery grid), Before/After (slider), Final Results (stat cards), Gallery (masonry), Testimonial, Next Project nav. All content lives in `src/data/projects.ts` keyed by slug.

## Testimonials

- 6 generated quotes in a draggable horizontal marquee, glass quote cards with avatar initials and role

## Blog

- 6 blog cards (UI/UX Tips, Freelancing, Web Design, Graphic Design, Content Writing, Productivity), titles + excerpts + read time. Cards link to `/blog` index (post detail pages out of scope — cards are visual/SEO placeholders that scroll back to blog section).

## Contact

- Split layout: left = headline + contact details (Karachi, phone, email, socials with copy-to-clipboard)
- Right = glass form (Name, Email, Project Type select, Budget select, Message). Client-side Zod validation, success toast via `sonner`. Submission is local-only (no backend) — no Lovable Cloud needed for this build.

## Footer

- Brand mark, tagline, quick links (Services / Projects / About / Contact), socials (LinkedIn, Behance, Dribbble, Instagram), © 2026

## Advanced interactions

- Custom cursor (dot + ring, blends with magnetic targets) — disabled on touch
- Scroll progress bar fixed top
- Page transitions via Framer Motion on route change
- GSAP ScrollTrigger for pinned timeline, horizontal scroll on services strip, text reveal masks
- Aurora background as fixed canvas layer behind content
- Floating particles (lightweight CSS/SVG, not heavy WebGL)
- Magnetic buttons + tilt cards
- Premium loader on first paint (logomark + progress)
- Respect `prefers-reduced-motion`

## Imagery

Generate with `imagegen` (standard tier) and store in `src/assets/`:
- Hero portrait (stylized)
- 8 project covers (device mockups matching each category)
- Case study gallery shots (3–4 per featured case study)
- Blog thumbnails (6)
All `<img>` get descriptive alt text.

## SEO

- Per-route `head()` with title, description, og:title, og:description, og:url (relative), twitter:card
- Leaf `og:image` only where a hero image exists
- JSON-LD `Person` schema on `/`, `CreativeWork` on case studies
- Semantic HTML, single H1 per route, lazy-loaded images
- `public/robots.txt` allow-all, `public/sitemap.xml` with all routes

## Dependencies to add

`framer-motion`, `gsap`, `@gsap/react`, `zod`, `react-hook-form`, `@hookform/resolvers`, `sonner` (toasts), `lucide-react` (likely already present)

## Out of scope

- No backend / auth / database (Lovable Cloud not enabled)
- No real blog post detail pages (cards only)
- No CMS — all content lives in typed data files for easy editing
- Resume PDF link points to a placeholder file in `public/` that the user can replace

## Deliverable order

1. Tokens, theme provider, fonts, global effects (cursor, scroll progress, aurora)
2. Layout shell + nav + footer + page transitions
3. Data files (projects, testimonials, blog, skills)
4. Home sections in order, with generated imagery
5. About, Work, Services, Blog, Contact routes
6. Dynamic case study route + 6 full case studies (2 light)
7. SEO meta, sitemap, robots, JSON-LD
8. Responsive QA + reduced-motion pass
