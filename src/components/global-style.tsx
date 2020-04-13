import React from "react";
import { Global, css } from "@emotion/core";

const GlobalStyle: React.FC = () => {
  return (
    <Global
      styles={css`
        /* dancing-script-regular - latin */
        @font-face {
          font-family: "Dancing Script";
          font-style: normal;
          font-weight: 400;
          src: local(""),
            url("/fonts/dancing-script-v14-latin-regular.woff2") format("woff2"),
            url("/fonts/dancing-script-v14-latin-regular.woff") format("woff");
        }

        /* open-sans-regular - latin */
        @font-face {
          font-family: "Open Sans";
          font-style: normal;
          font-weight: 400;
          src: local("Open Sans Regular"), local("OpenSans-Regular"),
            url("/fonts/open-sans-v17-latin-regular.woff2") format("woff2"),
            url("/fonts/open-sans-v17-latin-regular.woff") format("woff");
        }
        /* open-sans-600 - latin */
        @font-face {
          font-family: "Open Sans";
          font-style: normal;
          font-weight: 600;
          src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"),
            url("/fonts/open-sans-v17-latin-600.woff2") format("woff2"),
            url("/fonts/open-sans-v17-latin-600.woff") format("woff");
        }
        /* open-sans-700 - latin */
        @font-face {
          font-family: "Open Sans";
          font-style: normal;
          font-weight: 700;
          src: local("Open Sans Bold"), local("OpenSans-Bold"),
            url("/fonts/open-sans-v17-latin-700.woff2") format("woff2"),
            url("/fonts/open-sans-v17-latin-700.woff") format("woff");
        }
        /* merriweather-regular - latin */
        @font-face {
          font-family: "Merriweather";
          font-style: normal;
          font-weight: 400;
          src: local("Merriweather Regular"), local("Merriweather-Regular"),
            url("/fonts/merriweather-v21-latin-regular.woff2") format("woff2"),
            url("/fonts/merriweather-v21-latin-regular.woff") format("woff");
        }

        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }

        html {
          --background-color: #ede4df;
          --accent-color: #b83e29;
          --card-color: #dcd7d3;
          --secondary-info-color: #737373;
          --call-to-action-color: #4d7882;

          background-color: var(--background-color);
          font-size: 15px;
          font-family: "Open Sans";
        }

        button {
          cursor: pointer;
        }

        a {
          text-decoration: none;
          color: inherit;
        }
      `}
    />
  );
};

export { GlobalStyle };
