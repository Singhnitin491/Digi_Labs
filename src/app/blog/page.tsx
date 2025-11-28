import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import Link from "next/link"
import { Calendar, User } from "lucide-react"

export default function BlogPage() {
  const posts = [
    {
      id: "social-media-strategy",
      title: "5 Social Media Strategies That Generate Real Revenue",
      excerpt:
        "Learn the proven tactics we use to turn social followers into paying customers. These strategies have generated over $10M in revenue for our clients.",
      category: "Social Media",
      author: "Sarah Chen",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      featured: true,
    },
    {
      id: "google-ads-roi",
      title: "How to Get 3x ROI from Your Google Ads Campaigns",
      excerpt:
        "Stop wasting money on ineffective Google Ads. Our framework has increased ROI by 300% for 45+ businesses. Here's exactly how we do it.",
      category: "Paid Ads",
      author: "Marcus Johnson",
      date: "Dec 12, 2024",
      readTime: "6 min read",
      featured: true,
    },
    {
      id: "seo-mistakes",
      title: "The 7 Most Expensive SEO Mistakes You're Making Right Now",
      excerpt:
        "These common SEO mistakes are costing you thousands in lost revenue. Find out if you're making any of them and how to fix them immediately.",
      category: "SEO",
      author: "Alex Rivera",
      date: "Dec 10, 2024",
      readTime: "7 min read",
      featured: true,
    },
    {
      id: "sales-funnels",
      title: "The Anatomy of a High-Converting Sales Funnel",
      excerpt:
        "A breakdown of the exact funnel structure that converts 12%+ of visitors. Complete with template, examples, and implementation checklist.",
      category: "Conversion Optimization",
      author: "Emma Wilson",
      date: "Dec 8, 2024",
      readTime: "10 min read",
      featured: false,
    },
    {
      id: "content-strategy",
      title: "Content Strategy That Positions You as a Market Leader",
      excerpt:
        "Discover how to create content that builds authority, attracts ideal clients, and sells your offer. Real examples from 6-figure coaches.",
      category: "Content",
      author: "James Smith",
      date: "Dec 5, 2024",
      readTime: "9 min read",
      featured: false,
    },
    {
      id: "facebook-ads",
      title: "Facebook Ads Targeting That Gets Sub-$2 Cost Per Lead",
      excerpt:
        "The exact targeting strategy we use to get qualified leads for under $2. Works for service providers, coaches, and e-commerce brands.",
      category: "Paid Ads",
      author: "David Park",
      date: "Dec 1, 2024",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: "brand-positioning",
      title: "How to Differentiate Your Brand in a Crowded Market",
      excerpt:
        "Stand out from competitors with this proven positioning framework. We use this for all our premium clients to command higher prices.",
      category: "Branding",
      author: "Lisa Thompson",
      date: "Nov 28, 2024",
      readTime: "8 min read",
      featured: false,
    },
    {
      id: "linkedin-strategy",
      title: "LinkedIn Marketing for B2B Companies: Complete Guide",
      excerpt:
        "Step-by-step guide to building a LinkedIn presence that attracts qualified leads. Case studies included from companies generating $1M+ pipelines.",
      category: "Social Media",
      author: "Michael Garcia",
      date: "Nov 25, 2024",
      readTime: "12 min read",
      featured: false,
    },
  ]

  const categories = ["All", "Social Media", "Paid Ads", "SEO", "Conversion Optimization", "Content", "Branding"]

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 text-balance">
              Marketing Insights & Strategies
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Expert tips, strategies, and case studies to help you grow your business faster. Updated weekly.
            </p>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Articles</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {posts
                .filter((p) => p.featured)
                .map((post, idx) => (
                  <Link key={post.id} href={`/blog/${post.id}`}>
                    <div className="glass p-8 hover:shadow-xl transition-all duration-300 h-full cursor-pointer group">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full">
                          {post.category}
                        </span>
                        {idx === 0 && (
                          <span className="px-3 py-1 bg-red-100 text-red-600 text-sm font-semibold rounded-full">
                            TRENDING
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 mb-6">{post.excerpt}</p>

                      <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <User size={16} />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            {post.date}
                          </div>
                        </div>
                        <div className="text-sm text-gray-600">{post.readTime}</div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* All Articles */}
        <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">All Articles</h2>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${
                    cat === "All"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-400 hover:shadow-lg transition-all duration-300 h-full cursor-pointer group">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full mb-4">
                      {post.category}
                    </span>

                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>

                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="btn-secondary">Load More Articles</button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Get Weekly Marketing Tips</h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our newsletter and get proven strategies delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300"
              />
              <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-full hover:shadow-lg transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer />
    </>
  )
}
