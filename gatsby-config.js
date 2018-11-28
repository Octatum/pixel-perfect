module.exports = {
  siteMetadata: {
    title: 'Pixel Perfect',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/json`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `white`,
        showSpinner: true,
      },
    },
  ],
}