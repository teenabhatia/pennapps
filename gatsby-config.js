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
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     // The unique name for each instance
    //     name: `pages`,
    //     // Path to the directory
    //     path: `${__dirname}/src/pages/`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `data`,
    //     path: `${__dirname}/src/data/`,
    //     // Ignore files starting with a dot
    //     ignore: [`**/\.*`],
    //     // Use "mtime" and "inode" to fingerprint files (to check if file has changed)
    //     fastHash: true,
    //   },
    // },
  ],
}