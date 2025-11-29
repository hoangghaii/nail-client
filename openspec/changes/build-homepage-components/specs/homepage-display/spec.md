# Homepage Display Capability

## Overview

The homepage showcases the nail salon's brand, services, and portfolio work to engage visitors and drive bookings.

## ADDED Requirements

### Requirement: Hero section MUST capture visitor attention

The hero section MUST deliver compelling brand messaging and clear calls-to-action.

#### Scenario: Displaying hero content

**Given** a visitor lands on the homepage
**When** the hero section renders
**Then** a large headline is displayed with the salon's value proposition
**And** a subheading provides supporting context
**And** headline uses h1 typography from design tokens
**And** text is responsive (text-4xl md:text-5xl lg:text-6xl)

#### Scenario: Hero call-to-action buttons

**Given** visitor wants to take action from hero
**When** hero section is displayed
**Then** primary CTA button links to `/booking` route
**And** button text is "Book Appointment" or similar
**And** button has `rounded-lg` border-radius
**And** button uses primary color scheme
**And** secondary link to `/services` is also provided
**And** clicking buttons navigates to correct routes

---

### Requirement: Services overview MUST showcase featured services

The services overview section MUST display featured services to inform visitors about offerings.

#### Scenario: Displaying featured service cards

**Given** homepage needs to highlight key services
**When** ServicesOverview component renders
**Then** 3-4 featured services are fetched using `getFeaturedServices()`
**And** services are displayed in a responsive grid
**And** grid shows 1 column on mobile, 2 on tablet, 3-4 on desktop

#### Scenario: Service card information display

**Given** a service card is rendered
**When** visitor views the card
**Then** service name is displayed as heading
**And** short description (truncated if needed) is shown
**And** price is displayed with $ symbol
**And** duration is shown in minutes format
**And** service image loads from Unsplash URL
**And** "Book Now" button links to `/booking` route

#### Scenario: Service card styling

**Given** a service card
**When** card is rendered
**Then** card has `rounded-xl` (20px) border-radius
**And** card has `border-2 border-border` (no shadow)
**And** buttons within card have `rounded-lg` (16px) radius
**And** card has `hover:border-accent transition-colors` on hover
**And** no box-shadow is applied

---

### Requirement: Featured gallery MUST display portfolio work

The gallery preview section MUST showcase the salon's best work to build trust and demonstrate quality.

#### Scenario: Displaying featured gallery items

**Given** homepage needs to show portfolio work
**When** FeaturedGallery component renders
**Then** 6-8 featured items are fetched using `getFeaturedGallery()`
**And** items are displayed in responsive grid
**And** grid shows 2 columns on mobile, 3 on tablet, 4 on desktop

#### Scenario: Gallery item interaction

**Given** a gallery item is rendered
**When** visitor hovers over item
**Then** title overlay appears with fade transition
**And** overlay uses only opacity transition (no complex animations)
**And** image maintains rounded-xl wrapper
**And** clicking item has no action (lightbox is in Gallery page only)

#### Scenario: Gallery navigation

**Given** visitor wants to see full gallery
**When** FeaturedGallery section is displayed
**Then** "View Full Gallery" link is shown below grid
**And** link navigates to `/gallery` route
**And** link uses accent color with hover effect

---

### Requirement: Homepage MUST have consistent layout and spacing

The homepage MUST have consistent spacing and responsive layout patterns.

#### Scenario: Section spacing and containers

**Given** homepage with multiple sections
**When** page is rendered
**Then** each section has vertical padding (py-12 md:py-16 lg:py-20)
**And** content uses container pattern (max-w-7xl mx-auto px-4 sm:px-6 lg:px-8)
**And** sections have subtle borders or separators if needed

#### Scenario: Homepage responsive behavior

**Given** homepage on different screen sizes
**When** viewport width changes
**Then** layout adapts to mobile (< 640px), tablet (768px), desktop (1280px+)
**And** text scales appropriately at each breakpoint
**And** grids reflow to appropriate column counts
**And** spacing adjusts using responsive utilities

---

### Requirement: Homepage MUST be accessible

The homepage MUST be accessible to all users including those using assistive technologies.

#### Scenario: Semantic HTML structure

**Given** homepage content
**When** page is rendered
**Then** hero uses `<section>` element with h1 heading
**And** services overview uses `<section>` with h2 heading
**And** gallery preview uses `<section>` with h2 heading
**And** heading hierarchy is logical (h1 > h2, no skipping levels)

#### Scenario: Keyboard navigation

**Given** user navigating with keyboard
**When** user presses Tab key
**Then** focus moves through interactive elements in logical order
**And** focus indicators are visible
**And** Enter key activates buttons and links
**And** all CTAs are keyboard accessible

#### Scenario: Image accessibility

**Given** images on homepage
**When** images are rendered
**Then** all images have descriptive `alt` attributes
**And** alt text describes the image content meaningfully
**And** loading states are communicated to screen readers

---

### Requirement: Homepage MUST follow design constraints

All homepage components MUST follow the project's strict design system.

#### Scenario: No prohibited styling on homepage

**Given** any homepage component
**When** component styles are inspected
**Then** no `shadow-*` classes are used
**And** no `bg-gradient-*` classes (except hero background if necessary)
**And** no `animate-*` classes except hover transitions
**And** only 5-color palette is used throughout

#### Scenario: Border-radius hierarchy on homepage

**Given** nested elements on homepage (cards, buttons, images)
**When** border-radius is applied
**Then** hero section background (if any): rounded-2xl (24px)
**And** service cards: rounded-xl (20px)
**And** buttons within cards: rounded-lg (16px)
**And** gallery item wrappers: rounded-xl (20px)
**And** parent radius always 4-8px larger than child
