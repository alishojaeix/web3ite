"use client";

import { useState } from "react";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { fa } from "@/lib/i18n/fa";

export function CheckoutButton({ templateId }: { templateId: string }) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  async function startCheckout() {
    setPending(true);
    setError("");
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ templateId }),
      });
      const payload = (await response.json().catch(() => ({}))) as {
        url?: string;
        error?: string;
        code?: string;
      };

      if (response.status === 401) {
        window.location.href = `/login?next=${encodeURIComponent(`/checkout/${templateId}`)}`;
        return;
      }
      if (!response.ok || !payload.url) {
        setError(payload.error ?? fa.checkout.error);
        return;
      }
      window.location.assign(payload.url);
    } catch {
      setError(fa.errors.network);
    } finally {
      setPending(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={startCheckout}
        disabled={pending}
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-[#f4efe6] px-5 py-3 text-[13px] font-medium text-[#111] transition-colors hover:bg-white disabled:cursor-wait disabled:opacity-70"
      >
        {pending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            {fa.checkout.processing}
          </>
        ) : (
          <>
            ادامه به پرداخت امن
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </>
        )}
      </button>
      <p role="alert" aria-live="polite" className="mt-3 min-h-[16px] text-[12px] leading-5 text-[#f2b6b0]">
        {error}
      </p>
      <p className="mt-2 text-[13px] leading-5 text-[#6f6a62]">
        پرداخت آنلاین در این نسخه از سایت فعال نیست؛ این دکمه هیچ مبلغی دریافت
        نمی‌کند و سفارشی ثبت نمی‌شود.
      </p>
    </div>
  );
}
