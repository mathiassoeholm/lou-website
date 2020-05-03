import React from "react";
import { addDecorator } from "@storybook/react";
import { GlobalStyle } from "../src/components/global-style";
import { action } from "@storybook/addon-actions";
import "normalize.css";

addDecorator((storyFn) => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
));

// See more here about Gatsby specific configuration of Storybook:
// https://www.gatsbyjs.org/docs/visual-testing-with-storybook/

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};

// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = "";

// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = (pathname) => {
  action("NavigateTo:")(pathname);
};
