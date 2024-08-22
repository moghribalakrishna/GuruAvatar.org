// app/programs-and-courses/CourseCategory/page.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import CourseCard from './course-card';
import { CourseCategory as CourseCategoryType } from '../data/courseData';

interface CourseCategoryProps {
  category: CourseCategoryType;
}

export default function CourseCategory({ category }: CourseCategoryProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const initialCoursesToShow = 3;

  return (
    <motion.div 
      className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-md"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
      <p className="mb-4 text-blue-200">{category.description}</p>
      <button 
        className="flex items-center text-yellow-300 hover:text-yellow-100 transition-colors duration-200 mb-4"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Hide Courses' : 'View Courses'}
        {isExpanded ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mt-4 space-y-4">
              {category.courses.slice(0, showAll ? undefined : initialCoursesToShow).map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
            {category.courses.length > initialCoursesToShow && (
              <button 
                className="mt-4 text-blue-300 hover:text-blue-100 transition-colors duration-200"
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