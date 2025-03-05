import React from "react";

const PostMedia: React.FC = () => (
  <div className="pb-1 inline-flex gap-2 overflow-x-auto">
    {[...Array(7)].map((_, index) => (
      <div
        key={index}
        className="shrink-0 h-72 w-72 bg-zinc-300 rounded-md shadow-sm hover:cursor-pointer"
      />
    ))}
  </div>
);

export default PostMedia;