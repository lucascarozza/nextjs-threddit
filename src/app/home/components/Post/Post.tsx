import React from "react";
import Image from "next/image";
import Gordelicia from "@/assets/001.jpeg";
import { FaHeart } from "react-icons/fa6";
import Card from "@/components/Card/Card";

const Post: React.FC = () => {
  return (
    <Card outerClassName="w-full md:w-196 min-h-32 cursor-default transition-all hover:scale-101" innerClassName="gap-3 p-6">
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
            r/Subreddit
            <span className="text-zinc-500"> • 30 min ago</span>
          </p>
        </div>
        <div
          className="inline-flex items-center gap-1 text-zinc-500"
          title="Likes"
          aria-label="Likes"
        >
          <FaHeart aria-hidden={true} />
          10k
        </div>
      </div>

      {/* Post Title */}
      <div>
        <h2 className="text-3xl font-bold">Lorem ipsum dolor sit amet</h2>
      </div>

      {/* Post Text */}
      <div className="text-lg">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      {/* Post Media */}
      <div className="inline-flex gap-4 mt-3 pb-2 overflow-x-auto">
        <Image
          alt=""
          src={Gordelicia}
          className="h-72 w-auto rounded-lg hover:cursor-pointer"
        />
        <Image
          alt=""
          src={Gordelicia}
          className="h-72 w-auto rounded-lg hover:cursor-pointer"
        />
        <Image
          alt=""
          src={Gordelicia}
          className="h-72 w-auto rounded-lg hover:cursor-pointer"
        />
      </div>
    </Card>
  );
};

export default Post;
