import { NextResponse } from "next/server";
import {
  SESSION_COOKIE,
  authAvailable,
  createSessionToken,
  createUser,
  findUserByEmail,
  hashPassword,
  normalizeEmail,
  publicUser,
  sessionCookieOptions,
  validatePassword,
} from "@/lib/server/auth";
import { clientKey, rateLimit } from "@/lib/server/rate-limit";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!authAvailable()) {
    return NextResponse.json(
      {
        error:
          "Accounts are not configured on this deployment. An AUTH_SECRET of at least 32 characters is required.",
      },
      { status: 503 }
    );
  }

  const limit = rateLimit(`register:${clientKey(request)}`, 8, 10 * 60 * 1000);
  if (!limit.allowed) {
    return NextResponse.json(
      { error: "Too many attempts. Please try again shortly." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } }
    );
  }

  let body: { email?: unknown; password?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = normalizeEmail(body.email);
  const password = validatePassword(body.password);
  if (!email) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }
  if (!password) {
    return NextResponse.json(
      { error: "Choose a password between 8 and 200 characters." },
      { status: 400 }
    );
  }

  try {
    const existing = await findUserByEmail(email);
    if (existing) {
      return NextResponse.json(
        { error: "An account with this email already exists." },
        { status: 409 }
      );
    }

    const user = await createUser(email, await hashPassword(password));
    const token = createSessionToken(user.id);
    if (!token) {
      return NextResponse.json(
        { error: "Accounts are not configured on this deployment." },
        { status: 503 }
      );
    }

    const response = NextResponse.json(
      { ok: true, user: publicUser(user) },
      { status: 201 }
    );
    response.cookies.set(SESSION_COOKIE, token, sessionCookieOptions());
    return response;
  } catch {
    return NextResponse.json(
      {
        error:
          "Account storage is read-only on this deployment. Configure WEB3ITE_DATA_DIR to a writable location or connect a database.",
      },
      { status: 503 }
    );
  }
}
