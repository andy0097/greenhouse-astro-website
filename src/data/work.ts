/** The work index and the case studies. Content lives in Sanity, one
 *  `caseStudy` document per project — fetched per request into the same
 *  shapes `src/pages/work/[slug].astro` and `/work` already read. */
import type { SanityClient } from "@sanity/client";

export interface WorkImage {
  src: string;
  alt: string;
  srcset?: string;
  sizes?: string;
}

export interface WorkAsset extends WorkImage {
  /** Wide assets take both grid columns. */
  span: 1 | 2;
}

export interface WorkItem {
  slug: string;
  /** Project name, as it appears on the card and as the case study's h1. */
  name: string;
  /** Sector chips shown under the name. */
  tags: string[];
  /** One or two sentences on the project, shown on the /work row. */
  summary: string;
  /** What we did, as named deliverables. */
  services: string[];
  thumbnail: WorkImage;
}

export interface CaseStudy extends WorkItem {
  /** Browser title. */
  title: string;
  /** Meta description, also used for social. */
  description: string;
  /** The line the client leads with. */
  subtitle: string;
  /** Body copy, one string per paragraph. */
  body: string[];
  industry: string;
  duration: string;
  /** The project's own hero image. */
  hero: WorkImage;
  assets: WorkAsset[];
}

interface CaseStudyDoc extends Omit<CaseStudy, "slug"> {
  slug: { current: string };
}

export interface WorkData {
  items: WorkItem[];
  studies: Record<string, CaseStudy>;
}

/** One query for both shapes — the index list and the slug-keyed record —
 *  since every consumer needs one or the other of the same underlying set. */
export async function getWorkData(client: SanityClient): Promise<WorkData> {
  const docs = await client.fetch<CaseStudyDoc[]>(
    `*[_type == "caseStudy"] | order(order asc)`,
  );
  const studies: CaseStudy[] = docs.map((doc) => ({ ...doc, slug: doc.slug.current }));

  return {
    items: studies.map(({ slug, name, tags, description, services, thumbnail }) => ({
      slug,
      name,
      tags,
      summary: description,
      services: services ?? [],
      thumbnail,
    })),
    studies: Object.fromEntries(studies.map((study) => [study.slug, study])),
  };
}
