import Link from "next/link";
import { FaGithub, FaLock, FaQuestion, FaReddit } from "react-icons/fa";
import { Button } from "../Button/Button";

const Footer: React.FC = () => {
  return (
    <footer className="row-start-3 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
      <div className="inline-flex items-center justify-center gap-2 text-zinc-500">
        <Link href={"/help-center"}>
          <Button.Root
            title="Help Center"
            className="transition-all shadow-sm hover:scale-105"
            aria-label="Help Center"
          >
            <Button.Icon icon={FaQuestion} />
            <Button.Text className="hidden sm:block">Help Center</Button.Text>
          </Button.Root>
        </Link>
        <Link href={"/privacy"}>
          <Button.Root
            title="Privacy"
            className="transition-all shadow-sm hover:scale-105"
            aria-label="Privacy"
          >
            <Button.Icon icon={FaLock} />
            <Button.Text className="hidden sm:block">Privacy</Button.Text>
          </Button.Root>
        </Link>

        <a
          href="https://github.com/lucascarozza/nextjs-threddit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button.Root
            className="transition-all shadow-sm hover:scale-105"
            title="GitHub Repository"
            aria-label="GitHub Repository"
          >
            <Button.Icon icon={FaGithub} />
            <Button.Text className="hidden sm:block">
              GitHub Repository
            </Button.Text>
          </Button.Root>
        </a>
      </div>
      <div className="flex flex-col items-center md:items-end w-auto text-zinc-600">
        <span className="flex items-center justify-center gap-1.5">
          <p>Powered by</p>
          <FaReddit aria-hidden="true" />
          <a
            href="https://www.reddit.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            aria-label="Visit Reddit"
          >
            Reddit.
          </a>
        </span>
        <p>&copy; 2025 Lucas Carozza. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
