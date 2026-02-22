"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import s from "./evaluate.module.css";
import {
  MATURITY_QUESTIONS,
  DIMENSIONS,
  REVENUE_RANGES,
  calculateScores,
  getVerdict,
  generateReport,
  buildReportText,
  getBenchmarks,
  generateBenchmarkInsights,
  estimateROI,
  generateCompetitiveInsights,
  generate12MonthProjections,
} from "./engine";

// ─── Constants ────────────────────────────────────────────────────────────────

const STORAGE_KEY = "jenisys_evaluation_progress";

const STEPS = [
  { id: "role", label: "Role" },
  { id: "company", label: "Company" },
  { id: "maturity", label: "Maturity" },
  { id: "results", label: "Results" },
  { id: "report", label: "Report" },
];

const ROLES = [
  { value: "founder", label: "Founder", classification: "semi-technical" },
  { value: "cto", label: "CTO / Technical Lead", classification: "technical" },
  { value: "operations", label: "Operations", classification: "semi-technical" },
  { value: "sales", label: "Sales", classification: "non-technical" },
  { value: "marketing", label: "Marketing", classification: "non-technical" },
  { value: "other", label: "Other", classification: "non-technical" },
];

const COMPANY_TYPES = ["SaaS", "Agency", "Compliance / Regulated", "Marketplace", "Other"];
const REGIONS = ["US", "Australia", "Other"];
const COMPANY_SIZES = ["1–5", "6–20", "21–50", "51+"];
const BOTTLENECKS = ["Leads", "Conversions", "Automation", "Scaling", "Infrastructure", "Compliance", "Other"];

const fadeVariants = {
  enter: { opacity: 0, x: 24 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -24 },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function TechnicalFitEvaluation() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    role: "", companyType: "", region: "", companySize: "",
    revenue: "", bottleneck: "", currentSystems: "", inefficiency: "", maturity: {},
  });
  const [errors, setErrors] = useState({});
  const [copied, setCopied] = useState(false);
  const [showMethodology, setShowMethodology] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.data) setData(parsed.data);
        if (typeof parsed.step === "number" && parsed.step < 3) setStep(parsed.step);
      }
    } catch { /* ignore */ }
  }, [mounted]);

  useEffect(() => {
    if (!mounted || step >= 3) return;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ data, step })); } catch { /* ignore */ }
  }, [data, step, mounted]);

  const update = useCallback((field, value) => {
    setData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }, []);

  const toggleMaturity = useCallback((key) => {
    setData((prev) => ({ ...prev, maturity: { ...prev.maturity, [key]: !prev.maturity[key] } }));
  }, []);

  const classification = useMemo(() => {
    const role = ROLES.find((r) => r.value === data.role);
    return role?.classification || "non-technical";
  }, [data.role]);

  const scores = useMemo(() => (step < 3 ? null : calculateScores(data)), [data, step]);
  const report = useMemo(() => (scores ? generateReport(data, scores, classification) : null), [data, scores, classification]);
  const benchData = useMemo(() => (scores ? getBenchmarks(data) : null), [scores, data]);
  const benchInsights = useMemo(() => (scores ? generateBenchmarkInsights(scores, data, classification) : []), [scores, data, classification]);
  const roiData = useMemo(() => (scores ? estimateROI(data, scores) : null), [scores, data]);
  const competitiveInsights = useMemo(() => (scores ? generateCompetitiveInsights(data, classification) : []), [scores, data, classification]);
  const projections = useMemo(() => (scores ? generate12MonthProjections(data, scores, classification) : null), [scores, data, classification]);

  const validate = useCallback(() => {
    const e = {};
    if (step === 0 && !data.role) e.role = "Select your role";
    if (step === 1) {
      if (!data.companyType) e.companyType = "Select company type";
      if (!data.region) e.region = "Select region";
      if (!data.companySize) e.companySize = "Select company size";
      if (!data.revenue) e.revenue = "Select revenue range";
      if (!data.bottleneck) e.bottleneck = "Select primary bottleneck";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }, [step, data]);

  const next = useCallback(() => { if (validate()) { setStep((s) => Math.min(s + 1, STEPS.length - 1)); window.scrollTo({ top: 0, behavior: "smooth" }); } }, [validate]);
  const prev = useCallback(() => { setStep((s) => Math.max(s - 1, 0)); window.scrollTo({ top: 0, behavior: "smooth" }); }, []);
  const restart = useCallback(() => {
    setData({ role: "", companyType: "", region: "", companySize: "", revenue: "", bottleneck: "", currentSystems: "", inefficiency: "", maturity: {} });
    setStep(0); setErrors({}); setCopied(false); setShowMethodology(false);
    try { localStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const copyToClipboard = useCallback(() => {
    if (!scores || !report) return;
    navigator.clipboard.writeText(buildReportText(data, scores, report)).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2500); });
  }, [data, scores, report]);

  const downloadReport = useCallback(() => {
    if (!scores || !report) return;
    const blob = new Blob([buildReportText(data, scores, report)], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = `jenisys-evaluation-${Date.now()}.txt`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
  }, [data, scores, report]);

  const progress = ((step + 1) / STEPS.length) * 100;
  const verdict = scores ? getVerdict(scores.composite) : null;

  if (!mounted) return null;

  return (
    <section className={s.pageWrapper} aria-label="Technical Fit Evaluation">
      <header className={s.header}>
        <div className={s.freeBadge}>100% Free — No signup required</div>
        <h1 className={s.pageTitle}>Technical Fit Evaluation</h1>
        <p className={s.pageSubtitle}>Free diagnostic tool for founders, CTOs, and operators. Answer a few questions — get an honest, data-backed assessment of your company&apos;s technical gaps, estimated ROI, and a personalized action plan. No email required, no data stored.</p>
      </header>

      {step < 3 && (
        <div className={s.progressWrapper} role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
          <div className={s.progressTrack}><div className={s.progressFill} style={{ width: `${progress}%` }} /></div>
          <div className={s.progressLabels}>
            {STEPS.slice(0, 3).map((st, i) => (
              <span key={st.id} className={`${s.progressStep} ${i === step ? s.progressStepActive : ""} ${i < step ? s.progressStepDone : ""}`}>{st.label}</span>
            ))}
          </div>
        </div>
      )}

      {step < 3 && (
        <div className={s.formContainer}>
          <AnimatePresence mode="wait">
            <motion.div key={step} variants={fadeVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }}>
              <div className={s.stepCard}>
                {step === 0 && (
                  <>
                    <p className={s.stepLabel}>Step 1 of 3</p>
                    <h2 className={s.stepTitle}>What is your role?</h2>
                    <div className={s.fieldGroup}>
                      <div className={s.radioGroup} role="radiogroup" aria-label="Select your role">
                        {ROLES.map((r) => (
                          <button key={r.value} type="button" className={`${s.radioOption} ${data.role === r.value ? s.radioOptionSelected : ""}`} onClick={() => update("role", r.value)} aria-pressed={data.role === r.value}>
                            <span className={`${s.radioIndicator} ${data.role === r.value ? s.radioIndicatorSelected : ""}`}>{data.role === r.value && <span className={s.radioIndicatorDot} />}</span>
                            {r.label}
                          </button>
                        ))}
                      </div>
                      {errors.role && <p className={s.fieldError}>{errors.role}</p>}
                    </div>
                  </>
                )}

                {step === 1 && (
                  <>
                    <p className={s.stepLabel}>Step 2 of 3</p>
                    <h2 className={s.stepTitle}>Company Profile</h2>
                    <RadioField label="Company Type" ariaLabel="Company type" options={COMPANY_TYPES} value={data.companyType} onChange={(v) => update("companyType", v)} error={errors.companyType} s={s} />
                    <RadioField label="Region" ariaLabel="Region" options={REGIONS} value={data.region} onChange={(v) => update("region", v)} error={errors.region} s={s} />
                    <RadioField label="Company Size" ariaLabel="Company size" options={COMPANY_SIZES} value={data.companySize} onChange={(v) => update("companySize", v)} error={errors.companySize} s={s} suffix=" employees" />
                    <div className={s.fieldGroup}>
                      <label className={s.fieldLabel} htmlFor="revenue-select">Monthly Revenue Range</label>
                      <select id="revenue-select" className={`${s.selectInput} ${errors.revenue ? s.inputError : ""}`} value={data.revenue} onChange={(e) => update("revenue", e.target.value)}>
                        <option value="">Select range</option>
                        {REVENUE_RANGES.map((r) => (<option key={r} value={r}>{r}</option>))}
                      </select>
                      {errors.revenue && <p className={s.fieldError}>{errors.revenue}</p>}
                    </div>
                    <RadioField label="Primary Bottleneck" ariaLabel="Primary bottleneck" options={BOTTLENECKS} value={data.bottleneck} onChange={(v) => update("bottleneck", v)} error={errors.bottleneck} s={s} />
                    <div className={s.fieldGroup}>
                      <label className={s.fieldLabel} htmlFor="current-systems">Current Systems Used</label>
                      <textarea id="current-systems" className={`${s.textInput} ${s.textarea}`} value={data.currentSystems} onChange={(e) => update("currentSystems", e.target.value)} placeholder="e.g. HubSpot, Slack, Google Sheets, custom Node.js backend..." />
                    </div>
                    <div className={s.fieldGroup}>
                      <label className={s.fieldLabel} htmlFor="inefficiency">Biggest Operational Inefficiency</label>
                      <textarea id="inefficiency" className={`${s.textInput} ${s.textarea}`} value={data.inefficiency} onChange={(e) => update("inefficiency", e.target.value)} placeholder="Describe the single biggest inefficiency in your operations..." />
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <p className={s.stepLabel}>Step 3 of 3</p>
                    <h2 className={s.stepTitle}>Technology Maturity</h2>
                    <div className={s.toggleGroup}>
                      {MATURITY_QUESTIONS.map((q) => (
                        <button key={q.key} type="button" className={`${s.toggleOption} ${data.maturity[q.key] ? s.toggleOptionSelected : ""}`} onClick={() => toggleMaturity(q.key)} aria-pressed={!!data.maturity[q.key]}>
                          <span className={s.toggleLabel}>{q.label}</span>
                          <span className={`${s.toggleSwitch} ${data.maturity[q.key] ? s.toggleSwitchOn : ""}`}>
                            <span className={`${s.toggleSwitchKnob} ${data.maturity[q.key] ? s.toggleSwitchKnobOn : ""}`} />
                          </span>
                        </button>
                      ))}
                    </div>
                  </>
                )}

                <div className={s.buttonRow}>
                  {step > 0 ? <button type="button" className={s.btnSecondary} onClick={prev}><ArrowLeftIcon /> Back</button> : <span className={s.spacer} />}
                  <button type="button" className={s.btnPrimary} onClick={next}>{step === 2 ? "Calculate Results" : "Continue"} <ArrowRightIcon /></button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <p className={s.privacyNote}>Your data is not stored or sent to any server. All calculations happen in your browser.</p>
        </div>
      )}

      {step === 3 && scores && report && (
        <div className={s.resultsWrapper}>
          <AnimatePresence mode="wait">
            <motion.div key="results" variants={fadeVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
              <div className={s.verdictCard}>
                <div className={`${s.scoreCircle} ${verdict === "not-fit" ? s.scoreCircleNotFit : verdict === "possible" ? s.scoreCirclePossible : s.scoreCircleStrong}`}>
                  <span className={s.scoreValue}>{scores.composite}</span>
                  <span className={s.scoreLabel}>Score</span>
                </div>
                <h2 className={`${s.verdictLabel} ${verdict === "not-fit" ? s.verdictNotFit : verdict === "possible" ? s.verdictPossible : s.verdictStrong}`}>{report.verdictTitle}</h2>
                <p className={s.verdictDescription}>{report.verdictDesc}</p>
              </div>

              <div className={s.dimensionsCard}>
                <h3 className={s.dimensionsTitle}>
                  Score Breakdown
                  <span className={s.tooltipWrapper} onMouseEnter={() => setTooltipVisible("dims")} onMouseLeave={() => setTooltipVisible(null)}>
                    <span className={s.tooltipIcon}>?</span>
                    {tooltipVisible === "dims" && <span className={s.tooltipContent}>Each dimension is scored independently using cross-referenced inputs.</span>}
                  </span>
                </h3>
                {DIMENSIONS.map((dim) => {
                  const val = scores.dimensions[dim.key];
                  const barClass = val <= 30 ? s.dimensionBarLow : val <= 60 ? s.dimensionBarMed : s.dimensionBarHigh;
                  return (
                    <div key={dim.key} className={s.dimensionRow}>
                      <span className={s.dimensionLabel}>{dim.label}</span>
                      <div className={s.dimensionBar}><div className={`${s.dimensionBarFill} ${barClass}`} style={{ width: `${val}%` }} /></div>
                      <span className={s.dimensionScore}>{val}</span>
                    </div>
                  );
                })}
              </div>

              {scores.crossFlags?.length > 0 && (
                <div className={s.reportSection}>
                  <h3 className={s.reportSectionTitle}>Cross-Reference Flags</h3>
                  <ul className={s.reportList}>
                    {scores.crossFlags.map((flag, i) => (
                      <li key={i} className={s.reportListItem}>
                        <strong style={{ color: flag.type === "critical" ? "#DC2626" : "#D97706", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>{flag.type}</strong>{" — "}{flag.msg}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className={s.buttonRow}>
                <button type="button" className={s.btnSecondary} onClick={prev}><ArrowLeftIcon /> Back to Questions</button>
                <button type="button" className={s.btnPrimary} onClick={next}>View Full Report <ArrowRightIcon /></button>
              </div>

              <div className={s.trustFooter}>
                <button type="button" className={s.methodologyToggle} onClick={() => setShowMethodology(!showMethodology)} aria-expanded={showMethodology}>
                  {showMethodology ? "Hide" : "How"} scoring works {showMethodology ? "▲" : "▼"}
                </button>
                {showMethodology && (
                  <div className={s.methodologyPanel}>
                    <p className={s.methodologyText}>
                      Five dimensions are scored independently using distinct formulas. Each dimension factors different
                      combinations of your maturity answers, company profile, bottleneck, and free-text inputs. Cross-reference
                      rules detect high-signal mismatches (e.g., SaaS without APIs, regulated industry without documentation)
                      and apply targeted score boosts. Free-text fields are parsed for technology keywords and inefficiency
                      signals that adjust scoring. Revenue efficiency (revenue per employee) is factored into risk and
                      opportunity dimensions. The composite is a weighted average (automation 25%, engineering 25%, scaling 20%,
                      revenue risk 15%, optimization 15%). All computation is client-side.
                    </p>
                  </div>
                )}
                <p className={s.privacyNote}>Your data is not stored or sent to any server. All calculations happen in your browser.</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {step === 4 && scores && report && (
        <div className={s.resultsWrapper}>
          <AnimatePresence mode="wait">
            <motion.div key="report" variants={fadeVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
              <h2 className={s.pageTitle} style={{ textAlign: "center", marginBottom: 32 }}>Your Assessment Report</h2>
              <ReportSection title="Summary" s={s}><p className={s.reportText}>{report.summary}</p></ReportSection>
              <ReportSection title="Technical Assessment" s={s}><p className={s.reportText}>{report.assessment}</p></ReportSection>

              {benchData && benchInsights.length > 0 && (
                <ReportSection title="Industry Benchmark Comparison" s={s}>
                  <div className={s.benchmarkGrid}>
                    {DIMENSIONS.map((dim) => {
                      const score = scores.dimensions[dim.key];
                      const bench = benchData.benchmarks[dim.key];
                      const diff = score - bench;
                      return (
                        <div key={dim.key} className={s.benchmarkRow}>
                          <span className={s.benchmarkLabel}>{dim.label}</span>
                          <div className={s.benchmarkBars}>
                            <div className={s.benchmarkBarTrack}>
                              <div className={s.benchmarkBarYou} style={{ width: `${score}%` }} />
                              <div className={s.benchmarkBarAvg} style={{ left: `${bench}%` }} />
                            </div>
                          </div>
                          <span className={s.benchmarkDiff} style={{ color: diff > 10 ? "#DC2626" : diff > 0 ? "#D97706" : "#059669" }}>
                            {diff > 0 ? `+${diff}` : diff} vs avg
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <p className={s.benchmarkNote}>Peer avg for {data.companyType} / {data.companySize} employees. Higher score = bigger gap.</p>
                  <ReportList items={benchInsights} s={s} />
                </ReportSection>
              )}

              {roiData && roiData.items.length > 0 && (
                <ReportSection title="Estimated ROI" s={s}>
                  <div className={s.roiGrid}>
                    {roiData.items.map((item, i) => (
                      <div key={i} className={s.roiCard}>
                        <div className={s.roiHeader}>
                          <span className={s.roiArea}>{item.area}</span>
                          <span className={`${s.roiPriority} ${item.priority === "high" ? s.roiPriorityHigh : s.roiPriorityMed}`}>{item.priority}</span>
                        </div>
                        <p className={s.roiMetric}>{item.metric}</p>
                        <p className={s.roiValue}>{item.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className={s.roiTotal}>
                    <span>Total Estimated Impact</span>
                    <span className={s.roiTotalValue}>${roiData.totalMonthly.toLocaleString()}/mo · ${roiData.totalAnnual.toLocaleString()}/yr</span>
                  </div>
                </ReportSection>
              )}

              {competitiveInsights.length > 0 && (
                <ReportSection title="Competitive Position" s={s}>
                  <ReportList items={competitiveInsights} s={s} />
                </ReportSection>
              )}

              <ReportSection title="Growth Blockers" s={s}><ReportList items={report.blockers} s={s} /></ReportSection>
              <ReportSection title="Risk Flags" s={s}><ReportList items={report.risks} s={s} /></ReportSection>

              {projections && (
                <ReportSection title="12-Month Projections" s={s}>
                  <div className={s.projectionsGrid}>
                    <div className={s.projectionColumn}>
                      <h4 className={s.projectionHeading} style={{ color: "#DC2626" }}>If you do nothing</h4>
                      <ReportList items={projections.doNothing} s={s} />
                    </div>
                    <div className={s.projectionColumn}>
                      <h4 className={s.projectionHeading} style={{ color: "#059669" }}>If you fix top gaps</h4>
                      <ReportList items={projections.fixGaps} s={s} />
                    </div>
                  </div>
                </ReportSection>
              )}

              <ReportSection title="Recommended Architecture Improvements" s={s}><ReportList items={report.archRecs} s={s} /></ReportSection>
              <ReportSection title="Suggested Next Steps" s={s}><ReportList items={report.nextSteps} s={s} /></ReportSection>

              <div className={s.actionRow}>
                <button type="button" className={s.btnAction} onClick={downloadReport}><DownloadIcon /> Download Report</button>
                <button type="button" className={`${s.btnActionOutline} ${copied ? s.copied : ""}`} onClick={copyToClipboard}>
                  {copied ? <><CheckIcon /> Copied</> : <><CopyIcon /> Copy to Clipboard</>}
                </button>
              </div>
              <div className={s.buttonRow} style={{ marginTop: 24 }}>
                <button type="button" className={s.btnSecondary} onClick={prev}><ArrowLeftIcon /> Back to Scores</button>
                <span className={s.spacer} />
              </div>
              <div className={s.restartRow}><button type="button" className={s.btnRestart} onClick={restart}>Start Over</button></div>
              <p className={s.privacyNote} style={{ marginTop: 24 }}>Your data was not stored. This report was generated entirely in your browser.</p>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </section>
  );
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function RadioField({ label, ariaLabel, options, value, onChange, error, s, suffix = "" }) {
  return (
    <div className={s.fieldGroup}>
      <label className={s.fieldLabel}>{label}</label>
      <div className={s.radioGroup} role="radiogroup" aria-label={ariaLabel}>
        {options.map((opt) => (
          <button key={opt} type="button" className={`${s.radioOption} ${value === opt ? s.radioOptionSelected : ""}`} onClick={() => onChange(opt)} aria-pressed={value === opt}>
            <span className={`${s.radioIndicator} ${value === opt ? s.radioIndicatorSelected : ""}`}>{value === opt && <span className={s.radioIndicatorDot} />}</span>
            {opt}{suffix}
          </button>
        ))}
      </div>
      {error && <p className={s.fieldError}>{error}</p>}
    </div>
  );
}

function ReportSection({ title, s, children }) {
  return (
    <div className={s.reportSection}>
      <h3 className={s.reportSectionTitle}>{title}</h3>
      {children}
    </div>
  );
}

function ReportList({ items, s }) {
  return (
    <ul className={s.reportList}>
      {items.map((item, i) => (<li key={i} className={s.reportListItem}>{item}</li>))}
    </ul>
  );
}

// ─── Icons ───────────────────────────────────────────────────────────────────

function ArrowRightIcon() {
  return (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>);
}
function ArrowLeftIcon() {
  return (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>);
}
function DownloadIcon() {
  return (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>);
}
function CopyIcon() {
  return (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>);
}
function CheckIcon() {
  return (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>);
}
