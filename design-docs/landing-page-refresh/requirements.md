## Feature: Landing Page Refresh

## Components Required (shadcn)

- navigation-menu (navbar)
- sheet (mobile menu)
- separator (section dividers)
- progress (fundraising/progress bar)
- accordion (FAQs / content toggles)
- tabs (roadmap/reporting views)
- dialog (pledge confirmation/modal)
- form, input, label, button (pledge form)
- card (content containers)
- skeleton (loading for stats)

Add command:

```bash
npx shadcn@latest add @shadcn/navigation-menu @shadcn/sheet @shadcn/progress @shadcn/separator @shadcn/accordion @shadcn/tabs @shadcn/dialog
```

## Component Hierarchy

Navbar
└── navigation-menu (desktop)
└── sheet (mobile menu)

Hero Section
└── Grid (2-col on desktop, stacked on mobile)
├── Left: Headline, subhead, CTAs, trust signals
└── Right: Card
├── PledgeForm (form, input, label, button)
├── ProgressBar (progress)
└── Stats (skeleton fallback)

Below Hero Content
└── Value Props / Impact Metrics (cards + separator)
└── How it works (tabs: Overview, Timeline, Reporting)
└── Stories/Testimonials (accordion or cards)
└── In-kind Donations CTA (card + dialog/sheet for details)
└── FAQ (accordion)
└── Footer

## Content Mapping

- Landing Page (apps/web/src/app/page.tsx)

  - Hero: Concise value prop + pledge form + progress
    - From vision.md: opening paragraphs (L3-L11) and focus areas (L15-L17)
  - Trust/Operations: From vision.md (L21-L29) compressed; assessment criteria highlights
  - Roadmap/Reporting Teasers: From roadmap-reporting.md Steps 1-4 summaries
  - Timeline Highlights: From timeline.md phase headers + key milestone bullets
  - In-kind Donations Teaser: From in-kind-donations.md "What we need" + CTA
  - FAQ: Pull common questions from roadmap-reporting.md (response times, visiting, delays)

- Dedicated Pages
  - /about (apps/web/src/app/about/page.tsx): Keep org story; add expanded vision.md content
  - /updates (apps/web/src/app/updates/page.tsx): Leave as is for now
  - /contact (apps/web/src/app/contact/page.tsx): unchanged
  - /timeline (new): Full timeline.md content with monthly table
  - /reporting (new): Full roadmap-reporting.md content
  - /in-kind-donations (new): Full in-kind-donations.md content

## Sections and Copy (proposed)

- Hero Headline: "Rebuild flood-affected homes in Punjab. One pledge = one family closer to home."
- Subhead: "Transparent, trackable, and community-led recovery with Global Sikhs."
- Primary CTA: "Make a Pledge"
- Secondary CTA: "See How It Works"
- Trust Badges: "Every rupee tracked", "Bi-weekly updates", "Local teams on the ground"

## Suggested Images (placeholders)

- Hero background: Aerial shot of Punjab village with water receding (soft overlay)
- Progress/Stats: Collage of volunteers distributing materials
- How it works: Step-by-step icons (pledge → family → build → handover)
- Timeline page hero: Construction site with workers laying foundation
- Reporting page hero: Donor viewing updates on phone/WhatsApp
- In-kind donations page hero: Stacked bricks, steel bars, and cement bags neatly arranged
- Testimonials: Smiling family in front of a partially built home

## Layout Notes

- Navbar: Sticky, light blur background, left logo, center nav, right CTAs (Pledge, In-kind)
- Hero: Two-column; right pane with card containing pledge form + progress + stats
- Section rhythm: 80–120px vertical spacing, separators between major sections
- Accessibility: 4.5:1 contrast, focus states, aria labels on progress and form elements
- Performance: Lazy-load below-the-fold images; skeletons for stats

## Data/State Needs

- Progress stats: total pledges, homes funded, target homes
- Pledge form: amount, name, email/phone, consent; submission → backend (convex `pledges.ts`)
- Toasts/feedback: success, error states

## Navigation IA

- Home
- Timeline
- Reporting
- In-kind Donations
- About
- Contact

## Implementation Checklist

- Add shadcn components via CLI
- Implement `Header` with navigation-menu + sheet
- Implement `Hero` with pledge card + progress
- Add sections: Value Props, How It Works (tabs), Stories, In-kind CTA, FAQ
- Create pages: `/timeline`, `/reporting`, `/in-kind-donations`
- Wire pledge form to backend; show toasts and optimistic UI
- Add placeholder images with alt text and suggested subjects
