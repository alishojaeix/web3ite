"use client";

import Link from "next/link";
import { useState } from "react";
import { AlertTriangle, Check, CreditCard, Loader2 } from "lucide-react";
import { fa } from "@/lib/i18n/fa";

type PurchaseTermsProps = {
  /** Whether a real payment gateway is configured on this deployment. */
  gatewayConfigured: boolean;
  templateId: string;
  /** Server-side guard: the user already bought this template. */
  owned: boolean;
};

/**
 * Purchase conditions + the final action.
 *
 * - The final action stays disabled until the terms are accepted.
 * - With no payment gateway configured, the button never pretends to pay: it
 *   reveals an honest Persian explanation instead.
 * - With a gateway configured, it delegates to the existing `/api/checkout`
 *   endpoint only after the terms are accepted.
 */
export function PurchaseTerms({
  gatewayConfigured,
  templateId,
  owned,
}: PurchaseTermsProps) {
  const c = fa.checkout;
  const [accepted, setAccepted] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [gatewayNotice, setGatewayNotice] = useState(!gatewayConfigured);

  const items = [
    { title: c.conditionsList.receivesTitle, body: c.conditionsList.receivesBody },
    { title: c.conditionsList.digitalTitle, body: c.conditionsList.digitalBody },
    { title: c.conditionsList.licenseTitle, body: c.conditionsList.licenseBody },
  ];

  async function start() {
    if (!accepted) {
      setError(c.acceptRequired);
      return;
    }
    setError("");
    if (!gatewayConfigured) {
      setGatewayNotice(true);
      return;
    }
    setPending(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ templateId }),
      });
      const payload = (await response.json().catch(() => ({}))) as {
        url?: string;
        error?: string;
      };
      if (response.status === 401) {
        window.location.href = `/login?next=${encodeURIComponent(`/checkout/${templateId}`)}`;
        return;
      }
      if (!response.ok || !payload.url) {
        setError(payload.error ?? c.error);
        return;
      }
      window.location.assign(payload.url);
    } catch {
      setError(fa.errors.network);
    } finally {
      setPending(false);
    }
  }

  const disabled = pending || owned;

  return (
    <section
      aria-labelledby="purchase-conditions-title"
      className="rounded-lg border border-white/[0.08] bg-[#0b0d11]/70 p-6 sm:p-8"
    >
      <h2
        id="purchase-conditions-title"
        className="font-display text-[clamp(1.4rem,2.4vw,1.9rem)] tracking-[0.01em] text-[#f6f1ea]"
      >
        {c.sections.conditions}
      </h2>

      <ul className="mt-5 space-y-4">
        {items.map((item) => (
          <li key={item.title} className="flex items-start gap-3">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#d4af7a]" aria-hidden />
            <div>
              <p className="text-[12px] font-medium text-[#e8e4dc]">{item.title}</p>
              <p className="mt-1 text-[12px] leading-6 text-[#a7a198]">{item.body}</p>
            </div>
          </li>
        ))}

        <li className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#f3d19a]" aria-hidden />
          <div>
            <p className="text-[12px] font-medium text-[#e8e4dc]">
              {c.conditionsList.policyTitle}
            </p>
            <p className="mt-1 text-[12px] leading-6 text-[#a7a198]">
              {c.conditionsList.policyBody}
            </p>
          </div>
        </li>

        <li className="flex items-start gap-3">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#d4af7a]" aria-hidden />
          <div>
            <p className="text-[12px] font-medium text-[#e8e4dc]">
              {c.conditionsList.privacyTitle}
            </p>
            <p className="mt-1 text-[12px] leading-6 text-[#a7a198]">
              {c.conditionsList.privacyBody}{" "}
              <Link
                href="/legal"
                className="underline decoration-white/20 underline-offset-2 hover:text-[#f0d9a8]"
              >
                {c.conditionsList.privacyLink}
              </Link>
              .
            </p>
          </div>
        </li>
      </ul>

      <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-sm border border-white/[0.07] bg-white/[0.02] p-4">
        <input
          type="checkbox"
          checked={accepted}
          onChange={(event) => {
            setAccepted(event.target.checked);
            if (event.target.checked) setError("");
          }}
          className="mt-0.5 h-4 w-4 shrink-0 accent-[#d4af7a]"
        />
        <span className="text-[12px] leading-6 text-[#b8b3aa]">{c.acceptTerms}</span>
      </label>

      <div className="mt-6">
        <button
          type="button"
          onClick={start}
          disabled={disabled}
          aria-disabled={!accepted || disabled}
          className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm px-5 py-3 text-[13px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4af7a] ${
            accepted && !disabled
              ? "bg-[#f4efe6] text-[#111] hover:bg-white"
              : "cursor-not-allowed border border-white/10 bg-white/[0.04] text-[#6f6a62]"
          }`}
        >
          {pending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              {c.finalActionPending}
            </>
          ) : (
            <>
              <CreditCard className="h-4 w-4" aria-hidden />
              {c.finalAction}
            </>
          )}
        </button>

        {!accepted ? (
          <p className="mt-3 text-[13px] leading-5 text-[#8a847c]">{c.termsPending}</p>
        ) : null}

        {gatewayNotice ? (
          <div
            role="status"
            className="mt-4 rounded-sm border border-[#f59e0b]/25 bg-[#f59e0b]/10 px-4 py-3"
          >
            <p className="text-[12px] font-medium text-[#f3d19a]">
              {c.purchase.gatewayUnavailable}
            </p>
            <p className="mt-1 text-[13px] leading-6 text-[#e5d6b4]">
              {c.purchase.gatewayBody}
            </p>
          </div>
        ) : null}

        <p
          role="alert"
          aria-live="polite"
          className="mt-3 min-h-[16px] text-[12px] leading-5 text-[#f2b6b0]"
        >
          {error}
        </p>
      </div>
    </section>
  );
}
