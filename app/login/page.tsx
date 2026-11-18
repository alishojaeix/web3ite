import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { AuthShell } from "@/components/auth/AuthShell";
import { AuthForm } from "@/components/auth/AuthForm";
import { getSessionUser, safeNext } from "@/lib/server/auth";
import { fa } from "@/lib/i18n/fa";

export const metadata: Metadata = {
  title: "ورود",
  description: "ورود به حساب نمایشی Web3ite.",
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
      title={fa.auth.signInTitle}
      intro={fa.auth.signInIntro}
      footer={
        <p>
          {fa.auth.newHere}{" "}
          <Link
            href={`/register?next=${encodeURIComponent(next)}`}
            className="text-[#f0d9a8] underline decoration-white/20 underline-offset-2 hover:text-white"
          >
            {fa.auth.createAccount}
          </Link>
          .
        </p>
      }
    >
      <AuthForm mode="login" next={next} />
    </AuthShell>
  );
}
