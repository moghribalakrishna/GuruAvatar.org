// File: app/programs-and-courses/course-card.tsx
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
  if (!course) {
    console.error('Course is undefined');
    return null; // or render an error message
  }

  if (!course.slug) {
    console.error('Course slug is undefined for course:', course);
    return null; // or render an error message
  }

  if (!course.id) {
    console.error('Course id is undefined for course:', course);
    return null; // or render an error message
  }

  return (
    <div>
      <Link href={`/programs-and-courses/${categorySlug}/${course.slug}/register?courseId=${course.id}`} passHref>
        <motion.div
          className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
          <p className="text-sm text-blue-200 mb-4">{course.description}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center text-sm text-blue-200">
              <Book size={16} className="mr-1" />
              <span>100+ Resources</span>
            </div>
            <div className="flex items-center text-sm text-green-300">
              <Users size={16} className="mr-1" />
              <span>50+ Mentors</span>
            </div>
          </div>
          <button className="mt-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-pink-600 transition duration-300 flex items-center justify-center">
            Register
          </button>
        </motion.div>
      </Link>
    </div>
  );
}