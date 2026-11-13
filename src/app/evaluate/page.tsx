import TechnicalFitEvaluation from "@/components/evaluate/TechnicalFitEvaluation";
import { pageMeta } from "@/lib/seo";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata = pageMeta({
  title: "Free Technical Fit Evaluation: Find Your Bottlenecks | Jenisys",
  description:
    "Free 3-minute diagnostic for founders and operators. Find your technical bottlenecks and get benchmarks, estimated ROI and an action plan. No signup.",
  path: "/evaluate",
});

export default function EvaluatePage() {
    return (
        <>
            <TechnicalFitEvaluation />
            <Footer />
            <Script
                id="evaluate-jsonld"
                type="application/ld+json"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "WebApplication",
                            name: "Free Technical Fit Evaluation Tool",
                            description:
                                "Free diagnostic tool that evaluates your company's technical bottlenecks, provides industry benchmarks, estimated ROI, competitive analysis, and a personalized action plan. No signup or email required.",
                            url: "https://www.jenisys.in/evaluate",
                            applicationCategory: "BusinessApplication",
                            operatingSystem: "Any",
                            isAccessibleForFree: true,
                            offers: {
                                "@type": "Offer",
                                price: "0",
                                priceCurrency: "USD",
                                availability: "https://schema.org/InStock",
                            },
                            featureList: [
                                "Industry benchmark comparison",
                                "Estimated ROI calculation",
                                "Competitive position analysis",
                                "12-month projections",
                                "Cross-reference gap detection",
                                "Role-adapted tone",
                                "Free-text analysis",
                                "Downloadable report",
                            ],
                            provider: {
                                "@type": "Organization",
                                name: "Jenisys",
                                url: "https://www.jenisys.in",
                            },
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            mainEntity: [
                                {
                                    "@type": "Question",
                                    name: "Is this technical evaluation tool really free?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Yes, 100% free. No signup, no email, no credit card required. All calculations happen in your browser — your data is never stored or sent to any server.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "What does the technical fit evaluation measure?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "The tool measures five dimensions: Automation Readiness, Engineering Maturity, Scaling Risk, Lost Revenue Risk, and Optimization Opportunity. It cross-references your company type, size, revenue, bottleneck, tech stack, and operational inefficiencies to produce a composite score with personalized insights.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Who is this tool for?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Anyone who runs a company or leads a technical team — founders, CTOs, operations managers, marketing leads, and sales directors. The tool adapts its language based on your role, using technical jargon for CTOs and plain language for non-technical roles.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "How accurate is the estimated ROI?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "The ROI estimates are based on industry benchmarks for your company type and size. They represent typical improvements observed in similar companies, not guaranteed outcomes. The estimates factor in your team size, revenue, and specific gaps to provide directionally accurate projections.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "What types of companies can use this assessment?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "The tool works for SaaS companies, agencies, marketplaces, compliance/regulated businesses, and other company types. It adjusts scoring, benchmarks, and recommendations based on your specific company type and size.",
                                    },
                                },
                            ],
                        },
                    ]),
                }}
            />
        </>
    );
}
