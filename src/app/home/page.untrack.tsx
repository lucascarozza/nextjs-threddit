"use client";

import React, { useEffect } from "react";
import Post from "./components/Post/Post";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { fetchPosts } from "@/lib/features/postsSlice/postsSlice";
import Status from "@/components/Status/Status";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { postsList, currentSubreddit, status } = useAppSelector(
    (state) => state.posts
  );

  useEffect(() => {
    dispatch(fetchPosts(currentSubreddit));
  }, [dispatch, currentSubreddit]);

  return (
    <main>
      <section
        aria-labelledby="posts-heading"
        className="min-h-146 flex flex-col items-center gap-3 md:gap-6 pt-6 md:pt-10 px-4"
      >
        <span id="posts-heading" className="sr-only">
          Posts from r/{currentSubreddit}
        </span>

        {status === "pending" ? (
          <Status aria-label="Loading posts" />
        ) : status === "failed" ? (
          <p role="alert" aria-live="assertive">
            Failed to load posts. Please try again later.
          </p>
        ) : (
          postsList.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              subreddit={post.subreddit}
              title={post.title}
              selftext={post.selftext}
              created_utc={post.created_utc}
              score={post.score}
              num_comments={post.num_comments}
              permalink={post.permalink}
              extractedMedia={post.extractedMedia}
            />
          ))
        )}

        {postsList.length === 0 && status === "success" && (
          <p role="status" aria-live="polite">
            No posts found in r/{currentSubreddit}.
          </p>
        )}
      </section>
    </main>
  );
};

export default Home;
