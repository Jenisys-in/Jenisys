"use client";

import { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronRight,
  Code,
  Zap,
  Shield,
  Monitor,
  Users,
  BookOpen,
} from "lucide-react";

export default function ScalableReactBlog() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [expandedCode, setExpandedCode] = useState({});
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleCodeExpansion = (section) => {
    setExpandedCode((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const jumpToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark bg-slate-900" : "bg-white"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-indigo-400 via-cyan-400 to-blue-500 opacity-70 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-cyan-700 to-indigo-500 text-white">
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-400/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-indigo-300/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-300/20 rounded-full animate-ping"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                <Code className="w-12 h-12 text-cyan-300" />
              </div>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Building Scalable React Applications
            </h1>
            <p className="text-xl lg:text-2xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Master the art of building React apps that grow with your business
              - from architecture to deployment
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => jumpToSection("tldr")}
                className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
              >
                Get Started
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg font-semibold hover:bg-white/20 transition-all duration-200"
              >
                {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-4 lg:gap-12">
          {/* TL;DR Sidebar */}
          <div className="lg:col-span-1 mb-12 lg:mb-0">
            <div
              id="tldr"
              className="sticky top-24 bg-white/80 dark:bg-slate-800/80 backdrop-blur border dark:border-slate-700 px-6 py-6 rounded-xl shadow-xl max-w-xs"
            >
              <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
                TL;DR - Quick Takeaways
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Feature-based architecture scales better than file-type
                    grouping
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Choose state management based on app complexity and team
                    size
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Code splitting and lazy loading are essential for
                    performance at scale
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Testing and monitoring become critical as complexity grows
                  </span>
                </li>
              </ul>

              <div className="mt-6 pt-4 border-t dark:border-slate-600">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
                  Jump to Section:
                </h4>
                <nav className="space-y-1">
                  {[
                    { id: "introduction", label: "Introduction" },
                    { id: "architecture", label: "Architecture" },
                    { id: "components", label: "Components" },
                    { id: "state", label: "State Management" },
                    { id: "performance", label: "Performance" },
                    { id: "security", label: "Security" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => jumpToSection(item.id)}
                      className="block w-full text-left text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="prose prose-lg dark:prose-invert max-w-none">
              {/* Introduction */}
              <section id="introduction" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                  Why Scalability Matters in 2025
                </h2>
                <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 p-6 rounded-xl mb-8">
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    As React applications grow from simple prototypes to complex
                    enterprise systems, maintaining performance, developer
                    productivity, and code quality becomes increasingly
                    challenging. In 2025, with teams distributed globally and
                    user expectations higher than ever, scalable architecture
                    isn't just nice-to-have—it's essential.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    This guide covers battle-tested patterns and modern tools
                    that help your React applications grow gracefully, from your
                    first component to applications serving millions of users.
                  </p>
                </div>
              </section>

              {/* Architecture Patterns */}
              <section id="architecture" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                  <BookOpen className="w-8 h-8 text-indigo-500" />
                  Architecture Patterns
                </h2>

                <div className="bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    Feature-Based Structure
                  </h3>

                  <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-6">
                    <pre className="text-sm overflow-x-auto">
                      <code className="text-gray-800 dark:text-gray-200">{`src/
├── features/
│   ├── authentication/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── types/
│   ├── dashboard/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── utils/
│   └── profile/
├── shared/
│   ├── components/
│   ├── hooks/
│   ├── utils/
│   └── types/
└── app/
    ├── layout.tsx
    └── page.tsx`}</code>
                    </pre>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Feature-based organization keeps related code together,
                    making it easier to maintain and modify specific
                    functionality without affecting other parts of the
                    application.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                      ✅ Better encapsulation
                    </span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                      ✅ Easier testing
                    </span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                      ✅ Team scalability
                    </span>
                  </div>
                </div>
              </section>

              {/* Component-Driven Development */}
              <section id="components" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                  <Users className="w-8 h-8 text-cyan-500" />
                  Component-Driven Development
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-xl p-6">
                    <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
                      Reusable Button Component
                    </h4>

                    <button
                      onClick={() => toggleCodeExpansion("button")}
                      className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 mb-3"
                    >
                      {expandedCode.button ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                      View Code
                    </button>

                    {expandedCode.button && (
                      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg transition-all duration-300">
                        <pre className="text-sm overflow-x-auto">
                          <code className="text-gray-800 dark:text-gray-200">{`interface ButtonProps {
  variant: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  children,
  onClick,
  disabled
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-all';
  const variants = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900'
  };
  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };
  
  return (
    <button
      className={\`\${baseClasses} \${variants[variant]} \${sizes[size]}\`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};`}</code>
                        </pre>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Component Examples
                    </h4>
                    <div className="space-y-3">
                      <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all">
                        Primary Button
                      </button>
                      <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 font-semibold rounded-lg transition-all">
                        Secondary Button
                      </button>
                      <button className="px-6 py-3 text-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all">
                        Large Button
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* State Management */}
              <section id="state" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                  <Zap className="w-8 h-8 text-yellow-500" />
                  State Management Strategies
                </h2>

                <div className="bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    Choosing the Right Tool
                  </h3>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b dark:border-slate-700">
                          <th className="py-3 px-4 font-semibold text-gray-900 dark:text-white">
                            Tool
                          </th>
                          <th className="py-3 px-4 font-semibold text-gray-900 dark:text-white">
                            Best For
                          </th>
                          <th className="py-3 px-4 font-semibold text-gray-900 dark:text-white">
                            Learning Curve
                          </th>
                          <th className="py-3 px-4 font-semibold text-gray-900 dark:text-white">
                            Bundle Size
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600 dark:text-gray-400">
                        <tr className="border-b dark:border-slate-700">
                          <td className="py-3 px-4 font-medium">React State</td>
                          <td className="py-3 px-4">Simple, local state</td>
                          <td className="py-3 px-4 text-green-600">Easy</td>
                          <td className="py-3 px-4 text-green-600">0kb</td>
                        </tr>
                        <tr className="border-b dark:border-slate-700">
                          <td className="py-3 px-4 font-medium">Context API</td>
                          <td className="py-3 px-4">Medium complexity</td>
                          <td className="py-3 px-4 text-yellow-600">Medium</td>
                          <td className="py-3 px-4 text-green-600">0kb</td>
                        </tr>
                        <tr className="border-b dark:border-slate-700">
                          <td className="py-3 px-4 font-medium">Zustand</td>
                          <td className="py-3 px-4">Most applications</td>
                          <td className="py-3 px-4 text-green-600">Easy</td>
                          <td className="py-3 px-4 text-green-600">2.8kb</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium">
                            Redux Toolkit
                          </td>
                          <td className="py-3 px-4">Complex, enterprise</td>
                          <td className="py-3 px-4 text-red-600">Hard</td>
                          <td className="py-3 px-4 text-yellow-600">47kb</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-800 p-6 rounded-xl">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                    💡 Pro Tip
                  </h4>
                  <p className="text-yellow-700 dark:text-yellow-300">
                    Start with React's built-in state management and Context
                    API. Only introduce external tools like Zustand or Redux
                    Toolkit when you have specific needs like time-travel
                    debugging, complex async flows, or team scalability
                    requirements.
                  </p>
                </div>
              </section>

              {/* Performance Optimization */}
              <section id="performance" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                  <Zap className="w-8 h-8 text-green-500" />
                  Performance Optimization
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-xl p-6">
                    <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
                      Code Splitting with React.lazy
                    </h4>

                    <button
                      onClick={() => toggleCodeExpansion("lazy")}
                      className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 mb-3"
                    >
                      {expandedCode.lazy ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                      View Implementation
                    </button>

                    {expandedCode.lazy && (
                      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg transition-all duration-300">
                        <pre className="text-sm overflow-x-auto">
                          <code className="text-gray-800 dark:text-gray-200">{`import { lazy, Suspense } from 'react';

const LazyDashboard = lazy(() => 
  import('./Dashboard')
);

const LazyProfile = lazy(() => 
  import('./Profile')
);

function App() {
  return (
    <Suspense fallback={
      <div className="animate-pulse">
        Loading...
      </div>
    }>
      <Routes>
        <Route path="/dashboard" 
               element={<LazyDashboard />} />
        <Route path="/profile" 
               element={<LazyProfile />} />
      </Routes>
    </Suspense>
  );
}`}</code>
                        </pre>
                      </div>
                    )}

                    <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <p className="text-sm text-green-700 dark:text-green-300">
                        ⚡ Reduces initial bundle size by ~40-60% in typical
                        applications
                      </p>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-xl p-6">
                    <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
                      Memoization Strategies
                    </h4>

                    <div className="space-y-3">
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <code className="text-sm text-blue-800 dark:text-blue-200">
                          React.memo()
                        </code>
                        <p className="text-xs text-blue-600 dark:text-blue-300 mt-1">
                          Prevents unnecessary re-renders
                        </p>
                      </div>

                      <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                        <code className="text-sm text-purple-800 dark:text-purple-200">
                          useMemo()
                        </code>
                        <p className="text-xs text-purple-600 dark:text-purple-300 mt-1">
                          Memoizes expensive calculations
                        </p>
                      </div>

                      <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <code className="text-sm text-green-800 dark:text-green-200">
                          useCallback()
                        </code>
                        <p className="text-xs text-green-600 dark:text-green-300 mt-1">
                          Memoizes function references
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6 rounded-xl">
                  <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                    ⚠️ Performance Anti-Patterns
                  </h4>
                  <ul className="text-red-700 dark:text-red-300 space-y-1 text-sm">
                    <li>• Overusing React.memo without profiling</li>
                    <li>• Creating objects/functions in render methods</li>
                    <li>• Large Context providers without splitting</li>
                    <li>• Not implementing virtualization for large lists</li>
                  </ul>
                </div>
              </section>

              {/* Security */}
              <section id="security" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                  <Shield className="w-8 h-8 text-red-500" />
                  Security & Compliance
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-red-600 dark:text-red-400" />
                    </div>
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                      XSS Protection
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Sanitize user inputs and use Content Security Policy
                      headers
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                      Authentication
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Implement secure JWT/OAuth flows with proper token storage
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Monitor className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                      GDPR Compliance
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Handle user data with consent management and data
                      portability
                    </p>
                  </div>
                </div>
              </section>

              {/* Conclusion & CTA */}
              <section className="mb-16">
                <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-2xl p-8 text-center">
                  <h2 className="text-3xl font-bold mb-4">
                    Ready to Scale Your React App?
                  </h2>
                  <p className="text-xl text-indigo-100 mb-6 max-w-2xl mx-auto">
                    Download our comprehensive React Architecture Starter Kit
                    with all the patterns and examples from this guide.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200">
                      Download Starter Kit
                    </button>
                    <button className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg font-semibold hover:bg-white/20 transition-all duration-200">
                      View on GitHub
                    </button>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                  {[
                    {
                      q: "When should I choose Redux Toolkit over Zustand?",
                      a: "Choose Redux Toolkit for complex applications with extensive async logic, time-travel debugging needs, or large teams requiring strict patterns. Zustand is better for most applications due to its simplicity and smaller bundle size.",
                    },
                    {
                      q: "How do I implement code splitting effectively?",
                      a: "Start with route-based splitting using React.lazy(), then move to component-based splitting for heavy components. Always wrap with Suspense and provide meaningful loading states.",
                    },
                    {
                      q: "What's the best way to structure tests in large React apps?",
                      a: "Use a feature-based test structure that mirrors your code organization. Focus on integration tests over unit tests, and use React Testing Library for component testing with realistic user interactions.",
                    },
                    {
                      q: "How do I handle performance monitoring in production?",
                      a: "Implement Core Web Vitals monitoring with tools like Lighthouse CI, use error tracking with Sentry, and set up performance budgets in your build process to catch regressions early.",
                    },
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-xl p-6"
                    >
                      <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">
                        {faq.q}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Author & Metadata */}
              <section className="mb-16">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-700 rounded-xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      TP
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        Tuhin Pal
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Senior React Developer & Architecture Consultant
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        Published on August 5, 2025
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Tuhin is a React specialist with 8+ years of experience
                    building scalable web applications. He has helped dozens of
                    startups and enterprises optimize their React architectures
                    for performance and maintainability.
                  </p>

                  <div className="flex gap-4">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Follow on LinkedIn
                    </button>
                    <button className="px-4 py-2 bg-gray-800 dark:bg-gray-600 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-500 transition-colors">
                      View GitHub
                    </button>
                  </div>
                </div>
              </section>

              {/* Related Articles */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                  Related Articles
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Cloud Migration Strategies for Modern Web Apps",
                      excerpt:
                        "Complete guide to migrating React applications to cloud platforms...",
                      readTime: "12 min read",
                      category: "DevOps",
                    },
                    {
                      title: "AI-Powered Development Tools for React Teams",
                      excerpt:
                        "How artificial intelligence is transforming the React development workflow...",
                      readTime: "8 min read",
                      category: "AI/ML",
                    },
                    {
                      title: "Next.js 15: Complete Performance Guide",
                      excerpt:
                        "Optimize your Next.js applications for maximum performance and SEO...",
                      readTime: "15 min read",
                      category: "Performance",
                    },
                  ].map((article, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer group"
                    >
                      <div className="mb-3">
                        <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-xs">
                          {article.category}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                        {article.excerpt}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        {article.readTime}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Newsletter Signup */}
              <section className="mb-16">
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-800 rounded-2xl p-8 text-center">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    Stay Updated
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                    Get the latest React best practices, architecture patterns,
                    and performance tips delivered to your inbox weekly.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                    />
                    <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors whitespace-nowrap">
                      Subscribe
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-3">
                    No spam. Unsubscribe anytime. 5,000+ developers already
                    subscribed.
                  </p>
                </div>
              </section>

              {/* Social Sharing */}
              <section className="mb-16">
                <div className="border-t border-b dark:border-slate-700 py-8">
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                        Found this helpful?
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Share it with your team
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                        📘 LinkedIn
                      </button>
                      <button className="px-4 py-2 bg-black dark:bg-slate-600 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-slate-500 transition-colors flex items-center gap-2">
                        🐦 Twitter
                      </button>
                      <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors flex items-center gap-2">
                        📧 Copy Link
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Comments Section */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                  Discussion
                </h2>

                <div className="bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-xl p-8">
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      Join the Discussion
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Share your thoughts, ask questions, or discuss React
                      architecture patterns with the community.
                    </p>
                    <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                      Start Discussion
                    </button>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </div>
      </div>

      {/* Footer */}

      {/* Scroll to Top Button */}
      {scrollProgress > 20 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center z-50"
        >
          ↑
        </button>
      )}
    </div>
  );
}
