/** Site name. Appended to every page title and used as `og:site_name`. */
export const SITE_NAME = "Greenhouse";
/** Fallback meta description for pages that don't set their own. */
export const SITE_DESCRIPTION =
  "We build the brand systems, website infrastructure, and growth tools your team needs to move fast and stay consistent.";
/** Canonical origin. Resolves canonical URLs, social images, and the sitemap. */
export const SITE_URL = "https://ghdesign.studio";
/** BCP 47 locale tag used to format dates and numbers. */
export const SITE_LOCALE = "en-US";
/**
 * Routes kept out of search results. Each is excluded from the sitemap and
 * served with a `robots: noindex, nofollow` tag, so the two can't disagree.
 */
export const NOINDEX_ROUTES: string[] = ["/404", "/animations"];
