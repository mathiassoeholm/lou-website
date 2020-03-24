import React from 'react'
import { Global, css } from '@emotion/core'

const GlobalStyle: React.FC = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'Dancing Script';
          font-style: normal;
          font-weight: 400;
          src: local(''),
            url('/fonts/dancing-script-v14-latin-regular.woff2') format('woff2'),
            url('/fonts/dancing-script-v14-latin-regular.woff') format('woff');
        }

        html {
          --html-background: #dcd7d3;
          --content-background: #ede4df;

          background-color: var(--html-background);
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
