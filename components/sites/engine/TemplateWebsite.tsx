import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SitePoster } from "./SitePoster";
import { SiteNav } from "./SiteNav";
import { SiteContactForm } from "./SiteContactForm";
import { CATALOGUE_SITES, siteSkins } from "@/lib/sites/skins";
import type {
  CollectionItem,
  FeatureItem,
  MenuGroup,
  SiteConfig,
  SiteSectionKey,
  SpecRow,
  SpecStat,
  TimelineItem,
} from "@/lib/sites/types";
import type { Template } from "@/types/template";

const CATEGORY_TITLE: Record<Template["category"], string> = {
  cafe: "Café & coffee",
  restaurant: "Restaurant",
  ai: "AI & technology",
  security: "Security & onchain",
  automotive: "Automotive",
  tobacco: "Tobacco & cigars",
};

const CONTACT_TITLE: Record<Template["category"], string> = {
  cafe: "Visit the room.",
  restaurant: "Visit the table.",
  ai: "Start a conversation.",
  security: "Start a conversation.",
  automotive: "Plan a visit.",
  tobacco: "Notice & contact.",
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

function pricePrefix(layout: string) {
  if (layout === "maison") return "€";
  return "£";
}

function AnchorLink({
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

function SectionHead({
  label,
  title,
  intro,
  align = "start",
}: {
  label: string;
  title: string;
  intro?: string;
  align?: "start" | "center";
}) {
  return (
    <div className={`site-section-head site-section-head--${align}`}>
      <p className="site-eyebrow">{label}</p>
      <h2 className="site-h2">{title}</h2>
      {intro ? <p className="site-section-intro">{intro}</p> : null}
    </div>
  );
}

function MenuBlock({
  groups,
  layout,
}: {
  groups: MenuGroup[];
  layout: string;
}) {
  return (
    <div className="site-menu">
      {groups.map((group) => (
        <section key={group.title} className="site-menu-group">
          <div className="site-menu-group-head">
            <h3>{group.title}</h3>
            {group.note ? <span>{group.note}</span> : null}
          </div>
          <ul>
            {group.items.map((item) => (
              <li key={item.name} className="site-menu-item">
                <div>
                  <p className="site-menu-name">{item.name}</p>
                  <p className="site-menu-desc">{item.description}</p>
                </div>
                {item.price ? (
                  <span className="site-menu-price">
                    {pricePrefix(layout)}
                    {item.price}
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function FeaturesBlock({ items }: { items: FeatureItem[] }) {
  return (
    <div className="site-features">
      {items.map((item) => (
        <article key={item.index} className="site-feature">
          <span className="site-feature-index">{item.index}</span>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  );
}

function TimelineBlock({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="site-timeline">
      {items.map((item) => (
        <li key={item.step} className="site-timeline-item">
          <span className="site-timeline-step">{item.step}</span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function CollectionBlock({
  items,
  ageRestricted,
}: {
  items: CollectionItem[];
  ageRestricted?: boolean;
}) {
  return (
    <div className="site-collection">
      {items.map((item) => (
        <article key={item.index} className="site-collection-item">
          <div className="site-collection-top">
            <span className="site-collection-index">{item.index}</span>
            {ageRestricted ? <span className="site-age-chip">18+</span> : null}
          </div>
          <h3>{item.name}</h3>
          <p className="site-collection-note">{item.note}</p>
          <ul className="site-tags">
            {item.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

function StatGrid({ stats }: { stats: SpecStat[] }) {
  return (
    <div className="site-stats">
      {stats.map((stat) => (
        <div key={stat.label} className="site-stat">
          <p className="site-stat-label">{stat.label}</p>
          <p className="site-stat-value">{stat.value}</p>
          {stat.note ? <p className="site-stat-note">{stat.note}</p> : null}
        </div>
      ))}
    </div>
  );
}

function RowList({ rows }: { rows: SpecRow[] }) {
  return (
    <dl className="site-rows">
      {rows.map((row) => (
        <div key={row.label} className="site-row">
          <dt>{row.label}</dt>
          <dd>{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function SpecsBlock({
  stats,
  rows,
  extraRows,
  title,
}: {
  stats: SpecStat[];
  rows: SpecRow[];
  extraRows: SpecRow[];
  title: string;
}) {
  return (
    <div className="site-specs">
      <StatGrid stats={stats} />
      <div className="site-specs-table">
        <p className="site-specs-caption">{title}</p>
        <RowList rows={[...rows, ...extraRows]} />
      </div>
    </div>
  );
}

function Showcase({
  config,
  template,
}: {
  config: SiteConfig;
  template: Template;
}) {
  const { showcase } = config;

  return (
    <>
      <SectionHead
        label={config.labels.showcase}
        title={config.showcaseTitle}
        intro={config.showcaseIntro}
        align={showcase.kind === "collection" ? "center" : "start"}
      />

      {showcase.kind === "menu" ? (
        <MenuBlock groups={showcase.groups} layout={config.layout} />
      ) : null}

      {showcase.kind === "features" ? <FeaturesBlock items={showcase.items} /> : null}

      {showcase.kind === "timeline" ? <TimelineBlock items={showcase.items} /> : null}

      {showcase.kind === "collection" ? (
        <CollectionBlock
          items={showcase.items}
          ageRestricted={template.ageRestricted}
        />
      ) : null}

      {showcase.kind === "specs" ? (
        <div id="specs">
          <SpecsBlock
            stats={showcase.stats}
            rows={showcase.rows}
            extraRows={config.specsExtra}
            title={config.specsTitle}
          />
        </div>
      ) : null}
    </>
  );
}

function StorySection({
  config,
  template,
}: {
  config: SiteConfig;
  template: Template;
}) {
  return (
    <div className="site-story">
      <SectionHead label={config.labels.story} title={config.storyTitle} />
      <div className="site-chapters">
        {template.content.chapters.map((chapter, index) => (
          <article key={chapter.title} className="site-chapter">
            <p className="site-chapter-label">
              {chapter.label || `${String(index + 1).padStart(2, "0")} / Chapter`}
            </p>
            <h3>{chapter.title}</h3>
            <p>{chapter.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function MaterialsSection({ config }: { config: SiteConfig }) {
  return (
    <div className="site-materials-wrap">
      <SectionHead label={config.labels.materials} title="Materials & atmosphere." />
      <ul className="site-materials">
        {config.materials.map((material, index) => (
          <li key={material.label}>
            <span className="site-material-index">{String(index + 1).padStart(2, "0")}</span>
            <span className="site-material-label">{material.label}</span>
            <span className="site-material-note">{material.note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SpecsSection({ config }: { config: SiteConfig }) {
  return (
    <div className="site-specs-simple">
      <SectionHead label={config.labels.specs} title={config.specsTitle} />
      <RowList rows={config.specsExtra} />
    </div>
  );
}

function ContactSection({
  config,
  template,
  catalogueHref,
}: {
  config: SiteConfig;
  template: Template;
  catalogueHref?: string;
}) {
  return (
    <div className="site-contact">
      <div className="site-contact-copy">
        <p className="site-eyebrow">{config.labels.contact}</p>
        <h2 className="site-h2">{CONTACT_TITLE[template.category]}</h2>
        <p className="site-section-intro">{config.contact.note}</p>

        <dl className="site-contact-details">
          <div>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${config.contact.email}`}>{config.contact.email}</a>
            </dd>
          </div>
          <div>
            <dt>Phone</dt>
            <dd>{config.contact.phone}</dd>
          </div>
          <div>
            <dt>Address</dt>
            <dd>{config.contact.address}</dd>
          </div>
          <div>
            <dt>Hours</dt>
            <dd>{config.contact.hours}</dd>
          </div>
        </dl>

        {catalogueHref ? (
          <AnchorLink href={catalogueHref} className="site-btn site-btn--primary site-catalogue-link">
            Open the standalone catalogue
            <ArrowUpRight aria-hidden />
          </AnchorLink>
        ) : null}
      </div>

      <div className="site-contact-panel">
        <p className="site-contact-panel-title">{config.contact.ctaLabel}</p>
        <SiteContactForm
          siteId={template.id}
          ctaLabel={config.contact.ctaLabel}
          ageRestricted={template.ageRestricted}
        />
      </div>
    </div>
  );
}

function CtaBand({
  config,
  template,
}: {
  config: SiteConfig;
  template: Template;
}) {
  return (
    <section className="site-cta-band" aria-labelledby="site-cta-title">
      <p className="site-eyebrow">{template.content.eyebrow}</p>
      <h2 id="site-cta-title" className="site-h2">
        {config.cta.title}
      </h2>
      <p className="site-section-intro">{config.cta.body}</p>
      <a href="#contact" className="site-btn site-btn--primary">
        {config.contact.ctaLabel}
        <ArrowRight aria-hidden />
      </a>
    </section>
  );
}

function Hero({
  config,
  template,
  siteId,
  accent,
  skin,
  catalogueHref,
}: {
  config: SiteConfig;
  template: Template;
  siteId: string;
  accent: string;
  skin: (typeof siteSkins)[keyof typeof siteSkins];
  catalogueHref?: string;
}) {
  const poster = (
    <div className="site-poster-frame">
      <SitePoster
        motif={config.motif}
        accent={accent}
        accentSoft={template.theme.accentSoft}
        background={skin.background}
        ink={skin.ink}
        surface={skin.surface}
        label={template.title}
        detailed
        className="site-poster"
      />
      <div className="site-poster-caption">
        <span>{template.title}</span>
        <span>{CATEGORY_TITLE[template.category]}</span>
      </div>
    </div>
  );

  const copy = (
    <div className="site-hero-copy">
      <p className="site-kicker">{template.content.eyebrow}</p>
      <h1 className="site-h1">
        <span>{template.content.headline}</span>{" "}
        <em>{template.content.headlineAccent}</em>
      </h1>
      <p className="site-lede">{template.content.intro}</p>

      <div className="site-actions">
        <AnchorLink href={config.heroCta.primary} className="site-btn site-btn--primary">
          {template.content.primaryCta}
          <ArrowRight aria-hidden />
        </AnchorLink>
        <AnchorLink href={config.heroCta.secondary} className="site-btn site-btn--ghost">
          {template.content.secondaryCta}
        </AnchorLink>
        {catalogueHref ? (
          <AnchorLink href={catalogueHref} className="site-btn site-btn--ghost">
            Open catalogue
            <ArrowUpRight aria-hidden />
          </AnchorLink>
        ) : null}
      </div>

      <ul className="site-hero-meta">
        {config.heroMeta.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <section
      id="top"
      className={`site-hero site-hero--${config.hero}`}
      data-side={config.heroSide}
    >
      {config.hero === "full" ? (
        <div className="site-hero-backdrop" aria-hidden>
          <SitePoster
            motif={config.motif}
            accent={accent}
            accentSoft={template.theme.accentSoft}
            background={skin.background}
            ink={skin.ink}
            surface={skin.surface}
            label={template.title}
            detailed
            className="site-poster"
          />
        </div>
      ) : null}

      {config.hero === "split" ? (
        <>
          {copy}
          <div className="site-hero-visual">{poster}</div>
        </>
      ) : (
        <>
          {copy}
          {config.hero === "center" ? <div className="site-hero-band">{poster}</div> : null}
        </>
      )}

      <p className="site-hero-note">
        Demonstration website · fictional {CATEGORY_TITLE[template.category].toLowerCase()}{" "}
        business · <Link href={`/checkout/${siteId}`}>buy this template</Link>
      </p>
    </section>
  );
}

export function TemplateWebsite({
  template,
  config,
  catalogueHref,
}: {
  template: Template;
  config: SiteConfig;
  catalogueHref?: string;
}) {
  const skin = siteSkins[config.layout];
  const accent = template.theme.accent;
  const style = {
    "--site-bg": skin.background,
    "--site-surface": skin.surface,
    "--site-elevated": skin.elevated,
    "--site-ink": skin.ink,
    "--site-muted": skin.muted,
    "--site-line": skin.line,
    "--site-accent": accent,
    "--site-accent-strong": skin.accentStrong,
    "--site-radius": skin.radius,
  } as React.CSSProperties;

  const sections = config.order.filter((key) => key !== "contact");
  const isCatalogue = CATALOGUE_SITES.has(template.id);

  return (
    <div
      className="site-shell"
      style={style}
      data-layout={config.layout}
      data-category={template.category}
      data-tone={skin.tone}
      data-heading={skin.heading}
      data-nav={skin.nav}
    >
      <div className="site-demo-bar">
        <p>
          <span className="site-demo-dot" aria-hidden />
          Web3ite demo · fictional {CATEGORY_TITLE[template.category].toLowerCase()} website
        </p>
        <div className="site-demo-links">
          <Link href={`/templates/${template.id}`}>Template details</Link>
          <Link href={`/checkout/${template.id}`} className="site-demo-buy">
            Get this template · {formatPrice(template.price)}
          </Link>
        </div>
      </div>

      <SiteNav
        template={template}
        config={config}
        catalogueHref={catalogueHref}
      />

      <main>
        <Hero
          config={config}
          template={template}
          siteId={template.id}
          accent={accent}
          skin={skin}
          catalogueHref={catalogueHref}
        />

        {template.ageRestricted ? (
          <aside className="site-age-notice" aria-label="Age restriction notice">
            <div>
              <p className="site-age-notice-title">Adults 18+ only</p>
              <p>{template.healthWarning}</p>
            </div>
            <span className="site-age-badge">18+</span>
          </aside>
        ) : null}

        {sections.map((key: SiteSectionKey) => {
          if (key === "story") {
            return (
              <section key={key} id="story" className="site-section">
                <StorySection config={config} template={template} />
              </section>
            );
          }
          if (key === "showcase") {
            return (
              <section key={key} id="showcase" className="site-section site-section--showcase">
                <Showcase config={config} template={template} />
              </section>
            );
          }
          if (key === "materials") {
            return (
              <section key={key} id="materials" className="site-section site-section--materials">
                <MaterialsSection config={config} />
              </section>
            );
          }
          if (key === "specs") {
            if (config.showcase.kind === "specs") return null;
            return (
              <section key={key} id="specs" className="site-section site-section--specs">
                <SpecsSection config={config} />
              </section>
            );
          }
          return null;
        })}

        <CtaBand config={config} template={template} />

        <section id="contact" className="site-section site-section--contact">
          <ContactSection
            config={config}
            template={template}
            catalogueHref={catalogueHref}
          />
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer-top">
          <div>
            <Link href={`/sites/${template.id}`} className="site-footer-brand">
              {template.title}
            </Link>
            <p>{template.description}</p>
            <p className="site-footer-category">{CATEGORY_TITLE[template.category]}</p>
          </div>

          <div>
            <p className="site-footer-label">Sections</p>
            <ul>
              {config.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="site-footer-label">Platform</p>
            <ul>
              <li>
                <Link href={`/templates/${template.id}`}>Template details</Link>
              </li>
              <li>
                <Link href={`/checkout/${template.id}`}>Buy this template</Link>
              </li>
              <li>
                <Link href="/templates">All templates</Link>
              </li>
              <li>
                <Link href="/legal">Demo & age policy</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="site-footer-label">Contact</p>
            <ul>
              <li>
                <a href={`mailto:${config.contact.email}`}>{config.contact.email}</a>
              </li>
              <li>{config.contact.address}</li>
              <li>{config.contact.hours}</li>
            </ul>
          </div>
        </div>

        {template.ageRestricted ? (
          <p className="site-footer-warning">{template.healthWarning}</p>
        ) : null}

        <div className="site-footer-bottom">
          <p>{config.footerNote}</p>
          <p>
            A Web3ite demonstration · not a real business.{" "}
            <a href="#top">Back to top</a>
          </p>
        </div>
      </footer>

      {isCatalogue ? (
        <div className="site-float-buy">
          <Link href={`/checkout/${template.id}`}>
            Buy this template
            <ArrowUpRight aria-hidden />
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export { AnchorLink };
