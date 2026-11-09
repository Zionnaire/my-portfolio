"use client";

import { useRef, useState } from "react";
import { dialCopy, stations } from "@/data/site";
import { SmartLink } from "./SmartLink";

const { min: MIN, max: MAX } = dialCopy;
const pct = (f: number) => ((f - MIN) / (MAX - MIN)) * 100;
const nearest = (f: number) =>
  stations.reduce(
    (best, s, i) => (Math.abs(s.freq - f) < Math.abs(stations[best].freq - f) ? i : best),
    0,
  );

const tickValues = Array.from({ length: (MAX - MIN) * 2 + 1 }, (_, i) => MIN + i / 2);

export function Dial() {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [freq, setFreq] = useState(stations[0].freq);
  const [dragging, setDragging] = useState(false);

  const station = stations[index];

  function tuneTo(i: number) {
    setIndex(i);
    setFreq(stations[i].freq);
  }

  function freqFromEvent(e: React.PointerEvent) {
    const r = track.current!.getBoundingClientRect();
    const f = MIN + ((e.clientX - r.left) / r.width) * (MAX - MIN);
    return Math.min(MAX, Math.max(MIN, f));
  }

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
    setFreq(freqFromEvent(e));
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!dragging) return;
    const f = freqFromEvent(e);
    setFreq(f);
    const n = nearest(f);
    if (Math.abs(stations[n].freq - f) < 0.6) setIndex(n);
  }

  function onPointerUp(e: React.PointerEvent<HTMLDivElement>) {
    if (!dragging) return;
    setDragging(false);
    tuneTo(nearest(freqFromEvent(e)));
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    const last = stations.length - 1;
    let target: number | null = null;
    if (e.key === "ArrowRight" || e.key === "ArrowUp") target = Math.min(last, index + 1);
    else if (e.key === "ArrowLeft" || e.key === "ArrowDown") target = Math.max(0, index - 1);
    else if (e.key === "Home") target = 0;
    else if (e.key === "End") target = last;
    if (target !== null) {
      e.preventDefault();
      tuneTo(target);
    }
  }

  const links = [
    ...(station.slug ? [{ label: "Read case study", href: `/work/${station.slug}/` }] : []),
    ...station.links,
  ];

  return (
    <section aria-labelledby="dial-title" className="wrap pb-6 pt-0 sm:pb-10">
      <div className="grid gap-7 rounded-[1.75rem] bg-panel p-5 text-panel-ink sm:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <h2 id="dial-title" className="text-base font-medium text-panel-ink/80 [letter-spacing:0]">
            {dialCopy.title}. {dialCopy.hint}
          </h2>
          <p className="flex items-center gap-2 text-sm text-panel-ink/80">
            <span aria-hidden="true" className="size-2 rounded-full bg-signal" />
            {dialCopy.caption}
          </p>
        </div>

        <p
          className="text-[clamp(3.5rem,12vw,7rem)] font-bold leading-[0.9] tracking-[-0.03em] text-signal tabular-nums"
          aria-hidden="true"
        >
          {freq.toFixed(1)}
          <span className="ml-3 text-[0.28em] font-medium tracking-normal text-panel-ink">FM</span>
        </p>

        <div
          role="slider"
          tabIndex={0}
          aria-label="Project frequency"
          aria-valuemin={MIN}
          aria-valuemax={MAX}
          aria-valuenow={station.freq}
          aria-valuetext={`${station.freq.toFixed(1)} FM, ${station.name}`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={() => {
            setDragging(false);
            tuneTo(index);
          }}
          onKeyDown={onKeyDown}
          className="relative h-[5.5rem] cursor-grab select-none border-y border-panel-ink/35 [touch-action:pan-y] focus-visible:outline-offset-[6px] active:cursor-grabbing"
        >
          <div ref={track} className="absolute inset-0">
            {tickValues.map((f) => {
              const major = f % 2 === 0;
              return (
                <span
                  key={f}
                  aria-hidden="true"
                  style={{ left: `${pct(f)}%` }}
                  className={`absolute bottom-0 w-px ${
                    major ? "h-[38%] bg-panel-ink/55" : "h-[18%] bg-panel-ink/35"
                  }`}
                />
              );
            })}
            {tickValues
              .filter((f) => f % 2 === 0)
              .map((f) => (
                <span
                  key={`l${f}`}
                  aria-hidden="true"
                  style={{ left: `${pct(f)}%` }}
                  className={`absolute top-1.5 -translate-x-1/2 text-xs tabular-nums text-panel-ink/60 ${
                    f % 4 === 0 ? "" : "max-sm:hidden"
                  }`}
                >
                  {f}
                </span>
              ))}
            {stations.map((s) => (
              <span
                key={s.freq}
                aria-hidden="true"
                style={{ left: `${pct(s.freq)}%` }}
                className={`absolute bottom-[42%] size-2.5 -translate-x-1/2 rounded-full ${
                  s.home ? "bg-signal" : "bg-panel-ink/55"
                }`}
              />
            ))}
            <span
              aria-hidden="true"
              style={{ left: `${pct(freq)}%` }}
              className={`pointer-events-none absolute -bottom-2.5 -top-2.5 w-[3px] -translate-x-1/2 rounded-sm bg-signal motion-safe:transition-[left] motion-safe:duration-[450ms] ${
                dragging ? "transition-none!" : ""
              }`}
            />
          </div>
        </div>

        <div
          aria-live="polite"
          className="grid gap-x-12 gap-y-4 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]"
        >
          <div>
            <h3 className="text-[clamp(1.5rem,3.4vw,2.25rem)] leading-[1.1]">{station.name}</h3>
            <p className="measure mt-2 text-panel-ink/80">{station.description}</p>
          </div>
          <div className="grid content-start gap-4">
            <p className="text-[0.9375rem] text-panel-ink/70">{station.stack}</p>
            <p className="flex flex-wrap gap-2">
              {links.map((l) => (
                <SmartLink
                  key={l.href}
                  href={l.href}
                  className="rounded-full border border-panel-ink/35 px-4 py-1.5 text-[0.9375rem] font-semibold text-panel-ink hover:border-signal hover:text-signal"
                >
                  {l.label}
                </SmartLink>
              ))}
            </p>
          </div>
        </div>

        <div role="group" aria-label="Stations" className="flex flex-wrap gap-2">
          {stations.map((s, i) => (
            <button
              key={s.freq}
              type="button"
              aria-pressed={i === index}
              onClick={() => tuneTo(i)}
              className={`rounded-full border px-3.5 py-1.5 text-sm tabular-nums ${
                i === index
                  ? "border-signal bg-signal font-semibold text-[#1b2350]"
                  : "border-panel-ink/25 text-panel-ink/80 hover:border-panel-ink/60"
              }`}
            >
              {s.freq.toFixed(1)} {s.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
