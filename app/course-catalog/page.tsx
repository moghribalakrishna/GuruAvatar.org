'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as Lucide from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "AI Fundamentals",
    category: "Technology",
    level: "Beginner",
    duration: "8 weeks",
    description: "Dive into the world of Artificial Intelligence. Learn about machine learning, neural networks, and the ethical implications of AI.",
    icon: Lucide.Brain
  },
  {
    id: 2,
    title: "Mindful Leadership",
    category: "Personal Development",
    level: "Intermediate",
    duration: "6 weeks",
    description: "Develop leadership skills rooted in mindfulness. Learn techniques to enhance focus, emotional intelligence, and decision-making.",
    icon: Lucide.Users
  },
  {
    id: 3,
    title: "Data Science for Business",
    category: "Business",
    level: "Advanced",
    duration: "10 weeks",
    description: "Bridge the gap between data and business strategy. Learn to leverage data for informed decision-making and business growth.",
    icon: Lucide.BarChart2
  },
  {
    id: 4,
    title: "Creative Writing in the Digital Age",
    category: "Arts",
    level: "All Levels",
    duration: "6 weeks",
    description: "Explore new forms of storytelling using digital tools. Develop your unique voice and learn to engage audiences across various platforms.",
    icon: Lucide.Edit3
  },
  {
    id: 5,
    title: "Sustainable Development and AI",
    category: "Environmental Studies",
    level: "Intermediate",
    duration: "8 weeks",
    description: "Explore how AI can be leveraged to address global sustainability challenges. Learn about smart cities, predictive environmental modeling, and more.",
    icon: Lucide.Leaf
  },
  {
    id: 6,
    title: "Quantum Computing Basics",
    category: "Technology",
    level: "Advanced",
    duration: "12 weeks",
    description: "Delve into the fascinating world of quantum computing. Understand quantum bits, superposition, entanglement, and potential applications.",
    icon: Lucide.Cpu
  }
];

const categories = ["All", ...new Set(courses.map(course => course.category))];
const levels = ["All", "Beginner", "Intermediate", "Advanced", "All Levels"];

export default function CourseCatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter(course => 
    (selectedCategory === "All" || course.category === selectedCategory) &&
    (selectedLevel === "All" || course.level === selectedLevel) &&
    (course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     course.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="bg-gradient-to-b from-blue-900 via-blue-800 to-teal-900 min-h-screen text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Course Catalog
        </motion.h1>
        
        <motion.p 
          className="text-xl mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore our diverse range of AI-powered courses designed to empower you with cutting-edge skills and knowledge.
        </motion.p>

        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <input
              type="text"
              placeholder="Search courses..."
              className="px-4 py-2 rounded-full bg-white bg-opacity-20 focus:bg-opacity-30 focus:outline-none"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="px-4 py-2 rounded-full bg-white bg-opacity-20 focus:bg-opacity-30 focus:outline-none"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <select
              className="px-4 py-2 rounded-full bg-white bg-opacity-20 focus:bg-opacity-30 focus:outline-none"
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              {levels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              className="bg-white bg-opacity-10 p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <course.icon className="w-12 h-12 text-orange-400 mb-4" />
              <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>
              <p className="text-sm text-gray-300 mb-4">{course.category} | {course.level} | {course.duration}</p>
              <p className="text-gray-300 mb-4">{course.description}</p>
              <a 
                href={`/courses/${course.id}`}
                className="inline-flex items-center text-orange-400 hover:text-orange-300 transition duration-300"
              >
                Learn More <Lucide.ArrowRight className="ml-2" />
              </a>
            </motion.div>
          ))}
        </section>

        {filteredCourses.length === 0 && (
          <motion.p
            className="text-center text-xl mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            No courses found matching your criteria. Please try adjusting your filters.
          </motion.p>
        )}

        <motion.section 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Can't Find What You're Looking For?</h2>
          <p className="text-xl mb-8">
            We're constantly expanding our course offerings. If you don't see a course that meets your needs, let us know!
          </p>
          <a 
            href="/suggest-course" 
            className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300 inline-flex items-center"
          >
            <Lucide.Mail className="mr-2" />
            Suggest a Course
          </a>
        </motion.section>
      </div>
    </div>
  );
}