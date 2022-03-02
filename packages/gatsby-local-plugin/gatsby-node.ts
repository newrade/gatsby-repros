import { GatsbyNode } from "gatsby";

import { onPreBootstrapFunction } from "./src/on-pre-bootstrap";

export const onPreBootstrap: GatsbyNode["onPreBootstrap"] = onPreBootstrapFunction;
