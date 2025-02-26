import Link from "next/link";
import { Button } from "@/components/Button/Button";
import { IoHome } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

export default function NotFound() {
  return (
    <section className="h-[calc(100vh-12.5rem)] flex flex-col items-center justify-center gap-6 md:gap-4 px-6 pt-6 md:pt-10 lg:px-20">
      <h2 className="font-bold text-xl">404 | Page Not Found</h2>
      <p className="text-xl text-center">
        Oops...! I couldn&apos;t find the page you&apos;re looking for.
      </p>
      <div className="inline-flex items-center justify-center gap-3 mt-2">
        <Link href="/">
          <Button.Root
            title="Return Home"
            aria-label="Return Home"
            className="px-4 bg-gradient-to-t from-pink-500 to-yellow-500 hover:scale-105"
          >
            <Button.Icon icon={IoHome}></Button.Icon>
            <Button.Text>Return Home</Button.Text>
          </Button.Root>{" "}
        </Link>
        <a
          href="https://github.com/lucascarozza/nextjs-threddit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button.Root
            title="Create an Issue on GitHub"
            aria-label="Create an Issue on GitHub (opens in new tab)"
            className="px-4 hover:scale-105"
          >
            <Button.Icon icon={FaGithub}></Button.Icon>
            <Button.Text>Create an Issue</Button.Text>
          </Button.Root>{" "}
        </a>
      </div>
    </section>
  );
}
