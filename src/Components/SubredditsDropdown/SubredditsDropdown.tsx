import { DropdownMenu } from "radix-ui";
import { FaAngleDown, FaUserCircle } from "react-icons/fa";
import { Button } from "../Button/Button";

const SubredditsDropdown: React.FC = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button.Root className="justify-start xl:w-64 shadow-sm transition-colors">
          <Button.Icon icon={FaAngleDown} />
          <Button.Icon icon={FaUserCircle} className="text-3xl" />
          <Button.Text className="hidden xl:block">r/Subreddit</Button.Text>
        </Button.Root>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>

        <DropdownMenu.Content align="start" className="z-50" >
          <div className="mt-2 p-2 w-64 border border-zinc-700 bg-zinc-800 rounded-3xl shadow-sm">

            <DropdownMenu.Item>
              <Button.Root className="justify-start w-full border-none">
                <Button.Icon icon={FaUserCircle} className="text-3xl" />
                <Button.Text >r/Cats</Button.Text>
              </Button.Root>
            </DropdownMenu.Item>

            <DropdownMenu.Item>
              <Button.Root className="justify-start w-full border-none">
                <Button.Icon icon={FaUserCircle} className="text-3xl" />
                <Button.Text>r/Memes</Button.Text>
              </Button.Root>
            </DropdownMenu.Item>

            <DropdownMenu.Item>
              <Button.Root className="justify-start w-full border-none">
                <Button.Icon icon={FaUserCircle} className="text-3xl" />
                <Button.Text>r/News</Button.Text>
              </Button.Root>
            </DropdownMenu.Item>

            <DropdownMenu.Item>
              <Button.Root className="justify-start w-full border-none">
                <Button.Icon icon={FaUserCircle} className="text-3xl" />
                <Button.Text>r/Games</Button.Text>
              </Button.Root>
            </DropdownMenu.Item>

            <DropdownMenu.Item>
              <Button.Root className="justify-start w-full border-none">
                <Button.Icon icon={FaUserCircle} className="text-3xl" />
                <Button.Text>r/Movies</Button.Text>
              </Button.Root>
            </DropdownMenu.Item>

          </div>
        </DropdownMenu.Content>

      </DropdownMenu.Portal>
      
    </DropdownMenu.Root>
  );
};

export default SubredditsDropdown;
