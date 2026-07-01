/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import {
  Award,
  BookOpen,
  TrendingUp,
  Star,
  Users,
  Info,
  Calendar
} from 'lucide-react';
import { SCHOOL_INFO } from '../types';
import { SectionHeader, Breadcrumbs } from '../components/UI';

export default function Exams() {
  // Best Performing Students Placeholders
  const performanceStars = [
    {
      name: "Student Star (AP 6 Candidate)",
      achievement: "Top Academic Marks in AP 6 Assessment",
      label: "AP 6 Star",
      notes: "Subject evaluation details will be updated by the class tutor."
    },
    {
      name: "Student Star (Grade 4 Primary)",
      achievement: "Outstanding Literacy & Science Progress",
      label: "Grade 4 Star",
      notes: "Term progress details will be updated by the class tutor."
    },
    {
      name: "Student Star (Pre-School)",
      achievement: "Excellent Motor Skills & Early Counting",
      label: "Pre-School Star",
      notes: "ECD progress parameters will be updated by the class tutor."
    }
  ];

  return (
    <div className="pt-24 overflow-x-hidden">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-gold text-xs font-semibold tracking-wider uppercase font-display">
            Academic Assessment
          </span>
          <h1 className="mt-2 font-display font-extrabold text-3.5xl sm:text-4.5xl text-white">
            Exams & Performance Stars
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-slate-300 font-sans">
            Guiding our children toward academic milestones with objective, scheduled assessments.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* 1. ACADEMIC EXCELLENCE & STAR STUDENTS */}
      <section className="py-20 bg-transparent transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badgeText="Honor Roster"
            title="Best Performing Students"
            subtitle="Encouraging our pupils to reach high. (Scores and specific candidate parameters will be updated by the school)."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {performanceStars.map((star, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass p-6 rounded-2xl shadow-sm flex flex-col justify-between hover:border-brand-gold/30 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gold/10 text-brand-gold">
                      <Star className="h-5 w-5 fill-current" />
                    </span>
                    <span className="text-[9px] bg-brand-blue/10 text-brand-blue dark:bg-brand-gold/20 dark:text-brand-gold font-black px-2.5 py-0.5 rounded-full uppercase">
                      {star.label}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-base text-slate-900 dark:text-white">
                      {star.name}
                    </h4>
                    <p className="text-xs text-brand-blue dark:text-brand-gold font-semibold font-sans">
                      {star.achievement}
                    </p>
                  </div>

                  <p className="text-xs text-slate-400 font-sans italic leading-relaxed">
                    {star.notes}
                  </p>
                </div>

                <div className="mt-6 pt-3.5 border-t border-slate-200/60 dark:border-slate-800 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Academic Honoree
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. EXAM INFORMATION & HIGHLIGHT PLACEHOLDERS */}
      <section className="py-20 bg-transparent transition-colors border-t border-white/10 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Exam Information Placeholder */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-8 glass rounded-3xl space-y-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue dark:bg-brand-gold/15 dark:text-brand-gold">
                  <BookOpen className="h-5.5 w-5.5" />
                </span>
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                  Exam Information & Calendars
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  Details regarding term-end exams, national syllabus mock tests, and standard candidate tracking dates:
                </p>

                <div className="p-4 bg-white/40 dark:bg-slate-950/20 backdrop-blur-sm rounded-xl border border-dashed border-white/20 dark:border-white/5 text-center">
                  <p className="text-xs text-slate-500 italic font-medium">"Information will be updated by the school."</p>
                  <p className="text-[10px] text-slate-400 mt-1 font-sans">Authorized exam tables will be uploaded shortly.</p>
                </div>
              </div>
            </div>

            {/* Performance Highlights Placeholder */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-8 glass rounded-3xl space-y-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue dark:bg-brand-gold/15 dark:text-brand-gold">
                  <TrendingUp className="h-5.5 w-5.5" />
                </span>
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                  Historical Performance Highlights
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  Highlights tracking overall subject trends and grade average progress reports at Alicia Academy:
                </p>

                <div className="p-4 bg-white/40 dark:bg-slate-950/20 backdrop-blur-sm rounded-xl border border-dashed border-white/20 dark:border-white/5 text-center">
                  <p className="text-xs text-slate-500 italic font-medium">"Information will be updated by the school."</p>
                  <p className="text-[10px] text-slate-400 mt-1 font-sans">Consolidated statistics metrics are under review by the Principal.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Important Advisory */}
      <section className="py-12 bg-transparent transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-100 dark:border-amber-900/30 flex items-start gap-3">
            <Info className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
            <p className="text-xs text-amber-800 dark:text-amber-300">
              <strong>Assessment Transparency Note:</strong> Alicia Academy aligns evaluations to Kenyan Ministry of Education specifications. Term reports are printed and delivered in person to parent guardians during Closing Assembly Days.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
