/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Shield, Award, Calendar, ExternalLink, Heart } from 'lucide-react';
import { SCHOOL_INFO } from '../types';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 border-t border-slate-800 transition-colors">
      {/* Top Banner / Core Announcement */}
      <div className="border-b border-slate-800 bg-slate-950/40 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold">
              <Award className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display font-bold text-sm text-white">Holiday Tuition Programme</p>
              <p className="text-xs text-slate-400">{SCHOOL_INFO.tuitionProgramme}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/20 text-brand-blue">
              <Calendar className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display font-bold text-sm text-white">Public School Calendar</p>
              <p className="text-xs text-slate-400">{SCHOOL_INFO.calendar}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: School Identity */}
          <div className="space-y-6">
            <Logo iconSize={48} showText={true} className="text-white" />
            <p className="font-display italic text-sm text-slate-400 font-semibold border-l-2 border-brand-gold pl-3">
              "{SCHOOL_INFO.motto}"
            </p>
            <p className="text-xs leading-relaxed text-slate-400">
              Alicia Academy is a committed community project primary school in Kenya, fostering a positive learning atmosphere to give every child a foundation of excellence.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-display font-bold text-white text-base tracking-wider uppercase mb-6 border-b border-slate-800 pb-2">
              Academics
            </h3>
            <ul className="space-y-3.5 text-sm font-sans">
              <li>
                <Link to="/about" className="hover:text-brand-gold transition-colors flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                  About the Project
                </Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-brand-gold transition-colors flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                  Departments
                </Link>
              </li>
              <li>
                <Link to="/exams" className="hover:text-brand-gold transition-colors flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                  Exams & Stars
                </Link>
              </li>
              <li>
                <Link to="/staff" className="hover:text-brand-gold transition-colors flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                  Our Faculty (6 Teachers)
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-brand-gold transition-colors flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                  Academy Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Admissions */}
          <div>
            <h3 className="font-display font-bold text-white text-base tracking-wider uppercase mb-6 border-b border-slate-800 pb-2">
              Admissions & Fees
            </h3>
            <ul className="space-y-3.5 text-sm font-sans">
              <li>
                <Link to="/admissions" className="hover:text-brand-gold transition-colors flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                  Admissions Overview
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-brand-gold transition-colors flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                  Child Requirements
                </Link>
              </li>
              <li>
                <Link to="/fees" className="hover:text-brand-gold transition-colors flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                  Fee Structure
                </Link>
              </li>
              <li>
                <span className="text-xs text-slate-500 block pt-1 pl-3.5">
                  Tuition: {SCHOOL_INFO.fees.tuition}
                </span>
                <span className="text-xs text-slate-500 block pl-3.5">
                  Lunch: {SCHOOL_INFO.fees.lunch}
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div>
            <h3 className="font-display font-bold text-white text-base tracking-wider uppercase mb-6 border-b border-slate-800 pb-2">
              Direct Contact
            </h3>
            <div className="space-y-4 text-xs font-sans">
              <div className="flex items-start gap-2.5">
                <Mail className="h-4.5 w-4.5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white text-xs">Principal's Email</p>
                  <a
                    href={`mailto:${SCHOOL_INFO.principalEmail}`}
                    className="text-brand-blue dark:text-sky-400 hover:underline break-all"
                  >
                    {SCHOOL_INFO.principalEmail}
                  </a>
                </div>
              </div>

              {SCHOOL_INFO.futureAdministrator && (
                <div className="pt-2 border-t border-slate-800">
                  <p className="font-semibold text-slate-400">Future Administration:</p>
                  <p className="font-bold text-white">{SCHOOL_INFO.futureAdministrator}</p>
                </div>
              )}

              <div className="pt-2 border-t border-slate-800">
                <p className="text-slate-500 italic">
                  Other contact channels (phone, location markers) will be updated by the school when confirmed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Copyright Area */}
      <div className="border-t border-slate-800 bg-slate-950 py-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p>© {currentYear} {SCHOOL_INFO.name}. All rights reserved.</p>
            <p className="mt-1 text-slate-600">
              Community Project Primary School Level • Fostering Education with Integrity.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span className="hover:text-slate-400 cursor-help" title="Terms will be updated by the school administration.">
              Terms of Use Placeholder
            </span>
            <span className="hover:text-slate-400 cursor-help" title="Privacy policy parameters will be updated by the school.">
              Privacy Policy Placeholder
            </span>
            <span className="flex items-center gap-1">
              Made with <Heart className="h-3 w-3 text-red-500 fill-current" /> for the community
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
