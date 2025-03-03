import React from "react";
import { FaComment, FaHeart } from "react-icons/fa6";
import { FaInfoCircle, FaLink, FaUserCircle } from "react-icons/fa";

import { Button } from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import { formatNumber, formatTime, formatUrl } from "@/utils/formatters";
import { setCurrentSubreddit } from "@/lib/features/postsSlice/postsSlice";
import { useAppDispatch } from "@/lib/hooks";

interface PostProps {
  id: string;
  subreddit: string;
  title: string;
  selftext: string | null;
  created_utc: number;
  score: number;
  url_overridden_by_dest: string | null;
  num_comments: number;
}

const Post: React.FC<PostProps> = ({
  subreddit,
  title,
  selftext,
  created_utc,
  score,
  url_overridden_by_dest,
  num_comments,
}) => {
  const dispatch = useAppDispatch();

  const handleClick = (subreddit: string) => {
    dispatch(setCurrentSubreddit(subreddit));
  };

  return (
    <Card
      outerClassName="w-full md:w-196 min-h-32 cursor-default transition-all hover:scale-101"
      innerClassName="p-6 gap-6"
      aria-labelledby={`post-title-${subreddit}`}
    >
      {/* Post Header */}
      <div className="inline-flex items-center justify-between">
        <div className="inline-flex items-center gap-2">
          <FaUserCircle className="text-3xl" aria-hidden="true" />
          <p>
            <button
              type="button"
              title={`Go to r/${subreddit}`}
              onClick={() => handleClick(subreddit)}
              className="hover:cursor-pointer hover:underline focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              aria-label={`View posts from subreddit ${subreddit}`}
            >
              r/{subreddit}
            </button>
            <span className="text-zinc-500"> • {formatTime(created_utc)}</span>
          </p>
        </div>
      </div>

      {/* Post Title */}
      <div>
        <h2 id={`post-title-${subreddit}`} className="text-3xl font-bold">
          {title}
        </h2>
      </div>

      {/* Post Text */}
      {selftext && (
        <div className="text-lg">
          <p>{selftext}</p>
        </div>
      )}

      {/* Post Link */}
      {url_overridden_by_dest && (
        <div className="flex flex-col gap-4">
          <div
            role="alert"
            aria-live="polite"
            className="flex items-center gap-2 rounded-md bg-blue-500 px-2 py-1"
          >
            <FaInfoCircle className="shrink-0" aria-hidden="true" /> Threddit
            isn&apos;t responsible for external links. Make sure you trust the
            source before clicking.
          </div>
          <a
            href={url_overridden_by_dest}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open external link: ${formatUrl(
              url_overridden_by_dest
            )}`}
          >
            <Button.Root
              title=""
              aria-label={`Open external link: ${formatUrl(
                url_overridden_by_dest
              )}`}
              className="self-start justify-start px-5 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            >
              <Button.Icon icon={FaLink} />
              <Button.Text>{formatUrl(url_overridden_by_dest)}</Button.Text>
            </Button.Root>
          </a>
        </div>
      )}

      {/* Post Actions */}
      <div className="inline-flex items-center gap-2">
        <div
          className="inline-flex items-center gap-1 rounded-full bg-zinc-700 px-4 py-2 text-zinc-400"
          aria-label={`${formatNumber(score)} likes`}
        >
          <FaHeart aria-hidden="true" />
          <span>{formatNumber(score)}</span>
        </div>

        <div
          className="inline-flex items-center gap-1 rounded-full bg-zinc-700 px-4 py-2 text-zinc-400"
          aria-label={`${formatNumber(num_comments)} comments`}
        >
          <FaComment aria-hidden="true" />
          <span>{formatNumber(num_comments)}</span>
        </div>
      </div>
    </Card>
  );
};

export default Post;
