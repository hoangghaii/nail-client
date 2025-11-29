# Pink. Nail - OpenSpec Proposals Summary

## ✅ Completed Foundation (Phases 1-2)

- React Router + Layout components (Header, Footer, Layout)
- TypeScript types (Service, Booking, Gallery)
- Design tokens (colors, typography, spacing)
- Mock data (10 services, 18 gallery items)
- shadcn/ui components installed
- Empty page components created

## 📋 Active OpenSpec Proposals (Ready for Implementation)

### 1. build-homepage-components (0/25 tasks)

**Priority: Start here** - Foundation for all other pages

**Components:**

- Shared: PageHeader, LoadingSpinner
- Home: HeroSection, ServicesOverview, FeaturedGallery

**Key Requirements:**

- Hero with CTAs to /booking
- 3-4 featured service cards
- 6-8 featured gallery items
- Responsive grid layouts
- Design constraints verified

### 2. build-services-page (0/22 tasks)

**Depends on:** HomePage shared components

**Components:**

- ServiceCard (name, description, price, duration, image, "Book Now")
- ServiceList (responsive grid: 1/2/3 columns)

**Key Requirements:**

- All 10 services displayed
- Border-radius hierarchy (card 20px, button 16px)
- Links to /booking

### 3. build-gallery-page (0/34 tasks)

**Depends on:** HomePage shared components

**Components:**

- GalleryItem (image + hover overlay)
- GalleryFilter (category tabs)
- GalleryGrid (responsive: 2/3/4 columns)
- ImageLightbox (shadcn Dialog)

**Key Requirements:**

- 6 categories (All, Manicure, Pedicure, Nail Art, Extensions, Seasonal)
- Click to open lightbox
- ESC key closes modal
- Only opacity transitions (no complex animations)

### 4. build-contact-page (0/39 tasks)

**Depends on:** HomePage shared components

**Components:**

- ContactForm (firstName, lastName, email, phone, message)
- BusinessHours (7-day schedule)
- LocationMap (address placeholder)

**Key Requirements:**

- Form validation (email, phone patterns)
- Mock submission (console.log + success message)
- Two-column layout (desktop), stacks (mobile)
- Validation utilities in src/utils/validation.ts

### 5. build-booking-page (0/48 tasks) ⚠️ MOST COMPLEX

**Depends on:** HomePage shared components

**Components:**

- BookingSteps (progress indicator)
- ServiceSelector (Step 1)
- DateTimePicker with Calendar (Step 2)
- CustomerInfoForm with validation (Step 3)
- BookingSummary (Step 4)

**Custom Hooks:**

- useBooking (state management)
- useLocalStorage (persistence)

**Key Requirements:**

- Multi-step navigation (back/next)
- localStorage auto-save after each step
- "Resume booking" prompt on page load
- Clear localStorage on confirmation
- Mock confirmation with success message
- All steps responsive and accessible

## 🎯 Recommended Implementation Order

1. **Start:** build-homepage-components
   - Establishes shared components (PageHeader, LoadingSpinner)
   - Proves design system implementation
   - Creates reusable patterns

2. **Next:** build-services-page
   - Simpler page, reuses patterns
   - Tests grid layouts and responsiveness

3. **Then:** build-gallery-page
   - Adds lightbox interaction pattern
   - Tests category filtering

4. **After:** build-contact-page
   - Introduces form validation
   - Tests two-column layouts

5. **Finally:** build-booking-page
   - Most complex, benefits from prior learnings
   - Integrates all patterns (forms, state, localStorage)

## 📖 View Proposals

```bash
# List all proposals
openspec list

# View specific proposal
openspec show build-homepage-components

# View tasks for a proposal
cat openspec/changes/build-homepage-components/tasks.md

# Validate a proposal
openspec validate build-homepage-components --strict
```

## ⚠️ Design Constraints (Enforced in All Proposals)

**Prohibited:**

- ❌ shadow-\* classes
- ❌ bg-gradient-\* (except subtle hero)
- ❌ animate-\* (except animate-spin)
- ❌ Equal parent-child border-radius

**Required:**

- ✅ Border-only depth (border-2 border-border)
- ✅ Border-radius hierarchy (parent 4-8px > child)
- ✅ Range: 8px-24px only
- ✅ 5-color palette only
- ✅ Hover: transition-colors duration-200

## 📊 Progress Tracking

All proposals validated with OpenSpec. Each has:

- ✅ proposal.md (scope, motivation, success criteria)
- ✅ tasks.md (detailed implementation checklist)
- ✅ specs/\*.md (requirements with scenarios)
- ✅ Validated with --strict mode

Total: **168 tasks** across 5 proposals
