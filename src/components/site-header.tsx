"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
];

function isActive(pathname: string, href: string) {
  if (href === "/writing") {
    return (
      pathname === "/writing" ||
      pathname.startsWith("/posts/") ||
      pathname.startsWith("/tags/")
    );
  }
  return pathname === href;
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-2xl items-baseline justify-between px-6 py-5">
        <Link
          href="/"
          className="font-display text-2xl tracking-tight text-ink"
        >
          Review
        </Link>
        <nav className="flex gap-5 text-sm">
          {links.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? "text-ink underline decoration-accent decoration-2 underline-offset-4"
                    : "text-muted hover:text-ink"
                }
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
