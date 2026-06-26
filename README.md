# 🌌 BalajiTechLabs Portfolio — Complete Skill & Design Reference

This repository packages the custom **BalajiTechLabs Portfolio Complete** skill for Antigravity AI coding agents. It serves as the single canonical source of truth for the Balaji OS portfolio (portfolio.balajitechlab.com), wrapping both the technical structure and design tokens.

## 📁 Repository Structure

```bash
├── .gitignore
├── README.md
├── skills.json
├── skill.sh                             # Installation & registration script
└── skills/
    └── balajitechlabs-portfolio-complete/
        ├── SKILL.md                     # Core technical skill and design system reference
        └── examples/                    # Ready-to-use implementation files
            ├── theme.css                # Midnight Slate OKLCH colors & typography variables
            ├── Navbar.tsx               # Resend.com-style glass navigation bar
            ├── MagneticButton.tsx          # Framer Motion physical magnetic spring button
            ├── AudioFeedback.tsx           # Sound trigger binds for user interactions (use-sound)
            └── CyberWave.tsx            # React Three Fiber WebGL undulating wave canvas
```

---

## ⚡ Quick Start: How to Install

You can install this skill either **globally** (for all your coding workspaces) or **locally** (only in your current project workspace).

### Option 1: Local Installation (Recommended for Projects)
To install the skill to your current workspace root (creates `.agents/skills/balajitechlabs-portfolio-complete/`):
```bash
bash skill.sh --local
```

### Option 2: Global Installation (Available Across All Workspaces)
To install the skill globally to your user config root (creates `~/.gemini/config/skills/balajitechlabs-portfolio-complete/`):
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

1. **Initialize the local Git repository**:
   ```bash
   git init
   git add .
   git commit -m "feat: init Balaji OS portfolio complete skill repository"
   ```

2. **Link your local repository to GitHub and push**:
   ```bash
   git remote add origin https://github.com/Balajitechlabs/portfolio-skill.git
   git branch -M main
   git push -u origin main
   ```

Once pushed, other projects can consume this repository by cloning it and linking it via `skills.json` or running the `./skill.sh` script.
