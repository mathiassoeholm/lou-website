import React from 'react'
import { Global, css } from '@emotion/core'

const GlobalStyle: React.FC = () => {
  return (
    <Global
      styles={css`
        /* dancing-script-regular - latin */
        @font-face {
          font-family: 'Dancing Script';
          font-style: normal;
          font-weight: 400;
          src: local(''),
            url('/fonts/dancing-script-v14-latin-regular.woff2') format('woff2'),
            url('/fonts/dancing-script-v14-latin-regular.woff') format('woff');
        }

        /* open-sans-regular - latin */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 400;
          src: local('Open Sans Regular'), local('OpenSans-Regular'),
            url('/fonts/open-sans-v17-latin-regular.woff2') format('woff2'),
            url('/fonts/open-sans-v17-latin-regular.woff') format('woff');
        }
        /* open-sans-600 - latin */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 600;
          src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'),
            url('/fonts/open-sans-v17-latin-600.woff2') format('woff2'),
            url('/fonts/open-sans-v17-latin-600.woff') format('woff');
        }
        /* open-sans-700 - latin */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 700;
          src: local('Open Sans Bold'), local('OpenSans-Bold'),
            url('/fonts/open-sans-v17-latin-700.woff2') format('woff2'),
            url('/fonts/open-sans-v17-latin-700.woff') format('woff');
        }

        html {
          --html-background: #dcd7d3;
          --content-background: #ede4df;
          --accent-color: #b83e29;

          background-color: var(--html-background);
          font-size: 15px;
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
  )
}

export { GlobalStyle }
