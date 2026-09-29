/** Work page content beyond the case studies. Lives in Sanity (the "Work
 *  page" singleton) — fetched per request. */
import type { SanityClient } from "@sanity/client";

export interface GalleryImage {
  /** Sanity CDN URL — accepts `?w=` for resized variants. */
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface WorkPage {
  galleryTitle?: string;
  gallery: GalleryImage[];
}

export async function getWorkPage(client: SanityClient): Promise<WorkPage> {
  const doc = await client.fetch<WorkPage | null>(
    `*[_id == "workPage"][0]{
      galleryTitle,
      "gallery": coalesce(gallery[defined(asset)]{
        alt,
        "src": asset->url,
        "width": asset->metadata.dimensions.width,
        "height": asset->metadata.dimensions.height
      }, [])
    }`,
  );

  return { galleryTitle: doc?.galleryTitle, gallery: doc?.gallery ?? [] };
}
