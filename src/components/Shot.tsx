import Image from "next/image";
import type { ImageSlot } from "@/data/site";
import { hasImage } from "@/lib/images";

type Props = {
  slot: ImageSlot;
  /** Used when the main file doesn't exist yet. */
  fallback?: ImageSlot;
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** Drop the border, for images placed inside a frame. */
  bare?: boolean;
};

const hasFile = hasImage;

/**
 * Renders the real image from /public/images when the file exists,
 * otherwise a neutral placeholder naming the file and size it expects.
 * (The check runs at build time, so rebuild after adding images.)
 */
export function Shot({
  slot: wanted,
  fallback,
  sizes = "(min-width: 64rem) 60rem, 100vw",
  priority,
  className = "",
  bare,
}: Props) {
  const useFallback = !hasFile(wanted.file) && fallback && hasFile(fallback.file);
  const slot = useFallback ? fallback : wanted;
  const exists = hasFile(slot.file);
  const border = bare ? "" : "border border-line";

  if (exists) {
    return (
      <Image
        src={`/images/${slot.file}`}
        width={slot.width}
        height={slot.height}
        alt={slot.alt}
        sizes={sizes}
        priority={priority}
        className={`block h-auto w-full ${border} ${className}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={slot.alt}
      style={{ aspectRatio: `${slot.width} / ${slot.height}` }}
      className={`flex w-full flex-col items-center justify-center gap-1 bg-line/40 p-3 text-center text-sm text-muted ${
        bare ? "" : "border border-dashed border-line"
      } ${className}`}
    >
      <span className="break-all font-mono text-xs text-ink">{slot.file}</span>
      <span className="text-xs">
        {slot.width} × {slot.height}
      </span>
    </div>
  );
}
