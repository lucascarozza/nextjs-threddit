import React from "react";
import Image from "next/image";

import { MediaItem } from "@/utils/extractors";

interface PostMediaProps {
  extractedMedia?: MediaItem[] | null;
}

const PostMedia: React.FC<PostMediaProps> = ({ extractedMedia }) => {
  if (!extractedMedia || extractedMedia.length === 0) return null;

  return (
    <div className="pb-1 inline-flex gap-2 overflow-x-auto">
      {extractedMedia.map((media, index) =>
        media.type === "image" ? (
          <Image
            key={index}
            src={media.url}
            quality={50}
            alt=""
            width={300}
            height={300}
            className="h-96 w-auto rounded-md shadow-sm object-cover"
          />
        ) : (
          <video
            key={index}
            src={media.url}
            autoPlay={false}
            controls
            className="h-96 w-auto rounded-md shadow-sm"
            playsInline>Media not supported.</video>
        )
      )}
    </div>
  );
};

export default PostMedia;
