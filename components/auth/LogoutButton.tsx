"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export function LogoutButton() {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  async function signOut() {
    setPending(true);
    setError("");
    try {
      const response = await fetch("/api/auth/logout", { method: "POST" });
      if (!response.ok) throw new Error("Sign out failed");
      router.push("/");
      router.refresh();
    } catch {
      setError("Could not sign out. Please try again.");
      setPending(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={signOut}
        disabled={pending}
        className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-white/15 px-4 py-2.5 text-[12px] text-[#f6f1ea] transition-colors hover:border-white/30 disabled:opacity-60"
      >
        <LogOut className="h-3.5 w-3.5" aria-hidden />
        {pending ? "Signing out…" : "Sign out"}
      </button>
      {error ? (
        <p role="alert" className="mt-2 text-[11px] text-[#f2b6b0]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
