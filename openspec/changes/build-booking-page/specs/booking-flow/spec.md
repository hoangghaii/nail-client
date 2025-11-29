# Booking Flow Capability

## Overview

Enable visitors to book nail appointments through a multi-step guided process with draft persistence.

## ADDED Requirements

### Requirement: Booking flow MUST guide users through 4 steps

The booking page MUST implement a clear multi-step process for appointment booking.

#### Scenario: Four-step booking process

**Given** a visitor wants to book an appointment
**When** BookingPage is rendered
**Then** step 1 (Service Selection) is shown first
**And** step 2 (Date & Time) follows service selection
**And** step 3 (Customer Info) follows date/time selection
**And** step 4 (Booking Summary) follows customer info
**And** progress indicator shows current step

#### Scenario: Step navigation

**Given** user is on any step except first
**When** user clicks "Back" button
**Then** previous step is displayed
**And** previously entered data is preserved

**Given** user is on any step except last
**When** user clicks "Next" button (if enabled)
**Then** next step is displayed
**And** current step data is saved

---

### Requirement: ServiceSelector MUST enable service choice

The first step MUST allow users to select which service they want to book.

#### Scenario: Service selection display

**Given** step 1 of booking flow
**When** ServiceSelector is rendered
**Then** all available services are displayed
**And** each service shows name, duration, price
**And** user can select one service
**And** selected service is highlighted
**And** "Next" button is enabled only when service selected

---

### Requirement: DateTimePicker MUST enable appointment scheduling

The second step MUST allow users to select date and time for appointment.

#### Scenario: Date selection with Calendar

**Given** step 2 of booking flow
**When** DateTimePicker is rendered
**Then** shadcn Calendar component is displayed
**And** user can select a date
**And** selected date is highlighted
**And** past dates are disabled

#### Scenario: Time slot selection

**Given** user has selected a date
**When** time slots for that date are displayed
**Then** available time slots are shown in grid
**And** unavailable slots are disabled/grayed out
**And** user can select one time slot
**And** selected time is highlighted
**And** "Next" enabled only when both date and time selected

---

### Requirement: CustomerInfoForm MUST collect contact details

The third step MUST gather customer information with validation.

#### Scenario: Customer information fields

**Given** step 3 of booking flow
**When** CustomerInfoForm is rendered
**Then** form includes firstName field (required)
**And** form includes lastName field (required)
**And** form includes email field (required, validated)
**And** form includes phone field (required, validated)
**And** form includes optional bookingNotes textarea
**And** "Next" enabled only when all required fields valid

#### Scenario: Form validation

**Given** customer info form with input
**When** user enters data and moves to next field
**Then** field is validated on blur
**And** error message displays if invalid
**And** error clears when corrected
**And** form cannot proceed with errors

---

### Requirement: BookingSummary MUST show complete booking details

The fourth step MUST display all booking information for review.

#### Scenario: Summary information display

**Given** step 4 of booking flow
**When** BookingSummary is rendered
**Then** selected service details are shown (name, price, duration)
**And** selected date is shown in readable format
**And** selected time is shown
**And** customer information is shown (name, email, phone)
**And** booking notes are shown if provided
**And** "Confirm Booking" button is displayed

#### Scenario: Booking confirmation

**Given** user on booking summary step
**When** user clicks "Confirm Booking"
**Then** mock booking submission occurs
**And** success message is displayed
**And** localStorage draft is cleared
**And** booking state is reset
**And** user can start new booking

---

### Requirement: Booking drafts MUST persist in localStorage

The booking system MUST save progress and allow resuming incomplete bookings.

#### Scenario: Auto-save booking draft

**Given** user progresses through booking steps
**When** user completes any step before confirmation
**Then** booking data is saved to localStorage with key 'muse-nail-booking-draft'
**And** data includes: selectedService, selectedDate, selectedTimeSlot, customerInfo, currentStep

#### Scenario: Resume booking prompt

**Given** user returns to booking page
**When** localStorage contains booking draft
**Then** prompt is displayed: "You have an incomplete booking. Resume?"
**And** if user clicks "Resume", draft data is loaded
**And** if user clicks "Start New", draft is cleared and fresh booking starts

#### Scenario: Clear draft on confirmation

**Given** user confirms booking successfully
**When** confirmation completes
**Then** 'muse-nail-booking-draft' is removed from localStorage
**And** booking state is reset to initial values

---

### Requirement: useBooking hook MUST manage booking state

A custom hook MUST centralize booking state and localStorage integration.

#### Scenario: Booking state management

**Given** BookingPage using useBooking hook
**When** hook is initialized
**Then** hook provides: currentStep, selectedService, selectedDate, selectedTimeSlot, customerInfo
**And** hook provides functions: goToNextStep, goToPrevStep, selectService, selectDate, selectTimeSlot, updateCustomerInfo, clearBooking
**And** state changes automatically save to localStorage
**And** hook checks for existing draft on initialization

---

### Requirement: Booking page MUST be accessible

The booking flow MUST be fully accessible to all users.

#### Scenario: Keyboard navigation

**Given** user navigating with keyboard
**When** user tabs through booking page
**Then** all interactive elements are reachable
**And** Enter key selects options
**And** Enter key submits forms
**And** focus indicators are visible
**And** focus moves appropriately between steps

#### Scenario: Screen reader support

**Given** user with screen reader
**When** booking page is used
**Then** step progress is announced
**And** form labels are read correctly
**And** error messages are announced
**And** confirmation success is announced
**And** all buttons have clear labels

---

### Requirement: Booking page MUST follow design constraints

All booking components MUST adhere to design system rules.

#### Scenario: No prohibited styling

**Given** booking page components
**When** components are inspected
**Then** no shadow-_ classes are used
**And** no bg-gradient-_ classes are present
**And** only transition-colors for animations
**And** only 5-color palette is used

#### Scenario: Border-radius hierarchy

**Given** booking step components
**When** border-radius is applied
**Then** service cards: rounded-xl (20px)
**And** form wrappers: rounded-xl (20px)
**And** buttons: rounded-lg (16px)
**And** input fields: rounded-lg (16px)
**And** step indicators: rounded-lg (16px)
**And** summary cards: rounded-xl (20px)
**And** proper hierarchy maintained throughout
