import { Post } from "@/lib/features/postsSlice/postsSlice";

export type MediaItem = {
  type: "video" | "image";
  url: string;
};

const isImgurImage = (url: string): boolean => {
  try {
    return new URL(url).hostname === "i.imgur.com";
  } catch {
    return false;
  }
};

export const extractPostMedia = (post: Post): MediaItem[] | null => {
  if (post.media?.reddit_video?.fallback_url) {
    return [{ type: "video", url: post.media.reddit_video.fallback_url }];
  }

  if (
    post.url.match(/\.(jpg|jpeg|png|webp|gif)$/i) ||
    post.url.includes("i.redd.it") ||
    isImgurImage(post.url)
  ) {
    return [{ type: "image", url: post.url }];
  }

  if (post.is_gallery && post.media_metadata) {
    return Object.entries(post.media_metadata).map(([id, media]) => {
      const ext = media.m.split("/")[1];
      return {
        type: "image" as const,
        url: `https://i.redd.it/${id}.${ext}`.replace("preview.", "")
      };
    });
  }

  return null;
};
