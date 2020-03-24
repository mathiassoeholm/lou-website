import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import 'normalize.css'

import { LayoutQuery } from '../../graphql-types'
import { GlobalStyle } from './global-style'
import { css } from '@emotion/core'
import { Header } from './header'

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery<LayoutQuery>(graphql`
    query Layout {
      datoCmsSite {
        globalSeo {
          siteName
          fallbackSeo {
            title
          }
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
          padding: 2rem 3rem;
          box-shadow: 0px 4px 70px rgba(0, 0, 0, 0.15);
        `}
      >
        <Header
          title={data.datoCmsSite.globalSeo.siteName}
          subtitle={data.datoCmsSite.globalSeo.fallbackSeo.title}
        />
        {children}
      </div>
    </>
  )
}

export default Layout
