import { hero, heroPortrait } from "@/data/site";
import { hasImage } from "@/lib/images";
import { Shot } from "./Shot";
import { SmartLink } from "./SmartLink";

/**
 * Centered hero. With a transparent cut-out portrait (public/images/ademola-hero.png)
 * the person stands in front of a large orange semicircle and overlaps the headline.
 * Without one, the fallback photo is cropped to a circle so it still looks deliberate.
 */
export function Hero() {
  const cutout = hasImage(heroPortrait.slot.file);

  return (
    <section className={`relative overflow-hidden pt-12 sm:pt-16 ${cutout ? "pb-10" : "pb-6"}`}>
      {cutout && (
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 aspect-square w-[min(34rem,120vw)] -translate-x-1/2 translate-y-1/2 rounded-full bg-signal"
        />
      )}

      <div className="wrap relative z-10 text-center">
        <p className="mb-5 flex items-center justify-center gap-2 text-sm text-muted">
          <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-accent" />
          {hero.status}
        </p>
        <p className="relative inline-flex items-center rounded-full border border-ink/40 px-4 py-1 text-sm">
          {hero.greeting}
          <svg
            aria-hidden="true"
            viewBox="0 0 28 28"
            className="absolute -right-8 -top-3 size-7 text-accent"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M6 22 12 14M13 24l3-8M20 21l6-5" />
          </svg>
        </p>
        <h1 className="mx-auto mt-5 text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.1]">
          I&apos;m <span className="text-accent">{hero.highlight}</span>,{" "}
          {hero.roleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>

        {/* 2. The three facts in one row */}
        <ul className="mx-auto mt-8 grid max-w-xl grid-cols-3 divide-x divide-line">
          {hero.stats.map((s) => (
            <li key={s.title} className="px-2 sm:px-4">
              <p className="whitespace-nowrap text-base font-bold tracking-tight sm:text-2xl">{s.title}</p>
              <p className="text-xs text-muted sm:text-sm">{s.note}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="wrap relative z-10 mt-8 grid items-end gap-8 lg:mt-8 lg:grid-cols-[1fr_24rem_1fr] lg:gap-10">
        {/* Portrait */}
        <div className={`order-first mx-auto w-[min(20rem,78vw)] lg:order-none lg:w-[24rem] ${cutout ? "lg:-mt-2" : ""}`}>
          {cutout ? (
            <Shot slot={heroPortrait.slot} sizes="24rem" priority bare />
          ) : (
            <div className="relative aspect-square">
              <span
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-full bg-signal"
              />
              <div className="relative size-full overflow-hidden rounded-full bg-line ring-4 ring-bg">
                <Shot
                  slot={heroPortrait.slot}
                  fallback={heroPortrait.fallback}
                  sizes="24rem"
                  priority
                  bare
                  className="h-full! object-cover object-[40%_35%]"
                />
              </div>
            </div>
          )}
        </div>

        {/* What I do, in one sentence */}
        <p className="mx-auto max-w-[24rem] text-center text-lg font-medium leading-snug lg:order-first lg:mx-0 lg:self-start lg:pt-24 lg:text-left">
          {hero.headline}
        </p>

        {/* Supporting detail, large screens only */}
        <p className="hidden max-w-[22rem] self-start pt-24 text-sm text-muted lg:block lg:justify-self-end">
          {hero.sub}
        </p>

      </div>

      <div className={`wrap relative z-20 flex flex-wrap justify-center gap-3 ${cutout ? "mt-8 lg:-mt-8" : "mt-10"}`}>
        <SmartLink
          href={hero.primary.href}
          className="inline-flex h-12 items-center rounded-full bg-ink px-7 font-medium text-bg hover:bg-accent"
        >
          {hero.primary.label}
        </SmartLink>
        <SmartLink
          href={hero.secondary.href}
          className="inline-flex h-12 items-center rounded-full border border-ink/30 bg-surface px-7 font-medium text-ink hover:border-ink"
        >
          {hero.secondary.label}
        </SmartLink>
      </div>
    </section>
  );
}
