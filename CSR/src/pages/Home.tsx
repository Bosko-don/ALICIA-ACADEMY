/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  GraduationCap,
  Calendar,
  Award,
  Users,
  Clock,
  ArrowRight,
  ChevronRight,
  BookOpen,
  Heart,
  Star,
  Compass,
  ArrowUpRight
} from 'lucide-react';
import { SCHOOL_INFO } from '../types';
import { SectionHeader } from '../components/UI';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'preschool' | 'primary'>('primary');

  // Stats
  const stats = [
    { value: '6', label: 'Dedicated Teachers', icon: Users, suffix: '' },
    { value: '3', label: 'Levels Available', icon: GraduationCap, suffix: '' },
    { value: 'KSh 3,600', label: 'Tuition Fee per Term', icon: Award, suffix: '' },
    { value: '100%', label: 'Commitment Rate', icon: Heart, suffix: '' }
  ];

  const features = [
    {
      title: 'Aspire to Excell',
      desc: 'Our motto drives every student, teacher, and activity at Alicia Academy, inspiring them to reach their full potential.',
      icon: Award,
      color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
    },
    {
      title: 'Warm Community Project',
      desc: 'Established with love and passion as a community initiative, ensuring affordable quality primary education.',
      icon: Heart,
      color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
    },
    {
      title: 'Morning Tuition Programme',
      desc: 'High-focus holiday tuition conducted mainly in the morning, keeping pupils active and ahead of their syllabus.',
      icon: Clock,
      color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
    },
    {
      title: 'Public Calendar Alignment',
      desc: 'Seamlessly follows the standard public school academic calendar for smooth transitions and exams scheduling.',
      icon: Calendar,
      color: 'bg-rose-500/10 text-rose-600 dark:text-rose-400'
    }
  ];

  const testimonials = [
    {
      quote: "The dedication of the 6 teachers here is outstanding. They treat every child as an individual. Alicia Academy has brought immense positive change to our village.",
      author: "Local Village Elder / Parent",
      stars: 5,
      date: "May 2026"
    },
    {
      quote: "Our children participate in morning tuition during the holidays, which keeps them academically sharp. The fees are highly affordable for families.",
      author: "Primary Grade 4 Parent",
      stars: 5,
      date: "April 2026"
    }
  ];

  return (
    <div className="overflow-x-hidden pt-16">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-950 text-white pt-12 pb-24 overflow-hidden">
        {/* Animated Background Gradients & Orbs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-brand-blue/20 blur-[100px] animate-pulse-soft" />
          <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-brand-gold/15 blur-[120px] animate-pulse-soft" style={{ animationDelay: '2s' }} />
          {/* Aesthetic Dark overlay pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
          {/* Main Visual background element representing Kenya village surroundings / modern classroom abstract gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900/90 to-brand-blue/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading and Info */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-semibold uppercase tracking-wider font-display"
              >
                <Compass className="h-4 w-4 animate-spin-slow text-brand-gold" />
                <span>Premium Community Project School</span>
              </motion.div>

              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight"
                >
                  Fostering Minds,<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-amber-300 to-white">
                    Inspiring Futures.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg md:text-xl text-slate-300 font-sans leading-relaxed"
                >
                  Welcome to <strong className="text-white font-semibold">{SCHOOL_INFO.name}</strong>, where academic dedication meets a positive, supportive community atmosphere. Rooted in our core motto <span className="italic text-brand-gold">"{SCHOOL_INFO.motto}"</span>.
                </motion.p>
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <Link to="/admissions" className="w-full sm:w-auto">
                  <button className="w-full px-8 py-4 bg-brand-gold hover:bg-brand-gold-hover text-brand-dark font-display font-bold rounded-xl shadow-lg shadow-brand-gold/20 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer">
                    Enroll Child Now
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </Link>
                <Link to="/about" className="w-full sm:w-auto">
                  <button className="w-full px-8 py-4 bg-slate-800/80 hover:bg-slate-700 text-white font-display font-semibold rounded-xl border border-slate-700 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer">
                    Explore Our Story
                    <BookOpen className="h-5 w-5" />
                  </button>
                </Link>
              </motion.div>

              {/* Notice tags */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-4 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-slate-400"
              >
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Admissions Open (Pre-School, Grade 4, AP 6)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-brand-gold" />
                  Termly Tuition: {SCHOOL_INFO.fees.tuition}
                </span>
              </motion.div>
            </div>

            {/* Right Column: High Quality Modern Card Shield Ornament */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative w-full max-w-sm">
                {/* Decorative glowing backplate */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-brand-blue to-brand-gold opacity-10 blur-xl animate-float" />
                
                {/* Main Hero Card Visual - representing the academy's values */}
                <div className="relative glass-dark rounded-3xl p-8 border border-slate-800/80 space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                    <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest font-display">
                      Academic Core
                    </span>
                    <span className="flex items-center gap-1 text-[11px] bg-emerald-500/15 text-emerald-400 font-bold px-2.5 py-0.5 rounded-full">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Active Project
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-display font-bold text-xl text-white">
                      Levels of Enrollment
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      We offer intensive learning options for early learners and candidates, adapting to modern curriculum expectations.
                    </p>

                    {/* Levels Showcase */}
                    <div className="grid grid-cols-3 gap-3">
                      {SCHOOL_INFO.currentLevels.map((lvl) => (
                        <div
                          key={lvl}
                          className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center hover:border-brand-gold/40 transition-colors"
                        >
                          <span className="text-brand-gold font-display font-extrabold text-xs">
                            {lvl}
                          </span>
                          <span className="text-[9px] text-slate-500 uppercase font-sans tracking-wide mt-1">
                            Available
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Trust Badge Card Info */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-500 font-sans">
                        School Motto
                      </p>
                      <p className="font-display font-bold text-white text-sm">
                        {SCHOOL_INFO.motto}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] uppercase tracking-wider text-slate-500 font-sans">
                        Teachers Team
                      </p>
                      <p className="font-display font-extrabold text-brand-gold text-lg">
                        6 Primary
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Diagonal Wave Divider transition into features */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-brand-light dark:bg-slate-900" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }} />
      </section>

      {/* 2. STATS BAR SECTION */}
      <section className="bg-white/30 dark:bg-slate-950/20 backdrop-blur-md py-12 border-y border-white/25 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center p-6 glass rounded-2xl shadow-sm"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue dark:bg-brand-gold/10 dark:text-brand-gold mb-4">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-display font-black text-2xl sm:text-3xl text-slate-900 dark:text-white">
                    {stat.value}{stat.suffix}
                  </span>
                  <span className="mt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                    {stat.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES & MOTTO SECTION */}
      <section className="py-24 bg-transparent transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badgeText="Educational Philosophy"
            title="Why Enroll at Alicia Academy?"
            subtitle="Providing an outstanding community school environment with high dedication and academic integrity."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="glow-card group p-8 glass rounded-2xl transition-all duration-300"
                >
                  <div className={`p-3.5 rounded-xl w-fit ${feat.color} mb-6 transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-3">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {feat.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. DEPARTMENTS & CURRICULUM SECTION */}
      <section className="py-24 bg-transparent transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Header info */}
            <div className="lg:col-span-5 space-y-6">
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-brand-blue/10 text-brand-blue dark:bg-brand-gold/15 dark:text-brand-gold rounded-full font-display">
                Our Departments
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white leading-tight">
                Quality Education Structured Across Essential Levels
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Alicia Academy structures learning pathways to guarantee core syllabus mastery. We guide pupils starting from pre-school and continue offering robust assistance in later standard primary grades.
              </p>

              {/* Dynamic Tabs selectors */}
              <div className="flex gap-3 glass p-2 rounded-2xl shadow-sm w-fit">
                <button
                  onClick={() => setActiveTab('primary')}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold font-display transition-all cursor-pointer ${
                    activeTab === 'primary'
                      ? 'bg-brand-blue text-white dark:bg-brand-gold dark:text-brand-dark'
                      : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
                  }`}
                >
                  Primary Section
                </button>
                <button
                  onClick={() => setActiveTab('preschool')}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold font-display transition-all cursor-pointer ${
                    activeTab === 'preschool'
                      ? 'bg-brand-blue text-white dark:bg-brand-gold dark:text-brand-dark'
                      : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
                  }`}
                >
                  Pre-School Section
                </button>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <Link to="/academics" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue dark:text-brand-gold hover:underline">
                  View Academics Syllabus Details
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Interactive tabs content */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                {activeTab === 'primary' ? (
                  <motion.div
                    key="primary-tab"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 glass-deep rounded-3xl shadow-md space-y-6"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue dark:bg-brand-gold/10 dark:text-brand-gold">
                          <BookOpen className="h-5.5 w-5.5" />
                        </span>
                        <div>
                          <h3 className="font-display font-extrabold text-slate-900 dark:text-white text-lg">Primary Section</h3>
                          <p className="text-[10px] text-slate-400 font-sans tracking-widest uppercase">Grade levels up to AP 6</p>
                        </div>
                      </div>
                      <span className="text-xs bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 font-bold px-3 py-1 rounded-full">
                        AP 6 & Grade 4 Active
                      </span>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Our primary curriculum concentrates heavily on solid literacy, numeracy, science concepts, and cultural knowledge aligned with standard curriculum standards.
                    </p>

                    <div className="space-y-3.5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Section Features</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                          <span className="h-2 w-2 rounded-full bg-brand-gold" />
                          <span>Candidate class orientation (AP 6)</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                          <span className="h-2 w-2 rounded-full bg-brand-gold" />
                          <span>Intensive syllabus evaluation</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                          <span className="h-2 w-2 rounded-full bg-brand-gold" />
                          <span>Experienced primary subject teachers</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                          <span className="h-2 w-2 rounded-full bg-brand-gold" />
                          <span>Inclusive interactive teaching sessions</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 dark:border-slate-900 flex justify-between items-center text-xs">
                      <span className="text-slate-400">Weekly Evaluation Scheduled</span>
                      <Link to="/admissions" className="font-bold text-brand-blue dark:text-brand-gold hover:underline flex items-center gap-1">
                        Apply for Primary <ChevronRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="preschool-tab"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 glass-deep rounded-3xl shadow-md space-y-6"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue dark:bg-brand-gold/10 dark:text-brand-gold">
                          <Compass className="h-5.5 w-5.5" />
                        </span>
                        <div>
                          <h3 className="font-display font-extrabold text-slate-900 dark:text-white text-lg">Pre-School Section</h3>
                          <p className="text-[10px] text-slate-400 font-sans tracking-widest uppercase">Early childhood development</p>
                        </div>
                      </div>
                      <span className="text-xs bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 font-bold px-3 py-1 rounded-full">
                        Ages 3 - 6 Years
                      </span>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Focusing on motor skills, interactive storytelling, visual memory, cognitive foundations, and basic socialization. We welcome young pupils warmly to their educational path.
                    </p>

                    <div className="space-y-3.5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Section Features</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                          <span className="h-2 w-2 rounded-full bg-brand-blue" />
                          <span>Nurturing community environment</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                          <span className="h-2 w-2 rounded-full bg-brand-blue" />
                          <span>Fine and gross motor exploration</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                          <span className="h-2 w-2 rounded-full bg-brand-blue" />
                          <span>Phonetics and early counting</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                          <span className="h-2 w-2 rounded-full bg-brand-blue" />
                          <span>Friendly social play and building blocks</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 dark:border-slate-900 flex justify-between items-center text-xs">
                      <span className="text-slate-400">Morning Timetable Focused</span>
                      <Link to="/admissions" className="font-bold text-brand-blue dark:text-brand-gold hover:underline flex items-center gap-1">
                        Apply for Pre-School <ChevronRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOLIDAY TUITION & CALENDAR PREVIEW */}
      <section className="py-24 bg-transparent transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-tr from-brand-blue to-blue-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
            {/* Visual glow overlay */}
            <div className="absolute right-0 top-0 w-80 h-80 bg-brand-gold/15 rounded-full blur-[90px]" />
            <div className="absolute -left-16 -bottom-16 w-80 h-80 bg-brand-blue/30 rounded-full blur-[100px]" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8 space-y-6">
                <span className="px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-brand-gold text-brand-dark rounded-full font-display">
                  Syllabus Progress Initiative
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3.5xl tracking-tight leading-tight">
                  Morning Holiday Tuition Programme
                </h3>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  We run active morning tuition classes during designated school holidays. This allows our students to cover demanding syllabus parameters, clarify challenging subject topics, and reinforce core exam skills.
                </p>

                {/* Calendar Notice */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-xs">
                  <div className="flex items-center gap-2 bg-slate-950/40 px-3.5 py-2 rounded-xl">
                    <Calendar className="h-4.5 w-4.5 text-brand-gold" />
                    <span><strong>Term Calendar:</strong> Follows Public School Calendar</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-950/40 px-3.5 py-2 rounded-xl">
                    <Clock className="h-4.5 w-4.5 text-brand-gold" />
                    <span><strong>Class Time:</strong> Morning Sessions Focused</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 w-full max-w-sm text-center">
                  <h4 className="font-display font-bold text-brand-gold text-sm uppercase tracking-wide mb-2">
                    Tuition Rates
                  </h4>
                  <p className="text-3xl font-black font-display text-white mt-1">
                    KSh 3,600
                  </p>
                  <p className="text-xs text-slate-300 mt-1">Per academic term tuition rate</p>
                  <p className="text-[10px] text-amber-200 mt-2 bg-white/5 py-1 rounded-md">
                    * Lunch is KSh 2,400 separate option
                  </p>
                  <Link to="/fees">
                    <button className="mt-5 w-full py-3 bg-white hover:bg-slate-100 text-brand-blue font-display font-bold text-xs rounded-xl transition-all duration-300 cursor-pointer shadow-sm">
                      Detailed Fee breakdown
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section className="py-24 bg-transparent transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badgeText="Community Opinions"
            title="What Parents Say About Us"
            subtitle="Read real expressions of trust from families, elders, and community members."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((test, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass p-8 rounded-2xl shadow-sm relative"
              >
                {/* Gold Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(test.stars)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 text-brand-gold fill-current" />
                  ))}
                </div>

                <p className="text-slate-600 dark:text-slate-300 italic text-sm sm:text-base leading-relaxed mb-6">
                  "{test.quote}"
                </p>

                <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-900 pt-4">
                  <div>
                    <h5 className="font-display font-bold text-xs text-slate-900 dark:text-white uppercase tracking-wider">
                      {test.author}
                    </h5>
                    <p className="text-[10px] text-slate-400 mt-0.5">Alicia Academy Supporter</p>
                  </div>
                  <span className="text-[10px] bg-brand-blue/5 text-brand-blue dark:bg-brand-gold/10 dark:text-brand-gold font-bold px-3 py-1 rounded-full uppercase">
                    {test.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ADMISSIONS BANNER (CTA) */}
      <section className="py-12 bg-transparent transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-900 via-brand-dark to-slate-900 text-white rounded-3xl p-8 md:p-12 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl" />
            
            <div className="space-y-4 max-w-xl text-center md:text-left relative z-10">
              <span className="text-brand-gold text-[10px] font-bold tracking-widest uppercase block font-display">
                Start Enrolling Today
              </span>
              <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tight text-white leading-tight">
                Secure a Brighter Path for Your Child
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Admissions are currently active. Verify eligibility parameters on the Admissions page and get in touch with our faculty to set up an interview.
              </p>
            </div>

            <div className="shrink-0 relative z-10">
              <Link to="/admissions">
                <button className="px-8 py-3.5 bg-brand-gold hover:bg-brand-gold-hover text-brand-dark font-display font-bold text-sm rounded-full shadow-md shadow-brand-gold/10 transition-all duration-300 hover:scale-105 cursor-pointer">
                  View Admissions Guidelines
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
