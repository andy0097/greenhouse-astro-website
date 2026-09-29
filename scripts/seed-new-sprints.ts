/** One-off seed: pushes the Brand Sprint page and Marketing Engineering
 *  Sprint page content into Sanity, matching the schemas at
 *  src/sanity/schemaTypes/documents/{brandSprintPage,marketingEngineeringSprintPage}.ts.
 *  Also points the nav's "Brand Sprint" link at the new dedicated page.
 *  Does not add a Marketing Engineering nav link — that tab was removed
 *  from the navbar on request; the sprint page itself still exists,
 *  just unlinked from nav.
 *
 *  Run once, with a write token: `SANITY_API_TOKEN=sk... npx tsx scripts/seed-new-sprints.ts`
 *
 *  Safe to re-run — both documents use a stable id (`createOrReplace`), and
 *  the nav patch only appends/updates entries by href, so a second run
 *  overwrites rather than duplicates. Copy sourced from content/copy.md;
 *  update the Studio afterwards for anything Andrei wants to tune (in
 *  particular the Marketing Engineering FAQ answers and process subhead,
 *  which are still the deck's lorem ipsum placeholders). */
import { sanityClient } from "../src/lib/sanity.ts";

if (!process.env.SANITY_API_TOKEN) {
  console.error("Set SANITY_API_TOKEN (a write token from sanity.io/manage) before running this.");
  process.exit(1);
}

async function seedBrandSprintPage() {
  await sanityClient.createOrReplace({
    _id: "brandSprintPage",
    _type: "brandSprintPage",
    sprintHero: {
      tag: "Brand Sprint",
      headline: "A brand that gives your team confidence in every room.",
      description: "For teams whose brand lives in five places and matches in none.",
      offerProof: "3 weeks · $8,000 · 2 months support · AI voice tools included",
      cta: { label: "Walk Through the Sprint", href: "" },
    },
    pricingIntro: {
      headline: "The brand sprint",
      body: "One price, one outcome. No surprises.",
    },
    pricingTiers: [
      {
        icon: "rocket",
        title: "Brand Sprint",
        description:
          "A 3-week sprint that gives your team a brand system — and the AI tools to run it — with no agency lock-in.",
        descriptionEmphasis: "3-week",
        price: "$8,000",
        items: [
          "Brand strategy & positioning",
          "Logo & visual identity system",
          "Typography & color system",
          "Tone & voice guide",
          "Brand guidelines & design system",
          "AI brand assistant, trained to your voice and guidelines",
          "AI workflows connected to your existing tools",
          "Custom automations that save your team time",
          "2 months post-launch support",
        ],
        cta: { label: "Walk Through the Sprint", href: "" },
        featured: true,
      },
    ],
    timelineIntro: {
      headline: "Three weeks, one client at a time, a brand ready to run.",
      body: "We take one client at a time, so your sprint is the only thing on the desk. Every sprint ends with two months of post-launch support, and you can move to a retainer after that if it's earning its keep.",
    },
    timelineSteps: [
      {
        week: "Week 1",
        tabLabel: "Strategy & Voice",
        title: "Brand strategy & positioning, tone & voice",
        text: "We learn your business, your buyers, and where your brand currently breaks down across touchpoints. Then we set the positioning and voice everything else in the sprint builds on.",
        outputs: ["Brand strategy", "Positioning statement", "Tone & voice guide"],
      },
      {
        week: "Week 2",
        tabLabel: "Visual Identity",
        title: "Visual identity & design system",
        text: "We design the logo, typography, and color system, then assemble them into a design system your team — or ours — can build from consistently.",
        outputs: ["Logo & visual identity system", "Typography & color system", "Brand guidelines"],
      },
      {
        week: "Week 3",
        tabLabel: "Assets & Automation",
        title: "Asset design + workflow automations",
        text: "We design your core asset templates and set up the AI brand assistant and workflows, trained to your voice and connected to the tools your team already uses.",
        outputs: ["Asset templates", "AI brand assistant", "AI workflows & automations"],
      },
      {
        week: "Next 2 months",
        tabLabel: "Support",
        title: "Post-launch support",
        text: "We're on call for fixes and small changes while your team settles in, with weekly check-ins and monthly optimization.",
        outputs: ["2 months post-launch support"],
      },
    ],
    audienceIntro: {
      eyebrow: "Brands for",
      headline: "Small B2B teams whose brand doesn't match across touchpoints.",
      body: "Deck, site, and sales materials built at different times by different people — and it shows the moment a buyer looks closely.",
    },
    closingCta: {
      eyebrow: "One client at a time",
      headline: "Ready to build a brand your team can run?",
      body: "Book a free call and we'll tell you honestly whether a sprint is right for you.",
      cta: { label: "Walk Through the Sprint", href: "" },
    },
    faqs: [
      {
        question: "Why one client at a time?",
        answer:
          "Your sprint is the only thing on the desk. We don't split attention across five accounts, so the three weeks move at the pace we quote.",
      },
      {
        question: "What happens after the 2 months of support end?",
        answer:
          "Nothing breaks — your brand system, templates, and AI assistant keep running on their own. If you want ongoing work after that, you can move to a retainer.",
      },
      {
        question: "Can my team use the AI brand assistant without us?",
        answer:
          "Yes. It's trained to your voice and guidelines before handover, and we walk your team through it so they can run it independently.",
      },
      {
        question: "Do you design the website too?",
        answer:
          "That's the Website Sprint — a separate 3-week, $8,000 sprint. Some teams run both; there's no combined price yet, so each is quoted standalone.",
      },
    ],
  });
  console.log("✓ brandSprintPage");
}

async function seedMarketingEngineeringSprintPage() {
  await sanityClient.createOrReplace({
    _id: "marketingEngineeringSprintPage",
    _type: "marketingEngineeringSprintPage",
    sprintHero: {
      tag: "Marketing Engineering Sprint",
      headline: "A website that actually feeds your sales team.",
      description:
        "Leads falling through the cracks, manual CSV exports, no visibility into what's converting — we fix the plumbing between your site and your sales team.",
      offerProof: "1–2 weeks · €3,500–4,500 · one-off",
      cta: { label: "Walk Through the Sprint", href: "" },
    },
    pricingIntro: {
      headline: "The Marketing Engineering Sprint",
      body: "One price, one outcome: a stack that works.",
    },
    pricingTiers: [
      {
        icon: "rocket",
        title: "Marketing Engineering Sprint",
        description:
          "A 1-2 week sprint that connects your website to your CRM and turns traffic into pipeline you can actually see.",
        descriptionEmphasis: "1-2 week",
        price: "€3,500–4,500",
        priceNote: "one-off",
        items: [
          "Lead flow audit",
          "CRM & website integration",
          "Automated follow-up workflows",
          "Live reporting dashboard",
          "Documentation & handover training",
        ],
        cta: { label: "Walk Through the Sprint", href: "" },
        featured: true,
      },
    ],
    timelineIntro: {
      headline: "One to two weeks, stack sorted.",
      // [OPEN] Still the copy deck's lorem ipsum placeholder — swap in the
      // Studio once Andrei writes the real subhead.
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    timelineSteps: [
      {
        week: "Days 1–2",
        tabLabel: "Audit",
        title: "Audit",
        text: "We map your current lead flow end to end — from form fill to CRM to sales follow-up — and find exactly where leads are getting lost or handled manually.",
        outputs: ["Lead flow map", "Drop-off diagnosis"],
      },
      {
        week: "Days 3–7",
        tabLabel: "Build",
        title: "Build",
        text: "We connect your website to your CRM, set up lead routing rules, and build basic scoring so the right leads reach the right person, fast.",
        outputs: ["CRM & website integration", "Lead routing rules", "Basic lead scoring"],
      },
      {
        week: "Days 8–10",
        tabLabel: "Automate & Report",
        title: "Automate & report",
        text: "We build 2–3 automated workflows (alerts, enrichment, follow-up triggers) and a live dashboard so you can see what's converting without digging through three tools.",
        outputs: ["2–3 automated workflows", "Live reporting dashboard"],
      },
      {
        week: "Handover",
        tabLabel: "Handover",
        title: "Handover",
        text: "We close things out with a Loom walkthrough and documentation, so the system runs without you — no agency lock-in.",
        outputs: ["Loom walkthrough", "Documentation"],
      },
    ],
    builtFor: {
      headline: "Built for teams like this.",
      items: [
        { title: "Leads stuck in your inbox" },
        { title: "A CRM nobody trusts" },
        { title: "No idea which channel converts" },
        { title: "Manual exports between tools" },
        { title: "Sales chasing marketing for data" },
        { title: "Growing teams outgrowing spreadsheets" },
      ],
    },
    closingCta: {
      eyebrow: "One stack, no leaks",
      headline: "Ready to stop losing leads to a broken stack?",
      body: "Book a free intro call and we'll tell you honestly whether a sprint is right for you.",
      cta: { label: "Walk Through the Sprint", href: "" },
    },
    // [OPEN] FAQ answers are still the copy deck's lorem ipsum placeholders
    // — swap in the Studio once Andrei writes the real answers.
    faqs: [
      {
        question: "Which CRMs or tools do you work with?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius enim in eros elementum tristique, at dictum arcu.",
      },
      {
        question: "Do I need a new website first?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius enim in eros elementum tristique, at dictum arcu.",
      },
      {
        question: "What if my stack is a mess right now?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius enim in eros elementum tristique, at dictum arcu.",
      },
      {
        question: "Can this run alongside the Website Sprint?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius enim in eros elementum tristique, at dictum arcu.",
      },
    ],
  });
  console.log("✓ marketingEngineeringSprintPage");
}

async function patchNavLinks() {
  const settings = await sanityClient.fetch<{ navLinks?: { href: string; label: string }[] }>(
    `*[_type == "siteSettings"][0]{navLinks}`,
  );
  const navLinks = settings?.navLinks ?? [];

  // Repoint the existing "Brand Sprint" entry (currently /services/branding)
  // at the new dedicated page. The Marketing Engineering nav entry was
  // removed from the navbar on request — keep it out on re-runs too.
  const nextNavLinks = navLinks
    .filter((link) => link.href !== "/marketing-engineering-sprint")
    .map((link) =>
      link.label === "Brand Sprint" ? { href: "/brand-sprint", label: "Brand Sprint" } : link,
    );

  await sanityClient.patch("siteSettings").set({ navLinks: nextNavLinks }).commit();
  console.log("✓ siteSettings.navLinks", nextNavLinks);
}

await seedBrandSprintPage();
await seedMarketingEngineeringSprintPage();
await patchNavLinks();
console.log("Done.");
