import React, { useState } from "react";
import { graphql } from "gatsby";
import { ArticleQuery } from "../../graphql-types";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/layout";
import { Comment } from "../components/comment";
import Img from "gatsby-image";
import { css } from "@emotion/core";
import { prettyDate } from "lib/utils";
import * as api from "api";
import { VerifiedComment } from "api";
import commentsData from "../data/comments.json";
import { CommentForm, FormValue } from "../components/comment-form";

interface IProps {
  data: ArticleQuery;
}

type CommentStatus =
  | { id: "editing" }
  | { id: "error"; message: string }
  | { id: "submitting" }
  | { id: "success" };

const Article: React.FC<IProps> = (props) => {
  const {
    slug,
    seoMetaTags,
    title,
    introduction,
    coverImage,
    contentNode,
    meta,
  } = props.data.datoCmsArticle;

  const comments = (commentsData[slug] ?? []) as VerifiedComment[];

  const [commentStatus, setCommentStatus] = useState<CommentStatus>({
    id: "editing",
  });

  async function onSubmitComment(formValue: FormValue) {
    setCommentStatus({ id: "submitting" });

    try {
      await api.comment({ ...formValue, articleSlug: slug });
      setCommentStatus({ id: "success" });
    } catch (e) {
      setCommentStatus({ id: "error", message: e.message });
    }
  }

  return (
    <Layout>
      <HelmetDatoCms seo={seoMetaTags} />
      <div
        css={css`
          display: grid;
          grid-gap: 3rem;
        `}
      >
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
            {prettyDate(meta.firstPublishedAt, "da-DK")}
          </p>
          <p
            css={css`
              font-family: "Merriweather";
              font-size: 1.1rem;
              line-height: 1.5;
            `}
          >
            {introduction}
          </p>
          {coverImage && <Img fluid={coverImage.fluid} />}
          <div
            css={css`
              font-family: "Merriweather";
              line-height: 1.5;
            `}
            dangerouslySetInnerHTML={{
              __html: contentNode.childMarkdownRemark.html,
            }}
          />
        </article>
        {commentStatus.id === "submitting" && <p>Sender kommentar</p>}
        {commentStatus.id === "error" && (
          <p>Der skete en fejl: {commentStatus.message}</p>
        )}
        {commentStatus.id === "editing" && (
          <div
            css={css`
              padding: 0 2rem;
            `}
          >
            <CommentForm onSubmit={onSubmitComment} />
          </div>
        )}
        {commentStatus.id === "success" && (
          <>
            <h2>
              Tak for din kommentar!{" "}
              <span role="img" aria-label="et rødt hjerte">
                ❤️
              </span>
            </h2>
            <p>
              Den skal lige godkendes inden den dukker op på siden, så jeg ved
              at det ikke er spam.
            </p>
          </>
        )}
        <div
          css={css`
            display: grid;
            grid-gap: 2rem;
            padding: 0 3rem;
          `}
        >
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Article;

export const query = graphql`
  query Article($slug: String!) {
    datoCmsArticle(slug: { eq: $slug }) {
      slug
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
`;
