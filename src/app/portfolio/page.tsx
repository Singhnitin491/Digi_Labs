import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import Link from "next/link"
import { Star, Download, ArrowRight } from "lucide-react"

export default function PortfolioPage() {
  const caseStudies = [
    {
      id: 1,
      client: "Tech SaaS Startup",
      service: "Google Ads & SEO",
      metric: "+245% Lead Growth",
      description: "Helped a B2B SaaS company scale from $50K to $150K MRR in 6 months",
      beforeAfter: {
        before: { leads: "50/month", cac: "$450" },
        after: { leads: "172/month", cac: "$285" },
      },
      quote: "DigitalGrowth Labs transformed our marketing. Their data-driven approach got us real results fast.",
      author: "Sarah Chen",
      role: "CEO",
    },
    {
      id: 2,
      client: "E-Commerce Brand",
      service: "Social Media + Facebook Ads",
      metric: "+320% Revenue Growth",
      description: "Scaled online store revenue and built a thriving community of loyal customers",
      beforeAfter: {
        before: { revenue: "$15K/month", roi: "2.1x" },
        after: { revenue: "$63K/month", roi: "5.8x" },
      },
      quote: "Their team knows e-commerce. They grew our revenue while actually lowering our ad costs.",
      author: "Marcus Johnson",
      role: "Founder",
    },
    {
      id: 3,
      client: "Life Coach",
      service: "Personal Branding & Social Media",
      metric: "+180 Client Acquisitions",
      description: "Built personal brand authority that led to 6-figure coaching business",
      beforeAfter: {
        before: { followers: "2K", monthlyClients: "3" },
        after: { followers: "45K", monthlyClients: "25" },
      },
      quote: "They handled everything from strategy to execution. My business growth has been incredible.",
      author: "Alex Rivera",
      role: "Life Coach",
    },
    {
      id: 4,
      client: "Digital Agency",
      service: "Lead Generation Funnels",
      metric: "+450% Qualified Leads",
      description: "Created high-converting funnels that became their main lead source",
      beforeAfter: {
        before: { leads: "20/month", quality: "30%" },
        after: { leads: "110/month", quality: "78%" },
      },
      quote: "Professional, results-driven, and communicative. Best marketing investment we've made.",
      author: "Emma Wilson",
      role: "Founder",
    },
    {
      id: 5,
      client: "Fitness Brand",
      service: "Instagram & TikTok Strategy",
      metric: "+2.3M Impressions/Month",
      description: "Built viral social presence and turned followers into paying members",
      beforeAfter: {
        before: { members: "150", engagement: "2.1%" },
        after: { members: "890", engagement: "8.4%" },
      },
      quote: "They understand the fitness industry and how to sell high-ticket offers.",
      author: "James Smith",
      role: "Founder",
    },
    {
      id: 6,
      client: "Consulting Firm",
      service: "LinkedIn Marketing",
      metric: "+$2.8M Pipeline",
      description: "Positioned founder as thought leader and generated enterprise-level deals",
      beforeAfter: {
        before: { connections: "5K", monthlyLeads: "2" },
        after: { connections: "28K", monthlyLeads: "12" },
      },
      quote: "Outstanding strategy and execution. They made me a visible authority in my industry.",
      author: "David Park",
      role: "CEO",
    },
  ]

  const testimonials = [
    {
      text: "DigitalGrowth Labs took our scattered marketing efforts and turned them into a cohesive, high-performing system. The results speak for themselves.",
      author: "Lisa Thompson",
      role: "Marketing Director",
      company: "TechFlow Inc",
      rating: 5,
    },
    {
      text: "Working with this team has been a game-changer for our business. They're responsive, strategic, and genuinely invested in our success.",
      author: "Robert Chen",
      role: "Founder",
      company: "GrowthScale",
      rating: 5,
    },
    {
      text: "We tried other agencies, but DigitalGrowth Labs is on a different level. Professional, transparent, and deliver measurable ROI consistently.",
      author: "Jessica Martinez",
      role: "CEO",
      company: "Elite Coaching",
      rating: 5,
    },
    {
      text: "The level of customization and attention to detail is unmatched. They truly understand our business and create strategies that actually work.",
      author: "Michael Garcia",
      role: "Founder",
      company: "Digital Ventures",
      rating: 5,
    },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-900 text-gray-100">

        {/* Hero Section */}
        <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-teal-400 mb-6 text-balance">Case Studies & Results</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Real results from real clients. See how {"we've"} helped businesses scale with proven strategies that
              actually move the needle.
            </p>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="bg-gray-800 border border-gray-700 p-8 rounded-2xl hover:shadow-xl transition-all duration-300"
                >
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-teal-400">{study.client}</h3>
                        <p className="text-sm text-gray-400 mt-1">{study.service}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-teal-300">{study.metric}</p>
                      </div>
                    </div>
                    <p className="text-gray-300">{study.description}</p>
                  </div>

                  {/* Before/After */}
                  <div className="grid grid-cols-2 gap-4 mb-8 pb-8 border-b border-gray-700">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Before</p>
                      {Object.entries(study.beforeAfter.before).map(([key, val]) => (
                        <p key={key} className="text-gray-400 mb-2">
                          <span className="font-semibold">{key}:</span> {val}
                        </p>
                      ))}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-teal-400 uppercase mb-3">After</p>
                      {Object.entries(study.beforeAfter.after).map(([key, val]) => (
                        <p key={key} className="text-white font-semibold mb-2">
                          <span className="capitalize">{key}:</span> {val}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="mb-6">
                    <p className="text-gray-300 italic mb-3">“{study.quote}”</p>
                    <div>
                      <p className="font-semibold text-white">{study.author}</p>
                      <p className="text-sm text-gray-400">{study.role}</p>
                    </div>
                  </div>

                  {/* Download CTA */}
                  {/* <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-teal-400 text-teal-400 font-semibold rounded-lg hover:bg-teal-400 hover:text-gray-900 transition-colors duration-200">
                    <Download size={18} />
                    Download Full Case Study
                  </button> */}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-teal-400 mb-4">What Our Clients Say</h2>
              <p className="text-gray-300 text-lg">Hear from businesses {"we've"} helped scale</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-gray-800 border border-gray-700 p-8 rounded-2xl">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={18} className="fill-teal-400 text-teal-400" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-300 mb-6 italic">{testimonial.text}</p>

                  {/* Author */}
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof Stats */}
        <section className="bg-gray-950 text-gray-100 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "150+", label: "Clients Served" },
                { number: "$45M+", label: "Revenue Generated" },
                { number: "98%", label: "Satisfaction Rate" },
                { number: "8+", label: "Years Experience" },
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="text-4xl font-bold text-teal-400 mb-2">{stat.number}</div>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-teal-600 to-teal-500 text-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Become a Success Story?</h2>
            <p className="text-xl text-teal-100 mb-8">
              Your business could be next. {"Let's"} discuss your growth potential.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-teal-600 font-bold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Schedule Free Strategy Call
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
