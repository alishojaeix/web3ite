"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Check, Loader2, LockKeyhole } from "lucide-react";
import { fa } from "@/lib/i18n/fa";
import { faCurrency } from "@/lib/i18n/format";

type PurchaseCtaProps = {
  templateId: string;
  price: number;
  title: string;
  /** Set when the signed-in user already owns this template. */
  owned?: boolean;
  variant?: "primary" | "outline" | "inline";
  /** Optional secondary destination shown next to the CTA (e.g. account). */
  accountHref?: string;
  className?: string;
};

const base =
  "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm px-5 py-3 text-[13px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4af7a] disabled:cursor-not-allowed";

const variants = {
  primary:
    "bg-[#f4efe6] text-[#111] hover:bg-white disabled:bg-white/[0.06] disabled:text-[#6f6a62]",
  outline:
    "border border-[#d4af7a]/45 text-[#f0d9a8] hover:border-[#d4af7a] hover:bg-[#d4af7a]/10",
  inline:
    "justify-between border border-white/15 text-[#f6f1ea] hover:border-white/30",
} as const;

/**
 * The single purchase entry point for a template.
 *
 * Oracle: the checkout route (`/checkout/{id}`) is the only place that can
 * start a payment. This component never fakes a successful purchase — when the
 * user already owns the template it becomes an informational state, and while
 * the template is not purchasable it links to the checkout page, which explains
 * the gateway status honestly.
 */
export function PurchaseCta({
  templateId,
  price,
  title,
  owned = false,
  variant = "primary",
  accountHref = "/account",
  className = "",
}: PurchaseCtaProps) {
  const [navigating, setNavigating] = useState(false);
  const classes = `${base} ${variants[variant]} ${className}`.trim();

  if (owned) {
    return (
      <div className="w-full">
        <p className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm border border-[#10b981]/25 bg-[#10b981]/10 px-4 py-3 text-[13px] text-[#7dd8b4]">
          <Check className="h-4 w-4" aria-hidden />
          {fa.checkout.purchase.ownedAction}
        </p>
        <Link
          href={accountHref}
          className="mt-3 inline-flex min-h-11 items-center gap-1.5 text-[13px] tracking-[0.16em] text-[#d4af7a] hover:text-[#f0d9a8]"
        >
          {fa.checkout.purchase.ownedGoToAccount}
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
      </div>
    );
  }

  return (
    <Link
      href={`/checkout/${templateId}`}
      aria-label={`${fa.checkout.purchase.cta} ${title} — ${faCurrency(price)}`}
      aria-busy={navigating || undefined}
      onClick={(event) => {
        // Guard against double activation while the route change settles.
        if (navigating) {
          event.preventDefault();
          return;
        }
        setNavigating(true);
      }}
      className={classes}
    >
      {navigating ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
          {fa.checkout.purchase.buying}
        </>
      ) : (
        <>
          {variant === "inline" ? (
            <>
              <span>{fa.checkout.purchase.cta}</span>
              <span className="flex items-center gap-2 text-[#f0d9a8]">
                {faCurrency(price)}
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </span>
            </>
          ) : (
            <>
              <LockKeyhole className="h-4 w-4" aria-hidden />
              {fa.checkout.purchase.cta} · {faCurrency(price)}
            </>
          )}
        </>
      )}
    </Link>
  );
}
