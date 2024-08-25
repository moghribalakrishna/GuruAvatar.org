import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import CourseCard from './course-card';
import { CourseCategory as CourseCategoryType } from '../data/courseData';
import Link from 'next/link';
import Image from 'next/image';

interface CourseCategoryProps {
  category: CourseCategoryType;
  index: number;
}

export default function CourseCategory({ category, index }: CourseCategoryProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const initialCoursesToShow = 3;

  return (
    <motion.div 
      className="bg-gray-100 p-6 rounded-xl cursor-pointer transition-all duration-300 hover:bg-gray-200 hover:shadow-lg"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/programs-and-courses/${category.name.toLowerCase().replace(/\s+/g, '-')}`}>
        <Image 
          src={`/images/programs-and-courses/${category.name.toLowerCase().replace(/\s+/g, '-')}.webp`}
          alt={category.name}
          width={400}
          height={225}
          className="rounded-lg mb-4 w-full h-40 object-cover"
        />
        <BookOpen className="w-12 h-12 text-blue-300 mb-4" />
        <h3 className="text-2xl font-semibold mb-2">{category.name}</h3>
        <p className="text-gray-600 mb-4">{category.description}</p>
      </Link>
      <div className="flex items-center justify-between text-orange-500">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center hover:text-orange-600 transition-colors duration-200"
        >
          <BookOpen className="mr-2" />
          <span>View Courses</span>
        </button>
        <span className="flex items-center">
          {category.courses.length}
          {isExpanded ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
        </span>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mt-4 space-y-4">
              {category.courses
                .slice(0, showAll ? undefined : initialCoursesToShow)
                .map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    categorySlug={category.name.toLowerCase().replace(/\s+/g, '-')}
                  />
                ))}
            </div>
            {category.courses.length > initialCoursesToShow && (
              <button
                className="mt-4 text-orange-500 hover:text-orange-600 transition-colors duration-200"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? 'Show Less' : `View All ${category.courses.length} Courses`}
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}