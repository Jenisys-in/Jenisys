import TechnicalFitEvaluation from "@/components/evaluate/TechnicalFitEvaluation";
import Script from "next/script";

export const metadata = {
    title: "Free Technical Fit Evaluation Tool — Find Your Company's Bottlenecks | Jenisys",
    description:
        "Free diagnostic tool — no signup, no email, no data stored. Identify your company's technical bottlenecks, get industry benchmarks, estimated ROI, competitive analysis, and a personalized action plan in under 3 minutes. Works for SaaS, agencies, marketplaces, and regulated industries.",
    keywords: [
        "free technical audit tool",
        "free business bottleneck finder",
        "SaaS system evaluation",
        "automation readiness assessment",
        "engineering maturity test",
        "technical fit evaluation",
        "free company diagnostic tool",
        "business efficiency assessment",
        "technology gap analysis",
        "free ROI calculator",
        "operational bottleneck assessment",
        "SaaS scaling audit",
        "infrastructure assessment tool",
        "automation gap analysis",
        "free engineering audit",
    ],
    openGraph: {
        title: "Free Technical Fit Evaluation — Identify Your Company's Bottlenecks",
        description:
            "Free diagnostic tool — no signup required. Get industry benchmarks, estimated ROI, competitive analysis, and a personalized action plan for your company in under 3 minutes.",
        url: "https://www.jenisys.in/evaluate",
        siteName: "Jenisys",
        images: [
            {
                url: "https://www.jenisys.in/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Jenisys Free Technical Fit Evaluation Tool",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Free Technical Fit Evaluation — Find Your Bottlenecks | Jenisys",
        description:
            "Free diagnostic tool — no signup. Get industry benchmarks, ROI estimates, and a personalized action plan in under 3 minutes.",
        images: ["https://www.jenisys.in/og-image.jpg"],
    },
    alternates: {
        canonical: "https://www.jenisys.in/evaluate",
    },
};

export default function EvaluatePage() {
    return (
        <>
            <TechnicalFitEvaluation />
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
