import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Zap, Users, TrendingUp, Heart, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Zap,
      title: "Results-Driven",
      description:
        "We're obsessed with ROI. Every strategy we implement is measured and optimized for real business results.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description:
        "Your success is our success. We treat every client like a partner, not just a transaction.",
    },
    {
      icon: TrendingUp,
      title: "Growth-Minded",
      description:
        "We stay ahead of trends and constantly learn. Your competitive advantage is our priority.",
    },
    {
      icon: Heart,
      title: "Transparent",
      description:
        "No fluff, no smoke and mirrors. We communicate clearly about what's working and what isn't.",
    },
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Founder & CEO",
      bio: "Former VP of Marketing at TechCorp. 12+ years of digital marketing experience.",
      expertise: ["Strategy", "Paid Ads", "Team Leadership"],
    },
    {
      name: "Marcus Johnson",
      role: "Head of Social Media",
      bio: "Built organic communities of 500K+ followers. Instagram & TikTok specialist.",
      expertise: ["Social Media", "Content", "Community Building"],
    },
    {
      name: "Alex Rivera",
      role: "SEO Director",
      bio: "Ranked 150+ websites in competitive industries. Technical SEO expert.",
      expertise: ["SEO", "Technical SEO", "Content Strategy"],
    },
    {
      name: "Emma Wilson",
      role: "Conversion Specialist",
      bio: "Increased conversions by 245% for e-commerce clients. Funnel expert.",
      expertise: ["Funnels", "Copywriting", "Analytics"],
    },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen ">
        {/* Hero Section */}
        <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-3 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              We Help Ambitious Businesses Scale
            </h1>
            <div className="h-1 w-20 m-auto bg-gradient-to-r from-purple-500 to-pink-500 mb-6"></div>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Founded by digital marketing experts, DigitalGrowth Labs is
              dedicated to delivering measurable results for entrepreneurs and
              business leaders.
            </p>
          </div>
        </section>

        {/* Mission, Vision, Approach */}
        <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center bg-gray-300 p-10 rounded-full">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-800">
                  To transform businesses through data-driven marketing
                  strategies that generate real revenue and sustainable growth.
                </p>
              </div>
              <div className="text-center  bg-gray-300 p-10 rounded-full">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h2>
                <p className="text-gray-800">
                  A world where every ambitious entrepreneur has access to
                  world-class marketing expertise and achieves their business
                  goals.
                </p>
              </div>
              <div className="text-center  bg-gray-300 p-10 rounded-full">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Approach
                </h2>
                <p className="text-gray-800">
                  Strategy first, execution second. We analyze your business,
                  craft a custom plan, then execute flawlessly for maximum ROI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl w-100 font-bold border-2 bg-green-800 rounded-full mx-auto p-5 text-gray-100 mb-18 text-center">
              Core Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <div
                    key={idx}
                    className="glass bg-gray-600 hover:shadow-2xl animate-[bounce_2.5s_infinite] p-8 text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-100 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-200">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-900 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-100 mb-3">
              Why Choose DigitalGrowth Labs?
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500  mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  title: "8+ Years Experience",
                  desc: "Proven track record helping 150+ businesses achieve their goals",
                },
                {
                  title: "Expert Team",
                  desc: "Former VP-level marketers with deep expertise in all channels",
                },
                {
                  title: "Results Guarantee",
                  desc: "30-day money-back guarantee on all services",
                },
                {
                  title: "Custom Strategies",
                  desc: "No cookie-cutter solutions. Every plan is tailored to your business",
                },
                {
                  title: "Full Transparency",
                  desc: "Monthly reports, strategy calls, and complete accountability",
                },
                {
                  title: "Scalable Support",
                  desc: "Grow from startup to 7-figures with our proven systems",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex  gap-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{idx + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-100 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-100 mb-12 text-center">
              Meet the Team
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, idx) => (
                <div
                  key={idx}
                  className="glass p-6 text-center hover:shadow-lg bg-gray-100 transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((exp, eidx) => (
                      <span
                        key={eidx}
                        className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full font-semibold"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {"Let's"} discuss your growth goals and build a strategy that
              works.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Schedule Free Consultation
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
