/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileText,
  UserCheck,
  ClipboardList,
  ChevronDown,
  ChevronUp,
  Download,
  Send,
  CheckCircle,
  HelpCircle,
  AlertCircle
} from 'lucide-react';
import { SCHOOL_INFO } from '../types';
import { SectionHeader, Breadcrumbs } from '../components/UI';

export default function Admissions() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    levelRequested: 'Primary - Grade 4',
    parentPhone: '',
    parentEmail: '',
    notes: ''
  });

  // Accordion FAQ states
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What grades are currently open for admissions?",
      a: `Alicia Academy is currently admitting children for Pre-School, Primary Grade 4, and AP 6 levels. We welcome standard interviews for placements.`
    },
    {
      q: "When does the academic calendar begin?",
      a: `We follow the standard Kenyan public school academic calendar. It comprises 3 learning terms starting in January, May, and September respectively.`
    },
    {
      q: "What are the school fees, and can they be paid in installments?",
      a: `Tuition is KSh 3,600 per term. Optional lunch provision is available separately at KSh 2,400 per term. For installment structures, parents should directly contact the school administration or coordinate with the Principal.`
    },
    {
      q: "Is there morning tuition during the holidays?",
      a: `Yes. We conduct morning holiday tuition to help pupils review curriculum modules and stay ahead of academic timelines. Tuition rates conform to our standard terms.`
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.parentName && formData.childName) {
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
            Join Our Community
          </span>
          <h1 className="mt-2 font-display font-extrabold text-3.5xl sm:text-4.5xl text-white">
            Admissions & Student Intake
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-slate-300 font-sans">
            Enroll your child in a secure village school where our 6 teachers help them learn with respect.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* 1. ADMISSION OVERVIEW & CHILD REQUIREMENTS */}
      <section className="py-20 bg-transparent transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Child Requirements Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-brand-blue/10 text-brand-blue dark:bg-brand-gold/15 dark:text-brand-gold rounded-full font-display">
                Required Checklist
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white leading-tight">
                Child Requirements
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                Parents interested in enrolling their children at Alicia Academy should prepare the following key details for review prior to student placement:
              </p>

              <div className="space-y-4 font-sans text-sm">
                <div className="flex gap-3.5 p-4 glass rounded-xl">
                  <UserCheck className="h-5 w-5 text-brand-blue dark:text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Identification Documents</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Copy of Child’s official Birth Certificate and Parent/Guardian’s National ID copy for regulatory record keeping.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5 p-4 glass rounded-xl">
                  <ClipboardList className="h-5 w-5 text-brand-blue dark:text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Prior Academic Records</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Official report books or learning assessment cards from the child's former pre-school or previous primary level institution (if transferring).
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5 p-4 glass rounded-xl">
                  <FileText className="h-5 w-5 text-brand-blue dark:text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Completed Admission Enquiries</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Submission of the basic parent details form to coordinate an initial assessment session with the grade tutor.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Placeholders Column */}
            <div className="lg:col-span-6 space-y-8">
              {/* Process Placeholder */}
              <div className="p-8 glass rounded-3xl space-y-4">
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-gold" />
                  Admission Process
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  We are standardizing our step-by-step school onboarding process. Currently:
                </p>

                <div className="p-4 bg-white/40 dark:bg-slate-950/20 backdrop-blur-sm rounded-xl border border-dashed border-white/20 dark:border-white/5 text-center">
                  <p className="text-xs text-slate-500 italic font-medium">"Information will be updated by the school."</p>
                </div>
              </div>

              {/* Download Placeholder */}
              <div className="p-8 glass rounded-3xl space-y-4">
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-blue" />
                  Downloadable Admission Form
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  The formal downloadable PDF application package will be attached here:
                </p>

                <div className="flex items-center gap-3 p-4 bg-white/40 dark:bg-slate-950/20 backdrop-blur-sm rounded-xl border border-dashed border-white/20 dark:border-white/5 text-left">
                  <Download className="h-8 w-8 text-slate-300 shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500 italic font-medium">"Information will be updated by the school."</p>
                    <p className="text-[10px] text-slate-400 mt-1 font-sans">Form files are currently undergoing administrative authorization.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. ADMISSIONS ENQUIRY FORM */}
      <section className="py-20 bg-transparent transition-colors border-y border-white/10 dark:border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="glass-deep rounded-3xl p-8 sm:p-12 shadow-sm">
            <div className="text-center mb-8">
              <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-brand-blue/10 text-brand-blue dark:bg-brand-gold/15 dark:text-brand-gold rounded-full font-display">
                Online Admissions
              </span>
              <h3 className="font-display font-extrabold text-2xl text-slate-900 dark:text-white mt-3">
                Admission Enquiry Form
              </h3>
              <p className="text-xs text-slate-500 mt-2 font-sans">
                Submit details below to let us know about your interest. Our team will review vaccine records and schedule interviews.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="enquiry-form"
                  onSubmit={handleSubmit}
                  className="space-y-6 font-sans"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="parentName" className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        Parent / Guardian Name *
                      </label>
                      <input
                        type="text"
                        id="parentName"
                        name="parentName"
                        required
                        value={formData.parentName}
                        onChange={handleInputChange}
                        placeholder="e.g. Alice Onyango"
                        className="w-full px-4 py-3 text-xs sm:text-sm bg-white/50 dark:bg-slate-950/40 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue dark:focus:ring-brand-gold focus:border-transparent dark:text-white"
                      />
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label htmlFor="childName" className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        Child's Full Name *
                      </label>
                      <input
                        type="text"
                        id="childName"
                        name="childName"
                        required
                        value={formData.childName}
                        onChange={handleInputChange}
                        placeholder="e.g. David Onyango"
                        className="w-full px-4 py-3 text-xs sm:text-sm bg-white/50 dark:bg-slate-950/40 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue dark:focus:ring-brand-gold focus:border-transparent dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="childAge" className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        Child's Age (Years) *
                      </label>
                      <input
                        type="number"
                        id="childAge"
                        name="childAge"
                        required
                        min="2"
                        max="16"
                        value={formData.childAge}
                        onChange={handleInputChange}
                        placeholder="e.g. 9"
                        className="w-full px-4 py-3 text-xs sm:text-sm bg-white/50 dark:bg-slate-950/40 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue dark:focus:ring-brand-gold focus:border-transparent dark:text-white"
                      />
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label htmlFor="levelRequested" className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        Grade level of interest *
                      </label>
                      <select
                        id="levelRequested"
                        name="levelRequested"
                        required
                        value={formData.levelRequested}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 text-xs sm:text-sm bg-white/50 dark:bg-slate-950/40 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue dark:focus:ring-brand-gold focus:border-transparent dark:text-white"
                      >
                        <option value="Pre-School">Pre-School</option>
                        <option value="Primary - Grade 4">Primary - Grade 4</option>
                        <option value="Primary - AP 6">Primary - AP 6</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="parentPhone" className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="parentPhone"
                        name="parentPhone"
                        required
                        value={formData.parentPhone}
                        onChange={handleInputChange}
                        placeholder="e.g. +254 700 000 000"
                        className="w-full px-4 py-3 text-xs sm:text-sm bg-white/50 dark:bg-slate-950/40 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue dark:focus:ring-brand-gold focus:border-transparent dark:text-white"
                      />
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label htmlFor="parentEmail" className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        id="parentEmail"
                        name="parentEmail"
                        value={formData.parentEmail}
                        onChange={handleInputChange}
                        placeholder="e.g. parent@gmail.com"
                        className="w-full px-4 py-3 text-xs sm:text-sm bg-white/50 dark:bg-slate-950/40 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue dark:focus:ring-brand-gold focus:border-transparent dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label htmlFor="notes" className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Message / Additional Notes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={4}
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Add any specific requirements or question about tuition, installments or lunch program..."
                      className="w-full px-4 py-3 text-xs sm:text-sm bg-white/50 dark:bg-slate-950/40 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue dark:focus:ring-brand-gold focus:border-transparent dark:text-white resize-none"
                    />
                  </div>

                  <div className="p-3 bg-white/20 dark:bg-slate-950/20 backdrop-blur-sm rounded-xl border border-white/25 dark:border-white/5 flex items-start gap-2.5">
                    <AlertCircle className="h-4 w-4 text-brand-blue dark:text-brand-gold shrink-0 mt-0.5" />
                    <p className="text-[10px] text-slate-500 leading-normal">
                      Submission of this enquiry notifies the school project team. Our Principal email channel (<span className="font-semibold">{SCHOOL_INFO.principalEmail}</span>) is available for direct inquiries.
                    </p>
                  </div>

                  <div className="text-center pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 bg-brand-blue hover:bg-brand-blue-hover text-white dark:bg-brand-gold dark:text-brand-dark dark:hover:bg-brand-gold-hover font-display font-bold text-xs sm:text-sm rounded-xl shadow-md cursor-pointer flex items-center justify-center gap-2 mx-auto"
                    >
                      Submit Admissions Enquiry
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="form-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-6 font-sans"
                >
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
                    <CheckCircle className="h-10 w-10" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-display font-extrabold text-xl text-slate-900 dark:text-white">
                      Enquiry Submitted Successfully!
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                      Thank you for your interest in enrolling at <strong>{SCHOOL_INFO.name}</strong>. We have registered details for <strong>{formData.childName}</strong>. Our faculty will reach out to you.
                    </p>
                  </div>

                  <div className="p-4 bg-white/30 dark:bg-slate-950/20 backdrop-blur-sm border border-white/25 dark:border-white/5 rounded-2xl max-w-sm mx-auto text-xs text-left space-y-2">
                    <p className="font-bold text-slate-800 dark:text-white">Registered Summary:</p>
                    <p><span className="text-slate-400">Guardian Name:</span> {formData.parentName}</p>
                    <p><span className="text-slate-400">Child:</span> {formData.childName} (Age: {formData.childAge})</p>
                    <p><span className="text-slate-400">Level Requested:</span> {formData.levelRequested}</p>
                    <p><span className="text-slate-400">Primary Contact:</span> {formData.parentPhone}</p>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-display font-bold text-xs rounded-xl cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 3. FAQ SECTION WITH SMOOTH ACCORDIONS */}
      <section className="py-20 bg-transparent transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badgeText="Got Questions?"
            title="Frequently Asked Questions"
            subtitle="Get clear answers regarding fee details, calendar schedules, and primary school standards."
          />

          <div className="space-y-4 font-sans">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-white/25 dark:border-white/5 rounded-2xl overflow-hidden glass transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2.5">
                      <HelpCircle className="h-4.5 w-4.5 text-brand-blue dark:text-brand-gold shrink-0" />
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronDown className="h-5 w-5 text-brand-gold rotate-180 transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-400 transition-transform duration-300" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-slate-800/60 font-sans">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
