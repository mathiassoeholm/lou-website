import React, { useReducer } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { css } from "@emotion/core";
import { sm } from "lib/css-in-js";
import { FaHamburger } from "react-icons/fa";
import { useOnClickOutside } from "lib/hooks";
import { NavQuery } from "../../graphql-types";

function NavLink(props: { to: string; title: string }) {
  return (
    <Link to={props.to} activeStyle={{ color: "var(--accent-color)" }}>
      {props.title}
    </Link>
  );
}

// TODO: Use fancy burger menu: https://codepen.io/ainalem/pen/LJYRxz
const Nav: React.FC = () => {
  const data = useStaticQuery<NavQuery>(graphql`
    query Nav {
      datoCmsHome {
        menuName
      }
    }
  `);

  const [menuOpen, toggleMenuOpen] = useReducer((s) => !s, false);

  const { clickOutsideRef } = useOnClickOutside(
    () => {
      if (menuOpen) {
        toggleMenuOpen();
      }
    },
    { includeSelf: true }
  );

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
        ref={(r) => (clickOutsideRef.current = r)}
        css={css`
          position: absolute;
          z-index: 2;
          top: 1rem;
          right: 1rem;
          display: grid;
          font-family: "Open Sans";
          font-weight: 600;
          justify-content: end;
          justify-items: end;
          font-size: 1.5rem;
          grid-gap: 2px;

          .menu-button {
            font-size: 2rem;
            padding: 0.25rem;
            background: ${menuOpen ? "white" : "none"};
            cursor: pointer;
            appearance: none;
            border: none;
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--accent-color);
          }

          a {
            visibility: ${menuOpen ? "visible" : "hidden"};
            background: white;
            padding: 0.25rem;
          }

          ${sm} {
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
          <FaHamburger />
        </button>
        <NavLink to={"/"} title={data.datoCmsHome.menuName} />
        <NavLink to={"/blog"} title="Blog" />
        <NavLink to={"/om-mig"} title="Om mig" />
        <NavLink to={"/kontakt"} title="Kontakt" />
      </nav>
    </>
  );
};

export { Nav };
