import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/core";
import { IndexPageQuery } from "../../graphql-types";
import {
  Layout,
  ArticlePreview,
  Portrait,
  SectionHeader,
  Reference,
} from "components";
import { md, sm } from "lib/css-in-js";

interface IProps {
  data: IndexPageQuery;
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
            "portrait"
            "welcome"
            "references"
            "articles";

          ${md} {
            grid-template-areas:
              "welcome portrait"
              "references references"
              "articles articles";
          }
        `}
      >
        <article
          css={css`
            grid-area: welcome;
            font-family: "Open Sans";
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
            grid-area: references;
            display: grid;
            grid-row-gap: 3rem;
          `}
        >
          <SectionHeader>
            {data.datoCmsHome.referencesSectionHeader}
          </SectionHeader>
          <div
            css={css`
              display: grid;
              grid-gap: 3rem;
              justify-self: center;
              justify-content: start;
              grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
              ${md} {
                width: 100%;
              }
            `}
          >
            {data.allDatoCmsReference.edges.map(({ node }) => (
              <Reference key={node.id} reference={node} />
            ))}
          </div>
        </section>
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
          <SectionHeader>
            {data.datoCmsHome.articlesSectionHeader}
          </SectionHeader>
          <div
            css={css`
              display: grid;
              grid-gap: 3rem;
              grid-template-columns: 1fr;
              justify-self: center;
              justify-content: space-between;

              ${md} {
                grid-template-columns: repeat(auto-fill, minmax(327px, 1fr));
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
  );
};

export default Index;

export const query = graphql`
  query IndexPage {
    allDatoCmsArticle(sort: { fields: [position], order: ASC }, limit: 6) {
      edges {
        node {
          id
          title
          introduction
          slug
          coverImage {
            fluid(maxWidth: 400, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
          meta {
            firstPublishedAt
          }
        }
      }
    }
    allDatoCmsReference(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          text
          author
          company
        }
      }
    }
    datoCmsHome {
      menuName
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
`;
