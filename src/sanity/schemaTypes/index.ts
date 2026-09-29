import { link, imageRef, workAsset } from "./objects/shared";
import caseStudy from "./documents/caseStudy";
import siteSettings from "./documents/siteSettings";
import homepage from "./documents/homepage";
import servicePage from "./documents/servicePage";
import websiteSprintPage from "./documents/websiteSprintPage";
import brandSprintPage from "./documents/brandSprintPage";
import marketingEngineeringSprintPage from "./documents/marketingEngineeringSprintPage";
import workPage from "./documents/workPage";

export const schemaTypes = [
  link,
  imageRef,
  workAsset,
  caseStudy,
  siteSettings,
  homepage,
  servicePage,
  websiteSprintPage,
  brandSprintPage,
  marketingEngineeringSprintPage,
  workPage,
];

/** Document types that exist as exactly one document — the Studio
 *  structure hides "create new" for these. */
export const SINGLETON_TYPES = new Set([
  "siteSettings",
  "homepage",
  "websiteSprintPage",
  "brandSprintPage",
  "marketingEngineeringSprintPage",
  "workPage",
]);
