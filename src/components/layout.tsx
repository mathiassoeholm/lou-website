import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import 'normalize.css'

import { LayoutQuery } from '../../graphql-types'
import { GlobalStyle } from './global-style'
import { css } from '@emotion/core'

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery<LayoutQuery>(graphql`
    query Layout {
      datoCmsSite {
        globalSeo {
          siteName
        }
        faviconMetaTags {
          ...GatsbyDatoCmsFaviconMetaTags
        }
      }
    }
  `)

  return (
    <>
      <HelmetDatoCms favicon={data.datoCmsSite.faviconMetaTags} />
      <GlobalStyle />
      <div
        css={css`
          background-color: var(--content-background);
          max-width: 814px;
          margin: auto;
          min-height: 100vh;
          padding: 16px 50px;
          box-shadow: 0px 4px 70px rgba(0, 0, 0, 0.15);
        `}
      >
        <h1
          css={css`
            margin-top: 0;
            font-family: 'Dancing Script';
            font-size: 30px;
          `}
        >
          <Link to="/">{data.datoCmsSite.globalSeo.siteName}</Link>
        </h1>
        {children}
      </div>
    </>
  )
}

export default Layout
