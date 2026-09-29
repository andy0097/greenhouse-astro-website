import { defineField, defineType } from "sanity";

/** A CTA/link pair — matches `{ href, label }` used everywhere in src/data. */
export const link = defineType({
  name: "link",
  title: "Link",
  type: "object",
  fields: [
    defineField({ name: "label", type: "string", validation: (r) => r.required() }),
    defineField({ name: "href", type: "string" }),
  ],
});

/** Matches `WorkImage` — an image referenced by its existing /public path,
 *  not a Sanity asset. Kept as plain strings so the srcset already baked
 *  into public/ doesn't need re-uploading. */
export const imageRef = defineType({
  name: "imageRef",
  title: "Image (public/ path)",
  type: "object",
  fields: [
    defineField({ name: "src", type: "string", validation: (r) => r.required() }),
    defineField({ name: "alt", type: "string", validation: (r) => r.required() }),
    defineField({ name: "srcset", type: "string" }),
    defineField({ name: "sizes", type: "string" }),
  ],
});

/** Matches `WorkAsset` — an imageRef plus the grid span. */
export const workAsset = defineType({
  name: "workAsset",
  title: "Case asset",
  type: "object",
  fields: [
    defineField({ name: "src", type: "string", validation: (r) => r.required() }),
    defineField({ name: "alt", type: "string", validation: (r) => r.required() }),
    defineField({ name: "srcset", type: "string" }),
    defineField({ name: "sizes", type: "string" }),
    defineField({
      name: "span",
      type: "number",
      options: { list: [1, 2] },
      validation: (r) => r.required().min(1).max(2),
    }),
  ],
});
