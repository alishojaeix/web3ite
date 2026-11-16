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
      { error: "Too many requests. Please try again shortly." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } }
    );
  }

  let body: { email?: unknown; project?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email =
    typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const project = typeof body.project === "string" ? body.project.trim() : "";

  if (email.length > 180 || !EMAIL.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
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
          "The launch list is read-only on this deployment. Please try again when storage is configured.",
      },
      { status: 503 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
