import { notFound } from "next/navigation";
import { clampDescription } from "@/lib/seo";
import CaseStudyDetail from "@/components/case-study-detail";
import { entries } from "@/lib/case-study-data";
import { ogUrl } from "@/lib/og";

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
        title: `${entry.title} | Jenisys`,
        description: clampDescription(entry.summary),
        keywords: [
            entry.type,
            entry.industry,
            ...entry.stack.slice(0, 5),
            "case study",
            "engineering",
        ],
        openGraph: {
            title: `${entry.title} | Jenisys`,
            description: clampDescription(entry.summary),
            url: `https://www.jenisys.in/case-study/${slug}`,
            siteName: "Jenisys",
            images: [
                {
                    url: ogUrl(`/case-study/${slug}`),
                    width: 1200,
                    height: 630,
                    alt: entry.title,
                },
            ],
            locale: "en_US",
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: `${entry.title} | Jenisys`,
            description: clampDescription(entry.summary),
            images: [ogUrl(`/case-study/${slug}`)],
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
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline: entry.title,
        description: clampDescription(entry.summary),
        image: ogUrl(`/case-study/${entry.slug}`),
        author: {
            "@type": "Organization",
            name: "Jenisys",
        },
        publisher: {
            "@type": "Organization",
            name: "Jenisys",
            logo: {
                "@type": "ImageObject",
                url: "https://www.jenisys.in/apple-touch-icon.png",
            },
        },
        datePublished: entry.date,
        proficiencyLevel: "Expert",
        dependencies: entry.stack.join(", "),
        mainEntityOfPage: `https://www.jenisys.in/case-study/${entry.slug}`,
    };
    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.jenisys.in" },
            { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://www.jenisys.in/case-study" },
            { "@type": "ListItem", position: 3, name: entry.title, item: `https://www.jenisys.in/case-study/${entry.slug}` },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <CaseStudyDetail slug={slug} />
        </>
    );
}

