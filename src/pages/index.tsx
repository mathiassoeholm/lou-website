import React from 'react'
import { graphql } from 'gatsby'
import { IndexPageQuery } from '../../graphql-types'
import Layout from '../components/layout'

interface IProps {
  data: IndexPageQuery
}

const Index: React.FC<IProps> = props => {
  return <Layout>{props.data.site.siteMetadata.title}</Layout>
}

export default Index

export const query = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`
