import Link from "next/link";

// Hero for inner pages: Night ground, no grid, one idea. Breadcrumb is optional.
export default function PageHero({ eyebrow = "", title, lead = "", crumbs = null, children = null, size = "h1", titleId = "page-title" }) {
  return (
    <header className="j-night relative border-b border-line">
      <div className="j-wrap pt-14 pb-14 md:pt-20 md:pb-20">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-8 font-mono text-[13px] text-ink-muted">
            {crumbs.map((c, i) => (
              <span key={c.label}>
                {i > 0 && <span className="mx-2" aria-hidden="true">/</span>}
                {c.href ? <Link href={c.href} className="hover:text-ink">{c.label}</Link> : <span className="text-ink">{c.label}</span>}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <p className="j-eyebrow mb-5">{eyebrow}</p>}
        <h1 id={titleId} className={`${size === "display" ? "j-display" : "j-h1"} max-w-4xl text-ink`}>{title}</h1>
        {lead && <p className="j-lead mt-6">{lead}</p>}
        {children}
      </div>
    </header>
  );
}
