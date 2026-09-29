/** Brand Sprint page copy. Content lives in Sanity (the "Brand Sprint
 *  page" singleton) — fetched per request into the same shapes the Website
 *  Sprint page's components already know how to render. */
import type { SanityClient } from "@sanity/client";
import type { PricingTier, SprintStep, FaqItem } from "@/data/websiteSprint.ts";

export type { PricingTier, SprintStep, FaqItem };

export interface BrandSprintPage {
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

export async function getBrandSprintPage(client: SanityClient): Promise<BrandSprintPage> {
  return client.fetch<BrandSprintPage>(`*[_type == "brandSprintPage"][0]`);
}
