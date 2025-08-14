/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.jenisys.in",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [
      "https://www.jenisys.in/sitemap.xml",
      "https://www.jenisys.in/sitemap-0.xml",
    ],
  },
};
