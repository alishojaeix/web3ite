import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { AuthShell } from "@/components/auth/AuthShell";
import { AuthForm } from "@/components/auth/AuthForm";
import { getSessionUser, safeNext } from "@/lib/server/auth";

export const metadata: Metadata = {
  title: "Create an account",
  description: "Create a Web3ite demo account to associate template purchases.",
  robots: { index: false, follow: false },
};

export default async function RegisterPage({
  searchParams,
}: {
  searchParams: { next?: string };
}) {
  const next = safeNext(searchParams.next);
  const user = await getSessionUser();
  if (user) redirect(next);

  return (
    <AuthShell
      title="Create an account."
      intro="A single account keeps your checkout history and purchased templates together. Email and password only."
      footer={
        <p>
          Already have an account?{" "}
          <Link
            href={`/login?next=${encodeURIComponent(next)}`}
            className="text-[#f0d9a8] underline decoration-white/20 underline-offset-2 hover:text-white"
          >
            Sign in
          </Link>
          .
        </p>
      }
    >
      <AuthForm mode="register" next={next} />
    </AuthShell>
  );
}
