require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Louise Juhl Andersen`,
  },
  plugins: [
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        previewMode: process.env.NODE_ENV === 'development',
        localeFallbacks: {
          da: ['en'],
        },
      },
    },
    'gatsby-plugin-ts',
  ],
}
