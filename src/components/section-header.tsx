import React from 'react'
import { css } from '@emotion/core'

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
        justify-self: start;
        padding-bottom: 0.25rem;
      `}
      {...restProps}
    >
      {children}
    </h3>
  )
}

export default SectionHeader
