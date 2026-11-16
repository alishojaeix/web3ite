import { NextResponse } from "next/server";
import { rateLimit, clientKey } from "@/lib/server/rate-limit";

export const runtime = "nodejs";

const AGE_COOKIE = "web3ite_age_ok";
const MAX_AGE = 60 * 60 * 24 * 30;

const ALLOWED_RETURNS = [
  "/sites/aldane-voss",
  "/sites/cigar-atelier",
  "/sites/modern-tobacco",
  "/previews/aldane-voss",
];

function safeReturn(value: FormDataEntryValue | null): string {
  if (typeof value !== "string" || !value.startsWith("/") || value.startsWith("//")) {
    return "/";
  }
  const path = value.split("?")[0].split("#")[0];
  return ALLOWED_RETURNS.some(
    (prefix) => path === prefix || path.startsWith(`${prefix}/`)
  )
    ? value
    : "/";
}

export async function POST(request: Request) {
  const limit = rateLimit(`age-gate:${clientKey(request)}`, 12, 10 * 60 * 1000);
  if (!limit.allowed) {
    return NextResponse.redirect(new URL("/age-gate?denied=1", request.url), 303);
  }

  const form = await request.formData();
  const decision = form.get("decision");
  const returnTo = safeReturn(form.get("returnTo"));

  if (decision !== "adult") {
    return NextResponse.redirect(
      new URL(`/age-gate?denied=1&returnTo=${encodeURIComponent(returnTo)}`, request.url),
      303
    );
  }

  const response = NextResponse.redirect(new URL(returnTo, request.url), 303);
  response.cookies.set(AGE_COOKIE, "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: MAX_AGE,
  });
  return response;
}
