## Goal

Add three detailed, on-brand service pages — **Digital Marketing**, **Web Development**, and **Graphics Design** — fully wired into the site with routing, breadcrumbs, and a Services dropdown in the navbar. Each page reuses the existing Dexon design system (DM Sans, dexon-yellow/green/cyan/cream palette, pill buttons, rounded cards, dark CTA accents) so it feels native to the site.

## New Pages & Routes

| Route | Page | Hero accent |
|---|---|---|
| `/services/digital-marketing` | Digital Marketing | Cream + yellow blob |
| `/services/web-development` | Web Development | Cream + green blob |
| `/services/graphics-design` | Graphics Design | Cream + cyan blob |

All three follow the **same detailed structure** so they feel cohesive but each has its own copy, icon set, stats, and accent color.

## Page Structure (every service page)

1. **Header** (existing, with new Services dropdown)
2. **Hero banner** — breadcrumb (Home / Services / Page), service badge pill, big title with yellow underline highlight, description, "Get Started" + "Back to Home" CTAs, decorative blurred blobs
3. **Overview / Intro** — two-column: large heading + checklist of key benefits on the left, illustrative image / stat card on the right
4. **What We Offer** — grid of 6 feature cards (icon, title, short description), hover lift + accent corner like the Services section on the homepage
5. **Process / How We Work** — 4-step horizontal timeline (01 → 04) with numbered circles, titles, and short descriptions
6. **Tech / Tools / Channels** strip — page-specific list (e.g. for Web Dev: React, Next.js, Node, Tailwind; for Marketing: SEO, Meta Ads, Google Ads, Email; for Graphics: Figma, Photoshop, Illustrator, After Effects), shown as pill chips
7. **Stats band** — 4 stat tiles in the dark Dexon style (e.g. "200+ Projects", "98% Client Satisfaction", etc.)
8. **Pricing / Packages** (3 tiers: Starter, Professional, Enterprise) — pricing cards with feature list and CTA, middle card highlighted in yellow
9. **FAQ** — 5 collapsible questions using the existing shadcn Accordion component
10. **CTA Section** (existing `CtaSection` reused)
11. **Footer** (existing)

## Components to add

- `src/components/services/ServicePageLayout.tsx` — wraps Header + hero banner + children + CtaSection + Footer; takes `badge`, `title`, `highlight`, `description`, `accent` props
- `src/components/services/ServiceFeatures.tsx` — 6-card features grid (props: `features[]`)
- `src/components/services/ServiceProcess.tsx` — 4-step timeline (props: `steps[]`)
- `src/components/services/ServiceStack.tsx` — pill chips strip (props: `title`, `items[]`)
- `src/components/services/ServiceStats.tsx` — dark stats band (props: `stats[]`)
- `src/components/services/ServicePricing.tsx` — 3 pricing tiers (props: `tiers[]`)
- `src/components/services/ServiceFAQ.tsx` — accordion FAQ (props: `faqs[]`)
- `src/pages/services/DigitalMarketing.tsx`
- `src/pages/services/WebDevelopment.tsx`
- `src/pages/services/GraphicsDesign.tsx`

## Wiring

- `src/App.tsx` — add three new `<Route>` entries above the catch-all
- `src/components/Header.tsx` — turn the existing "Services" item (already has `hasDropdown: true`) into a real dropdown that links to the three pages on desktop, and renders the three sub-links indented under "Services" in the mobile fullscreen menu
- `src/components/ServicesSection.tsx` (homepage) — make each of the 3 cards link to its matching service page

## Assets

Generate one hero illustration per page using `imagegen` (transparent PNG), saved under `src/assets/`:
- `service-digital-marketing.png` — phone with charts/graphs floating around
- `service-web-development.png` — laptop with code/UI on screen
- `service-graphics-design.png` — designer workspace with color palette and shapes

Use existing 3D icons (`icon-marketing.png`, `icon-development.png`, `icon-ecommerce.png`) inside feature cards where appropriate.

## Design tokens (no new colors)

Reuses existing semantic tokens only: `bg-background`, `bg-dexon-cream`, `bg-dexon-yellow`, `bg-dexon-green`, `bg-dexon-cyan`, `bg-dexon-dark`, `text-foreground`, `text-muted-foreground`, `border-border`, `bg-primary`, plus the existing rounded-3xl card pattern and yellow underline highlight.

## Notes

- Each page is fully responsive (mobile / tablet portrait + landscape / desktop) using the same `sm: md: lg: xl:` rhythm already used across the site
- Smooth scroll-to-top on route change (small `ScrollToTop` helper inside `App.tsx`)
- Mobile menu closes automatically when a service link is tapped

- Mobile menu closes automatically when a service link is tapped
