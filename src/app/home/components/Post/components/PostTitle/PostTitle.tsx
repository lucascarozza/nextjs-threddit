import React from "react";
import Markdown from "react-markdown";

const PostTitle: React.FC<{ title: string }> = ({ title }) => (
  <span className="text-xl md:text-3xl font-bold">
    <Markdown>{title}</Markdown>
  </span>
);

export default PostTitle;
