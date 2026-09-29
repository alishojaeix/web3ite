"use client";

import { FormEvent, useState } from "react";

export function Waitlist() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-xl border border-white/10 bg-[#0c0e12] px-8 py-16 md:px-16">
        <h2 className="max-w-2xl font-display text-[40px] leading-[1.05] tracking-[-0.035em] text-[#f6f1ea] md:text-[52px]">
          Put a 3D site on the floor
        </h2>
        <p className="mt-4 max-w-lg text-[16px] text-[#b8b3aa]">
          Early access for studios who already have a model and a brand. No fake metrics — just a list.
        </p>
        {sent ? (
          <p className="mt-8 text-[#d4af7a]">Noted. We’ll write when the studio opens.</p>
        ) : (
          <form onSubmit={onSubmit} className="mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="waitlist-email">
              Email
            </label>
            <input
              id="waitlist-email"
              type="email"
              required
              placeholder="studio@email.com"
              className="h-12 flex-1 rounded-sm border border-white/10 bg-black/40 px-4 text-[#f6f1ea] outline-none placeholder:text-[#6d6860] focus:border-[#d4af7a]/50"
            />
            <button
              type="submit"
              className="h-12 rounded-sm bg-[#f4efe6] px-6 text-[14px] font-medium text-[#111]"
            >
              Request access
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
