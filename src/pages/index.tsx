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
          grid-gap: 2.5rem;
        `}
      >
        <p
          css={css`
            font-family: 'Open Sans';
            font-size: 1.3rem;
            line-height: 2;
          `}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris
        </p>
        <Portrait />
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
  }
`
