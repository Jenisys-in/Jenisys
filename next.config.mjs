/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: ".next",
  transpilePackages: ["swiper", "dom7"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  env: {
    GOOGLE_CREDENTIALS: process.env.GOOGLE_CREDENTIALS,
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
  },
  async redirects() {
    const to = (source, destination) => ({ source, destination, permanent: true });
    return [
      to("/services/ai-ml", "/services/ai-automation"),
      to("/services/web-development", "/services/mvp-development"),
      to("/services/mobile-development", "/services/mvp-development"),
      to("/services/cloud-solutions", "/services/mvp-development"),
      to("/services/Custom-Software-Development", "/services/mvp-development"),
      to("/services/custom-software-development", "/services/mvp-development"),
      to("/services/IT-consulting", "/services/discovery-sprint"),
      to("/services/it-consulting", "/services/discovery-sprint"),
      to("/services/Maintenance", "/services/support"),
      to("/services/maintenance", "/services/support"),
      to("/industries", "/services"),
      to("/startup-partnership", "/services/mvp-development"),
      to("/quote", "/contact"),
      to("/privacy-policy", "/Privacy-Policy"),
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "DENY", // Prevents clickjacking
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff", // Prevents MIME type sniffing
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://embed.tawk.to https://cdn.jsdelivr.net https://assets.apollo.io https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: https://www.jenisys.in https://*.tawk.to https://*.google-analytics.com https://images.unsplash.com https://www.googletagmanager.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.apollo.io https://vitals.vercel-insights.com https://*.tawk.to wss://*.tawk.to https://api.hubspot.com; frame-src 'self' https://calendly.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
