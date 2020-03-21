import React from 'react'
import { graphql } from 'gatsby'
import { ArticleQuery } from '../../graphql-types'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Layout from '../components/layout'

interface IProps {
  data: ArticleQuery
}

const Article: React.FC<IProps> = ({ data }) => {
  return (
    <Layout>
      <article>
        <HelmetDatoCms seo={data.datoCmsArticle.seoMetaTags} />
        <div
          dangerouslySetInnerHTML={{
            __html: data.datoCmsArticle.contentNode.childMarkdownRemark.html,
          }}
        />
      </article>
    </Layout>
  )
}

export default Article

export const query = graphql`
  query Article($slug: String!) {
    datoCmsArticle(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      contentNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
