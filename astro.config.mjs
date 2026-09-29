// @ts-check
import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";
import { SITE_URL } from "./src/consts.ts";

export default defineConfig({
  site: SITE_URL,
  // SSR (not static build) so preview requests can fetch drafts and render
  // the Sanity visual-editing overlay per request — see CLAUDE.md's
  // Presentation section for why.
  output: "server",
  adapter: cloudflare(),
  integrations: [
    sanity({
      projectId: "ipxp0knf",
      dataset: "production",
      apiVersion: "2025-01-01",
      // SSR now (see `output` above) — every request re-fetches, so the
      // CDN's short cache lag doesn't matter here and freshest content wins.
      // `src/lib/sanity.ts` builds the actual per-request client; this
      // integration's own client is unused by app code.
      useCdn: false,
      studioBasePath: "/studio",
    }),
    react(),
  ],
});
