import { ResponseData } from "@/lib/features/postsSlice/postsSlice";

// Format numbers
export function formatNumber(num: number): string {
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}k`;
  }
  return num.toString();
}

// Format time
export function formatTime(timestamp: number): string {
  const now = Math.floor(Date.now() / 1000);
  const diff = now - timestamp;

  if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hr ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)} d ago`;
  if (diff < 2629746) return `${Math.floor(diff / 604800)} wk ago`;
  if (diff < 31556952) return `${Math.floor(diff / 2629746)} mo ago`;
  return `${Math.floor(diff / 31556952)} yr ago`;
}

// Format URLs
export const formatUrl = (url: string): string => {
  const cleanedUrl = url.replace(/^(https?:\/\/)?(www\.)?/i, "");
  const domainMatch = cleanedUrl.match(/^([^\/]+)/);
  return domainMatch ? domainMatch[1] : cleanedUrl;
};

// Remove unwanted URLs
export const shouldExcludeUrl = (url: string | null): boolean => {
  if (!url) return false;
  try {
    const parsed = new URL(url);
    return (
      parsed.hostname.endsWith(".redd.it") || 
      parsed.pathname.includes("/gallery") ||
      parsed.hostname === "imgur.com" ||
      parsed.hostname.endsWith(".imgur.com")
    );
  } catch {
    return false;
  }
};

// Format Reddit response data
export const processRedditPosts = (data: ResponseData) => {
  return data.data.children.map((post) => ({
    id: post.data.id,
    subreddit: post.data.subreddit,
    title: post.data.title,
    selftext: post.data.selftext || null,
    created_utc: post.data.created_utc,
    score: post.data.score,
    url_overridden_by_dest: post.data.url_overridden_by_dest || null,
    num_comments: post.data.num_comments,
    thumbnail: post.data.thumbnail,
    permalink: "https://www.reddit.com" + post.data.permalink,
  }))
  .filter((post) => !shouldExcludeUrl(post.url_overridden_by_dest));
};