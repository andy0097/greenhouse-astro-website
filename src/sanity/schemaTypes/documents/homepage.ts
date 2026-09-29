import { defineField, defineType } from "sanity";

const caseItem = {
  type: "object" as const,
  name: "caseItem",
  fields: [
    defineField({ name: "href", type: "string" }),
    defineField({ name: "logo", type: "imageRef" }),
    defineField({ name: "preview", type: "imageRef" }),
  ],
};

/** Singleton — matches src/data/homepage.ts. One document, id "homepage". */
export default defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      type: "object",
      fields: [
        defineField({ name: "headlineLead", type: "string" }),
        defineField({ name: "headlineAccent", type: "string" }),
        defineField({ name: "headlineTail", type: "string" }),
        defineField({
          name: "headlineMobile",
          type: "object",
          fields: [
            defineField({ name: "lead", type: "string" }),
            defineField({ name: "accent", type: "string" }),
            defineField({ name: "tail", type: "string" }),
          ],
        }),
        defineField({ name: "description", type: "text", rows: 2 }),
        defineField({ name: "primaryCta", type: "link" }),
        defineField({ name: "secondaryCta", type: "link" }),
        defineField({ name: "splineScene", type: "url" }),
      ],
    }),
    defineField({ name: "heroCases", title: "Hero case items", type: "array", of: [caseItem] }),
    defineField({ name: "problem", type: "object", fields: [defineField({ name: "headline", type: "string" })] }),
    defineField({
      name: "problemItems",
      type: "array",
      of: [{ type: "object", name: "problemItem", fields: [defineField({ name: "title", type: "string" })] }],
    }),
    defineField({ name: "workGrid", type: "object", fields: [defineField({ name: "headline", type: "text", rows: 2 })] }),
    defineField({
      name: "sprintShowcase",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headline", type: "text", rows: 2 }),
        defineField({ name: "body", type: "text", rows: 3 }),
      ],
    }),
    defineField({
      name: "sprintCards",
      type: "array",
      of: [
        {
          type: "object",
          name: "sprintCard",
          fields: [
            defineField({ name: "title", type: "string" }),
            defineField({ name: "description", type: "text", rows: 3 }),
            defineField({ name: "deliverables", type: "array", of: [{ type: "string" }] }),
            defineField({ name: "cta", type: "link" }),
          ],
        },
      ],
    }),
    defineField({
      name: "servicesIntro",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headlineLead", type: "string" }),
        defineField({ name: "headlineAccent", type: "string" }),
        defineField({ name: "headlineTail", type: "string" }),
        defineField({ name: "headlineSecond", type: "string" }),
        defineField({ name: "description", type: "text", rows: 3 }),
        defineField({ name: "splineScene", type: "url" }),
      ],
    }),
    defineField({
      name: "serviceCards",
      type: "array",
      of: [
        {
          type: "object",
          name: "serviceCard",
          fields: [
            defineField({ name: "number", type: "string" }),
            defineField({ name: "titleLead", type: "string" }),
            defineField({ name: "titleAccent", type: "string" }),
            defineField({ name: "body", type: "text", rows: 3 }),
            defineField({ name: "items", type: "array", of: [{ type: "string" }] }),
            defineField({ name: "cta", type: "link" }),
          ],
        },
      ],
    }),
    defineField({
      name: "servicesResult",
      type: "object",
      fields: [
        defineField({ name: "label", type: "string" }),
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "headlineSecond", type: "string" }),
        defineField({ name: "body", type: "text", rows: 3 }),
      ],
    }),
    defineField({
      name: "servicesWorkshop",
      type: "object",
      fields: [
        defineField({ name: "label", type: "string" }),
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "cta", type: "link" }),
      ],
    }),
    defineField({
      name: "testimonialsHeader",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headlineLead", type: "string" }),
        defineField({ name: "headlineAccent", type: "string" }),
        defineField({ name: "headlineSecondLead", type: "string" }),
        defineField({ name: "headlineSecondAccent", type: "string" }),
      ],
    }),
    defineField({
      name: "featuredTestimonial",
      type: "object",
      fields: [
        defineField({ name: "quote", type: "text", rows: 3 }),
        defineField({ name: "emphasis", type: "string" }),
        defineField({
          name: "author",
          type: "object",
          fields: [
            defineField({ name: "name", type: "string" }),
            defineField({ name: "role", type: "string" }),
            defineField({ name: "photo", type: "string", description: "Path under public/" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "portfolioItems",
      type: "array",
      of: [
        {
          type: "object",
          name: "portfolioItem",
          fields: [
            defineField({ name: "href", type: "string" }),
            defineField({ name: "image", type: "string", description: "Path under public/" }),
            defineField({ name: "alt", type: "string" }),
            defineField({ name: "wide", type: "boolean" }),
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Homepage" }),
  },
});
