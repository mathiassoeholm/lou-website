import React from "react";
import { Layout } from "components";
import { css } from "@emotion/core";

const NotFound: React.FC = () => {
  return (
    <Layout>
      <h1
        css={css`
          font-family: "Open Sans";
        `}
      >
        Siden findes ikke{" "}
        <span role="img" aria-label="forpint emoji">
          😧
        </span>
      </h1>
    </Layout>
  );
};

export default NotFound;
