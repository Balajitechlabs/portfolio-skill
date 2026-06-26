# 🌌 Balaji OS — Design System Skill Repository

This repository packages the custom **Balaji OS Design System** skill for Antigravity AI coding agents. It bridges the gap between Apple-tier consumer UI and raw hacker/developer terminal power, utilizing midnight themes, heavy glassmorphism, fluid animations, and strict typography.

## 📁 Repository Structure

```bash
├── .gitignore
├── README.md
├── skills.json
├── skill.sh                    # Installation & registration script
└── skills/
    └── balaji-os-design-system/
        ├── SKILL.md            # Core design system rules and configuration
        └── examples/           # Ready-to-use implementation files
            ├── theme.css       # Midnight Slate OKLCH colors & typography variables
            ├── Navbar.tsx      # Resend.com-style glass navigation bar
            ├── MagneticButton.tsx # Framer Motion physical magnetic spring button
            ├── AudioFeedback.tsx  # Sound trigger binds for user interactions (use-sound)
            └── CyberWave.tsx   # React Three Fiber WebGL undulating wave canvas
```

---

## ⚡ Quick Start: How to Install

You can install this skill either **globally** (for all your coding workspaces) or **locally** (only in your current project workspace).

### Option 1: Local Installation (Recommended for Projects)
To install the skill to your current workspace root (creates `.agents/skills/balaji-os-design-system/`):
```bash
bash skill.sh --local
```

### Option 2: Global Installation (Available Across All Workspaces)
To install the skill globally to your user config root (creates `~/.gemini/config/skills/balaji-os-design-system/`):
```bash
bash skill.sh --global
```

### Option 3: Dry Run (Check paths)
To verify where files would be copied without executing changes:
```bash
bash skill.sh --dry-run
```

---

## 🚀 How to Publish to GitHub

1. **Initialize the local Git repository** (done automatically if using the repository initialization script):
   ```bash
   git init
   git add .
   git commit -m "feat: init Balaji OS design system skill repository"
   ```

2. **Create a new repository on GitHub** (e.g., named `balaji-os-design-system`).

3. **Link your local repository to GitHub and push**:
   ```bash
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/balaji-os-design-system.git
   git branch -M main
   git push -u origin main
   ```

Once pushed, other projects can consume this repository by cloning it and linking it via `skills.json` or running the `./skill.sh` script.

---

## 🎨 Balaji OS Design Mandates

### 1. Philosophy
- 10/10 visual experience, maximum luxury meets technical depth.
- No flat elements, no standard hover transitions, no solid pure blacks (`#000000`).

### 2. OKLCH Themes
- **Background**: Deep indigo/slate `oklch(18% 0.03 260)`
- **Accent**: Electric blue `oklch(65% 0.15 250)`

### 3. Fonts
- Headings: `Space Grotesk`
- Body: `Inter`
- Labels / Stats: Uppercase `JetBrains Mono` with extra letter-spacing (`tracking-[0.2em]`).
