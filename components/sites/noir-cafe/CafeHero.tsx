import Image from "next/image";
import Link from "next/link";
import { noirCafeContent } from "./content";
import { noirCafeTheme } from "./theme";

export function CafeHero() {
  const { hero } = noirCafeContent;

  return (
    <section id="top" className="relative isolate flex min-h-[720px] items-end overflow-hidden sm:min-h-[780px] lg:min-h-[850px]">
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[62%_center]"
      />
      <div className="absolute inset-0 -z-10" style={{ background: noirCafeTheme.imageOverlay }} />
      <div className="mx-auto w-full max-w-[1440px] px-6 pb-16 pt-36 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24">
        <div className="max-w-[720px]">
          <p className="mb-7 text-sm tracking-[0.12em] text-[var(--nc-brass)] sm:text-base">
            {hero.kicker}
          </p>
          <h1 className="whitespace-pre-line font-editorial text-[clamp(4rem,10vw,9.5rem)] leading-[0.82] tracking-[-0.045em] text-[var(--nc-cream)]">
            {hero.title}
          </h1>
          <p className="mt-8 max-w-[38rem] text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            {hero.introduction}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href="#menu"
              className="inline-flex min-h-12 items-center justify-center bg-[var(--nc-brass)] px-6 text-sm font-medium text-[var(--nc-ink)] transition-colors hover:bg-[var(--nc-cream)] focus-visible:outline-offset-4"
            >
              Explore the coffee menu
            </Link>
            <Link
              href="#visit"
              className="min-h-12 content-center border-b border-white/50 text-sm text-white/90 transition-colors hover:border-[var(--nc-brass)] hover:text-[var(--nc-brass)]"
            >
              About the visit
            </Link>
          </div>
          <p className="mt-10 max-w-sm border-l border-[var(--nc-brass)]/70 pl-4 text-xs leading-5 text-white/65">
            {noirCafeContent.sampleNotice}
          </p>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[var(--nc-ink)]/75 to-transparent" />
    </section>
  );
}
