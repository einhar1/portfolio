"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

type TextGenerateEffectProps = {
    words: string;
    className?: string;
    filter?: boolean;
    duration?: number;
};

export function TextGenerateEffect({
    words,
    className,
    filter = true,
    duration = 0.5,
}: TextGenerateEffectProps) {
    const [scope, animate] = useAnimate();
    const wordsArray = words.split(" ");
    const wordEntries = wordsArray.map((word, index) => ({
        word,
        key: `${word}-${wordsArray.slice(0, index).join("-")}`,
    }));

    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
                filter: filter ? "blur(0px)" : "none",
            },
            {
                duration,
                delay: stagger(0.08),
            },
        );
    }, [animate, duration, filter]);

    return (
        <motion.div ref={scope} className={cn("font-bold", className)}>
            {wordEntries.map(({ word, key }) => (
                <motion.span
                    key={key}
                    className="inline-block opacity-0 text-zinc-900 dark:text-zinc-50"
                    style={{ filter: filter ? "blur(10px)" : "none" }}
                >
                    {word}&nbsp;
                </motion.span>
            ))}
        </motion.div>
    );
}
