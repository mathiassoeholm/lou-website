import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { Comment } from "./comment";
import { VerifiedComment } from "api";

export default {
  title: "Comment",
  component: Comment,
  decorators: [withKnobs],
};

export const Basic = () => {
  const mockComment: VerifiedComment = {
    id: "1234",
    date: new Date().toISOString(),
    author: text("author", "Bob"),
    text: text(
      "text",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    ),
  };

  return <Comment comment={mockComment} />;
};
