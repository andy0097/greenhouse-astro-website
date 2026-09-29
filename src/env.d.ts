/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />

declare namespace App {
  interface Locals {
    /** Per-request Sanity client, set by `src/middleware.ts`. */
    sanity: import("@sanity/client").SanityClient;
    siteSettings: import("@/data/site.ts").SiteSettings;
    homepage: import("@/data/homepage.ts").Homepage;
  }
}
