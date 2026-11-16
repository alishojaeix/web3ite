import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowUpRight, CreditCard, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { LogoutButton } from "@/components/auth/LogoutButton";
import { getSessionUser } from "@/lib/server/auth";
import {
  formatPurchaseAmount,
  listPurchasesForUser,
  type PurchaseRecord,
} from "@/lib/server/purchases";
import { stripeConfigured } from "@/lib/server/stripe";
import { getTemplateById } from "@/lib/templates";
import { CATEGORY_LABELS } from "@/types/template";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Your account",
  description: "Your Web3ite demo account and template purchases.",
  robots: { index: false, follow: false },
};

type PurchaseView = PurchaseRecord & { templateTitle: string; category: string };

export default async function AccountPage() {
  const user = await getSessionUser();
  if (!user) redirect("/login?next=/account");

  let purchases: PurchaseView[] = [];
  let storeError = "";
  try {
    const records = await listPurchasesForUser(user.id);
    purchases = (
      await Promise.all(
        records.map(async (record) => {
          const template = await getTemplateById(record.templateId);
          if (!template) return null;
          return {
            ...record,
            templateTitle: template.title,
            category: CATEGORY_LABELS[template.category],
          };
        })
      )
    ).filter((record): record is PurchaseView => Boolean(record));
  } catch {
    storeError = "Purchase history is temporarily unavailable.";
  }

  const memberSince = new Date(user.createdAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <SiteHeader />
      <main className="px-6 pb-24 pt-32 lg:px-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col gap-6 border-b border-white/[0.08] pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow flex items-center gap-3 text-[#8a847c]">
                <span className="h-px w-8 bg-[#d4af7a]/60" />
                Member account
              </p>
              <h1 className="display-face mt-5 text-[clamp(2.6rem,5vw,4.2rem)] leading-[0.95] text-[#f6f1ea]">
                Your account.
              </h1>
              <p className="mt-4 text-[13px] text-[#a7a198]">
                {user.email} · member since {memberSince}
              </p>
            </div>
            <LogoutButton />
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
            <section aria-labelledby="purchases-title">
              <div className="flex items-center justify-between gap-4">
                <h2
                  id="purchases-title"
                  className="font-display text-[24px] tracking-[-0.03em] text-[#f6f1ea]"
                >
                  Purchases
                </h2>
                <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[#8a847c]">
                  {purchases.length} {purchases.length === 1 ? "template" : "templates"}
                </span>
              </div>

              {storeError ? (
                <p
                  role="alert"
                  className="mt-5 rounded-sm border border-[#ef4444]/25 bg-[#ef4444]/10 px-4 py-3 text-[12px] text-[#f2b6b0]"
                >
                  {storeError}
                </p>
              ) : null}

              {purchases.length === 0 ? (
                <div className="mt-5 rounded-lg border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8">
                  <p className="font-display text-[22px] tracking-[-0.03em] text-[#f6f1ea]">
                    No purchases yet.
                  </p>
                  <p className="mt-2 max-w-md text-[13px] leading-6 text-[#a7a198]">
                    Choose a template, inspect its website, then checkout. A completed
                    payment is linked to this account and appears here.
                  </p>
                  <Link
                    href="/templates"
                    className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-sm bg-[#f4efe6] px-4 py-2.5 text-[12px] font-medium text-[#111] hover:bg-white"
                  >
                    Browse the catalog
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  </Link>
                </div>
              ) : (
                <ul className="mt-5 space-y-3">
                  {purchases.map((purchase) => (
                    <li
                      key={purchase.id}
                      className="rounded-lg border border-white/[0.08] bg-[#0b0d11] p-5"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <p className="text-[9px] uppercase tracking-[0.16em] text-[#8a847c]">
                            {purchase.category}
                          </p>
                          <p className="mt-1 font-display text-[22px] tracking-[-0.03em] text-[#f6f1ea]">
                            {purchase.templateTitle}
                          </p>
                          <p className="mt-2 text-[11px] text-[#8a847c]">
                            Paid {formatPurchaseAmount(purchase.amount, purchase.currency)} ·{" "}
                            {new Date(purchase.createdAt).toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </p>
                        </div>
                        <span className="rounded-full border border-[#10b981]/30 bg-[#10b981]/10 px-3 py-1 text-[9px] uppercase tracking-[0.16em] text-[#7dd8b4]">
                          Paid
                        </span>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-4 border-t border-white/[0.06] pt-4 text-[10px] uppercase tracking-[0.15em]">
                        <Link
                          href={`/sites/${purchase.templateId}`}
                          className="text-[#d4af7a] hover:text-[#f0d9a8]"
                        >
                          Open website
                        </Link>
                        <Link
                          href={`/templates/${purchase.templateId}`}
                          className="text-[#8a847c] hover:text-[#f6f1ea]"
                        >
                          Template details
                        </Link>
                        <span className="ml-auto text-[#5f5b54]">
                          Ref {purchase.stripeSessionId.slice(-10)}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            <aside className="space-y-4">
              <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-5">
                <div className="flex items-center gap-2 text-[#f0d9a8]">
                  <ShieldCheck className="h-4 w-4" aria-hidden />
                  <p className="text-[10px] uppercase tracking-[0.16em]">Session</p>
                </div>
                <p className="mt-3 text-[12px] leading-6 text-[#a7a198]">
                  Signed in with a signed, HttpOnly cookie. Passwords are stored as
                  scrypt hashes, never in plain text.
                </p>
              </div>

              <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-5">
                <div className="flex items-center gap-2 text-[#f0d9a8]">
                  <CreditCard className="h-4 w-4" aria-hidden />
                  <p className="text-[10px] uppercase tracking-[0.16em]">Payments</p>
                </div>
                <p className="mt-3 text-[12px] leading-6 text-[#a7a198]">
                  {stripeConfigured()
                    ? "Stripe checkout is configured. Purchases are verified with Stripe before they appear here."
                    : "Payments are not configured on this deployment. Checkout is disabled and no payment can be taken."}
                </p>
              </div>

              <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-5">
                <p className="text-[10px] uppercase tracking-[0.16em] text-[#8a847c]">
                  Age confirmation
                </p>
                <p className="mt-3 text-[12px] leading-6 text-[#a7a198]">
                  Adult-only tobacco demonstrations require a separate 18+ confirmation.
                  Your confirmation lasts 30 days on this device.
                </p>
                <Link
                  href="/legal"
                  className="mt-3 inline-block text-[10px] uppercase tracking-[0.15em] text-[#d4af7a] hover:text-[#f0d9a8]"
                >
                  Read the policy
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
