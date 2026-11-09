"use client";

import { Children, useCallback, useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";
const subscribeMotion = (cb: () => void) => {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

/**
 * A scroll-snapping row that advances by itself. It stops while hovered or focused,
 * has a Pause button, and doesn't autoplay at all for people who prefer reduced motion.
 */
export function Carousel({ children, label }: { children: ReactNode; label: string }) {
  const items = Children.toArray(children);
  const track = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  const [pages, setPages] = useState(items.length);
  const [playing, setPlaying] = useState(true);
  const [held, setHeld] = useState(false);
  const reduced = useSyncExternalStore(
    subscribeMotion,
    () => window.matchMedia(QUERY).matches,
    () => true,
  );

  const step = useCallback(() => {
    const kids = track.current?.children;
    if (!kids?.length) return 1;
    return kids[1] ? (kids[1] as HTMLElement).offsetLeft - (kids[0] as HTMLElement).offsetLeft : (kids[0] as HTMLElement).offsetWidth;
  }, []);

  const goTo = useCallback(
    (i: number) => {
      const el = track.current;
      if (!el) return;
      el.scrollTo({ left: i * step(), behavior: reduced ? "auto" : "smooth" });
    },
    [step, reduced],
  );

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const s = step();
    setPages(Math.max(1, Math.round((el.scrollWidth - el.clientWidth) / s) + 1));
    setIndex(Math.round(el.scrollLeft / s));
  }, [step]);

  const next = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    goTo(atEnd ? 0 : Math.round(el.scrollLeft / step()) + 1);
  }, [goTo, step]);

  const prev = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const i = Math.round(el.scrollLeft / step());
    goTo(i <= 0 ? pages - 1 : i - 1);
  }, [goTo, step, pages]);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  useEffect(() => {
    if (!playing || held || reduced) return;
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [playing, held, reduced, next]);

  const btn =
    "grid size-10 place-items-center rounded-full border border-line text-ink hover:border-ink";

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onPointerEnter={() => setHeld(true)}
      onPointerLeave={() => setHeld(false)}
      onFocus={() => setHeld(true)}
      onBlur={() => setHeld(false)}
    >
      <ul
        ref={track}
        onScroll={measure}
        className="relative flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, i) => (
          <li key={i} className="w-[min(85vw,22rem)] shrink-0 snap-start">
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: pages }, (_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-8 bg-accent" : "w-2.5 bg-line hover:bg-muted"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          {!reduced && (
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              aria-pressed={!playing}
              className="h-10 rounded-full border border-line px-4 text-sm font-medium hover:border-ink"
            >
              {playing ? "Pause" : "Play"}
            </button>
          )}
          <button type="button" aria-label="Previous" onClick={prev} className={btn}>
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m15 6-6 6 6 6" />
            </svg>
          </button>
          <button type="button" aria-label="Next" onClick={next} className={btn}>
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m9 6 6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
