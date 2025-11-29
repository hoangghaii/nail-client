# Implementation Tasks

## Phase 1: Contact Components

- [ ] Create `src/components/contact/` directory
- [ ] Create `src/utils/validation.ts` for form validation
  - Email validation regex
  - Phone validation regex
  - Required field validation
  - Export validation functions
- [ ] Build ContactForm component
  - Use shadcn Input, Label, Textarea, Button
  - Fields: firstName, lastName, email, phone, message
  - State management for form data and errors
  - Validation on blur and submit
  - Mock submit handler (console.log, show success message)
  - Error messages displayed under fields
  - Success message after submission
  - Form has rounded-xl border wrapper
  - Inputs have rounded-lg border-radius
  - Button has rounded-lg border-radius
  - Verify: Validation works, errors display correctly
- [ ] Build BusinessHours component
  - Import businessHours from data
  - Display each day with open/close times
  - Mark Sunday as "Closed" (or configured closed days)
  - Use list format with consistent spacing
  - Rounded-xl wrapper with border
  - Verify: All days display correctly
- [ ] Build LocationMap component
  - Display address from contactInfo
  - Placeholder for map (colored div or simple graphic)
  - Show address in text format
  - Include phone and email as well
  - Rounded-xl wrapper with border
  - Links for phone (tel:) and email (mailto:)
  - Verify: Address displays, links work

## Phase 2: ContactPage Assembly

- [ ] Update `src/pages/ContactPage.tsx`
  - Import PageHeader component
  - Add page header: "Contact Us" with subtitle
  - Two-column layout: grid-cols-1 lg:grid-cols-2
  - Left column: ContactForm
  - Right column: BusinessHours, LocationMap stacked
  - Container pattern (max-w-7xl mx-auto px-4 sm:px-6 lg:px-8)
  - Section spacing (py-12 md:py-16 lg:py-20)
  - Gap between columns: gap-8 lg:gap-12
  - Verify: Layout stacks on mobile, side-by-side on desktop

## Phase 3: Form Validation Logic

- [ ] Implement validation utilities
  - isValidEmail(email: string): boolean
  - isValidPhone(phone: string): boolean
  - isRequired(value: string): boolean
- [ ] Add validation to form
  - Validate on blur for each field
  - Validate all fields on submit
  - Display inline error messages
  - Prevent submission if errors exist
  - Clear errors on field change
- [ ] Test edge cases
  - Empty form submission
  - Invalid email format
  - Invalid phone format
  - Very long message
  - Special characters

## Phase 4: Design Verification

- [ ] Verify no prohibited styling
  - No shadow-\* classes
  - No bg-gradient-\* classes
  - No complex animations
- [ ] Verify border-radius hierarchy
  - Form wrapper: rounded-xl (20px)
  - Input fields: rounded-lg (16px)
  - Submit button: rounded-lg (16px)
  - Info card wrappers: rounded-xl (20px)
- [ ] Verify color palette (5 colors only)
- [ ] Verify border-only depth (no shadows)

## Phase 5: Responsive Testing

- [ ] Test mobile (375px): Single column layout
- [ ] Test tablet (768px): Still single column
- [ ] Test desktop (1024px+): Two columns side-by-side
- [ ] Verify form usability on mobile
- [ ] Verify text inputs scale properly

## Phase 6: Accessibility

- [ ] All form fields have labels
- [ ] Error messages announced to screen readers
- [ ] Form is keyboard navigable
  - Tab through fields in order
  - Enter submits form
  - Focus indicators visible
- [ ] Required fields indicated
- [ ] Success message announced
- [ ] Phone/email links accessible
- [ ] Semantic HTML (form, label, input)

## Phase 7: Form Interaction Testing

- [ ] Fill out form with valid data - success
- [ ] Submit empty form - errors display
- [ ] Enter invalid email - error displays
- [ ] Enter invalid phone - error displays
- [ ] Fix errors - errors clear
- [ ] Submit valid form - success message shows
- [ ] Success message clears form

## Validation

- [ ] Run `npm run lint` - no errors
- [ ] Run `npm run build` - no TypeScript errors
- [ ] Form validation works correctly
- [ ] Phone/email links work (tel: mailto:)
- [ ] Layout responsive across breakpoints
- [ ] Design constraints verified
- [ ] Keyboard navigation works
