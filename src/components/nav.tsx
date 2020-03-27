import React, { useState, useReducer } from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { md } from 'lib/css-in-js'
import { FiMenu } from 'react-icons/fi'

function NavLink(props: { to: string; title: string }) {
  return (
    <Link to={props.to} activeStyle={{ color: 'var(--accent-color)' }}>
      {props.title}
    </Link>
  )
}

// TODO: Use fancy burger menu: https://codepen.io/ainalem/pen/LJYRxz
// TODO: use click outside hook to close menu
const Nav: React.FC = () => {
  const [menuOpen, toggleMenuOpen] = useReducer(s => !s, false)

  return (
    <nav
      css={css`
        position: absolute;
        z-index: 1;
        top: 2rem;
        right: 3rem;
        display: grid;
        font-family: 'Open Sans';
        font-weight: 600;
        justify-content: end;
        justify-items: end;
        font-size: 1.5rem;
        grid-gap: 2px;

        .menu-icon {
          font-size: 2.5rem;
          padding: 0.25rem;
          background: ${menuOpen ? 'white' : 'none'};
        }

        a {
          visibility: ${menuOpen ? 'visible' : 'hidden'};
          background: white;
          padding: 0.25rem;
        }

        ${md} {
          font-size: 1rem;
          grid-auto-flow: column;
          grid-gap: 1rem;

          .menu-icon {
            display: none;
          }

          a {
            visibility: visible;
            background: none;
          }
        }
      `}
    >
      <FiMenu className="menu-icon" onClick={toggleMenuOpen} />
      <NavLink to={'/'} title="Forside" />
      <NavLink to={'/blog'} title="Blog" />
      <NavLink to={'/om-mig'} title="Om mig" />
      <NavLink to={'/kontakt'} title="Kontakt" />
    </nav>
  )
}

export { Nav }
