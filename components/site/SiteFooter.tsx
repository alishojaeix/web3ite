import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.06] px-6 py-16 lg:px-10">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-[28px] tracking-[-0.03em] text-[#f6f1ea]">Web3ite</p>
          <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-[#9a958c]">
            Create, customize, and launch premium 3D websites. Catalog is data. Models swap without rewriting the floor.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-12 text-[13px]">
          <div className="flex flex-col gap-2 text-[#b8b3aa]">
            <Link href="/templates" className="hover:text-[#f6f1ea]">
              Templates
            </Link>
            <Link href="/#studio" className="hover:text-[#f6f1ea]">
              Studio
            </Link>
          </div>
          <div className="flex flex-col gap-2 text-[#b8b3aa]">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-[1440px] text-[12px] text-[#6d6860]">© 2026 Web3ite. Demo catalog.</p>
    </footer>
  );
}
