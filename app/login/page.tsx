import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { AuthShell } from "@/components/auth/AuthShell";
import { AuthForm } from "@/components/auth/AuthForm";
import { getSessionUser, safeNext } from "@/lib/server/auth";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your Web3ite demo account.",
  robots: { index: false, follow: false },
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { next?: string };
}) {
  const next = safeNext(searchParams.next);
  const user = await getSessionUser();
  if (user) redirect(next);

  return (
    <AuthShell
      title="Sign in."
      intro="Your account holds the templates you have purchased. Sign in to continue to checkout or open your dashboard."
      footer={
        <p>
          New here?{" "}
          <Link
            href={`/register?next=${encodeURIComponent(next)}`}
            className="text-[#f0d9a8] underline decoration-white/20 underline-offset-2 hover:text-white"
          >
            Create an account
          </Link>
          .
        </p>
      }
    >
      <AuthForm mode="login" next={next} />
    </AuthShell>
  );
}
