"use client";

import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { cn } from "@/lib/utils";

export function HeroSection() {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-white dark:bg-zinc-950" />
            <div
                className={cn(
                    "pointer-events-none absolute inset-0 bg-size-[32px_32px]",
                    "bg-[linear-gradient(to_right,rgba(113,113,122,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(113,113,122,0.08)_1px,transparent_1px)]",
                    "dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]",
                    "mask-[radial-gradient(ellipse_at_center,white,transparent_75%)]",
                )}
            />
            <Spotlight
                className="-top-40 left-0 md:-top-24 md:left-60"
                fill="#60a5fa"
            />
            <Spotlight
                className="left-1/2 top-24 h-[130%] w-[120%] -translate-x-1/2"
                fill="#a855f7"
            />

            <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 sm:py-32">
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
                    Hi, I&apos;m Einar
                </p>

                <TextGenerateEffect
                    words="I build web products that solve real problems."
                    className="mt-4 max-w-4xl text-4xl leading-tight sm:text-5xl md:text-6xl"
                />

                <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                    I&apos;m a Media Technology student at KTH working across frontend and
                    full-stack development. I like taking projects from the first idea to
                    deployment, and I&apos;m especially interested in DevOps and the systems
                    that make software easier to ship and maintain.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                    <Button asChild size="lg" className="rounded-full">
                        <a href="#projects">
                            View projects
                            <ArrowRight data-icon="inline-end" />
                        </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full bg-background/70 backdrop-blur-sm">
                        <a href="#contact">
                            Get in touch
                            <Mail data-icon="inline-end" />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
