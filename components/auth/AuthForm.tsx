"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { fa } from "@/lib/i18n/fa";

export function AuthForm({
  mode,
  next,
}: {
  mode: "login" | "register";
  next: string;
}) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const isRegister = mode === "register";

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "");
    const password = String(data.get("password") ?? "");

    if (isRegister && password !== String(data.get("confirm") ?? "")) {
      setError("گذرواژه‌ها یکسان نیستند.");
      return;
    }

    setPending(true);
    try {
      const response = await fetch(`/api/auth/${mode}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const payload = (await response.json().catch(() => ({}))) as {
        error?: string;
      };
      if (!response.ok) {
        setError(payload.error ?? fa.auth.genericError);
        return;
      }
      router.push(next);
      router.refresh();
    } catch {
      setError(fa.errors.network);
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <p className="text-[13px] tracking-[0.2em] text-[#8a847c]">
          {isRegister ? "ساخت حساب شما" : "خوش برگشتید"}
        </p>
        <h2 className="mt-2 font-display text-[26px] tracking-[0.01em] text-[#f6f1ea]">
          {isRegister ? "یک حساب، همهٔ خریدها." : "برای ادامه وارد شوید."}
        </h2>
      </div>

      <label className="block">
        <span className="mb-2 block text-[13px] tracking-[0.16em] text-[#8a847c]">
          {fa.auth.email}
        </span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          maxLength={180}
          dir="ltr"
          placeholder={fa.auth.emailPlaceholder}
          className="min-h-12 w-full rounded-sm border border-white/[0.1] bg-black/35 px-4 text-start text-[14px] text-[#f6f1ea] outline-none transition-colors placeholder:text-[#5f5b54] focus:border-[#d4af7a]/60"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-[13px] tracking-[0.16em] text-[#8a847c]">
          {fa.auth.password}
        </span>
        <input
          name="password"
          type="password"
          required
          minLength={8}
          maxLength={200}
          autoComplete={isRegister ? "new-password" : "current-password"}
          placeholder={isRegister ? "حداقل ۸ نویسه" : "گذرواژهٔ شما"}
          className="min-h-12 w-full rounded-sm border border-white/[0.1] bg-black/35 px-4 text-[14px] text-[#f6f1ea] outline-none transition-colors placeholder:text-[#5f5b54] focus:border-[#d4af7a]/60"
        />
      </label>

      {isRegister ? (
        <label className="block">
          <span className="mb-2 block text-[13px] tracking-[0.16em] text-[#8a847c]">
            تکرار گذرواژه
          </span>
          <input
            name="confirm"
            type="password"
            required
            minLength={8}
            maxLength={200}
            autoComplete="new-password"
            placeholder="گذرواژه را دوباره وارد کنید"
            className="min-h-12 w-full rounded-sm border border-white/[0.1] bg-black/35 px-4 text-[14px] text-[#f6f1ea] outline-none transition-colors placeholder:text-[#5f5b54] focus:border-[#d4af7a]/60"
          />
        </label>
      ) : null}

      <p role="alert" aria-live="polite" className="min-h-[18px] text-[12px] leading-5 text-[#f2b6b0]">
        {error}
      </p>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-[#f4efe6] px-5 text-[13px] font-medium text-[#111] transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending
          ? isRegister
            ? "در حال ساخت حساب…"
            : "در حال ورود…"
          : isRegister
            ? "ساخت حساب"
            : "ورود"}
        {!pending ? <ArrowUpRight className="h-4 w-4" aria-hidden /> : null}
      </button>

      <p className="text-[13px] leading-5 text-[#6f6a62]">
        {isRegister
          ? "هیچ ایمیل بازاریابی ارسال نمی‌شود. نشست شما از یک کوکی امضاشدهٔ HttpOnly استفاده می‌کند."
          : "تلاش‌های ورود محدود به نرخ هستند. نشست‌ها ۳۰ روز دوام دارند."}
      </p>
    </form>
  );
}
