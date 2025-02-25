import React from "react";
import Post from "./components/Post/Post";

const Home: React.FC = () => {
  return (
    <section className="flex flex-col gap-6 items-center pt-6 md:pt-10 px-4">
      <Post />
      <Post />
      <Post />
    </section>
  );
};

export default Home;
