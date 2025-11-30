"use client";

import type React from "react";
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const faqs = [
    {
      q: "How do I book a consultation?",
      a: "Fill out the form below or click the WhatsApp button for a quick chat. We'll respond within 24 hours.",
    },
    {
      q: "What is the next step after contact?",
      a: "We'll schedule a 30-minute strategy call to understand your business and goals. This is completely free and no pressure.",
    },
    {
      q: "How long are contracts?",
      a: "We offer flexible monthly contracts. No long-term commitments. Cancel anytime with 30 days notice.",
    },
    {
      q: "What time zones do you serve?",
      a: "We work with clients globally. We schedule calls at times convenient for you.",
    },
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    service: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    // Here you can add API integration to send data to your backend
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-teal-400 mb-6 text-balance">
              {"Let's"} Build Your Growth Strategy
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Ready to scale? Book a free strategy call and {"let's"} discuss
              your business goals.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-8">
                <div className="glass p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Mail className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-100 mb-2">Email</h3>
                  <a
                    href="mailto:hello@digitalgrowth.com"
                    className="text-gray-300 hover:text-teal-400 transition-colors"
                  >
                    hello@digitalgrowth.com
                  </a>
                </div>

                <div className="glass p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Phone className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-100 mb-2">Phone</h3>
                  <a
                    href="tel:+7818033161"
                    className="text-gray-300 hover:text-teal-400 transition-colors"
                  >
                    7818033161
                  </a>
                </div>

                <div className="glass p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-100 mb-2">Address</h3>
                  <p className="text-gray-300">
                    123 Growth Avenue
                    <br />
                    San Francisco, CA 94105
                    <br />
                    USA
                  </p>
                </div>

                {/* WhatsApp CTA */}
                <div className="pt-8 border-t border-gray-700">
                  <a
                    href="https://wa.me/917818033161"
                    className="inline-flex items-center justify-center w-full gap-2 px-6 py-4 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition-colors duration-200"
                  >
                    Quick Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="glass p-8">
                  <h2 className="text-3xl font-bold text-teal-400 mb-8">
                    Get in Touch
                  </h2>

                  {submitted && (
                    <div className="mb-6 p-4 bg-green-100 border-2 border-green-500 text-green-700 rounded-lg">
                      Thank you for reaching out! {"We'll"} get back to you within 24 hours.
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-100 mb-2">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:border-teal-400"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-100 mb-2">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:border-teal-400"
                          required
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-100 mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:border-teal-400"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-100 mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:border-teal-400"
                        />
                      </div>
                    </div>

                    {/* Company & Service */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-100 mb-2">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:border-teal-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-100 mb-2">Service Interest</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:border-teal-400"
                        >
                          <option value="">Select a service</option>
                          <option value="social-media">Social Media Marketing</option>
                          <option value="ads">Google & Meta Ads</option>
                          <option value="seo">SEO & Optimization</option>
                          <option value="funnels">Sales Funnels</option>
                          <option value="branding">Branding & Content</option>
                          <option value="all">All Services</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-100 mb-2">Tell us about your project</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 border-2 border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:border-teal-400"
                        required
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-teal-400 hover:bg-teal-500 text-gray-900 font-bold rounded-full transition-colors"
                    >
                      Send Message <Send size={18} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-teal-400 mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqs.map((item, idx) => (
                <div key={idx} className="glass p-6">
                  <h3 className="text-lg font-bold text-gray-100 mb-3">{item.q}</h3>
                  <p className="text-gray-300">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
