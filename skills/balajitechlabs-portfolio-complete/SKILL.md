---
name: balajitechlabs-portfolio-complete
description: >
  Complete technical skill + design system reference for the Balaji OS portfolio
  (portfolio.balajitechlab.com). Use this document whenever an AI agent needs to
  understand, modify, extend, debug, or rebuild any part of the portfolio. Covers
  every language, library, component, data model, animation pattern, server-side
  route, deployment pipeline, design token, color system, typography, motion
  pattern, glassmorphism, 3D/WebGL, sound design, and interaction specification
  in exhaustive detail. This is the single canonical source of truth.
---

# BalajiTechLabs Portfolio — Complete Skill & Design Reference

> **Owner:** Balaji .S (Balaji Tech Labs)
> **Identity:** Balaji OS — "Apple polish meets hacker power"
> **Live URL:** https://portfolio.balajitechlab.com/
> **Repository:** https://github.com/Balajitechlabs/portfolio
> **Last Updated:** June 2026

---

# PART A — TECHNICAL SKILL REFERENCE

---

## 1. Project Overview

A premium, single-page + multi-route portfolio website themed "Balaji OS" — a
developer-centric experience that blends Apple-tier consumer UI polish with raw
hacker/terminal power. The site features:

- **3D interactive hero** with real-time Simplex Noise wireframe waves (WebGL)
- **macOS-style draggable terminal** (Cmd+K / Ctrl+K) with custom command execution
- **Recruiter Mode** toggle that strips visual extras to show only resume-relevant data
- **Sound design** (hover ticks, click pops) via `use-sound`
- **Lenis smooth scrolling** with reduced-motion awareness
- **Magnetic spring-physics buttons** using Framer Motion springs
- **GSAP ScrollTrigger** scroll-scrubbed animations (parallax, skill bar fills)
- **Framer Motion** page transitions, AnimatePresence, and whileInView reveals
- **Full-stack contact system** (Telegram bot + Email via nodemailer/Resend)
- **Cloudflare Workers** edge deployment with Wrangler

---

## 2. Languages & Core Technologies

| Language / Runtime      | Version   | Where Used                                      |
|-------------------------|-----------|--------------------------------------------------|
| **TypeScript**          | 5.6.3     | All client and server source code                |
| **React**               | 18.3.1    | Frontend UI framework                            |
| **Node.js**             | ≥20       | Local dev server (`tsx server/index.ts`)          |
| **HTML5**               | —         | `client/index.html` entry point, SEO meta tags   |
| **CSS3 (Tailwind)**     | 3.4.17    | Styling via utility classes + custom utilities    |
| **GLSL / WebGL**        | —         | Three.js shaders (wireframe, simplex noise)      |
| **JSON / JSONC**        | —         | `package.json`, `wrangler.jsonc`, `tsconfig.json`|

---

## 3. Full Dependency Map

### 3.1 Frontend Libraries

| Library                          | Purpose                                                       |
|----------------------------------|---------------------------------------------------------------|
| `react` / `react-dom`           | UI rendering                                                  |
| `wouter`                        | Lightweight client-side routing (no React Router)             |
| `framer-motion`                 | Page transitions, AnimatePresence, whileInView, springs       |
| `framer-motion-3d`              | 3D motion integration (reserved for future use)               |
| `gsap` + `@gsap/react`          | ScrollTrigger parallax, skill bar scrub, entrance animations  |
| `three` + `@react-three/fiber`  | WebGL Canvas, useFrame loop, 3D hero scene                    |
| `@react-three/drei`             | Sphere, Points, PointMaterial, Line helpers                   |
| `@react-three/postprocessing`   | Post-processing effects (Bloom, etc.)                         |
| `@react-three/rapier`           | Physics engine (reserved for future use)                      |
| `simplex-noise`                 | `createNoise2D()` for procedural wave generation              |
| `lenis`                         | Smooth scroll engine with RAF loop                            |
| `use-sound`                     | Auditory micro-interactions (hover.mp3, click.mp3)            |
| `lucide-react`                  | Icon set (supplementary)                                      |
| `react-icons`                   | Primary icon library (Fi*, Si* icon packs)                    |
| `@tanstack/react-query`         | Server state / data fetching                                  |
| `@radix-ui/*` (20+ packages)   | Accessible, unstyled UI primitives (dialog, tooltip, etc.)    |
| `class-variance-authority`      | Component variant management (shadcn/ui pattern)              |
| `clsx` + `tailwind-merge`       | Conditional + merge-safe class names                          |
| `tailwindcss-animate`           | Animation utilities plugin                                    |
| `@tailwindcss/typography`       | Prose styling for markdown rendering                          |
| `react-markdown`                | Renders design.md page content                                |
| `react-hook-form` + `zod`       | Form validation (contact form)                                |
| `recharts`                      | Data visualization / charts                                   |
| `embla-carousel-react`          | Carousel component                                            |
| `cmdk`                          | Command palette (potential future use)                         |
| `vaul`                          | Drawer component                                              |
| `date-fns`                      | Date formatting                                               |
| `next-themes`                   | Theme provider (dark mode)                                    |

### 3.2 Backend Libraries

| Library               | Purpose                                                       |
|-----------------------|---------------------------------------------------------------|
| `express` (v5)        | HTTP server, API routing (`/api/contact`)                     |
| `nodemailer`          | SMTP email sending (Gmail) for contact form                   |
| `drizzle-orm` + `drizzle-zod` | Database ORM (PostgreSQL schema)                      |
| `pg`                  | PostgreSQL client driver                                      |
| `express-session`     | Session middleware                                            |
| `passport` + `passport-local` | Authentication framework (reserved)                   |
| `memorystore`         | In-memory session store                                       |
| `ws`                  | WebSocket support                                             |
| `dotenv`              | Environment variable loading                                  |

### 3.3 Dev / Build Tooling

| Tool                            | Purpose                                              |
|---------------------------------|------------------------------------------------------|
| `vite` (v7)                     | Dev server + bundler                                 |
| `@vitejs/plugin-react`          | React JSX transform + Fast Refresh                   |
| `tsx`                            | TypeScript execution for server & build scripts      |
| `esbuild`                       | Fast JS/TS bundler (used by Vite internally)         |
| `wrangler`                      | Cloudflare Workers CLI (deploy, preview)             |
| `@cloudflare/vite-plugin`       | Cloudflare integration for Vite                      |
| `postcss` + `autoprefixer`      | CSS processing pipeline                              |
| `drizzle-kit`                   | Database migration tool                              |
| `typescript`                    | Type checking (`npm run check`)                      |

---

## 4. Project Architecture

```
project1/
├── client/                        # Frontend (React + Vite)
│   ├── index.html                 # HTML entry point with SEO meta tags
│   ├── public/                    # Static assets
│   │   ├── pro.JPG                # Profile photo
│   │   ├── sounds/hover.mp3       # Hover sound effect
│   │   ├── sounds/click.mp3       # Click sound effect
│   │   └── design-system.md       # Public design doc (downloadable)
│   └── src/
│       ├── main.tsx               # React entry point
│       ├── App.tsx                # Root component (providers + router)
│       ├── index.css              # Global CSS (design tokens, utilities)
│       ├── components/
│       │   ├── 3d/                # Three.js / R3F components
│       │   │   ├── HeroScene.tsx  # Simplex noise wireframe wave
│       │   │   └── TechGlobe.tsx  # Interactive tech network sphere
│       │   ├── portfolio/         # Page sections (14 components)
│       │   │   ├── Navbar.tsx     # Glassmorphism nav + scroll progress
│       │   │   ├── Hero.tsx       # Landing section + cycling words
│       │   │   ├── HeroPhoto.tsx  # Profile photo with effects
│       │   │   ├── About.tsx      # Bio + GSAP skill bars
│       │   │   ├── Experience.tsx # Work experience timeline
│       │   │   ├── WhatIDo.tsx    # Services grid
│       │   │   ├── Work.tsx       # Projects showcase
│       │   │   ├── TechStack.tsx  # Tech ecosystem display
│       │   │   ├── Education.tsx  # Education timeline
│       │   │   ├── Certifications.tsx # Cert cards
│       │   │   ├── Contact.tsx    # Contact form + social grid
│       │   │   ├── Cursor.tsx     # Custom cursor (dot + ring)
│       │   │   ├── SocialBar.tsx  # Floating social sidebar
│       │   │   └── SeoStructuredData.tsx # JSON-LD schema
│       │   └── ui/               # Reusable UI primitives (49 components)
│       │       ├── MagneticButton.tsx    # Spring-physics magnetic CTA
│       │       ├── TerminalOverlay.tsx   # macOS terminal (Cmd+K)
│       │       ├── toast.tsx / toaster.tsx # Toast notifications
│       │       └── ... (shadcn/ui components)
│       ├── context/
│       │   ├── LenisContext.tsx    # Smooth scroll provider
│       │   ├── SoundContext.tsx    # Audio feedback provider
│       │   └── RecruiterModeContext.tsx # Recruiter mode toggle
│       ├── hooks/
│       │   ├── useCountUp.ts      # Animated number counter
│       │   ├── useReducedMotion.ts # Prefers-reduced-motion check
│       │   ├── use-toast.ts       # Toast hook
│       │   └── use-mobile.tsx     # Mobile detection
│       ├── lib/
│       │   ├── smoothScroll.ts    # Lenis init / destroy helpers
│       │   ├── iconMap.tsx        # Icon name → component mapping
│       │   ├── queryClient.ts     # React Query configuration
│       │   └── utils.ts           # cn() utility (clsx + tailwind-merge)
│       ├── data/
│       │   └── portfolioData.ts   # All portfolio content (typed exports)
│       └── pages/
│           ├── Home.tsx           # Main portfolio page (all sections)
│           ├── Resume.tsx         # Interactive web resume preview
│           ├── DesignDoc.tsx      # Design system markdown viewer
│           ├── CaseStudy.tsx      # Project case study page
│           └── not-found.tsx      # 404 page
├── server/                        # Backend (Express v5)
│   ├── index.ts                   # Server entry (HTTP + Vite middleware)
│   ├── routes.ts                  # API routes (/api/contact)
│   ├── storage.ts                 # Data storage interface
│   ├── static.ts                  # Static file serving
│   └── vite.ts                    # Vite dev middleware integration
├── shared/
│   └── schema.ts                  # Shared Drizzle ORM schema
├── worker.ts                      # Cloudflare Worker (edge API + assets)
├── wrangler.jsonc                 # Cloudflare config (custom domain)
├── vite.config.ts                 # Vite configuration
├── tailwind.config.ts             # Tailwind theme extensions
├── tsconfig.json                  # TypeScript config
├── package.json                   # Dependencies + scripts
└── .env                           # Environment secrets (not committed)
```

---

## 5. Routing

| Route               | Component       | Description                           |
|----------------------|-----------------|---------------------------------------|
| `/`                  | `Home.tsx`      | Main portfolio (all sections)         |
| `/resume`            | `Resume.tsx`    | Interactive web resume preview        |
| `/design.md`         | `DesignDoc.tsx` | AI design system document viewer      |
| `/case-study/:slug`  | `CaseStudy.tsx` | Individual project deep-dive          |
| `*` (fallback)       | `not-found.tsx` | 404 page                              |

**Router:** `wouter` (lightweight, ~1.5KB) — NOT React Router.

---

## 6. Provider / Context Architecture

The app wraps all content in a nested provider tree:

```
QueryClientProvider        → React Query cache
  └─ SoundProvider         → useAppSound() hook (playHover, playClick, toggleSound)
       └─ RecruiterModeProvider  → useRecruiterMode() hook (toggle sections visibility)
            └─ LenisProvider     → useLenis() hook (smooth scroll instance)
                 └─ AppContent   → TooltipProvider, Toaster, Cursor, Terminal, Router
```

---

## 7. Data Architecture (`portfolioData.ts`)

All portfolio content is centralized in a single typed data file:

| Export                 | Type                | Description                              |
|------------------------|---------------------|------------------------------------------|
| `profile`              | Object              | Name, role, email, phone, links, etc.    |
| `socialLinks`          | `SocialLink[]`      | 16 social platform links                 |
| `experienceItems`      | `ExperienceItem[]`  | Work experience with highlights & stack  |
| `projectItems`         | `ProjectItem[]`     | 5 projects with case studies & metrics   |
| `certificateItems`     | `CertificateItem[]` | 5 certifications with verify URLs        |
| `educationTimeline`    | Array               | 3 education entries with metadata        |
| `skillBars`            | Array               | 6 skills with level (0-100) and color    |
| `softSkills`           | `string[]`          | 15 technology tags                       |
| `stats`                | Array               | 4 stat counters                          |
| `services`             | Array               | 4 service offerings                      |
| `achievementCounters`  | Object              | Computed project/live counts             |

---

## 8. Animation System

### 8.1 GSAP ScrollTrigger (Scroll-Driven)

| Component    | Animation                                    | Details                                  |
|--------------|----------------------------------------------|------------------------------------------|
| `Hero.tsx`   | Parallax exit (y: 100, opacity: 0, blur: 5)  | Scrub: true, trigger → section           |
| `About.tsx`  | Image parallax (y: 50 → -50)                 | Scrub: true, entire section              |
| `About.tsx`  | Skill bar fill (width: 0% → level%)          | Scrub: 1, with live % counter update     |
| `Contact.tsx`| Staggered element entrance                    | start: "top 75%", stagger: 0.1           |

### 8.2 Framer Motion (Declarative)

| Pattern                     | Where Used                                         |
|-----------------------------|-----------------------------------------------------|
| `AnimatePresence mode="wait"` | Page route transitions (opacity, y, slide)        |
| `whileInView`               | Section headings, stats, skill tags, cards          |
| `useSpring` + `useTransform`| MagneticButton (cursor-tracking pull + rotation)    |
| `useScroll` + `useSpring`   | Navbar scroll progress bar (scaleX)                 |
| Cycling words `AnimatePresence` | Hero word rotation (Creator/Technologist/...)    |
| Stagger children            | Resume sections (delay: 0.1 increment)              |
| Mobile menu overlay          | Full-screen nav with per-link stagger              |

### 8.3 CSS Animations

| Animation       | Keyframes                        | Applied To               |
|-----------------|----------------------------------|--------------------------|
| `shimmer`       | Background-position sweep        | Loading states           |
| `glow-pulse`    | Opacity 0.4 → 1 → 0.4           | Glow effects             |
| `float-slow`    | translateY 0 → -12 → 0          | Floating elements        |
| `spin-slow`     | rotate 0 → 360 (20s)            | Decorative spinners      |
| `section-rise`  | opacity 0, y 18 → visible       | CSS scroll-driven reveal |
| `blink`         | opacity toggle (step-end)        | Terminal cursor           |
| `fill-bar`      | width 0 → var(--target-width)   | Skill bar fallback        |

---

## 9. 3D / WebGL System

### 9.1 HeroScene (Wireframe Wave Grid)

- **Engine:** React Three Fiber (`@react-three/fiber`)
- **Geometry:** `PlaneGeometry(100, 100, 80, 80)` rotated flat (X: -90°)
- **Noise:** `simplex-noise` `createNoise2D()` — dual-layer:
  - Primary: `noise2D(x*0.05 + t*0.2, z*0.05 + t*0.3) * 2`
  - Detail: `noise2D(x*0.15 - t*0.4, z*0.15 + t*0.2) * 0.5`
- **Mouse Interaction:** Vertex depression within radius 15 using cosine fallback
- **Material:** Wireframe, color `#427cff`, emissive, opacity 0.15
- **Scroll Parallax:** `position.y = -8 + (scrollY * 0.005)`
- **Fog:** `<fog args={['#050505', 10, 40]}>`

### 9.2 TechGlobe (Network Sphere)

- **Points:** 100 random on sphere (radius 2.5), uniform distribution
- **Connections:** Line segments between points within distance < 1.2
- **Core:** Dark sphere (r=2.4, `#020817`, opacity 0.8)
- **Glow:** Outer sphere (r=2.7, additive blending, opacity 0.02)
- **Rotation:** `t * 0.05` Y-axis, `sin(t*0.1) * 0.1` X-axis
- **Reduced motion aware:** Stops rotation if `prefers-reduced-motion`

---

## 10. Terminal System (`TerminalOverlay.tsx`)

- **Trigger:** `Cmd+K`, `Ctrl+K`, backtick (`` ` ``), or tilde (`~`)
- **UI:** macOS-style window with traffic lights, draggable via Framer Motion
- **Prompt:** Powerlevel10k-style segments (Apple icon → blue folder → time)
- **Commands:**

| Command          | Action                                          |
|------------------|-------------------------------------------------|
| `help`           | Lists all commands with copy/run buttons        |
| `whoami`         | Prints identity string                          |
| `projects`       | Lists project inventory                          |
| `fetch resume`   | Opens Google Drive resume in popup              |
| `contact`/`vcard`| Downloads .vcf contact card                      |
| `github`         | Opens GitHub profile in popup                   |
| `linkedin`       | Opens LinkedIn profile in popup                 |
| `telegram`       | Opens Telegram channel in popup                 |
| `support`        | Opens Razorpay payment link                     |
| `echo <text>`    | Echoes back text                                |
| `date`           | Shows current date/time                         |
| `sudo <cmd>`     | Easter egg (not in sudoers warning)             |
| `matrix`         | Easter egg (Matrix quote)                       |
| `clear`          | Clears terminal history                         |
| `exit`           | Closes terminal overlay                         |

- **Features:** Command history (↑/↓ arrows), live clock, body scroll lock, auto-focus

---

## 11. Contact Form System

### 11.1 Frontend (`Contact.tsx`)

- **Fields:** Name, Email, Phone, Contact Method (dropdown), Social Handle, Message
- **Contact Methods:** Instagram, LinkedIn, Twitter/X, Telegram, WhatsApp, GitHub, Other
- **Auto-prefix:** Builds full social URL from method + handle
- **States:** idle → loading → success/error (auto-reset after 5s/4s)
- **Extra features:** vCard download, availability indicator (green pulse dot)
- **Validation:** Required fields + custom error for missing contact method

### 11.2 Server API (`routes.ts` — Express)

**`POST /api/contact`** handles:
1. **Telegram notification** → Bot API with HTML-formatted message
2. **Email to visitor** → Professional acknowledgement (nodemailer/Gmail SMTP)
3. **Email to owner** → Full contact details notification
4. **Resend fallback** → If nodemailer isn't configured, uses Resend API

Email templates are fully custom HTML with the Balaji OS dark theme aesthetic, including
"Developer Secrets" Easter egg section linking to the terminal, design system, and 3D waves.

### 11.3 Cloudflare Worker (`worker.ts`)

Duplicate contact handler for edge deployment:
- Telegram bot notification
- Resend API for acknowledgement emails
- Custom HTML email template with portfolio branding
- Health check endpoint: `GET /api/health`
- All other routes → `env.ASSETS.fetch(request)` (SPA fallback)

---

## 12. Environment Variables

```
TELEGRAM_BOT_TOKEN     # Telegram bot API token
TELEGRAM_CHAT_ID       # Chat ID for notifications
EMAIL_USER             # Gmail address for SMTP
EMAIL_PASS             # Gmail app password
RESEND_API_KEY         # Resend.com API key (fallback)
RESEND_FROM_EMAIL      # Resend sender address
RESEND_REPLY_TO        # Reply-to address
DATABASE_URL           # PostgreSQL connection string
```

---

## 13. Build & Deploy Pipeline

| Command              | Action                                          |
|----------------------|-------------------------------------------------|
| `npm run dev`        | Local dev server (`tsx server/index.ts`)         |
| `npm run build`      | Production build (`tsx script/build.ts`)         |
| `npm run start`      | Production server (`node dist/index.cjs`)        |
| `npm run check`      | TypeScript type check                            |
| `npm run deploy`     | Build + `wrangler deploy` to Cloudflare Workers  |
| `npm run preview`    | Build + `wrangler dev` for local CF preview      |
| `npm run db:push`    | Push Drizzle schema to PostgreSQL                |

**Deployment target:** Cloudflare Workers with custom domain `portfolio.balajitechlab.com`
**SPA mode:** `not_found_handling: "single-page-application"` in `wrangler.jsonc`
**Build output:** `dist/public/` (Vite) → served by Worker's `ASSETS` binding

---

## 14. Vite Configuration

```typescript
{
  plugins: [react()],
  resolve: {
    alias: {
      "@": "client/src",           // Main source
      "@shared": "shared",         // Shared types/schema
      "@assets": "attached_assets" // Static assets
    }
  },
  root: "client",
  build: { outDir: "dist/public", emptyOutDir: true },
  server: { fs: { strict: true, deny: ["**/.*"] } }
}
```

---

## 15. Tailwind Configuration

- **Dark mode:** `class` strategy (always dark)
- **Content:** `client/index.html` + `client/src/**/*.{js,jsx,ts,tsx}`
- **Custom colors:** All mapped to CSS custom properties (see Part B)
- **Custom fonts:** `sans` → Space Grotesk, `serif` → Playfair Display, `mono` → JetBrains Mono
- **Plugins:** `tailwindcss-animate`, `@tailwindcss/typography`

---

## 16. Custom Hooks

| Hook                   | File                    | Purpose                                   |
|------------------------|-------------------------|-------------------------------------------|
| `useCountUp(target, duration)` | `useCountUp.ts`  | Animated number counter for hero stats    |
| `useReducedMotion()`   | `useReducedMotion.ts`   | Checks `prefers-reduced-motion` media     |
| `useAppSound()`        | `SoundContext.tsx`      | Sound playback (hover, click, toggle)     |
| `useLenis()`           | `LenisContext.tsx`      | Access Lenis scroll instance              |
| `useRecruiterMode()`   | `RecruiterModeContext`  | Toggle recruiter view state               |
| `useToast()`           | `use-toast.ts`          | Toast notification dispatch               |
| `useMobile()`          | `use-mobile.tsx`        | Mobile viewport detection                 |

---

## 17. SEO Implementation

- **Structured Data:** `SeoStructuredData.tsx` injects JSON-LD `Person` schema
- **Meta tags:** Set in `client/index.html` (title, description, OG tags)
- **Semantic HTML:** `<section>`, `<footer>`, `<nav>`, `<main>`, `<h1>`–`<h3>` hierarchy
- **Performance:** Lazy-loaded TechStack component, `loading="lazy"` on images
- **Scroll progress:** Accessible `progressbar` role on navbar progress indicator

---

## 18. Accessibility

- `prefers-reduced-motion` → Disables all GSAP animations, Lenis scroll, 3D rotation
- `cursor: none` only on hover-capable devices (`@media (hover: none)` → `cursor: auto`)
- Custom cursor hidden on touch devices
- `aria-label` on all icon-only buttons
- `role="progressbar"` on scroll progress
- `data-lenis-prevent` on terminal body to prevent scroll-through
- `tabindex`, semantic elements, keyboard-navigable

---

## 19. Recruiter Mode

When `recruiterMode` is `true`:
- **Navbar** only shows: ABOUT, EXPERIENCE (hides WORK, STACK, JOURNEY)
- **Home page** hides: SocialBar, WhatIDo, Work, TechStack, Education
- **Keeps visible:** Hero, About, Experience, Certifications, Contact
- **Purpose:** Clean, focused view for recruiters/hiring managers

---

## 20. Easter Eggs

1. **Terminal** (Cmd+K) — Full macOS terminal with custom commands
2. **Design System** (`/design.md`) — AI skill document viewer
3. **Console message** — "Welcome to Balaji OS" banner on page load
4. **Developer Mode toast** — Notification after 5s suggesting terminal
5. **3D Waves** — Mouse-interactive simplex noise (not a video!)
6. **sudo command** — "Not in sudoers" warning
7. **matrix command** — "Wake up, Neo..."
8. **Email Easter egg** — Contact form replies include hidden features guide

---
---

# PART B — DESIGN SYSTEM & VISUAL IDENTITY

---

## 21. Design Philosophy

The Balaji OS design language is built on four pillars:

### 21.1 Midnight Luxury
Every surface radiates depth. No flat colors. No pure black. The palette lives
in the deep indigo-slate spectrum with electric blue and warm amber accents —
like a control room in a sci-fi film.

### 21.2 Technical Precision
Typography and spacing are military-grade precise. Mono-spaced labels at 10px
with 0.2em tracking scream "engineered, not designed." Every pixel is intentional.

### 21.3 Alive Interfaces
Nothing is static. Surfaces respond to mouse position. Buttons magnetically pull
toward the cursor. Scroll drives animation. Sound provides tactile feedback.
The interface breathes.

### 21.4 Accessible by Default
All motion respects `prefers-reduced-motion`. Custom cursors are disabled on
touch devices. Semantic HTML and ARIA roles are non-negotiable.

---

## 22. Color System — Midnight Slate Palette

The entire palette uses OKLCH for perceptual uniformity. Every color is defined
as a CSS custom property:

### 22.1 Core Tokens

```css
:root {
  /* ═══════ BASE ═══════ */
  --background: oklch(18% 0.03 260);         /* Deep midnight indigo */
  --foreground: oklch(98% 0.01 260);         /* Near-white with warm tint */

  /* ═══════ SURFACES ═══════ */
  --card: oklch(21% 0.03 260);               /* Elevated card surface */
  --card-foreground: oklch(98% 0.01 260);
  --border: oklch(25% 0.04 260);             /* Subtle divider lines */
  --input: oklch(25% 0.04 260);              /* Form field borders */

  /* ═══════ SEMANTIC COLORS ═══════ */
  --primary: oklch(65% 0.15 250);            /* Electric blue (#427cff) */
  --primary-foreground: oklch(98% 0 0);
  --secondary: oklch(25% 0.04 260);
  --secondary-foreground: oklch(95% 0.01 260);
  --muted: oklch(28% 0.04 260);
  --muted-foreground: oklch(75% 0.02 260);   /* Subdued text */
  --accent: oklch(75% 0.18 55);              /* Warm amber/orange */
  --accent-foreground: oklch(100% 0 0);
  --destructive: oklch(60% 0.25 20);         /* Error red */
  --destructive-foreground: oklch(100% 0 0);

  /* ═══════ GLASSMORPHISM ═══════ */
  --bg-elevated: rgba(28, 28, 30, 0.72);
  --glass-bg: rgba(255, 255, 255, 0.05);
  --glass-border: rgba(255, 255, 255, 0.08);
}
```

### 22.2 Signature Colors (Hex Reference)

| Token         | OKLCH                    | Approximate Hex | Usage                           |
|---------------|--------------------------|-----------------|----------------------------------|
| Background    | oklch(18% 0.03 260)     | `#0a0e1a`       | Page background                  |
| Primary Blue  | oklch(65% 0.15 250)     | `#427cff`       | CTAs, links, accents, wireframe  |
| Warm Accent   | oklch(75% 0.18 55)      | `#ff8c42`       | Name highlight, gradients        |
| Card Surface  | oklch(21% 0.03 260)     | `#111827`       | Card backgrounds                 |
| Muted Text    | oklch(75% 0.02 260)     | `#a1a1aa`       | Secondary text, labels           |
| Green Status  | —                        | `#4ade80`       | Active/available indicators      |
| Cyan Accent   | —                        | `#38bdf8`       | Gradient start, terminal accent  |

### 22.3 Gradient Presets

```css
/* Text gradient — primary use on headings */
.text-gradient {
  background: linear-gradient(135deg, #38bdf8 0%, #f97316 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Warm gradient — secondary headings */
.text-gradient-warm {
  background: linear-gradient(135deg, #f97316 0%, #eab308 100%);
}

/* Skill bar colors */
React/TypeScript: from-blue-500 to-cyan-400
Node.js/Express:  from-green-500 to-emerald-400
Python/AI-ML:     from-yellow-500 to-orange-400
UI/UX Design:     from-purple-500 to-pink-400
Cloud/DevOps:     from-primary to-accent
Three.js/WebGL:   from-cyan-500 to-blue-600
```

### 22.4 Ambient Background

The page uses a fixed multi-layer radial gradient background:

```css
body {
  background-image:
    radial-gradient(circle at 14% 12%, rgba(14, 165, 233, 0.09), transparent 40%),
    radial-gradient(circle at 84% 78%, rgba(249, 115, 22, 0.12), transparent 42%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.018), rgba(255, 255, 255, 0));
  background-attachment: fixed;
}

/* Fixed ambient overlay on home page */
.portfolio-ambient {
  background:
    radial-gradient(circle at 20% 18%, rgba(56, 189, 248, 0.09), transparent 38%),
    radial-gradient(circle at 80% 74%, rgba(249, 115, 22, 0.09), transparent 36%);
  mask-image: linear-gradient(to bottom, black 0%, black 65%, transparent 100%);
}
```

---

## 23. Typography System

### 23.1 Font Stack

| Role              | Family              | Google Fonts Link                  | Fallback        |
|-------------------|---------------------|------------------------------------|-----------------|
| **Headings**      | Space Grotesk       | `?family=Space+Grotesk:wght@400..700` | `sans-serif` |
| **Body**          | Inter (or system)   | `?family=Inter:wght@400;500;600;700`  | `sans-serif` |
| **Technical/Code**| JetBrains Mono      | `?family=JetBrains+Mono:wght@400;700` | `monospace`  |
| **Display**       | Playfair Display    | `?family=Playfair+Display:wght@700`   | `serif`      |

### 23.2 Typography Scale (Fluid / Responsive)

```css
--text-xs:   clamp(0.75rem,  0.7rem + 0.25vw, 0.875rem);  /* ~12-14px */
--text-sm:   clamp(0.875rem, 0.8rem + 0.35vw, 1rem);      /* ~14-16px */
--text-base: clamp(1rem,     0.9rem + 0.5vw,  1.125rem);   /* ~16-18px */
--text-lg:   clamp(1.125rem, 1rem   + 0.6vw,  1.375rem);   /* ~18-22px */
--text-xl:   clamp(1.5rem,   1.2rem + 1.5vw,  2.25rem);    /* ~24-36px */
--text-2xl:  clamp(2rem,     1.5rem + 2.5vw,  3.5rem);     /* ~32-56px */
--text-3xl:  clamp(3rem,     2rem   + 5vw,    6rem);        /* ~48-96px */
```

### 23.3 Typography Rules

| Element                | Font           | Size         | Weight    | Tracking         | Case      |
|------------------------|----------------|--------------|-----------|------------------|-----------|
| Hero name (H1)         | Space Grotesk  | 16vw → 9vw   | 900       | `tracking-tight` | UPPERCASE |
| Section heading (H2)   | Space Grotesk  | 4xl → 6xl    | 900       | `tracking-tight` | Mixed     |
| Intro label            | Space Grotesk  | xs           | 700       | `0.4em`          | UPPERCASE |
| Section tag            | JetBrains Mono | xs           | 400       | `0.3em`          | UPPERCASE |
| Nav links              | System Sans    | 10px         | 700       | `0.2em`          | UPPERCASE |
| Body text              | Inter          | base → lg    | 400       | normal           | Mixed     |
| Stat numbers           | Space Grotesk  | 2xl → 3xl    | 900       | normal           | —         |
| Stat labels            | JetBrains Mono | 9-10px       | 700       | `0.2em`          | UPPERCASE |
| Skill bar labels       | Inter          | xs           | 500       | normal           | Mixed     |
| Skill bar percentages  | JetBrains Mono | xs           | 700       | normal           | —         |
| Tech tags              | Inter          | xs           | 500       | normal           | Mixed     |

---

## 24. Spacing & Layout System

### 24.1 Container

- **Max width:** `max-w-7xl` (80rem / 1280px) for most content
- **Hero max:** `max-w-[1400px]` (wider hero layout)
- **Horizontal padding:** `px-6` (mobile) → `lg:px-12` (desktop)

### 24.2 Section Spacing

| Element            | Mobile         | Desktop         |
|--------------------|----------------|-----------------|
| Section padding    | `py-28`        | `lg:py-40`      |
| Section gap        | `gap-12`       | `lg:gap-24`     |
| Card padding       | `p-5`          | `p-6` → `p-8`   |
| Grid columns       | 1 column       | `lg:grid-cols-2`|

### 24.3 Border Radius Scale

```css
--radius: 1rem;                         /* Base radius */
border-radius-lg: var(--radius);        /* 1rem / 16px */
border-radius-md: calc(var(--radius) - 2px);  /* 14px */
border-radius-sm: calc(var(--radius) - 4px);  /* 12px */

/* Common usage */
Cards:      rounded-2xl or rounded-3xl
Buttons:    rounded-full (pill shape)
Tags:       rounded-full
Inputs:     rounded-xl
Terminal:   rounded-xl
```

---

## 25. Glassmorphism System

### 25.1 Glass Utilities

```css
/* Standard glass panel */
.glass {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

/* Card-level glass (stronger) */
.glass-card {
  background: linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.07);
}

/* Gradient border mask (holographic effect) */
.border-gradient::before {
  background: linear-gradient(135deg, hsl(217 91% 60% / 0.5), hsl(263 70% 65% / 0.3), transparent);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
}
```

### 25.2 Glassmorphism Usage

| Component     | Background                            | Blur        | Border              |
|---------------|---------------------------------------|-------------|---------------------|
| Navbar        | `bg-[#060b19]/70`                     | `xl` (24px) | `border-white/5`    |
| Cards         | `bg-white/5`                          | `xl`        | `border-white/10`   |
| Contact form  | `bg-white/5 saturate-[180%]`          | `40px`      | `border-white/10`   |
| Mobile menu   | `bg-background/95`                    | `20px`      | —                   |
| Floating bar  | `bg-background/60`                    | `xl`        | `border-white/10`   |
| Terminal      | `bg-[#050505]/85`                     | `sm`        | `border-white/10`   |

---

## 26. Elevation & Shadow System

```css
--shadow-1: 0 1px 3px rgba(0,0,0,0.4);      /* Minimal lift */
--shadow-2: 0 4px 12px rgba(0,0,0,0.5);     /* Card level */
--shadow-3: 0 8px 24px rgba(0,0,0,0.6);     /* Modal level */
--shadow-4: 0 16px 48px rgba(0,0,0,0.7);    /* Overlay level */

/* Glow effects */
.glow-blue {
  box-shadow: 0 0 40px rgba(77,159,255,0.2), 0 0 80px rgba(77,159,255,0.1);
}
.glow-text {
  text-shadow: 0 0 30px rgba(77,159,255,0.5);
}

/* Terminal shadow */
shadow-[0_30px_80px_rgba(0,0,0,0.8)]

/* CTA glow */
shadow-xl shadow-blue-500/20
```

---

## 27. Motion & Animation Tokens

### 27.1 Timing Tokens

```css
--duration-fast:   150ms;     /* Hover states */
--duration-normal: 250ms;     /* Standard transitions */
--duration-slow:   400ms;     /* Major transitions */
```

### 27.2 Easing Curves

```css
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);  /* Overshoot spring */
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);        /* Material-like */

/* Apple-style ease (used in Framer Motion) */
ease: [0.22, 1, 0.36, 1]   /* Most entrance animations */
```

### 27.3 Page Transition Pattern

```typescript
// Every route wrapped in AnimatePresence
<AnimatePresence mode="wait">
  <motion.div
    key={location}
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
  />
</AnimatePresence>
```

### 27.4 Standard Entrance Animation

```typescript
// Used for most elements (whileInView)
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: N * 0.1, duration: 0.6 }}
```

### 27.5 Stagger Pattern

```typescript
// Parent container
variants={{ visible: { transition: { staggerChildren: 0.1 } } }}

// Each child
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};
```

---

## 28. Background Patterns

### 28.1 Grid Background

```css
.grid-bg {
  background-image:
    linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px);
  background-size: 72px 72px;
}
```

### 28.2 Dot Background

```css
.dot-bg {
  background-image: radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px);
  background-size: 32px 32px;
}
```

### 28.3 Noise Overlay

```css
.noise::after {
  /* SVG-based fractal noise at 3% opacity */
  background-image: url("data:image/svg+xml,...feTurbulence...");
  opacity: 0.03;
}
```

---

## 29. Component Design Specifications

### 29.1 Navbar

- **Position:** Fixed top, z-50
- **Background:** Transparent → `bg-[#060b19]/70` on scroll (>20px)
- **Glass:** `backdrop-blur-xl` when scrolled
- **Progress bar:** Fixed top, h-0.5, primary color, scaleX driven by `useScroll`
- **Logo:** 32×32 rounded profile photo + green active dot (2.5×2.5, bottom-right)
- **Links:** 10px, font-bold, tracking 0.2em, uppercase
- **Active link:** `text-primary`, others `text-muted-foreground`
- **Mobile:** Full-screen overlay with staggered link entrance
- **Hamburger:** 3-line animated (rotates to X on open)

### 29.2 Hero Section

- **Layout:** Two-column flex (text left, photo right) on desktop
- **Name:** Massive viewport-relative (16vw mobile → 9vw desktop)
- **Name colors:** "BALAJI" → white, ".S" → `#ff8c42` (warm accent)
- **Cycling words:** ["Creator", "Technologist", "Innovator", "Visionary"] — 2.4s interval
- **Word style:** `#427cff`, xl-2xl, font-black, tracking 0.3em, uppercase
- **CTAs:** Two pills — primary filled blue, secondary outlined glass
- **Stats row:** 3 counters (animated count-up) with tiny mono labels
- **Scroll indicator:** Centered bottom, "SCROLL" label + gradient vertical line
- **3D layer:** Full-screen canvas behind content (z-index: 1, pointer-events: auto)

### 29.3 About Section

- **Section tag:** "01 — About Me" with gradient line prefix
- **Two-column layout:** Text/skills left, photo/stats right
- **Skill bars:** GSAP ScrollTrigger scrubbed (width 0 → level%), live percentage counter
- **Tech tags:** Pill-shaped, hover → scale 1.06 + primary border/text
- **Stats grid:** 2×2, glass cards with hover border transition
- **Photo:** Rounded-3xl with gradient overlay, parallax y-offset via GSAP

### 29.4 Contact Form

- **Glass container:** `rounded-[2rem]`, saturate 180%, blur 40px
- **Header icon:** Gradient circle (primary → accent) with send icon
- **Input style:** `bg-white/5`, rounded-xl, focus → primary ring + glow shadow
- **Submit button:** Full-width, foreground → primary on hover, icon slides on hover
- **Social grid:** Row of circular icons, all hover → primary + scale 110%
- **vCard button:** Outlined pill with glass bg
- **Availability:** Green pulsing dot + "Available for work" label

### 29.5 Terminal Overlay

- **macOS aesthetic:** Traffic light dots (red/yellow/green), dark title bar
- **Title:** "balaji@luxora-os — zsh"
- **Body:** Black/dark transparent, monospace 12px, scrollable (32rem height)
- **Prompt:** Powerlevel10k-style segments:
  - Apple logo on dark bg → blue folder with "~" → green time segment
- **Input cursor:** Cyan "❯" symbol
- **Commands list (help):** Cards with copy/run buttons, cyan accent
- **Draggable:** Framer Motion `drag` with elastic 0.1

### 29.6 MagneticButton

- **Physics:** `useSpring(stiffness: 150, damping: 15, mass: 0.1)`
- **Strength:** 30px default pull distance
- **3D tilt:** `rotateX` and `rotateY` mapped from spring values
- **Return:** Springs back to (0,0) on mouse leave

### 29.7 Custom Cursor

- **Dot:** Small filled circle following cursor
- **Ring:** Larger outline circle with lag (spring damped)
- **Blend:** `mix-blend-difference` for contrast on any background
- **Hidden:** On touch devices via CSS media query

---

## 30. Sound Design

### 30.1 Audio Files

| Sound         | File                     | Volume | Trigger                       |
|---------------|--------------------------|--------|-------------------------------|
| Hover tick    | `/sounds/hover.mp3`     | 0.25   | `onMouseEnter` on interactive |
| Click pop     | `/sounds/click.mp3`     | 0.5    | `onClick` on buttons/links    |

### 30.2 Sound Context API

```typescript
const { playHover, playClick, soundEnabled, toggleSound } = useAppSound();

// Usage on any interactive element:
onMouseEnter={playHover}
onClick={() => { playClick(); doAction(); }}
```

### 30.3 Sound Rules

- All nav links, CTA buttons, and mode toggles must call `playHover`/`playClick`
- Sound state persists in `localStorage('soundEnabled')`
- Default: **enabled** (true)
- User can toggle via terminal command or UI (future)

---

## 31. Responsive Design Breakpoints

Following Tailwind defaults:

| Breakpoint | Width    | Key Layout Changes                              |
|------------|----------|--------------------------------------------------|
| Default    | < 640px  | Single column, stacked layouts, mobile nav       |
| `sm`       | ≥ 640px  | 2-column grids begin, larger hero text           |
| `md`       | ≥ 768px  | Resume sidebar button visible, form 2-col inputs |
| `lg`       | ≥ 1024px | Full two-column layouts, desktop nav visible     |

### Mobile-Specific Behavior

- Custom cursor: **disabled** on touch devices
- Mobile nav: Full-screen overlay with staggered animation
- Sound: Works but may be blocked by autoplay policy
- Terminal: Accessible via `⌘K` button in navbar header
- Hero name: Scales from 16vw → responsive via viewport units

---

## 32. Scrollbar & Selection Styling

```css
::-webkit-scrollbar { width: 3px; }
::-webkit-scrollbar-track { background: hsl(0 0% 4%); }
::-webkit-scrollbar-thumb { background: hsl(0 0% 20%); border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: hsl(217 91% 60%); } /* Primary blue */

::selection {
  background: hsl(217 91% 60% / 0.3);  /* Primary blue at 30% */
  color: #fff;
}
```

---

## 33. Icon System

### 33.1 Libraries

| Library        | Icons Used                                              |
|----------------|----------------------------------------------------------|
| `react-icons/fi` | FiArrowUpRight, FiDownload, FiSend, FiCheck, FiX, FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMail, FiArrowLeft, FiMapPin, FiGlobe, FiExternalLink |
| `react-icons/si` | SiTelegram, SiReddit, SiYoutube, SiDiscord, SiMedium, SiDevdotto, SiCodepen, SiStackoverflow, SiHackerrank, SiLeetcode, SiBehance |
| `react-icons/fa` | FaApple, FaFolder, FaRegClock, FaTimesCircle, FaCopy |
| `lucide-react`   | Supplementary icons                                   |

### 33.2 Icon Style Rules

- Size: `w-4 h-4` (standard), `w-3 h-3` (small), `w-5 h-5` (emphasis)
- Color: Inherits from parent text color
- Hover: Arrow icons translate (0.5px diagonal) on hover
- Social circles: `w-10 h-10 rounded-full border border-white/10`

---

## 34. Reduced Motion Compliance

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**In JavaScript:**
```typescript
const prefersReducedMotion = useReducedMotion();

// All GSAP blocks check:
if (prefersReducedMotion) return;

// Lenis provider destroys scroll instance if true
// TechGlobe stops rotation if true
// Skill bars show final state without animation if true
```

---
---

# PART C — RULES & QUICK REFERENCE FOR AI AGENTS

---

## 35. Mandatory Rules

> **ALWAYS follow these when modifying any part of this portfolio:**

### DO ✅

1. Use OKLCH color tokens from `:root` — never hardcode random hex values
2. Apply glassmorphism (`.glass` or `.glass-card`) to elevated surfaces
3. Animate with Framer Motion springs — never CSS-only transitions on CTAs
4. Add `playHover` / `playClick` to all new interactive elements
5. Check `useReducedMotion()` before any GSAP or procedural animation
6. Use `section-reveal` class on new homepage sections for scroll-driven reveal
7. Use `cn()` from `@/lib/utils` for merging Tailwind classes
8. Use viewport-relative font sizes on hero-level headings
9. Maintain the mono tracking-widest uppercase pattern for all labels
10. Use gradient lines (`bg-gradient-to-r from-primary to-accent`) for section dividers
11. New data must go in `portfolioData.ts` — keep typed, centralized
12. Component patterns follow shadcn/ui — use `cn()` for class merging
13. Glass cards use `.glass-card` utility — not inline styles
14. Font stack is locked: Space Grotesk (headings), Inter (body), JetBrains Mono (technical)

### DON'T ❌

1. **NEVER** use pure `#000000` — use `--background` (oklch 18% deep indigo)
2. **NEVER** use flat `:hover` color swaps — use spring physics or opacity transitions
3. **NEVER** omit reduced-motion checks — it's an accessibility violation
4. **NEVER** skip sound on interactive elements — it breaks the "alive" feeling
5. **NEVER** use `React Router` — the project uses `wouter`
6. **NEVER** use Inter for headings — Space Grotesk only
7. **NEVER** inline glassmorphism styles — use the utility classes
8. **NEVER** create a section without the `id` attribute — scroll nav depends on it
9. **NEVER** use `<a>` for internal navigation — use wouter's `<Link>`
10. **NEVER** add images without `loading="lazy"` — performance matters

---

## 36. File Quick-Reference

| Need to change...          | Edit this file                                  |
|----------------------------|-------------------------------------------------|
| Color tokens / themes      | `client/src/index.css` (`:root` block)           |
| Typography / fonts         | `client/src/index.css` + `tailwind.config.ts`    |
| Portfolio content/data     | `client/src/data/portfolioData.ts`               |
| New section on home page   | `client/src/pages/Home.tsx`                      |
| Navigation links           | `client/src/components/portfolio/Navbar.tsx`      |
| Terminal commands           | `client/src/components/ui/TerminalOverlay.tsx`    |
| 3D hero effects            | `client/src/components/3d/HeroScene.tsx`          |
| Contact form fields        | `client/src/components/portfolio/Contact.tsx`     |
| API routes                 | `server/routes.ts` + `worker.ts`                 |
| Deploy config              | `wrangler.jsonc`                                 |
| Sound effects              | `client/public/sounds/` + `SoundContext.tsx`      |
| Glass / utility classes    | `client/src/index.css` (`@layer utilities`)       |
| Add new route              | `client/src/App.tsx` (Router component)           |
| Add new context/provider   | `client/src/context/` + wire in `App.tsx`         |
