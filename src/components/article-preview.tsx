import React from 'react'
import { DatoCmsArticle } from '../../graphql-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import { useTruncatedText } from 'lib/hooks'
import { prettyDate } from 'lib/utils'

interface IProps {
  article: Partial<DatoCmsArticle>
}

const ArticlePreview: React.FC<IProps> = ({ article }) => {
  const truncateRef = useTruncatedText(article.introduction)

  return (
    <Link to={`/articles/${article.slug}`}>
      <div
        css={css`
          display: grid;
          grid-template-rows: 1fr 48%;
          height: 260px;
          max-width: 400px;
          background: var(--card-color);
          grid-row-gap: 0.5rem;
        `}
      >
        {article.coverImage && <Img fluid={article.coverImage.fluid} />}
        <div
          css={css`
            display: grid;
            max-height: 100%;
            grid-template-columns: minmax(0, 1fr) auto;
            grid-template-rows: auto 1fr;
            grid-gap: 0.5rem;
            padding: 1rem;
          `}
        >
          <h3
            css={css`
              margin: 0;
              text-overflow: ellipsis;
              overflow: hidden;
              /* Avoid chars like "g" being cut off because of overflow: hidden */
              padding: 1px;
            `}
          >
            {article.title}
          </h3>
          <span
            css={css`
              justify-self: end;
            `}
          >
            {prettyDate(article.meta.firstPublishedAt, 'da-DK')}
          </span>
          <p
            ref={r => (truncateRef.current = r)}
            css={css`
              grid-column: span 2;
              margin: 0;
              max-height: 100%;
              overflow: hidden;
              line-height: 1.6;
            `}
          />
        </div>
      </div>
    </Link>
  )
}

export { ArticlePreview }
