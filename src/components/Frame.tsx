import type { ImageSlot } from "@/data/site";
import { hasImage } from "@/lib/images";
import { Shot } from "./Shot";

type Face = { title: string; subtitle?: string };
type FrameProps = { slot: ImageSlot; sizes?: string; priority?: boolean; face?: Face };

/** A screenshot with a minimal browser bar. */
export function BrowserFrame({ slot, sizes, priority, face }: FrameProps) {
  const missing = face && !hasImage(slot.file);
  return (
    <div className="overflow-hidden rounded-lg border border-line bg-surface">
      <div aria-hidden="true" className="flex h-7 items-center gap-1.5 border-b border-line bg-bg px-3">
        <span className="size-2 rounded-full bg-line" />
        <span className="size-2 rounded-full bg-line" />
        <span className="size-2 rounded-full bg-line" />
      </div>
      {missing ? (
        <div
          style={{ aspectRatio: `${slot.width} / ${slot.height}` }}
          className="flex flex-col justify-end bg-panel p-6 text-panel-ink sm:p-8"
        >
          <span aria-hidden="true" className="mb-4 size-2.5 rounded-full bg-signal" />
          <p className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-tight tracking-tight">{face.title}</p>
          {face.subtitle && <p className="mt-1 text-sm text-panel-ink/70">{face.subtitle}</p>}
        </div>
      ) : (
        <Shot slot={slot} sizes={sizes} priority={priority} bare />
      )}
    </div>
  );
}

/** A portrait screenshot in a phone bezel. */
export function PhoneFrame({ slot, sizes, priority }: FrameProps) {
  return (
    <div className="overflow-hidden rounded-[1.6rem] border-[5px] border-[#1b2350] bg-[#1b2350] ring-1 ring-line">
      <div className="overflow-hidden rounded-[1.1rem]">
        <Shot slot={slot} sizes={sizes} priority={priority} bare />
      </div>
    </div>
  );
}

/** Picks the right frame from the image's shape. */
export function AutoFrame({ slot, sizes, priority }: FrameProps) {
  return slot.height > slot.width ? (
    <PhoneFrame slot={slot} sizes={sizes} priority={priority} />
  ) : (
    <BrowserFrame slot={slot} sizes={sizes} priority={priority} />
  );
}

/** A browser frame with a phone overlapping its lower corner. */
export function DeviceStack({
  browser,
  phone,
  sizes,
  priority,
  face,
}: {
  browser: ImageSlot;
  phone: ImageSlot;
  face?: Face;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className="relative pb-8">
      <div className="w-[93%]">
        <BrowserFrame slot={browser} sizes={sizes} priority={priority} face={face} />
      </div>
      <div className="absolute bottom-0 right-0 w-[22%] min-w-20">
        <PhoneFrame slot={phone} sizes="12rem" priority={priority} />
      </div>
    </div>
  );
}
