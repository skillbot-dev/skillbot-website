module.exports = {
  siteMetadata: {
    title: 'Skillbot : Education Strategy',
    description: 'Skillbot : Education Strategy is an education strategy firm from Bengaluru, which aims to develop students in professional practice or research',
    siteUrl: 'https://www.skillbot.info',
    social: {
      linkedin: 'https://linkedin.com/company/skillbot',
      google: 'info.skillbot@gmail.com'
    }
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify-identity-widget`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Skillbot:Education Strategy",
        short_name: "Skillbot",
        start_url: "/",
        display: "standalone",
        icon: "./src/images/icon.png"
      }
    },
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `./data/`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1080,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ]
      }
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
      }
    }
  ]
};
