require("dotenv").config();

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /(\.js$|\.jsx|\.ts|\.tsx)$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop"],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        previewMode: process.env.NODE_ENV === "development",
        disableLiveReload: true,
        localeFallbacks: {
          da: ["en"],
        },
      },
    },
    "gatsby-plugin-ts",
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          lib: "src/lib",
          api: "src/api",
        },
      },
    },
    "gatsby-plugin-netlify",
  ],
};
