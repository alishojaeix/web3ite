import type { Metadata } from "next";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { TemplateGrid } from "@/components/templates/TemplateGrid";
import { listTemplates } from "@/lib/templates";
import { getSessionUser } from "@/lib/server/auth";
import { listPurchasedTemplateIds } from "@/lib/server/purchases";
import { TEMPLATE_CATEGORIES, type TemplateCategory } from "@/types/template";
import { faNumber } from "@/lib/i18n/format";

// The catalog renders an ownership badge from the signed-in session cookie.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "کاتالوگ قالب‌ها",
  description:
    "هجده قالب وب‌سایت صنعت‌محور، هر کدام با هویت بصری، وب‌سایت زنده و صحنهٔ سه‌بعدی مستقل. کافه‌ها، رستوران‌ها، استودیوهای هوش مصنوعی، محصولات امنیتی، خودرو و نمایش‌های توتون مخصوص بزرگسالان.",
  alternates: { canonical: "/templates" },
  openGraph: {
    title: "کاتالوگ قالب‌های Web3ite",
    description:
      "هجده قالب وب‌سایت مستقل در شش صنعت. وب‌سایت زنده را باز کنید یا صحنهٔ سه‌بعدی استودیو را بررسی کنید.",
    url: "/templates",
    images: [{ url: "/api/og?site=noir-cafe", width: 1200, height: 630 }],
  },
};

type PageProps = {
  searchParams: { category?: string };
};

export default async function TemplatesPage({ searchParams }: PageProps) {
  const templates = await listTemplates();

  // Ownership is resolved server-side and only changes the card CTA from
  // "buy" to an informational state. It never grants access on its own.
  const user = await getSessionUser();
  const purchased = user
    ? await listPurchasedTemplateIds(user.id).catch(() => [] as string[])
    : [];
  const ownedIds = new Set(purchased);

  // Deep links from the industry rail and footer preselect a category.
  const requested = searchParams.category;
  const initialCategory: TemplateCategory | "all" =
    requested && (TEMPLATE_CATEGORIES as readonly string[]).includes(requested)
      ? (requested as TemplateCategory)
      : "all";

  return (
    <>
      <SiteHeader />
      <main className="px-6 pb-24 pt-32 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <h1 className="type-hero text-[#f6f1ea]">
            سالن نمایش
          </h1>
          <p className="type-lead mt-4 max-w-xl text-[#b8b3aa]">
            {faNumber(new Set(templates.map((template) => template.category)).size)}{" "}
            صنعت، {faNumber(templates.length)} اتاق. هر مدخل یک صحنهٔ واقعی WebGL
            با دوربین، نور و متریال خودش است — هر اتاق را باز کنید و در آن قدم
            بزنید.
          </p>
          <div className="mt-12">
            <TemplateGrid
              key={initialCategory}
              templates={templates}
              initialCategory={initialCategory}
              ownedIds={purchased}
            />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
