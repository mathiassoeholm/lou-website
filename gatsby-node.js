const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allDatoCmsArticle {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.allDatoCmsArticle.edges.map(({ node: article }) => {
      createPage({
        path: `articles/${article.slug}`,
        component: path.resolve('./src/templates/article.tsx'),
        context: {
          slug: article.slug,
        },
      })
    })
  })
}
