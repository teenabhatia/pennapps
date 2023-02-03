/**
 * @type {import('gatsby').GatsbyConfig}
 */

const path = require(`path`);
module.exports = {
  siteMetadata: {
    title: `pennapps`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
