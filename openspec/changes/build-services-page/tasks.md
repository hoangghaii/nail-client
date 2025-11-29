# Implementation Tasks

## Phase 1: Service Components

- [ ] Create `src/components/services/` directory
- [ ] Build ServiceCard component
  - Props: service (Service type), variant (optional)
  - Display service image with rounded-xl wrapper
  - Show service name as h3 heading
  - Display full description text
  - Show price formatted as currency ($XX)
  - Show duration in minutes format (XX min)
  - "Book Now" button links to `/booking?service={id}`
  - Card has rounded-xl (20px) border-radius
  - Button has rounded-lg (16px) border-radius
  - Use border-2 border-border (no shadows)
  - Hover: hover:border-accent transition-colors
  - Verify: All design constraints met
- [ ] Build ServiceList component
  - Fetch all services from servicesData
  - Display in responsive grid
  - Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
  - Gap: gap-6 lg:gap-8
  - Section padding and container pattern
  - Verify: Grid responds correctly at breakpoints

## Phase 2: ServicesPage Assembly

- [ ] Update `src/pages/ServicesPage.tsx`
  - Import PageHeader component (from shared)
  - Add page header: "Our Services" with subtitle
  - Import and render ServiceList
  - Use container pattern (max-w-7xl mx-auto px-4 sm:px-6 lg:px-8)
  - Section spacing (py-12 md:py-16 lg:py-20)
  - Verify: Page renders all services correctly

## Phase 3: Design Verification

- [ ] Verify no prohibited styling
  - Check no shadow-\* classes
  - Check no bg-gradient-\* classes
  - Check no animate-\* classes (except allowed)
- [ ] Verify border-radius hierarchy
  - Service cards: rounded-xl (20px)
  - Buttons within cards: rounded-lg (16px)
  - Images within cards: rounded-lg (16px) or less
- [ ] Verify color palette (5 colors only)
  - Primary, secondary, accent, border, background

## Phase 4: Responsive Testing

- [ ] Test mobile (375px): 1 column grid
- [ ] Test tablet (768px): 2 column grid
- [ ] Test desktop (1280px): 3 column grid
- [ ] Verify images load and scale properly
- [ ] Verify text remains readable at all sizes

## Phase 5: Accessibility

- [ ] Semantic HTML (section, h2, h3)
- [ ] All images have alt attributes
- [ ] Buttons keyboard accessible
- [ ] Focus indicators visible
- [ ] Proper heading hierarchy

## Validation

- [ ] Run `npm run lint` - no errors
- [ ] Run `npm run build` - no TypeScript errors
- [ ] Click all "Book Now" buttons - navigate to `/booking`
- [ ] Images load from Unsplash
- [ ] Design constraints verified
