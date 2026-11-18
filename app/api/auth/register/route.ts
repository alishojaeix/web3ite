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
          "حساب‌ها در این استقرار پیکربندی نشده‌اند. وجود AUTH_SECRET با حداقل ۳۲ نویسه لازم است.",
      },
      { status: 503 }
    );
  }

  const limit = rateLimit(`register:${clientKey(request)}`, 8, 10 * 60 * 1000);
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
  if (!email) {
    return NextResponse.json({ error: "یک نشانی ایمیل معتبر وارد کنید." }, { status: 400 });
  }
  if (!password) {
    return NextResponse.json(
      { error: "گذرواژه‌ای بین ۸ تا ۲۰۰ نویسه انتخاب کنید." },
      { status: 400 }
    );
  }

  try {
    const existing = await findUserByEmail(email);
    if (existing) {
      return NextResponse.json(
        { error: "حسابی با این ایمیل از قبل وجود دارد." },
        { status: 409 }
      );
    }

    const user = await createUser(email, await hashPassword(password));
    const token = createSessionToken(user.id);
    if (!token) {
      return NextResponse.json(
        { error: "حساب‌ها در این استقرار پیکربندی نشده‌اند." },
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
          "فضای ذخیره‌سازی حساب در این استقرار فقط‌خواندنی است. WEB3ITE_DATA_DIR را به مسیری قابل نوشتن تنظیم کنید یا یک پایگاه داده وصل کنید.",
      },
      { status: 503 }
    );
  }
}
