/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import {
  BookOpen,
  Compass,
  Clock,
  Layers,
  Award,
  BookMarked,
  Info
} from 'lucide-react';
import { SCHOOL_INFO } from '../types';
import { SectionHeader, Breadcrumbs } from '../components/UI';

export default function Academics() {
  const departments = [
    {
      title: "Pre-School Department",
      focus: "Early Childhood Development (Ages 3-6)",
      desc: "Our early learning department introduces children to foundational literacy, active speaking, motor coordination, and simple socialization. We provide play blocks, storytelling times, and phonetic counting.",
      icon: Compass,
      highlights: ["Phonics & Vocabulary Foundations", "Motor Skill Development", "Basic Cooperative Play", "Nurturing Morning Schedule"]
    },
    {
      title: "Primary Department",
      focus: "Standard Level Curriculum (Grade 4 & AP 6)",
      desc: "Focuses on deep standard coursework alignment. The Primary section empowers standard comprehension, mathematical reasoning, social studies, and primary science. Special prep support is designated for the AP 6 level.",
      icon: BookOpen,
      highlights: ["Mathematics & Arithmetic Mastery", "Integrated Science & Health", "Languages (English & Kiswahili)", "Candidate Preparation Support"]
    }
  ];

  return (
    <div className="pt-24 overflow-x-hidden">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-gold text-xs font-semibold tracking-wider uppercase font-display">
            Academic Excellence
          </span>
          <h1 className="mt-2 font-display font-extrabold text-3.5xl sm:text-4.5xl text-white">
            Curriculum & Learning Programs
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-slate-300 font-sans">
            Guiding Pre-School and Primary level pupils toward syllabus mastery under the leadership of our 6 educators.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* 1. DEPARTMENTS SECTION */}
      <section className="py-20 bg-transparent transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badgeText="Syllabus Strands"
            title="Our Academic Departments"
            subtitle="Explore how we structure curriculum progression across early and advanced primary classes."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {departments.map((dept, i) => {
              const Icon = dept.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass p-8 rounded-3xl space-y-6 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue dark:bg-brand-gold/15 dark:text-brand-gold shrink-0">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="font-display font-extrabold text-lg text-slate-900 dark:text-white">
                          {dept.title}
                        </h3>
                        <p className="text-xs text-brand-blue dark:text-brand-gold font-semibold font-sans">
                          {dept.focus}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      {dept.desc}
                    </p>

                    <div className="pt-4 space-y-2.5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Highlights</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {dept.highlights.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-200/60 dark:border-slate-800 flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-medium">Currently Enrolling</span>
                    <span className="font-bold text-brand-blue dark:text-brand-gold uppercase tracking-wider">
                      Active
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. HOLIDAY TUITION FOCUS */}
      <section className="py-20 bg-transparent transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass p-8 sm:p-12 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <span className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue dark:bg-brand-gold/15 dark:text-brand-gold px-3 py-1 rounded-full text-xs font-bold font-display uppercase tracking-wider">
                <Clock className="h-4 w-4" />
                Holiday Tuition Structure
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white leading-tight">
                Accelerating Learning: Morning Tuition Programme
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                To guarantee our students maintain academic consistency, we offer intensive morning lessons during school breaks. This allows children to engage directly with critical standards and gain syllabus familiarity ahead of term start.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-brand-gold shrink-0 mt-1.5" />
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white text-sm">Morning Concentrated Block</h5>
                    <p className="text-xs text-slate-500 mt-0.5">Classes held when the pupil mind is most fresh and receptive.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-brand-gold shrink-0 mt-1.5" />
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white text-sm">Syllabus Ahead Strategy</h5>
                    <p className="text-xs text-slate-500 mt-0.5">Focusing on complex concepts before they are presented in standard terms.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 glass-deep p-6 rounded-2xl text-center space-y-4">
              <h4 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400">Timetable Summary</h4>
              <div className="space-y-2 text-xs font-sans">
                <div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500">Conduct Window:</span>
                  <span className="font-bold text-slate-800 dark:text-white">Morning Sessions</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500">Applicable:</span>
                  <span className="font-bold text-slate-800 dark:text-white">School Holidays</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-500">Rate:</span>
                  <span className="font-bold text-brand-blue dark:text-brand-gold">Per Calendar Terms</span>
                </div>
              </div>
              <p className="text-[10px] text-slate-400 italic">
                * Calendar aligns fully with public schooling norms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. APPROACH & ENVIRONMENT PLACEHOLDERS */}
      <section className="py-20 bg-transparent transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badgeText="Educational Safeguards"
            title="Pedagogy & Classroom Integrity"
            subtitle="Honoring academic safety standards. Formal updates will be provided by the school administration."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Teaching Approach Placeholder */}
            <div className="p-8 rounded-2xl glass space-y-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue dark:bg-brand-gold/15 dark:text-brand-gold">
                <BookMarked className="h-5.5 w-5.5" />
              </span>
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">Teaching Approach</h3>
              
              <div className="p-4 bg-white/40 dark:bg-slate-950/20 backdrop-blur-sm rounded-xl border border-dashed border-slate-250 dark:border-slate-800 flex items-start gap-2.5">
                <Info className="h-4.5 w-4.5 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500 italic font-medium">"Information will be updated by the school."</p>
                  <p className="text-[10px] text-slate-400 mt-1 font-sans">Our pedagogical manual is being compiled by our 6 subject teachers.</p>
                </div>
              </div>
            </div>

            {/* Learning Environment Placeholder */}
            <div className="p-8 rounded-2xl glass space-y-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue dark:bg-brand-gold/15 dark:text-brand-gold">
                <Layers className="h-5.5 w-5.5" />
              </span>
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">Learning Environment</h3>
              
              <div className="p-4 bg-white/40 dark:bg-slate-950/20 backdrop-blur-sm rounded-xl border border-dashed border-slate-250 dark:border-slate-800 flex items-start gap-2.5">
                <Info className="h-4.5 w-4.5 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500 italic font-medium">"Information will be updated by the school."</p>
                  <p className="text-[10px] text-slate-400 mt-1 font-sans">Physical campus layout specifications and classroom structures will be finalized soon.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
