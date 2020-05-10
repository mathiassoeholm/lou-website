import React from "react";
import { ArticlePreview } from "./article-preview";
import { text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "ArticlePreview",
  decorators: [withKnobs],
};

const coverImage = {
  fluid: {
    aspectRatio: 1,
    base64:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wEEEAAJAAsACwANABEADQASABQAFAASABgAGgAYABoAGAAkACEAHgAeACEAJAA2ACcAKQAnACkAJwA2AFEAMwA7ADMAMwA7ADMAUQBHAFYARwBCAEcAVgBHAIAAZQBZAFkAZQCAAJQAfAB2AHwAlACzAKAAoACzAOEA1QDhASUBJQGKEQAJAAsACwANABEADQASABQAFAASABgAGgAYABoAGAAkACEAHgAeACEAJAA2ACcAKQAnACkAJwA2AFEAMwA7ADMAMwA7ADMAUQBHAFYARwBCAEcAVgBHAIAAZQBZAFkAZQCAAJQAfAB2AHwAlACzAKAAoACzAOEA1QDhASUBJQGK/8IAEQgAHgAeAwEiAAIRAQMRAf/EABgAAAMBAQAAAAAAAAAAAAAAAAMEBQYC/9oACAEBAAAAALavNSMlRYzzSenLdSP/AP/EABUBA...",
    sizes: "(max-width: 400px) 100vw, 400px",
    src:
      "https://www.datocms-assets.com/24335/1585499201-cherries-2852438.jpg?auto=compress%2Cformat&fm=jpg",
    srcSet:
      "https://www.datocms-assets.com/24335/1585499201-cherries-2852438.jpg?auto=compress%2Cformat&dpr=0.04&fm=jpg&w=3018 100w,\nhttps://www.datocms-assets.com/24335/1585499201-cherries-2852438.jpg?auto=compress%2Cformat&dpr=0.07&fm=jpg&w=3018 200w,\nhttps://www.datocms-assets.com/24335/1585499201-cherries-2852438.jpg?auto=compress%2Cformat&dpr=0.14&fm=jpg&w=3018 400w,\nhttps://www.datocms-assets.com/24335/1585499201-cherries-2852438.jpg?auto=compress%2Cformat&dpr=0.2&fm=jpg&w=3018 600w,\nhttps://www.datoc...",
  },
};

export const Small = () => {
  return (
    <ArticlePreview
      article={{
        title: text("title", "Test article"),
        introduction: "intro ".repeat(100),
        slug: "test-article",
        coverImage,
        meta: {
          firstPublishedAt: "2020-03-29T09:32:16.433+01:00",
        },
      }}
    />
  );
};

export const Large = () => {
  return (
    <ArticlePreview
      large
      article={{
        title: text(
          "title",
          "Test article with a very very very very very very long naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaame"
        ),
        introduction: "intro ".repeat(100),
        slug: "test-article",
        coverImage,
        meta: {
          firstPublishedAt: "2020-03-29T09:32:16.433+01:00",
        },
      }}
    />
  );
};
