import React from "react";
import { Layout } from "components";

const NotFound: React.FC = () => {
  return (
    <Layout>
      <h1>
        Siden findes ikke{" "}
        <span role="img" aria-label="forpint emoji">
          😧
        </span>
      </h1>
    </Layout>
  );
};

export default NotFound;
