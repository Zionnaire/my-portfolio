import Link from "next/link";
import type { ComponentProps } from "react";

type Props = Omit<ComponentProps<"a">, "href"> & { href: string };

/** Internal paths use next/link; external URLs open safely in a new tab; mailto stays plain. */
export function SmartLink({ href, children, ...rest }: Props) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }
  if (/^https?:/.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}
