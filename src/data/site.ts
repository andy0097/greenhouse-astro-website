/** Site-wide chrome: nav, footer, contact, and the two booking URLs.
 *  Content lives in Sanity (the "Site settings" singleton). Fetched once per
 *  request by `src/middleware.ts` and stashed on `Astro.locals.siteSettings`
 *  — every CTA on the site reads from there, so an edit in the Studio (or a
 *  draft, in preview mode) propagates everywhere. */
import type { SanityClient } from "@sanity/client";

export interface SiteSettings {
  discoveryCallUrl: string;
  workshopCallUrl: string;
  navCtaUrl: string;
  contactEmail: string;
  linkedinUrl: string;
  navLinks: { href: string; label: string }[];
  footerLinks: { href: string; label: string }[];
  footerLegalLinks: { href: string; label: string }[];
  footerSocialLinks: { href: string; label: string; icon: string }[];
  footerTagline: { lead: string; leadRest: string; second: string; secondRest: string };
  founder: { name: string; role: string; email: string; footerEmail: string; photo: string };
  closingCta: {
    headlineLead: string;
    headlineSecondLead: string;
    headlineAccent: string;
    body: string;
    primaryCta: { label: string; href: string };
    secondaryLabel: string;
  };
}

export async function getSiteSettings(client: SanityClient): Promise<SiteSettings> {
  return client.fetch<SiteSettings>(`*[_type == "siteSettings"][0]`);
}
