import React, { useState } from "react";
import { number, boolean, withKnobs } from "@storybook/addon-knobs";
import { FormInput, FormTextArea } from "./form-input";
import { css } from "@emotion/core";

export default {
  title: "FormInput",
  decorators: [withKnobs],
};

export const Input = () => {
  return <FormInput id="name" label="Name" />;
};

export const TextArea = () => {
  const [value, setValue] = useState("");

  return (
    <FormTextArea
      id="message"
      label="Message"
      maxLength={
        boolean("use max length", true) ? number("maxLength", 1000) : undefined
      }
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const OverrideStyles = () => {
  return (
    <>
      <p>
        The <code>resize</code> style has been overriden to allow resizing in
        both directions.
      </p>
      <FormTextArea
        id="message"
        label="Message"
        css={css`
          resize: both;
        `}
      />
    </>
  );
};
