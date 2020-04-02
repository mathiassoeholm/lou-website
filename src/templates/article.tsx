import React from 'react'
import { graphql } from 'gatsby'
import { ArticleQuery } from '../../graphql-types'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import { prettyDate } from 'lib/utils'

interface IProps {
  data: ArticleQuery
}

const Article: React.FC<IProps> = props => {
  const {
    seoMetaTags,
    title,
    introduction,
    coverImage,
    contentNode,
    meta,
  } = props.data.datoCmsArticle

  return (
    <Layout>
      <HelmetDatoCms seo={seoMetaTags} />
      <article
        css={css`
          max-width: 800px;
          margin: auto;
        `}
      >
        <h2
          css={css`
            text-align: center;
            font-size: 2rem;
          `}
        >
          {title}
        </h2>
        <p
          css={css`
            text-align: center;
            color: #545454;
          `}
        >
          {prettyDate(meta.firstPublishedAt, 'da-DK')}
        </p>
        <p
          css={css`
            font-family: 'Merriweather';
            font-size: 1.1rem;
            line-height: 1.5;
          `}
        >
          {introduction}
        </p>
        {coverImage && <Img fluid={coverImage.fluid} />}
        <div
          css={css`
            font-family: 'Merriweather';
            line-height: 1.5;
          `}
          dangerouslySetInnerHTML={{
            __html: contentNode.childMarkdownRemark.html,
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
      introduction
      meta {
        firstPublishedAt
      }
    }
  }
`
