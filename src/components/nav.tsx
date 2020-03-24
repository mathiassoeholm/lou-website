import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

function NavLink(props: { to: string; title: string }) {
  return (
    <Link to={props.to} activeStyle={{ color: 'var(--accent-color)' }}>
      {props.title}
    </Link>
  )
}

const Nav: React.FC = () => {
  return (
    <nav
      css={css`
        display: grid;
        justify-content: end;
        grid-auto-flow: column;
        grid-gap: 1rem;
        font-family: 'Open Sans';
        font-size: 1rem;
        font-weight: 600;
      `}
    >
      <NavLink to={'/'} title="Forside" />
      <NavLink to={'/blog'} title="Blog" />
      <NavLink to={'/kontakt'} title="Kontakt" />
    </nav>
  )
}

export { Nav }
