module.exports = {
  siteMetadata: {
    title: 'Pixel Perfect',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/json`,
      },
    },
  ],
}