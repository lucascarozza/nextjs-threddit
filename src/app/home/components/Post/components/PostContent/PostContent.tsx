import React from "react";
import { FaInfoCircle, FaLink } from "react-icons/fa";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import Image from "next/image";

import { Pluggable } from "unified";

import { formatUrl } from "@/utils/formatters";

const PostContent: React.FC<{
  selftext: string | null;
  url_overridden_by_dest: string | null;
  thumbnail: string;
}> = ({ selftext, url_overridden_by_dest, thumbnail }) => (
  <>
    {selftext && (
      <div className="max-h-96 overflow-x-hidden overflow-y-auto text-lg">
        <Markdown remarkPlugins={[remarkGfm as Pluggable]}>{selftext}</Markdown>
      </div>
    )}

    {url_overridden_by_dest && (
      <div className="flex flex-col gap-4">
        <div
          role="alert"
          aria-live="polite"
          className="flex items-center gap-2 rounded-md bg-blue-500 px-2 py-1"
        >
          <FaInfoCircle className="shrink-0" aria-hidden="true" />
          Threddit isn&apos;t responsible for external links. Make sure you
          trust the source before clicking.
        </div>
        <a
          href={url_overridden_by_dest}
          title={`Open ${formatUrl(url_overridden_by_dest)} in new tab`}
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
              aria-hidden="true"
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
  </>
);

export default PostContent;
