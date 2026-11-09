import { contact, site } from "@/data/site";
import { SmartLink } from "./SmartLink";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-h" className="wrap pb-16 sm:pb-24">
      <div className="rounded-2xl bg-ink px-6 py-12 text-bg sm:px-12 sm:py-16">
        <h2 id="contact-h" className="text-[clamp(1.75rem,4vw,2.75rem)]">
          {contact.heading}
        </h2>
        <p className="measure mt-4 text-lg text-bg/75">{contact.body}</p>
        <p className="mt-8">
          <a
            href={`mailto:${site.email}`}
            className="break-all text-[clamp(1.25rem,4.5vw,2rem)] font-semibold underline decoration-1 underline-offset-[0.25em] hover:decoration-2"
          >
            {site.email}
          </a>
        </p>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          {contact.social.map((s) => (
            <li key={s.href}>
              <SmartLink href={s.href} className="text-bg/85 underline underline-offset-4 hover:text-bg">
                {s.label}
              </SmartLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
