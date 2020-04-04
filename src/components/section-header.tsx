import React from 'react'
import { css } from '@emotion/core'
import { sm } from 'lib/css-in-js'

const SectionHeader: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  ...restProps
}) => {
  return (
    <h3
      css={css`
        margin: 0;
        font-family: 'Open Sans';
        font-size: 1.2rem;
        border-bottom: 2px solid var(--accent-color);
        padding-bottom: 0.25rem;
        justify-self: center;

        ${sm} {
          justify-self: start;
        }
      `}
      {...restProps}
    >
      {children}
    </h3>
  )
}

export default SectionHeader
