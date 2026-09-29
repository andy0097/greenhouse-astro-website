# Homepage — live copy snapshot (2026-09-15)

Pulled directly from Sanity (`production` dataset, `homepage` singleton) before the
copy changes requested in this session. This is what was actually live/built,
not the `copy.md` deck — kept here as a record of the prior state.

---

## Hero

- Headline (desktop): "Brands & Websites" + accent "built to be used," / "not just launched."
- Headline (mobile): "Brands and websites " + accent "built to be used" + ", not just launched"
- Description: "For small B2B teams with big plans that need to build credibility in every touchpoint. Ready to launch in 3 weeks. 2 months post-launch support."
- Primary CTA: "Book a call" (href: empty)
- Secondary CTA: "See our Work" (href: /work)

## Hero cases (video reel)

- Openstead — /work/openstead-branding-and-website-design
- Stephanus — /work/stephanus-rebrand-and-web-design
- Christ Church — /work/christ-church-brand-identity-and-flexible-website

## Work grid

Headline: "We work with companies that keep people safe, keep systems running & keep the world working. Their work is complicated. We make it clear."

Portfolio items shown: Sonus, Openstead, Christ Church, Sasta, IsoRihner, Stephanus.

## Problem / trigger band

Headline: "Build fast. Stand out from the competition."

Items:
1. Move up to mid-market
2. Build trust before the first call
3. Consistency across every touchpoint
4. Faster GTM

## Services (serviceCards — not currently rendered on the homepage, data only)

Intro eyebrow: "The greenhouse way"
Intro headline: "We build the " + accent "environment" + "." / "You do the growing."
Intro description: "Just like a greenhouse controls the climate so plants thrive in any season, we build the brand systems, website infrastructure, and growth tools your team needs to move fast and stay consistent."

1. **Brand** (01) — "We create your Brand" — "A full brand built around who you actually are. From strategy to visual system and brand voice, you get a brand that communicates clearly across every touchpoint." — Brand strategy & positioning · Visual identity & logo system · Brand voice & messaging · Design templates & guidelines — CTA: "Explore Branding →"
2. **Website** (02) — "We build your Website" — "A Webflow website built for your team, not just your launch day. Clean CMS, reusable components, and a structure your team can edit without a developer." — Webflow design & development · CMS & content architecture · SEO & performance setup · Analytics & conversion tracking — CTA: "Explore Websites →"
3. **Growth Tools** (03) — "We equip you with Growth Tools" — "AI-powered tools & automations that let your team create on-brand assets and run campaigns at full speed. All integrated into the Claude ecosystem." — LLMs integrations · AI prompt & content systems · Design asset libraries · Workflow automation setup

Services result: "Less fixing." / "More growing." — "Your team becomes autonomous. Your brand stays consistent. Your website works as hard as you do — every single day."

Services workshop: "Not sure where to start?" — "Schedule a 90 minute Website Strategy Workshop" — CTA: "Book a spot" (href: empty)

## Sprint showcase

Eyebrow: "The greenhouse way"
Headline: "They're moving fast. So we made it simple: one price, 3 weeks to build, 2 months to make it work."

Cards:
1. **Brand** — "Control the way your clients perceive you. Lead with trust and credibility to clients of any size on any touchpoint." — Positioning and messaging · Brand strategy · Logo and identity design · Design system · Brand guidelines your team will actually use · AI tools trained on your voice, so content stays on brand · Ready-made templates for decks, one-pagers and social — CTA: "Discover Brand Sprint →" (/services/branding)
2. **Website** — "Generate leads, help in sales process or attract more traffic. We tailor the website around your objective and then hand you the control." — Website strategy and structure · Custom design · Logo and identity design · Build in Webflow or custom code · CMS set up for marketers, not developers · Analytics and integrations wired in from day one · Training videos so your team knows how everything works — CTA: "Discover Website Sprint →" (/website-sprint)
3. **Engineer** — "Stop losing leads to a broken stack. Connect your website to your CRM and turn traffic into pipeline you can actually see." — Lead flow audit · CRM & website integration · Lead routing and scoring · Automated follow-up workflows · Live reporting dashboard · Documentation your team can maintain · Handover walkthrough with training — CTA: "Discover Marketing Engineering Sprint →" (/marketing-engineering-sprint)

## Testimonials header

Eyebrow: "What they say"
Headline: "Built for " + accent "small teams" + "with " + accent "big plans"

## Featured testimonial

> "Working with Greenhouse was an important part in developing a proof of concept for Openstead. The team was committed to delivering a holistic brand design & website and demonstrated a deep understanding of the project. I would be keen to work together again."

— Tim D., Founder, Openstead

---

## What actually renders on the homepage (`src/pages/index.astro`)

In order: Hero → WorkGrid → SprintShowcase → Problem → Testimonials.

The "Services" section (`serviceCards`/`servicesIntro`/`servicesResult`/`servicesWorkshop`)
exists as Sanity data and has a component (`Services.astro`) but is **not** currently
imported or rendered on the homepage.
