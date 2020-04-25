import React from "react";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { css } from "@emotion/core";

interface IProps {
  articleTitle: string;
  articleUrl: string;
}

const ShareSection: React.FC<IProps> = (props) => {
  return (
    <div
      css={css`
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: 1fr;
        grid-gap: 0.5rem;
        align-items: center;
      `}
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        css={css`
          height: 1px;
          width: 100%;
          fill: var(--secondary-info-color);
        `}
      >
        <rect x={0} y={0} width={100} height={100} />
      </svg>
      <span
        css={css`
          color: var(--secondary-info-color);
        `}
      >
        DEL ARTIKLEN
      </span>
      <div
        css={css`
          padding-left: 1rem;
          display: grid;
          grid-auto-flow: column;
          grid-gap: 1.25rem;
          font-weight: 600;
          font-size: 1.15rem;
        `}
      >
        <FacebookShareButton url={props.articleUrl} quote={props.articleTitle}>
          Facebook
        </FacebookShareButton>
        <TwitterShareButton url={props.articleUrl} title={props.articleTitle}>
          Twitter
        </TwitterShareButton>
      </div>
    </div>
  );
};

export { ShareSection };
