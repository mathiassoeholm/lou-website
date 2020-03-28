import React, { useReducer } from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { md } from 'lib/css-in-js'
import { FiMenu } from 'react-icons/fi'
import { useOnClickOutside } from 'lib/hooks'

function NavLink(props: { to: string; title: string }) {
  return (
    <Link to={props.to} activeStyle={{ color: 'var(--accent-color)' }}>
      {props.title}
    </Link>
  )
}

// TODO: Use fancy burger menu: https://codepen.io/ainalem/pen/LJYRxz
const Nav: React.FC = () => {
  const [menuOpen, toggleMenuOpen] = useReducer(s => !s, false)

  const { clickOutsideRef } = useOnClickOutside(
    () => {
      if (menuOpen) {
        toggleMenuOpen()
      }
    },
    { includeSelf: true }
  )

  return (
    <>
      <div
        css={css`
          background: black;
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 1;
          transition: opacity 200ms ease-in-out;
          opacity: ${menuOpen ? 0.4 : 0};
          pointer-events: none;
        `}
      />
      <nav
        ref={r => (clickOutsideRef.current = r)}
        css={css`
          position: absolute;
          z-index: 2;
          top: 2rem;
          right: 3rem;
          display: grid;
          font-family: 'Open Sans';
          font-weight: 600;
          justify-content: end;
          justify-items: end;
          font-size: 1.5rem;
          grid-gap: 2px;

          .menu-button {
            font-size: 2.5rem;
            padding: 0.25rem;
            background: ${menuOpen ? 'white' : 'none'};
            cursor: pointer;
            appearance: none;
            border: none;
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--accent-color);
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

            .menu-button {
              display: none;
            }

            a {
              visibility: visible;
              background: none;
            }
          }
        `}
      >
        <button className="menu-button" onClick={toggleMenuOpen}>
          <FiMenu />
        </button>
        <NavLink to={'/'} title="Forside" />
        <NavLink to={'/blog'} title="Blog" />
        <NavLink to={'/om-mig'} title="Om mig" />
        <NavLink to={'/kontakt'} title="Kontakt" />
      </nav>
    </>
  )
}

export { Nav }
