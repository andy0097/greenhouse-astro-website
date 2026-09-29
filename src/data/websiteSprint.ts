/** Website Sprint page copy. Content lives in Sanity (the "Website Sprint
 *  page" singleton) — fetched per request into the same shapes every
 *  component already imports. */
import type { SanityClient } from "@sanity/client";

export interface PricingTier {
  icon: "calendar" | "rocket";
  title: string;
  description: string;
  /** A substring of `description` to render as `<strong>`, split at
   *  render time — no HTML in the copy itself. */
  descriptionEmphasis?: string;
  price: string;
  priceNote?: string;
  items: string[];
  cta: { label: string; href: string };
  /** The featured tier gets the brand-colour border. */
  featured?: boolean;
}

export interface SprintStep {
  /** Eyebrow above the title — "Week 1", "Next 2 months", etc. */
  week: string;
  /** Short label for the tab itself. */
  tabLabel: string;
  title: string;
  text: string;
  /** Named deliverables for this step — pulled from the Full Website
   *  Sprint tier above, never invented here. */
  outputs: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface WebsiteSprintPage {
  sprintHero: {
    tag: string;
    headline: string;
    description: string;
    offerProof: string;
    cta: { label: string; href: string };
  };
  pricingIntro: { headline: string; body: string };
  pricingTiers: PricingTier[];
  timelineIntro: { headline: string; body: string };
  timelineSteps: SprintStep[];
  audienceIntro: { eyebrow: string; headline: string; body: string };
  closingCta: { eyebrow: string; headline: string; body: string; cta: { label: string; href: string } };
  faqs: FaqItem[];
}

export async function getWebsiteSprintPage(client: SanityClient): Promise<WebsiteSprintPage> {
  return client.fetch<WebsiteSprintPage>(`*[_type == "websiteSprintPage"][0]`);
}
