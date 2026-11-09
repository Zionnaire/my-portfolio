import { about } from "@/data/site";
import { Shot } from "./Shot";

export function About() {
  return (
    <section id="about" aria-labelledby="about-h" className="border-t border-line py-16 sm:py-24">
      <div className="wrap">
        <h2 id="about-h" className="text-[clamp(1.75rem,3.5vw,2.25rem)]">
          {about.heading}
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-[18rem_minmax(0,40rem)] lg:gap-16">
          <div className="max-w-[18rem]">
            <Shot slot={about.photo} sizes="18rem" className="rounded-lg" />
          </div>
          <div className="space-y-4 text-lg">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <h3 className="mt-16 text-lg">{about.pathHeading}</h3>
        <ol className="mt-4 grid gap-6 border-t border-line pt-6 md:grid-cols-3">
          {about.path.map((step, i) => (
            <li key={step.title} className="flex gap-4">
              <span aria-hidden="true" className="font-mono text-sm text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <span className="block font-medium">{step.title}</span>
                <span className="text-sm text-muted">{step.place}</span>
              </div>
            </li>
          ))}
        </ol>

        <h3 className="mt-16 text-lg">{about.skillsHeading}</h3>
        <dl className="mt-4 border-t border-line">
          {about.skills.map((s) => (
            <div
              key={s.group}
              className="grid gap-x-8 gap-y-1 border-b border-line py-3 sm:grid-cols-[14rem_1fr]"
            >
              <dt className="font-medium">{s.group}</dt>
              <dd className="text-muted">{s.items}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
