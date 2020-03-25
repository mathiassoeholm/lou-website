import React from 'react'
import { css } from '@emotion/core'

const PORTRAIT_WIDTH = 200
const PORTRAIT_HEIGHT = 250
const BORDER_RADIUS = 5

const Portrait: React.FC = () => {
  return (
    <div
      css={css`
        position: relative;
        height: ${PORTRAIT_HEIGHT}px;
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
      <img
        src="https://lorempixel.com/300/300/"
        css={css`
          border-radius: ${BORDER_RADIUS}rem 0px;
          width: ${PORTRAIT_WIDTH}px;
          height: ${PORTRAIT_HEIGHT}px;
          object-fit: cover;
          position: relative;
          transform: translate(-0.5rem, -0.5rem);
        `}
      />
    </div>
  )
}

export { Portrait }
