import React from "react";
import { Comment } from "./comment";
import { VerifiedComment } from "api";

export default {
  title: "Comment",
  component: Comment,
};

const mockComment: VerifiedComment = {
  id: "1234",
  date: new Date().toISOString(),
  author: "Bob",
  text: "Heeey here's some text!",
};

export const Basic = () => <Comment comment={mockComment} />;
