---
name: balaji-os-design-system
description: Use this skill to replicate the highly-engineered "Balaji OS" portfolio aesthetic. It bridges the gap between Apple-tier consumer UI and raw hacker/developer terminal power, utilizing midnight themes, heavy glassmorphism, fluid animations, and strict typography.
---

# 🌌 Balaji OS — UI/UX Design Skill

When a user asks to design a website or UI using the "Balaji OS" aesthetic, or asks for a "Visionary Technologist" theme, you **MUST** follow these strict architectural and design rules.

## 1. Core Philosophy
The goal is a 10/10 visual experience that feels both luxurious and highly technical.
- **NEVER** use flat colors. Everything must have depth, shadows, or glassmorphism.
- **NEVER** use basic CSS `:hover` states. Always use physics-based spring animations (like Framer Motion).
- **NEVER** use pure black (`#000000`). Use the "Midnight Slate" palette.

## 2. Color System (Midnight Slate)
You must implement these exact OKLCH values for the CSS variables in the root theme.

```css
:root {
  /* Deep indigo/slate base */
  --background: oklch(18% 0.03 260); 
  --foreground: oklch(98% 0.01 260);
  
  /* Elevated cards */
  --card: oklch(21% 0.03 260);
  --card-foreground: oklch(98% 0.01 260);
  
  /* Borders & Accents */
  --border: oklch(25% 0.04 260);
  --primary: oklch(65% 0.15 250); /* The signature electric blue */
  --primary-foreground: oklch(98% 0 0);
  
  /* Muted elements */
  --muted: oklch(28% 0.04 260);
  --muted-foreground: oklch(75% 0.02 260);
}
```

## 3. Typography Stack
You must enforce a strict, high-contrast typographic hierarchy:
- **Headings (H1-H4)**: Use `Space Grotesk`. Make them massive, tight (`tracking-tighter`), and structural.
- **Body Text**: Use `Inter`. Keep it highly legible.
- **Technical Accents**: Use `JetBrains Mono`. For any labels, stats, or tags, use uppercase mono with extremely wide tracking (`tracking-[0.2em]`) and tiny font sizes (`text-[10px]`).

## 4. UI Components & Architecture

### 4.1 The "Resend" Glass Navbar
When building a navigation bar, it must follow the Resend.com aesthetic:
- **Layout**: Fixed to top, full width, sleek.
- **Background**: Use a highly translucent version of the background color (e.g., `bg-[#060b19]/70`).
- **Glass Effect**: Apply heavy backdrop blur (`backdrop-blur-xl`).
- **Cutoff Border**: Apply a 1px bottom border rendered at 5% white opacity (`border-b border-white/5`).

### 4.2 Magnetic Interactions
Never use a basic CSS transition for a primary CTA button. You must wrap primary buttons in a Framer Motion component that uses `useSpring` to physically pull the button toward the user's cursor on `onMouseMove`.

### 4.3 Auditory Feedback
The UI should not be silent. Integrate `use-sound`.
- Play a tiny, soft `tick` sound (`volume: 0.25`) `onMouseEnter` for all interactive elements.
- Play a satisfying `pop` sound (`volume: 0.5`) `onClick` for major actions.

### 4.4 Advanced WebGL Physics (The Wave)
For hero sections, utilize `@react-three/fiber`. Instead of static images, render a massive wireframe `PlaneGeometry` and use `simplex-noise` in the `useFrame` loop to create undulating cyber-waves. Implement raycasting so the waves physically depress away from the user's cursor.

## 5. Execution Mandate
When applying this skill, you must prioritize **smoothness**. Use `Lenis` for smooth scrolling. Wrap page routes in `<AnimatePresence mode="wait">` for seamless slide-and-fade transitions. Ensure there are no hard reloads.
