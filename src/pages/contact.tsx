import React from "react";
import { Layout, ContactForm } from "components";
import { contactSubmit } from "api";
import { css } from "@emotion/core";

const Contact: React.FC = () => {
  return (
    <Layout>
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr;
          justify-items: center;
        `}
      >
        <ContactForm
          onSubmit={async (submission) => {
            await contactSubmit(submission);
          }}
        />
      </div>
    </Layout>
  );
};

export default Contact;
