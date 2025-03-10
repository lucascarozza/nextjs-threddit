import React from "react";
import { FaUserCircle } from "react-icons/fa";

import { setCurrentSubreddit } from "@/lib/features/postsSlice/postsSlice";
import { useAppDispatch } from "@/lib/hooks";
import { formatTime } from "@/utils/formatters";

const PostHeader: React.FC<{ subreddit: string; created_utc: number }> = ({
  subreddit,
  created_utc,
}) => {
  const dispatch = useAppDispatch();

  const handleClick = (subreddit: string) => {
    dispatch(setCurrentSubreddit(subreddit));
  };

  return (
    <div className="inline-flex items-center gap-2">
      <button
        role="button"
        type="button"
        title={`Go to r/${subreddit}`}
        onClick={() => handleClick(subreddit)}
        className="inline-flex items-center gap-2 hover:cursor-pointer hover:underline focus:outline-none"
      >
        <FaUserCircle aria-hidden="true" className="text-3xl" />
        r/{subreddit}
      </button>
      <span className="text-zinc-500"> • {formatTime(created_utc)}</span>
    </div>
  );
};

export default PostHeader;
