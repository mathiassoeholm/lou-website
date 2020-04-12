import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import "normalize.css";

import { LayoutQuery } from "../../graphql-types";
import { GlobalStyle } from "./global-style";
import { css } from "@emotion/core";
import { Header } from "./header";

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
  `);

  return (
    <>
      <HelmetDatoCms favicon={data.datoCmsSite.faviconMetaTags} />
      <GlobalStyle />
      <div
        css={css`
          position: relative;
          max-width: 814px;
          margin: auto;
          min-height: 100vh;
          padding: 1rem 1rem;
        `}
      >
        <Header
          title={data.datoCmsSite.globalSeo.siteName}
          subtitle={data.datoCmsSite.globalSeo.fallbackSeo.title}
        />
        <div
          css={css`
            padding-top: 2rem;
          `}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
