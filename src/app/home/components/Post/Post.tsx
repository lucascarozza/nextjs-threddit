import React from "react";
import Card from "@/components/Card/Card";
import PostContent from "./components/PostContent/PostContent";
import PostFooter from "./components/PostFooter/PostFooter";
import PostHeader from "./components/PostHeader/PostHeader";
import PostMedia from "./components/PostMedia/PostMedia";
import PostTitle from "./components/PostTitle/PostTitle";
import { MediaItem } from "@/utils/extractors";

interface PostProps {
  id: string;
  subreddit: string;
  title: string;
  selftext: string | null;
  created_utc: number;
  score: number;
  num_comments: number;
  permalink: string;
  extractedMedia?: MediaItem[] | null;
}

const Post: React.FC<PostProps> = ({
  subreddit,
  title,
  selftext,
  created_utc,
  score,
  num_comments,
  permalink,
  extractedMedia,
}) => {
  return (
    <Card
      outerClassName="w-full md:w-196 min-h-32 cursor-default md:transition-all md:hover:scale-101"
      innerClassName="p-4 md:p-6 gap-4"
    >
      <PostHeader subreddit={subreddit} created_utc={created_utc} />
      <PostTitle title={title} />
      <PostContent selftext={selftext} />
      <PostMedia extractedMedia={extractedMedia} />
      <PostFooter
        permalink={permalink}
        score={score}
        num_comments={num_comments}
      />
    </Card>
  );
};

export default Post;
