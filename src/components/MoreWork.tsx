import { moreWork } from "@/data/site";
import { hasImage } from "@/lib/images";
import { Carousel } from "./Carousel";
import { PhoneFrame } from "./Frame";
import { Shot } from "./Shot";
import { SmartLink } from "./SmartLink";

type Item = (typeof moreWork.items)[number];

/** The picture area of a card: a screenshot, phone screens on navy, or a typographic face. */
function Face({ item }: { item: Item }) {
  const imgs = (item.images ?? []).filter((i) => hasImage(i.file));
  const box = "aspect-[16/10] overflow-hidden rounded-xl";

  if (imgs.length && imgs[0].width >= imgs[0].height) {
    return (
      <div className={`${box} border border-line`}>
        <Shot slot={imgs[0]} bare sizes="22rem" className="h-full! object-cover object-top" />
      </div>
    );
  }

  if (imgs.length) {
    return (
      <div className={`${box} flex items-start justify-center gap-4 bg-panel px-6 pt-6`}>
        {imgs.map((img) => (
          <div key={img.file} className="w-[38%] shrink-0">
            <PhoneFrame slot={img} sizes="10rem" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`${box} flex flex-col justify-between bg-panel p-6 text-panel-ink`}>
      <span aria-hidden="true" className="size-2.5 rounded-full bg-signal" />
      <div>
        <p className="text-3xl font-bold leading-tight tracking-tight">{item.name}</p>
        <p className="mt-2 text-sm text-panel-ink/70">{item.stack}</p>
      </div>
    </div>
  );
}

export function MoreWork() {
  return (
    <section aria-labelledby="more-h" className="wrap pb-16 sm:pb-24">
      <h2 id="more-h" className="text-[clamp(1.5rem,3vw,1.75rem)]">
        {moreWork.heading}
      </h2>
      <p className="mt-2 mb-8 text-muted">{moreWork.intro}</p>
      <Carousel label={moreWork.heading}>
        {moreWork.items.map((item) => (
          <article key={item.name} aria-label={item.name}>
            <Face item={item} />
            <h3 className="mt-4 text-xl">{item.name}</h3>
            <p className="mt-1 text-[0.9375rem] text-muted">{item.description}</p>
            <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[0.9375rem]">
              {item.links.map((l) => (
                <SmartLink key={l.href} href={l.href} className="link">
                  {l.label}
                  <span className="sr-only">: {item.name}</span>
                </SmartLink>
              ))}
            </p>
          </article>
        ))}
      </Carousel>
    </section>
  );
}
