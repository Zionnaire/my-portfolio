import Link from "next/link";
import { nav, site } from "@/data/site";
import { Menu } from "./Menu";
import { ThemeToggle } from "./ThemeToggle";

/** Full-width navy bar that stays at the top while the page scrolls. */
export function Header() {
  return (
    <header className="sticky top-0 z-30 w-full bg-panel text-panel-ink">
      <div className="wrap flex h-16 items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2 text-[0.9375rem] font-bold">
          <span aria-hidden="true" className="size-2 rounded-full bg-signal" />
          {site.shortName}
        </Link>
        <div className="flex items-center gap-3 sm:gap-5">
          <nav aria-label="Main" className="hidden items-center gap-5 text-[0.9375rem] md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-panel-ink/80 hover:text-panel-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={`mailto:${site.email}`}
            className="hidden h-9 items-center rounded-full bg-panel-ink px-4 text-sm font-semibold text-panel hover:bg-signal sm:inline-flex"
          >
            Contact me
          </a>
          <ThemeToggle />
          <Menu />
        </div>
      </div>
    </header>
  );
}
