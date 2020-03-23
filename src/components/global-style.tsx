import React from 'react'
import { Global, css } from '@emotion/core'

const GlobalStyle: React.FC = () => {
  return (
    <Global
      styles={css`
        html {
          --html-background: #dcd7d3;
          --content-background: #ede4df;

          background-color: var(--html-background);
        }

        button {
          cursor: pointer;
        }
      `}
    />
  )
}

export { GlobalStyle }
