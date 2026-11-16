import { noirCafeContent } from "./content";

export function CoffeeMenu() {
  const { menu } = noirCafeContent;

  return (
    <section id="menu" className="scroll-mt-6 bg-[var(--nc-paper)] px-6 py-24 text-[var(--nc-ink)] sm:px-10 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-6 border-b border-[var(--nc-ink)]/20 pb-10 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:gap-16">
          <h2 className="whitespace-pre-line font-editorial text-[clamp(3.2rem,7vw,6.5rem)] leading-[0.9] tracking-[-0.04em]">
            {menu.heading}
          </h2>
          <p className="max-w-md pb-1 text-base leading-7 text-[var(--nc-ink)]/70">
            {menu.introduction}
          </p>
        </div>
        <div className="grid gap-12 pt-10 md:grid-cols-2 md:gap-16">
          {menu.groups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-6 font-editorial text-3xl text-[var(--nc-ink)]">{group.title}</h3>
              <ul className="divide-y divide-[var(--nc-ink)]/15">
                {group.items.map((item) => (
                  <li key={item.name} className="py-5">
                    <div className="flex items-baseline justify-between gap-4">
                      <h4 className="font-medium text-[17px] tracking-[0.01em]">{item.name}</h4>
                      <span className="h-px min-w-5 flex-1 border-b border-dotted border-[var(--nc-ink)]/35" aria-hidden="true" />
                      <span className="text-xs text-[var(--nc-ink)]/55">Sample</span>
                    </div>
                    <p className="mt-2 max-w-md text-sm leading-6 text-[var(--nc-ink)]/68">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 border-l border-[var(--nc-ink)]/35 pl-4 text-xs leading-5 text-[var(--nc-ink)]/60">
          Sample menu only. No prices, availability, or real products are represented.
        </p>
      </div>
    </section>
  );
}
