import React from "react";
import { action } from "@storybook/addon-actions";
import { CallToActionButton } from "./call-to-action-button";

export default {
  title: "CallToActionButton",
};

export const Basic = () => {
  return (
    <CallToActionButton onClick={action("onClick")}>
      Press Me
    </CallToActionButton>
  );
};
