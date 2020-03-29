import React from 'react'
import { Link } from 'gatsby'
import 'normalize.css'

import { css } from '@emotion/core'
import { Nav } from './nav'

interface IProps {
  title: string
  subtitle: string
}

const Header: React.FC<IProps> = props => {
  const { title, subtitle } = props

  return (
    <header
      css={css`
        display: grid;
        grid-template-columns: auto 1fr;
        grid-row-gap: 10px;
      `}
    >
      <h1
        css={css`
          margin: 0;
          font-family: 'Dancing Script';
          font-size: 2rem;
          font-weight: 400;
        `}
      >
        <Link to="/" tabIndex={-1}>
          {title}
        </Link>
      </h1>
      <h2
        css={css`
          margin: 0;
          font-family: 'Open Sans';
          font-size: 1rem;
          font-weight: 600;
          color: var(--accent-color);
          grid-row-start: 2;
        `}
      >
        {subtitle}
      </h2>
      <Nav />
    </header>
  )
}

export { Header }
