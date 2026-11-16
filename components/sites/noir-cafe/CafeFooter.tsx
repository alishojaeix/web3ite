import Link from "next/link";
import { noirCafeContent } from "./content";

export function CafeFooter() {
  return (
    <footer className="bg-[var(--nc-ink)] px-6 pb-8 pt-12 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col justify-between gap-8 border-b border-[var(--nc-line)] pb-10 md:flex-row md:items-end">
          <div>
            <Link href="#top" className="font-editorial text-4xl tracking-[-0.02em] text-[var(--nc-cream)] hover:text-[var(--nc-brass)]">
              Noir Café
            </Link>
            <p className="mt-3 text-sm text-[var(--nc-muted)]">A coffee lounge concept, after dark.</p>
          </div>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3">
            {noirCafeContent.navigation.map((item) => (
              <Link key={item.href} href={item.href} className="min-h-11 content-center text-sm text-[var(--nc-muted)] hover:text-[var(--nc-brass)]">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col justify-between gap-3 pt-5 text-xs leading-5 text-[var(--nc-muted)] sm:flex-row">
          <p>{noirCafeContent.footerNote}</p>
          <Link href="#top" className="w-fit text-[var(--nc-brass)] hover:text-[var(--nc-cream)]">Back to top</Link>
        </div>
      </div>
    </footer>
  );
}
