import { getPortfolioRepos } from "@/lib/github";
import { ArrowUpRight, Building2, Mail } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import { JourneyTimeline } from "@/components/journey-timeline";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Home() {
  const projects = await getPortfolioRepos();

  return (
    <>
      <HeroSection />

      {/* About */}
      <section
        id="about"
        className="border-t border-zinc-200 dark:border-zinc-800"
      >
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
              About
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              A product-minded developer with a soft spot for polished web experiences.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-[1.35fr_0.65fr]">
            <Card className="rounded-3xl border-border/80 bg-card/90 shadow-lg backdrop-blur-sm">
              <CardHeader>
                <CardTitle>What I enjoy building</CardTitle>
                <CardDescription>
                  Websites and web platforms that feel clear, useful, and built to last.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm leading-7 text-muted-foreground">
                I enjoy bringing ideas from concept to launch. My work spans everything
                from interactive projects like driVR and WikiQuest to larger
                organization-driven platforms such as Armada and Medieteknik.com. I care
                about clean UI, solid architecture, and a developer experience that makes
                products easier to evolve over time.
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-border/80 bg-card/90 shadow-lg backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Focus</CardTitle>
                <CardDescription>
                  Frontend and full-stack product work with maintainability in mind.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm leading-7 text-muted-foreground">
                I like interfaces that feel deliberate, systems that stay manageable as
                they grow, and products that support real users and real workflows.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <JourneyTimeline />

      {/* Projects */}
      <section
        id="projects"
        className="border-t border-zinc-200 dark:border-zinc-800"
      >
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Projects
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Selected work across experiments, products, and organization-driven platforms.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              A mix of public-facing websites, internal systems, and interactive side
              projects. The goal is usually the same: make something useful, clear, and
              enjoyable to use.
            </p>
          </div>
          {projects.length > 0 ? (
            <div className="mt-8 grid gap-6 grid-cols-[repeat(auto-fit,minmax(18rem,1fr))]">
              {projects.map((project) => {
                return (
                  <Card
                    key={project.id}
                    className="rounded-3xl border-border/80 bg-card/90 shadow-lg backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-2 min-w-0">
                        {project.org && (
                          <Building2 className="h-4 w-4 shrink-0 text-muted-foreground" />
                        )}
                        <div className="min-w-0">
                          <CardTitle className="truncate">{project.title}</CardTitle>
                        </div>
                      </div>
                      <CardDescription className="pt-2 leading-6">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="rounded-full"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="mt-auto flex flex-wrap gap-2 justify-start bg-transparent border-t-0 pt-0">
                      {project.siteUrl && (
                        <Button asChild variant="outline" size="sm" className="rounded-full">
                          <a href={project.siteUrl} target="_blank" rel="noopener noreferrer">
                            Public site
                            <ArrowUpRight data-icon="inline-end" />
                          </a>
                        </Button>
                      )}

                      {project.repoUrl ? (
                        <Button asChild size="sm" className="rounded-full">
                          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                            View repo
                            <ArrowUpRight data-icon="inline-end" />
                          </a>
                        </Button>
                      ) : (
                        <Button variant="secondary" size="sm" className="rounded-full pointer-events-none cursor-default">
                          Private repo
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
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
        <div className="mx-auto max-w-5xl px-6 py-20">
          <Card className="rounded-4xl border-border/80 bg-card/90 shadow-lg backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl">
                Interested in building something useful together?
              </CardTitle>
              <CardDescription className="max-w-2xl text-base leading-7">
                I&apos;m always happy to hear about ambitious product ideas, web platform
                work, or opportunities where thoughtful UX and strong engineering both matter.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm leading-7 text-muted-foreground">
                Frontend and full-stack product work, website platforms, and design-minded
                engineering collaborations are especially interesting to me.
              </div>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-3 justify-start bg-transparent">
              <Button asChild className="rounded-full">
                <a href="mailto:dev.einar.harri@gmail.com">
                  <Mail data-icon="inline-start" />
                  Send me an email
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <a href="https://www.linkedin.com/in/einar-harri/" target="_blank" rel="noopener noreferrer">
                  Connect on LinkedIn
                  <ArrowUpRight data-icon="inline-end" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </>
  );
}
