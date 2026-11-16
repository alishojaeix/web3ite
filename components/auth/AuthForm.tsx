"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

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
      setError("The passwords do not match.");
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
        setError(payload.error ?? "The account request failed. Please try again.");
        return;
      }
      router.push(next);
      router.refresh();
    } catch {
      setError("The account request could not be sent. Check your connection.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#8a847c]">
          {isRegister ? "Create your account" : "Welcome back"}
        </p>
        <h2 className="mt-2 font-display text-[26px] tracking-[-0.03em] text-[#f6f1ea]">
          {isRegister ? "One account, every purchase." : "Sign in to continue."}
        </h2>
      </div>

      <label className="block">
        <span className="mb-2 block text-[10px] uppercase tracking-[0.16em] text-[#8a847c]">
          Email
        </span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          maxLength={180}
          placeholder="you@example.com"
          className="min-h-12 w-full rounded-sm border border-white/[0.1] bg-black/35 px-4 text-[14px] text-[#f6f1ea] outline-none transition-colors placeholder:text-[#5f5b54] focus:border-[#d4af7a]/60"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-[10px] uppercase tracking-[0.16em] text-[#8a847c]">
          Password
        </span>
        <input
          name="password"
          type="password"
          required
          minLength={8}
          maxLength={200}
          autoComplete={isRegister ? "new-password" : "current-password"}
          placeholder={isRegister ? "At least 8 characters" : "Your password"}
          className="min-h-12 w-full rounded-sm border border-white/[0.1] bg-black/35 px-4 text-[14px] text-[#f6f1ea] outline-none transition-colors placeholder:text-[#5f5b54] focus:border-[#d4af7a]/60"
        />
      </label>

      {isRegister ? (
        <label className="block">
          <span className="mb-2 block text-[10px] uppercase tracking-[0.16em] text-[#8a847c]">
            Confirm password
          </span>
          <input
            name="confirm"
            type="password"
            required
            minLength={8}
            maxLength={200}
            autoComplete="new-password"
            placeholder="Repeat your password"
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
            ? "Creating account…"
            : "Signing in…"
          : isRegister
            ? "Create account"
            : "Sign in"}
        {!pending ? <ArrowUpRight className="h-4 w-4" aria-hidden /> : null}
      </button>

      <p className="text-[10px] leading-5 text-[#6f6a62]">
        {isRegister
          ? "No marketing email is sent. Your session uses a signed HttpOnly cookie."
          : "Sign-in attempts are rate limited. Sessions last 30 days."}
      </p>
    </form>
  );
}
