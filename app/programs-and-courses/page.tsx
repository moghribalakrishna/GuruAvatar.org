// app/programs-and-courses/page.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CourseCategory from './course-category';
import ResourceHub from './resource-hub';
import MentorSpotlight from './mentor-spotlight';
import { courseCategories } from '../data/courseData';

export default function ProgramsAndCoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-800 to-teal-700 text-white">
      <motion.div 
        className="max-w-7xl mx-auto px-4 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-bold text-center mb-8">Empower Your Learning Journey</h1>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
          Discover curated, free resources and connect with industry expert mentors. 
          At GuruAvatar, we believe in making quality education accessible to all.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courseCategories.map((category, index) => (
            <CourseCategory key={index} category={category} />
          ))}
        </div>

        <ResourceHub />
        <MentorSpotlight />
      </motion.div>
    </div>
  );
}