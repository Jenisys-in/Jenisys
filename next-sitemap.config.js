/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.jenisys.in",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  autoLastmod: true,
  exclude: ["/private/*", "/api/*"],
  transform: async (config, path) => {
    // Custom priority for specific pages
    const priorities = {
      "/": 1.0,
      "/services": 0.9,
      "/about": 0.8,
      "/blog": 0.8,
      "/contact": 0.7,
    };
    // Custom change frequencies
    const changefreqs = {
      "/blog": "daily",
      "/": "weekly",
      "/about": "monthly",
    };

    return {
      loc: path,
      changefreq: changefreqs[path] || config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/*", "/private/*"],
      },
    ],
    additionalSitemaps: [
      "https://www.jenisys.in/sitemap.xml",
      "https://www.jenisys.in/sitemap-0.xml",
    ],
  },
};
