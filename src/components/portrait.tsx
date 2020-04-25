import React from "react";
import { css } from "@emotion/core";
import Img, { GatsbyImageProps, FixedObject } from "gatsby-image";

const BORDER_RADIUS = 5;

const Portrait: React.FC<GatsbyImageProps> = (props) => {
  const fixedObject = props.fixed as FixedObject;

  return (
    <div
      css={css`
        position: relative;
        height: ${fixedObject.height}px;
        justify-self: center;
      `}
    >
      <div
        css={css`
          border-radius: ${BORDER_RADIUS}rem 0px;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          position: absolute;
          border: 2px solid var(--accent-color);
        `}
      />
      <Img
        {...props}
        css={css`
          border-radius: ${BORDER_RADIUS}rem 0px;
          width: ${fixedObject.width}px;
          height: ${fixedObject.height}px;
          object-fit: cover;
          position: relative;
          transform: translate(-0.5rem, -0.5rem);
          /* Fix horizontal line issue: https://gist.github.com/ayamflow/b602ab436ac9f05660d9c15190f4fd7b */
          -webkit-mask-image: -webkit-radial-gradient(white, black);
        `}
      />
    </div>
  );
};

export { Portrait };
