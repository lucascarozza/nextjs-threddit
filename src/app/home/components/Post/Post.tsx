import React from "react";
import Markdown from "react-markdown";
import { FaComment, FaHeart } from "react-icons/fa6";
import { FaInfoCircle, FaLink, FaReddit, FaUserCircle } from "react-icons/fa";
import remarkGfm from "remark-gfm";
import { Pluggable } from "unified";
import Image from "next/image";

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
  const dispatch = useAppDispatch();

  const handleClick = (subreddit: string) => {
    dispatch(setCurrentSubreddit(subreddit));
  };

  return (
    <Card
      outerClassName="w-full md:w-196 min-h-32 cursor-default md:transition-all md:hover:scale-101"
      innerClassName="p-6 gap-6"
      aria-labelledby={`post-title-${subreddit}`}
    >
      {/* Post Header */}
      <div className="inline-flex items-center">
        <div className="inline-flex items-center gap-2">
          <FaUserCircle className="text-3xl" aria-hidden="true" />
          <p>
            <button
              type="button"
              title={`Go to r/${subreddit}`}
              onClick={() => handleClick(subreddit)}
              className="hover:cursor-pointer hover:underline focus:outline-none"
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
          <Markdown>{title}</Markdown>
        </h2>
      </div>

      {/* Post Text */}
      {selftext && (
        <div className="max-h-96 overflow-x-hidden overflow-y-auto text-lg">
          <Markdown remarkPlugins={[remarkGfm as Pluggable]}>
            {selftext}
          </Markdown>
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
            className="inline-flex bg-zinc-700 border-1 border-zinc-600 rounded-2xl overflow-hidden transition-all md:hover:scale-101 hover:bg-zinc-600"
          >
            {thumbnail.startsWith("https") && (
              <Image
                src={thumbnail}
                width={50}
                height={50}
                quality={10}
                alt=""
                className="h-20 w-32"
              />
            )}
            <button
              role="button"
              title=""
              aria-label={`Open external link: ${formatUrl(
                url_overridden_by_dest
              )}`}
              className="px-4 py-2 min-w-fit inline-flex items-center justify-center gap-2 hover:cursor-pointer"
            >
              <FaLink />
              {formatUrl(url_overridden_by_dest)}
            </button>
          </a>
        </div>
      )}

      {/* Post Media */}
      <div className="pb-1 inline-flex gap-2 overflow-x-auto">
        <div className="shrink-0 h-72 w-72 bg-zinc-300 rounded-md shadow-sm hover:cursor-pointer" />
        <div className="shrink-0 h-72 w-72 bg-zinc-300 rounded-md shadow-sm hover:cursor-pointer" />
        <div className="shrink-0 h-72 w-72 bg-zinc-300 rounded-md shadow-sm hover:cursor-pointer" />
        <div className="shrink-0 h-72 w-72 bg-zinc-300 rounded-md shadow-sm hover:cursor-pointer" />
        <div className="shrink-0 h-72 w-72 bg-zinc-300 rounded-md shadow-sm hover:cursor-pointer" />
        <div className="shrink-0 h-72 w-72 bg-zinc-300 rounded-md shadow-sm hover:cursor-pointer" />
        <div className="shrink-0 h-72 w-72 bg-zinc-300 rounded-md shadow-sm hover:cursor-pointer" />
      </div>

      {/* Post Footer */}
      <div className="inline-flex items-center gap-2">
        <a
          href={`${permalink}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View original post. Open in new tab."
        >
          <button
            role="button"
            type="button"
            className="text-2xl h-11 w-11 flex items-center justify-center shrink-0 rounded-full bg-orange-500 text-white transition-all hover:scale-110 hover:cursor-pointer"
            aria-label={`View original post. Open in new tab.`}
          >
            <FaReddit aria-hidden="true" />
          </button>
        </a>

        <div
          className="text-md px-4 py-2 h-11 w-auto inline-flex items-center shrink-0 gap-1 rounded-full bg-zinc-700 text-zinc-400"
          aria-label={`${formatNumber(score)} likes`}
        >
          <FaHeart aria-hidden="true" />
          <span>{formatNumber(score)}</span>
        </div>

        <div
          className="text-md px-4 py-1 h-11 w-auto inline-flex items-center shrink-0 gap-1 rounded-full bg-zinc-700 text-zinc-400"
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
