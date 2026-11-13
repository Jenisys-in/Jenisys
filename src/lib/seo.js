export const SITE = "https://www.jenisys.in";

// Builds consistent page metadata with canonical URL and social cards.
export function pageMeta({ title, description, path, type = "website" }) {
  const url = `${SITE}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Jenisys",
      type,
      locale: "en_US",
      images: [{ url: `${SITE}/og-image.jpg`, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`${SITE}/og-image.jpg`] },
  };
}

export const serviceSeo = {
  "ai-automation": {
    title: "AI Automation Services for Small Businesses | Jenisys",
    description:
      "Fixed-price AI automation for accounting firms, agencies, clinics and service businesses: lead follow-up, document processing and AI assistants from $1,500.",
  },
  "mvp-development": {
    title: "MVP Development Company for Startups | Jenisys",
    description:
      "Launch your web or mobile MVP in weeks at a fixed price from $7,500. Next.js, React Native and Flutter, built by engineers who ship to production.",
  },
  "discovery-sprint": {
    title: "Discovery Sprint: Scope, Prototype and Fixed Quote | Jenisys",
    description:
      "In 5 working days get a scope document, a clickable prototype and a fixed quote for your app or automation. $499, credited in full when you build with us.",
  },
  support: {
    title: "Website and App Maintenance Plans | Jenisys",
    description:
      "Monthly maintenance for websites, apps and automations from $499 a month: security updates, monitoring, bug fixes and small changes.",
  },
};

// Trims text to a search-friendly length (~155 chars) at a word boundary.
export function clampDescription(text, max = 155) {
  const t = String(text || "").replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:\-–—]$/, "") + "…";
}
