import type { APIRoute } from "astro";
import { SITE_URL } from "@/consts.ts";
import { getWorkData } from "@/data/work.ts";
import { isNoindexRoute } from "@/utils/seo.ts";

export const prerender = false;

/** Every page here renders per request, so `@astrojs/sitemap` (which only sees
 *  prerendered routes) would emit an empty file. Static routes are listed by
 *  hand; case studies come from Sanity. */
const STATIC_ROUTES = [
  "/",
  "/website-sprint",
  "/brand-sprint",
  "/work",
  "/legal/privacy",
  "/legal/cookie-policy",
];

const escapeXml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export const GET: APIRoute = async ({ locals }) => {
  const { items } = await getWorkData(locals.sanity);

  const paths = new Set<string>([
    ...STATIC_ROUTES,
    ...items.map(({ slug }) => `/work/${slug}`),
  ]);

  const urls = [...paths]
    .filter((path) => !isNoindexRoute(path))
    .map((path) => `  <url><loc>${escapeXml(new URL(path, SITE_URL).href)}</loc></url>`);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
