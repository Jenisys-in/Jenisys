import CaseStudyDetail from "@/components/case-study-detail";
import { entries } from "@/lib/case-study-data";

export async function generateStaticParams() {
    return entries.map((entry) => ({
        slug: entry.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const entry = entries.find((e) => e.slug === slug);

    if (!entry) {
        return {
            title: "Not Found — Jenisys",
        };
    }

    return {
        title: `${entry.title} — Jenisys Build Logs`,
        description: entry.summary,
        keywords: [
            entry.type,
            entry.industry,
            ...entry.stack.slice(0, 5),
            "case study",
            "engineering",
        ],
    };
}

export default async function CaseStudyDetailRoute({ params }) {
    const { slug } = await params;
    return <CaseStudyDetail slug={slug} />;
}
