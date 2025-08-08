import { blogs } from '@/lib/blogData';
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

  const imageUrl = `https://www.jenisys.in${blog.thumbnail}`;
  return {
    title: blog.title,
    description: blog.description,
    keywords: blog.keywords,
    author: blog.author,
    openGraph: {
      title: blog.title,
      description: blog.description,
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
      author: blog.author,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
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
    description: blog.description,
    author: {
      '@type': 'Organization',
      name: blog.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Jenisys',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.jenisys.in/logo1.png',
      },
    },
    datePublished: new Date().toISOString(),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogComponent />
    </>
  );
}
