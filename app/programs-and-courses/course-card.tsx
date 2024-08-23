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
  return (
    <Link href={`/programs-and-courses/courses/${categorySlug}/${course.id}`} passHref>
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
      </motion.div>
    </Link>
  );
}