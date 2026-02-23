"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { blogs } from "../../lib/blogData";

const BlogSection = () => {
  const latestPosts = blogs.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-[30px] font-semibold text-[#111827]">From the Blog</h2>
          <p className="text-base text-[#374151] mt-4 max-w-3xl mx-auto leading-[1.65]">
            Stay up-to-date with the latest industry trends, insights, and news
            from our team of experts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <div
              key={post.id}
              className="ds-card overflow-hidden"
            >
              <Link href={`/blog/${post.slug}`}>
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover ds-image"
                />
              </Link>
              <div className="p-6">
                <p className="text-sm text-[#6B7280] mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold text-[#111827] mb-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-[#4F46E5] transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-2 text-[#4F46E5] font-semibold hover:underline"
                  aria-label={`Read full article: ${post.title}`}
                >
                  Read More <span className="sr-only">about {post.title}</span> <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/blog">
            <button className="ds-btn-primary px-8 py-4">
              View All Posts
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
