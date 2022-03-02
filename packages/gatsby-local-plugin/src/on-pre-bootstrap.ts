import { GatsbyNode } from "gatsby";

export const onPreBootstrapFunction: GatsbyNode["onPreBootstrap"] = (
  { actions, reporter },
  options,
  callback
) => {
  console.log("hello");
  callback(null);
};
