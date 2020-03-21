import React from 'react'
import { DatoCmsArticle } from '../../graphql-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'

interface IProps {
  article: Partial<DatoCmsArticle>
}

const ArticlePreview: React.FC<IProps> = ({ article }) => {
  return (
    <Link to={`/articles/${article.slug}`}>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          border: 1px solid black;
          padding: 5px;
        `}
      >
        <h3>{article.title}</h3>
        {article.coverImage && (
          <Img
            fluid={article.coverImage.fluid}
          />
        )}
      </div>
    </Link>
  )
}

export { ArticlePreview }
