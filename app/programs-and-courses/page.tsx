'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CourseCategory from './course-category';
import ResourceHub from './resource-hub';
import MentorSpotlight from './mentor-spotlight';
import { courseCategories } from '../data/courseData';
import Image from 'next/image';

export default function ProgramsAndCoursesPage() {
  return (
    <div className="bg-white min-h-screen text-gray-800 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Empower Your Learning Journey
        </motion.h1>
        <motion.p 
          className="text-xl mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover curated, free resources and connect with industry expert mentors.
          At GuruAvatar, we believe in making quality education accessible to all.
        </motion.p>

        <div className="text-center mb-12">
          <Image 
            src="/images/programs-and-courses/header-image.webp" 
            alt="Programs and Courses" 
            width={1200} 
            height={600} 
            className="rounded-lg mx-auto"
          />
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Course Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseCategories.map((category, index) => (
              <CourseCategory key={index} category={category} index={index} />
            ))}
          </div>
        </section>

        <ResourceHub />
        <MentorSpotlight />
      </div>
    </div>
  );
}