const { blogs } = require("./src/lib/blogData");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.jenisys.in",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  transform: async (config, path) => {
    const blogPostRegex = /^\/blog\/(.+)$/;
    const servicePageRegex = /^\/services\/(.+)$/;
    const blogMatch = path.match(blogPostRegex);
    const serviceMatch = path.match(servicePageRegex);

    if (blogMatch) {
      const slug = blogMatch[1];
      const blog = blogs.find((b) => b.slug === slug);
      if (blog) {
        return {
          loc: path,
          changefreq: "weekly",
          priority: 0.8,
          lastmod: blog.dateModified || new Date().toISOString(),
        };
      }
    }

    if (serviceMatch) {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.9,
        lastmod: new Date().toISOString(),
      };
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
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
