import Card from "@/components/Card/Card";
import { IoOpen } from "react-icons/io5";

const Privacy: React.FC = () => {
  return (
    <article className="px-4 pt-6 md:pt-10 lg:px-20">
      <Card
        outerClassName="w-full min-h-162"
        innerClassName="min-h-162 gap-6 px-6 py-8"
      >
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold">Privacy Notice for Threddit</h2>
          <p className="text-zinc-500 italic text-lg">Last updated: March 8, 2025</p>
        </div>

        <div className="space-y-6 text-lg leading-relaxed mb-4">
          <section aria-labelledby="data-collection">
            <h2 id="data-collection" className="sr-only">
              Data Collection
            </h2>
            <p>
              Threddit is a free, open-source app that lets you browse Reddit
              content through their public API. We don&apos;t collect any
              personal information — no accounts, tracking, cookies, or
              analytics. The app simply displays public content from
              Reddit&apos;s servers.
            </p>
          </section>

          <hr className="border-zinc-700" />

          <section aria-labelledby="third-party">
            <h3 id="third-party" className="text-xl font-semibold mb-3">
              Third-Party Services
            </h3>
            <p>
              Threddit uses Reddit&apos;s API to show content — their
              <a
                href="https://www.reddit.com/policies/privacy-policy"
                className="text-orange-400 underline underline-offset-4 inline-flex items-center ml-1"
                aria-label="Reddit Privacy Policy (opens in new tab)"
                target="_blank"
                rel="noopener noreferrer"
              >
                privacy policy
                <IoOpen className="text-sm ml-1 align-middle" />
              </a>{" "}
              applies to anything you do through their platform.
            </p>
            <p className="mt-4">
              The app is currently hosted on Vercel and its
              <a
                href="https://vercel.com/legal/privacy-policy"
                className="text-orange-400 underline underline-offset-4 inline-flex items-center ml-1"
                aria-label="Vercel Privacy Policy (opens in new tab)"
                target="_blank"
                rel="noopener noreferrer"
              >
                privacy policy
                <IoOpen className="text-sm ml-1 align-middle" />
              </a>{" "}
              covers basic server logging, and our repository is openly
              available on
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
              , which has its own
              <a
                href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                className="text-orange-400 underline underline-offset-4 inline-flex items-center ml-1"
                aria-label="GitHub Privacy Policy (opens in new tab)"
                target="_blank"
                rel="noopener noreferrer"
              >
                privacy practices
                <IoOpen className="text-sm ml-1 align-middle" />
              </a>
              .
            </p>
          </section>

          <hr className="border-zinc-700" />

          <section aria-labelledby="user-rights">
            <h3 id="user-rights" className="text-xl font-semibold mb-3">
              Your Privacy Rights
            </h3>
            <p>
              Since Threddit doesn&apos;t collect data, there&apos;s nothing to
              delete or share. For questions about Reddit&apos;s data handling,
              please contact them directly.
            </p>
          </section>

          <hr className="border-zinc-700" />

          <section aria-labelledby="updates">
            <h3 id="updates" className="text-xl font-semibold mb-3">
              Policy Updates
            </h3>
            <p>
              This privacy notice may be occasionally updated — changes will
              always be{" "}
              <span className="text-green-400 italic">
                +++highlighted like this
              </span>
              .
            </p>
          </section>
        </div>
      </Card>
    </article>
  );
};

export default Privacy;
