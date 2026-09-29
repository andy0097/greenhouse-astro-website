import { defineArrayMember, defineField, defineType } from "sanity";

/** Singleton — matches src/data/workPage.ts. One document, id "workPage".
 *  Holds what /work shows beyond the case studies themselves. */
export default defineType({
  name: "workPage",
  title: "Work page",
  type: "document",
  fields: [
    defineField({
      name: "galleryTitle",
      title: "Gallery heading",
      type: "string",
      description: "Shown above the design gallery. Leave empty to hide it visually.",
    }),
    defineField({
      name: "gallery",
      title: "Design gallery",
      type: "array",
      description:
        "Designs shown under the case studies, with no link. Any aspect ratio — they stack in two columns.",
      of: [
        defineArrayMember({
          type: "image",
          fields: [
            defineField({
              name: "alt",
              title: "Alt text",
              type: "string",
              validation: (r) => r.required(),
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Work page" }),
  },
});
