import { createClient } from "@sanity/client";

/** The one Sanity client: used directly by the one-off migration script
 *  (writes, outside Vite, so it can't use the `sanity:client` virtual
 *  module @sanity/astro provides to Astro files) and as the per-request
 *  published-read client every page gets via `src/middleware.ts`. */
export const sanityClient = createClient({
  projectId: "ipxp0knf",
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});
