import React from "react";
import { Layout, ContactForm } from "components";

const Contact: React.FC = () => {
  return (
    <Layout>
      <ContactForm onSubmit={() => null} />
    </Layout>
  );
};

export default Contact;
