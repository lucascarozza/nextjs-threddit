"use client";

import { DropdownMenu } from "radix-ui";
import { FaAngleDown, FaUserCircle } from "react-icons/fa";
import { Button } from "../Button/Button";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";
import { fetchSubreddits } from "@/lib/features/subredditsSlice/subredditsSlice";
import { setCurrentSubreddit } from "@/lib/features/postsSlice/postsSlice";

const SubredditsDropdown: React.FC = () => {
  const dispatch = useAppDispatch();
  const { subredditsList } = useAppSelector((state) => state.subreddits);
  const { currentSubreddit } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchSubreddits());
  }, [dispatch]);

  const handleClick = (subreddit: string) => {
    dispatch(setCurrentSubreddit(subreddit));
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button.Root className="justify-start xl:w-64 shadow-sm transition-colors">
          <Button.Icon icon={FaAngleDown} />
          <Button.Icon icon={FaUserCircle} className="text-3xl" />
          <Button.Text className="hidden xl:block">
            r/{currentSubreddit}
          </Button.Text>
        </Button.Root>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content align="start" className="z-50">
          <div className="mt-2 w-64 h-96 overflow-hidden border border-zinc-700 bg-zinc-800 rounded-3xl shadow-sm">
            <div className="flex flex-col gap-1 p-2 overflow-y-scroll max-h-full">
              <DropdownMenu.Item>
                <Button.Root
                  onClick={() => handleClick("popular")}
                  className="justify-start w-full border-none"
                >
                  <Button.Icon icon={FaUserCircle} className="text-3xl" />
                  <Button.Text>r/popular</Button.Text>
                </Button.Root>
              </DropdownMenu.Item>
              {subredditsList.map((subreddit) => (
                <DropdownMenu.Item key={subreddit.id}>
                  <Button.Root
                    onClick={() => handleClick(subreddit.display_name)}
                    className="justify-start w-full border-none"
                  >
                    <Button.Icon icon={FaUserCircle} className="text-3xl" />
                    <Button.Text>r/{subreddit.display_name}</Button.Text>
                  </Button.Root>
                </DropdownMenu.Item>
              ))}
            </div>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default SubredditsDropdown;
