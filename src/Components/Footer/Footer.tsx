import { FaGithub, FaLock, FaQuestion, FaReddit } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="row-start-3 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
      <div className="inline-flex items-center justify-center gap-2 text-zinc-500">
        <button
          type="button"
          title="Help Center"
          className="inline-flex h-10 items-center justify-center gap-2 px-4 py-2 bg-zinc-800 rounded-full transition-all hover:bg-gradient-to-t hover:from-pink-500 hover:to-yellow-500 hover:text-zinc-50 hover:scale-105 hover:cursor-pointer"
          aria-label="Help Center"
        >
          <FaQuestion aria-hidden="true" />{" "}
          <span className="hidden sm:block">Help Center</span>
        </button>

        <button
          type="button"
          title="Privacy"
          className="inline-flex h-10 items-center justify-center gap-2 px-4 py-2 bg-zinc-800 rounded-full transition-all hover:bg-gradient-to-t hover:from-pink-500 hover:to-yellow-500 hover:text-zinc-50 hover:scale-105 hover:cursor-pointer"
          aria-label="Privacy"
        >
          <FaLock aria-hidden="true" />
          <span className="hidden sm:block">Privacy</span>
        </button>

        <a
          href="https://github.com/lucascarozza/nextjs-threddit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            type="button"
            title="GitHub Repository"
            className="inline-flex h-10 items-center justify-center gap-2 px-4 py-2 bg-zinc-800 rounded-full transition-all hover:bg-gradient-to-t hover:from-pink-500 hover:to-yellow-500 hover:text-zinc-50 hover:scale-105 hover:cursor-pointer"
            aria-label="GitHub Repository"
          >
            <FaGithub aria-hidden="true" />
            <span className="hidden sm:block">GitHub Repository</span>
          </button>
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
