/** One-off migration: pushes every src/data/*.ts literal into Sanity as
 *  the documents src/sanity/schemaTypes describes. Run once, with a write
 *  token: `SANITY_API_TOKEN=sk... npx tsx scripts/migrate-to-sanity.ts`.
 *
 *  Safe to re-run — every document uses a stable id (`createOrReplace`),
 *  so a second run overwrites rather than duplicates. */
import { sanityClient } from "../src/lib/sanity.ts";
import { getSiteSettings } from "../src/data/site.ts";
import { getHomepage } from "../src/data/homepage.ts";
import { getServicePages } from "../src/data/services.ts";
import { getWebsiteSprintPage } from "../src/data/websiteSprint.ts";
import { getWorkData } from "../src/data/work.ts";

if (!process.env.SANITY_API_TOKEN) {
  console.error("Set SANITY_API_TOKEN (a write token from sanity.io/manage) before running this.");
  process.exit(1);
}

// `src/data/*.ts` now reads from Sanity itself (this script predates that —
// see the file docstring), so this re-fetches published content and writes
// it straight back. Re-running it is a no-op unless the schema changed.
const site = await getSiteSettings(sanityClient);
const homepage = await getHomepage(sanityClient);
const servicePages = await getServicePages(sanityClient);
const websiteSprintPage = await getWebsiteSprintPage(sanityClient);
const { items: workItems, studies: caseStudies } = await getWorkData(sanityClient);

async function migrateSiteSettings() {
  await sanityClient.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    discoveryCallUrl: site.discoveryCallUrl,
    workshopCallUrl: site.workshopCallUrl,
    navCtaUrl: site.navCtaUrl,
    contactEmail: site.contactEmail,
    linkedinUrl: site.linkedinUrl,
    navLinks: site.navLinks,
    footerLinks: site.footerLinks,
    footerLegalLinks: site.footerLegalLinks,
    footerSocialLinks: site.footerSocialLinks,
    footerTagline: site.footerTagline,
    founder: site.founder,
    closingCta: site.closingCta,
  });
  console.log("✓ siteSettings");
}

async function migrateHomepage() {
  await sanityClient.createOrReplace({
    _id: "homepage",
    _type: "homepage",
    hero: homepage.hero,
    heroCases: homepage.heroCases,
    problem: homepage.problem,
    problemItems: homepage.problemItems,
    workGrid: homepage.workGrid,
    sprintShowcase: homepage.sprintShowcase,
    sprintCards: homepage.sprintCards,
    servicesIntro: homepage.servicesIntro,
    serviceCards: homepage.serviceCards,
    servicesResult: homepage.servicesResult,
    servicesWorkshop: homepage.servicesWorkshop,
    testimonialsHeader: homepage.testimonialsHeader,
    featuredTestimonial: homepage.featuredTestimonial,
    portfolioItems: homepage.portfolioItems,
  });
  console.log("✓ homepage");
}

async function migrateWebsiteSprintPage() {
  await sanityClient.createOrReplace({
    _id: "websiteSprintPage",
    _type: "websiteSprintPage",
    sprintHero: websiteSprintPage.sprintHero,
    pricingIntro: websiteSprintPage.pricingIntro,
    pricingTiers: websiteSprintPage.pricingTiers,
    timelineIntro: websiteSprintPage.timelineIntro,
    timelineSteps: websiteSprintPage.timelineSteps,
    audienceIntro: websiteSprintPage.audienceIntro,
    closingCta: websiteSprintPage.closingCta,
    faqs: websiteSprintPage.faqs,
  });
  console.log("✓ websiteSprintPage");
}

async function migrateServicePages() {
  for (const page of Object.values(servicePages)) {
    await sanityClient.createOrReplace({
      _id: `servicePage-${page.slug}`,
      _type: "servicePage",
      slug: { _type: "slug", current: page.slug },
      title: page.title,
      description: page.description,
      tag: page.tag,
      headline: page.headline,
      headlineStrong: page.headlineStrong,
      stats: page.stats,
      cta: page.cta,
      timelineHeadline: page.timelineHeadline,
      steps: page.steps,
      deliverablesHeadline: page.deliverablesHeadline,
      deliverables: page.deliverables,
      showWork: page.showWork,
    });
    console.log(`✓ servicePage ${page.slug}`);
  }
}

async function migrateCaseStudies() {
  const orderBySlug = new Map(workItems.map((item, index) => [item.slug, index]));
  for (const study of Object.values(caseStudies)) {
    await sanityClient.createOrReplace({
      _id: `caseStudy-${study.slug}`,
      _type: "caseStudy",
      slug: { _type: "slug", current: study.slug },
      name: study.name,
      tags: study.tags,
      thumbnail: study.thumbnail,
      title: study.title,
      description: study.description,
      subtitle: study.subtitle,
      body: study.body,
      services: study.services,
      industry: study.industry,
      duration: study.duration,
      hero: study.hero,
      assets: study.assets,
      order: orderBySlug.get(study.slug) ?? 0,
    });
    console.log(`✓ caseStudy ${study.slug}`);
  }
}

await migrateSiteSettings();
await migrateHomepage();
await migrateWebsiteSprintPage();
await migrateServicePages();
await migrateCaseStudies();
console.log("Done.");
