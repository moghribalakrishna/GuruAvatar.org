// File: app/programs-and-courses/courses/[category]/[courseId]/page.tsx
'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { courseCategories } from '../../../../data/courseData';

export default function CourseDetailPage() {
  const params = useParams();
  const category = params.category as string;
  const courseId = params.courseId as string;

  const course = courseCategories
    .find(cat => cat.name.toLowerCase().replace(/\s+/g, '-') === category)
    ?.courses.find(c => c.id === courseId);

  if (!course) {
    return <div className="min-h-screen bg-gradient-to-b from-blue-900 to-teal-700 text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Course not found</h1>
      <p>The requested course could not be found. Please check the URL and try again.</p>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-teal-700 text-white p-8">
      <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
      <p className="text-xl mb-8">{course.description}</p>
      <p>Category: {category}</p>
      <p>Course ID: {courseId}</p>
      {/* Add more course details here */}
    </div>
  );
}