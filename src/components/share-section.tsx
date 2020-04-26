import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from "react-share";
import { css } from "@emotion/core";
import { sm } from "lib/css-in-js";

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
          font-weight: 600;
          font-size: 1.15rem;

          grid-gap: 0.5rem;
          ${sm} {
            grid-gap: 1.25rem;
          }

          button > span {
            display: none;

            ${sm} {
              display: inline;
            }
          }

          button > svg {
            display: inline;

            ${sm} {
              display: none;
            }
          }
        `}
      >
        <FacebookShareButton url={props.articleUrl} quote={props.articleTitle}>
          <span>Facebook</span>
          <FacebookIcon size={28} />
        </FacebookShareButton>
        <TwitterShareButton url={props.articleUrl} title={props.articleTitle}>
          <span>Twitter</span>
          <TwitterIcon size={28} />
        </TwitterShareButton>
      </div>
    </div>
  );
};

export { ShareSection };
