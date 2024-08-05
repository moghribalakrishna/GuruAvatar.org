'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Users, Zap, Brain, Clock, Star } from 'lucide-react';

const programTypes = [
  { 
    name: "Self-Paced Courses", 
    icon: Book, 
    description: "Learn at your own pace with our AI-guided courses. Perfect for busy schedules and independent learners."
  },
  { 
    name: "Mentored Programs", 
    icon: Users, 
    description: "Get personalized guidance from industry experts. Ideal for those seeking in-depth knowledge and career advice."
  },
  { 
    name: "Live Workshops", 
    icon: Zap, 
    description: "Join interactive, real-time sessions on cutting-edge topics. Great for collaborative learning and networking."
  }
];

const sampleCourses = [
  {
    title: "AI Fundamentals",
    category: "Technology",
    duration: "8 weeks",
    level: "Beginner",
    description: "Dive into the world of Artificial Intelligence. Learn about machine learning, neural networks, and the ethical implications of AI."
  },
  {
    title: "Mindful Leadership",
    category: "Personal Development",
    duration: "6 weeks",
    level: "Intermediate",
    description: "Develop leadership skills rooted in mindfulness. Learn techniques to enhance focus, emotional intelligence, and decision-making."
  },
  {
    title: "Data Science for Business",
    category: "Business & Technology",
    duration: "10 weeks",
    level: "Advanced",
    description: "Bridge the gap between data and business strategy. Learn to leverage data for informed decision-making and business growth."
  },
  {
    title: "Creative Writing in the Digital Age",
    category: "Arts & Creativity",
    duration: "6 weeks",
    level: "All Levels",
    description: "Explore new forms of storytelling using digital tools. Develop your unique voice and learn to engage audiences across various platforms."
  }
];

const ProgramTypeCard = ({ program }) => (
  <motion.div 
    className="bg-white bg-opacity-10 rounded-xl p-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <program.icon className="w-12 h-12 text-orange-400 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{program.name}</h3>
    <p className="text-gray-300">{program.description}</p>
  </motion.div>
);

const CourseCard = ({ course }) => (
  <motion.div 
    className="bg-white bg-opacity-10 rounded-xl p-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
    <p className="text-sm text-gray-300 mb-4">{course.category}</p>
    <div className="flex items-center mb-2">
      <Clock className="w-4 h-4 mr-2 text-gray-400" />
      <span className="text-sm">{course.duration}</span>
    </div>
    <div className="flex items-center mb-4">
      <Star className="w-4 h-4 mr-2 text-yellow-400" />
      <span className="text-sm">{course.level}</span>
    </div>
    <p className="text-gray-300">{course.description}</p>
  </motion.div>
);

export default function ProgramsAndCoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="bg-gradient-to-b from-blue-900 via-blue-800 to-teal-900 min-h-screen text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Programs and Courses
        </motion.h1>
        
        <motion.p 
          className="text-xl mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore our innovative learning experiences designed to empower you with cutting-edge skills and knowledge. Our AI-driven approach ensures a personalized learning journey tailored to your unique needs and goals.
        </motion.p>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-center">Our Learning Approaches</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {programTypes.map((program, index) => (
              <ProgramTypeCard key={index} program={program} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-center">Featured Courses</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {sampleCourses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-center">How Our AI Personalization Works</h2>
          <div className="bg-white bg-opacity-10 rounded-xl p-8">
            <div className="flex items-center mb-4">
              <Brain className="w-8 h-8 text-orange-400 mr-4" />
              <h3 className="text-2xl font-semibold">Adaptive Learning Pathways</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Our advanced AI algorithms analyze your learning style, pace, and performance to create a personalized learning journey. As you progress, the system continuously adapts, ensuring you're always challenged but never overwhelmed.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Real-time adjustment of content difficulty</li>
              <li>Personalized practice exercises and quizzes</li>
              <li>Intelligent content recommendations based on your interests and goals</li>
              <li>Adaptive pacing to match your learning speed</li>
            </ul>
          </div>
        </section>

        <motion.section 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl mb-8">
            Explore our full catalog of courses and find the perfect program to achieve your goals.
          </p>
          <a 
            href="/course-catalog" 
            className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300 inline-block"
          >
            Explore Full Catalog
          </a>
        </motion.section>
      </div>
    </div>
  );
}