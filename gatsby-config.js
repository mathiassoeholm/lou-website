require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `TODO: Remove me`,
  },
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        previewMode: process.env.NODE_ENV === 'development',
        disableLiveReload: true,
        localeFallbacks: {
          da: ['en'],
        },
      },
    },
    'gatsby-plugin-ts',
  ],
}
