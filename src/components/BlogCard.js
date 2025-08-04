"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronRightIcon,
  CalendarIcon,
  ClockIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

export default function BlogCard({ blog, index }) {
    return (
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
            <Image
              src={blog.thumbnail}
              alt={blog.title}
              width={500}
              height={300}
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
    )
}
