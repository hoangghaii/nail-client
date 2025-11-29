# Implementation Tasks

## Phase 1: Utility Functions and Hooks

- [ ] Create `src/hooks/` directory
- [ ] Create `src/utils/dateUtils.ts`
  - formatDate(date: Date): string
  - formatTime(time: string): string
  - isDateAvailable(date: Date): boolean (mock logic)
  - getDayName(date: Date): string
  - Export date utility functions
- [ ] Build useLocalStorage hook
  - Generic hook: useLocalStorage<T>(key: string, initialValue: T)
  - Returns [value, setValue, removeValue]
  - Auto-parse JSON on get
  - Auto-stringify JSON on set
  - Handle localStorage errors gracefully
  - Verify: Hook saves and retrieves data
- [ ] Build useBooking hook
  - State: currentStep (1-4)
  - State: selectedService (Service | null)
  - State: selectedDate (Date | null)
  - State: selectedTimeSlot (TimeSlot | null)
  - State: customerInfo (CustomerInfo | {})
  - State: bookingNotes (string)
  - Functions: goToNextStep, goToPrevStep, selectService, selectDate, etc.
  - Use useLocalStorage to persist booking draft
  - Auto-save to localStorage on state changes
  - clearBooking function to reset and clear localStorage
  - Verify: State management works, localStorage persists

## Phase 2: Booking Components

- [ ] Create `src/components/booking/` directory
- [ ] Build BookingSteps component
  - Props: currentStep (1-4)
  - Display 4 steps: Service → Date & Time → Your Info → Confirm
  - Highlight current step
  - Show completed steps differently
  - Horizontal layout on desktop, vertical on mobile
  - Use rounded-lg for step indicators
  - Verify: Visual progress clear at each step
- [ ] Build ServiceSelector component
  - Props: services (Service[]), selectedService, onSelect
  - Display services as cards or dropdown (Select component)
  - Each service shows name, duration, price
  - Selected service highlighted
  - "Next" button enabled when service selected
  - Rounded-xl cards (20px), rounded-lg button (16px)
  - Verify: Service selection works, can proceed to next step
- [ ] Build DateTimePicker component
  - Use shadcn Calendar component for date
  - Display available time slots for selected date
  - Fetch time slots: getAvailableSlots(date) from businessInfo
  - Mark unavailable slots as disabled
  - Selected date and time highlighted
  - Grid layout for time slots
  - "Back" and "Next" buttons
  - Rounded-xl wrapper, rounded-lg buttons
  - Verify: Date and time selection works
- [ ] Build CustomerInfoForm component
  - Fields: firstName, lastName, email, phone
  - Optional: bookingNotes textarea
  - Use shadcn Input, Label, Textarea
  - Validation on blur and submit
  - Error messages for invalid fields
  - "Back" and "Next" buttons
  - Next enabled only when form valid
  - Rounded-xl wrapper, rounded-lg inputs
  - Verify: Form validation works
- [ ] Build BookingSummary component
  - Display selected service details
  - Display selected date and time
  - Display customer information
  - Display booking notes if provided
  - "Back" and "Confirm Booking" buttons
  - Confirm button triggers booking submission
  - Mock submission: show success message, clear localStorage
  - Rounded-xl card wrappers
  - Verify: All details display correctly

## Phase 3: BookingPage Assembly

- [ ] Update `src/pages/BookingPage.tsx`
  - Import useBooking hook
  - Check for draft booking on mount
  - Show "Resume booking" prompt if draft exists
  - Import PageHeader component
  - Add page header: "Book Appointment"
  - Import all booking step components
  - Conditional rendering based on currentStep
  - Show BookingSteps progress indicator
  - Step 1: ServiceSelector
  - Step 2: DateTimePicker
  - Step 3: CustomerInfoForm
  - Step 4: BookingSummary
  - Handle step navigation (back/next)
  - Handle booking confirmation
  - Container pattern (max-w-4xl mx-auto px-4 sm:px-6 lg:px-8)
  - Section spacing (py-12 md:py-16 lg:py-20)
  - Verify: Multi-step flow works end-to-end

## Phase 4: localStorage Integration

- [ ] Implement draft detection on page load
  - Check if 'pink-nail-booking-draft' exists in localStorage
  - If exists, show prompt: "You have an incomplete booking. Resume?"
  - If user clicks "Resume", load draft data
  - If user clicks "Start New", clear draft, start fresh
- [ ] Auto-save booking draft
  - Save after service selection
  - Save after date/time selection
  - Save after customer info entry
  - Do NOT save after confirmation (clear instead)
- [ ] Clear localStorage on confirmation
  - After successful booking confirmation
  - Display success message
  - Clear 'pink-nail-booking-draft' from localStorage
  - Reset useBooking state

## Phase 5: Design Verification

- [ ] Verify no prohibited styling
  - No shadow-\* classes
  - No bg-gradient-\* classes
  - Only transition-colors for hover effects
- [ ] Verify border-radius hierarchy
  - Step indicators: rounded-lg (16px)
  - Service cards: rounded-xl (20px)
  - Buttons: rounded-lg (16px)
  - Input fields: rounded-lg (16px)
  - Summary cards: rounded-xl (20px)
- [ ] Verify color palette (5 colors only)
- [ ] Verify border-only depth (no shadows)

## Phase 6: Responsive Testing

- [ ] Test mobile (375px): Single column, stacked layout
- [ ] Test tablet (768px): Comfortable spacing
- [ ] Test desktop (1280px): Optimal layout
- [ ] Test BookingSteps at each breakpoint
- [ ] Test Calendar component on mobile
- [ ] Test time slot grid on mobile

## Phase 7: Accessibility

- [ ] Keyboard navigation through all steps
  - Tab through interactive elements
  - Enter to select service, date, time
  - Enter to submit forms
- [ ] Focus management between steps
  - Focus moves to appropriate element on step change
- [ ] Screen reader announcements
  - Step progress announced
  - Error messages announced
  - Confirmation announced
- [ ] Semantic HTML (form, button, label, section)
- [ ] ARIA labels on custom components
- [ ] Proper heading hierarchy

## Phase 8: End-to-End Testing

- [ ] Complete booking flow: service → date → info → confirm
- [ ] Test back navigation: data persists
- [ ] Test localStorage persistence: refresh page mid-booking
- [ ] Test "Resume booking" prompt
- [ ] Test "Start New" clears draft
- [ ] Test confirmation clears draft
- [ ] Test validation at each step
- [ ] Test with keyboard only
- [ ] Test error states

## Validation

- [ ] Run `npm run lint` - no errors
- [ ] Run `npm run build` - no TypeScript errors
- [ ] Complete booking flow works
- [ ] localStorage saves and loads correctly
- [ ] Confirmation shows success, clears draft
- [ ] Design constraints verified
- [ ] Responsive at all breakpoints
- [ ] Keyboard accessible
- [ ] No console errors
