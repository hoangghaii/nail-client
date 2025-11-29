# Build Services Page

## Summary

Implement the services page with service cards displaying all available nail services with detailed information, pricing, and booking CTAs.

## Motivation

The services page is a critical conversion point where visitors:

1. Learn about all available services in detail
2. Compare pricing and duration
3. Make booking decisions based on service descriptions
4. Access booking flow via service-specific CTAs

## Scope

### In Scope

- ServiceCard component with service details, pricing, duration, image
- ServiceList component with responsive grid layout
- Complete ServicesPage assembly
- Filter/category organization (optional enhancement)
- Responsive design across breakpoints
- Design constraint compliance

### Out of Scope

- Service booking modal (handled in BookingPage)
- Service reviews or ratings
- Dynamic pricing or availability
- Service comparison tool

## Dependencies

- ✅ Layout components (completed)
- ✅ Mock services data (completed)
- ✅ Design tokens (completed)
- 🔄 Shared components (in build-homepage-components proposal)

## Success Criteria

1. All 10 services displayed in responsive grid
2. Service cards show: name, description, price, duration, image, book button
3. Grid responsive: 1 col mobile, 2 col tablet, 3 col desktop
4. Design constraints verified (no shadows, border hierarchy)
5. All "Book Now" buttons link to `/booking`
6. Images load from Unsplash
7. Accessible (semantic HTML, keyboard navigation)
