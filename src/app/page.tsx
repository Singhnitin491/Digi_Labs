import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Zap, BarChart3 } from "lucide-react";

export default function Home() {
  const stats = [
    { label: "Active Clients", value: "150+" },
    { label: "Avg Revenue Growth", value: "245%" },
    { label: "Success Rate", value: "98%" },
    { label: "Years Experience", value: "8+" },
  ];

  const servicePreview = [
    {
      icon: Users,
      title: "Social Media Marketing",
      desc: "Build engaged communities and drive consistent sales",
    },
    {
      icon: Zap,
      title: "Google & Meta Ads",
      desc: "High-ROI paid advertising campaigns",
    },
    {
      icon: BarChart3,
      title: "SEO & Optimization",
      desc: "Dominate search rankings organically",
    },
    {
      icon: TrendingUp,
      title: "Sales Funnels",
      desc: "Convert visitors into loyal customers",
    },
  ];

  const digitalMarketingFaq = [
    {
      question: "What is Digital Marketing?",
      answer:
        "Digital Marketing is the promotion of products or services using channels like social media, search engines, email, and websites to reach a targeted audience.",
    },
    {
      question: "Why does my business need Digital Marketing?",
      answer:
        "It increases brand awareness, drives qualified leads, improves customer engagement, and boosts sales at a lower cost than traditional marketing.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Most businesses start seeing noticeable results within 4–8 weeks depending on strategy, consistency, and marketing budget.",
    },
    {
      question: "Do you guarantee leads and conversions?",
      answer:
        "Yes, we use performance-driven strategies and real-time tracking to deliver high-quality leads and improved conversion rates.",
    },
    {
      question: "What marketing services do you provide?",
      answer:
        "We provide Social Media Marketing, Google Ads, SEO, Website Development, Email Marketing, Content Creation, and AI-powered automation.",
    },
    {
      question: "How much does digital marketing cost?",
      answer:
        "Pricing depends on your goals and required services. We offer customizable and affordable monthly packages.",
    },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-32 bg-gray-900 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-10 right-10 w-72 h-72  rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72  rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-50 mb-4 text-balance">
                Grow Your Business with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
                  {" "}
                  Proven Digital Marketing
                </span>
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500 m-auto mb-6"></div>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
                We help entrepreneurs increase leads, visibility, and revenue
                through data-driven marketing systems. Stop wasting money on
                ineffective strategies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary bg-blue-800 text-primary-foreground inline-flex items-center justify-center gap-2"
                >
                  Book Free Strategy Call
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/portfolio"
                  className="btn-secondary  bg-blue-800 text-primary-foreground  inline-flex items-center justify-center gap-2"
                >
                  View Portfolio
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Social Proof Row */}
            <div className="mt-16 border-t border-gray-200 pt-8">
              <p className="text-gray-100 text-xl font-bold text-center mb-6">
                TRUSTED BY LEADING BRANDS
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
                {["TechCorp", "StartupXYZ", "CoachLife", "BrandFlow"].map(
                  (brand) => (
                    <div key={brand} className="text-center">
                      <div className="w-full h-12 bg-gray-700 rounded-lg flex items-center justify-center text-gray-100 font-semibold text-lg">
                        {brand}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-blue-400 mb-2">
                    {stat.value}
                  </div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 px-4 bg-gray-900 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-3">
                Our Services
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500 m-auto mb-6"></div>

              <p className="text-gray-100 text-lg max-w-2xl mx-auto">
                Comprehensive digital marketing solutions tailored to your
                business goals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicePreview.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={idx}
                    className="glass p-8 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-12 h-12  rounded-lg flex items-center justify-center mb-4">
                      <Icon
                        className="text-gray-50 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-7"
                        size={24}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-200 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-200">{service.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Link href="/services" className="btn-primary">
                Explore All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Accordian*/}

        <section className="py-20 px-4 bg-gray-900 sm:px-6 lg:px-8 ">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl  font-bold text-gray-100 mb-3">
                Frequently Asked Question
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500 m-auto mb-6"></div>
              <div className="text-xl  text-gray-300 mb-3">
                <h2>
                  Find quick answers to common questions about our digital
                  marketing services and learn how we can help grow your brand
                  online.
                </h2>
              </div>
            </div>
          </div>

          <div className="">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              {digitalMarketingFaq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger className="text-gray-100 text-lg max-w-2xl mx-auto  pb-3">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-100 text-lg max-w-2xl mx-auto">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-foreground  py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-muted-foreground mb-3">
              Ready to Scale Your Business?
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500 m-auto mb-6"></div>

            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Get a personalized growth strategy from our experts. No fluff,
              just results.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Schedule Your Free Consultation
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <footer />
    </>
  );
}
