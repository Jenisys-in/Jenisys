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
          <h2 className="text-4xl font-bold text-gray-800">From the Blog</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Stay up-to-date with the latest industry trends, insights, and news
            from our team of experts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <Link href={`/blog/${post.slug}`}>
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold mb-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-[#361CA9]"
                  >
                    {post.title}
                  </Link>
                </h3>
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-2 text-[#361CA9] font-semibold hover:underline"
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
            <button className="px-8 py-4 bg-[#361CA9] text-white font-semibold rounded-lg hover:bg-[#4b2ffb] transition-colors duration-300">
              View All Posts
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
