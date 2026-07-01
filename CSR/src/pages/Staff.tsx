/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  User,
  Award,
  Users,
  Compass,
  CheckCircle,
  Briefcase
} from 'lucide-react';
import { SCHOOL_INFO } from '../types';
import { SectionHeader, Breadcrumbs } from '../components/UI';

export default function Staff() {
  // Total Teachers: 6
  const teachers = [
    {
      name: "Principal Alice Dira",
      role: "School Principal & Head of Administration",
      specialty: "Educational Management & Leadership",
      email: SCHOOL_INFO.principalEmail,
      bio: "Alice leads our community project with immense dedication, organizing curriculum schedules and coordinating directly with families to make primary education accessible."
    },
    {
      name: "Teacher Benson",
      role: "Head of Primary Mathematics & Science",
      specialty: "Numerical Literacy & Experimental Science",
      bio: "Focuses on building critical analytical skills in Grade 4 and AP 6 pupils, fostering confidence in handling calculations."
    },
    {
      name: "Teacher Gladys",
      role: "Lead Early Childhood Educator (ECD)",
      specialty: "Phonics, Speech & Motor Development",
      bio: "Gladys runs our Pre-School section with warm patience, guiding young learners through their very first steps in social play and counting."
    },
    {
      name: "Teacher James",
      role: "Primary Tutor & Head of Kiswahili",
      specialty: "Linguistic Literacy & Cultural Studies",
      bio: "Enriches our students' Kiswahili grammar and reading fluency, ensuring compliance with state curriculum standards."
    },
    {
      name: "Teacher Nancy",
      role: "Primary Level English Language Tutor",
      specialty: "Grammar, Reading Comprehension & Writing",
      bio: "James coordinates essay-writing exercises, helping candidates prepare structural writing techniques for exams."
    },
    {
      name: "Teacher Patrick",
      role: "Primary Level Social Studies & Arts Tutor",
      specialty: "Humanities & Cooperative Projects",
      bio: "Patrick designs local history studies, helping children learn environmental responsibilities and creative arts."
    }
  ];

  return (
    <div className="pt-24 overflow-x-hidden">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-gold text-xs font-semibold tracking-wider uppercase font-display">
            Our Faculty
          </span>
          <h1 className="mt-2 font-display font-extrabold text-3.5xl sm:text-4.5xl text-white">
            Meet Our Educators
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-slate-300 font-sans">
            Committed to fostering young minds, guided by our dedicated team of 6 primary teachers.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* 1. PRINCIPAL SUMMARY BLOCK */}
      <section className="py-20 bg-transparent transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass p-8 sm:p-12 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Principal Visual Emblem icon */}
            <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
              <div className="h-28 w-28 rounded-full bg-brand-blue/10 dark:bg-brand-gold/10 text-brand-blue dark:text-brand-gold flex items-center justify-center border-4 border-white dark:border-slate-800 shadow-md">
                <User className="h-14 w-14" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-lg text-slate-900 dark:text-white">
                  Alice Dira
                </h3>
                <p className="text-xs text-brand-blue dark:text-brand-gold font-semibold uppercase tracking-wider font-display">
                  School Principal
                </p>
              </div>
            </div>

            {/* Principal Bio / Contact */}
            <div className="lg:col-span-8 space-y-6">
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-brand-blue/10 text-brand-blue rounded-full font-display">
                Leadership Message
              </span>
              <h2 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white leading-tight">
                "Honoring educational paths with community care and dedication."
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                As the principal, my ultimate goal is to offer village children standard and inclusive teaching. Under our motto, <strong className="italic">"{SCHOOL_INFO.motto}"</strong>, we maintain a highly supportive community project environment. We are proud of our 6 educators who ensure each pupil excels.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-sans">
                <div className="flex items-center gap-2 glass px-4 py-2.5 rounded-xl">
                  <Mail className="h-4.5 w-4.5 text-brand-gold" />
                  <span className="text-slate-500">Principal's Direct Email:</span>
                  <a href={`mailto:${SCHOOL_INFO.principalEmail}`} className="font-bold text-brand-blue hover:underline">
                    {SCHOOL_INFO.principalEmail}
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. ALL TEACHERS LIST (TOTAL TEACHERS: 6) */}
      <section className="py-20 bg-transparent transition-colors border-t border-white/10 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badgeText="Faculty Directory"
            title="Our Dedicated Teaching Team"
            subtitle="Meet our professional roster of 6 school teachers, bringing expertise across key curriculums."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass p-6 rounded-2xl shadow-sm flex flex-col justify-between hover:border-brand-blue/30 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/5 text-brand-blue dark:bg-brand-gold/10 dark:text-brand-gold">
                      <User className="h-5 w-5" />
                    </span>
                    <div>
                      <h4 className="font-display font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                        {teach.name}
                      </h4>
                      <p className="text-[10px] text-brand-blue dark:text-brand-gold font-bold font-display uppercase tracking-wider">
                        {teach.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 font-sans leading-normal">
                    <strong>Focus:</strong> {teach.specialty}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                    {teach.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-900 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Full-Time Educator
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FUTURE ADMINISTRATION FOCUS */}
      <section className="py-20 bg-transparent transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-lg relative overflow-hidden">
            {/* Visual design overlays */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,#00000033_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-[80px]" />

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-10 text-center sm:text-left">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gold/15 text-brand-gold shrink-0">
                <Briefcase className="h-8 w-8" />
              </span>
              <div className="space-y-3">
                <span className="text-brand-gold text-[10px] font-bold uppercase tracking-widest block font-display">
                  Future Planning
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                  Future Administration: Mildred Atieno
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Mildred Atieno is designated for future school administration roles to preserve continuity, integrity, and regulatory governance. For administrative planning or long-term community partnerships, please contact the Principal’s office.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
