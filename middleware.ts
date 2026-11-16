import { NextResponse, type NextRequest } from "next/server";

const AGE_COOKIE = "web3ite_age_ok";

/** Pages that present adult-only tobacco content must sit behind the gate. */
const GATED_PREFIXES = [
  "/sites/aldane-voss",
  "/sites/cigar-atelier",
  "/sites/modern-tobacco",
  "/previews/aldane-voss",
];

function isGated(pathname: string) {
  return GATED_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  if (!isGated(pathname)) return NextResponse.next();

  if (request.cookies.get(AGE_COOKIE)?.value === "1") {
    return NextResponse.next();
  }

  const gate = request.nextUrl.clone();
  gate.pathname = "/age-gate";
  gate.search = "";
  gate.searchParams.set("returnTo", `${pathname}${search}`);
  return NextResponse.redirect(gate);
}

export const config = {
  matcher: [
    "/sites/aldane-voss",
    "/sites/aldane-voss/:path*",
    "/sites/cigar-atelier",
    "/sites/cigar-atelier/:path*",
    "/sites/modern-tobacco",
    "/sites/modern-tobacco/:path*",
    "/previews/aldane-voss",
    "/previews/aldane-voss/:path*",
  ],
};
