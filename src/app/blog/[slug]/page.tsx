import { blogs } from '@/lib/blogData';
import { clampDescription } from "@/lib/seo";
import { ogUrl } from "@/lib/og";
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const blog = blogs.find((blog) => blog.slug === slug);
  if (!blog) {
    return notFound();
  }

  const imageUrl = ogUrl(`/blog/${slug}`);
  return {
    title: blog.title,
    description: clampDescription(blog.description),
    keywords: blog.keywords,
    authors: [{ name: blog.author?.name || "Jenisys" }],
    openGraph: {
      title: blog.title,
      description: clampDescription(blog.description),
      url: `https://www.jenisys.in/blog/${slug}`,
      siteName: "Jenisys",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      locale: "en_US",
      type: "article",
      authors: [blog.author?.name || "Jenisys"],
      publishedTime: blog.date,
      modifiedTime: blog.dateModified,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: clampDescription(blog.description),
      images: [imageUrl],
    },
    alternates: {
      canonical: `https://www.jenisys.in/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const blog = blogs.find((blog) => blog.slug === slug);

  if (!blog) {
    return notFound();
  }

  const BlogComponent = blog.component;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: clampDescription(blog.description),
    image: `https://www.jenisys.in${blog.thumbnail}`,
    author: {
      '@type': 'Organization',
      name: blog.author?.name || 'Jenisys',
    },
    mainEntityOfPage: `https://www.jenisys.in/blog/${blog.slug}`,
    publisher: {
      '@type': 'Organization',
      name: 'Jenisys',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.jenisys.in/apple-touch-icon.png',
      },
    },
    datePublished: blog.date,
    dateModified: blog.dateModified,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.jenisys.in' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.jenisys.in/blog' },
              { '@type': 'ListItem', position: 3, name: blog.title, item: `https://www.jenisys.in/blog/${blog.slug}` },
            ],
          }),
        }}
      />
      <BlogComponent />
    </>
  );
}
