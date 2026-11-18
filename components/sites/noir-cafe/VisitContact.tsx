import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { noirCafeContent } from "./content";

export function VisitContact() {
  const { visit } = noirCafeContent;
  const hasVisitDetails = Boolean(visit.address || visit.hours);
  const contactHref = visit.email
    ? `mailto:${visit.email}`
    : visit.telephone
      ? `tel:${visit.telephone}`
      : null;

  return (
    <section id="visit" className="scroll-mt-6 bg-[var(--nc-wood)] px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[1fr_0.72fr] lg:gap-24">
        <div>
          <p className="mb-6 text-sm text-[var(--nc-brass)]">بازدید از اتاق</p>
          <h2 className="whitespace-pre-line font-editorial text-[clamp(3.2rem,7vw,6.7rem)] leading-[0.9] tracking-[-0.04em] text-[var(--nc-cream)]">
            {visit.heading}
          </h2>
          <p className="mt-7 max-w-xl text-base leading-7 text-[var(--nc-cream)]/75">{visit.introduction}</p>
        </div>
        <div className="self-end border-t border-[var(--nc-line)] pt-6">
          {hasVisitDetails ? (
            <dl className="space-y-5">
              {visit.address ? <div><dt className="text-xs text-[var(--nc-muted)]">نشانی</dt><dd className="mt-1 text-base">{visit.address}</dd></div> : null}
              {visit.hours ? <div><dt className="text-xs text-[var(--nc-muted)]">ساعات بازدید</dt><dd className="mt-1 whitespace-pre-line text-base">{visit.hours}</dd></div> : null}
            </dl>
          ) : (
            <p className="max-w-md text-sm leading-6 text-[var(--nc-muted)]">
              نشانی و ساعات بازدید تعیین نشده است. پیش از انتشار به‌عنوان یک مکان فعال، جزئیات تأییدشدهٔ بازدید کافه را بیفزایید.
            </p>
          )}
          {visit.reservationUrl ? (
            <a href={visit.reservationUrl} className="mt-7 inline-flex min-h-12 items-center gap-3 border-b border-[var(--nc-brass)] text-sm text-[var(--nc-cream)] hover:text-[var(--nc-brass)]">
              رزرو میز <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ) : contactHref ? (
            <a href={contactHref} className="mt-7 inline-flex min-h-12 items-center gap-3 border-b border-[var(--nc-brass)] text-sm text-[var(--nc-cream)] hover:text-[var(--nc-brass)]">
              تماس <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ) : (
            <p className="mt-7 text-xs leading-5 text-[var(--nc-muted)]">
              پیوندهای تماس و رزرو پس از ارائهٔ جزئیات تأییدشده افزوده می‌شوند.
            </p>
          )}
          {visit.address && visit.mapUrl ? (
            <Link href={visit.mapUrl} target="_blank" rel="noreferrer" className="mt-4 flex min-h-11 w-fit items-center gap-2 text-xs text-[var(--nc-brass)] hover:text-[var(--nc-cream)]">
              گشودن نقشه <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
