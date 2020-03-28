import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import { IndexPageQuery } from '../../graphql-types'
import Layout from '../components/layout'
import { ArticlePreview } from '../components/article-preview'
import { Portrait } from '../components/portrait'

interface IProps {
  data: IndexPageQuery
}

const Index: React.FC<IProps> = ({ data }) => {
  return (
    <Layout>
      <div
        css={css`
          display: grid;
          grid-auto-flow: column;
          grid-gap: 3rem;
          align-items: center;
        `}
      >
        <div
          css={css`
            font-family: 'Open Sans';
            font-size: 1.3rem;
            line-height: 2;
            p {
              margin: 0;
            }
          `}
          dangerouslySetInnerHTML={{
            __html: data.datoCmsHome.welcomeTextNode.childMarkdownRemark.html,
          }}
        />
        <Portrait fixed={data.datoCmsHome.portrait.fixed} />
      </div>
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(auto-fill, 200px);
          grid-gap: 10px;
        `}
      >
        {data.allDatoCmsArticle.edges.map(({ node }) => (
          <ArticlePreview key={node.id} article={node} />
        ))}
      </div>
    </Layout>
  )
}

export default Index

export const query = graphql`
  query IndexPage {
    allDatoCmsArticle(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          coverImage {
            fluid(maxWidth: 200, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
    datoCmsHome {
      portrait {
        fixed(
          width: 200
          height: 250
          imgixParams: { fm: "jpg", auto: "compress" }
        ) {
          ...GatsbyDatoCmsFixed
        }
      }
      welcomeTextNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
