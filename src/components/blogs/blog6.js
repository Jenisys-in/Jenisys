"use client";

import Footer from "../Footer";
import { useCalendar } from "@/contexts/CalendarContext";
import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronRight,
  Copy,
  Check,
  Code,
  Shield,
  Zap,
  Globe,
  Database,
  Lock,
  BookOpen,
  ArrowRight,
  ExternalLink,
  Play,
  Pause,
} from "lucide-react";

export default function APIDesignBlog() {
  const { openCalendar } = useCalendar();
  const [activeSection, setActiveSection] = useState("");
  const [copiedCode, setCopiedCode] = useState("");
  const [showDecisionTree, setShowDecisionTree] = useState(false);
  const [animationPlaying, setAnimationPlaying] = useState(true);

  // Smooth scroll to section
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Copy code to clipboard
  const copyCode = async (code, id) => {
    await navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iNyIgY3k9IjciIHI9IjciLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              API Design Principles for Modern Web Applications
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Build scalable, secure, and developer-friendly APIs with proven
              patterns and best practices
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="px-4 py-2 bg-blue-600/20 rounded-full text-blue-200 backdrop-blur-sm">
                REST
              </span>
              <span className="px-4 py-2 bg-green-600/20 rounded-full text-green-200 backdrop-blur-sm">
                GraphQL
              </span>
              <span className="px-4 py-2 bg-purple-600/20 rounded-full text-purple-200 backdrop-blur-sm">
                JWT/OAuth
              </span>
              <span className="px-4 py-2 bg-orange-600/20 rounded-full text-orange-200 backdrop-blur-sm">
                OpenAPI
              </span>
            </div>
          </div>
        </div>

        {/* Animated API Visualization */}
        <div className="absolute right-0 bottom-0 opacity-20">
          <div className="w-96 h-96 relative">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-4 h-4 bg-blue-400 rounded-full ${
                  animationPlaying ? "animate-pulse" : ""
                }`}
                style={{
                  left: `${20 + i * 60}px`,
                  top: `${150 + Math.sin(i) * 50}px`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* TL;DR Executive Summary */}
      <section className="bg-white py-12 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-slate-800">
              TL;DR - Key Takeaways
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">
                    Design APIs with developer experience as the primary focus -
                    intuitive naming, consistent patterns, and comprehensive
                    documentation
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">
                    Choose REST for simple, cacheable APIs; GraphQL for complex
                    data relationships and mobile applications
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">
                    Implement robust authentication (JWT for stateless, OAuth
                    for third-party) and always use HTTPS
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">
                    Plan for versioning from day one and use OpenAPI
                    specifications for contract-first development
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="mt-8 p-4 bg-slate-50 rounded-lg">
              <h3 className="font-semibold mb-3 text-slate-800">
                Jump to Section:
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: "rest-vs-graphql", title: "REST vs GraphQL" },
                  { id: "authentication", title: "Authentication" },
                  { id: "versioning", title: "Versioning" },
                  { id: "examples", title: "Code Examples" },
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="px-3 py-1 bg-white border border-slate-200 rounded text-sm text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-colors"
                  >
                    {link.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why API Design Matters */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-slate-800">
              Why API Design Matters in 2025
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-3 text-slate-800">
                  Developer Experience
                </h3>
                <p className="text-slate-600">
                  Poor API design costs developers 23% more integration time and
                  reduces adoption by 40%
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-3 text-slate-800">
                  Performance Impact
                </h3>
                <p className="text-slate-600">
                  Well-designed APIs reduce server load by 35% and improve
                  response times by up to 50%
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-3 text-slate-800">
                  Scalability
                </h3>
                <p className="text-slate-600">
                  Modern APIs must handle 10x more requests than 5 years ago
                  while maintaining sub-200ms response times
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REST vs GraphQL Comparison */}
      <section id="rest-vs-graphql" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-slate-800">
              REST vs GraphQL in 2025
            </h2>

            {/* Decision Tree Widget */}
            <div className="mb-12">
              <button
                onClick={() => setShowDecisionTree(!showDecisionTree)}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all"
              >
                <span>Interactive Decision Tree</span>
                {showDecisionTree ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>

              {showDecisionTree && (
                <div className="mt-4 p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg border border-slate-200">
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm font-medium text-slate-700">
                        Do you need flexible queries?
                      </div>
                    </div>
                    <div className="flex justify-center space-x-8">
                      <div className="text-center">
                        <div className="px-4 py-2 bg-green-100 text-green-800 rounded-lg">
                          Yes → GraphQL
                        </div>
                        <p className="text-sm text-slate-600 mt-2">
                          Complex relationships, mobile apps
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg">
                          No → REST
                        </div>
                        <p className="text-sm text-slate-600 mt-2">
                          Simple CRUD, caching important
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-sm border border-slate-200">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="text-left p-4 font-semibold text-slate-800 border-b border-slate-200">
                      Factor
                    </th>
                    <th className="text-left p-4 font-semibold text-slate-800 border-b border-slate-200">
                      REST
                    </th>
                    <th className="text-left p-4 font-semibold text-slate-800 border-b border-slate-200">
                      GraphQL
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "Query Flexibility",
                      "Fixed endpoints",
                      "Single endpoint, flexible queries",
                    ],
                    [
                      "Caching",
                      "HTTP caching built-in",
                      "Complex caching strategies needed",
                    ],
                    [
                      "Learning Curve",
                      "Familiar HTTP methods",
                      "New query language to learn",
                    ],
                    ["Over-fetching", "Common issue", "Eliminated by design"],
                    [
                      "Real-time",
                      "WebSockets/SSE needed",
                      "Built-in subscriptions",
                    ],
                    [
                      "Best for",
                      "Simple APIs, caching-heavy",
                      "Complex data relationships",
                    ],
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="p-4 font-medium text-slate-700 border-b border-slate-100">
                        {row[0]}
                      </td>
                      <td className="p-4 text-slate-600 border-b border-slate-100">
                        {row[1]}
                      </td>
                      <td className="p-4 text-slate-600 border-b border-slate-100">
                        {row[2]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* RESTful Design Principles */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-slate-800">
              RESTful Design Principles
            </h2>

            <div className="space-y-8">
              {[
                {
                  title: "Client-Server Architecture",
                  description:
                    "Separation of concerns between user interface and data storage",
                  example:
                    "Frontend apps consume API endpoints without knowing server implementation",
                },
                {
                  title: "Stateless Communication",
                  description:
                    "Each request must contain all information needed to understand it",
                  example:
                    "JWT tokens carry user context instead of server-side sessions",
                },
                {
                  title: "Cacheable Responses",
                  description:
                    "Responses should be cacheable to improve network efficiency",
                  example:
                    'Cache-Control headers: "Cache-Control: max-age=3600"',
                },
                {
                  title: "Uniform Interface",
                  description:
                    "Consistent resource identification and manipulation methods",
                  example: "GET /users/123, PUT /users/123, DELETE /users/123",
                },
              ].map((principle, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg p-6 shadow-sm border border-slate-200"
                >
                  <h3 className="text-xl font-semibold mb-3 text-slate-800">
                    {principle.title}
                  </h3>
                  <p className="text-slate-600 mb-3">{principle.description}</p>
                  <div className="bg-slate-50 p-3 rounded text-sm font-mono text-slate-700">
                    {principle.example}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Authentication & Security */}
      <section id="authentication" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-slate-800">
              Authentication & Security
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-slate-800">
                  JWT vs OAuth Comparison
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      method: "JWT",
                      security: "High",
                      complexity: "Medium",
                      useCase: "Stateless auth, microservices",
                    },
                    {
                      method: "OAuth 2.0",
                      security: "Very High",
                      complexity: "High",
                      useCase: "Third-party integrations",
                    },
                    {
                      method: "API Keys",
                      security: "Basic",
                      complexity: "Low",
                      useCase: "Internal services",
                    },
                  ].map((auth, i) => (
                    <div key={i} className="bg-slate-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-slate-800">
                          {auth.method}
                        </span>
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            auth.security === "Very High"
                              ? "bg-green-100 text-green-800"
                              : auth.security === "High"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {auth.security}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600">{auth.useCase}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-lg border border-red-200">
                <div className="flex items-center space-x-2 mb-4">
                  <Shield className="w-5 h-5 text-red-600" />
                  <h3 className="font-semibold text-red-800">
                    Security Essentials
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-red-700">
                  <li>• Always use HTTPS in production</li>
                  <li>• Implement rate limiting (100 req/min per IP)</li>
                  <li>• Validate all input data</li>
                  <li>• Use CORS policies appropriately</li>
                  <li>• Log security events and monitor</li>
                  <li>• Keep dependencies updated</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Versioning Strategies */}
      <section id="versioning" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-slate-800">
              API Versioning Strategies
            </h2>

            <div className="grid gap-6">
              {[
                {
                  strategy: "URI Versioning",
                  implementation: "/api/v1/users",
                  pros: "Clear, cacheable, easy to implement",
                  cons: "URL proliferation, resource duplication",
                  recommended: true,
                },
                {
                  strategy: "Header Versioning",
                  implementation: "API-Version: 1.0",
                  pros: "Clean URLs, flexible",
                  cons: "Complex implementation, harder to test",
                  recommended: false,
                },
                {
                  strategy: "Media Type",
                  implementation: "Accept: application/vnd.api.v1+json",
                  pros: "RESTful, granular control",
                  cons: "Developer confusion, complex",
                  recommended: false,
                },
              ].map((version, i) => (
                <div
                  key={i}
                  className={`bg-white rounded-lg p-6 shadow-sm border-2 ${
                    version.recommended
                      ? "border-green-200 bg-green-50/30"
                      : "border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-slate-800">
                      {version.strategy}
                    </h3>
                    {version.recommended && (
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                        Recommended
                      </span>
                    )}
                  </div>
                  <div className="bg-slate-800 text-green-400 p-3 rounded font-mono text-sm mb-4">
                    {version.implementation}
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-green-600 mb-1">
                        Pros
                      </p>
                      <p className="text-sm text-slate-600">{version.pros}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-red-600 mb-1">
                        Cons
                      </p>
                      <p className="text-sm text-slate-600">{version.cons}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section id="examples" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-slate-800">
              Real-World Implementation Examples
            </h2>

            <div className="space-y-8">
              {/* Next.js API Route */}
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-slate-800">
                    Next.js API Route with Error Handling
                  </h3>
                  <button
                    onClick={() =>
                      copyCode(
                        `// pages/api/users.js
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ 
      error: 'Method not allowed',
      message: 'Only GET requests are supported'
    });
  }
  
  try {
    const { page = 1, limit = 10 } = req.query;
    
    const users = await getUsersPaginated({
      page: parseInt(page),
      limit: Math.min(parseInt(limit), 100) // Max 100 per page
    });
    
    res.status(200).json({
      data: users.items,
      pagination: {
        page: users.page,
        limit: users.limit,
        total: users.total,
        totalPages: Math.ceil(users.total / users.limit),
        hasNext: users.page < Math.ceil(users.total / users.limit),
        hasPrev: users.page > 1
      },
      meta: {
        timestamp: new Date().toISOString(),
        version: '1.0'
      }
    });
  } catch (error) {
    console.error('Users API Error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Unable to fetch users'
    });
  }
}`,
                        "nextjs-api"
                      )
                    }
                    className="flex items-center space-x-1 px-3 py-1 bg-slate-200 hover:bg-slate-300 rounded text-sm transition-colors"
                  >
                    {copiedCode === "nextjs-api" ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    <span>
                      {copiedCode === "nextjs-api" ? "Copied!" : "Copy"}
                    </span>
                  </button>
                </div>
                <pre className="bg-slate-800 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`// pages/api/users.js
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ 
      error: 'Method not allowed',
      message: 'Only GET requests are supported'
    });
  }
  
  try {
    const { page = 1, limit = 10 } = req.query;
    
    const users = await getUsersPaginated({
      page: parseInt(page),
      limit: Math.min(parseInt(limit), 100) // Max 100 per page
    });
    
    res.status(200).json({
      data: users.items,
      pagination: {
        page: users.page,
        limit: users.limit,
        total: users.total,
        totalPages: Math.ceil(users.total / users.limit),
        hasNext: users.page < Math.ceil(users.total / users.limit),
        hasPrev: users.page > 1
      },
      meta: {
        timestamp: new Date().toISOString(),
        version: '1.0'
      }
    });
  } catch (error) {
    console.error('Users API Error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Unable to fetch users'
    });
  }
}`}</code>
                </pre>
              </div>

              {/* TypeScript API Client */}
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-slate-800">
                    TypeScript API Client
                  </h3>
                  <button
                    onClick={() =>
                      copyCode(
                        `interface ApiResponse<T> {
  data: T;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
  meta?: {
    timestamp: string;
    version: string;
  };
  error?: string;
}

class ApiClient {
  private baseURL: string;
  private token?: string;

  constructor(baseURL: string, token?: string) {
    this.baseURL = baseURL;
    this.token = token;
  }

  private async request<T>(
    endpoint: string, 
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = \`\${this.baseURL}\${endpoint}\`;
    
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(this.token && { 'Authorization': \`Bearer \${this.token}\` }),
        ...options.headers
      }
    });

    if (!response.ok) {
      throw new Error(\`API Error: \${response.status}\`);
    }

    return response.json();
  }

  async getUsers(page = 1, limit = 10) {
    return this.request<User[]>(\`/users?page=\${page}&limit=\${limit}\`);
  }

  async createUser(userData: CreateUserRequest) {
    return this.request<User>('/users', {
      method: 'POST',
      body: JSON.stringify(userData)
    });
  }
}`,
                        "typescript-client"
                      )
                    }
                    className="flex items-center space-x-1 px-3 py-1 bg-slate-200 hover:bg-slate-300 rounded text-sm transition-colors"
                  >
                    {copiedCode === "typescript-client" ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    <span>
                      {copiedCode === "typescript-client" ? "Copied!" : "Copy"}
                    </span>
                  </button>
                </div>
                <pre className="bg-slate-800 text-blue-400 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`interface ApiResponse<T> {
  data: T;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
  meta?: {
    timestamp: string;
    version: string;
  };
  error?: string;
}

class ApiClient {
  private baseURL: string;
  private token?: string;

  constructor(baseURL: string, token?: string) {
    this.baseURL = baseURL;
    this.token = token;
  }

  private async request<T>(
    endpoint: string, 
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = \`\${this.baseURL}\${endpoint}\`;
    
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(this.token && { 'Authorization': \`Bearer \${this.token}\` }),
        ...options.headers
      }
    });

    if (!response.ok) {
      throw new Error(\`API Error: \${response.status}\`);
    }

    return response.json();
  }

  async getUsers(page = 1, limit = 10) {
    return this.request<User[]>(\`/users?page=\${page}&limit=\${limit}\`);
  }

  async createUser(userData: CreateUserRequest) {
    return this.request<User>('/users', {
      method: 'POST',
      body: JSON.stringify(userData)
    });
  }
}`}</code>
                </pre>
              </div>

              {/* OpenAPI Specification */}
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-slate-800">
                    OpenAPI 3.1 Specification
                  </h3>
                  <button
                    onClick={() =>
                      copyCode(
                        `openapi: 3.1.0
info:
  title: User Management API
  version: 1.0.0
  description: Modern user management API with authentication
  contact:
    name: API Support
    email: api@example.com
servers:
  - url: https://api.example.com/v1
    description: Production server
  - url: https://staging-api.example.com/v1
    description: Staging server

paths:
  /users:
    get:
      summary: List users with pagination
      parameters:
        - name: page
          in: query
          schema:
            type: integer
            minimum: 1
            default: 1
        - name: limit
          in: query
          schema:
            type: integer
            minimum: 1
            maximum: 100
            default: 10
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
                properties:
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/User'
                  pagination:
                    $ref: '#/components/schemas/Pagination'
        '400':
          $ref: '#/components/responses/BadRequest'
        '401':
          $ref: '#/components/responses/Unauthorized'

components:
  schemas:
    User:
      type: object
      required:
        - id
        - email
        - name
      properties:
        id:
          type: string
          format: uuid
        email:
          type: string
          format: email
        name:
          type: string
          minLength: 1
          maxLength: 100
        createdAt:
          type: string
          format: date-time
    
    Pagination:
      type: object
      properties:
        page:
          type: integer
        limit:
          type: integer
        total:
          type: integer
        totalPages:
          type: integer
        hasNext:
          type: boolean
        hasPrev:
          type: boolean

  responses:
    BadRequest:
      description: Bad request
      content:
        application/json:
          schema:
            type: object
            properties:
              error:
                type: string
              message:
                type: string

  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT

security:
  - bearerAuth: []`,
                        "openapi-spec"
                      )
                    }
                    className="flex items-center space-x-1 px-3 py-1 bg-slate-200 hover:bg-slate-300 rounded text-sm transition-colors"
                  >
                    {copiedCode === "openapi-spec" ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    <span>
                      {copiedCode === "openapi-spec" ? "Copied!" : "Copy"}
                    </span>
                  </button>
                </div>
                <pre className="bg-slate-800 text-yellow-400 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`openapi: 3.1.0
info:
  title: User Management API
  version: 1.0.0
  description: Modern user management API with authentication
  contact:
    name: API Support
    email: api@example.com
servers:
  - url: https://api.example.com/v1
    description: Production server

paths:
  /users:
    get:
      summary: List users with pagination
      parameters:
        - name: page
          in: query
          schema:
            type: integer
            minimum: 1
            default: 1
        - name: limit
          in: query
          schema:
            type: integer
            minimum: 1
            maximum: 100
            default: 10
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
                properties:
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/User'
                  pagination:
                    $ref: '#/components/schemas/Pagination'

components:
  schemas:
    User:
      type: object
      required:
        - id
        - email
        - name
      properties:
        id:
          type: string
          format: uuid
        email:
          type: string
          format: email
        name:
          type: string
          minLength: 1
          maxLength: 100
        createdAt:
          type: string
          format: date-time`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Optimization */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-slate-800">
              Performance Optimization Strategies
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                <h3 className="text-xl font-semibold mb-4 text-slate-800 flex items-center">
                  <Zap className="w-5 h-5 text-green-600 mr-2" />
                  Caching Strategies
                </h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• HTTP caching with proper Cache-Control headers</li>
                  <li>• Redis for session and application-level caching</li>
                  <li>• CDN for static assets and API responses</li>
                  <li>• Browser caching for unchanged resources</li>
                  <li>• Database query result caching</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                <h3 className="text-xl font-semibold mb-4 text-slate-800 flex items-center">
                  <Shield className="w-5 h-5 text-blue-600 mr-2" />
                  Rate Limiting
                </h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• 100 requests per minute per IP address</li>
                  <li>• 1000 requests per hour per authenticated user</li>
                  <li>• Sliding window algorithm for smooth distribution</li>
                  <li>• Different limits for different endpoint types</li>
                  <li>• Graceful degradation with 429 status codes</li>
                </ul>
              </div>
            </div>

            {/* Performance Metrics Widget */}
            <div className="mt-12 bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <h3 className="text-xl font-semibold mb-6 text-slate-800">
                API Performance Benchmarks
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { metric: "Response Time", value: "<200ms", color: "green" },
                  { metric: "Throughput", value: "10k req/s", color: "blue" },
                  { metric: "Error Rate", value: "<0.1%", color: "purple" },
                  { metric: "Availability", value: "99.9%", color: "orange" },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div
                      className={`w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center bg-${item.color}-100`}
                    >
                      <span
                        className={`text-2xl font-bold text-${item.color}-600`}
                      >
                        {item.value}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600">{item.metric}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Error Handling & Monitoring */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-slate-800">
              Error Handling & Monitoring
            </h2>

            <div className="grid gap-8">
              {/* HTTP Status Codes Reference */}
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="text-xl font-semibold mb-4 text-slate-800">
                  HTTP Status Codes Quick Reference
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-green-600 mb-3">
                      Success (2xx)
                    </h4>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>
                        <code className="bg-white px-2 py-1 rounded">200</code>{" "}
                        OK - Request successful
                      </li>
                      <li>
                        <code className="bg-white px-2 py-1 rounded">201</code>{" "}
                        Created - Resource created
                      </li>
                      <li>
                        <code className="bg-white px-2 py-1 rounded">204</code>{" "}
                        No Content - Success, no data
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-600 mb-3">
                      Client Errors (4xx)
                    </h4>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>
                        <code className="bg-white px-2 py-1 rounded">400</code>{" "}
                        Bad Request - Invalid request
                      </li>
                      <li>
                        <code className="bg-white px-2 py-1 rounded">401</code>{" "}
                        Unauthorized - Authentication required
                      </li>
                      <li>
                        <code className="bg-white px-2 py-1 rounded">404</code>{" "}
                        Not Found - Resource missing
                      </li>
                      <li>
                        <code className="bg-white px-2 py-1 rounded">429</code>{" "}
                        Too Many Requests - Rate limited
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Error Response Format */}
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="text-xl font-semibold mb-4 text-slate-800">
                  Standardized Error Response Format
                </h3>
                <pre className="bg-slate-800 text-red-400 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request parameters",
    "details": [
      {
        "field": "email",
        "message": "Must be a valid email address"
      },
      {
        "field": "age",
        "message": "Must be between 18 and 120"
      }
    ],
    "timestamp": "2025-08-05T10:30:00Z",
    "requestId": "req_123456789"
  }
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Framework */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-slate-800">
              Implementation Framework
            </h2>

            <div className="space-y-6">
              {[
                {
                  phase: "Phase 1: Planning & Design",
                  duration: "2-3 weeks",
                  tasks: [
                    "Define API requirements and use cases",
                    "Choose architecture (REST vs GraphQL)",
                    "Design resource models and endpoints",
                    "Create OpenAPI specification",
                    "Plan authentication and security",
                  ],
                },
                {
                  phase: "Phase 2: Core Development",
                  duration: "4-6 weeks",
                  tasks: [
                    "Implement basic CRUD operations",
                    "Add authentication and authorization",
                    "Implement error handling and validation",
                    "Add pagination and filtering",
                    "Set up basic monitoring and logging",
                  ],
                },
                {
                  phase: "Phase 3: Optimization & Testing",
                  duration: "2-3 weeks",
                  tasks: [
                    "Implement caching strategies",
                    "Add rate limiting and security measures",
                    "Write comprehensive tests",
                    "Performance optimization and profiling",
                    "Documentation and developer portal",
                  ],
                },
                {
                  phase: "Phase 4: Deployment & Monitoring",
                  duration: "1-2 weeks",
                  tasks: [
                    "Set up production environment",
                    "Configure monitoring and alerting",
                    "Implement CI/CD pipeline",
                    "Load testing and capacity planning",
                    "Launch and gather feedback",
                  ],
                },
              ].map((phase, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg p-6 shadow-sm border border-slate-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-slate-800">
                      {phase.phase}
                    </h3>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                      {phase.duration}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {phase.tasks.map((task, j) => (
                      <li
                        key={j}
                        className="flex items-start space-x-2 text-slate-600"
                      >
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-slate-800">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "Should I use REST or GraphQL for my new API?",
                  a: "Choose REST for simple CRUD operations, caching-heavy applications, and when you need broad tooling support. Choose GraphQL for complex data relationships, mobile applications with bandwidth constraints, or when clients need flexible queries.",
                },
                {
                  q: "What's the best way to version my API?",
                  a: "URI versioning (/api/v1/) is the most popular and practical approach. It's clear, cacheable, and easy to implement. Reserve header or media-type versioning for more complex scenarios requiring granular control.",
                },
                {
                  q: "How do I handle authentication in modern APIs?",
                  a: "Use JWT tokens for stateless authentication in microservices architectures. Implement OAuth 2.0 for third-party integrations. Always use HTTPS, implement proper token expiration, and consider refresh token patterns for long-lived applications.",
                },
                {
                  q: "What are the most important performance optimizations?",
                  a: "Implement proper HTTP caching with Cache-Control headers, use pagination for large datasets, add rate limiting, enable gzip compression, and consider CDN for static content. Monitor response times and optimize database queries.",
                },
                {
                  q: "How do I ensure my API is secure?",
                  a: "Always use HTTPS, validate all inputs, implement rate limiting, use proper authentication, log security events, keep dependencies updated, and follow OWASP API Security guidelines. Regular security audits are essential.",
                },
                {
                  q: "What tools should I use for API documentation?",
                  a: "OpenAPI (Swagger) is the industry standard for API documentation. Tools like Swagger UI, Redoc, or Stoplight provide interactive documentation. Consider contract-first development where you write the specification before the code.",
                },
              ].map((faq, i) => (
                <FAQItem key={i} faq={faq} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Build Your Next API?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get our comprehensive API Design Checklist and start building
              better APIs today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span>Download API Checklist</span>
              </button>
              <button
                onClick={openCalendar}
                className="px-8 py-4 border border-white/30 font-semibold rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center space-x-2"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Schedule Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Author & Meta */}

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-slate-800">{faq.q}</h3>
          {isOpen ? (
            <ChevronDown className="w-5 h-5 text-slate-400" />
          ) : (
            <ChevronRight className="w-5 h-5 text-slate-400" />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-slate-600 leading-relaxed">{faq.a}</p>
        </div>
      )}
    </div>
  );
};
