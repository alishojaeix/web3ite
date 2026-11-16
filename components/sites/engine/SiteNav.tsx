import Link from "next/link";
import { Menu } from "lucide-react";
import type { SiteConfig } from "@/lib/sites/types";
import type { Template } from "@/types/template";

function SiteLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export function SiteNav({
  template,
  config,
  catalogueHref,
}: {
  template: Template;
  config: SiteConfig;
  catalogueHref?: string;
}) {
  const ctaHref = catalogueHref ?? config.navCta.href;
  const ctaLabel = catalogueHref ? "Open catalogue" : config.navCta.label;

  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <Link href={`/sites/${template.id}`} className="site-brand" aria-label={`${template.title} home`}>
          <span className="site-brand-mark" aria-hidden>
            {template.title.slice(0, 1)}
          </span>
          <span className="site-brand-name">{template.title}</span>
        </Link>

        <nav className="site-nav-links" aria-label="Sections">
          {config.nav.map((item) => (
            <SiteLink key={item.href} href={item.href} className="site-nav-link">
              {item.label}
            </SiteLink>
          ))}
          <Link href="/templates" className="site-nav-platform">
            All templates
          </Link>
        </nav>

        <SiteLink href={ctaHref} className="site-nav-cta">
          {ctaLabel}
        </SiteLink>

        <details className="site-nav-mobile">
          <summary aria-label="Open navigation">
            <Menu aria-hidden />
            <span>Menu</span>
          </summary>
          <div className="site-nav-mobile-panel">
            {config.nav.map((item) => (
              <SiteLink key={item.href} href={item.href} className="site-nav-mobile-link">
                {item.label}
              </SiteLink>
            ))}
            <Link href="/templates" className="site-nav-mobile-link">
              All templates
            </Link>
            <Link href="/legal" className="site-nav-mobile-link">
              Demo & age policy
            </Link>
            <SiteLink href={ctaHref} className="site-btn site-btn--primary site-nav-mobile-cta">
              {ctaLabel}
            </SiteLink>
          </div>
        </details>
      </div>
    </header>
  );
}
