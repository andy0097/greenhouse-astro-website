import { defineMiddleware } from "astro:middleware";
import { sanityClient } from "@/lib/sanity.ts";
import { getSiteSettings } from "@/data/site.ts";
import { getHomepage } from "@/data/homepage.ts";

/** Runs on every request. Prefetches the two singletons the shared chrome
 *  (Nav, Footer) reads on every page, so `BaseLayout` and each page's own
 *  fetches don't repeat the same query. */
export const onRequest = defineMiddleware(async (context, next) => {
  const [siteSettings, homepage] = await Promise.all([
    getSiteSettings(sanityClient),
    getHomepage(sanityClient),
  ]);

  context.locals.sanity = sanityClient;
  context.locals.siteSettings = siteSettings;
  context.locals.homepage = homepage;

  return next();
});
