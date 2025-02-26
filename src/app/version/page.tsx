import Card from "@/components/Card/Card";
import React from "react";
import { IoOpen } from "react-icons/io5";
import { changelog } from "./changelog";

const Version: React.FC = () => {
  const latestVersion = changelog[0];

  return (
    <section className="px-4 pt-6 md:pt-10 lg:px-20">
      <Card
        outerClassName="w-full min-h-162"
        innerClassName="min-h-162 gap-6 px-6 py-8"
      >
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold">
            Threddit {latestVersion.version}
          </h2>
          <p className="text-zinc-500 italic text-lg">
            Released: {latestVersion.date}
          </p>
        </div>
        <div className="flex flex-col gap-4 text-lg">
          <p>
            A complete and immersive changelog is available on{" "}
            <a
              href="https://github.com/lucascarozza/nextjs-threddit"
              className="text-orange-400 underline underline-offset-4 inline-flex items-center ml-1"
              aria-label="Threddit GitHub Repository (opens in new tab)"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <IoOpen className="text-sm ml-1 align-middle" />
            </a>
          </p>

          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
            <ul className="list-disc list-inside space-y-2">
              {latestVersion.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default Version;
