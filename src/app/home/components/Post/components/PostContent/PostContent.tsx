import React from "react";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Pluggable } from "unified";

const PostContent: React.FC<{
  selftext: string | null;
}> = ({ selftext }) => (
  <>
    {selftext && (
      <div className="max-h-96 overflow-x-hidden overflow-y-auto text-lg">
        <Markdown remarkPlugins={[remarkGfm as Pluggable]}>{selftext}</Markdown>
      </div>
    )}
  </>
);

export default PostContent;
