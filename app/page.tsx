import { getPortfolioRepos } from "@/lib/github";
import { LockKeyhole, Building2 } from "lucide-react";

export default async function Home() {
  const projects = await getPortfolioRepos();

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          Hi, my name is
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
          Einar
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          I&apos;m a developer who enjoys building things for the web. Welcome
          to my portfolio.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-zinc-200 dark:border-zinc-800"
      >
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            About
          </h2>
          <p className="mt-4 text-zinc-600 leading-7 dark:text-zinc-400">
            Write a few sentences about yourself here — your background,
            interests, and what drives you as a developer. This section helps
            visitors get to know you beyond your code.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="border-t border-zinc-200 dark:border-zinc-800"
      >
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Projects
          </h2>
          {projects.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => {
                const cardContent = (
                  <>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        {project.isPrivate && (
                          <LockKeyhole
                            className="h-4 w-4 shrink-0 text-zinc-400 dark:text-zinc-500"
                            aria-label="Private"
                          />
                        )}
                        <h3 className="font-semibold text-zinc-900 group-hover:text-zinc-600 dark:text-zinc-50 dark:group-hover:text-zinc-300 truncate">
                          {project.title}
                        </h3>
                      </div>
                      {project.org && (
                        <span className="shrink-0 flex items-center gap-1 rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-200">
                          <Building2 className="h-3 w-3" />
                          {project.org}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </>
                );

                if (project.isPrivate || !project.href) {
                  return (
                    <article
                      key={project.id}
                      className="group rounded-xl border border-zinc-200 p-5 dark:border-zinc-800"
                    >
                      {cardContent}
                    </article>
                  );
                }

                return (
                  <a
                    key={project.id}
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-xl border border-zinc-200 p-5 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
                  >
                    {cardContent}
                  </a>
                );
              })}
            </div>
          ) : (
            <p className="mt-8 text-zinc-600 dark:text-zinc-400">
              Couldn&apos;t load repositories from GitHub right now.
            </p>
          )}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-zinc-200 dark:border-zinc-800"
      >
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Contact
          </h2>
          <p className="mt-4 text-zinc-600 leading-7 dark:text-zinc-400">
            Interested in working together? Feel free to reach out.
          </p>
          <a
            href="mailto:dev.einar.harri@gmail.com"
            className="mt-6 inline-block rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Send me an email
          </a>
          <div>
            <a
              href="https://github.com/einhar1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              View my GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
