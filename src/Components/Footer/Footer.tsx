import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaLock,
  FaQuestion,
  FaReddit,
} from "react-icons/fa";
import { Button } from "../Button/Button";
import { changelog } from "@/app/version/changelog";

const Footer: React.FC = () => {
  const latestVersion = changelog[0];

  return (
    <footer className="flex h-50 flex-col items-center justify-center gap-6 md:gap-4 px-4 md:h-30 md:flex-row md:justify-between lg:px-20">
      <div className="inline-flex items-center justify-center gap-2 text-zinc-500">
        <Link href={"/help-center"}>
          <Button.Root
            title="Help Center"
            className="shadow-sm transition-all hover:scale-105"
            aria-label="Help Center"
          >
            <Button.Icon icon={FaQuestion} />
            <Button.Text className="hidden sm:block">Help Center</Button.Text>
          </Button.Root>
        </Link>
        <Link href={"/privacy"}>
          <Button.Root
            title="Privacy"
            className="shadow-sm transition-all hover:scale-105"
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
            title="GitHub Repository"
            className="shadow-sm transition-all hover:scale-105"
            aria-label="GitHub Repository (opens in new tab)"
          >
            <Button.Icon icon={FaGithub} />
            <Button.Text className="hidden sm:block">
              GitHub Repository
            </Button.Text>
          </Button.Root>
        </a>

        <a
          href="https://linkedin.com/in/lucascarozza"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button.Root
            title="LinkedIn"
            className="shadow-sm transition-all hover:scale-105"
            aria-label="LinkedIn (opens in new tab)"
          >
            <Button.Icon icon={FaLinkedin} />
            <Button.Text className="hidden sm:block">LinkedIn</Button.Text>
          </Button.Root>
        </a>
      </div>
      <div className="flex w-auto flex-col items-center text-end text-zinc-600 md:items-end">
        <span className="flex items-center justify-center gap-1.5">
          <p>
            <Link href={"/version"}>
              <span className="underline transition-colors hover:text-zinc-500">
                {latestVersion.version}
              </span>
            </Link>{" "}
            | Powered by
          </p>
          <span className="flex items-center justify-center gap-1 transition-colors hover:text-orange-500">
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
        </span>
        <p>&copy; 2025 Lucas Carozza. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
