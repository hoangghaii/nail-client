# Gallery Display Capability

## Overview

Display portfolio of nail work in filterable grid with lightbox modal for full-size viewing.

## ADDED Requirements

### Requirement: GalleryItem MUST display image with hover overlay

Each gallery item MUST show image with title overlay appearing on hover.

#### Scenario: Gallery item display

**Given** a gallery item from gallery data
**When** GalleryItem is rendered
**Then** image is displayed with rounded-xl wrapper
**And** image has border border-border
**And** title overlay is hidden by default
**And** item is clickable

#### Scenario: Gallery item hover effect

**Given** a rendered gallery item
**When** user hovers over item
**Then** title overlay fades in using transition-opacity
**And** overlay shows item title
**And** no complex animations are used (opacity only)

---

### Requirement: GalleryFilter MUST enable category filtering

The filter component MUST allow users to browse gallery by category.

#### Scenario: Category filter buttons

**Given** gallery with multiple categories
**When** GalleryFilter is rendered
**Then** buttons for each category are displayed (All, Manicure, Pedicure, Nail Art, Extensions, Seasonal)
**And** active category button is highlighted
**And** buttons have rounded-lg border-radius
**And** active button has border-2 border-primary
**And** inactive buttons have border border-border

#### Scenario: Changing active category

**Given** gallery filter with active category
**When** user clicks different category button
**Then** onCategoryChange callback is called with new category
**And** gallery updates to show only items from that category
**And** "All" category shows all items

---

### Requirement: GalleryGrid MUST display items in responsive layout

The grid MUST adapt to different screen sizes appropriately.

#### Scenario: Responsive grid columns

**Given** gallery items to display
**When** GalleryGrid is rendered
**Then** grid shows 2 columns on mobile (< 640px)
**And** grid shows 3 columns on tablet (>= 640px)
**And** grid shows 4 columns on desktop (>= 1024px)
**And** grid gap is gap-4
**And** all filtered items are displayed

---

### Requirement: ImageLightbox MUST show full-size images

The lightbox modal MUST display selected image in full size with proper controls.

#### Scenario: Opening lightbox

**Given** user clicks a gallery item
**When** lightbox opens
**Then** shadcn Dialog component is used
**And** full-size image is displayed
**And** image title is shown
**And** dark backdrop overlays page
**And** close button (X icon) is visible
**And** lightbox is centered on screen

#### Scenario: Closing lightbox

**Given** open lightbox with image
**When** user presses ESC key
**Then** lightbox closes
**And** selectedImage state is cleared

**When** user clicks close button
**Then** lightbox closes

**When** user clicks backdrop (optional)
**Then** lightbox closes

#### Scenario: Lightbox accessibility

**Given** open lightbox
**When** lightbox is displayed
**Then** focus is trapped within dialog
**And** ESC key closes dialog
**And** dialog has proper ARIA attributes
**And** close button is keyboard accessible

---

### Requirement: Gallery page MUST follow design constraints

All gallery components MUST adhere to design system rules.

#### Scenario: No prohibited styling

**Given** gallery page components
**When** components are inspected
**Then** no shadow-_ classes are used
**And** no bg-gradient-_ classes are present
**And** only opacity transition for hover overlay
**And** no complex animate-\* classes
**And** only 5-color palette is used

#### Scenario: Border-radius hierarchy

**Given** gallery items with images
**When** border-radius is applied
**Then** gallery item wrapper: rounded-xl (20px)
**And** filter buttons: rounded-lg (16px)
**And** proper hierarchy maintained
