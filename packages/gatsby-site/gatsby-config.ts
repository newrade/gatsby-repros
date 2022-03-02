import path from 'path';

import { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      // does not work
      resolve: path.resolve('../gatsby-local-plugin'),
    },
    // {
    //   // works
    //   resolve: 'gatsby-local-plugin',
    // },
  ],
};

export default config;
