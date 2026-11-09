import { Hero } from "@/components/Hero";
import { Dial } from "@/components/Dial";
import { CaseStudyPreview } from "@/components/CaseStudyPreview";
import { MoreWork } from "@/components/MoreWork";
import { Capabilities } from "@/components/Capabilities";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { caseStudies, workCopy } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Dial />
      <section id="work" aria-labelledby="work-h" className="wrap py-16 sm:py-24">
        <h2 id="work-h" className="text-[clamp(1.75rem,3.5vw,2.25rem)]">
          {workCopy.heading}
        </h2>
        <p className="measure mt-3 text-lg text-muted">{workCopy.intro}</p>
        <div className="mt-12 space-y-16 sm:space-y-20">
          {caseStudies.map((cs) => (
            <CaseStudyPreview key={cs.slug} cs={cs} />
          ))}
        </div>
      </section>
      <MoreWork />
      <Capabilities />
      <About />
      <Contact />
    </>
  );
}
