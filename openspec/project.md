# Project Context

## Purpose

Modern, premium nail salon website for Pink. Nail in San Francisco. The site showcases services, portfolio work, enables appointment booking, and provides contact information. Design emphasizes clean minimalism inspired by Dribbble/Behance aesthetics.

## Tech Stack

- React 19
- TypeScript (strict mode)
- Vite
- Tailwind CSS v4
- shadcn/ui components
- React Router v6
- lucide-react (icons)

## Project Conventions

### Code Style

- Use functional components with TypeScript
- Prefer named exports over default exports for components
- File naming: PascalCase for components, camelCase for utilities
- Use ESLint and Prettier (configured with Husky pre-commit hooks)
- Import aliases: `@/components`, `@/lib`, `@/types`, `@/data`, `@/hooks`

### Architecture Patterns

- Component structure: `src/components/{domain}/{ComponentName}.tsx`
- Pages in `src/pages/`
- Shared/reusable components in `src/components/shared/`
- Type definitions centralized in `src/types/`
- Mock data in `src/data/`
- Custom hooks in `src/hooks/`

### Testing Strategy

- Manual testing across breakpoints (mobile, tablet, desktop)
- Visual design constraint verification
- Accessibility testing (keyboard navigation, screen readers)

### Git Workflow

- Main branch: `master`
- Commit messages: concise, descriptive
- Pre-commit hooks: ESLint + Prettier

## Domain Context

### Design Philosophy

**Modern Neutrals Palette** with strict minimalist constraints:

- 5-color palette: Primary Black (#1A1A1A), Soft White (#FAFAFA), Warm Gray (#F5F5F5), Medium Gray (#767676), Light Border (#E5E5E5)
- Typography: Be Vietnam Pro font (already configured)

### Nail Salon Services

- Service categories: Manicure, Pedicure, Nail Art, Spa, Extensions
- Typical service duration: 30-120 minutes
- Price range: $25-90

## Important Constraints

### Design Constraints (STRICT)

1. **NO box-shadow** - Use `border` and `border-{width}` exclusively for depth
2. **Border-Radius Hierarchy** - Parent radius must be 4-8px larger than child radius
   - Parent: `rounded-xl` (20px), `rounded-2xl` (24px)
   - Child: `rounded-lg` (16px), `rounded-xl` (20px)
   - Range: 8px-24px only
3. **No Gradients** - Use solid colors only (except subtle hero backgrounds if necessary)
4. **Minimal Animation** - Limit to: hover state changes, page fade transitions, loading spinners (`animate-spin` only)
5. **Color Palette** - Max 5 colors (enforced)

### Prohibited CSS Classes

- ❌ `shadow-*` classes
- ❌ `bg-gradient-*` classes (except hero sections)
- ❌ `animate-*` classes (except `animate-spin`)
- ❌ Equal parent-child border-radius values
- ❌ Sharp corners (`rounded-none`, `rounded-sm`)
- ❌ Excessive rounding (`rounded-full` except avatars/icons)

## External Dependencies

- **Unsplash API**: Placeholder images for services and gallery (`https://source.unsplash.com/`)
- **localStorage**: Booking draft persistence (key: `pink-nail-booking-draft`)

## Implementation Decisions

- **Routing**: Multi-page with React Router (/, /services, /gallery, /booking, /contact)
- **Gallery Lightbox**: shadcn Dialog component for full-size image modals
- **Booking State**: localStorage persistence with auto-save and "Resume booking" feature
- **Header**: Static (scrolls with page), not fixed/sticky
- **Mobile Nav**: Hamburger menu with slide-in overlay
