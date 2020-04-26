import React from "react";
import { action } from "@storybook/addon-actions";
import { ContactForm } from "./contact-form";

export default {
  title: "ContactForm",
};

export const Basic = () => {
  return <ContactForm onSubmit={action("onSubmit")} />;
};
