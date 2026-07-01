/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Briefcase,
  Share2
} from 'lucide-react';
import { SCHOOL_INFO } from '../types';
import { SectionHeader, Breadcrumbs } from '../components/UI';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    senderPhone: '',
    subject: 'General Enquiry',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.senderName && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="pt-24 overflow-x-hidden">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-gold text-xs font-semibold tracking-wider uppercase font-display">
            Contact Channels
          </span>
          <h1 className="mt-2 font-display font-extrabold text-3.5xl sm:text-4.5xl text-white">
            Get In Touch
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-slate-300 font-sans">
            Connect directly with our primary school administration for admissions, visits, or sponsorships.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* 1. CONTACT METRICS & CONTACT FORM */}
      <section className="py-20 bg-transparent transition-colors font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Core Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-brand-blue/10 text-brand-blue dark:bg-brand-gold/15 dark:text-brand-gold rounded-full font-display">
                Reach Us Directly
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white leading-tight">
                Our Administrative Channels
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                Our faculty keeps administrative channels active to support our village community. Please reach out to the Principal’s office.
              </p>

              {/* Cards list */}
              <div className="space-y-4">
                
                {/* Email Card */}
                <div className="flex gap-4 p-5 glass rounded-2xl">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue dark:bg-brand-gold/15 dark:text-brand-gold shrink-0">
                    <Mail className="h-5.5 w-5.5" />
                  </span>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm">Principal's Email</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Primary administrative channel</p>
                    <a
                      href={`mailto:${SCHOOL_INFO.principalEmail}`}
                      className="text-xs sm:text-sm font-bold text-brand-blue dark:text-sky-400 hover:underline break-all block mt-2"
                    >
                      {SCHOOL_INFO.principalEmail}
                    </a>
                  </div>
                </div>

                {/* Location Address Placeholder */}
                <div className="flex gap-4 p-5 glass rounded-2xl">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue dark:bg-brand-gold/15 dark:text-brand-gold shrink-0">
                    <MapPin className="h-5.5 w-5.5" />
                  </span>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm">Physical Location</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Kenyan village community</p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed mt-2 italic">
                      "{SCHOOL_INFO.contact.addressPlaceholder}"
                    </p>
                  </div>
                </div>

                {/* Opening Hours Placeholder */}
                <div className="flex gap-4 p-5 glass rounded-2xl">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue dark:bg-brand-gold/15 dark:text-brand-gold shrink-0">
                    <Clock className="h-5.5 w-5.5" />
                  </span>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm">School Operating Hours</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed mt-2">
                      {SCHOOL_INFO.contact.hoursPlaceholder}
                    </p>
                  </div>
                </div>

                {/* Future Administrator Contact */}
                <div className="flex gap-4 p-5 glass rounded-2xl">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue dark:bg-brand-gold/15 dark:text-brand-gold shrink-0">
                    <Briefcase className="h-5.5 w-5.5" />
                  </span>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm">Future Administration Contact</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-sans mt-1.5 font-semibold">
                      {SCHOOL_INFO.futureAdministrator}
                    </p>
                    <p className="text-[10px] text-slate-400 font-sans mt-0.5">Designated Administrator contact for future planning.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="glass-deep rounded-3xl p-8">
                <div className="mb-6">
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                    Send Us an Official Message
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Have any questions regarding morning tuition, admissions checklist, or enrollment structures? Complete the form.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form
                      key="contact-form"
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1">
                          <label htmlFor="senderName" className="text-xs font-bold text-slate-700 dark:text-slate-300">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            id="senderName"
                            name="senderName"
                            required
                            value={formData.senderName}
                            onChange={handleInputChange}
                            placeholder="e.g. Samuel Ombaso"
                            className="w-full px-4 py-3 text-xs bg-white/50 dark:bg-slate-950/40 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue dark:focus:ring-brand-gold focus:border-transparent dark:text-white"
                          />
                        </div>

                        <div className="space-y-1">
                          <label htmlFor="senderPhone" className="text-xs font-bold text-slate-700 dark:text-slate-300">
                            Your Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="senderPhone"
                            name="senderPhone"
                            required
                            value={formData.senderPhone}
                            onChange={handleInputChange}
                            placeholder="e.g. +254 700 000 000"
                            className="w-full px-4 py-3 text-xs bg-white/50 dark:bg-slate-950/40 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue dark:focus:ring-brand-gold focus:border-transparent dark:text-white"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1">
                          <label htmlFor="senderEmail" className="text-xs font-bold text-slate-700 dark:text-slate-300">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="senderEmail"
                            name="senderEmail"
                            required
                            value={formData.senderEmail}
                            onChange={handleInputChange}
                            placeholder="e.g. parent@gmail.com"
                            className="w-full px-4 py-3 text-xs bg-white/50 dark:bg-slate-950/40 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue dark:focus:ring-brand-gold focus:border-transparent dark:text-white"
                          />
                        </div>

                        <div className="space-y-1">
                          <label htmlFor="subject" className="text-xs font-bold text-slate-700 dark:text-slate-300">
                            Subject *
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            required
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 text-xs bg-white/50 dark:bg-slate-950/40 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue dark:focus:ring-brand-gold focus:border-transparent dark:text-white font-sans"
                          >
                            <option value="General Enquiry">General Enquiry</option>
                            <option value="Admissions Inquiries">Admissions Inquiries</option>
                            <option value="Fee Payments/Installments">Fee Payments/Installments</option>
                            <option value="Community Support / Sponsorship">Community Support / Sponsorship</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label htmlFor="message" className="text-xs font-bold text-slate-700 dark:text-slate-300">
                          Your Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Write your comprehensive message or question here..."
                          className="w-full px-4 py-3 text-xs bg-white/50 dark:bg-slate-950/40 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue dark:focus:ring-brand-gold focus:border-transparent dark:text-white resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full sm:w-auto px-7 py-3.5 bg-brand-blue hover:bg-brand-blue-hover text-white dark:bg-brand-gold dark:text-brand-dark dark:hover:bg-brand-gold-hover font-display font-bold text-xs rounded-xl shadow-md cursor-pointer flex items-center justify-center gap-2"
                      >
                        Send Message
                        <Send className="h-4 w-4" />
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="contact-success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-10 text-center space-y-6"
                    >
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
                        <CheckCircle className="h-8 w-8" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-display font-extrabold text-base text-slate-900 dark:text-white">
                          Message Dispatched!
                        </h4>
                        <p className="text-xs text-slate-500 max-w-sm mx-auto font-sans leading-relaxed">
                          Your message has been logged. Thank you, <strong>{formData.senderName}</strong>. We will coordinate response details shortly.
                        </p>
                      </div>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-5 py-2.5 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-display font-bold text-xs rounded-xl cursor-pointer shadow-sm"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. VECTOR GOOGLE MAPS PLACEHOLDER */}
      <section className="py-20 bg-transparent transition-colors border-t border-white/10 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badgeText="Geographical Marker"
            title="Academy Location Map"
            subtitle="Representing the regional geographic coordinates of our primary school project center."
          />

          <div className="relative glass rounded-3xl overflow-hidden h-96 shadow-sm flex flex-col items-center justify-center p-6 text-center">
            {/* Visual Vector Grid Mocking a Map layout */}
            <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.08] bg-[linear-gradient(90deg,#000_1px,transparent_1px),linear-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />
            
            {/* Animated location marker overlay */}
            <div className="relative z-10 space-y-6 max-w-md">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-rose-500 animate-bounce">
                <MapPin className="h-8 w-8" />
              </span>
              
              <div className="space-y-2">
                <h4 className="font-display font-extrabold text-slate-900 dark:text-white text-base">
                  Google Maps Location Placeholder
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                  The active geographic coordinates and iframe maps integration will be updated by the school web master.
                </p>
              </div>

              <div className="p-4 bg-white/40 dark:bg-slate-950/20 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-white/5 inline-block text-xs font-mono text-slate-400">
                Coordinates: [Kenyan Village Primary School Coordinates Placeholder]
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
