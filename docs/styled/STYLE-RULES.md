# STYLE-RULE.md

## Table of Contents

1. [Core Design Principles](#1-core-design-principles)
2. [Color Palette](#2-color-palette)
3. [Typography](#3-typography)
4. [UI/UX Rules: Border Hierarchy & Radius](#4-uiux-rules-border-hierarchy--radius)
5. [Component Specifics & Layout](#5-component-specifics--layout)
6. [Key Implementation Rules](#6-key-implementation-rules)
7. [Quick Reference: Common Patterns](#7-quick-reference-common-patterns)
8. [Color Reference Table](#8-color-reference-table)
9. [Accessibility Checklist](#9-accessibility-checklist)

---

## 1. Core Design Principles

- **Vibe:** Luxurious, cozy, feminine, clean, modern, and organic.
- **The "No Shadow" Rule:** Do NOT use `box-shadow` or drop shadows on any element. Depth must be achieved solely through the use of borders (strokes) and distinct background layers.
- **Softness over Rigidity:** Avoid sharp 90-degree corners and rigid rectangular blocks. Use moderate border radii and organic shapes for backgrounds to create softness.
- **Color Usage:** Solid colors only. Do not use color gradients.

---

## 2. Color Palette

The palette is composed of warm tones suitable for a nail and beauty theme.

| Role                 | Color Name   | HEX Code  | Usage                                                |
| :------------------- | :----------- | :-------- | :--------------------------------------------------- |
| **Background**       | Pale Cream   | `#F9F5F2` | Main website background (avoid pure white).          |
| **Primary Brand**    | Dusty Rose   | `#D48C84` | Buttons, footer background, key accents.             |
| **Secondary Accent** | Soft Gold    | `#CFAE88` | Highlights, gallery image borders, premium elements. |
| **Text (Heading)**   | Warm Sepia   | `#4A3F3F` | Main titles, highly readable but softer than black.  |
| **Text (Body)**      | Warm Taupe   | `#786B6B` | Paragraph text, secondary information.               |
| **Standard Border**  | Pale Pinkish | `#EBDAD3` | Subtle borders for cards and sections.               |

---

## 3. Typography

- **Headings:** Modern Serif (e.g., _Playfair Display_ or similar). Should have contrast between thick and thin strokes for elegance.
- **Body Text:** Clean Sans-serif (e.g., _Montserrat_ or _Lato_). Highly readable.

---

## 4. UI/UX Rules: Border Hierarchy & Radius

This is the most critical rule set for replacing shadows.

### The Golden Rule of Radius

The `border-radius` of a parent container MUST be larger than the `border-radius` of its child items.

- **Visual formula:** `Parent Radius ≈ Child Radius + Padding Size`

### Standard Radius Sizes

Keep curves moderate to maintain a modern feel; avoid excessively round "pill" shapes for large containers.

- **Level 1: Large Sections / Containers (Parents)**
  - **Radius:** 24px - 40px
  - _Usage:_ Main section backgrounds, the footer top corners, large image wrappers.
- **Level 2: Cards / Inner Containers (Children)**
  - **Radius:** 16px - 24px
  - _Usage:_ Service cards, pricing tables, gallery item frames.
- **Level 3: Elements / Buttons (Grandchildren)**
  - **Radius:** 8px - 12px
  - _Usage:_ CTAs, form inputs, small internal thumbnails.

### Implementation Guide

| Level | Element Type      | Radius Class                         | Border   | Padding     | Usage                  |
| ----- | ----------------- | ------------------------------------ | -------- | ----------- | ---------------------- |
| 1     | Section Container | `rounded-[40px]` or `rounded-[32px]` | `border` | `p-8`       | Main sections, footer  |
| 2     | Card              | `rounded-[24px]` or `rounded-[20px]` | `border` | `p-6`       | Service cards, pricing |
| 3     | Element           | `rounded-[12px]` or `rounded-[16px]` | `border` | `p-4`       | Images inside cards    |
| 4     | Button/Input      | `rounded-[12px]` or `rounded-sm`     | optional | `px-6 py-3` | CTAs, form fields      |

### Example Hierarchy

```tsx
// Level 1: Section
<section className="rounded-[32px] border border-border bg-background p-8">
  {/* Level 2: Card */}
  <div className="rounded-[24px] border border-border bg-white p-6">
    {/* Level 3: Image */}
    <img src="/image.jpg" alt="Service" className="rounded-[16px] w-full" />

    {/* Level 4: Button */}
    <button className="rounded-[12px] bg-primary text-primary-foreground px-6 py-3">
      Book Now
    </button>
  </div>
</section>
```

---

## 5. Component Specifics & Layout

### Header & Hero Section

- **Structure:** Do NOT use a rigid rectangular navigation bar.
- **Background:** Use a large, organic "blob" shape in the background color (`#F9F5F2`) that occupies the top area, with a gently curved bottom edge.
- **Hero Image:** The main image should be masked into an organic, non-rectangular shape to enhance softness.

### Buttons (CTA)

- **Style:** Solid fill (Primary Brand Color: `#D48C84`).
- **Radius:** Moderate (approx. 12px). No shadow. White text.

### Cards (e.g., Service Section)

- **Parent Container:** Use a large radius (e.g., 32px) with a subtle 1px border in the Standard Border color (`#EBDAD3`).
- **Child Cards:** Inside the parent, individual cards have white backgrounds, smaller radii (e.g., 16px), and their own 1px Standard Borders. This layering replaces the need for shadows.

### Gallery Section (Modern Grid)

- **Layout:** Modern masonry or staggered grid.
- **Image Treatment (Crucial):** Do not display naked images.
  - Wrap every image in a "frame".
  - **Frame Style:** Thick border (e.g., 2px) using the Secondary Accent color (Soft Gold: `#CFAE88`).
  - **Frame Radius:** Moderate (e.g., 20px). The image inside must be cropped to match this radius.

### Feature Imagery (e.g., About Section)

- To create interest without shadows, use an **Offset Border** effect.
  - Place an image with a large radius (32px).
  - Place a solid border shape (using Primary or Secondary color) behind it, slightly shifted in position, to create a graphical "pop".

### Footer

- **Background:** Solid fill using the Primary Brand color (`#D48C84`) for a strong anchor.
- **Shape:** Apply large rounded corners (e.g., 32px) to the top-left and top-right of the footer section to blend with the organic theme.
- **Text:** Light text (cream or white) for contrast.

---

## 6. Key Implementation Rules

### ✅ DO

1. **Always use border layering** - Parent and child both get borders
2. **Maintain radius hierarchy** - Parent radius > Child radius
3. **Use solid colors only** - No gradients
4. **Frame all images** - Wrap in border containers
5. **Use `clip-path` for organic shapes** - Hero sections, backgrounds
6. **Apply `focus-ring` class** - For keyboard accessibility

### ❌ DON'T

1. **Never use shadow utilities** - `shadow-sm`, `shadow-md`, `drop-shadow-*`
2. **Never use naked images** - Always wrap in frame containers
3. **Never use gradients** - `bg-gradient-to-*`
4. **Never use sharp corners on large containers** - Always use rounded corners
5. **Never violate radius hierarchy** - Child radius must be smaller
6. **Never use pure white** - Use cream (`bg-background`)

---

## 7. Quick Reference: Common Patterns

```tsx
/* ==================== CONTAINERS ==================== */

// Large Section Container
<section className="rounded-[32px] border border-border bg-background p-8"/>

// Card inside Section
<div className="rounded-[24px] border border-border bg-white p-6"/>

/* ==================== BUTTONS ==================== */

// Primary CTA
<button className="rounded-[12px] bg-primary text-primary-foreground px-6 py-3 hover:bg-primary/90 focus-ring"/>

// Secondary CTA
<button className="rounded-[12px] bg-secondary text-secondary-foreground px-6 py-3 hover:bg-secondary/90 focus-ring"/>

// Outline Button
<button className="rounded-[12px] border border-border bg-background px-6 py-3 hover:bg-muted focus-ring"/>

/* ==================== IMAGES ==================== */

// Gold-Framed Image
<div className="rounded-[20px] border-2 border-secondary p-2 bg-white">
  <img src="/image.jpg" className="rounded-[16px] w-full" />
</div>

// Primary-Framed Image
<div className="rounded-[20px] border-2 border-primary p-2 bg-white">
  <img src="/image.jpg" className="rounded-[16px] w-full" />
</div>

// Offset Border Effect
<div className="relative">
  <div className="absolute -bottom-4 -right-4 w-full h-full rounded-[32px] bg-secondary" />
  <img src="/image.jpg" className="relative rounded-[32px] border-2 border-primary" />
</div>

/* ==================== ORGANIC SHAPES ==================== */

// Hero Background Blob
<div style={{ clipPath: "ellipse(100% 85% at 50% 0%)" }} className="bg-background"/>

// Organic Image Mask
<img
  src="/hero.jpg"
  className="rounded-[40px]"
  style={{ clipPath: "ellipse(95% 100% at 50% 50%)" }}
/>

/* ==================== TYPOGRAPHY ==================== */

// H1 Heading
<h1 className="font-serif text-5xl lg:text-6xl font-bold tracking-tight text-foreground"/>

// H2 Heading
<h2 className="font-serif text-4xl lg:text-5xl font-semibold text-foreground"/>

// Body Text
<p className="font-sans text-base lg:text-lg leading-relaxed text-muted-foreground"/>
```

---

## 8. Color Reference Table

| CSS Variable         | Tailwind Class                    | Hex Approximation | Usage               |
| -------------------- | --------------------------------- | ----------------- | ------------------- |
| `--color-cream`      | `bg-cream` `text-cream`           | `#F9F5F2`         | Main background     |
| `--color-dusty-rose` | `bg-primary` `text-primary`       | `#D48C84`         | Primary brand color |
| `--color-soft-gold`  | `bg-secondary` `text-secondary`   | `#CFAE88`         | Accent, frames      |
| `--color-warm-sepia` | `bg-foreground` `text-foreground` | `#4A3F3F`         | Headings            |
| `--color-warm-taupe` | `text-muted-foreground`           | `#786B6B`         | Body text           |
| `--color-pale-pink`  | `border-border` `bg-muted`        | `#EBDAD3`         | Borders             |

---

## 9. Accessibility Checklist

```tsx
// ✅ Contrast Ratios (WCAG AAA)
const textOnPrimary = "text-primary-foreground";        // White on Dusty Rose
const textOnBackground = "text-foreground";             // Warm Sepia on Cream
const textOnMuted = "text-muted-foreground";            // Warm Taupe on Pale Pink

// ✅ Focus States (No shadows allowed)
const focusClasses = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

// ✅ Semantic HTML
<button aria-label="Book appointment">Book Now</button>
<img src="/image.jpg" alt="Descriptive text" />

// ✅ Keyboard Navigation
<a href="#services" className="focus-ring">Services</a>
```

**End of Style Rule Document**
