import { useStaticQuery, graphql } from "gatsby";
import { SiteMetadataQuery } from "../graphql-types";

export function useSiteMetadata() {
  const data = useStaticQuery<SiteMetadataQuery>(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  );

  return data.site.siteMetadata;
}
