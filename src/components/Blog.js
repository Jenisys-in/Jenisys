"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, MapPin, Phone, Mail } from "lucide-react";

import {
  ChevronRightIcon,
  MagnifyingGlassIcon,
  CalendarIcon,
  ClockIcon,
  XMarkIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

// Mock blog data
const mockBlogs = [
  {
    id: 1,
    title: "The Future of AI in Business: Transforming Industries in 2025",
    slug: "future-ai-business-2025",
    excerpt:
      "Discover how artificial intelligence is revolutionizing business operations and creating new opportunities across industries.",
    thumbnail: "/img/blog_1.jpeg",
    author: { name: "Sarah Chen", image: "/api/placeholder/40/40" },
    date: "2025-07-28",
    readingTime: "8 min read",
    tags: ["AI", "Business", "Technology"],
    category: "Technology",
    featured: true,
  },
  {
    id: 2,
    title: "Cloud Migration Strategies for Modern Startups",
    slug: "cloud-migration-strategies-startups",
    excerpt:
      "Learn essential cloud migration strategies that help startups scale efficiently while maintaining security and performance.",
    thumbnail: "/img/blog_2.png",
    author: { name: "Michael Rodriguez", image: "/api/placeholder/40/40" },
    date: "2025-07-25",
    readingTime: "6 min read",
    tags: ["Cloud", "Startups", "DevOps"],
    category: "Development",
    featured: false,
  },
  {
    id: 3,
    title: "Building Scalable React Applications: Best Practices Guide",
    slug: "scalable-react-applications-guide",
    excerpt:
      "Master the art of building scalable React applications with proven architectural patterns and performance optimization techniques.",
    thumbnail: "/img/blog_3.png",
    author: { name: "Emma Thompson", image: "/api/placeholder/40/40" },
    date: "2025-07-22",
    readingTime: "12 min read",
    tags: ["React", "Development", "Performance"],
    category: "Development",
    featured: true,
  },
  {
    id: 4,
    title: "Cybersecurity Trends Every CTO Should Know",
    slug: "cybersecurity-trends-cto-2025",
    excerpt:
      "Stay ahead of emerging cybersecurity threats and learn about the latest security frameworks that protect modern businesses.",
    thumbnail: "/img/blog_4.png",
    author: { name: "David Kumar", image: "/api/placeholder/40/40" },
    date: "2025-07-20",
    readingTime: "10 min read",
    tags: ["Security", "Leadership", "Technology"],
    category: "Security",
    featured: false,
  },
  {
    id: 5,
    title: "Digital Transformation Success Stories from Fortune 500",
    slug: "digital-transformation-fortune-500",
    excerpt:
      "Explore real-world digital transformation case studies and learn how enterprise companies are leveraging technology for growth.",
    thumbnail: "/img/blog_5.png",
    author: { name: "Lisa Park", image: "/api/placeholder/40/40" },
    date: "2025-07-18",
    readingTime: "15 min read",
    tags: ["Digital Transformation", "Enterprise", "Case Studies"],
    category: "Business",
    featured: true,
  },
  {
    id: 6,
    title: "API Design Principles for Modern Web Applications",
    slug: "api-design-principles-modern-web",
    excerpt:
      "Learn fundamental API design principles that create robust, scalable, and developer-friendly web services.",
    thumbnail: "/img/blog_6.png",
    author: { name: "Alex Johnson", image: "/api/placeholder/40/40" },
    date: "2025-07-15",
    readingTime: "7 min read",
    tags: ["API", "Development", "Architecture"],
    category: "Development",
    featured: false,
  },
];

const POSTS_PER_PAGE = 6;

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Filter blogs based on search term only
  const filteredBlogs = useMemo(() => {
    return mockBlogs.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        blog.category.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesSearch;
    });
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredBlogs.length / POSTS_PER_PAGE);
  const currentBlogs = filteredBlogs.slice(0, currentPage * POSTS_PER_PAGE);

  const handleLoadMore = async () => {
    if (currentPage < totalPages) {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      setCurrentPage((prev) => prev + 1);
      setIsLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Reset pagination when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const BlogCard = ({ blog, index }) => (
    <Link href={`/blog/${blog.slug}`}>
      <motion.article
        layout
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-gray-100 flex flex-col cursor-pointer ${
          blog.featured ? "ring-2 ring-blue-200" : ""
        }`}
      >
        {blog.featured && (
          <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
            <StarIcon className="w-3 h-3 mr-1" />
            Featured
          </div>
        )}

        {/* Blog Image */}
        <div className="relative overflow-hidden h-56">
          <img
            src={blog.thumbnail}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Blog Content */}
        <div className="p-6 flex flex-col justify-between flex-1">
          <div>
            {/* Category & Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold">
                {blog.category}
              </span>
              {blog.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Blog Title */}
            <h2 className="font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 text-xl lg:text-2xl">
              {blog.title}
            </h2>

            {/* Blog Excerpt */}
            <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
              {blog.excerpt}
            </p>
          </div>

          <div>
            {/* Author Info */}
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm">
                <p className="text-gray-900">
                  <span className="font-semibold">Author:</span>{" "}
                  {blog.author.name}
                </p>
              </div>
            </div>

            {/* Meta Info */}
            <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
              <div className="flex items-center space-x-1">
                <CalendarIcon className="w-4 h-4" />
                <span>{formatDate(blog.date)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <ClockIcon className="w-4 h-4" />
                <span>{blog.readingTime}</span>
              </div>
            </div>

            {/* Read More Indicator */}
            <div className="inline-flex items-center text-blue-600 font-semibold group-hover:text-purple-600 transition-all duration-300 group-hover:translate-x-1">
              Read More
              <ChevronRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                width="32"
                height="32"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 32 0 L 0 0 0 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Insights & Innovation from{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Jenisys
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Explore cutting-edge articles, expert insights, and innovative
              ideas that drive digital transformation and business growth.
            </p>

            {/* Enhanced Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative group">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6 group-focus-within:text-blue-400 transition-colors" />
                <input
                  type="text"
                  placeholder="Search articles, authors, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-16 py-4 text-lg rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent focus:bg-white/15 transition-all duration-300"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-600">
              Showing{" "}
              <span className="font-semibold">{currentBlogs.length}</span> of{" "}
              <span className="font-semibold">{filteredBlogs.length}</span>{" "}
              articles
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredBlogs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <MagnifyingGlassIcon className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                No articles found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms to find what you're looking for.
              </p>
              <button
                onClick={() => setSearchTerm("")}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                View All Articles
              </button>
            </motion.div>
          ) : (
            <>
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {currentBlogs.map((blog, index) => (
                    <BlogCard key={blog.id} blog={blog} index={index} />
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Load More Button */}
              {currentPage < totalPages && (
                <div className="text-center mt-16">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleLoadMore}
                    disabled={isLoading}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Loading More Articles...</span>
                      </div>
                    ) : (
                      `Load More Articles (${
                        filteredBlogs.length - currentBlogs.length
                      } remaining)`
                    )}
                  </motion.button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className=" bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Image
                  src="/img/Jenisys Hero.png"
                  alt="Jenisys"
                  width={100}
                  height={40}
                  className="h-10 w-auto mb-4 brightness-0 invert"
                />
                <h3 className="text-xl font-bold text-white mb-3">
                  Advancing Excellence Beyond Cost
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Delivering innovative solutions that drive business growth and
                  operational excellence through cutting-edge technology and
                  strategic consulting.
                </p>
              </div>

              {/* CTA Button */}
              <button className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
                Get Started Today
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Services", href: "#services" },
                  { name: "About Us", href: "#about" },
                  { name: "Blog", href: "#blog" },
                  { name: "Careers", href: "#careers" },
                  { name: "Case Studies", href: "#case-studies" },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">
                Contact Us
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Raja Ram mohon roy
                      <br />
                      Sarani
                      <br />
                      Serampore, West Bengal 712203
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <a
                    href="tel:+911234567890"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +91 12345 67890
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <a
                    href="mailto:info@jenisys.in"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    info@jenisys.in
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media & Newsletter */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">
                Stay Connected
              </h4>

              {/* Social Media Icons */}
              <div className="flex gap-4 mb-6">
                {[
                  {
                    name: "Instagram",
                    href: "https://www.instagram.com/jenisys.in/",
                    icon: "/img/mdi_instagram.png",
                  },
                  {
                    name: "LinkedIn",
                    href: "https://www.linkedin.com/company/jenisys",
                    icon: "/img/linkedIn.png",
                  },
                  {
                    name: "Facebook",
                    href: "https://www.facebook.com",
                    icon: "/img/facebook.png",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-gray-700 hover:bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={24}
                      height={24}
                      className="w-6 h-6 brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all"
                    />
                  </a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div>
                <p className="text-gray-300 text-sm mb-3">
                  Subscribe to our newsletter
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-purple-500 focus:outline-none text-sm"
                  />
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="text-gray-400 text-sm">
                © 2025 Jenisys. All rights reserved.
              </div>

              {/* Legal Links */}
              <div className="flex gap-6 text-sm">
                {[{ name: "Privacy Policy", href: "/Privacy-Policy" }].map(
                  (link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
