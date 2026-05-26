"use client";

import {
    BriefcaseBusiness,
    GraduationCap,
    Puzzle,
    Rocket,
    School,
} from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Timeline } from "@/components/ui/timeline";

const bulletClassName =
    "flex items-start gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400";

const timelineData = [
    {
        title: "2014",
        content: (
            <Card className="rounded-3xl border-border/80 bg-card/90 shadow-lg backdrop-blur-sm">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <div className="rounded-2xl bg-pink-100 p-2 text-pink-700 dark:bg-pink-500/10 dark:text-pink-300">
                            <Puzzle className="h-5 w-5" />
                        </div>
                        <CardTitle>First programming experience in Scratch</CardTitle>
                    </div>
                    <CardDescription>
                        My first hands-on experience with programming came through Scratch.
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-sm leading-7 text-muted-foreground">
                    It was an early introduction to logic, interactivity, and the fun of
                    making something on a computer behave exactly the way I wanted.
                </CardContent>
            </Card>
        ),
    },
    {
        title: "2020",
        content: (
            <div className="grid gap-4 md:grid-cols-2">
                <Card className="rounded-3xl border-border/80 bg-card/90 shadow-lg backdrop-blur-sm">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <div className="rounded-2xl bg-blue-100 p-2 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                                <School className="h-5 w-5" />
                            </div>
                            <CardTitle>High school projects and first web experiments</CardTitle>
                        </div>
                        <CardDescription>
                            In high school I built my first website in plain HTML, a Chrome
                            extension, and a library management system. This was the period where
                            programming started to feel like something I genuinely wanted to keep doing.
                        </CardDescription>
                    </CardHeader>
                </Card>

                <Card className="rounded-3xl border-border/80 bg-card/90 shadow-lg backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle>Projects from that period</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3">
                            <li className={bulletClassName}>
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                                <p>Built my first website in plain HTML</p>
                            </li>
                            <li className={bulletClassName}>
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                                <p>Created a Chrome extension for Swedish dictionary lookups</p>
                            </li>
                            <li className={bulletClassName}>
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                                <p>Built a library management system</p>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        ),
    },
    {
        title: "2023",
        content: (
            <Card className="rounded-3xl border-border/80 bg-card/90 shadow-lg backdrop-blur-sm">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <div className="rounded-2xl bg-amber-100 p-2 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300">
                            <GraduationCap className="h-5 w-5" />
                        </div>
                        <div>
                            <CardTitle>KTH Degree Programme in Media Technology</CardTitle>
                            <CardDescription className="mt-1">
                                Built my first website using React.
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        <div className={bulletClassName}>
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                            <p>
                                Started the KTH degree programme in Media Technology and began working with more modern web tooling.
                            </p>
                        </div>
                        <div className={bulletClassName}>
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                            <p>
                                Built my first React website,{" "}
                                <a href="#projects" className="font-medium text-foreground underline-offset-4 hover:underline">WikiQuest</a>.
                            </p>
                        </div>
                        <div className={bulletClassName}>
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                            <p>
                                Also built{" "}
                                <a href="#projects" className="font-medium text-foreground underline-offset-4 hover:underline">driVR</a>,
                                continuing to explore more interactive web experiences.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        ),
    },
    {
        title: "2025",
        content: (
            <div className="grid gap-4 md:grid-cols-2">
                <Card className="rounded-3xl border-border/80 bg-card/90 shadow-lg backdrop-blur-sm">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <div className="rounded-2xl bg-violet-100 p-2 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300">
                                <BriefcaseBusiness className="h-5 w-5" />
                            </div>
                            <CardTitle>Started working on THS Armada&apos;s web platform</CardTitle>
                        </div>
                        <CardDescription>
                            Joined the team working on THS Armada&apos;s website as a developer and later
                            became Head of Web, contributing to both the public site and the CMS behind it.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm leading-7 text-muted-foreground">
                        <p>
                            <a href="#projects" className="font-medium text-foreground underline-offset-4 hover:underline">armada.nu</a>{" "}
                            and its accompanying CMS.
                        </p>
                    </CardContent>
                </Card>

                <Card className="rounded-3xl border-border/80 bg-card/90 shadow-lg backdrop-blur-sm">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <div className="rounded-2xl bg-cyan-100 p-2 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-300">
                                <BriefcaseBusiness className="h-5 w-5" />
                            </div>
                            <CardTitle>Webmaster for the Chapter for Media Technology</CardTitle>
                        </div>
                        <CardDescription>
                            Also started working on the Chapter for Media Technology&apos;s website as the
                            chapter&apos;s webmaster, helping maintain and improve the platform.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3">
                            <li className={bulletClassName}>
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                                <p>
                                    Website:{" "}
                                    <a href="#projects" className="font-medium text-foreground underline-offset-4 hover:underline">medieteknik.com</a>
                                </p>
                            </li>
                            <li className={bulletClassName}>
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                                <p>Worked on real organizational needs, not just isolated side projects.</p>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        ),
    },
    {
        title: "2026",
        content: (
            <Card className="rounded-3xl border-border/80 bg-card/90 shadow-lg backdrop-blur-sm">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <div className="rounded-2xl bg-sky-100 p-2 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300">
                            <Rocket className="h-5 w-5" />
                        </div>
                        <div>
                            <CardTitle>Looking ahead</CardTitle>
                            <CardDescription className="mt-1">
                                Continuing to grow as a product-minded developer.
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        <div className={bulletClassName}>
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                            <p>
                                Keep building web products that combine thoughtful UX, strong engineering,
                                and clear product direction.
                            </p>
                        </div>
                        <div className={bulletClassName}>
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                            <p>
                                Continue growing both technically and in leadership through larger,
                                more ambitious projects.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        ),
    },
];

export function JourneyTimeline() {
    return (
        <section id="timeline" className="border-t border-zinc-200 dark:border-zinc-800">
            <Timeline data={timelineData} />
        </section>
    );
}
