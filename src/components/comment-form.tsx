import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const BannerTriangle = styled.svg`
  fill: var(--accent-color);
  filter: brightness(60%);
  height: 1.5rem;
  width: 1.5rem;
`;

const CommentForm: React.FC = () => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: auto 1fr auto;
      `}
    >
      <h2
        css={css`
          grid-column: span 3;
          text-align: center;
          background: var(--accent-color);
          color: white;
          font-weight: 600;
          margin: 0;
          padding: 0.5rem;
          position: relative;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        `}
      >
        Skriv en kommentar
      </h2>
      <BannerTriangle
        css={css``}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon points="0,0 100,0 100,100" />
      </BannerTriangle>
      <form
        css={css`
          background: var(--card-color);
          padding: 1rem;
        `}
      >
        <label
          htmlFor="author"
          css={css`
            display: block;
          `}
        >
          Dit navn
        </label>
        <input type="text" name="author" id="author" />
      </form>
      <BannerTriangle
        css={css``}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon points="0,0 100,0 0,100" />
      </BannerTriangle>
    </div>
  );
};

export { CommentForm };
