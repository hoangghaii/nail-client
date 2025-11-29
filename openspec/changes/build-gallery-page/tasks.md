# Implementation Tasks

## Phase 1: Gallery Components

- [ ] Create `src/components/gallery/` directory
- [ ] Build GalleryItem component
  - Props: item (GalleryItem type), onClick handler
  - Display image with rounded-xl wrapper
  - Show title overlay on hover (opacity transition only)
  - Overlay fades in on hover with transition-opacity
  - Image is clickable, calls onClick with item
  - Rounded-xl (20px) border-radius
  - Border: border border-border
  - Hover effect: overlay visible
  - Verify: Only opacity animation used
- [ ] Build GalleryFilter component
  - Props: activeCategory, onCategoryChange
  - Display category buttons/tabs (All, Manicure, Pedicure, Nail Art, Extensions, Seasonal)
  - Active category highlighted with different styling
  - Buttons have rounded-lg border-radius
  - Active: border-2 border-primary, Inactive: border border-border
  - Accessible: aria-label, keyboard navigation
  - Verify: Filter buttons styled correctly
- [ ] Build GalleryGrid component
  - Props: items (GalleryItem[]), onItemClick
  - Display items in responsive grid
  - Grid: grid-cols-2 sm:grid-cols-3 lg:grid-cols-4
  - Gap: gap-4
  - Render GalleryItem for each item
  - Verify: Grid responds at breakpoints
- [ ] Build ImageLightbox component
  - Use shadcn Dialog component
  - Props: item (GalleryItem | null), onClose
  - Show full-size image when item provided
  - Display title below image
  - Dark backdrop (Dialog overlay)
  - Close button (X icon) in top-right
  - ESC key closes dialog (built into Dialog)
  - Optional: Click backdrop to close
  - Verify: Dialog opens/closes smoothly, keyboard accessible

## Phase 2: GalleryPage Assembly

- [ ] Update `src/pages/GalleryPage.tsx`
  - Import PageHeader component
  - Add state: activeCategory, selectedImage
  - Import GalleryFilter, GalleryGrid, ImageLightbox
  - Fetch filtered items: getGalleryByCategory(activeCategory)
  - Handle category change
  - Handle image click (set selectedImage)
  - Handle lightbox close (set selectedImage to null)
  - Layout: PageHeader, GalleryFilter, GalleryGrid, ImageLightbox
  - Container pattern (max-w-7xl mx-auto px-4 sm:px-6 lg:px-8)
  - Section spacing (py-12 md:py-16 lg:py-20)
  - Verify: Filtering works, lightbox opens on click

## Phase 3: Design Verification

- [ ] Verify no prohibited styling
  - Check no shadow-\* classes
  - Check no bg-gradient-\* classes
  - Check only opacity transition for overlay (no complex animations)
- [ ] Verify border-radius hierarchy
  - Gallery items: rounded-xl (20px)
  - Filter buttons: rounded-lg (16px)
  - Images maintain proper radius
- [ ] Verify color palette (5 colors only)

## Phase 4: Responsive Testing

- [ ] Test mobile (375px): 2 column grid
- [ ] Test tablet (768px): 3 column grid
- [ ] Test desktop (1280px): 4 column grid
- [ ] Test lightbox on mobile (full screen)
- [ ] Verify images load and display properly

## Phase 5: Accessibility

- [ ] GalleryFilter keyboard accessible (Tab, Enter)
- [ ] Gallery items keyboard accessible
- [ ] Lightbox closes with ESC key
- [ ] All images have alt attributes
- [ ] Focus management in lightbox (trap focus)
- [ ] Semantic HTML (section, button, img)
- [ ] ARIA labels on buttons and dialog

## Phase 6: Interaction Testing

- [ ] Click each filter category - grid updates
- [ ] Click gallery item - lightbox opens
- [ ] Click lightbox close button - lightbox closes
- [ ] Press ESC - lightbox closes
- [ ] Click backdrop - lightbox closes (if implemented)
- [ ] Navigate with keyboard only

## Validation

- [ ] Run `npm run lint` - no errors
- [ ] Run `npm run build` - no TypeScript errors
- [ ] All categories filter correctly
- [ ] Lightbox opens with correct image
- [ ] Images load from Unsplash
- [ ] Design constraints verified
- [ ] Keyboard navigation works
