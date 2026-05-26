"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Journey", href: "#timeline" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-xl">
            <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
                <Link
                    href="/"
                    className="text-lg font-bold text-foreground"
                >
                    Einar Harri
                </Link>

                <div className="hidden md:block">
                    <NavigationMenu viewport={false}>
                        <NavigationMenuList className="gap-1">
                            {navLinks.map((link) => (
                                <NavigationMenuItem key={link.href}>
                                    <NavigationMenuLink
                                        asChild
                                        className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
                                    >
                                        <a href={link.href}>{link.label}</a>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="rounded-full">
                                <Menu />
                                <span className="sr-only">Open navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-88">
                            <SheetHeader>
                                <SheetTitle>Navigate</SheetTitle>
                                <SheetDescription>
                                    Jump to the main sections of the portfolio.
                                </SheetDescription>
                            </SheetHeader>
                            <div className="flex flex-col gap-2 px-4 pb-6">
                                {navLinks.map((link) => (
                                    <Button
                                        key={link.href}
                                        asChild
                                        variant="ghost"
                                        className="justify-start"
                                    >
                                        <a href={link.href}>{link.label}</a>
                                    </Button>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
}
