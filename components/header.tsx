import Link from "next/link";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
            <nav className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4">
                <Link
                    href="/"
                    className="text-lg font-bold text-zinc-900 dark:text-zinc-50"
                >
                    Einar Harri
                </Link>
                <ul className="ml-8 flex gap-5 sm:gap-7 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
