import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { AuthShell } from "@/components/auth/AuthShell";
import { AuthForm } from "@/components/auth/AuthForm";
import { getSessionUser, safeNext } from "@/lib/server/auth";
import { fa } from "@/lib/i18n/fa";

export const metadata: Metadata = {
  title: "ساخت حساب",
  description: "ساخت حساب نمایشی Web3ite برای پیوند خرید قالب‌ها.",
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
      title={fa.auth.registerTitle}
      intro={fa.auth.registerIntro}
      footer={
        <p>
          {fa.auth.haveAccount}{" "}
          <Link
            href={`/login?next=${encodeURIComponent(next)}`}
            className="text-[#f0d9a8] underline decoration-white/20 underline-offset-2 hover:text-white"
          >
            {fa.auth.signInInstead}
          </Link>
          .
        </p>
      }
    >
      <AuthForm mode="register" next={next} />
    </AuthShell>
  );
}
