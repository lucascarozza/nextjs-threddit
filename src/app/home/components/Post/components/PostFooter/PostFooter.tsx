import React from "react";
import { FaReddit } from "react-icons/fa";
import { FaComment, FaHeart } from "react-icons/fa6";

import { formatNumber } from "@/utils/formatters";

const PostFooter: React.FC<{
  permalink: string;
  score: number;
  num_comments: number;
}> = ({ permalink, score, num_comments }) => (
  <div className="inline-flex items-center gap-2">
    <a href={`${permalink}`} target="_blank" rel="noopener noreferrer">
      <button
        role="button"
        type="button"
        className="text-2xl h-11 w-11 flex items-center justify-center shrink-0 rounded-full bg-orange-500 text-white transition-all hover:scale-110 hover:cursor-pointer"
      >
        <FaReddit aria-hidden="true" />
      </button>
    </a>

    <span className="text-md px-4 py-2 h-11 w-auto inline-flex items-center shrink-0 gap-1 rounded-full bg-zinc-700 text-zinc-400">
      <FaHeart aria-hidden="true" />
      {formatNumber(score)}
    </span>

    <span className="text-md px-4 py-1 h-11 w-auto inline-flex items-center shrink-0 gap-1 rounded-full bg-zinc-700 text-zinc-400">
      <FaComment aria-hidden="true" />
      {formatNumber(num_comments)}
    </span>
  </div>
);

export default PostFooter;
