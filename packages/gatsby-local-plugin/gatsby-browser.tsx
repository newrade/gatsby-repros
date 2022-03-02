import { GatsbyBrowser } from "gatsby";

/**
 * Gatsby Browser APIs
 *
 * @see https://www.gatsbyjs.com/docs/browser-apis/
 * @see https://www.gatsbyjs.com/docs/api-files-gatsby-browser/
 */

export const onClientEntry: GatsbyBrowser["onClientEntry"] = () => {
  console.log("hello");
};
