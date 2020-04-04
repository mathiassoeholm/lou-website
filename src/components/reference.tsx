import React from 'react'
import { css } from '@emotion/core'
import { DatoCmsReference } from '../../graphql-types'

interface IProps {
  reference: Partial<DatoCmsReference>
}

const Reference: React.FC<IProps> = ({ reference }) => {
  return (
    <div
      css={css`
        background: var(--card-color);
        min-height: 162px;
        line-height: 1.75;
        padding: 1rem;
        display: grid;
        grid-row-gap: 1rem;
        align-content: space-between;

        * {
          margin: 0;
        }
      `}
    >
      <p>{reference.text}</p>
      <p
        css={css`
          font-weight: 600;
        `}
      >
        - {reference.author},{' '}
        <span
          css={css`
            color: var(--accent-color);
          `}
        >
          {reference.company}
        </span>
      </p>
    </div>
  )
}

export { Reference }
