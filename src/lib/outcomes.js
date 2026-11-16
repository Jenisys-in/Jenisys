// Figures from the published case studies and the owner's Upwork portfolio write-ups (brand system §7).
// `featured` ones appear on the home page; all appear on their case study.
export const outcomes = [
  { slug: "nsw-sopa-adjudication-platform", eyebrow: "NSW · Government / Construction", what: "Claims processing time", before: "18 days", after: 6, unit: " days", gain: "Two-thirds faster", featured: true },
  { slug: "us-saas-subscription-billing-platform", eyebrow: "US · SaaS billing", what: "Monthly close", before: "2 days", after: 4, unit: " hrs", gain: "Close in an afternoon", featured: true },
  { slug: "us-saas-subscription-billing-platform", eyebrow: "US · SaaS billing", what: "Billing support tickets", before: null, after: 80, prefix: "−", unit: "%", gain: "Measured after launch", featured: true },
  // From the owner's Upwork portfolio (project write-ups).
  { slug: "enterprise-document-ai-rag-pipeline", eyebrow: "Document AI · Search", what: "Internal document search time", before: null, after: 80, prefix: "−", unit: "%", gain: "Less time searching" },
  { slug: "enterprise-document-ai-rag-pipeline", eyebrow: "Document AI · Search", what: "API token spend", before: null, after: 35, prefix: "−", unit: "%", gain: "Lower token spend" },
  { slug: "nodejs-middleware-api-integration-bridge", eyebrow: "Integrations · Node.js", what: "Data synchronisation reliability", before: null, after: 100, unit: "%", gain: "No lost payloads" },
  { slug: "nodejs-middleware-api-integration-bridge", eyebrow: "Integrations · Node.js", what: "End-to-end request latency", before: null, after: 150, prefix: "<", unit: " ms", gain: "Under 150 ms" },
];
