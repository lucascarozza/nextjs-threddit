import React from "react";
import Markdown from "react-markdown";

const PostTitle: React.FC<{ subreddit: string; title: string }> = ({
  subreddit,
  title,
}) => (
  <div>
    <h2 id={`post-title-${subreddit}`} className="text-3xl font-bold">
      <Markdown>{title}</Markdown>
    </h2>
  </div>
);

export default PostTitle;