// app/programs-and-courses/CourseCard/page.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Book, Users } from 'lucide-react';
import Link from 'next/link';
import { Course } from '../data/courseData';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <motion.div 
      className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm"
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
      <Link href={`/courses/${encodeURIComponent(course.id)}`} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200">
        Explore Course
      </Link>
    </motion.div>
  );
}