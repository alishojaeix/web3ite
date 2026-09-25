export function StudioStrip() {
  return (
    <section id="studio" className="relative overflow-hidden border-y border-white/[0.06] px-6 py-24 lg:px-10">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <h2 className="font-display text-[40px] leading-[1.05] tracking-[-0.035em] text-[#f6f1ea] md:text-[52px]">
            The studio is the product, not a screenshot
          </h2>
          <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-[#b8b3aa]">
            Camera, lights, and a GLB slot are already wired. Swap the model path in the catalog and the card, the hero, and the studio all update.
          </p>
        </div>
        <ol className="space-y-6 border-l border-white/10 pl-6">
          {[
            ["Pick a body", "Agency, fashion, automotive — each template is a finished 3D site, not a layout kit."],
            ["Tune the room", "Accent, camera, and copy sit on a glass desk over the live scene."],
            ["Launch", "Deployment comes later. The catalog is already admin-shaped: data in, cards out."],
          ].map(([title, body]) => (
            <li key={title}>
              <p className="font-display text-[22px] tracking-[-0.03em] text-[#f6f1ea]">{title}</p>
              <p className="mt-1.5 text-[14px] leading-relaxed text-[#9a958c]">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
