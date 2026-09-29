import { defineField, defineType } from "sanity";

/** Singleton — matches src/data/site.ts. One document, id "siteSettings". */
export default defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({ name: "discoveryCallUrl", title: "Discovery call URL", type: "url" }),
    defineField({ name: "workshopCallUrl", title: "Workshop call URL", type: "url" }),
    defineField({ name: "navCtaUrl", title: "Nav CTA URL", type: "url" }),
    defineField({ name: "contactEmail", type: "string" }),
    defineField({ name: "linkedinUrl", type: "url" }),
    defineField({ name: "navLinks", title: "Nav links", type: "array", of: [{ type: "link" }] }),
    defineField({ name: "footerLinks", type: "array", of: [{ type: "link" }] }),
    defineField({ name: "footerLegalLinks", type: "array", of: [{ type: "link" }] }),
    defineField({
      name: "footerSocialLinks",
      type: "array",
      of: [
        {
          type: "object",
          name: "socialLink",
          fields: [
            defineField({ name: "label", type: "string" }),
            defineField({ name: "href", type: "string" }),
            defineField({ name: "icon", type: "string", description: "Path under public/" }),
          ],
        },
      ],
    }),
    defineField({
      name: "footerTagline",
      type: "object",
      fields: [
        defineField({ name: "lead", type: "string" }),
        defineField({ name: "leadRest", type: "string" }),
        defineField({ name: "second", type: "string" }),
        defineField({ name: "secondRest", type: "string" }),
      ],
    }),
    defineField({
      name: "founder",
      type: "object",
      fields: [
        defineField({ name: "name", type: "string" }),
        defineField({ name: "role", type: "string" }),
        defineField({ name: "email", type: "string" }),
        defineField({ name: "footerEmail", type: "string" }),
        defineField({ name: "photo", type: "string", description: "Path under public/" }),
      ],
    }),
    defineField({
      name: "closingCta",
      title: "Global closing CTA",
      type: "object",
      fields: [
        defineField({ name: "headlineLead", type: "string" }),
        defineField({ name: "headlineSecondLead", type: "string" }),
        defineField({ name: "headlineAccent", type: "string" }),
        defineField({ name: "body", type: "text", rows: 3 }),
        defineField({ name: "primaryCta", type: "link" }),
        defineField({ name: "secondaryLabel", type: "string" }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site settings" }),
  },
});
