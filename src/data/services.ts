/** The service pages. Content lives in Sanity, one `servicePage` document
 *  per slug — fetched per request into the same `Record<string,
 *  ServicePage>` shape every consumer already reads.
 *
 *  Each page is the same five bands — hero, how we work, what you get, an
 *  optional work strip, and the closing CTA — so they share one route and
 *  differ only in this data. */
import type { SanityClient } from "@sanity/client";

export interface ServiceStat {
  /** The number itself: "90", "6-8", "500$". */
  value: string;
  label: string;
}

export interface ServiceStep {
  number: string;
  title: string;
  text: string;
}

export interface ServiceDeliverable {
  /** Path to the card's icon in `public/`. */
  icon: string;
  title: string;
  text: string;
  /** What kind of work it is: "Research", "Analysis", "Documentation". */
  tag: string;
}

export interface ServicePage {
  slug: string;
  /** Browser title. */
  title: string;
  /** Meta description, also used for social. */
  description: string;
  /** The chip above the headline. */
  tag: string;
  /** Full headline. */
  headline: string;
  /** The part of the headline set in the accent colour, if any. */
  headlineStrong?: string;
  stats: ServiceStat[];
  cta: { label: string; href: string };
  timelineHeadline: string;
  steps: ServiceStep[];
  deliverablesHeadline: string;
  deliverables: ServiceDeliverable[];
  /** Whether the page closes with the work strip before the CTA. */
  showWork: boolean;
}

interface ServicePageDoc extends Omit<ServicePage, "slug"> {
  slug: { current: string };
}

export async function getServicePages(client: SanityClient): Promise<Record<string, ServicePage>> {
  const docs = await client.fetch<ServicePageDoc[]>(`*[_type == "servicePage"]`);
  return Object.fromEntries(docs.map((doc) => [doc.slug.current, { ...doc, slug: doc.slug.current }]));
}
