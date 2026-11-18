import { NextResponse } from "next/server";
import { appendToCollection, readCollection } from "@/lib/server/store";
import { clientKey, rateLimit } from "@/lib/server/rate-limit";

export const runtime = "nodejs";

type WaitlistEntry = {
  id: string;
  email: string;
  project: string;
  createdAt: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  const limit = rateLimit(`waitlist:${clientKey(request)}`, 5, 10 * 60 * 1000);
  if (!limit.allowed) {
    return NextResponse.json(
      { error: "درخواست‌های بیش از حد. لطفاً کمی بعد دوباره تلاش کنید." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } }
    );
  }

  let body: { email?: unknown; project?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "بدنهٔ درخواست نامعتبر است." }, { status: 400 });
  }

  const email =
    typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const project = typeof body.project === "string" ? body.project.trim() : "";

  if (email.length > 180 || !EMAIL.test(email)) {
    return NextResponse.json({ error: "یک نشانی ایمیل معتبر وارد کنید." }, { status: 400 });
  }

  try {
    const existing = await readCollection<WaitlistEntry>("waitlist");
    if (existing.some((entry) => entry.email === email)) {
      return NextResponse.json({ ok: true, duplicate: true });
    }
    await appendToCollection<WaitlistEntry>("waitlist", {
      id: globalThis.crypto.randomUUID(),
      email,
      project: project.slice(0, 240),
      createdAt: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      {
        error:
          "فهرست راه‌اندازی در این استقرار فقط‌خواندنی است. پس از پیکربندی فضای ذخیره‌سازی دوباره تلاش کنید.",
      },
      { status: 503 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
