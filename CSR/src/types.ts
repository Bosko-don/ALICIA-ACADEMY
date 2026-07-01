/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Teacher {
  id: string;
  name: string;
  role: string;
  qualification?: string;
  image?: string;
  bio?: string;
}

export interface StudentSuccess {
  id: string;
  name: string;
  level: string;
  achievement: string;
  score?: string;
  image?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'campus' | 'academics' | 'activities' | 'events';
  imageUrl: string;
  description?: string;
}

export interface SchoolStats {
  teachersCount: number;
  departmentsCount: number;
  pupilsCountPlaceholder: string;
  establishedPlaceholder: string;
}

export const SCHOOL_INFO = {
  name: "ALICIA ACADEMY",
  type: "Community Project",
  level: "Primary School",
  motto: "Aspire to Excell",
  principalEmail: "alicedira36@gmail.com",
  futureAdministrator: "Mildred Atieno",
  departments: ["Pre-School", "Primary"],
  currentLevels: ["Pre-School", "Grade 4", "AP 6"],
  fees: {
    tuition: "KSh 3,600 per term",
    lunch: "KSh 2,400 per term (Separate)"
  },
  tuitionProgramme: "Holiday tuition conducted mostly in the morning.",
  calendar: "Follows the Kenyan public school calendar (3 Terms per year).",
  contact: {
    phonePlaceholder: "Information will be updated by the school.",
    addressPlaceholder: "Kenyan Village Community, Kenya (Detailed address placeholder - will be updated by the school.)",
    hoursPlaceholder: "Monday - Friday: 8:00 AM - 4:00 PM | Saturday: Morning Holiday Tuition (when active) | Sunday: Closed"
  }
};
