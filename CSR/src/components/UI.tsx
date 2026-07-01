/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// 1. Scroll To Top Button
export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          id="back-to-top-btn"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-white shadow-lg shadow-brand-blue/30 hover:bg-brand-blue-hover focus:outline-none focus:ring-2 focus:ring-brand-gold dark:bg-brand-gold dark:text-brand-dark dark:shadow-brand-gold/20 dark:hover:bg-brand-gold-hover cursor-pointer"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// 2. Scroll Progress Bar
export function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-slate-100 dark:bg-slate-800">
      <div
        className="h-full bg-gradient-to-r from-brand-blue via-brand-gold to-brand-blue transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

// 3. Section Header
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badgeText?: string;
  centered?: boolean;
  dark?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  badgeText,
  centered = true,
  dark = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 max-w-3xl ${centered ? 'mx-auto text-center' : 'text-left'}`}>
      {badgeText && (
        <span className="inline-block px-4 py-1.5 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-brand-blue/10 text-brand-blue dark:bg-brand-gold/10 dark:text-brand-gold font-display">
          {badgeText}
        </span>
      )}
      <h2
        className={`font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight ${
          dark ? 'text-white' : 'text-slate-900 dark:text-white'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg font-sans ${
            dark ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className={`mt-4 flex ${centered ? 'justify-center' : 'justify-start'}`}>
        <div className="h-[4px] w-12 rounded-full bg-brand-gold" />
        <div className="ml-1 h-[4px] w-2 rounded-full bg-brand-blue" />
      </div>
    </div>
  );
}

// 4. Breadcrumbs
export function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="py-4 bg-white/40 dark:bg-slate-950/20 border-y border-white/20 dark:border-white/5 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs font-medium font-sans">
        <Link
          to="/"
          className="text-slate-500 hover:text-brand-blue dark:text-slate-400 dark:hover:text-brand-gold transition-colors"
        >
          Home
        </Link>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const formattedValue = value.charAt(0).toUpperCase() + value.slice(1);

          return (
            <React.Fragment key={to}>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400 shrink-0" />
              {last ? (
                <span className="text-brand-blue dark:text-brand-gold font-semibold truncate max-w-[200px]" aria-current="page">
                  {formattedValue}
                </span>
              ) : (
                <Link
                  to={to}
                  className="text-slate-500 hover:text-brand-blue dark:text-slate-400 dark:hover:text-brand-gold transition-colors"
                >
                  {formattedValue}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}

// 5. Badge Component
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'gold' | 'success' | 'outline';
}

export function Badge({ children, variant = 'primary' }: BadgeProps) {
  const styles = {
    primary: 'bg-brand-blue/10 text-brand-blue border border-brand-blue/20 dark:bg-brand-blue/20 dark:text-sky-300',
    secondary: 'bg-slate-100 text-slate-800 border border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700',
    gold: 'bg-brand-gold/10 text-brand-gold border border-brand-gold/20 dark:bg-brand-gold/20 dark:text-brand-gold',
    success: 'bg-brand-green/10 text-brand-green border border-brand-green/20 dark:bg-brand-green/20 dark:text-emerald-400',
    outline: 'bg-transparent text-slate-600 border border-slate-300 dark:text-slate-300 dark:border-slate-600',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-md ${styles[variant]}`}>
      {children}
    </span>
  );
}
