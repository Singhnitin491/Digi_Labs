"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    service: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 text-balance">
              {"Let's"} Build Your Growth Strategy
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Ready to scale? Book a free strategy call and {"let's"} discuss your business goals.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Mail className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                  <a
                    href="mailto:hello@digitalgrowth.com"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    hello@digitalgrowth.com
                  </a>
                </div>

                <div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Phone className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
                  <a href="tel:+1234567890" className="text-gray-600 hover:text-blue-600 transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>

                <div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600">
                    123 Growth Avenue
                    <br />
                    San Francisco, CA 94105
                    <br />
                    USA
                  </p>
                </div>

                {/* WhatsApp CTA */}
                <div className="pt-8 border-t border-gray-200">
                  <a
                    href="https://wa.me/1234567890"
                    className="inline-flex items-center justify-center w-full gap-2 px-6 py-4 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.905 1.36c-1.504.906-2.78 2.217-3.664 3.709-1.217 2.064-1.42 4.494-.575 6.41 1.08 2.478 3.66 4.04 6.14 4.04h.004c2.479 0 5.059-1.562 6.14-4.04 1.21-2.78.372-4.958-.572-6.41-.888-1.493-2.165-2.804-3.669-3.71a9.816 9.816 0 00-4.895-1.359z" />
                    </svg>
                    Quick Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="glass p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>

                  {submitted && (
                    <div className="mb-6 p-4 bg-green-100 border-2 border-green-500 text-green-700 rounded-lg">
                      Thank you for reaching out! {"We'll"} get back to you within 24 hours.
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="John"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Doe"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                          required
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (234) 567-890"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Company & Service */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">Service Interest</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
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
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Tell us about your project
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="What are your goals and challenges?"
                        rows={5}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors resize-none"
                        required
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                      Send Message
                      <Send size={18} />
                    </button>
                  </form>

                  {/* Calendly Integration Note */}
                  <p className="text-center text-gray-600 text-sm mt-8 pt-8 border-t border-gray-200">
                    Or book directly: Calendly integration coming soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>

            <div className="space-y-6">
              {[
                {
                  q: "How do I book a consultation?",
                  a: "Fill out the form above or click the WhatsApp button for a quick chat. We'll respond within 24 hours.",
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
              ].map((item, idx) => (
                <div key={idx} className="glass p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.q}</h3>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer />
    </>
  )
}
