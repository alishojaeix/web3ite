import { NextResponse } from "next/server";
import {
  DUMMY_PASSWORD_HASH,
  SESSION_COOKIE,
  authAvailable,
  createSessionToken,
  findUserByEmail,
  normalizeEmail,
  publicUser,
  sessionCookieOptions,
  validatePassword,
  verifyPassword,
} from "@/lib/server/auth";
import { clientKey, rateLimit } from "@/lib/server/rate-limit";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!authAvailable()) {
    return NextResponse.json(
      {
        error:
          "حساب‌ها در این استقرار پیکربندی نشده‌اند. وجود AUTH_SECRET با حداقل ۳۲ نویسه لازم است.",
      },
      { status: 503 }
    );
  }

  const limit = rateLimit(`login:${clientKey(request)}`, 15, 10 * 60 * 1000);
  if (!limit.allowed) {
    return NextResponse.json(
      { error: "تلاش‌های بیش از حد. لطفاً کمی بعد دوباره تلاش کنید." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } }
    );
  }

  let body: { email?: unknown; password?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "بدنهٔ درخواست نامعتبر است." }, { status: 400 });
  }

  const email = normalizeEmail(body.email);
  const password = validatePassword(body.password);
  if (!email || !password) {
    return NextResponse.json(
      { error: "ایمیل و گذرواژهٔ معتبر وارد کنید." },
      { status: 400 }
    );
  }

  try {
    const user = await findUserByEmail(email);
    const valid = await verifyPassword(
      password,
      user?.passwordHash ?? DUMMY_PASSWORD_HASH
    );
    if (!user || !valid) {
      return NextResponse.json(
        { error: "ایمیل یا گذرواژه نادرست است." },
        { status: 401 }
      );
    }

    const token = createSessionToken(user.id);
    if (!token) {
      return NextResponse.json(
        { error: "حساب‌ها در این استقرار پیکربندی نشده‌اند." },
        { status: 503 }
      );
    }

    const response = NextResponse.json({ ok: true, user: publicUser(user) });
    response.cookies.set(SESSION_COOKIE, token, sessionCookieOptions());
    return response;
  } catch {
    return NextResponse.json(
      { error: "فضای ذخیره‌سازی حساب در دسترس نیست. لطفاً بعداً تلاش کنید." },
      { status: 503 }
    );
  }
}
