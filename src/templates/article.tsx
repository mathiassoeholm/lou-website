import React from 'react'
import { graphql } from 'gatsby'
import { ArticleQuery } from '../../graphql-types'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import { css } from '@emotion/core'

interface IProps {
  data: ArticleQuery
}

const Article: React.FC<IProps> = ({ data }) => {
  return (
    <Layout>
      <article
        css={css`
          max-width: 800px;
          margin: auto;
        `}
      >
        <HelmetDatoCms seo={data.datoCmsArticle.seoMetaTags} />
        {data.datoCmsArticle.coverImage && (
          <Img fluid={data.datoCmsArticle.coverImage.fluid} />
        )}
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
      coverImage {
        fluid(maxWidth: 1200, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`
