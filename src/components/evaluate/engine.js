// ─── Technical Fit Evaluation Engine ──────────────────────────────────────────
// Cross-referencing scoring, free-text parsing, and dynamic report generation.

// ─── Constants ───────────────────────────────────────────────────────────────

export const MATURITY_QUESTIONS = [
  { key: "automatedWorkflows", label: "Do you have automated workflows?" },
  { key: "conversionMetrics", label: "Do you track conversion metrics?" },
  { key: "structuredDatabases", label: "Do you use structured databases?" },
  { key: "internalTools", label: "Do you have internal tools?" },
  { key: "apis", label: "Do you use APIs?" },
  { key: "aiTools", label: "Do you use AI tools?" },
  { key: "loggingMonitoring", label: "Do you have logging/monitoring?" },
  { key: "systemDocumentation", label: "Do you have system documentation?" },
];

export const DIMENSIONS = [
  { key: "automationReadiness", label: "Automation Readiness" },
  { key: "engineeringMaturity", label: "Engineering Maturity" },
  { key: "scalingRisk", label: "Scaling Risk" },
  { key: "lostRevenueRisk", label: "Lost Revenue Risk" },
  { key: "optimizationOpportunity", label: "Optimization Opportunity" },
];

export const REVENUE_RANGES = [
  "Pre-revenue",
  "$1K – $10K/mo",
  "$10K – $50K/mo",
  "$50K – $200K/mo",
  "$200K+/mo",
];

// ─── Free Text Parser ────────────────────────────────────────────────────────
// Detects keywords/patterns in free text to infer tech maturity signals.

const HIGH_MATURITY_SYSTEMS = [
  "terraform", "kubernetes", "k8s", "docker", "aws", "gcp", "azure",
  "ci/cd", "jenkins", "github actions", "circleci", "datadog", "grafana",
  "sentry", "newrelic", "postgresql", "postgres", "redis", "elasticsearch",
  "kafka", "rabbitmq", "mongodb atlas", "supabase", "prisma", "graphql",
  "nextjs", "next.js", "typescript", "react", "vue", "angular",
  "node.js", "nodejs", "python", "django", "fastapi", "golang",
  "microservices", "api gateway", "load balancer", "cdn",
];

const LOW_MATURITY_SYSTEMS = [
  "google sheets", "spreadsheet", "excel", "manual", "email",
  "whatsapp", "pen and paper", "word doc", "notepad", "sticky notes",
  "no system", "nothing", "none", "n/a", "na",
];

const MID_MATURITY_SYSTEMS = [
  "hubspot", "salesforce", "zoho", "pipedrive", "mailchimp",
  "stripe", "quickbooks", "xero", "shopify", "wordpress",
  "wix", "squarespace", "airtable", "notion", "monday",
  "asana", "trello", "jira", "slack", "teams", "zapier",
  "make", "n8n", "clickup",
];

const INEFFICIENCY_SIGNALS = {
  manual: { keywords: ["manual", "by hand", "copy paste", "copy-paste", "re-enter", "retype", "manually"], signal: "manual_processes" },
  data: { keywords: ["data entry", "data migration", "transfer data", "move data", "sync", "syncing", "duplicate data", "data silos"], signal: "data_fragmentation" },
  communication: { keywords: ["miscommunication", "lost in email", "no visibility", "don't know", "unclear", "confusion", "no tracking"], signal: "communication_gaps" },
  scaling: { keywords: ["can't scale", "breaking", "slow", "bottleneck", "overloaded", "too many", "growing pains", "can't keep up"], signal: "scaling_pressure" },
  quality: { keywords: ["errors", "bugs", "mistakes", "wrong", "incorrect", "inconsistent", "unreliable"], signal: "quality_issues" },
  time: { keywords: ["takes too long", "wasting time", "hours", "repetitive", "tedious", "boring tasks"], signal: "time_waste" },
};

export function parseSystemsText(text) {
  if (!text) return { highCount: 0, midCount: 0, lowCount: 0, detected: [], maturitySignal: 0 };
  const lower = text.toLowerCase();
  const high = HIGH_MATURITY_SYSTEMS.filter((s) => lower.includes(s));
  const mid = MID_MATURITY_SYSTEMS.filter((s) => lower.includes(s));
  const low = LOW_MATURITY_SYSTEMS.filter((s) => lower.includes(s));
  // -1 to +1 scale
  const maturitySignal = Math.max(-1, Math.min(1,
    (high.length * 0.3 + mid.length * 0.05 - low.length * 0.4)
  ));
  return { highCount: high.length, midCount: mid.length, lowCount: low.length, detected: [...high, ...mid, ...low], maturitySignal };
}

export function parseInefficiencyText(text) {
  if (!text) return { signals: [], severity: 0 };
  const lower = text.toLowerCase();
  const found = [];
  for (const [, config] of Object.entries(INEFFICIENCY_SIGNALS)) {
    if (config.keywords.some((kw) => lower.includes(kw))) {
      found.push(config.signal);
    }
  }
  return { signals: found, severity: Math.min(1, found.length * 0.25) };
}

// ─── Cross-Reference Matrix ─────────────────────────────────────────────────
// Detects specific high-signal combinations that indicate strong/weak fit.

function getCrossReferenceFlags(data) {
  const m = data.maturity || {};
  const flags = [];

  // Critical mismatches
  if (data.companyType === "SaaS" && !m.apis)
    flags.push({ type: "critical", msg: "SaaS company without API infrastructure", dimension: "engineeringMaturity", boost: 15 });
  if (data.companyType === "SaaS" && !m.conversionMetrics)
    flags.push({ type: "critical", msg: "SaaS company not tracking conversion metrics", dimension: "lostRevenueRisk", boost: 18 });
  if (data.companyType === "Compliance / Regulated" && !m.systemDocumentation)
    flags.push({ type: "critical", msg: "Regulated industry without system documentation", dimension: "scalingRisk", boost: 20 });
  if (data.companyType === "Compliance / Regulated" && !m.loggingMonitoring)
    flags.push({ type: "critical", msg: "Regulated industry without logging/monitoring", dimension: "scalingRisk", boost: 15 });
  if (data.companyType === "Marketplace" && !m.automatedWorkflows)
    flags.push({ type: "critical", msg: "Marketplace without automated workflows", dimension: "automationReadiness", boost: 15 });

  // Size mismatches
  if ((data.companySize === "21–50" || data.companySize === "51+") && !m.internalTools)
    flags.push({ type: "warning", msg: "Growing team without internal tools", dimension: "optimizationOpportunity", boost: 12 });
  if ((data.companySize === "21–50" || data.companySize === "51+") && !m.systemDocumentation)
    flags.push({ type: "warning", msg: "Scaling team without documentation", dimension: "scalingRisk", boost: 12 });
  if (data.companySize === "51+" && !m.loggingMonitoring)
    flags.push({ type: "critical", msg: "Large team without observability", dimension: "engineeringMaturity", boost: 14 });

  // Revenue mismatches
  const revIdx = REVENUE_RANGES.indexOf(data.revenue);
  if (revIdx >= 3 && !m.automatedWorkflows)
    flags.push({ type: "warning", msg: "High revenue without workflow automation", dimension: "automationReadiness", boost: 12 });
  if (revIdx >= 3 && !m.structuredDatabases)
    flags.push({ type: "critical", msg: "High revenue without structured data layer", dimension: "engineeringMaturity", boost: 14 });
  if (revIdx <= 1 && data.companySize === "51+")
    flags.push({ type: "warning", msg: "Large headcount with low revenue — efficiency concerns", dimension: "optimizationOpportunity", boost: 10 });

  // Bottleneck-specific
  if (data.bottleneck === "Leads" && !m.conversionMetrics)
    flags.push({ type: "warning", msg: "Lead bottleneck without conversion tracking", dimension: "lostRevenueRisk", boost: 12 });
  if (data.bottleneck === "Scaling" && !m.apis)
    flags.push({ type: "critical", msg: "Scaling bottleneck without API architecture", dimension: "scalingRisk", boost: 15 });
  if (data.bottleneck === "Automation" && !m.automatedWorkflows && !m.apis)
    flags.push({ type: "critical", msg: "Automation bottleneck with no automation or API layer", dimension: "automationReadiness", boost: 18 });
  if (data.bottleneck === "Compliance" && !m.loggingMonitoring && !m.systemDocumentation)
    flags.push({ type: "critical", msg: "Compliance bottleneck without audit trail capabilities", dimension: "scalingRisk", boost: 16 });
  if (data.bottleneck === "Infrastructure" && !m.loggingMonitoring)
    flags.push({ type: "critical", msg: "Infrastructure bottleneck without monitoring", dimension: "engineeringMaturity", boost: 14 });

  return flags;
}

// ─── Revenue Efficiency ──────────────────────────────────────────────────────

function getRevenueEfficiency(data) {
  const revMap = { "Pre-revenue": 0, "$1K – $10K/mo": 5000, "$10K – $50K/mo": 30000, "$50K – $200K/mo": 125000, "$200K+/mo": 300000 };
  const sizeMap = { "1–5": 3, "6–20": 13, "21–50": 35, "51+": 75 };
  const rev = revMap[data.revenue] || 0;
  const size = sizeMap[data.companySize] || 10;
  const perEmployee = rev / size;
  // Efficiency rating: <1000 = low, 1000-5000 = moderate, >5000 = good
  if (perEmployee < 1000) return { rating: "low", perEmployee, label: "below-average revenue per employee" };
  if (perEmployee < 5000) return { rating: "moderate", perEmployee, label: "moderate revenue per employee" };
  return { rating: "good", perEmployee, label: "healthy revenue per employee" };
}

// ─── Scoring Engine ──────────────────────────────────────────────────────────

function clamp(v) { return Math.max(0, Math.min(100, Math.round(v))); }

export function calculateScores(data) {
  const m = data.maturity || {};
  const yesCount = Object.values(m).filter(Boolean).length;
  const total = MATURITY_QUESTIONS.length;
  const revIdx = REVENUE_RANGES.indexOf(data.revenue);
  const revFactor = revIdx >= 0 ? (revIdx + 1) / REVENUE_RANGES.length : 0.5;
  const systems = parseSystemsText(data.currentSystems);
  const inefficiency = parseInefficiencyText(data.inefficiency);
  const crossFlags = getCrossReferenceFlags(data);
  const efficiency = getRevenueEfficiency(data);

  // ── Automation Readiness (independent formula) ──
  let autoScore = 0;
  autoScore += m.automatedWorkflows ? 0 : 28;
  autoScore += m.apis ? 0 : 15;
  autoScore += m.aiTools ? 0 : 8;
  autoScore += (data.bottleneck === "Automation") ? 18 : (data.bottleneck === "Scaling") ? 8 : 3;
  autoScore += inefficiency.signals.includes("manual_processes") ? 12 : 0;
  autoScore += inefficiency.signals.includes("time_waste") ? 8 : 0;
  autoScore += systems.maturitySignal < 0 ? 10 : systems.maturitySignal > 0.5 ? -5 : 0;
  autoScore += revFactor * 10;

  // ── Engineering Maturity (independent formula) ──
  let engScore = 0;
  engScore += m.structuredDatabases ? 0 : 20;
  engScore += m.apis ? 0 : 18;
  engScore += m.loggingMonitoring ? 0 : 16;
  engScore += m.systemDocumentation ? 0 : 12;
  engScore += m.internalTools ? 0 : 8;
  engScore += (data.companyType === "SaaS" || data.companyType === "Marketplace") ? 8 : 3;
  engScore += systems.highCount > 2 ? -10 : systems.lowCount > 1 ? 12 : 0;
  engScore += efficiency.rating === "low" ? 5 : 0;

  // ── Scaling Risk (independent formula) ──
  let scaleScore = 0;
  scaleScore += m.loggingMonitoring ? 0 : 18;
  scaleScore += m.systemDocumentation ? 0 : 14;
  scaleScore += m.structuredDatabases ? 0 : 12;
  scaleScore += (data.companySize === "51+") ? 16 : (data.companySize === "21–50") ? 12 : (data.companySize === "6–20") ? 6 : 2;
  scaleScore += (data.bottleneck === "Scaling" || data.bottleneck === "Infrastructure") ? 14 : 3;
  scaleScore += inefficiency.signals.includes("scaling_pressure") ? 10 : 0;
  scaleScore += (data.region === "Australia" && data.companyType === "Compliance / Regulated") ? 8 : 0;
  scaleScore += revFactor * 8;

  // ── Lost Revenue Risk (independent formula) ──
  let revRiskScore = 0;
  revRiskScore += m.conversionMetrics ? 0 : 22;
  revRiskScore += m.automatedWorkflows ? 0 : 12;
  revRiskScore += (data.bottleneck === "Conversions") ? 20 : (data.bottleneck === "Leads") ? 16 : 4;
  revRiskScore += inefficiency.signals.includes("data_fragmentation") ? 10 : 0;
  revRiskScore += inefficiency.signals.includes("quality_issues") ? 8 : 0;
  revRiskScore += revFactor * 14;
  revRiskScore += efficiency.rating === "low" ? 8 : 0;
  revRiskScore += (data.companyType === "SaaS" && !m.conversionMetrics) ? 6 : 0;

  // ── Optimization Opportunity (independent formula) ──
  let optScore = 0;
  optScore += m.automatedWorkflows ? 0 : 16;
  optScore += m.internalTools ? 0 : 14;
  optScore += m.aiTools ? 0 : 12;
  optScore += m.apis ? 0 : 10;
  optScore += inefficiency.severity * 20;
  optScore += systems.maturitySignal < -0.2 ? 12 : systems.maturitySignal > 0.5 ? -8 : 4;
  optScore += (yesCount <= 2) ? 12 : (yesCount <= 4) ? 6 : 0;
  optScore += efficiency.rating === "low" ? 6 : 0;

  const raw = {
    automationReadiness: clamp(autoScore),
    engineeringMaturity: clamp(engScore),
    scalingRisk: clamp(scaleScore),
    lostRevenueRisk: clamp(revRiskScore),
    optimizationOpportunity: clamp(optScore),
  };

  // Apply cross-reference boosts
  for (const flag of crossFlags) {
    if (raw[flag.dimension] !== undefined) {
      raw[flag.dimension] = clamp(raw[flag.dimension] + flag.boost);
    }
  }

  const composite = clamp(
    raw.automationReadiness * 0.25 +
    raw.engineeringMaturity * 0.25 +
    raw.scalingRisk * 0.2 +
    raw.lostRevenueRisk * 0.15 +
    raw.optimizationOpportunity * 0.15
  );

  return { dimensions: raw, composite, crossFlags, systems, inefficiency, efficiency };
}

export function getVerdict(score) {
  if (score <= 30) return "not-fit";
  if (score <= 60) return "possible";
  return "strong";
}

// ─── Dynamic Report Generator ────────────────────────────────────────────────

export function generateReport(data, scores, classification) {
  const tech = classification === "technical";
  const nonTech = classification === "non-technical";
  const verdict = getVerdict(scores.composite);
  const d = scores.dimensions;
  const m = data.maturity || {};
  const eff = scores.efficiency;
  const crossFlags = scores.crossFlags || [];
  const criticalFlags = crossFlags.filter((f) => f.type === "critical");
  const sysInfo = scores.systems || {};
  const ineffSignals = scores.inefficiency?.signals || [];

  // ── Dynamic Verdict ──
  let verdictTitle, verdictDesc;
  if (verdict === "not-fit") {
    verdictTitle = "Not a fit right now";
    const topDim = Object.entries(d).sort((a, b) => a[1] - b[1])[0];
    verdictDesc = nonTech
      ? `Based on your profile as a ${data.companyType || "company"} with ${data.companySize || "a small"} team, your current operational maturity is sufficient for your stage. Your strongest area is ${dimLabel(topDim[0]).toLowerCase()} — focus on maintaining that while gradually addressing the minor gaps identified below.`
      : tech
      ? `System state for a ${data.companySize || ""}-person ${data.companyType || "org"} does not warrant external engineering intervention. Lowest-scoring vector: ${dimLabel(topDim[0]).toLowerCase()} at ${topDim[1]}/100, but within acceptable range for current scale. Internal iteration is the correct approach.`
      : `Your ${data.companyType || "company"} is at a stage where the technology gaps we identified are normal and manageable internally. You don't need external engineering services yet — the recommendations below will help you build a stronger foundation.`;
  } else if (verdict === "possible") {
    const gaps = Object.entries(d).filter(([, v]) => v > 50).map(([k]) => dimLabel(k).toLowerCase());
    verdictDesc = nonTech
      ? `Your ${data.companyType || "company"} in ${data.region || "your region"} shows specific gaps in ${gaps.slice(0, 2).join(" and ") || "key areas"} that are starting to affect ${data.bottleneck ? data.bottleneck.toLowerCase() : "operations"}. These aren't emergencies, but left unaddressed for another 6–12 months, they'll become significantly more expensive to fix.`
      : tech
      ? `Partial system gaps detected: ${gaps.join(", ") || "multiple vectors"}. For a ${data.companySize || ""}-person ${data.companyType || "org"} at ${data.revenue || "current revenue"}, selective intervention on the highest-scoring dimensions would reduce compounding technical debt. Not a full rebuild — targeted sprints.`
      : `Your ${data.companyType || "company"} has measurable gaps in ${gaps.slice(0, 2).join(" and ") || "several areas"}. They're not critical yet, but they're the kind of issues that get more expensive over time, especially with your primary bottleneck being ${(data.bottleneck || "operations").toLowerCase()}.`;
    verdictTitle = "Possible fit — targeted gaps identified";
  } else {
    const topGaps = Object.entries(d).sort((a, b) => b[1] - a[1]).slice(0, 2).map(([k]) => dimLabel(k).toLowerCase());
    verdictDesc = nonTech
      ? `Your ${data.companyType || "company"} with ${data.companySize || ""} employees at ${data.revenue || "your revenue level"} has clear operational gaps — especially in ${topGaps.join(" and ")}. ${criticalFlags.length > 0 ? `We identified ${criticalFlags.length} critical mismatch${criticalFlags.length > 1 ? "es" : ""} between your company profile and current systems.` : ""} These are directly impacting your ${(data.bottleneck || "operations").toLowerCase()} and will compound as you grow.`
      : tech
      ? `Strong qualification. ${data.companyType || "Org"} (${data.companySize || "N/A"} headcount, ${data.revenue || "undisclosed"}) — systemic deficiencies across ${topGaps.join(" and ")}. ${criticalFlags.length} critical cross-reference flag${criticalFlags.length !== 1 ? "s" : ""} detected. ${eff.rating === "low" ? "Revenue efficiency is below benchmark — engineering intervention has high ROI." : "Revenue tier justifies engineering investment."}`
      : `Your company clearly qualifies. The gaps in ${topGaps.join(" and ")} are significant for a ${data.companyType || "company"} at your stage. ${criticalFlags.length > 0 ? `${criticalFlags.length} critical issue${criticalFlags.length > 1 ? "s" : ""} found in your current setup.` : ""} Without addressing these, your ${(data.bottleneck || "primary bottleneck").toLowerCase()} will get worse.`;
    verdictTitle = "Strong fit — clear qualification";
  }

  // ── Dynamic Summary ──
  const matYes = Object.entries(m).filter(([, v]) => v).map(([k]) => k);
  const matNo = Object.entries(m).filter(([, v]) => !v).map(([k]) => k);
  let summary;
  if (nonTech) {
    summary = `Your ${data.companyType || "company"} based in ${data.region === "US" ? "the United States" : data.region === "Australia" ? "Australia" : "your region"}, with a team of ${data.companySize || "—"} and monthly revenue of ${data.revenue || "undisclosed"}, scored ${scores.composite}/100 on our technical fit assessment. You answered "yes" to ${matYes.length} of 8 technology maturity questions. Your primary bottleneck — ${(data.bottleneck || "general operations").toLowerCase()} — ${d.automationReadiness > 50 || d.lostRevenueRisk > 50 ? "directly correlates with the gaps we identified" : "is partially reflected in the scoring"}.${data.inefficiency ? ` You described your biggest inefficiency as: "${truncate(data.inefficiency, 80)}" — this was factored into the assessment.` : ""}`;
  } else if (tech) {
    summary = `${data.companyType || "Org"} / ${data.region || "—"} / ${data.companySize || "—"} headcount / ${data.revenue || "—"}. Composite: ${scores.composite}/100. Maturity: ${matYes.length}/${MATURITY_QUESTIONS.length} (${matYes.length > 0 ? matYes.map(humanKey).join(", ") : "none"}). Missing: ${matNo.length > 0 ? matNo.map(humanKey).join(", ") : "none"}. Primary constraint: ${(data.bottleneck || "unspecified").toLowerCase()}. Rev efficiency: ${eff.label} ($${Math.round(eff.perEmployee).toLocaleString()}/person).${sysInfo.detected?.length > 0 ? ` Detected stack: ${sysInfo.detected.join(", ")}.` : ""}`;
  } else {
    summary = `Your ${data.companyType || "company"} (${data.companySize || "—"} employees, ${data.region || "—"}) scored ${scores.composite}/100. You have ${matYes.length} of 8 maturity indicators in place. Revenue efficiency is ${eff.label}. Main bottleneck: ${(data.bottleneck || "general").toLowerCase()}.${data.inefficiency ? ` Stated inefficiency: "${truncate(data.inefficiency, 60)}".` : ""}`;
  }

  // ── Dynamic Assessment ──
  let assessment;
  const highDims = Object.entries(d).filter(([, v]) => v > 60).map(([k]) => dimLabel(k).toLowerCase());
  const lowDims = Object.entries(d).filter(([, v]) => v <= 30).map(([k]) => dimLabel(k).toLowerCase());
  if (nonTech) {
    assessment = `${highDims.length > 0 ? `Your weakest areas are ${highDims.join(" and ")} — these are where outside help would have the most impact.` : "No single area stands out as critically weak."} ${lowDims.length > 0 ? `Your strengths include ${lowDims.join(" and ")} — these are working well enough for now.` : ""} ${eff.rating === "low" ? "Your revenue relative to team size suggests there's significant room to improve operational efficiency." : eff.rating === "good" ? "Your revenue efficiency is healthy, which means improvements would amplify an already-working business model." : "Your revenue efficiency is moderate — efficiency gains would have a meaningful impact."} ${sysInfo.lowCount > 0 ? "Some of your current tools are not designed for scale — this will become a limitation." : sysInfo.highCount > 2 ? "Your tech stack includes mature tooling, which is a strong foundation." : ""}`;
  } else if (tech) {
    assessment = `Dimension analysis: ${DIMENSIONS.map((dim) => `${dim.label}: ${d[dim.key]}/100`).join(" | ")}. ${highDims.length > 0 ? `Critical vectors: ${highDims.join(", ")}.` : "No critical vectors."} ${lowDims.length > 0 ? `Within tolerance: ${lowDims.join(", ")}.` : ""} ${criticalFlags.length > 0 ? `Cross-reference analysis flagged ${criticalFlags.length} critical mismatches: ${criticalFlags.map((f) => f.msg).join("; ")}.` : "No critical cross-reference flags."} ${sysInfo.highCount > 0 ? `Stack analysis: ${sysInfo.highCount} enterprise-grade tools detected.` : ""} ${sysInfo.lowCount > 0 ? `Warning: ${sysInfo.lowCount} low-maturity tool${sysInfo.lowCount > 1 ? "s" : ""} in use.` : ""}`;
  } else {
    assessment = `${highDims.length > 0 ? `The biggest gaps are in ${highDims.join(" and ")}.` : "No critical gaps identified."} ${lowDims.length > 0 ? `${lowDims.join(" and ")} ${lowDims.length > 1 ? "are" : "is"} in good shape.` : ""} ${criticalFlags.length > 0 ? `We found ${criticalFlags.length} significant mismatch${criticalFlags.length > 1 ? "es" : ""} between your company type and current capabilities.` : ""} Revenue efficiency: ${eff.label}.`;
  }

  // ── Dynamic Growth Blockers (specific to inputs) ──
  const blockers = [];
  if (d.automationReadiness > 50) {
    if (data.bottleneck === "Automation" || ineffSignals.includes("manual_processes")) {
      blockers.push(nonTech
        ? `Your team is spending time on tasks that should be automated — you specifically mentioned ${data.bottleneck === "Automation" ? "automation as your bottleneck" : "manual processes as an inefficiency"}, and the data confirms this is a real issue`
        : tech
        ? `Automation deficit confirmed by both self-reported bottleneck (${data.bottleneck?.toLowerCase()}) and maturity gaps (${!m.automatedWorkflows ? "no workflow automation" : ""}${!m.apis ? ", no API layer" : ""}). Direct operational friction`
        : `Manual processes are creating real bottlenecks — this aligns with what you told us about your operations`);
    } else {
      blockers.push(nonTech
        ? "Many of your processes could be automated, which would free up your team to focus on higher-value work"
        : tech
        ? `Automation readiness at ${d.automationReadiness}/100 — untapped automation vectors present even though this wasn't flagged as primary bottleneck`
        : "Automation opportunities exist that could significantly reduce manual work");
    }
  }
  if (d.engineeringMaturity > 50) {
    const missing = [];
    if (!m.structuredDatabases) missing.push(nonTech ? "organized data storage" : "structured databases");
    if (!m.apis) missing.push(nonTech ? "connected systems" : "API layer");
    if (!m.loggingMonitoring) missing.push(nonTech ? "system monitoring" : "observability");
    if (!m.systemDocumentation) missing.push("documentation");
    blockers.push(nonTech
      ? `Your technology setup is missing ${missing.join(", ")} — for a ${data.companyType || "company"} at ${data.revenue || "your revenue"}, this creates risk`
      : tech
      ? `Engineering maturity at ${d.engineeringMaturity}/100. Missing: ${missing.join(", ")}. For ${data.companyType || "this org type"} at ${data.companySize || "this"} headcount, this is below expected baseline`
      : `Key infrastructure gaps: ${missing.join(", ")}. These are important for a ${data.companyType || "company"} your size`);
  }
  if (d.lostRevenueRisk > 40) {
    blockers.push(nonTech
      ? `${!m.conversionMetrics ? "You're not tracking how leads become customers, which means you can't identify where you're losing revenue." : ""} ${data.bottleneck === "Leads" || data.bottleneck === "Conversions" ? `This is especially concerning since ${data.bottleneck.toLowerCase()} is your stated bottleneck.` : ""} ${eff.rating === "low" ? "Combined with below-average revenue efficiency, this points to significant revenue leakage." : ""}`
      : tech
      ? `Revenue risk at ${d.lostRevenueRisk}/100. ${!m.conversionMetrics ? "No funnel instrumentation." : ""} ${data.bottleneck === "Leads" || data.bottleneck === "Conversions" ? `Bottleneck (${data.bottleneck.toLowerCase()}) directly maps to this vector.` : ""} ${eff.rating === "low" ? `Rev/employee ($${Math.round(eff.perEmployee)}) below benchmark.` : ""}`
      : `${!m.conversionMetrics ? "Without conversion tracking, you're likely losing revenue without knowing where. " : ""}${data.bottleneck === "Leads" || data.bottleneck === "Conversions" ? `This connects directly to your ${data.bottleneck.toLowerCase()} bottleneck.` : ""}`);
  }
  if (d.scalingRisk > 50 && (data.companySize === "21–50" || data.companySize === "51+")) {
    blockers.push(nonTech
      ? `As a ${data.companySize}-person team${data.region === "Australia" && data.companyType === "Compliance / Regulated" ? " in a regulated Australian industry" : ""}, your current setup has scaling limitations that will become critical as you grow`
      : tech
      ? `Scaling risk at ${d.scalingRisk}/100 for ${data.companySize} headcount. ${!m.loggingMonitoring ? "No observability — blind to degradation." : ""} ${!m.systemDocumentation ? "No docs — bus factor risk." : ""} ${data.region === "Australia" ? "AU data residency adds infrastructure complexity." : ""}`
      : `Your ${data.companySize}-person team is reaching a size where infrastructure gaps become costly`);
  }
  if (blockers.length === 0) {
    blockers.push(nonTech ? "No critical growth blockers identified at this time" : "No blocking vectors identified at current scale");
  }

  // ── Dynamic Risk Flags (cross-reference driven) ──
  const risks = [];
  for (const flag of criticalFlags.slice(0, 4)) {
    risks.push(nonTech
      ? crossFlagToPlain(flag.msg)
      : tech
      ? `[CRITICAL] ${flag.msg} — ${flag.dimension}: +${flag.boost} impact`
      : flag.msg);
  }
  if (!m.loggingMonitoring && !risks.some((r) => r.includes("monitoring") || r.includes("observability") || r.includes("logging"))) {
    risks.push(nonTech
      ? "Without monitoring, problems can go unnoticed until they affect your customers or revenue"
      : tech
      ? "No observability layer — incident detection is reactive, not proactive"
      : "Missing monitoring means issues may go undetected until they cause damage");
  }
  if (!m.systemDocumentation && !risks.some((r) => r.includes("documentation"))) {
    risks.push(nonTech
      ? `Without documentation, your company knowledge depends on specific people — this is risky for a ${data.companySize || "growing"} team`
      : tech
      ? `No documentation — knowledge is siloed, bus factor elevated for ${data.companySize || ""} headcount`
      : "No system documentation — critical knowledge lives only in people's heads");
  }
  if (ineffSignals.includes("quality_issues")) {
    risks.push(nonTech
      ? "You mentioned errors and quality issues — this usually indicates missing validation or testing layers"
      : tech
      ? "Quality issues reported — likely missing integration tests, input validation, or data integrity checks"
      : "The quality issues you mentioned point to gaps in testing or validation");
  }
  if (risks.length === 0) risks.push("No significant risk flags detected");

  // ── Dynamic Architecture Recs (tailored to profile) ──
  const archRecs = [];
  if (d.automationReadiness > 40) {
    if (data.companyType === "SaaS") {
      archRecs.push(nonTech
        ? "Connect your tools (billing, CRM, support) so data flows automatically instead of being entered manually"
        : tech
        ? "Implement event-driven integration layer (webhooks + message queue) between billing, CRM, and product systems"
        : "Automate data flow between your core SaaS systems — billing, CRM, and support");
    } else if (data.companyType === "Agency") {
      archRecs.push(nonTech
        ? "Automate your most repetitive client-facing processes — project setup, reporting, invoicing"
        : tech
        ? "Deploy orchestration for client lifecycle automation — intake forms → project scaffolding → reporting pipeline"
        : "Automate recurring agency workflows — client onboarding, project setup, and reporting");
    } else {
      archRecs.push(nonTech
        ? "Identify the 3 most time-consuming repetitive tasks and automate them"
        : tech
        ? "Deploy workflow orchestration (n8n/Temporal) for top-3 manual processes"
        : "Automate your most repetitive workflows to free up team capacity");
    }
  }
  if (d.engineeringMaturity > 40) {
    archRecs.push(nonTech
      ? "Set up proper development processes — version control, testing, and automated deployment — to reduce errors and speed up changes"
      : tech
      ? `Establish CI/CD pipeline${!m.structuredDatabases ? ", migrate to structured data layer (PostgreSQL/MongoDB)" : ""}${!m.apis ? ", build REST/GraphQL API layer" : ""}. Priority: ${data.companyType === "SaaS" ? "API-first architecture" : data.companyType === "Compliance / Regulated" ? "audit trail and compliance tooling" : "testing and deployment"}`
      : `Introduce structured development workflows${!m.structuredDatabases ? ", proper database architecture" : ""}${!m.apis ? ", API infrastructure" : ""}`);
  }
  if (!m.loggingMonitoring) {
    archRecs.push(nonTech
      ? `Add monitoring to catch problems before ${data.companyType === "SaaS" ? "your users" : "your team or clients"} notice them`
      : tech
      ? `Implement observability: structured logging → APM (Datadog/Grafana) → alerting. ${data.companyType === "Compliance / Regulated" ? "Include audit log compliance." : ""}`
      : "Set up monitoring and alerting for your key systems");
  }
  if (data.region === "Australia" && (data.companyType === "Compliance / Regulated" || data.companyType === "SaaS")) {
    archRecs.push(nonTech
      ? "Ensure your data hosting meets Australian data residency requirements — this is especially important for regulated industries"
      : tech
      ? "Evaluate AU data residency posture — ensure hosting, backups, and CDN comply with AU privacy regulations (APPs/CDR if applicable)"
      : "Review data hosting to ensure compliance with Australian data residency requirements");
  }
  if (sysInfo.lowCount > 0 && d.optimizationOpportunity > 40) {
    archRecs.push(nonTech
      ? "Replace spreadsheet-based or manual tools with purpose-built software to reduce errors and save time"
      : tech
      ? `Migrate from low-maturity tooling (${sysInfo.detected?.filter((t) => LOW_MATURITY_SYSTEMS.includes(t)).join(", ") || "spreadsheets/manual"}) to structured SaaS or custom internal tools`
      : "Upgrade from spreadsheets and manual tools to proper software systems");
  }
  if (archRecs.length === 0) archRecs.push("No critical architecture changes recommended at this time");

  // ── Dynamic Next Steps ──
  let nextSteps;
  if (verdict === "not-fit") {
    if (nonTech) {
      nextSteps = [
        `Document your current ${data.bottleneck ? data.bottleneck.toLowerCase() + "-related" : ""} processes — this alone will reveal improvement opportunities`,
        `Try a simple automation tool like Zapier or Make for your most repetitive ${data.companyType === "Agency" ? "client" : "operational"} task`,
        "Re-evaluate in 3–6 months as your team or revenue grows — the picture may change",
      ];
    } else if (tech) {
      nextSteps = [
        `Invest in ${!m.systemDocumentation ? "system documentation and runbooks" : "process documentation"} — current scale doesn't justify external eng but internal clarity has high ROI`,
        `Automate one high-frequency manual process${data.currentSystems ? ` using your existing stack (${truncate(data.currentSystems, 40)})` : ""} as a proof of concept`,
        `Re-assess when headcount exceeds current tier or revenue moves to next bracket`,
      ];
    } else {
      nextSteps = [
        `Document your current ${data.bottleneck ? data.bottleneck.toLowerCase() : "operational"} processes`,
        "Pick one repetitive task and automate it with an off-the-shelf tool",
        "Revisit this assessment in 3–6 months",
      ];
    }
  } else if (verdict === "possible") {
    const topGap = Object.entries(d).sort((a, b) => b[1] - a[1])[0];
    if (nonTech) {
      nextSteps = [
        `Focus on ${dimLabel(topGap[0]).toLowerCase()} first — it's your biggest gap at ${topGap[1]}/100 and connects to your ${(data.bottleneck || "primary").toLowerCase()} bottleneck`,
        `A scoped engagement targeting ${dimLabel(topGap[0]).toLowerCase()} would show measurable results without a large commitment`,
        "Use the outcomes from that to decide if broader work is needed",
      ];
    } else if (tech) {
      nextSteps = [
        `Prioritize ${dimLabel(topGap[0]).toLowerCase()} (${topGap[1]}/100) — highest ROI vector. Scope a 2–4 week sprint`,
        `Establish before/after metrics${!m.conversionMetrics ? " (start with basic instrumentation)" : ""} to quantify intervention impact`,
        `If initial sprint shows >15% improvement in target metric, expand to secondary vector (${dimLabel(Object.entries(d).sort((a, b) => b[1] - a[1])[1]?.[0] || "").toLowerCase()})`,
      ];
    } else {
      nextSteps = [
        `Address ${dimLabel(topGap[0]).toLowerCase()} first — it's the biggest opportunity`,
        "Consider a focused engagement to tackle that specific area",
        "Measure results before deciding on additional work",
      ];
    }
  } else {
    if (nonTech) {
      nextSteps = [
        "Schedule a diagnostic call to review these findings and discuss what the first engagement would look like",
        `We would start with your ${(data.bottleneck || "primary").toLowerCase()} bottleneck and the ${criticalFlags.length > 0 ? criticalFlags.length + " critical gaps" : "gaps"} identified here`,
        "First engagements typically deliver measurable improvement within 4–6 weeks",
      ];
    } else if (tech) {
      nextSteps = [
        `Book a technical diagnostic — we'll map your architecture, validate these scores, and identify the fastest ROI path for a ${data.companyType || ""} at your scale`,
        `Expect a scoped proposal addressing: ${criticalFlags.slice(0, 3).map((f) => f.msg.toLowerCase()).join("; ") || "top 3 system deficiencies"}`,
        `Typical first sprint: 2–4 weeks targeting ${dimLabel(Object.entries(d).sort((a, b) => b[1] - a[1])[0]?.[0] || "automationReadiness").toLowerCase()}`,
      ];
    } else {
      nextSteps = [
        "Schedule a diagnostic call to discuss these results in detail",
        `We'd start by addressing ${criticalFlags.length > 0 ? "the " + criticalFlags.length + " critical issues found" : "the top gaps"} in your current setup`,
        "Typical first engagement shows measurable results within 4–6 weeks",
      ];
    }
  }

  return { verdictTitle, verdictDesc, summary, assessment, blockers, risks, archRecs, nextSteps };
}

// ─── Report Text Builder ─────────────────────────────────────────────────────

export function buildReportText(data, scores, report) {
  const dim = scores.dimensions;
  return [
    "═══════════════════════════════════════════",
    "    TECHNICAL FIT EVALUATION — JENISYS",
    "═══════════════════════════════════════════",
    "",
    `Date: ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`,
    "",
    `VERDICT: ${report.verdictTitle.toUpperCase()}`,
    `Score: ${scores.composite}/100`,
    "", report.verdictDesc, "",
    "───────────────────────────────────────────",
    "COMPANY PROFILE",
    "───────────────────────────────────────────",
    `Role: ${data.role || "—"}`,
    `Company Type: ${data.companyType || "—"}`,
    `Region: ${data.region || "—"}`,
    `Size: ${data.companySize || "—"}`,
    `Revenue: ${data.revenue || "—"}`,
    `Primary Bottleneck: ${data.bottleneck || "—"}`,
    `Current Systems: ${data.currentSystems || "—"}`,
    `Biggest Inefficiency: ${data.inefficiency || "—"}`,
    "",
    "───────────────────────────────────────────",
    "DIMENSION SCORES",
    "───────────────────────────────────────────",
    ...DIMENSIONS.map((d) => `${d.label}: ${dim[d.key]}/100`),
    ...(scores.crossFlags?.length > 0 ? [
      "",
      "CROSS-REFERENCE FLAGS",
      ...scores.crossFlags.map((f) => `[${f.type.toUpperCase()}] ${f.msg}`),
    ] : []),
    "",
    "───────────────────────────────────────────",
    "SUMMARY",
    "───────────────────────────────────────────",
    report.summary, "",
    "───────────────────────────────────────────",
    "TECHNICAL ASSESSMENT",
    "───────────────────────────────────────────",
    report.assessment, "",
    "───────────────────────────────────────────",
    "GROWTH BLOCKERS",
    "───────────────────────────────────────────",
    ...report.blockers.map((b) => `• ${b}`), "",
    "───────────────────────────────────────────",
    "RISK FLAGS",
    "───────────────────────────────────────────",
    ...report.risks.map((r) => `• ${r}`), "",
    "───────────────────────────────────────────",
    "ARCHITECTURE RECOMMENDATIONS",
    "───────────────────────────────────────────",
    ...report.archRecs.map((a) => `• ${a}`), "",
    "───────────────────────────────────────────",
    "NEXT STEPS",
    "───────────────────────────────────────────",
    ...report.nextSteps.map((n, i) => `${i + 1}. ${n}`), "",
    "═══════════════════════════════════════════",
    "Generated by jenisys.in/evaluate",
    "Data was not stored. This report was generated client-side.",
    "═══════════════════════════════════════════",
  ].join("\n");
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function dimLabel(key) {
  const map = {
    automationReadiness: "Automation Readiness",
    engineeringMaturity: "Engineering Maturity",
    scalingRisk: "Scaling Risk",
    lostRevenueRisk: "Lost Revenue Risk",
    optimizationOpportunity: "Optimization Opportunity",
  };
  return map[key] || key;
}

function humanKey(key) {
  const map = {
    automatedWorkflows: "workflows",
    conversionMetrics: "metrics",
    structuredDatabases: "databases",
    internalTools: "internal tools",
    apis: "APIs",
    aiTools: "AI",
    loggingMonitoring: "monitoring",
    systemDocumentation: "docs",
  };
  return map[key] || key;
}

function truncate(str, max) {
  if (!str) return "";
  return str.length > max ? str.slice(0, max).trim() + "…" : str;
}

function crossFlagToPlain(msg) {
  const map = {
    "SaaS company without API infrastructure": "Your SaaS product doesn't have proper API connections — this limits integration and growth",
    "SaaS company not tracking conversion metrics": "As a SaaS company, not tracking conversions means you're flying blind on revenue",
    "Regulated industry without system documentation": "In a regulated industry, missing documentation creates compliance risk",
    "Regulated industry without logging/monitoring": "Regulated industries need audit trails — your monitoring gaps create compliance exposure",
    "Marketplace without automated workflows": "Marketplaces depend on automation — manual processes won't scale with transaction volume",
    "Growing team without internal tools": "Your growing team doesn't have internal tools — this creates inefficiency as you add people",
    "Scaling team without documentation": "As your team grows, missing documentation makes onboarding slower and knowledge fragile",
    "Large team without observability": "A team your size needs monitoring — without it, problems go unnoticed",
    "High revenue without workflow automation": "At your revenue level, manual workflows are costing you real money",
    "High revenue without structured data layer": "Your revenue justifies proper data infrastructure — spreadsheets won't cut it",
    "Large headcount with low revenue — efficiency concerns": "Your team size relative to revenue suggests operations could be significantly more efficient",
    "Lead bottleneck without conversion tracking": "You identified leads as your bottleneck but you're not tracking conversions — you need data before solutions",
    "Scaling bottleneck without API architecture": "You need to scale but don't have API infrastructure — this is a fundamental blocker",
    "Automation bottleneck with no automation or API layer": "You identified automation as your bottleneck and have neither automation nor API tools — this is a clear gap",
    "Compliance bottleneck without audit trail capabilities": "Compliance is your bottleneck but you lack logging and documentation — these are immediate needs",
    "Infrastructure bottleneck without monitoring": "You flagged infrastructure as a bottleneck but don't have monitoring to diagnose issues",
  };
  return map[msg] || msg;
}

// ─── Industry Benchmarks ─────────────────────────────────────────────────────
// Average scores for company type + size combos. Based on typical maturity patterns.

const BENCHMARKS = {
  "SaaS|1–5": { automationReadiness: 55, engineeringMaturity: 50, scalingRisk: 35, lostRevenueRisk: 45, optimizationOpportunity: 60 },
  "SaaS|6–20": { automationReadiness: 42, engineeringMaturity: 40, scalingRisk: 42, lostRevenueRisk: 38, optimizationOpportunity: 48 },
  "SaaS|21–50": { automationReadiness: 35, engineeringMaturity: 32, scalingRisk: 38, lostRevenueRisk: 30, optimizationOpportunity: 38 },
  "SaaS|51+": { automationReadiness: 28, engineeringMaturity: 25, scalingRisk: 32, lostRevenueRisk: 22, optimizationOpportunity: 30 },
  "Agency|1–5": { automationReadiness: 60, engineeringMaturity: 58, scalingRisk: 30, lostRevenueRisk: 50, optimizationOpportunity: 65 },
  "Agency|6–20": { automationReadiness: 48, engineeringMaturity: 45, scalingRisk: 38, lostRevenueRisk: 42, optimizationOpportunity: 52 },
  "Agency|21–50": { automationReadiness: 38, engineeringMaturity: 36, scalingRisk: 40, lostRevenueRisk: 35, optimizationOpportunity: 42 },
  "Agency|51+": { automationReadiness: 30, engineeringMaturity: 28, scalingRisk: 35, lostRevenueRisk: 28, optimizationOpportunity: 35 },
  "Compliance / Regulated|1–5": { automationReadiness: 50, engineeringMaturity: 45, scalingRisk: 40, lostRevenueRisk: 35, optimizationOpportunity: 50 },
  "Compliance / Regulated|6–20": { automationReadiness: 40, engineeringMaturity: 38, scalingRisk: 42, lostRevenueRisk: 30, optimizationOpportunity: 42 },
  "Compliance / Regulated|21–50": { automationReadiness: 32, engineeringMaturity: 30, scalingRisk: 38, lostRevenueRisk: 25, optimizationOpportunity: 35 },
  "Compliance / Regulated|51+": { automationReadiness: 25, engineeringMaturity: 22, scalingRisk: 30, lostRevenueRisk: 20, optimizationOpportunity: 28 },
  "Marketplace|1–5": { automationReadiness: 52, engineeringMaturity: 48, scalingRisk: 38, lostRevenueRisk: 48, optimizationOpportunity: 58 },
  "Marketplace|6–20": { automationReadiness: 42, engineeringMaturity: 38, scalingRisk: 42, lostRevenueRisk: 40, optimizationOpportunity: 48 },
  "Marketplace|21–50": { automationReadiness: 34, engineeringMaturity: 30, scalingRisk: 38, lostRevenueRisk: 32, optimizationOpportunity: 40 },
  "Marketplace|51+": { automationReadiness: 26, engineeringMaturity: 22, scalingRisk: 32, lostRevenueRisk: 24, optimizationOpportunity: 32 },
};

const DEFAULT_BENCH = { automationReadiness: 45, engineeringMaturity: 42, scalingRisk: 38, lostRevenueRisk: 38, optimizationOpportunity: 48 };

export function getBenchmarks(data) {
  const key = `${data.companyType}|${data.companySize}`;
  const bench = BENCHMARKS[key] || DEFAULT_BENCH;
  const d = {}; // diff from benchmark
  for (const dim of DIMENSIONS) {
    d[dim.key] = { benchmark: bench[dim.key], label: dim.label };
  }
  return { benchmarks: bench, labels: d };
}

export function generateBenchmarkInsights(scores, data, classification) {
  const tech = classification === "technical";
  const nonTech = classification === "non-technical";
  const key = `${data.companyType}|${data.companySize}`;
  const bench = BENCHMARKS[key] || DEFAULT_BENCH;
  const d = scores.dimensions;
  const insights = [];

  for (const dim of DIMENSIONS) {
    const score = d[dim.key];
    const avg = bench[dim.key];
    const diff = score - avg;
    if (diff > 15) {
      insights.push(nonTech
        ? `Your ${dim.label.toLowerCase()} score (${score}) is significantly higher than the average ${data.companyType || "company"} with ${data.companySize || ""} employees (avg: ${avg}). This is a clear area for improvement.`
        : tech
        ? `${dim.label}: ${score}/100 — ${diff}pts above peer benchmark (${avg}) for ${data.companyType || "org"}/${data.companySize || ""}. Outlier vector.`
        : `Your ${dim.label.toLowerCase()} (${score}) is well above the average for similar companies (${avg}). This gap needs attention.`);
    } else if (diff > 5) {
      insights.push(nonTech
        ? `Your ${dim.label.toLowerCase()} (${score}) is above average for a ${data.companyType || "company"} your size (avg: ${avg}).`
        : tech
        ? `${dim.label}: ${score}/100 — +${diff} vs peer avg (${avg}). Above baseline.`
        : `${dim.label.toLowerCase()} (${score}) is slightly above average for your peer group (${avg}).`);
    } else if (diff < -10) {
      insights.push(nonTech
        ? `Your ${dim.label.toLowerCase()} (${score}) is better than most companies like yours (avg: ${avg}) — this is a strength.`
        : tech
        ? `${dim.label}: ${score}/100 — ${Math.abs(diff)}pts below peer avg (${avg}). Favorable position.`
        : `${dim.label.toLowerCase()} (${score}) is better than average (${avg}) — a relative strength.`);
    }
  }
  return insights;
}

// ─── ROI Estimation ──────────────────────────────────────────────────────────

const HOURLY_COST_MAP = { "1–5": 45, "6–20": 55, "21–50": 60, "51+": 65 };
const REV_MID = { "Pre-revenue": 0, "$1K – $10K/mo": 5500, "$10K – $50K/mo": 30000, "$50K – $200K/mo": 125000, "$200K+/mo": 350000 };

export function estimateROI(data, scores) {
  const d = scores.dimensions;
  const hourlyCost = HOURLY_COST_MAP[data.companySize] || 55;
  const monthlyRev = REV_MID[data.revenue] || 30000;
  const sizeMap = { "1–5": 3, "6–20": 13, "21–50": 35, "51+": 75 };
  const headcount = sizeMap[data.companySize] || 13;
  const items = [];

  // Automation savings
  if (d.automationReadiness > 40) {
    const weeklyHrsSaved = Math.round(2 + (d.automationReadiness / 100) * headcount * 0.6);
    const monthlySavings = Math.round(weeklyHrsSaved * 4.3 * hourlyCost);
    items.push({
      area: "Workflow Automation",
      metric: `~${weeklyHrsSaved} hrs/week recovered`,
      value: monthlySavings,
      label: `$${monthlySavings.toLocaleString()}/mo in team capacity`,
      priority: d.automationReadiness > 60 ? "high" : "medium",
    });
  }

  // Revenue recovery
  if (d.lostRevenueRisk > 35 && monthlyRev > 0) {
    const recoveryPct = Math.min(18, Math.round(3 + (d.lostRevenueRisk / 100) * 15));
    const recoveryAmt = Math.round(monthlyRev * (recoveryPct / 100));
    items.push({
      area: "Revenue Recovery",
      metric: `${recoveryPct}% potential recovery`,
      value: recoveryAmt,
      label: `$${recoveryAmt.toLocaleString()}/mo estimated recoverable revenue`,
      priority: d.lostRevenueRisk > 60 ? "high" : "medium",
    });
  }

  // Infrastructure efficiency
  if (d.engineeringMaturity > 40) {
    const deployTimeSaved = Math.round(4 + (d.engineeringMaturity / 100) * 12);
    const incidentReduction = Math.round(20 + (d.engineeringMaturity / 100) * 40);
    items.push({
      area: "Engineering Efficiency",
      metric: `${deployTimeSaved} hrs/mo deployment + ${incidentReduction}% fewer incidents`,
      value: Math.round(deployTimeSaved * hourlyCost + (monthlyRev * 0.005 * incidentReduction / 100)),
      label: `$${Math.round(deployTimeSaved * hourlyCost).toLocaleString()}/mo in engineering time`,
      priority: d.engineeringMaturity > 60 ? "high" : "medium",
    });
  }

  // Scaling cost avoidance
  if (d.scalingRisk > 50 && monthlyRev > 10000) {
    const avoidancePct = Math.min(12, Math.round(3 + (d.scalingRisk / 100) * 9));
    const avoidanceAmt = Math.round(monthlyRev * (avoidancePct / 100));
    items.push({
      area: "Scaling Cost Avoidance",
      metric: `Prevents ${avoidancePct}% growth-related revenue loss`,
      value: avoidanceAmt,
      label: `$${avoidanceAmt.toLocaleString()}/mo protected revenue`,
      priority: d.scalingRisk > 70 ? "high" : "medium",
    });
  }

  const totalMonthly = items.reduce((sum, i) => sum + i.value, 0);
  const totalAnnual = totalMonthly * 12;

  return { items, totalMonthly, totalAnnual };
}

// ─── Competitive Risk Framing ────────────────────────────────────────────────

const ADOPTION_RATES = {
  automatedWorkflows: { SaaS: 78, Agency: 62, "Compliance / Regulated": 71, Marketplace: 82, Other: 55 },
  conversionMetrics: { SaaS: 84, Agency: 58, "Compliance / Regulated": 52, Marketplace: 76, Other: 45 },
  structuredDatabases: { SaaS: 88, Agency: 55, "Compliance / Regulated": 75, Marketplace: 80, Other: 50 },
  internalTools: { SaaS: 72, Agency: 48, "Compliance / Regulated": 65, Marketplace: 70, Other: 40 },
  apis: { SaaS: 92, Agency: 52, "Compliance / Regulated": 68, Marketplace: 88, Other: 42 },
  aiTools: { SaaS: 45, Agency: 38, "Compliance / Regulated": 28, Marketplace: 40, Other: 22 },
  loggingMonitoring: { SaaS: 82, Agency: 45, "Compliance / Regulated": 78, Marketplace: 75, Other: 35 },
  systemDocumentation: { SaaS: 65, Agency: 42, "Compliance / Regulated": 80, Marketplace: 58, Other: 38 },
};

export function generateCompetitiveInsights(data, classification) {
  const tech = classification === "technical";
  const nonTech = classification === "non-technical";
  const m = data.maturity || {};
  const type = data.companyType || "Other";
  const insights = [];

  for (const q of MATURITY_QUESTIONS) {
    if (!m[q.key]) {
      const rate = ADOPTION_RATES[q.key]?.[type] || ADOPTION_RATES[q.key]?.Other || 50;
      if (rate >= 65) {
        const label = q.label.replace("Do you have ", "").replace("Do you use ", "").replace("Do you track ", "").replace("?", "");
        insights.push(nonTech
          ? `${rate}% of ${type} companies your size already have ${label.toLowerCase()} — you're in the ${100 - rate}% without it`
          : tech
          ? `${label}: ${rate}% adoption among ${type} peers. Gap puts you in ${100 - rate}th pctile`
          : `${rate}% of similar ${type} companies use ${label.toLowerCase()} — you're currently behind on this`);
      }
    }
  }

  return insights.slice(0, 4); // cap for relevance
}

// ─── 12-Month Projections ────────────────────────────────────────────────────

export function generate12MonthProjections(data, scores, classification) {
  const tech = classification === "technical";
  const nonTech = classification === "non-technical";
  const d = scores.dimensions;
  const revMid = REV_MID[data.revenue] || 30000;
  const sizeMap = { "1–5": 3, "6–20": 13, "21–50": 35, "51+": 75 };
  const headcount = sizeMap[data.companySize] || 13;

  // "Do nothing" scenario
  const doNothing = [];
  if (d.automationReadiness > 50) {
    const wastePct = Math.round(5 + (d.automationReadiness / 100) * 15);
    doNothing.push(nonTech
      ? `Team capacity waste grows to ~${wastePct}% as manual processes compound with headcount`
      : tech
      ? `Operational overhead: +${wastePct}% team capacity loss from unautomated processes (linear growth with headcount)`
      : `~${wastePct}% of team time continues to be spent on manual work that compounds as you hire`);
  }
  if (d.lostRevenueRisk > 40 && revMid > 0) {
    const leakPct = Math.round(4 + (d.lostRevenueRisk / 100) * 12);
    const leakAmt = Math.round(revMid * (leakPct / 100) * 12);
    doNothing.push(nonTech
      ? `Estimated $${leakAmt.toLocaleString()} in revenue leakage over 12 months from untracked conversion gaps`
      : tech
      ? `Revenue leakage: ~$${leakAmt.toLocaleString()}/yr from unoptimized funnel (${leakPct}% of current MRR)`
      : `Approximately $${leakAmt.toLocaleString()} in potential revenue lost over 12 months`);
  }
  if (d.scalingRisk > 50 && headcount > 10) {
    doNothing.push(nonTech
      ? `Infrastructure limitations will likely force emergency fixes costing 3–5× more than planned improvements`
      : tech
      ? `Tech debt compounds quarterly — reactive fixes estimated at 3–5× the cost of proactive remediation`
      : `Delayed infrastructure work typically costs 3–5× more when done reactively under pressure`);
  }
  if (d.engineeringMaturity > 50) {
    doNothing.push(nonTech
      ? `New hires take longer to get productive without proper systems and documentation`
      : tech
      ? `Onboarding time inflated by ~40% due to missing docs and undefined processes — compounds with each hire`
      : `Employee ramp-up time increases without systems and documentation in place`);
  }
  if (doNothing.length === 0) doNothing.push("Current trajectory is sustainable for the next 12 months at current scale");

  // "Fix top gaps" scenario
  const fixGaps = [];
  if (d.automationReadiness > 40) {
    const recoverPct = Math.round(60 + (100 - d.automationReadiness) * 0.3);
    fixGaps.push(nonTech
      ? `Automating top workflows recovers ~${recoverPct}% of the time currently spent on manual tasks within 8 weeks`
      : tech
      ? `Workflow automation delivers ~${recoverPct}% manual task reduction within 2 sprints (4–8 weeks)`
      : `Targeted automation reduces manual work by ~${recoverPct}% within the first 2 months`);
  }
  if (d.lostRevenueRisk > 35 && revMid > 0) {
    const recoverPct = Math.min(15, Math.round(3 + (d.lostRevenueRisk / 100) * 12));
    const recoverAmt = Math.round(revMid * (recoverPct / 100));
    fixGaps.push(nonTech
      ? `Adding proper tracking and funnel optimization typically recovers $${recoverAmt.toLocaleString()}/mo within 90 days`
      : tech
      ? `Funnel instrumentation + conversion optimization → ${recoverPct}% MRR uplift (~$${recoverAmt.toLocaleString()}/mo) within Q1`
      : `Conversion tracking and optimization can recover ~$${recoverAmt.toLocaleString()}/mo within the first quarter`);
  }
  if (d.engineeringMaturity > 40) {
    fixGaps.push(nonTech
      ? `Proper development processes reduce errors and speed up future changes by 40–60%`
      : tech
      ? `CI/CD + testing + docs → 40–60% reduction in change lead time, measurable within 6 weeks`
      : `Structured development workflows cut error rates and speed up delivery by 40–60%`);
  }
  if (d.scalingRisk > 40) {
    fixGaps.push(nonTech
      ? `Infrastructure upgrades now prevent costly emergency fixes later — typically 70% cheaper when planned`
      : tech
      ? `Proactive infrastructure investment: 70% cost reduction vs reactive remediation, with predictable downtime windows`
      : `Planned infrastructure work costs ~70% less than emergency fixes under pressure`);
  }
  if (fixGaps.length === 0) fixGaps.push("Minimal intervention needed — current trajectory is solid");

  return { doNothing, fixGaps };
}
