import React from "react";
import { addDecorator } from "@storybook/react";
import { GlobalStyle } from "../src/components/global-style";
import "normalize.css";

addDecorator((storyFn) => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
));
