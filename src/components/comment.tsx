import React from "react";
import { VerifiedComment } from "api";
import { css } from "@emotion/core";
import { prettyDate } from "lib/utils";

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

        p {
          margin: 0;
        }

        .triangle {
          width: 18px;
          height: 24px;
          fill: white;
          margin-top: 0.75rem;
        }
      `}
    >
      <div
        css={css`
          padding: 0.75rem;
        `}
      >
        <p
          css={css`
            font-size: 1.25rem;
          `}
        >
          {author}
        </p>
        <p
          css={css`
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
          flex: 1;
        `}
      >
        {text.length > 0 ? text : " "}
      </p>
    </article>
  );
};

export { Comment };
