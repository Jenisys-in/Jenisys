"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
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
import { useDebounce } from "use-debounce";
import { blogs as allBlogs } from "@/lib/blogData";
import Footer from "./Footer";

const POSTS_PER_PAGE = 6;

const categories = ["All", "Technology", "Development", "Business", "Security"];

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);
  const [filterKey, setFilterKey] = useState(0);

  const filterAndPaginateBlogs = useCallback(() => {
    setIsLoading(true);

    let filteredBlogs = allBlogs;

    if (debouncedSearchTerm) {
      filteredBlogs = filteredBlogs.filter(
        (blog) =>
          blog.title
            .toLowerCase()
            .includes(debouncedSearchTerm.toLowerCase()) ||
          blog.author.name
            .toLowerCase()
            .includes(debouncedSearchTerm.toLowerCase()) ||
          blog.tags.some((tag) =>
            tag.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
          )
      );
    }

    if (activeCategory !== "All") {
      filteredBlogs = filteredBlogs.filter(
        (blog) => blog.category === activeCategory
      );
    }

    setTotalBlogs(filteredBlogs.length);
    setTotalPages(Math.ceil(filteredBlogs.length / POSTS_PER_PAGE));
    setBlogs(filteredBlogs.slice(0, currentPage * POSTS_PER_PAGE));
    setIsLoading(false);
  }, [debouncedSearchTerm, activeCategory, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
    setFilterKey((prev) => prev + 1);
    filterAndPaginateBlogs();
  }, [debouncedSearchTerm, activeCategory, filterAndPaginateBlogs]);

  useEffect(() => {
    filterAndPaginateBlogs();
  }, [currentPage, filterAndPaginateBlogs]);

  const handleLoadMore = useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  }, [currentPage, totalPages]);

  const handleCategoryChange = useCallback(
    (category) => {
      if (category !== activeCategory) {
        setActiveCategory(category);
      }
    },
    [activeCategory]
  );

  const handleClearSearch = useCallback(() => {
    setSearchTerm("");
  }, []);

  const formatDate = useCallback((dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (error) {
      return "Invalid date";
    }
  }, []);

  const BlogCard = useMemo(() => {
    const CardComponent = ({ blog, index }) => (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.3,
          delay: index * 0.05,
          ease: "easeOut",
        }}
        className="h-full"
      >
        <Link href={`/blog/${blog.slug}`} className="block h-full">
          <article
            className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-100 flex flex-col h-full cursor-pointer ${
              blog.featured ? "ring-2 ring-blue-200" : ""
            }`}
          >
            {blog.featured && (
              <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
                <StarIcon className="w-3 h-3 mr-1" />
                Featured
              </div>
            )}

            <div className="relative overflow-hidden h-56 flex-shrink-0">
              <Image
                src={blog.thumbnail || "/img/default-blog.jpg"}
                alt={blog.title || "Blog post"}
                width={500}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-6 flex flex-col justify-between flex-1">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold">
                    {blog.category || "Uncategorized"}
                  </span>
                  {blog.tags?.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 text-xl lg:text-2xl line-clamp-2">
                  {blog.title || "Untitled"}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {blog.excerpt || "No excerpt available."}
                </p>
              </div>

              <div className="mt-auto">
                {blog.author?.name && (
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm">
                      <p className="text-gray-900">
                        <span className="font-semibold">Author:</span>{" "}
                        {blog.author.name}
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <div className="flex items-center space-x-1">
                    <CalendarIcon className="w-4 h-4" />
                    <span>{formatDate(blog.date)}</span>
                  </div>
                  {blog.readingTime && (
                    <div className="flex items-center space-x-1">
                      <ClockIcon className="w-4 h-4" />
                      <span>{blog.readingTime}</span>
                    </div>
                  )}
                </div>

                <div className="inline-flex items-center text-blue-600 font-semibold group-hover:text-purple-600 transition-all duration-300 group-hover:translate-x-1">
                  Read More
                  <ChevronRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </article>
        </Link>
      </motion.div>
    );
    CardComponent.displayName = "BlogCard";
    return CardComponent;
  }, [formatDate]);

  const LoadingSkeleton = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={`skeleton-${index}`}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
          >
            <div className="h-56 bg-gray-200 animate-pulse" />
            <div className="p-6">
              <div className="flex gap-2 mb-4">
                <div className="h-6 bg-gray-200 rounded-full w-20 animate-pulse" />
                <div className="h-6 bg-gray-200 rounded-md w-16 animate-pulse" />
              </div>
              <div className="h-8 bg-gray-200 rounded mb-3 animate-pulse" />
              <div className="space-y-2 mb-4">
                <div className="h-4 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
              </div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-4 animate-pulse" />
              <div className="flex gap-4 mb-4">
                <div className="h-4 bg-gray-200 rounded w-20 animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-16 animate-pulse" />
              </div>
              <div className="h-4 bg-gray-200 rounded w-24 animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    );
  };
  LoadingSkeleton.displayName = "LoadingSkeleton";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-24 overflow-hidden">
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
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Insights & Innovation from{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Jenisys
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Explore cutting-edge articles, expert insights, and innovative
              ideas that drive digital transformation and business growth.
            </p>

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
                    onClick={handleClearSearch}
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

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                disabled={isLoading}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {!isLoading && (
            <div className="flex items-center justify-between mb-8">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{blogs.length}</span> of{" "}
                <span className="font-semibold">{totalBlogs}</span> articles
                {(searchTerm || activeCategory !== "All") && (
                  <span className="text-sm text-gray-500 ml-2">
                    {searchTerm && `for "${searchTerm}"`}
                    {searchTerm && activeCategory !== "All" && " in "}
                    {activeCategory !== "All" && `${activeCategory}`}
                  </span>
                )}
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <LoadingSkeleton />
          ) : blogs.length === 0 ? (
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
                Try adjusting your search terms or category filter to find what
                you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("All");
                }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                View All Articles
              </button>
            </motion.div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence key={filterKey} mode="popLayout">
                  {blogs.map((blog, index) => (
                    <BlogCard
                      key={`${blog.id}-${filterKey}`}
                      blog={blog}
                      index={index}
                    />
                  ))}
                </AnimatePresence>
              </div>

              {currentPage < totalPages && (
                <div className="text-center mt-16">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleLoadMore}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300"
                  >
                    {`Load More (${Math.max(
                      0,
                      totalBlogs - blogs.length
                    )} remaining)`}
                  </motion.button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
