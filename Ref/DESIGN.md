---
name: Monochrome Blueprint
colors:
  surface: '#f7fafd'
  surface-dim: '#d7dadd'
  surface-bright: '#f7fafd'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4f7'
  surface-container: '#ebeef1'
  surface-container-high: '#e5e8eb'
  surface-container-highest: '#e0e3e6'
  on-surface: '#181c1e'
  on-surface-variant: '#444748'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eef1f4'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#5b5f63'
  on-secondary: '#ffffff'
  secondary-container: '#dde0e5'
  on-secondary-container: '#5f6368'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#141d23'
  on-tertiary-container: '#7c858d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#e0e3e8'
  secondary-fixed-dim: '#c3c7cc'
  on-secondary-fixed: '#181c20'
  on-secondary-fixed-variant: '#43474c'
  tertiary-fixed: '#dbe4ed'
  tertiary-fixed-dim: '#bfc8d0'
  on-tertiary-fixed: '#141d23'
  on-tertiary-fixed-variant: '#3f484f'
  background: '#f7fafd'
  on-background: '#181c1e'
  surface-variant: '#e0e3e6'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.06em
  label-mono:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system delivers an architectural, wireframe-first aesthetic designed for travel utility platforms. It merges low-fidelity abstraction with high-precision execution. By stripping away chromatic distraction, the interface foregrounds functional hierarchy, user wayfinding, spatial relationships, and structural intent. 

The aesthetic is grounded in **Minimalism** with structural architectural influences: precise hairline delineations, deliberate whitespace, structured grid alignment, and typographic hierarchy. The experience evokes the clarity of an industrial blueprint, the discipline of high-end editorial layouts, and the functional clarity required for mission-critical travel logistics.

## Colors

The palette is strictly achromatic, employing deliberate value tiers to build visual contrast and hierarchy without hue:

- **Canvas & Primary Surfaces:** Pure White (`#FFFFFF`) forms the primary base, ensuring crisp wireframe contrast.
- **Secondary Surfaces & Field Fills:** Subtle grays (`#F8F9FA` for alternate panels, `#F1F3F5` for input backgrounds and structural wells).
- **Hairlines & Dividers:** Neutral gray (`#E9ECEF`) provides structural demarcation, while mid-light gray (`#CED4DA`) designates actionable wireframe boundaries and form borders.
- **Secondary & Meta Typography:** Muted charcoal (`#6C757D`) for supporting indicators, placeholders, and meta labels.
- **Primary Elements & Structural Text:** Pure Black (`#111111`) for display typography, heavy accents, and active controls; Dark Charcoal (`#212529`) for body text, primary paths, and interactive states.

Never introduce saturation or colored alerts; warnings and positive states are conveyed exclusively through iconography, stroke variance, filled versus stroked containers, and label text.

## Typography

Typography functions as the primary visual engine in this monochromatic system. Plus Jakarta Sans provides clean geometric proportions, high legibility at micro-scales, and a contemporary, balanced voice.

- **Weight Distinctions:** Use strict weight pairings—Bold/SemiBold (`700`/`600`) for structural anchor points and regular (`400`) for data fields and descriptive copy.
- **Micro-Copy & Badges:** `label-md` and `label-mono` are consistently set in uppercase with widened tracking (`+0.06em` to `+0.08em`) to mimic architectural stamp notations and boarding pass typography.
- **Numbers & Metrics:** Use tabular numbers where possible to retain strict tabular vertical alignment across travel itineraries and schedules.

## Layout & Spacing

The layout is built upon an 8pt modular grid executed via a strict fluid column framework:
- **Mobile (< 768px):** 4 fluid columns, `1rem` outer margins, `1rem` gutter. Full horizontal bleeding for wireframe itinerary segments and data blocks.
- **Tablet (768px – 1024px):** 8 fluid columns, `2rem` outer margins, `1rem` gutter. Split card structures and side-by-side flight/lodging blocks.
- **Desktop (> 1024px):** 12 fluid columns, `3rem` outer margins, `1.5rem` gutter, max-width constrained to `1280px` centered canvas.

Spacing tokens dictate rhythm:
- Use `space-xs` and `space-sm` for compact internal component structures (badge padding, tag clusters, label-to-input gap).
- Use `space-md` for standard card interior padding and form row distributions.
- Use `space-lg` and `space-xl` strictly between major utility modules (e.g., flight legs, route maps, filter sections).

## Elevation & Depth

This system avoids drop shadows and blur-based depth models entirely, achieving hierarchy strictly through **low-contrast outlines, hairline borders, and tonal layering**:

- **Hairline Definition:** All elevation tiers and boundaries rely on a `1px` border using `#E9ECEF` (subtle partition) or `#CED4DA` (active boundaries).
- **Surface Layering:**
  - **Base Canvas (Level 0):** Pure White (`#FFFFFF`).
  - **Recessed Containers (Level 1):** `#F8F9FA` fills for structural groupings, search parameter bars, and inert data zones.
  - **Elevated Modals & Flyouts (Level 2):** Pure White (`#FFFFFF`) surface framed with a crisp `1px` border of `#212529` or `#CED4DA`. No box-shadow is permitted.
- **Active & Focus Overlays:** Active cards or focused items transition their border from `#CED4DA` to `#111111` to show state change without shifting dimensions.

## Shapes

The interface employs a **Soft (Level 1)** geometric structure, maintaining an architectural, precise wireframe tone:

- **Base Components:** A minimal radius of `0.25rem` (4px) is standard across inputs, buttons, and badges.
- **Structural Modules & Cards:** Containers, itinerary clusters, and modal sheets scale to `rounded-lg` (`0.5rem` / 8px).
- **Pill Exception:** Status indicators, airport code chips, and category tags may use fully rounded pill structures (`9999px`) to create an immediate shape-based contrast against rectangular structural containers.

## Components

### Buttons & Actions
- **Primary:** Filled `#111111` background, `#FFFFFF` text, `0.25rem` radius. Hover shifts to `#212529`.
- **Secondary (Wireframe Action):** Pure `#FFFFFF` background with a `1px` solid `#CED4DA` border and `#212529` text. Hover shifts border and text to `#111111`.
- **Ghost:** Transparent background, `#212529` text, underlines on hover or interaction.
- **Sizes:** Compact (`32px` height, `space-sm` horizontal padding) and Standard (`40px` height, `space-md` horizontal padding).

### Chips, Badges & Tags
- **Filter Chips:** `#FFFFFF` background, `1px` border in `#CED4DA`, `label-md` uppercase text. When active, background fills with `#111111` and text transitions to `#FFFFFF`.
- **Status Badges:** Subtle gray fill (`#F1F3F5`), hairline border (`#E9ECEF`), `label-mono` typography. Distinguish states (e.g., "ON TIME" vs "DELAYED") through dot glyphs (`●` vs `○`) and weight rather than color.

### Form Inputs & Selectors
- **Text Inputs & Dropdowns:** Flat `#FFFFFF` or `#F8F9FA` fill, `1px` border in `#CED4DA`, `0.25rem` radius, `body-md` typography. Placeholder text in `#6C757D`. Focus state transitions the border to `1px solid #111111` with no glow.
- **Search Modules:** Compact inline segmented bars with inner `1px` vertical hairlines (`#E9ECEF`) separating origin, destination, date, and traveler count.

### Checkboxes & Radio Controls
- **Checkboxes:** `16px x 16px` squares, `1px` border (`#CED4DA`), `2px` radius. Active state: filled `#111111` with a pure white checkmark wire.
- **Radio Buttons:** `16px x 16px` circles, `1px` border (`#CED4DA`). Active state: inset `#111111` solid circular dot with 3px white gap.

### Cards & Itinerary Modules
- **Structure:** Crisp `1px` solid `#E9ECEF` perimeter, `#FFFFFF` surface, `0.5rem` radius, `space-md` internal padding.
- **Itinerary Segments:** Departures, transfers, and arrivals are connected visually with `1px` vertical or horizontal dashed lines (`#CED4DA`) and circular node icons (`8px` diameter, `#111111` fill or stroke).
- **Pricing & Summary Blocks:** Recessed `#F8F9FA` base with segmented hairline dividers separating line items and grand totals.

### Wireframe Placeholders & Utilities
- **Map Containers:** Monochromatic `#F1F3F5` canvas with a fine `#E9ECEF` coordinate grid pattern and hairline vector paths for routes.
- **Media Placeholders:** Minimal geometric crosshair or diagonal hairline with `#6C757D` framing to signify image assets without high-fidelity imagery.