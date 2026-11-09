"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { caseStudies, contact, menu, site } from "@/data/site";

const ROW = 3.5; // rem, height of each station row

/**
 * Slide-out menu themed as a radio: every page is a "station" with a frequency,
 * and an amber needle slides to the one you point at or focus.
 */
export function Menu() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const openBtn = useRef<HTMLButtonElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLElement>(null);

  function close() {
    setOpen(false);
    openBtn.current?.focus();
  }

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        openBtn.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Keep Tab inside the open menu.
  function trapTab(e: React.KeyboardEvent) {
    if (e.key !== "Tab" || !panel.current) return;
    const focusable = panel.current.querySelectorAll<HTMLElement>("a[href], button");
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  const reveal = (i: number) => ({ transitionDelay: open ? `${180 + i * 60}ms` : "0ms" });
  const revealClass = `transition-[opacity,transform] duration-500 ${
    open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
  }`;

  return (
    <>
      <button
        ref={openBtn}
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen(true)}
        className="grid size-10 place-items-center rounded-full bg-signal text-[#1b2350] hover:brightness-110"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      <div className={`fixed inset-0 z-40 overflow-hidden ${open ? "" : "pointer-events-none"}`}>
        <div
          aria-hidden="true"
          onClick={close}
          className={`absolute inset-0 bg-[#0a0e26]/60 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <aside
          ref={panel}
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          inert={!open}
          onKeyDown={trapTab}
          className={`absolute inset-y-0 right-0 flex w-[min(24rem,90vw)] flex-col overflow-y-auto rounded-l-[2rem] bg-panel p-6 text-panel-ink transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] sm:p-8 ${
            open ? "translate-x-0 shadow-2xl" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-2 text-sm text-panel-ink/80">
              <span aria-hidden="true" className="size-2 rounded-full bg-signal" />
              {menu.title}
            </p>
            <button
              ref={closeBtn}
              type="button"
              aria-label="Close menu"
              onClick={close}
              className="grid size-10 place-items-center rounded-full bg-signal text-[#1b2350] hover:brightness-110"
            >
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          <ul className="relative mt-8 border-t border-panel-ink/15" onMouseLeave={() => setActive(0)}>
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 w-[3px] rounded-sm bg-signal transition-transform duration-300"
              style={{ height: `${ROW}rem`, transform: `translateY(${active * ROW}rem)` }}
            />
            {menu.items.map((m, i) => (
              <li
                key={m.href}
                style={{ ...reveal(i), height: `${ROW}rem` }}
                className={`border-b border-panel-ink/15 ${revealClass}`}
              >
                <Link
                  href={m.href}
                  onClick={() => setOpen(false)}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="flex h-full items-center justify-between pl-5 text-2xl font-bold tracking-tight hover:text-signal"
                >
                  {m.label}
                  <span className="text-sm font-medium tabular-nums text-panel-ink/60">
                    {m.freq} FM
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div style={reveal(menu.items.length)} className={`mt-8 ${revealClass}`}>
            <h2 className="text-sm font-medium text-panel-ink/70 [letter-spacing:0]">
              {menu.caseStudies}
            </h2>
            <ul className="mt-3 space-y-1">
              {caseStudies.map((cs) => (
                <li key={cs.slug}>
                  <Link
                    href={`/work/${cs.slug}/`}
                    onClick={() => setOpen(false)}
                    className="block py-1.5 text-panel-ink/90 hover:text-signal"
                  >
                    {cs.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div style={reveal(menu.items.length + 1)} className={`mt-auto pt-10 ${revealClass}`}>
            <a
              href={`mailto:${site.email}`}
              className="block break-all text-lg font-semibold underline underline-offset-4 hover:text-signal"
            >
              {site.email}
            </a>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm">
              {contact.social.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-panel-ink/80 underline underline-offset-4 hover:text-signal"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
