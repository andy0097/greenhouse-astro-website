import { defineField, defineType } from "sanity";

/** Matches `ServicePage` in src/data/services.ts — one document per
 *  service (branding, website, strategy-workshop, ...). */
export default defineType({
  name: "servicePage",
  title: "Service page",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "tag", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "title", title: "Browser title", type: "string" }),
    defineField({ name: "description", title: "Meta description", type: "text", rows: 2 }),
    defineField({ name: "tag", title: "Eyebrow chip", type: "string" }),
    defineField({ name: "headline", type: "text", rows: 2 }),
    defineField({ name: "headlineStrong", title: "Accented headline substring", type: "string" }),
    defineField({
      name: "stats",
      type: "array",
      of: [
        {
          type: "object",
          name: "stat",
          fields: [
            defineField({ name: "value", type: "string" }),
            defineField({ name: "label", type: "string" }),
          ],
        },
      ],
    }),
    defineField({ name: "cta", type: "link" }),
    defineField({ name: "timelineHeadline", type: "string" }),
    defineField({
      name: "steps",
      type: "array",
      of: [
        {
          type: "object",
          name: "step",
          fields: [
            defineField({ name: "number", type: "string" }),
            defineField({ name: "title", type: "string" }),
            defineField({ name: "text", type: "text", rows: 3 }),
          ],
        },
      ],
    }),
    defineField({ name: "deliverablesHeadline", type: "string" }),
    defineField({
      name: "deliverables",
      type: "array",
      of: [
        {
          type: "object",
          name: "deliverable",
          fields: [
            defineField({ name: "icon", type: "string", description: "Path under public/" }),
            defineField({ name: "title", type: "string" }),
            defineField({ name: "text", type: "text", rows: 3 }),
            defineField({ name: "tag", type: "string" }),
          ],
        },
      ],
    }),
    defineField({ name: "showWork", title: "Show work strip", type: "boolean" }),
  ],
  preview: {
    select: { title: "title", subtitle: "tag" },
  },
});
