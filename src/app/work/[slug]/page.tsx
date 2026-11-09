import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AutoFrame, BrowserFrame } from "@/components/Frame";
import { SmartLink } from "@/components/SmartLink";
import { caseStudies, caseStudyCopy as copy } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return {
    title: cs.name,
    description: cs.summary,
    alternates: { canonical: `/work/${cs.slug}/` },
    openGraph: { title: cs.name, description: cs.summary, url: `/work/${cs.slug}/` },
    twitter: { title: cs.name, description: cs.summary },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const i = caseStudies.findIndex((c) => c.slug === slug);
  if (i === -1) notFound();
  const cs = caseStudies[i];
  const next = caseStudies[(i + 1) % caseStudies.length];

  return (
    <article className="wrap py-12 sm:py-20">
      <p className="text-sm">
        <Link href="/#work" className="link">
          {copy.back}
        </Link>
      </p>

      <header className="mt-6">
        <h1 className="text-[clamp(2.25rem,5.4vw,3.5rem)] leading-[1.08]">{cs.name}</h1>
        <p className="mt-2 text-muted">{cs.kind}</p>
        <p className="measure mt-5 text-lg">{cs.summary}</p>
      </header>

      <div className="mt-10">
        <BrowserFrame slot={cs.hero} face={{ title: cs.name, subtitle: cs.kind }} priority sizes="(min-width: 64rem) 64rem, 100vw" />
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,40rem)_1fr] lg:gap-20">
        <div className="space-y-12">
          <section aria-labelledby="problem-h">
            <h2 id="problem-h" className="text-[1.5rem]">
              {copy.problem}
            </h2>
            <div className="mt-3 space-y-4">
              {cs.problem.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </section>

          <section aria-labelledby="built-h">
            <h2 id="built-h" className="text-[1.5rem]">
              {copy.built}
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-muted">
              {cs.built.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="role-h">
            <h2 id="role-h" className="text-[1.5rem]">
              {copy.role}
            </h2>
            <p className="mt-3">{cs.role}</p>
          </section>

          <section aria-labelledby="decisions-h">
            <h2 id="decisions-h" className="text-[1.5rem]">
              {copy.decisions}
            </h2>
            <ol className="mt-4 space-y-6">
              {cs.decisions.map((d) => (
                <li key={d.title}>
                  <h3 className="text-lg">{d.title}</h3>
                  <p className="mt-1 text-muted">{d.body}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <aside aria-label="Project facts" className="space-y-8 lg:pt-1">
          <div>
            <h2 className="text-lg">{copy.facts.stack}</h2>
            <p className="mt-2 text-muted">{cs.stack.join(", ")}</p>
          </div>
          <div>
            <h2 className="text-lg">{copy.facts.links}</h2>
            <ul className="mt-2 space-y-1">
              {cs.links.map((l) => (
                <li key={l.href}>
                  <SmartLink href={l.href} className="link">
                    {l.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <section aria-labelledby="screens-h" className="mt-16">
        <h2 id="screens-h" className="text-[1.5rem]">
          {copy.screens}
        </h2>
        {/* Items share a height: each one's width follows its aspect ratio, so phone and desktop shots sit side by side. */}
        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-start">
          {cs.screens.map((s) => (
            <div key={s.file} style={{ flex: `${s.width / s.height} 1 0%` }} className="min-w-0">
              <AutoFrame slot={s} sizes="(min-width: 64rem) 30rem, 100vw" />
            </div>
          ))}
        </div>
      </section>

      <nav aria-label="Case studies" className="mt-20 flex flex-wrap justify-between gap-4 border-t border-line pt-6">
        <Link href="/#work" className="link">
          {copy.back}
        </Link>
        <Link href={`/work/${next.slug}/`} className="link">
          {copy.next}: {next.name}
        </Link>
      </nav>
    </article>
  );
}
