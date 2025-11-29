# Build Booking Page

## Summary

Implement the multi-step booking page with service selection, date/time picker, customer information form, and booking summary. Include localStorage persistence for draft bookings with "Resume booking" functionality.

## Motivation

The booking page is the primary conversion point where visitors:

1. Select desired nail service
2. Choose appointment date and time
3. Provide contact information
4. Review booking details
5. Confirm appointment (mock confirmation)

This is the most complex page requiring state management, form validation, localStorage persistence, and multi-step UI coordination.

## Scope

### In Scope

- BookingSteps component (progress indicator)
- ServiceSelector component (Step 1)
- DateTimePicker component with shadcn Calendar (Step 2)
- CustomerInfoForm component (Step 3)
- BookingSummary component (Step 4)
- useBooking custom hook for state management
- useLocalStorage custom hook for persistence
- dateUtils utility functions
- Complete BookingPage with step navigation
- localStorage auto-save on each step
- "Resume booking" detection and prompt
- Mock confirmation flow
- Responsive design and accessibility

### Out of Scope

- Backend API integration
- Real-time availability checking
- Payment processing
- Email confirmations
- Calendar sync (Google Calendar, etc.)
- Multi-language support

## Dependencies

- ✅ Layout components (completed)
- ✅ Services and business data (completed)
- ✅ shadcn Calendar, Select, Input components (installed)
- ✅ Design tokens (completed)
- 🔄 Shared components (in build-homepage-components proposal)

## Success Criteria

1. Four-step booking flow works smoothly
2. Step 1: Service selection from dropdown or cards
3. Step 2: Date selection with Calendar, time slot selection
4. Step 3: Customer info form with validation
5. Step 4: Booking summary with all details, confirm button
6. Progress indicator shows current step
7. Back/Next navigation works correctly
8. localStorage saves draft after each step
9. On page load, detect draft and offer to resume
10. Confirmation shows success message, clears localStorage
11. Design constraints verified (no shadows, border hierarchy)
12. Fully accessible with keyboard navigation
13. Responsive across all breakpoints

## Testing Plan

- Test complete flow: service → date → info → confirm
- Test back navigation preserves data
- Test localStorage: refresh page, resume booking
- Test clearing draft after confirmation
- Test with invalid data (validation)
- Test keyboard navigation through all steps
- Test responsive layout at each step
- Verify no prohibited styling (shadows, etc.)
