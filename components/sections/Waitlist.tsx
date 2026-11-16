"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

export function Waitlist() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setStatus("sending");
    setMessage("");
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: String(data.get("email") ?? ""),
          project: String(data.get("project") ?? ""),
        }),
      });
      const payload = (await response.json().catch(() => ({}))) as {
        error?: string;
      };
      if (!response.ok) {
        setStatus("error");
        setMessage(payload.error ?? "The request could not be stored. Try again.");
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setMessage("The request could not be sent. Check your connection.");
    }
  }

  return (
    <section id="waitlist" className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-xl border border-white/[0.08] bg-[#0b0d11] px-7 py-12 md:px-14 md:py-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{
            background:
              "radial-gradient(700px 360px at 85% 10%, rgba(212,175,122,0.12), transparent 65%), radial-gradient(500px 300px at 8% 100%, rgba(90,74,55,0.18), transparent 70%)",
          }}
        />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <p className="eyebrow flex items-center gap-3 text-[#8a847c]">
              <span className="h-px w-8 bg-[#d4af7a]/60" />
              Launch access
            </p>
            <h2 className="display-face mt-6 max-w-[12ch] text-balance text-[clamp(2.7rem,5vw,4.8rem)] leading-[0.95] text-[#f6f1ea]">
              Put a room
              <span className="editorial-face ml-3 italic text-[#e4c69c]">on the floor.</span>
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[#a7a198]">
              The catalog is open for inspection. Production access, model
              replacement and deployment are being prepared. No fake metrics, no
              invented customer logos — just a list.
            </p>
          </div>

          <div>
            {status === "success" ? (
              <div
                className="rounded-lg border border-[#d4af7a]/25 bg-[#d4af7a]/[0.06] p-6"
                role="status"
                aria-live="polite"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#d4af7a]/15 text-[#f0d9a8]">
                  <Check className="h-4 w-4" />
                </span>
                <p className="mt-4 font-display text-[22px] tracking-[-0.03em] text-[#f6f1ea]">
                  Added to the launch list.
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-[#9a958c]">
                  The address is stored on this demo server. No email is sent.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-4 min-h-11 text-[10px] uppercase tracking-[0.16em] text-[#d4af7a] hover:text-[#f0d9a8]"
                >
                  Use another email
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-3">
                <label className="block">
                  <span className="sr-only">Email address</span>
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    maxLength={180}
                    placeholder="you@studio.com"
                    className="h-12 w-full rounded-sm border border-white/[0.1] bg-black/35 px-4 text-[14px] text-[#f6f1ea] outline-none transition-colors placeholder:text-[#5f5b54] focus:border-[#d4af7a]/50"
                  />
                </label>
                <label className="block">
                  <span className="sr-only">What are you building?</span>
                  <input
                    name="project"
                    type="text"
                    maxLength={240}
                    placeholder="What are you building? (optional)"
                    className="h-12 w-full rounded-sm border border-white/[0.1] bg-black/35 px-4 text-[14px] text-[#f6f1ea] outline-none transition-colors placeholder:text-[#5f5b54] focus:border-[#d4af7a]/50"
                  />
                </label>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group flex h-12 w-full items-center justify-center gap-2 rounded-sm bg-[#f4efe6] px-5 text-[13px] font-medium text-[#111] transition-colors hover:bg-white disabled:cursor-wait disabled:opacity-70"
                >
                  {status === "sending" ? "Sending…" : "Request launch access"}
                  {status !== "sending" ? (
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  ) : null}
                </button>
                <p
                  role="alert"
                  aria-live="polite"
                  className="min-h-[14px] text-[10px] leading-relaxed text-[#f2b6b0]"
                >
                  {status === "error" ? message : ""}
                </p>
                <p className="text-[10px] leading-relaxed text-[#6f6a62]">
                  Demo launch list. The address is stored on this server; no marketing
                  email is sent.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
