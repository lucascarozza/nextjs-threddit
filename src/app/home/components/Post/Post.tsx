import React from "react";

import Card from "@/components/Card/Card";
import PostContent from "./components/PostContent/PostContent";
import PostFooter from "./components/PostFooter/PostFooter";
import PostHeader from "./components/PostHeader/PostHeader";
import PostMedia from "./components/PostMedia/PostMedia";
import PostTitle from "./components/PostTitle/PostTitle";


interface PostProps {
  id: string;
  subreddit: string;
  title: string;
  selftext: string | null;
  created_utc: number;
  score: number;
  url_overridden_by_dest: string | null;
  num_comments: number;
  thumbnail: string;
  permalink: string;
}

const Post: React.FC<PostProps> = ({
  subreddit,
  title,
  selftext,
  created_utc,
  score,
  url_overridden_by_dest,
  num_comments,
  thumbnail,
  permalink,
}) => {
  return (
    <Card
      outerClassName="w-full md:w-196 min-h-32 cursor-default md:transition-all md:hover:scale-101"
      innerClassName="p-6 gap-6"
      aria-labelledby={`post-title-${subreddit}`}
    >
      <PostHeader subreddit={subreddit} created_utc={created_utc} />
      <PostTitle subreddit={subreddit} title={title} />
      <PostContent
        selftext={selftext}
        url_overridden_by_dest={url_overridden_by_dest}
        thumbnail={thumbnail}
      />
      <PostMedia />
      <PostFooter
        permalink={permalink}
        score={score}
        num_comments={num_comments}
      />
    </Card>
  );
};

export default Post;
