import type { StructureResolver } from "sanity/structure";
import { SINGLETON_TYPES } from "./schemaTypes";

/** Singletons get their own top-level item with no document list; the
 *  case study and service page collections keep the default list view. */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site settings")
        .id("siteSettings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.listItem()
        .title("Homepage")
        .id("homepage")
        .child(S.document().schemaType("homepage").documentId("homepage")),
      S.listItem()
        .title("Website Sprint page")
        .id("websiteSprintPage")
        .child(S.document().schemaType("websiteSprintPage").documentId("websiteSprintPage")),
      S.listItem()
        .title("Brand Sprint page")
        .id("brandSprintPage")
        .child(S.document().schemaType("brandSprintPage").documentId("brandSprintPage")),
      S.listItem()
        .title("Marketing Engineering Sprint page")
        .id("marketingEngineeringSprintPage")
        .child(
          S.document()
            .schemaType("marketingEngineeringSprintPage")
            .documentId("marketingEngineeringSprintPage"),
        ),
      S.listItem()
        .title("Work page")
        .id("workPage")
        .child(S.document().schemaType("workPage").documentId("workPage")),
      S.divider(),
      ...S.documentTypeListItems().filter((item) => {
        const id = item.getId();
        return id ? !SINGLETON_TYPES.has(id) : true;
      }),
    ]);
