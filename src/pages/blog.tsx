import React from "react";
import { graphql } from "gatsby";
import { BlogPageQuery } from "../../graphql-types";
import { Layout, SectionHeader, ArticlePreview } from "components";
import { css } from "@emotion/core";

interface IProps {
  data: BlogPageQuery;
}

const Blog: React.FC<IProps> = ({ data }) => {
  return (
    <Layout>
      <div
        css={css`
          display: grid;
          grid-gap: 2rem;
        `}
      >
        <SectionHeader>{data.datoCmsBlog.header}</SectionHeader>
        {data.allDatoCmsArticle.edges.map(({ node }) => (
          <ArticlePreview large key={node.id} article={node} />
        ))}
      </div>
    </Layout>
  );
};

export default Blog;

export const query = graphql`
  query BlogPage {
    allDatoCmsArticle(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          introduction
          slug
          coverImage {
            fluid(maxWidth: 700, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
          meta {
            firstPublishedAt
          }
        }
      }
    }
    datoCmsBlog {
      header
    }
  }
`;
