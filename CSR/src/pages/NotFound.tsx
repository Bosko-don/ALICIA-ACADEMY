/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Compass, ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-slate-950 text-white relative overflow-hidden px-4 pt-20 font-sans">
      {/* Decorative Orbs */}
      <div className="absolute top-1/3 left-1/3 w-[250px] h-[250px] rounded-full bg-brand-blue/10 blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/3 w-[250px] h-[250px] rounded-full bg-brand-gold/10 blur-[100px] animate-pulse" />

      <div className="relative z-10 text-center max-w-md space-y-8">
        {/* Animated Compass Icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-brand-blue/20 border border-brand-blue/40 text-brand-gold mx-auto"
        >
          <Compass className="h-10 w-10" />
        </motion.div>

        <div className="space-y-3">
          <h1 className="font-display font-black text-6xl md:text-7xl text-brand-gold tracking-tight">
            404
          </h1>
          <h2 className="font-display font-bold text-xl md:text-2xl text-white">
            Page Not Located
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mx-auto">
            The page you are looking for does not exist or has been relocated by the school administration. Let's return to the academy home.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/" className="w-full sm:w-auto">
            <button className="w-full px-6 py-3 bg-brand-gold hover:bg-brand-gold-hover text-brand-dark font-display font-bold text-xs rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer">
              <Home className="h-4 w-4" />
              Academy Home
            </button>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-display font-semibold text-xs rounded-xl border border-slate-800 transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
