'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { courseCategories } from '../../data/courseData';
import CourseCard from '../course-card';

export default function CategoryPage() {
  const params = useParams();
  const category = decodeURIComponent(params.category);
  const categoryData = courseCategories.find(cat => cat.name.toLowerCase().replace(/\s+/g, '-') === category);

  if (!categoryData) {
    return <div>Category not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-800 to-teal-700 text-white">
      <motion.div 
        className="max-w-7xl mx-auto px-4 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-bold text-center mb-8">{categoryData.name}</h1>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto">{categoryData.description}</p>

        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Value Proposition</h2>
          <p className="text-lg mb-8">
            Our {categoryData.name} courses are designed to provide you with cutting-edge skills and knowledge in the field. 
            By enrolling in these courses, you'll gain:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>Practical, hands-on experience with industry-standard tools and techniques</li>
            <li>Insights from experienced professionals and thought leaders in {categoryData.name}</li>
            <li>A comprehensive understanding of both foundational concepts and advanced topics</li>
            <li>The ability to apply your learning to real-world projects and scenarios</li>
            <li>A competitive edge in the job market with in-demand skills</li>
          </ul>
        </div>

        <h2 className="text-3xl font-semibold mb-8">Available Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryData.courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}