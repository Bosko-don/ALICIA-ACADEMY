/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import {
  DollarSign,
  Receipt,
  UtensilsCrossed,
  Info,
  CheckCircle,
  HelpCircle,
  AlertCircle,
  CreditCard
} from 'lucide-react';
import { SCHOOL_INFO } from '../types';
import { SectionHeader, Breadcrumbs } from '../components/UI';

export default function Fees() {
  return (
    <div className="pt-24 overflow-x-hidden">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-gold text-xs font-semibold tracking-wider uppercase font-display">
            Financial Transparency
          </span>
          <h1 className="mt-2 font-display font-extrabold text-3.5xl sm:text-4.5xl text-white">
            School Fees & Rates
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-slate-300 font-sans">
            Clear, affordable structured tuition rates to allow accessible primary schooling for children.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* 1. FEE STRUCTURE BLOCKS */}
      <section className="py-20 bg-transparent transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badgeText="Term Costs"
            title="Tuition & Lunch Costs Breakdown"
            subtitle="Understand our transparent fees. We maintain highly cost-effective metrics to remain accessible."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Core Tuition Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass p-8 rounded-3xl space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue dark:bg-brand-gold/15 dark:text-brand-gold">
                    <Receipt className="h-5.5 w-5.5" />
                  </span>
                  <span className="text-[10px] bg-brand-blue/5 text-brand-blue dark:bg-brand-gold/10 dark:text-brand-gold font-bold px-3 py-1 rounded-full uppercase">
                    Mandatory Core
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-black text-slate-900 dark:text-white text-xl">Tuition Fees</h3>
                  <p className="text-xs text-slate-400">Covers core standard and morning tuition classes.</p>
                </div>

                {/* Fees Large Display */}
                <div className="py-4 border-y border-slate-200/60 dark:border-slate-850">
                  <p className="text-[10px] uppercase font-bold text-slate-400">Term Rate</p>
                  <p className="text-3.5xl font-black font-display text-brand-blue dark:text-brand-gold mt-1">
                    KSh 3,600
                  </p>
                  <p className="text-xs text-slate-500 mt-1">Per child, per academic term (3 terms per year)</p>
                </div>

                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">What's Covered</h4>
                  <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 font-sans">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                      Daily academic syllabus sessions
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                      Continuous assessments and reporting
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                      Holiday morning tuition cycles
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Optional Lunch Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="glass p-8 rounded-3xl space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue dark:bg-brand-gold/15 dark:text-brand-gold">
                    <UtensilsCrossed className="h-5.5 w-5.5" />
                  </span>
                  <span className="text-[10px] bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 font-bold px-3 py-1 rounded-full uppercase">
                    Separate Option
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-black text-slate-900 dark:text-white text-xl">Lunch Provision</h3>
                  <p className="text-xs text-slate-400">Optional warm food service conducted on campus grounds.</p>
                </div>

                {/* Fees Large Display */}
                <div className="py-4 border-y border-slate-200/60 dark:border-slate-850">
                  <p className="text-[10px] uppercase font-bold text-slate-400">Term Rate</p>
                  <p className="text-3.5xl font-black font-display text-slate-700 dark:text-slate-300 mt-1">
                    KSh 2,400
                  </p>
                  <p className="text-xs text-slate-500 mt-1">Per child, per academic term (Separate billing)</p>
                </div>

                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">What's Covered</h4>
                  <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 font-sans">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                      Daily nutritional school lunch meals
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                      Sourced under high hygienic specifications
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                      Separate enrollment tracking
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. BANK CHANNELS & PAYMENT PLACEHOLDERS */}
      <section className="py-20 bg-transparent transition-colors border-t border-white/15 dark:border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="glass rounded-3xl p-8 sm:p-12 shadow-sm space-y-8">
            <div className="text-center">
              <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-brand-blue/10 text-brand-blue dark:bg-brand-gold/15 dark:text-brand-gold rounded-full font-display">
                Payment Procedures
              </span>
              <h3 className="font-display font-extrabold text-2xl text-slate-900 dark:text-white mt-3">
                Authorized Channels & Installments
              </h3>
              <p className="text-xs text-slate-500 mt-2 font-sans">
                Refer to our designated administrative updates regarding MPESA paybills or official banking directories.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Payment Notes Placeholders */}
              <div className="p-6 glass-deep rounded-2xl space-y-4">
                <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                  <CreditCard className="h-4.5 w-4.5 text-brand-blue" />
                  Official Accounts Information
                </h4>
                
                <div className="p-4 bg-white/40 dark:bg-slate-950/20 backdrop-blur-sm border border-dashed border-white/20 dark:border-white/5 rounded-xl">
                  <p className="text-xs text-slate-400 italic font-medium">"Information will be updated by the school."</p>
                  <p className="text-[10px] text-slate-400 mt-1.5 leading-normal">
                    Bank names, account numbers, and official branches will be explicitly cataloged upon committee approval.
                  </p>
                </div>
              </div>

              {/* Installment policies */}
              <div className="p-6 glass-deep rounded-2xl space-y-4">
                <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                  <Info className="h-4.5 w-4.5 text-brand-gold" />
                  Installment Policies
                </h4>
                
                <div className="p-4 bg-white/40 dark:bg-slate-950/20 backdrop-blur-sm border border-dashed border-white/20 dark:border-white/5 rounded-xl">
                  <p className="text-xs text-slate-400 italic font-medium">"Information will be updated by the school."</p>
                  <p className="text-[10px] text-slate-400 mt-1.5 leading-normal">
                    Payment schedules, grace periods, and clearance terms will be updated shortly.
                  </p>
                </div>
              </div>

            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-950/25 border border-amber-200 rounded-2xl flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
              <div className="text-xs text-amber-800 dark:text-amber-300 space-y-1">
                <p className="font-bold">Important Term Fees Guidance:</p>
                <p className="leading-relaxed">
                  All fee receipts must be verified directly with the principal or treasurer at the school grounds. Avoid any unofficial online payment options unless they are formally posted on this website. Contact <span className="font-semibold underline">{SCHOOL_INFO.principalEmail}</span> for instant inquiries.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
