# Shared Components Capability

## Overview

Reusable UI components that provide consistent patterns across all pages of the website.

## ADDED Requirements

### Requirement: PageHeader component MUST display section titles

The PageHeader component MUST render page or section titles with consistent typography and spacing.

#### Scenario: Rendering page title only

**Given** a page needs a title
**When** PageHeader is rendered with `title` prop
**Then** the title is displayed using h1 typography scale from design tokens
**And** responsive text sizing applies (text-4xl md:text-5xl lg:text-6xl)
**And** text color is primary (`text-primary`)

#### Scenario: Rendering page title with subtitle

**Given** a page needs a title and descriptive subtitle
**When** PageHeader is rendered with `title` and `subtitle` props
**Then** title is displayed as h1
**And** subtitle is displayed below with body typography
**And** subtitle uses accent color (`text-accent`)
**And** spacing between title and subtitle is 1rem (mt-4)

---

### Requirement: LoadingSpinner MUST indicate loading state

The LoadingSpinner component MUST provide visual feedback during asynchronous operations.

#### Scenario: Displaying loading spinner

**Given** content is loading
**When** LoadingSpinner is rendered
**Then** a spinning icon is displayed using `animate-spin` utility
**And** spinner uses accent color from design tokens
**And** spinner is horizontally and vertically centered in its container
**And** spinner has `aria-label="Loading"` for accessibility

#### Scenario: Loading spinner size variants

**Given** different contexts need different spinner sizes
**When** LoadingSpinner is rendered with `size` prop ("sm" | "md" | "lg")
**Then** spinner renders at appropriate size (sm: 16px, md: 24px, lg: 32px)
**And** maintains centered positioning regardless of size

---

### Requirement: Shared components MUST follow design constraints

All shared components MUST adhere to the project's strict design rules.

#### Scenario: No prohibited styling

**Given** any shared component
**When** component is inspected
**Then** no `shadow-*` classes are present
**And** no `bg-gradient-*` classes are present
**And** no `animate-*` classes except `animate-spin` in LoadingSpinner
**And** only colors from 5-color palette are used

#### Scenario: Border-radius hierarchy maintained

**Given** a shared component with nested elements
**When** component renders with borders
**Then** parent border-radius is 4-8px larger than child border-radius
**And** all radius values are within 8px-24px range
**And** no equal radius values between parent and direct child
