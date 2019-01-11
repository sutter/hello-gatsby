/**
 * Load API KEY
 * Create a .env.development file in root
 * with this inside : API_KEY=XXXXXXXXXX
 * Load data width this:
 * Exemple : `process.env.API_KEY`
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

/* Gatsby config */

module.exports = {
  siteMetadata: {
    siteUrl: `https://hello-gatsby-js.netlify.com/`,
  },
  plugins: [
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Hello Gatsby',
        short_name: 'Hello',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
      }`,
      },
    },
  ],
};
