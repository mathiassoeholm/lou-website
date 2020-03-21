import React from 'react'
import { graphql } from 'gatsby'
import { IndexPageQuery } from '../../graphql-types'

interface IProps {
  data: IndexPageQuery
}

const Index: React.FC<IProps> = props => {
  return <div>{props.data.site?.siteMetadata?.title}</div>
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
