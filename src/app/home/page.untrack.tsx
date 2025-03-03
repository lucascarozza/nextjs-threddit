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
        className="min-h-146 flex flex-col items-center gap-6 pt-6 md:pt-10 px-4"
        aria-labelledby="posts-heading"
      >
        <h1 id="posts-heading" className="sr-only">
          Posts from {currentSubreddit}
        </h1>

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
              url_overridden_by_dest={post.url_overridden_by_dest}
              num_comments={post.num_comments}
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
