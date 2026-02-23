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
        title: `${entry.title} — Jenisys Case Study`,
        description: entry.summary,
        keywords: [
            entry.type,
            entry.industry,
            ...entry.stack.slice(0, 5),
            "case study",
            "engineering",
        ],
        openGraph: {
            title: `${entry.title} — Jenisys Case Study`,
            description: entry.summary,
            url: `https://www.jenisys.in/case-study/${slug}`,
            siteName: "Jenisys",
            images: [
                {
                    url: "https://www.jenisys.in/og-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: entry.title,
                    type: "image/jpeg",
                },
            ],
            locale: "en_US",
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: `${entry.title} — Jenisys Case Study`,
            description: entry.summary,
            images: ["https://www.jenisys.in/og-image.jpg"],
        },
        alternates: {
            canonical: `https://www.jenisys.in/case-study/${slug}`,
        },
    };
}

export default async function CaseStudyDetailRoute({ params }) {
    const { slug } = await params;
    const entry = entries.find((e) => e.slug === slug);

    if (!entry) {
        return null;
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline: entry.title,
        description: entry.summary,
        image: "https://www.jenisys.in/og-image.jpg",
        author: {
            "@type": "Organization",
            name: "Jenisys",
        },
        publisher: {
            "@type": "Organization",
            name: "Jenisys",
            logo: {
                "@type": "ImageObject",
                url: "https://www.jenisys.in/logo2.svg",
            },
        },
        datePublished: entry.date,
        proficiencyLevel: "Expert",
        dependencies: entry.stack.join(", "),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <CaseStudyDetail slug={slug} />
        </>
    );
}

