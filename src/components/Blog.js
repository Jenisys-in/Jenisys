"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
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

  const sortedBlogs = useMemo(() => {
    return [...allBlogs].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, []);

  const filterAndPaginateBlogs = useCallback(() => {
    setIsLoading(true);
    let filteredBlogs = sortedBlogs;
    if (debouncedSearchTerm) {
      filteredBlogs = filteredBlogs.filter(
        (blog) =>
          blog.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
          blog.author.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
          blog.tags.some((tag) => tag.toLowerCase().includes(debouncedSearchTerm.toLowerCase()))
      );
    }
    if (activeCategory !== "All") {
      filteredBlogs = filteredBlogs.filter((blog) => blog.category === activeCategory);
    }
    setTotalBlogs(filteredBlogs.length);
    setTotalPages(Math.ceil(filteredBlogs.length / POSTS_PER_PAGE));
    setBlogs(filteredBlogs.slice(0, currentPage * POSTS_PER_PAGE));
    setIsLoading(false);
  }, [debouncedSearchTerm, activeCategory, currentPage, sortedBlogs]);

  useEffect(() => {
    setCurrentPage(1);
    setFilterKey((prev) => prev + 1);
    // filterAndPaginateBlogs will be called by the other useEffect when currentPage resets to 1
  }, [debouncedSearchTerm, activeCategory]);

  useEffect(() => {
    filterAndPaginateBlogs();
  }, [currentPage, filterAndPaginateBlogs]);

  const handleLoadMore = useCallback(() => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  }, [currentPage, totalPages]);

  const handleCategoryChange = useCallback(
    (category) => {
      if (category !== activeCategory) setActiveCategory(category);
    },
    [activeCategory]
  );

  const handleClearSearch = useCallback(() => setSearchTerm(""), []);

  const formatDate = useCallback((dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    } catch {
      return "Invalid date";
    }
  }, []);

  const BlogCard = useMemo(() => {
    const CardComponent = ({ blog, index }) => (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
        className="h-full"
      >
        <Link href={`/blog/${blog.slug}`} className="block h-full">
          <article className="ds-card overflow-hidden flex flex-col h-full cursor-pointer group">
            {blog.featured && (
              <div className="absolute top-4 left-4 z-10 bg-[#4F46E5] text-white px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                <StarIcon className="w-3 h-3" />
                Featured
              </div>
            )}

            <div className="relative overflow-hidden h-52 flex-shrink-0">
              <Image
                src={blog.thumbnail || "/img/default-blog.jpg"}
                alt={blog.title || "Blog post"}
                width={500}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ds-image"
                loading="lazy"
              />
            </div>

            <div className="p-6 flex flex-col justify-between flex-1">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="bg-[#4F46E5]/8 text-[#4F46E5] text-xs px-3 py-1 rounded-full font-semibold">
                    {blog.category || "Uncategorized"}
                  </span>
                  {blog.tags?.slice(0, 2).map((tag) => (
                    <span key={tag} className="bg-[#F3F4F6] text-[#6B7280] text-xs px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-semibold text-[#111827] mb-3 group-hover:text-[#4F46E5] transition-colors duration-300 text-xl line-clamp-2">
                  {blog.title || "Untitled"}
                </h3>

                <p className="text-[#374151] mb-4 leading-[1.65] line-clamp-3 text-sm">
                  {blog.excerpt || "No excerpt available."}
                </p>
              </div>

              <div className="mt-auto">
                {blog.author?.name && (
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm">
                      <p className="text-[#111827]">
                        <span className="font-semibold">Author:</span> {blog.author.name}
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex items-center text-sm text-[#6B7280] mb-4 space-x-4">
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

                <div className="inline-flex items-center text-[#4F46E5] font-semibold group-hover:text-[#3730A3] transition-all duration-300 group-hover:translate-x-1">
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

  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={`skeleton-${index}`} className="ds-card overflow-hidden">
          <div className="h-52 bg-[#F3F4F6] animate-pulse" />
          <div className="p-6">
            <div className="flex gap-2 mb-4">
              <div className="h-6 bg-[#F3F4F6] rounded-full w-20 animate-pulse" />
              <div className="h-6 bg-[#F3F4F6] rounded-md w-16 animate-pulse" />
            </div>
            <div className="h-7 bg-[#F3F4F6] rounded mb-3 animate-pulse" />
            <div className="space-y-2 mb-4">
              <div className="h-4 bg-[#F3F4F6] rounded animate-pulse" />
              <div className="h-4 bg-[#F3F4F6] rounded w-3/4 animate-pulse" />
            </div>
            <div className="h-4 bg-[#F3F4F6] rounded w-24 animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );
  LoadingSkeleton.displayName = "LoadingSkeleton";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-[#0F172A] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight text-white font-['Montserrat']">
              Insights & Innovation
            </h2>
            <p className="text-lg md:text-xl text-[#E5E7EB] mb-12 max-w-3xl mx-auto leading-[1.65]">
              Explore cutting-edge articles, expert insights, and innovative ideas that drive digital transformation and business growth.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative group">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#6B7280] w-6 h-6 group-focus-within:text-[#4F46E5] transition-colors" />
                <input
                  type="text"
                  placeholder="Search articles, authors, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-16 py-4 text-base rounded-xl bg-white/8 backdrop-blur-sm border border-white/15 text-white placeholder-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent transition-all duration-300"
                />
                {searchTerm && (
                  <button onClick={handleClearSearch} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#6B7280] hover:text-white transition-colors">
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-10 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                disabled={isLoading}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 disabled:opacity-50 ${
                  activeCategory === category
                    ? "bg-[#4F46E5] text-white"
                    : "bg-white text-[#6B7280] hover:text-[#4F46E5] border border-[#E5E7EB] hover:border-[#4F46E5]/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {!isLoading && (
            <div className="flex items-center justify-between">
              <p className="text-[#6B7280] text-sm">
                Showing <span className="font-semibold text-[#111827]">{blogs.length}</span> of{" "}
                <span className="font-semibold text-[#111827]">{totalBlogs}</span> articles
                {(searchTerm || activeCategory !== "All") && (
                  <span className="text-[#6B7280] ml-2">
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

      {/* Blog Grid */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <LoadingSkeleton />
          ) : blogs.length === 0 ? (
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#F3F4F6] rounded-full flex items-center justify-center">
                <MagnifyingGlassIcon className="w-10 h-10 text-[#6B7280]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#111827] mb-4">No articles found</h3>
              <p className="text-[#6B7280] mb-6">
                Try adjusting your search terms or category filter.
              </p>
              <button
                onClick={() => { setSearchTerm(""); setActiveCategory("All"); }}
                className="ds-btn-primary"
              >
                View All Articles
              </button>
            </motion.div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence key={filterKey} mode="popLayout">
                  {blogs.map((blog, index) => (
                    <BlogCard key={`${blog.id}-${filterKey}`} blog={blog} index={index} />
                  ))}
                </AnimatePresence>
              </div>

              {currentPage < totalPages && (
                <div className="text-center mt-16">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleLoadMore}
                    className="ds-btn-primary px-10 py-4"
                  >
                    {`Load More (${Math.max(0, totalBlogs - blogs.length)} remaining)`}
                  </motion.button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 font-['Montserrat']">
            Ready to build something great?
          </h2>
          <p className="text-white/80 text-lg mb-8 leading-[1.65]">
            Let's discuss how we can help transform your business with technology.
          </p>
          <Link href="/contact">
            <button className="bg-white text-[#4F46E5] font-semibold px-8 py-4 rounded-lg hover:bg-white/90 transition-colors inline-flex items-center gap-2 shadow-lg">
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
