/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Image as ImageIcon,
  Layers,
  Sparkles,
  BookOpen,
  X,
  Compass,
  Smile,
  Zap,
  Maximize2
} from 'lucide-react';
import { SectionHeader, Breadcrumbs } from '../components/UI';

// Real photo assets generated for the gallery
import classroomBlockExterior from '../assets/images/classroom_block_exterior_1782803264184.jpg';
import grade4Tuition from '../assets/images/grade_4_tuition_1782803276912.jpg';
import preschoolActivity from '../assets/images/preschool_activity_1782803291634.jpg';
import schoolAssemblyGround from '../assets/images/school_assembly_ground_1782803302552.jpg';
import candidatePrep from '../assets/images/candidate_prep_1782803316699.jpg';
import closingCelebration from '../assets/images/closing_celebration_1782803327798.jpg';

interface GalleryItem {
  id: string;
  title: string;
  category: 'campus' | 'academics' | 'activities' | 'events';
  description: string;
  image: string; // Dynamic high-quality real image asset path
  icon: React.ComponentType<any>;
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'campus' | 'academics' | 'activities' | 'events'>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const galleryItems: GalleryItem[] = [
    {
      id: "gal-1",
      title: "Classroom Block Exterior",
      category: "campus",
      description: "Our core educational classroom building, designed to provide safety and warmth.",
      image: classroomBlockExterior,
      icon: Compass
    },
    {
      id: "gal-2",
      title: "Primary Grade 4 Tuition",
      category: "academics",
      description: "Interactive mathematics lesson conducted during the morning tuition programme.",
      image: grade4Tuition,
      icon: BookOpen
    },
    {
      id: "gal-3",
      title: "Pre-School Activity Time",
      category: "activities",
      description: "Early childhood development learners engaging in motor skills and building blocks.",
      image: preschoolActivity,
      icon: Smile
    },
    {
      id: "gal-4",
      title: "School Assembly Ground",
      category: "campus",
      description: "Open environment where pupils line up for the flag raising and daily instructions.",
      image: schoolAssemblyGround,
      icon: Layers
    },
    {
      id: "gal-5",
      title: "AP 6 Candidate Prep",
      category: "academics",
      description: "Dedicated exam strategy session with our specialized primary school teachers.",
      image: candidatePrep,
      icon: Zap
    },
    {
      id: "gal-6",
      title: "Closing Assembly Celebration",
      category: "events",
      description: "End of term event where parents and community members receive student reports.",
      image: closingCelebration,
      icon: Sparkles
    }
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const categories = [
    { value: 'all', label: 'All Photos' },
    { value: 'campus', label: 'Campus & Classrooms' },
    { value: 'academics', label: 'Academics & Tutors' },
    { value: 'activities', label: 'Pre-School Play' },
    { value: 'events', label: 'Community Events' }
  ] as const;

  return (
    <div className="pt-24 overflow-x-hidden">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-gold text-xs font-semibold tracking-wider uppercase font-display">
            Visual Highlights
          </span>
          <h1 className="mt-2 font-display font-extrabold text-3.5xl sm:text-4.5xl text-white">
            Academy Gallery
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-slate-300 font-sans">
            A window into the educational journey, classrooms, and activities at Alicia Academy.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* GALLERY INTERFACE */}
      <section className="py-20 bg-transparent transition-colors font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badgeText="Sights of Learning"
            title="Sights & Activity Highlights"
            subtitle="Filter through the various visual segments representing school life and community interactions."
          />

          {/* Categories Filters tab bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4.5 py-2 rounded-full text-xs font-bold font-display tracking-wide transition-all cursor-pointer border ${
                  selectedCategory === cat.value
                    ? 'bg-brand-blue text-white dark:bg-brand-gold dark:text-brand-dark border-transparent shadow-sm'
                    : 'bg-white/40 dark:bg-slate-950/20 text-slate-600 hover:bg-white/60 dark:text-slate-300 dark:hover:bg-slate-950/45 border-white/20 dark:border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid Layout of Cards */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group glass rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer"
                    onClick={() => setActiveItem(item)}
                  >
                    {/* Visual Card Image */}
                    <div className="h-48 relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Gentle overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                      
                      <span className="absolute bottom-3 left-3 bg-brand-blue/90 dark:bg-brand-gold/95 text-white dark:text-brand-dark text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full">
                        {item.category}
                      </span>
                      
                      <span className="absolute top-3 right-3 h-8 w-8 rounded-full bg-slate-950/40 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Maximize2 className="h-4 w-4 text-white" />
                      </span>
                    </div>

                    <div className="p-5 space-y-2 text-left">
                      <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 2. LIGHTBOX PREVIEW MODAL */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-xl p-4 md:p-10"
            role="dialog"
            aria-modal="true"
          >
            {/* Close trigger on outer backdrop */}
            <div className="absolute inset-0 cursor-zoom-out" onClick={() => setActiveItem(null)} />

            {/* Lightbox container */}
            <motion.div
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative glass-deep text-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl z-10"
            >
              {/* Top Banner Control bar */}
              <div className="absolute top-4 right-4 z-25">
                <button
                  onClick={() => setActiveItem(null)}
                  className="p-2 bg-slate-950/60 hover:bg-slate-950 text-white rounded-full transition-colors focus:ring-2 focus:ring-brand-gold focus:outline-none cursor-pointer"
                  aria-label="Close lightbox"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Large Image View */}
              <div className="h-64 sm:h-96 relative overflow-hidden">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                {/* Visual category tag overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 bg-brand-blue/90 dark:bg-brand-gold/90 text-white dark:text-brand-dark text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                  {activeItem.category} Section
                </span>
              </div>

              {/* Description Block */}
              <div className="p-6 sm:p-8 space-y-3 bg-slate-900 text-left border-t border-slate-800">
                <span className="text-[10px] text-brand-gold uppercase tracking-wider font-bold">
                  Alicia Academy Showcase
                </span>
                <h3 className="font-display font-extrabold text-lg sm:text-xl text-white">
                  {activeItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {activeItem.description}
                </p>
                <p className="text-[10px] text-slate-500 pt-1 font-sans border-t border-slate-800">
                  * Photograph representing official school grounds, learning setups, and student lifecycle events.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
