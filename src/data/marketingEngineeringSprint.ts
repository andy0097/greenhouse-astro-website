/** Marketing Engineering Sprint page copy. Content lives in Sanity (the
 *  "Marketing Engineering Sprint page" singleton) — fetched per request.
 *  Same template as the Website Sprint page, minus the work-item audience
 *  grid (swapped for a "built for" caption grid, since this sprint has no
 *  case studies of its own yet). */
import type { SanityClient } from "@sanity/client";
import type { PricingTier, SprintStep, FaqItem } from "@/data/websiteSprint.ts";
import type { ProblemItem } from "@/data/homepage.ts";

export type { PricingTier, SprintStep, FaqItem };

export interface MarketingEngineeringSprintPage {
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
  builtFor: { headline: string; items: ProblemItem[] };
  closingCta: { eyebrow: string; headline: string; body: string; cta: { label: string; href: string } };
  faqs: FaqItem[];
}

export async function getMarketingEngineeringSprintPage(
  client: SanityClient,
): Promise<MarketingEngineeringSprintPage> {
  return client.fetch<MarketingEngineeringSprintPage>(
    `*[_type == "marketingEngineeringSprintPage"][0]`,
  );
}
