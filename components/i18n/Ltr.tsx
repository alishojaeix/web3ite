import type { ReactNode } from "react";

/**
 * Isolate inherently left-to-right values (emails, URLs, code, identifiers)
 * inside Persian copy without changing the surrounding paragraph direction.
 */
export function Ltr({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span dir="ltr" className={className} style={{ unicodeBidi: "isolate" }}>
      {children}
    </span>
  );
}
