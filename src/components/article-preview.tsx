import React from "react";
import { TruncatedText } from "react-truncated-text";
import { DatoCmsArticle } from "../../graphql-types";
import Link from "gatsby-link";
import Img from "gatsby-image";
import { css } from "@emotion/core";
import { prettyDate } from "lib/utils";

interface IProps {
  large?: boolean;
  article: Partial<DatoCmsArticle>;
}

const ArticlePreview: React.FC<IProps> = ({ article, large = false }) => {
  return (
    <Link to={`/articles/${article.slug}`}>
      <div
        css={css`
          display: grid;
          grid-template-rows: ${large ? 228 : 150}px auto;
          max-width: ${large ? 700 : 400}px;
          background: var(--card-color);
        `}
      >
        <div
          css={css`
            position: relative;

            /* Dark gradient pseudo element */
            ::after {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(
                rgba(0, 0, 0, 0) 0%,
                rgba(0, 0, 0, 0) 60%,
                rgba(0, 0, 0, 0.6) 100%
              );
            }
          `}
        >
          {article.coverImage && (
            <div
              css={css`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
              `}
            >
              <Img
                css={css`
                  height: 100%;
                `}
                fluid={article.coverImage.fluid}
              />
            </div>
          )}
          <div
            css={css`
              color: white;
              position: absolute;
              z-index: 1;
              width: 100%;
              bottom: 0;
              display: grid;
              grid-auto-flow: column;
              grid-gap: 0.5rem;
              align-items: end;
              padding: 1rem;
            `}
          >
            <h3
              css={css`
                margin: 0;
              `}
            >
              {article.title}
            </h3>
            <span
              css={css`
                justify-self: end;
              `}
            >
              {prettyDate(article.meta.firstPublishedAt, "da-DK")}
            </span>
          </div>
        </div>
        <div
          css={css`
            display: grid;
            grid-template-columns: 1fr auto;
            grid-template-rows: auto 1fr;
            grid-gap: 0.5rem;
            padding: 1rem;
          `}
        >
          <TruncatedText
            css={css`
              grid-column: span 2;
              margin: 0;
              height: calc(${large ? 4 : 3} * 1.6 * 1em);
              overflow: hidden;
              line-height: 1.6;
            `}
          >
            {article.introduction}
          </TruncatedText>
        </div>
      </div>
    </Link>
  );
};

export { ArticlePreview };
