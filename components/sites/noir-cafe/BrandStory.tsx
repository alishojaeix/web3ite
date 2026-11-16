import { noirCafeContent } from "./content";

export function BrandStory() {
  const { story } = noirCafeContent;

  return (
    <section id="story" className="scroll-mt-6 bg-[var(--nc-wood)] px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
        <h2 className="whitespace-pre-line font-editorial text-[clamp(3.2rem,7vw,6.8rem)] leading-[0.9] tracking-[-0.04em] text-[var(--nc-cream)]">
          {story.heading}
        </h2>
        <div className="max-w-xl self-end pb-2">
          <span className="mb-8 block h-px w-16 bg-[var(--nc-brass)]" aria-hidden="true" />
          {story.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mb-5 text-base leading-7 text-[var(--nc-cream)]/78 sm:text-lg sm:leading-8">
              {paragraph}
            </p>
          ))}
          <p className="mt-8 text-xs leading-5 text-[var(--nc-muted)]">{story.note}</p>
        </div>
      </div>
    </section>
  );
}
