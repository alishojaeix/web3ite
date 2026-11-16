import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/server/auth";

export const runtime = "nodejs";

export async function GET() {
  const user = await getSessionUser();
  return NextResponse.json(
    { user },
    { headers: { "Cache-Control": "no-store" } }
  );
}
