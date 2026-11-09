import Link from "next/link";
import { workCopy, type CaseStudy } from "@/data/site";
import { BrowserFrame, DeviceStack } from "./Frame";

function Text({ cs, headingId }: { cs: CaseStudy; headingId: string }) {
  return (
    <div>
      <h3 id={headingId} className="text-[clamp(1.5rem,3vw,2rem)] leading-tight">
        <Link href={`/work/${cs.slug}/`} className="hover:text-accent">
          {cs.name}
        </Link>
      </h3>
      <p className="mt-1 text-sm text-muted">{cs.kind}</p>
      <p className="measure mt-4 text-lg">{cs.summary}</p>
      <p className="mt-4 font-mono text-sm text-muted">{cs.stack.slice(0, 5).join(" · ")}</p>
      <p className="mt-6">
        <Link
          href={`/work/${cs.slug}/`}
          className="inline-flex h-11 items-center rounded-md border border-line px-5 font-medium hover:border-ink"
        >
          {workCopy.readMore}
          <span className="sr-only">: {cs.name}</span>
        </Link>
      </p>
    </div>
  );
}

/** Three different arrangements so the case studies don't read as repeated cards. */
export function CaseStudyPreview({ cs }: { cs: CaseStudy }) {
  const id = `cs-${cs.slug}`;
  const face = { title: cs.name, subtitle: cs.kind };

  if (cs.previewLayout === "wide") {
    return (
      <article
        aria-labelledby={id}
        className="grid items-center gap-10 rounded-2xl border border-line bg-surface p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14"
      >
        <Text cs={cs} headingId={id} />
        <DeviceStack
          browser={cs.hero}
          phone={cs.screens[0]}
          face={face}
          sizes="(min-width: 64rem) 34rem, 100vw"
        />
      </article>
    );
  }

  if (cs.previewLayout === "split") {
    return (
      <article aria-labelledby={id} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <Text cs={cs} headingId={id} />
        </div>
        <div className="lg:col-span-7">
          <BrowserFrame slot={cs.hero} face={face} sizes="(min-width: 64rem) 40rem, 100vw" />
        </div>
      </article>
    );
  }

  return (
    <article
      aria-labelledby={id}
      className="grid items-center gap-10 border-t border-line pt-14 lg:grid-cols-12 lg:gap-14"
    >
      <div className="lg:col-span-5">
        <BrowserFrame slot={cs.hero} face={face} sizes="(min-width: 64rem) 26rem, 100vw" />
      </div>
      <div className="lg:col-span-7 lg:pl-6">
        <Text cs={cs} headingId={id} />
      </div>
    </article>
  );
}
