import React from 'react'
import Layout from '../components/layout'
import { css } from '@emotion/core'

const Thanks: React.FC = () => {
  return (
    <Layout>
      <h2>
        Tak for din kommentar!{' '}
        <span role="img" aria-label="et rødt hjerte">
          ❤️
        </span>
      </h2>
      <p>
        Den skal lige godkendes inden den dukker op på siden, så jeg ved at det
        ikke er spam.
      </p>
      <button
        onClick={() => window.history.back()}
        css={css`
          appearance: none;
          background: none;
          border: none;
        `}
      >
        <span role="img" aria-label="en hånd der peger mod venstre">
          👈
        </span>{' '}
        tilbage til artikelen
      </button>
    </Layout>
  )
}

export default Thanks
