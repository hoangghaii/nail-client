# Build Contact Page

## Summary

Implement the contact page with contact form, business hours display, and location information in a two-column responsive layout.

## Motivation

The contact page enables visitors to:

1. Send inquiries via contact form
2. View business hours and operating schedule
3. Find location and address information
4. Access phone and email contact methods
5. Plan visits with complete business information

## Scope

### In Scope

- ContactForm component with validation
- BusinessHours component displaying schedule
- LocationMap component (placeholder with address)
- Complete ContactPage with two-column layout
- Form validation and error handling
- Responsive layout (stacks on mobile)
- Design constraint compliance

### Out of Scope

- Actual form submission to backend
- Email integration (SendGrid, etc.)
- Google Maps integration (using placeholder)
- Live chat widget
- FAQ section

## Dependencies

- ✅ Layout components (completed)
- ✅ Business info data (completed)
- ✅ shadcn form components (installed)
- ✅ Design tokens (completed)
- 🔄 Shared components (in build-homepage-components proposal)

## Success Criteria

1. Contact form with name, email, phone, message fields
2. Form validation provides helpful error messages
3. BusinessHours displays all days with open/closed status
4. LocationMap shows address with placeholder map
5. Two-column layout on desktop, stacks on mobile
6. Form submission shows success message (mock)
7. Design constraints verified
8. Fully accessible with keyboard navigation
