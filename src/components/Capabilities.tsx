import { capabilities } from "@/data/site";

/** A dark band, as in the reference's services section. */
export function Capabilities() {
  return (
    <section aria-labelledby="cap-h" className="bg-panel py-16 text-panel-ink sm:py-24">
      <div className="wrap">
        <h2 id="cap-h" className="text-[clamp(1.75rem,3.5vw,2.25rem)]">
          {capabilities.heading}
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {capabilities.items.map((item, i) => (
            <div
              key={item.title}
              className="rounded-xl border border-panel-ink/15 bg-panel-ink/5 p-6 sm:p-8"
            >
              <span aria-hidden="true" className="font-mono text-sm text-signal">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-xl">{item.title}</h3>
              <p className="mt-3 text-panel-ink/75">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
