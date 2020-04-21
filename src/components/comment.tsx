import React from "react";
import { VerifiedComment } from "api";
import { css } from "@emotion/core";
import { prettyDate } from "lib/utils";
import { sm } from "lib/css-in-js";

interface Props {
  comment: VerifiedComment;
}

const Comment: React.FC<Props> = ({ comment }) => {
  const { date, author, text } = comment;

  return (
    <article
      css={css`
        display: flex;
        align-items: start;
        flex-direction: column;

        ${sm} {
          flex-direction: row;
        }

        .triangle {
          width: 18px;
          height: 18px;
          fill: white;
          margin-top: 0.7rem;
          flex-shrink: 0;
          display: none;

          ${sm} {
            display: block;
          }
        }
      `}
    >
      <div
        css={css`
          padding: 0.5rem;
          flex-shrink: 0;
        `}
      >
        <p
          css={css`
            font-size: 1.25rem;
            margin: 0 0 0.25rem 0;
          `}
        >
          {author}
        </p>
        <p
          css={css`
            margin: 0;
            font-size: 0.75rem;
            color: var(--secondary-info-color);
          `}
        >
          {prettyDate(date, "da-DK")}
        </p>
      </div>
      <svg
        className="triangle"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon points="0,50 100,0 100,100 0,50" />
      </svg>
      <p
        css={css`
          white-space: pre-wrap;
          background: white;
          padding: 0.75rem;
          border-radius: 0.75rem;
          margin: 0;
        `}
      >
        {text.length > 0 ? text : " "}
      </p>
    </article>
  );
};

export { Comment };
