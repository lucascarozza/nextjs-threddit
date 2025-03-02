import React from "react";
import Image from "next/image";
import Gordelicia from "@/assets/001.jpeg";
import { FaComment, FaHeart } from "react-icons/fa6";
import Card from "@/components/Card/Card";
import { formatNumber } from "@/utils/formatNumber";
import { formatTime } from "@/utils/formatTime";
import { Button } from "@/components/Button/Button";
import { FaInfoCircle, FaLink } from "react-icons/fa";

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
  return (
    <Card
      outerClassName="w-full md:w-196 min-h-32 cursor-default transition-all hover:scale-101"
      innerClassName="gap-3 p-6"
    >
      {/* Post Header */}
      <div className="inline-flex items-center justify-between">
        <div className="inline-flex items-center gap-2">
          <Image
            alt=""
            src={Gordelicia}
            height={30}
            className="rounded-full"
            aria-hidden="true"
          />
          <p>
            r/{subreddit}
            <span className="text-zinc-500"> • {formatTime(created_utc)}</span>
          </p>
        </div>
      </div>

      {/* Post Title */}
      <div>
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>

      {/* Post Text */}
      {selftext && (
        <div className="text-lg">
          <p>{selftext}</p>
        </div>
      )}

      {/* Post Link */}
      {url_overridden_by_dest && (
        <div className="flex flex-col">
          <span className="flex items-center gap-2 bg-blue-500 rounded-md px-2 py-1">
            <FaInfoCircle className="shrink-0" /> Threddit isn&apos;t
            responsible for external links. Make sure you trust the source
            before clicking.
          </span>
          <a
            href={url_overridden_by_dest}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button.Root
              title=""
              aria-label="Open link in new tab"
              className="justify-start px-5 mt-4 self-start transition-colors"
            >
              <Button.Icon icon={FaLink} />
              <Button.Text>{url_overridden_by_dest}</Button.Text>
            </Button.Root>
          </a>
        </div>
      )}

      {/* Post Media */}
      <div className="inline-flex gap-4 mt-3 pb-2 overflow-x-auto"></div>

      {/* Post Actions */}
      <div className="inline-flex items-center gap-2 ">
        <div
          className="inline-flex items-center gap-1 bg-zinc-700 text-zinc-400 px-4 py-2 rounded-full"
          title={`${formatNumber(score)} likes`}
          aria-label="Likes"
        >
          <FaHeart aria-hidden={true} />
          {formatNumber(score)}
        </div>

        <div
          className="inline-flex items-center gap-1 bg-zinc-700 text-zinc-400 px-4 py-2 rounded-full"
          title={`${formatNumber(num_comments)} comments`}
          aria-label="Comments"
        >
          <FaComment aria-hidden={true} />
          {formatNumber(num_comments)}
        </div>
      </div>
    </Card>
  );
};

export default Post;
