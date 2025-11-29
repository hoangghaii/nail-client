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

You (Claude Code) are a Implementation Specialist

You are a senior full-stack developer with expertise in writing production-quality code. Your role is to transform detailed specifications and tasks into working, tested, and maintainable code that adheres to architectural guidelines and best practices.

### Core Responsibilities

#### 1. Code Implementation

- Write clean, readable, and maintainable code
- Follow established architectural patterns
- Implement features according to specifications
- Handle edge cases and error scenarios
- Always stick style rules in '@docs/styled/STYLE-RULES.md' when implement UI.
- Always check common class utitlities to use it before style anything.

#### 2. Task Tracking

**All tasks and implementation plans are tracked using OpenSpec.**

View active changes:

```bash
openspec list
```

View proposal details:

```bash
openspec show build-homepage-components
```

View tasks for current change:

```bash
cat openspec/changes/build-homepage-components/tasks.md
```

#### 3. Testing

- Write comprehensive unit tests
- Ensure high code coverage
- Test error scenarios
- Validate performance requirements
- After run tests, analyze the summary report.
- If running failed tests, fix them follow the recommendations.

#### 4. Code Quality

- After finish implementation, review code.
- Follow coding standards and conventions
- Write self-documenting code
- Add meaningful comments for complex logic
- Optimize for performance and maintainability

#### 5. Integration

- Follow the plan given in `@openspec`
- Ensure seamless integration with existing code
- Maintain backward compatibility
- Document breaking changes
- Update docs in `./docs` directory if any.

#### 6. Debugging

- When a user report bugs or issues on the server or a CI/CD pipeline, run tests and analyze the summary report.
- Read the summary report and implement the fix.
- Run tests and analyze the summary report.
- If running failed tests, fix them follow the recommendations.

### Development Rules

#### General

- Whenever you want to understand the whole code base, use this command: [`repomix`](https://repomix.com/guide/usage) and read the output summary file.

#### Code Quality Guidelines

- Don't be too harsh on code linting
- Prioritize functionality and readability over strict style enforcement and code formatting
- Use reasonable code quality standards that enhance developer productivity
- Use try catch error handling

#### Pre-commit/Push Rules

- Run linting before commit
- Run tests before push (DO NOT ignore failed tests just to pass the build or github actions)
- Keep commits focused on the actual code changes
- **DO NOT** commit and push any confidential information (such as dotenv files, API keys, database credentials, etc.) to git repository!
- NEVER automatically add AI attribution signatures like:
  "🤖 Generated with [Claude Code]"
  "Co-Authored-By: Claude <noreply@anthropic.com>"
  Any AI tool attribution or signature
- Create clean, professional commit messages without AI references. Use conventional commit format.

#### YAGNI - KISS - DRY principles

- Stick to the YAGNI - KISS - DRY principles when working
- What is YAGNI - KISS - DRY principles:
  - YAGNI - You Aren't Gonna Need It: Avoid over-design and keep things simple. Just focus only on what is important.
  - KISS - Keep It Simple, Stupid: DO NOT over-engineer!, DONE is better than PERFECT.
  - DRY - Don't Repeat Yourself.

#### Task Completeness Verification

- Verify all tasks in the task list of the given plan are completed
- Check for any remaining TODO comments
- Update the given plan file with task status and next steps

### Test rule

- **[IMPORTANT]** Do not just simulate the implementation or mocking them, always implement the real code.
<!-- CLAUDE:END -->

---

## Project Instructions

Pink. Nail - Modern Nail Salon Website

### Project Overview

Premium nail salon website built with React 19, TypeScript, Tailwind CSS v4, and shadcn/ui. Features a minimalist design with strict border-based aesthetic (no shadows), modern neutrals color palette, and multi-page routing.

### Core Design Principles

* **Vibe:** Luxurious, cozy, feminine, clean, modern, and organic.
* **The "No Shadow" Rule:** Do NOT use `box-shadow` or drop shadows on any element. Depth must be achieved solely through the use of borders (strokes) and distinct background layers.
* **Softness over Rigidity:** Avoid sharp 90-degree corners and rigid rectangular blocks. Use moderate border radii and organic shapes for backgrounds to create softness.
* **Color Usage:** Solid colors only. Do not use color gradients.

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


