import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { LayoutQuery } from '../../graphql-types'

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
    <div>
      <HelmetDatoCms favicon={data.datoCmsSite.faviconMetaTags} />
      <h3>
        <Link to="/">{data.datoCmsSite.globalSeo.siteName}</Link>
      </h3>
      {children}
    </div>
  )
}

export default Layout
