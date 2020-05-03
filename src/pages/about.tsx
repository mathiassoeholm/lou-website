import React from "react";
import { Layout } from "components";
import { css } from "@emotion/core";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import { AboutQuery } from "../../graphql-types";

interface IProps {
  data: AboutQuery;
}

const About: React.FC<IProps> = ({ data }) => {
  const { title, contentNode, image } = data.datoCmsAbout;

  return (
    <Layout>
      <article>
        <h2
          css={css`
            text-align: center;
            font-size: 1.5rem;
          `}
        >
          {title}
        </h2>
        <div
          css={css`
            line-height: 1.5;
          `}
          dangerouslySetInnerHTML={{
            __html: contentNode.childMarkdownRemark.html,
          }}
        />
        {image && <Img fluid={image.fluid} />}
      </article>
    </Layout>
  );
};

export default About;

export const query = graphql`
  query About {
    datoCmsAbout {
      title
      contentNode {
        childMarkdownRemark {
          html
        }
      }
      image {
        fluid(maxWidth: 800, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`;
