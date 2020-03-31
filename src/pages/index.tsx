import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import { IndexPageQuery } from '../../graphql-types'
import Layout from '../components/layout'
import { ArticlePreview } from '../components/article-preview'
import { Portrait } from '../components/portrait'
import SectionHeader from '../components/section-header'
import { md, sm } from 'lib/css-in-js'

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

          grid-template-areas:
            'portrait'
            'welcome'
            'articles';

          ${md} {
            grid-template-areas:
              'welcome portrait'
              'articles articles';
          }
        `}
      >
        <section
          css={css`
            grid-area: welcome;
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
        <Portrait
          css={css`
            grid-area: portrait;
          `}
          fixed={data.datoCmsHome.portrait.fixed}
        />
        <section
          css={css`
            grid-area: articles;
            display: grid;
            grid-row-gap: 3rem;
            justify-content: center;

            ${sm} {
              justify-content: stretch;
            }
          `}
        >
          <SectionHeader
            css={css`
              justify-self: center;

              ${sm} {
                justify-self: start;
              }
            `}
          >
            {data.datoCmsHome.articlesSectionHeader}
          </SectionHeader>
          <div
            css={css`
              display: grid;
              grid-gap: 3rem;
              grid-template-columns: repeat(auto-fill, 327px);
              justify-self: center;
              ${md} {
                width: 100%;
              }
            `}
          >
            {data.allDatoCmsArticle.edges.map(({ node }) => (
              <ArticlePreview key={node.id} article={node} />
            ))}
          </div>
        </section>
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
          introduction
          slug
          coverImage {
            fluid(maxWidth: 200, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
          meta {
            firstPublishedAt
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
      referencesSectionHeader
      articlesSectionHeader
    }
  }
`
