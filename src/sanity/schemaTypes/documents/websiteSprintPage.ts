import { defineField, defineType } from "sanity";

/** Singleton — matches src/data/websiteSprint.ts. One document, id "websiteSprintPage". */
export default defineType({
  name: "websiteSprintPage",
  title: "Website Sprint page",
  type: "document",
  fields: [
    defineField({
      name: "sprintHero",
      type: "object",
      fields: [
        defineField({ name: "tag", type: "string" }),
        defineField({ name: "headline", type: "text", rows: 2 }),
        defineField({ name: "description", type: "text", rows: 2 }),
        defineField({ name: "offerProof", type: "string" }),
        defineField({ name: "cta", type: "link" }),
      ],
    }),
    defineField({
      name: "pricingIntro",
      type: "object",
      fields: [
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "body", type: "string" }),
      ],
    }),
    defineField({
      name: "pricingTiers",
      type: "array",
      of: [
        {
          type: "object",
          name: "pricingTier",
          fields: [
            defineField({ name: "icon", type: "string", options: { list: ["calendar", "rocket"] } }),
            defineField({ name: "title", type: "string" }),
            defineField({ name: "description", type: "text", rows: 3 }),
            defineField({ name: "descriptionEmphasis", type: "string" }),
            defineField({ name: "price", type: "string" }),
            defineField({ name: "priceNote", type: "string" }),
            defineField({ name: "items", type: "array", of: [{ type: "string" }] }),
            defineField({ name: "cta", type: "link" }),
            defineField({ name: "featured", type: "boolean" }),
          ],
        },
      ],
    }),
    defineField({
      name: "timelineIntro",
      type: "object",
      fields: [
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "body", type: "text", rows: 3 }),
      ],
    }),
    defineField({
      name: "timelineSteps",
      type: "array",
      of: [
        {
          type: "object",
          name: "sprintStep",
          fields: [
            defineField({ name: "week", type: "string" }),
            defineField({ name: "tabLabel", type: "string" }),
            defineField({ name: "title", type: "string" }),
            defineField({ name: "text", type: "text", rows: 3 }),
            defineField({ name: "outputs", type: "array", of: [{ type: "string" }] }),
          ],
        },
      ],
    }),
    defineField({
      name: "audienceIntro",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "body", type: "text", rows: 3 }),
      ],
    }),
    defineField({
      name: "closingCta",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "body", type: "text", rows: 2 }),
        defineField({ name: "cta", type: "link" }),
      ],
    }),
    defineField({
      name: "faqs",
      type: "array",
      of: [
        {
          type: "object",
          name: "faq",
          fields: [
            defineField({ name: "question", type: "string" }),
            defineField({ name: "answer", type: "text", rows: 3 }),
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Website Sprint page" }),
  },
});
