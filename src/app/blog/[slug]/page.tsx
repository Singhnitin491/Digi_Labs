import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import Link from "next/link"
import { Calendar, User, Share2, ArrowLeft } from "lucide-react"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = {
    title: "5 Social Media Strategies That Generate Real Revenue",
    author: "Sarah Chen",
    date: "Dec 15, 2024",
    category: "Social Media",
    readTime: "8 min read",
    excerpt:
      "Learn the proven tactics we use to turn social followers into paying customers. These strategies have generated over $10M in revenue for our clients.",
  }

  const content = [
    {
      type: "paragraph",
      text: "Social media has evolved from a platform for sharing memes to a legitimate revenue-generating channel. In 2024, businesses that master social media marketing are seeing incredible returns on investment.",
    },
    {
      type: "heading",
      text: "1. The Engagement-First Approach",
    },
    {
      type: "paragraph",
      text: "Most businesses focus on selling immediately on social media. This is a mistake. The key is to build genuine engagement first, then monetize later. We encourage clients to focus on creating valuable content that solves problems before ever asking for a sale.",
    },
    {
      type: "paragraph",
      text: "When you focus on engagement, your algorithm position improves, more people see your content, and when you do ask for a sale, people are already familiar with your brand and trust you.",
    },
    {
      type: "heading",
      text: "2. Community Building Strategy",
    },
    {
      type: "paragraph",
      text: "Building a community around your brand creates loyal customers who buy repeatedly and refer others. This is 10x more valuable than one-time buyers.",
    },
    {
      type: "paragraph",
      text: "We implement community-building strategies through exclusive groups, engagement challenges, and member-only content. This transforms followers into advocates.",
    },
    {
      type: "heading",
      text: "3. Value-Stacking Content Formula",
    },
    {
      type: "paragraph",
      text: "The content formula we use is: 80% value, 15% social proof, 5% direct selling. This ratio maximizes engagement while building trust and credibility.",
    },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Article Header */}
        <article className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-8 hover:gap-4 transition-all"
            >
              <ArrowLeft size={18} />
              Back to Blog
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 text-balance">{post.title}</h1>

            <p className="text-xl text-gray-600 mb-8">{post.excerpt}</p>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-6 py-6 border-t border-b border-gray-200 text-gray-600">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{post.date}</span>
              </div>
              <span>{post.readTime}</span>
            </div>
          </div>
        </article>

        {/* Article Content */}
        <article className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {content.map((block, idx) => {
                if (block.type === "heading") {
                  return (
                    <h2 key={idx} className="text-3xl font-bold text-gray-900 mt-12 mb-6 pt-6">
                      {block.text}
                    </h2>
                  )
                }
                return (
                  <p key={idx} className="text-gray-700 mb-6 leading-relaxed">
                    {block.text}
                  </p>
                )
              })}
            </div>

            {/* CTA Box */}
            <div className="glass p-8 mt-12 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Implement These Strategies?</h3>
              <p className="text-gray-600 mb-6">
                Let our experts build a custom social media strategy for your business.
              </p>
              <Link href="/contact" className="btn-primary">
                Book Free Strategy Call
              </Link>
            </div>

            {/* Share Buttons */}
            <div className="mt-12 py-8 border-t border-gray-200 flex items-center justify-center gap-4">
              <span className="text-gray-600 font-semibold">Share this article:</span>
              <button className="p-3 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors">
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Related Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Instagram Growth Strategy for 2025", category: "Social Media" },
                { title: "How to Scale Your Paid Ads Budget", category: "Paid Ads" },
                { title: "Building Your Personal Brand on LinkedIn", category: "Social Media" },
              ].map((related, idx) => (
                <Link key={idx} href="/blog">
                  <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <span className="text-xs font-semibold text-blue-600 uppercase">{related.category}</span>
                    <h3 className="text-lg font-bold text-gray-900 mt-3 group-hover:text-blue-600 transition-colors">
                      {related.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer />
    </>
  )
}
