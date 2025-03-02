"use client";

import React, { useEffect } from "react";
import Post from "./components/Post/Post";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { fetchPosts } from "@/lib/features/postsSlice/postsSlice";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { postsList, currentSubreddit, status } = useAppSelector(
    (state) => state.posts
  );

  useEffect(() => {
    dispatch(fetchPosts(currentSubreddit));
  }, [dispatch, currentSubreddit]);

  return (
    <section className="flex flex-col gap-6 items-center pt-6 md:pt-10 px-4">
      {status === "pending" ? (
        <p>Loading...</p>
      ) : status === "failed" ? (
        <p>Failed to load posts</p>
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
      {postsList.length === 0 && status === "success" && <p>No posts found</p>}
    </section>
  );
};

export default Home;
