"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import { noirCafeContent, type CafeImage } from "./content";

export function CafeGallery() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<CafeImage | null>(null);
  const { gallery } = noirCafeContent;

  function openImage(image: CafeImage) {
    setSelected(image);
    dialogRef.current?.showModal();
  }

  function closeDialog() {
    dialogRef.current?.close();
  }

  return (
    <section id="gallery" className="scroll-mt-6 bg-[var(--nc-panel)] px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <h2 className="max-w-xl font-editorial text-[clamp(3rem,6vw,5.7rem)] leading-[0.92] tracking-[-0.04em] text-[var(--nc-cream)]">
            {gallery.heading}
          </h2>
          <p className="max-w-sm pb-1 text-sm leading-6 text-[var(--nc-muted)]">{gallery.introduction}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-12 md:gap-5">
          {gallery.images.map((image, index) => (
            <figure key={image.src} className={index === 0 ? "md:col-span-7" : "md:col-span-5"}>
              <button
                type="button"
                onClick={() => openImage(image)}
                aria-label={`نمایش تصویر بزرگ‌تر: ${image.caption}`}
                aria-haspopup="dialog"
                className="group relative block aspect-[4/3] w-full overflow-hidden text-left focus-visible:outline-offset-4"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 58vw, 760px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.035] motion-reduce:transition-none"
                  style={{ objectPosition: image.position }}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                <span className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white">
                  <span className="font-editorial text-2xl sm:text-3xl">{image.caption}</span>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/70 text-xl transition-colors group-hover:bg-white group-hover:text-[var(--nc-ink)]" aria-hidden="true">+</span>
                </span>
              </button>
            </figure>
          ))}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-label="تصویر گالری"
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeDialog();
        }}
        className="m-auto max-h-[92dvh] w-[min(94vw,1100px)] max-w-none overflow-visible border border-white/20 bg-[var(--nc-ink)] p-2 text-[var(--nc-cream)] shadow-2xl backdrop:bg-black/90"
      >
        {selected ? (
          <div>
            <div className="flex items-center justify-between gap-4 px-2 py-2">
              <p className="font-editorial text-xl">{selected.caption}</p>
              <button
                type="button"
                onClick={closeDialog}
                aria-label="بستن تصویر گالری"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/30 hover:border-[var(--nc-brass)] hover:text-[var(--nc-brass)]"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>
            <div className="relative h-[min(72dvh,760px)] w-full">
              <Image src={selected.src} alt={selected.alt} fill sizes="94vw" className="object-contain" />
            </div>
          </div>
        ) : null}
      </dialog>
    </section>
  );
}
