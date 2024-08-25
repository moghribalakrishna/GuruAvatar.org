'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { courseCategories } from '../../data/courseData';
import CourseCard from '../course-card';
import Image from 'next/image';

export default function CategoryPage() {
  const params = useParams();
  const category = Array.isArray(params.category) ? params.category[0] : params.category;
  const decodedCategory = decodeURIComponent(category);
  const categoryData = courseCategories.find(cat => cat.name.toLowerCase().replace(/\s+/g, '-') === decodedCategory);

  if (!categoryData) {
    return <div className="text-center text-2xl mt-16">Category not found</div>;
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-6 text-center text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {categoryData.name}
        </motion.h1>
        <motion.p 
          className="text-xl mb-12 text-center text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categoryData.description}
        </motion.p>

        <div className="text-center mb-12">
          <Image 
            src={`/images/programs-and-courses/${categoryData.name.toLowerCase().replace(/\s+/g, '-')}.webp`}
            alt={categoryData.name}
            width={1200} 
            height={600} 
            className="rounded-lg mx-auto"
          />
        </div>

        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">Value Proposition</h2>
          <p className="text-lg mb-8 text-gray-700">
            Our {categoryData.name} courses are designed to provide you with cutting-edge skills and knowledge in the field.
            By enrolling in these courses, you'll gain:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8 text-gray-600">
            <li>Practical, hands-on experience with industry-standard tools and techniques</li>
            <li>Insights from experienced professionals and thought leaders in {categoryData.name}</li>
            <li>A comprehensive understanding of both foundational concepts and advanced topics</li>
            <li>The ability to apply your learning to real-world projects and scenarios</li>
            <li>A competitive edge in the job market with in-demand skills</li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold mb-8 text-gray-900">Available Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryData.courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <CourseCard course={course} categorySlug={decodedCategory} />
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}