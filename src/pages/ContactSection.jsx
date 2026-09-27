import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon } from '../components/BrandIcons';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));

    // Clear error when user starts editing again
    if (error) {
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setError('');

    try {
      const templateParams = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        message: formData.message,

        // Useful if your EmailJS template needs your email
        to_email: personalInfo.email,

        // Full name for convenience in EmailJS template
        from_name: `${formData.firstName} ${formData.lastName}`.trim()
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);

      // Celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Confetti is optional
      }

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });

    } catch (err) {
      console.error('EmailJS Error:', err);

      setError(
        'Something went wrong while sending your message. Please try again or contact me directly by email.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="relative rounded-[28px] sm:rounded-[36px] bg-[#F3F4F6] border border-gray-200/80 shadow-sm p-6 sm:p-10 lg:p-14 overflow-hidden">

        {/* Decorative glow */}
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-pink-200/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-5 flex flex-col justify-between">

            <div>

              {/* GET IN TOUCH */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold tracking-widest uppercase mb-4"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>GET IN TOUCH</span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-gray-950 mb-4 leading-tight"
              >
                Let's Create <br />
                Something <span className="text-[#EC4899]">Great</span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed"
              >
                Have an ambitious idea, need a full-stack engineer for your
                team, or want to discuss a new software project? Let's connect.
              </motion.p>

            </div>

            {/* ================= CONTACT LINKS ================= */}
            <div className="space-y-4 pt-4 border-t border-gray-200/80">

              {/* EMAIL */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center gap-4 p-3.5 rounded-2xl bg-white border border-gray-200/80 hover:border-pink-300 hover:shadow-md transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center group-hover:bg-pink-600 group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>

                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Email Address
                  </div>

                  <div className="text-sm font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
                    {personalInfo.email}
                  </div>
                </div>
              </a>

              {/* PHONE */}
              <a
                href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                className="group flex items-center gap-4 p-3.5 rounded-2xl bg-white border border-gray-200/80 hover:border-purple-300 hover:shadow-md transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>

                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Phone / WhatsApp
                  </div>

                  <div className="text-sm font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {personalInfo.phone}
                  </div>
                </div>
              </a>

              {/* LINKEDIN */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-3.5 rounded-2xl bg-white border border-gray-200/80 hover:border-blue-300 hover:shadow-md transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <span className="text-sm font-bold">in</span>
                </div>

                <div className="flex-1">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    LinkedIn
                  </div>

                  <div className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Connect with me
                  </div>
                </div>

                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </a>

              {/* GITHUB */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-3.5 rounded-2xl bg-white border border-gray-200/80 hover:border-gray-400 hover:shadow-md transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-gray-100 text-gray-800 flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-colors">
                  <GithubIcon className="w-5 h-5" />
                </div>

                <div className="flex-1">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    GitHub
                  </div>

                  <div className="text-sm font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                    View my projects
                  </div>
                </div>

                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-900 transition-colors" />
              </a>

            </div>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="lg:col-span-7">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/90 shadow-lg shadow-gray-200/50"
            >

              {submitted ? (

                /* ================= SUCCESS STATE ================= */
                <div className="text-center py-12 space-y-4">

                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="font-display font-bold text-2xl text-gray-950">
                    Message Sent Successfully!
                  </h3>

                  <p className="text-gray-600 max-w-md mx-auto text-sm">
                    Thanks for reaching out. Your message has been sent
                    successfully. I'll get back to you as soon as possible.
                  </p>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold transition-colors"
                  >
                    Send Another Message
                  </button>

                </div>

              ) : (

                /* ================= FORM ================= */
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  <h3 className="font-display text-xl font-bold text-gray-950 mb-1">
                    Send a Direct Message
                  </h3>

                  <p className="text-xs text-gray-500 mb-6">
                    Fill in the details below and I'll get back to you promptly.
                  </p>

                  {/* FIRST + LAST NAME */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        First Name <span className="text-pink-500">*</span>
                      </label>

                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-pink-500 focus:bg-white focus:outline-none text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Last Name <span className="text-pink-500">*</span>
                      </label>

                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-pink-500 focus:bg-white focus:outline-none text-sm transition-all"
                      />
                    </div>

                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Email Address <span className="text-pink-500">*</span>
                    </label>

                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john.doe@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-pink-500 focus:bg-white focus:outline-none text-sm transition-all"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Message <span className="text-pink-500">*</span>
                    </label>

                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, timeline, and goals..."
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-pink-500 focus:bg-white focus:outline-none text-sm transition-all resize-none"
                    />
                  </div>

                  {/* ERROR */}
                  {error && (
                    <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
                      {error}
                    </div>
                  )}

                  {/* SEND */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-[#111113] hover:bg-black text-white text-base font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span>
                      {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    </span>

                    {!isSubmitting && (
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    )}
                  </button>

                  <p className="text-[11px] text-center text-gray-400">
                    🔒 Your information is only used to respond to your message.
                  </p>

                </form>
              )}

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}