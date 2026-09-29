/** Homepage copy. Content lives in Sanity (the "Homepage" singleton),
 *  fetched per request — see `getHomepage` below — into the same shapes
 *  every component already imports as types. */
import type { SanityClient } from "@sanity/client";

export interface CaseItem {
  href: string;
  /** Client logo, shown centred until the card is hovered. */
  logo: { src: string; alt: string; srcset?: string; sizes?: string };
  /** Screenshot that floats up from the corner on hover. */
  preview: { src: string; alt: string; srcset?: string; sizes?: string };
}

export interface ProblemItem {
  title: string;
}

export interface ServiceCard {
  number: string;
  titleLead: string;
  titleAccent: string;
  body: string;
  items: string[];
  cta?: { href: string; label: string };
}

export interface SprintCard {
  title: string;
  description: string;
  /** A substring of `description` to render as `<strong>`, split at
   *  render time — no HTML in the copy itself. Unused on the homepage,
   *  set by the sprint pages' pricing tiers. */
  descriptionEmphasis?: string;
  deliverables: string[];
  /** Set by the sprint pages' pricing tiers; the homepage's cards leave
   *  these unset and the card renders with no price line. */
  price?: string;
  priceNote?: string;
  cta: { href: string; label: string };
  /** Not yet wired through Sanity — set per card on the homepage page
   *  component. Renders the neutral placeholder block when unset. */
  image?: { src: string; alt: string };
}

export interface PortfolioItem {
  href: string;
  image: string;
  alt: string;
  /** Wide items span both grid columns. */
  wide?: boolean;
}

export interface Testimonial {
  quote: string;
  /** Client name to embolden inside the quote, if it appears there. */
  emphasis?: string;
  author: { name: string; role: string; photo: string };
}

export interface Homepage {
  hero: {
    headlineLead: string;
    headlineAccent: string;
    headlineTail: string;
    headlineMobile: { lead: string; accent: string; tail: string };
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    splineScene: string;
  };
  heroCases: CaseItem[];
  problem: { headline: string };
  problemItems: ProblemItem[];
  workGrid: { headline: string };
  sprintShowcase: { eyebrow: string; headline: string; body?: string };
  sprintCards: SprintCard[];
  servicesIntro: {
    eyebrow: string;
    headlineLead: string;
    headlineAccent: string;
    headlineTail: string;
    headlineSecond: string;
    description: string;
    splineScene: string;
  };
  serviceCards: ServiceCard[];
  servicesResult: { label: string; headline: string; headlineSecond: string; body: string };
  servicesWorkshop: { label: string; headline: string; cta: { label: string; href: string } };
  testimonialsHeader: {
    eyebrow: string;
    headlineLead: string;
    headlineAccent: string;
    headlineSecondLead: string;
    headlineSecondAccent: string;
  };
  featuredTestimonial: Testimonial;
  portfolioItems: PortfolioItem[];
}

export async function getHomepage(client: SanityClient): Promise<Homepage> {
  return client.fetch<Homepage>(`*[_type == "homepage"][0]`);
}
