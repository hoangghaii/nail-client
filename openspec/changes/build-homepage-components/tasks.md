# Implementation Tasks

## Phase 1: Shared Components

- [x] Create `src/components/shared/` directory
- [x] Build PageHeader component
  - Accept `title` and optional `subtitle` props
  - Use typography design tokens from `src/styles/design-tokens.ts`
  - Implement responsive text scaling
  - Verify: Renders with correct spacing and typography
- [x] Build LoadingSpinner component
  - Use `animate-spin` utility (only allowed animation)
  - Center within container
  - Use accent color from design tokens
  - Verify: Spins smoothly, accessible (aria-label)

## Phase 2: Hero Section

- [x] Create `src/components/home/` directory
- [x] Build HeroSection component
  - Large headline with brand messaging
  - Subheading describing services
  - Primary CTA button linking to `/booking`
  - Secondary link to `/services`
  - Follow border-radius hierarchy: section (rounded-2xl if bg) > button (rounded-lg)
  - Verify: CTAs navigate correctly, responsive text scales properly

## Phase 3: Services Overview

- [x] Build ServicesOverview component
  - Fetch 3-4 featured services using `getFeaturedServices()` from `src/data/services.ts`
  - Display service cards in responsive grid (1 col mobile, 2 col tablet, 3-4 col desktop)
  - Each card shows: name, short description, price, duration, "Book Now" button
  - Cards use `rounded-xl` (20px), buttons use `rounded-lg` (16px)
  - Border-only depth (no shadows): `border-2 border-border`
  - Hover effect: `hover:border-accent transition-colors`
  - Verify: Grid responds correctly, images load from Unsplash, border hierarchy correct

## Phase 4: Featured Gallery

- [x] Build FeaturedGallery component
  - Fetch 6-8 featured items using `getFeaturedGallery()` from `src/data/gallery.ts`
  - Display in responsive grid (2 col mobile, 3 col tablet, 4 col desktop)
  - Images with `rounded-xl` wrapper
  - Overlay on hover showing title (no complex animations, only opacity transition)
  - "View Full Gallery" link to `/gallery`
  - Verify: Images load, grid responsive, hover overlay works

## Phase 5: Homepage Assembly

- [x] Update `src/pages/HomePage.tsx`
  - Import HeroSection, ServicesOverview, FeaturedGallery
  - Arrange sections with proper spacing (`py-12 md:py-16 lg:py-20`)
  - Add section separators if needed (subtle borders)
  - Use container max-width pattern: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
  - Verify: All sections render, spacing consistent

## Phase 6: Design Constraint Verification

- [x] Audit all components for prohibited classes
  - Search codebase: `rg "shadow-" src/components/home src/components/shared` (should return 0) ✓
  - Search for gradients: `rg "bg-gradient-" src/components/home src/components/shared` (should return 0, except hero if used) ✓
  - Search animations: `rg "animate-" src/components/home src/components/shared` (only `animate-spin` in LoadingSpinner allowed) ✓
- [x] Verify border-radius hierarchy in all cards/containers
  - Hero section background (if any): rounded-2xl (24px) - N/A (no background wrapper)
  - Service cards: rounded-xl (20px) ✓
  - Buttons within cards: rounded-lg (16px) ✓
  - Gallery item wrappers: rounded-xl (20px) ✓
- [x] Check color palette usage (only 5 colors allowed)
  - Primary: `text-primary`, `bg-primary`, `border-primary` ✓
  - Secondary: `bg-secondary` ✓
  - Accent: `text-accent`, `hover:border-accent` ✓
  - Border: `border-border` ✓
  - Background: `bg-background` ✓

## Phase 7: Responsive Testing

- [ ] Test mobile layout (375px width)
  - Hero text readable, CTA buttons accessible
  - Services in single column
  - Gallery in 2 columns
- [ ] Test tablet layout (768px width)
  - Services in 2 columns
  - Gallery in 3 columns
- [ ] Test desktop layout (1280px+ width)
  - Services in 3-4 columns
  - Gallery in 4 columns
  - Container stays within max-width bounds

## Phase 8: Accessibility Testing

- [ ] Keyboard navigation
  - Tab through all interactive elements in logical order
  - Enter key activates buttons and links
  - Focus indicators visible
- [ ] Semantic HTML
  - Hero uses `<section>` with proper heading hierarchy (`<h1>`)
  - Services uses `<section>` with `<h2>`
  - Gallery uses `<section>` with `<h2>`
  - Images have descriptive `alt` attributes
- [ ] ARIA labels
  - Loading spinner has `aria-label="Loading"`
  - Buttons have clear text or aria-label

## Validation Checklist

- [x] Run `npm run lint` - no errors (3 acceptable warnings remain)
- [x] Run `npm run dev` - site loads without console errors ✓ (running on localhost:5174)
- [ ] Visual inspection: no box shadows visible (requires manual browser testing)
- [ ] Visual inspection: border-radius hierarchy maintained (requires manual browser testing)
- [ ] All CTAs navigate to correct routes (requires manual browser testing)
- [ ] All images load from Unsplash (requires manual browser testing)
- [ ] Mobile, tablet, desktop layouts all work correctly (requires manual browser testing)
- [x] No TypeScript errors: `npm run build` ✓ (build successful)
