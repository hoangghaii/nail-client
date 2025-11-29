# Services Display Capability

## Overview

Display all available nail services with detailed information to help visitors make informed booking decisions.

## ADDED Requirements

### Requirement: ServiceCard MUST display complete service information

Each service card MUST show all relevant details in a clear, scannable format.

#### Scenario: Displaying service card details

**Given** a service from the services data
**When** ServiceCard is rendered
**Then** service name is displayed as h3 heading
**And** full description text is shown
**And** price is formatted as currency with $ symbol
**And** duration is shown in "XX min" format
**And** service image loads from imageUrl
**And** "Book Now" button is displayed

#### Scenario: Service card styling

**Given** a ServiceCard component
**When** card is rendered
**Then** card has rounded-xl (20px) border-radius
**And** card has border-2 border-border (no shadow)
**And** button within card has rounded-lg (16px) border-radius
**And** image has rounded-lg or smaller radius
**And** card has hover:border-accent transition-colors
**And** parent-child radius hierarchy is maintained

---

### Requirement: ServiceList MUST organize services in responsive grid

The ServiceList component MUST display all services in a responsive grid layout.

#### Scenario: Grid responsive layout

**Given** ServicesPage with all services
**When** ServiceList is rendered
**Then** grid shows 1 column on mobile (< 640px)
**And** grid shows 2 columns on tablet (>= 768px)
**And** grid shows 3 columns on desktop (>= 1024px)
**And** grid gap is gap-6 lg:gap-8
**And** all services from servicesData are displayed

---

### Requirement: Services page MUST enable booking navigation

All service cards MUST provide direct path to booking flow.

#### Scenario: Booking CTA navigation

**Given** a service card with "Book Now" button
**When** user clicks the button
**Then** navigation to `/booking` route occurs
**And** optionally service ID is passed as query param
**And** button is keyboard accessible

---

### Requirement: Services page MUST follow design constraints

All services page components MUST adhere to design system rules.

#### Scenario: No prohibited styling

**Given** services page components
**When** components are inspected
**Then** no shadow-_ classes are used
**And** no bg-gradient-_ classes are present
**And** no animate-\* classes except hover transitions
**And** only 5-color palette is used

#### Scenario: Border-radius hierarchy

**Given** nested elements in service cards
**When** border-radius is applied
**Then** card container: rounded-xl (20px)
**And** buttons: rounded-lg (16px)
**And** images: rounded-lg (16px) or less
**And** parent always 4-8px larger than child
