import React from "react";
import { action } from "@storybook/addon-actions";
import { CommentForm } from "./comment-form";

export default {
  title: "CommentForm",
  component: CommentForm,
};

export const Basic = () => {
  return <CommentForm onSubmit={action("onSubmit")} />;
};
