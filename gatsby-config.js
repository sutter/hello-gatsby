/**
 * Configuration
 */

const appConfig = {
  // Language Tag on <html> element
  language: 'fr',
  // Domain of your site. No trailing slash!
  siteUrl: 'https://hello-gatsby-starter.netlify.com',
  // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"
  pathPrefix: '/',

  /**
   * Site information
   */
  title: 'Hello Gatsby - simple stater for Gatsby',
  titleShort: 'Hello Gatsby',
  description: 'Simple stater for Gatsby width Emotion.js',
  author: 'Laurent Sutterlity',
  email: 'laurent@sutterlity.fr',

  /**
   * Social
   */
  twitterUser: '@sutterlity',

  /**
   * Manifest and Progress color
   */
  themeColor: '#663399',
  backgroundColor: '#663399',
};

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

/**
 * Gatsby config
 */

module.exports = {
  siteMetadata: appConfig,
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-typescript-checker',
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: appConfig.title,
        short_name: appConfig.titleShort,
        description: appConfig.description,
        start_url: appConfig.pathPrefix,
        background_color: appConfig.backgroundColor,
        theme_color: appConfig.themeColor,
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
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: appConfig.siteUrl,
        sitemap: `${appConfig.siteUrl}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
};
