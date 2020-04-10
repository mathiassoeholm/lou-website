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
    <article>
      <p>{author}</p>
      <p>{prettyDate(date, "da-DK")}</p>
      <p
        css={css`
          white-space: pre-wrap;
        `}
      >
        {text}
      </p>
    </article>
  );
};

export { Comment };
