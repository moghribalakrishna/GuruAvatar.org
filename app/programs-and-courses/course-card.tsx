import React from 'react';
import { motion } from 'framer-motion';
import { Book, Users } from 'lucide-react';
import Link from 'next/link';
import { Course } from '../data/courseData';

interface CourseCardProps {
  course: Course;
  categorySlug: string;
}

export default function CourseCard({ course, categorySlug }: CourseCardProps) {
  if (!course || !course.slug || !course.id) {
    console.error('Invalid course data:', course);
    return null;
  }

  return (
    <Link href={`/programs-and-courses/${categorySlug}/${course.slug}/register?courseId=${course.id}`}>
      <motion.div
        className="bg-white rounded-lg p-4 shadow-md cursor-pointer hover:shadow-lg transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <h3 className="text-lg font-semibold mb-2 text-gray-900">{course.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{course.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm text-gray-500">
            <Book size={16} className="mr-1" />
            <span>100+ Resources</span>
          </div>
          <div className="flex items-center text-sm text-green-600">
            <Users size={16} className="mr-1" />
            <span>50+ Mentors</span>
          </div>
        </div>
        <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition duration-300 flex items-center justify-center w-full">
          Register
        </button>
      </motion.div>
    </Link>
  );
}