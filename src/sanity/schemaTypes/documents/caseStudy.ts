import { defineField, defineType } from "sanity";

/** Matches `CaseStudy` in src/data/work.ts — one document per project. */
export default defineType({
  name: "caseStudy",
  title: "Case study",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "name", title: "Project name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "tags", title: "Sector chips", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "thumbnail", type: "imageRef", validation: (r) => r.required() }),
    defineField({ name: "title", title: "Browser title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", title: "Meta description", type: "text", rows: 2 }),
    defineField({ name: "subtitle", title: "Lead line", type: "string" }),
    defineField({
      name: "body",
      title: "Body paragraphs",
      type: "array",
      of: [{ type: "text", rows: 4 }],
    }),
    defineField({ name: "services", title: "Deliverables", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "industry", type: "string" }),
    defineField({ name: "duration", type: "string" }),
    defineField({ name: "hero", type: "imageRef", validation: (r) => r.required() }),
    defineField({ name: "assets", title: "Gallery assets", type: "array", of: [{ type: "workAsset" }] }),
    defineField({
      name: "order",
      title: "Work-index order",
      type: "number",
      description: "Lower numbers list first on /work.",
    }),
  ],
  orderings: [
    { title: "Work-index order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "name", subtitle: "subtitle" },
  },
});
