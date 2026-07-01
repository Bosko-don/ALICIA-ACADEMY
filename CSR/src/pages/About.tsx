/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import {
  Heart,
  Target,
  Compass,
  CheckCircle,
  Shield,
  Users,
  AlertCircle
} from 'lucide-react';
import { SCHOOL_INFO } from '../types';
import { SectionHeader, Breadcrumbs } from '../components/UI';

export default function About() {
  const coreValues = [
    {
      title: "Excellence",
      desc: "Striving for quality in all we do academically and developmentally.",
      icon: Target
    },
    {
      title: "Integrity",
      desc: "Instilling strong moral foundations, honesty, and mutual respect.",
      icon: Shield
    },
    {
      title: "Community",
      desc: "Working collaboratively as a village, supporting every child's success.",
      icon: Users
    }
  ];

  return (
    <div className="pt-24 overflow-x-hidden">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-gold text-xs font-semibold tracking-wider uppercase font-display">
            About Our Academy
          </span>
          <h1 className="mt-2 font-display font-extrabold text-3.5xl sm:text-4.5xl text-white">
            Our Story & Project Roots
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-slate-300 font-sans">
            A passionate community educational project primary school in Kenya, operating on integrity, dedication, and mutual trust.
          </p>
        </div>
      </section>

      {/* Breadcrumb path */}
      <Breadcrumbs />

      {/* 1. OUR STORY & COMMUNITY PROJECT OVERVIEW */}
      <section className="py-20 bg-transparent transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story description */}
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-brand-blue/10 text-brand-blue dark:bg-brand-gold/15 dark:text-brand-gold rounded-full font-display">
                How We Started
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white leading-tight">
                Alicia Academy: A Loving Community Educational Project
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                Alicia Academy was founded as a dedicated school project to provide quality primary education for children in the village. Operated with care and support from parents, community members, and volunteers, we cultivate an atmosphere of support and warmth where pupils feel motivated to learn.
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                By maintaining affordable structured term fees, aligning with the standard public calendar, and running additional morning holiday classes, we maintain parity with large-scale schools. We are highly proud of our 6 subject teachers who work around the clock to assist each student.
              </p>

              <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-100 dark:border-amber-900/30 flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
                <p className="text-xs text-amber-800 dark:text-amber-300">
                  <strong>Community Project Integrity:</strong> The school depends on active collaboration. All structural resources, teacher schedules, and tuition terms are authorized collectively to serve the children first.
                </p>
              </div>
            </div>

            {/* Visual Block Representation */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-brand-gold/20 rounded-3xl blur-xl" />
                <div className="relative glass rounded-3xl p-8 space-y-6">
                  <span className="text-brand-blue dark:text-brand-gold font-display font-extrabold text-xs uppercase tracking-widest block">
                    Fast Facts
                  </span>
                  
                  <div className="space-y-4 font-sans">
                    <div className="flex justify-between items-center py-2.5 border-b border-slate-200/60 dark:border-slate-800">
                      <span className="text-xs text-slate-500 font-medium">Primary Levels</span>
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-100">Pre-School, Grade 4, AP 6</span>
                    </div>
                    <div className="flex justify-between items-center py-2.5 border-b border-slate-200/60 dark:border-slate-800">
                      <span className="text-xs text-slate-500 font-medium">Faculty Members</span>
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-100">6 Specialized Teachers</span>
                    </div>
                    <div className="flex justify-between items-center py-2.5 border-b border-slate-200/60 dark:border-slate-800">
                      <span className="text-xs text-slate-500 font-medium">School Motto</span>
                      <span className="text-xs italic font-bold text-slate-800 dark:text-slate-100">"{SCHOOL_INFO.motto}"</span>
                    </div>
                    <div className="flex justify-between items-center py-2.5">
                      <span className="text-xs text-slate-500 font-medium">Core Structure</span>
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-100">{SCHOOL_INFO.type}</span>
                    </div>
                  </div>

                  <div className="text-center bg-brand-blue/5 dark:bg-brand-gold/5 rounded-2xl py-4">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Tuition Fees Rate</p>
                    <p className="text-2xl font-black font-display text-brand-blue dark:text-brand-gold mt-1">KSh 3,600 / Term</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE STATEMENT PLACEHOLDERS */}
      <section className="py-20 bg-transparent transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badgeText="Our Mission & Direction"
            title="Vision, Mission, and Values"
            subtitle="Providing structural pillars of growth while the school administration continues reviewing policies."
          />

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission Card Placeholder */}
            <div className="glass p-8 rounded-2xl shadow-sm text-center space-y-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue dark:bg-brand-gold/15 dark:text-brand-gold">
                <Target className="h-6 w-6" />
              </span>
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">Our Mission</h3>
              
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-dashed border-slate-200 dark:border-slate-800">
                <p className="text-xs text-slate-400 italic">
                  "Information will be updated by the school."
                </p>
                <p className="text-[10px] text-slate-400 mt-2 font-sans">
                  The formal mission statement is being authorized by our advisory committee.
                </p>
              </div>
            </div>

            {/* Vision Card Placeholder */}
            <div className="glass p-8 rounded-2xl shadow-sm text-center space-y-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue dark:bg-brand-gold/15 dark:text-brand-gold">
                <Compass className="h-6 w-6" />
              </span>
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">Our Vision</h3>
              
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-dashed border-slate-200 dark:border-slate-800">
                <p className="text-xs text-slate-400 italic">
                  "Information will be updated by the school."
                </p>
                <p className="text-[10px] text-slate-400 mt-2 font-sans">
                  Our core visual model maps to a prosperous, well-equipped primary center.
                </p>
              </div>
            </div>

            {/* Core Values Card Placeholder */}
            <div className="glass p-8 rounded-2xl shadow-sm text-center space-y-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue dark:bg-brand-gold/15 dark:text-brand-gold">
                <Heart className="h-6 w-6" />
              </span>
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">Core Values</h3>
              
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-dashed border-slate-200 dark:border-slate-800">
                <p className="text-xs text-slate-400 italic">
                  "Information will be updated by the school."
                </p>
                <p className="text-[10px] text-slate-400 mt-2 font-sans">
                  Values focusing on student discipline, teacher motivation, and local partnership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY PARENTS TRUST US */}
      <section className="py-20 bg-transparent transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 dark:text-white">
              Why Parents Choose Alicia Academy
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300">
              We focus on building actual literacy and student character rather than high costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl glass space-y-3.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue dark:bg-brand-gold/10 dark:text-brand-gold font-bold text-sm">
                01
              </span>
              <h4 className="font-display font-bold text-base text-slate-900 dark:text-white">
                Low-Cost Quality Admissions
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                At just KSh 3,600 per term, local families can access standardized level instructions without economic struggle.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass space-y-3.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue dark:bg-brand-gold/10 dark:text-brand-gold font-bold text-sm">
                02
              </span>
              <h4 className="font-display font-bold text-base text-slate-900 dark:text-white">
                Diligent Group of 6 Teachers
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                Our six full-time teachers are native educators who understand each family and child personally.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass space-y-3.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue dark:bg-brand-gold/10 dark:text-brand-gold font-bold text-sm">
                03
              </span>
              <h4 className="font-display font-bold text-base text-slate-900 dark:text-white">
                Holiday Tuition Progress
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                Using morning class cycles during holidays, we make sure pupils don't forget their subjects over long breaks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
