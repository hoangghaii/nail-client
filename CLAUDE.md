# CLAUDE.md

<!-- OPENSPEC:START -->
## OpenSpec Instructions

These instructions are for AI assistants working in this project.

Always open `@/openspec/AGENTS.md` when the request:

- Mentions planning or proposals (words like proposal, spec, change, plan)
- Introduces new capabilities, breaking changes, architecture shifts, or big performance/security work
- Sounds ambiguous and you need the authoritative spec before coding

Use `@/openspec/AGENTS.md` to learn:

- How to create and apply change proposals
- Spec format and conventions
- Project structure and guidelines

Keep this managed block so 'openspec update' can refresh the instructions.

<!-- OPENSPEC:END -->

<!-- CLAUDE:START -->
## Claude Instructions

This section provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Role & Responsibilities

Your role is to analyze user requirements, delegate tasks to appropriate sub-agents, and ensure cohesive delivery of features that meet specifications and architectural standards.

## Workflows

- Primary workflow: `./.claude/workflows/primary-workflow.md`
- Development rules: `./.claude/workflows/development-rules.md`
- Orchestration protocols: `./.claude/workflows/orchestration-protocol.md`
- Documentation management: `./.claude/workflows/documentation-management.md`
- And other workflows: `./.claude/workflows/*`

**IMPORTANT:** Analyze the skills catalog and activate the skills that are needed for the task during the process.
**IMPORTANT:** You must follow strictly the development rules in `./.claude/workflows/development-rules.md` file.
**IMPORTANT:** Before you plan or proceed any implementation, always read the `./README.md` file first to get context.
**IMPORTANT:** Sacrifice grammar for the sake of concision when writing reports.
**IMPORTANT:** In reports, list any unresolved questions at the end, if any.
**IMPORTANT**: For `YYMMDD` dates, use `bash -c 'date +%y%m%d'` instead of model knowledge. Else, if using PowerShell (Windows), replace command with `Get-Date -UFormat "%y%m%d"`.

## Documentation Management

We keep all important docs in `./docs` folder and keep updating them, structure like below:

```
./docs
├── project-overview-pdr.md
├── code-standards.md
├── codebase-summary.md
├── design-guidelines.md
├── deployment-guide.md
├── system-architecture.md
└── project-roadmap.md
```

**IMPORTANT:** *MUST READ* and *MUST COMPLY* all *INSTRUCTIONS* in project `./CLAUDE.md`, especially *WORKFLOWS* section is *CRITICALLY IMPORTANT*, this rule is *MANDATORY. NON-NEGOTIABLE. NO EXCEPTIONS. MUST REMEMBER AT ALL TIMES!!!*
<!-- CLAUDE:END -->

---

## Project Instructions

Pink. Nail - Modern Nail Salon Website

### Project Overview

Premium nail salon website built with React 19, TypeScript, Tailwind CSS v4, and shadcn/ui. Features a minimalist design with strict border-based aesthetic (no shadows), modern neutrals color palette, and multi-page routing.

### Core Design Principles

- **Vibe:** Luxurious, cozy, feminine, clean, modern, and organic.
- **The "No Shadow" Rule:** Do NOT use `box-shadow` or drop shadows on any element. Depth must be achieved solely through the use of borders (strokes) and distinct background layers.
- **Softness over Rigidity:** Avoid sharp 90-degree corners and rigid rectangular blocks. Use moderate border radii and organic shapes for backgrounds to create softness.
- **Color Usage:** Solid colors only. Do not use color gradients.

### Tech Stack

- React 19 + TypeScript (strict mode)
- Vite
- Tailwind CSS v4
- shadcn/ui
- React Router v6
- lucide-react icons
- Motion (Framer Motion) - for animations and transitions

### Routes

- `/` - Homepage (hero, services, gallery preview)
- `/services` - Service listings with pricing
- `/gallery` - Portfolio with category filters + lightbox
- `/booking` - Multi-step appointment booking (localStorage)
- `/contact` - Contact form, hours, location

### Running the Project

```bash
npm run dev          # Development server
npm run build        # Production build
npm run lint         # ESLint check
npm run prettier:fix # Format code
```

### Design Constraints (STRICT)

#### Prohibited

- ❌ `shadow-*` classes
- ❌ `bg-gradient-*` (except subtle hero backgrounds)
- ❌ Border-radius outside 8px-24px range

#### Required

- ✅ Border-only depth: `border-2 border-border`
- ✅ Hover transitions: `transition-colors duration-200`
- ✅ Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

### Animation Guidelines

#### Motion Library

- **Always use Motion (Framer Motion)** for animations and complex transitions
- Use for: page transitions, component entrance/exit, interactive animations, gesture-based interactions
- Keep animations subtle and purposeful - enhance UX without being distracting
- Prefer spring physics for natural feel: `transition={{ type: "spring", stiffness: 300, damping: 30 }}`
- Use simple Tailwind transitions only for basic hover states and color changes

#### Animation Principles

- ✅ Subtle and smooth animations that feel natural
- ✅ Use appropriate easing curves (spring physics recommended)
- ✅ Keep animation durations reasonable (200-400ms for most UI transitions)
- ✅ Animate opacity, scale, and position for entrance effects
- ❌ Avoid excessive motion that distracts from content
- ❌ Avoid animations that conflict with the "no shadow" design principle
