import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import Link from "next/link"
import { Share2, Target, Search, Zap, PenTool, Rocket, Check, ArrowRight } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      id: "social",
      icon: Share2,
      title: "Social Media Marketing",
      description: "Build engaged communities and drive consistent sales through strategic social media campaigns.",
      benefits: [
        "Grow followers organically",
        "Increase engagement rates",
        "Drive website traffic",
        "Build brand authority",
        "Convert followers to customers",
      ],
      pricing: "From $1,500/month",
    },
    {
      id: "ads",
      icon: Target,
      title: "Google & Meta Ads",
      description: "High-ROI paid advertising campaigns that put your products in front of the right audience.",
      benefits: [
        "Instant visibility",
        "Targeted audience reach",
        "Real-time optimization",
        "Measurable ROI",
        "Expert campaign management",
      ],
      pricing: "From $2,000/month",
    },
    {
      id: "seo",
      icon: Search,
      title: "SEO & Website Optimization",
      description: "Dominate search rankings organically and drive sustainable long-term traffic.",
      benefits: [
        "Keyword research & strategy",
        "On-page optimization",
        "Technical SEO",
        "Link building",
        "Monthly reporting",
      ],
      pricing: "From $1,800/month",
    },
    {
      id: "funnels",
      icon: Zap,
      title: "Sales Funnels & Landing Pages",
      description: "Convert visitors into loyal customers with high-converting funnels and landing pages.",
      benefits: [
        "Funnel strategy & design",
        "High-converting copy",
        "A/B testing",
        "Lead capture setup",
        "Conversion optimization",
      ],
      pricing: "From $2,500/month",
    },
    {
      id: "branding",
      icon: PenTool,
      title: "Branding & Content Strategy",
      description: "Develop a cohesive brand identity and content strategy that resonates with your audience.",
      benefits: ["Brand positioning", "Visual identity", "Content calendar", "Blog strategy", "Video content planning"],
      pricing: "From $1,200/month",
    },
    {
      id: "done",
      icon: Rocket,
      title: "Done-For-You Services",
      description: "Full-service digital marketing management so you can focus on running your business.",
      benefits: [
        "Complete campaign management",
        "Monthly strategy calls",
        "Performance reporting",
        "Unlimited revisions",
        "Dedicated account manager",
      ],
      pricing: "From $5,000/month",
    },
  ]

  const pricingPackages = [
    {
      name: "Starter",
      price: "$1,500",
      period: "/month",
      description: "Perfect for small businesses just getting started",
      features: [
        "Social Media Management (1 platform)",
        "Monthly strategy call",
        "Basic analytics reporting",
        "5 posts per week",
      ],
    },
    {
      name: "Growth",
      price: "$3,500",
      period: "/month",
      description: "For businesses ready to scale",
      features: [
        "Social Media + Google Ads",
        "Bi-weekly strategy calls",
        "Advanced reporting",
        "10 posts per week",
        "A/B testing",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "$7,000",
      period: "/month",
      description: "Complete marketing suite",
      features: [
        "All services included",
        "Weekly strategy calls",
        "Custom reporting dashboard",
        "Unlimited content",
        "Dedicated account manager",
      ],
    },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 text-balance">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Comprehensive digital marketing solutions designed to achieve your specific business goals
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <div key={service.id} className="glass p-8 hover:shadow-xl transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>

                    <ul className="space-y-3 mb-8">
                      {service.benefits.slice(0, 4).map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="border-t border-gray-200 pt-6">
                      <p className="text-blue-600 font-bold mb-4">{service.pricing}</p>
                      <Link href="/contact" className="btn-primary w-full text-center">
                        Get Started
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Pricing Packages</h2>
              <p className="text-gray-600 text-lg">Choose the perfect plan for your business needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPackages.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`relative rounded-2xl transition-all duration-300 ${
                    pkg.popular
                      ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl scale-105"
                      : "bg-white border-2 border-gray-200 hover:border-blue-400"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-400 to-blue-500 text-white px-6 py-2 rounded-full font-bold text-sm">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="p-8">
                    <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? "text-white" : "text-gray-900"}`}>
                      {pkg.name}
                    </h3>
                    <p className={`text-sm mb-6 ${pkg.popular ? "text-blue-100" : "text-gray-600"}`}>
                      {pkg.description}
                    </p>

                    <div className="mb-8">
                      <span className="text-5xl font-bold">{pkg.price}</span>
                      <span className={`text-sm ${pkg.popular ? "text-blue-100" : "text-gray-600"}`}>{pkg.period}</span>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {pkg.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-center gap-3">
                          <Check size={20} className={pkg.popular ? "text-blue-200" : "text-blue-600"} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className={`block w-full py-3 text-center font-bold rounded-full transition-all duration-300 ${
                        pkg.popular
                          ? "bg-white text-blue-600 hover:shadow-xl"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Common Questions</h2>

            <div className="space-y-6">
              {[
                {
                  q: "How long does it take to see results?",
                  a: "Results vary by service. Paid ads typically show results within 1-2 weeks. SEO and social media usually take 2-3 months to see significant growth.",
                },
                {
                  q: "What if I'm not satisfied with the results?",
                  a: "We offer a 30-day money-back guarantee on all services. Your success is our success, and we're confident in our results.",
                },
                {
                  q: "Can I cancel anytime?",
                  a: "Yes! We offer flexible monthly contracts with no long-term commitments. Cancel anytime with 30 days notice.",
                },
                {
                  q: "Do you work with all industries?",
                  a: "We specialize in helping coaches, service providers, e-commerce businesses, and SaaS companies. Contact us to discuss your specific industry.",
                },
              ].map((item, idx) => (
                <div key={idx} className="glass p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.q}</h3>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">{"Let's"} Build Your Growth Strategy</h2>
            <p className="text-xl text-blue-100 mb-8">
              Choose the service that fits your needs and {"let's"} start scaling your business today.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Book Free Consultation
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <footer />
    </>
  )
}
