import { noirCafeContent } from "./content";

export function FeaturedProducts() {
  const { collections } = noirCafeContent;

  return (
    <section id="collections" className="bg-[var(--nc-ink)] px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.62fr] lg:items-end lg:gap-16">
          <h2 className="font-editorial text-[clamp(3rem,6vw,5.8rem)] leading-[0.92] tracking-[-0.04em] text-[var(--nc-cream)]">
            {collections.heading}
          </h2>
          <p className="max-w-md pb-1 text-base leading-7 text-[var(--nc-muted)]">{collections.introduction}</p>
        </div>
        <ul className="border-t border-[var(--nc-line)]">
          {collections.items.map((item) => (
            <li key={item.number} className="grid gap-4 border-b border-[var(--nc-line)] py-7 sm:grid-cols-[4rem_1fr_auto] sm:items-center sm:gap-8 sm:py-8">
              <span className="font-editorial text-2xl text-[var(--nc-brass)]/85">{item.number}</span>
              <div>
                <h3 className="font-editorial text-3xl text-[var(--nc-cream)] sm:text-4xl">{item.name}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--nc-muted)]">{item.description}</p>
              </div>
              <span className="text-xs tracking-[0.04em] text-[var(--nc-brass)]">{item.detail}</span>
            </li>
          ))}
        </ul>
        <p className="mt-7 text-xs leading-5 text-[var(--nc-muted)]">
          کلکسیون قهوه به‌صورت محتوای نمونه نمایش داده شده است. امکان خرید وجود ندارد.
        </p>
      </div>
    </section>
  );
}
