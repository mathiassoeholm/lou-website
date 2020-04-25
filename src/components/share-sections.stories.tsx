import React from "react";
import { ShareSection } from "./share-section";

export default {
  title: "ShareSection",
};

export const Basic = () => {
  return (
    <ShareSection
      articleUrl="https://lou-website.netlify.app/articles/hej-med-dig"
      articleTitle={"Hej med dig"}
    />
  );
};
