# Contact Display Capability

## Overview

Enable visitors to contact the salon through a form and access business information including hours and location.

## ADDED Requirements

### Requirement: ContactForm MUST collect visitor inquiries

The contact form MUST allow visitors to send messages with proper validation.

#### Scenario: Contact form fields

**Given** a visitor wants to contact the salon
**When** ContactForm is rendered
**Then** form includes firstName field
**And** form includes lastName field
**And** form includes email field
**And** form includes phone field
**And** form includes message textarea
**And** form includes submit button
**And** all fields have labels

#### Scenario: Form validation

**Given** a contact form with input
**When** user submits form
**Then** email is validated with regex pattern
**And** phone is validated for format
**And** all required fields are checked
**And** validation errors display inline below fields
**And** form does not submit if errors exist

#### Scenario: Successful form submission

**Given** a contact form with valid data
**When** user submits form
**Then** mock submission occurs (console.log)
**And** success message is displayed
**And** form is cleared after success
**And** success is announced to screen readers

---

### Requirement: BusinessHours MUST display operating schedule

The BusinessHours component MUST show when the salon is open.

#### Scenario: Displaying business hours

**Given** business hours data
**When** BusinessHours component is rendered
**Then** all 7 days of week are displayed
**And** each day shows open time and close time
**And** closed days are marked as "Closed"
**And** hours are formatted consistently (e.g., "09:00 AM - 07:00 PM")

---

### Requirement: LocationMap MUST show salon location

The LocationMap component MUST display address and contact information.

#### Scenario: Location information display

**Given** contact info data
**When** LocationMap is rendered
**Then** street address is displayed
**And** city, state, zip are displayed
**And** phone number is displayed as clickable link (tel:)
**And** email is displayed as clickable link (mailto:)
**And** placeholder for map is shown (no actual map integration)

---

### Requirement: ContactPage MUST have responsive layout

The contact page MUST adapt layout based on screen size.

#### Scenario: Two-column desktop layout

**Given** contact page on desktop (>= 1024px)
**When** page is rendered
**Then** layout uses two columns (grid-cols-2)
**And** ContactForm is in left column
**And** BusinessHours and LocationMap are in right column stacked
**And** columns have gap-8 lg:gap-12

#### Scenario: Single-column mobile layout

**Given** contact page on mobile (< 1024px)
**When** page is rendered
**Then** layout uses single column
**And** components stack vertically
**And** ContactForm appears first
**And** BusinessHours appears second
**And** LocationMap appears third

---

### Requirement: Contact page MUST be accessible

The contact page MUST be fully accessible to all users.

#### Scenario: Form accessibility

**Given** contact form
**When** user navigates with keyboard
**Then** all fields are reachable with Tab key
**And** Enter key submits form
**And** focus indicators are visible
**And** labels are associated with inputs
**And** error messages are announced to screen readers
**And** required fields are indicated

#### Scenario: Semantic HTML

**Given** contact page components
**When** page is rendered
**Then** form uses <form> element
**And** inputs use proper <input> and <label> elements
**And** links use <a> elements with href
**And** sections use <section> elements

---

### Requirement: Contact page MUST follow design constraints

All contact page components MUST adhere to design system rules.

#### Scenario: No prohibited styling

**Given** contact page components
**When** components are inspected
**Then** no shadow-_ classes are used
**And** no bg-gradient-_ classes are present
**And** no complex animate-\* classes
**And** only 5-color palette is used

#### Scenario: Border-radius hierarchy

**Given** form and info card components
**When** border-radius is applied
**Then** form wrapper: rounded-xl (20px)
**And** input fields: rounded-lg (16px)
**And** submit button: rounded-lg (16px)
**And** info cards: rounded-xl (20px)
**And** parent always 4-8px larger than child
