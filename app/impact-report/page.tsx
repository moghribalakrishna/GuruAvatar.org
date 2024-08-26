'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const growthData = [
  { year: '2024', students: 10000, institutions: 50, mentorshipHours: 5000 },
  { year: '2025', students: 25000, institutions: 100, mentorshipHours: 15000 },
  { year: '2026', students: 50000, institutions: 200, mentorshipHours: 30000 },
];

const performanceData = [
  { subject: 'Math', before: 65, after: 85 },
  { subject: 'Science', before: 70, after: 88 },
  { subject: 'Language', before: 75, after: 90 },
  { subject: 'Social Studies', before: 68, after: 82 },
];

const impactDistribution = [
  { name: 'Urban Areas', value: 60 },
  { name: 'Rural Areas', value: 40 },
];

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];

export default function ImpactReportPage() {
  return (
    <div className="bg-white min-h-screen text-gray-800">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center text-blue-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          GuruAvatar Impact Report 2026
        </motion.h1>
        
        <section className="mb-16">
          <motion.h2 
            className="text-3xl font-semibold mb-4 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Transforming Education: Our Journey So Far
          </motion.h2>
          <motion.p 
            className="text-lg mb-4 text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Since our inception, GuruAvatar has been on a mission to democratize education through AI, mindfulness, and mentorship. Here's a snapshot of our impact:
          </motion.p>
        </section>

        <section className="mb-16">
          <motion.h2 
            className="text-3xl font-semibold mb-6 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Key Metrics
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: '50,000+', description: 'Students Empowered', icon: '👨‍🎓' },
              { number: '200+', description: 'Partner Institutions', icon: '🏫' },
              { number: '30,000+', description: 'Mentorship Hours', icon: '🤝' },
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-gray-100 p-6 rounded-xl text-center shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-5xl font-bold mb-2 text-blue-600">{item.number}</h3>
                <p className="text-xl text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <motion.h2 
            className="text-3xl font-semibold mb-6 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Our Growth Journey
          </motion.h2>
          <motion.div
            className="bg-gray-100 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="year" stroke="#4B5563" />
                <YAxis stroke="#4B5563" />
                <Tooltip contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb' }} />
                <Legend />
                <Bar dataKey="students" fill="#3B82F6" name="Students Reached" />
                <Bar dataKey="institutions" fill="#10B981" name="Partner Institutions" />
                <Bar dataKey="mentorshipHours" fill="#F59E0B" name="Mentorship Hours" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </section>

        <section className="mb-16">
          <motion.h2 
            className="text-3xl font-semibold mb-6 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            Academic Performance Improvement
          </motion.h2>
          <motion.div
            className="bg-gray-100 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="subject" stroke="#4B5563" />
                <YAxis stroke="#4B5563" />
                <Tooltip contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb' }} />
                <Legend />
                <Line type="monotone" dataKey="before" stroke="#F59E0B" strokeWidth={2} name="Before GuruAvatar" />
                <Line type="monotone" dataKey="after" stroke="#3B82F6" strokeWidth={2} name="After GuruAvatar" />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </section>

        <section className="mb-16">
          <motion.h2 
            className="text-3xl font-semibold mb-6 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            Impact Distribution
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <motion.div
              className="bg-gray-100 p-6 rounded-xl shadow-md md:w-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={impactDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {impactDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </motion.div>
            <motion.div
              className="md:w-1/2 p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <p className="text-lg mb-4 text-gray-600">
                GuruAvatar is committed to bridging the educational gap between urban and rural areas. Our impact reaches:
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>60% of students in urban areas</li>
                <li>40% of students in rural and underserved regions</li>
              </ul>
            </motion.div>
          </div>
        </section>

        <section className="mb-16">
          <motion.h2 
            className="text-3xl font-semibold mb-6 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            Success Stories
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Priya S.",
                story: "Through GuruAvatar's AI-powered learning, I improved my math scores by 40% and gained the confidence to pursue engineering.",
                image: "/priya.jpg"
              },
              {
                name: "Rahul M.",
                story: "The mindfulness techniques I learned helped me manage exam stress and improve my overall well-being. I'm now mentoring other students!",
                image: "/rahul.jpg"
              }
            ].map((story, index) => (
              <motion.div 
                key={index}
                className="bg-gray-100 p-6 rounded-xl shadow-md flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
              >
                <Image 
                  src={story.image} 
                  alt={story.name} 
                  width={80} 
                  height={80} 
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{story.name}</h3>
                  <p className="text-gray-600">"{story.story}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <motion.h2 
            className="text-3xl font-semibold mb-6 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.7 }}
          >
            Our Global Reach
          </motion.h2>
          <motion.div
            className="bg-gray-100 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            <Image 
              src="/global-impact-map.png" 
              alt="GuruAvatar's Global Impact" 
              width={1000} 
              height={500} 
              className="rounded-xl"
            />
          </motion.div>
        </section>

        <section>
          <motion.h2 
            className="text-3xl font-semibold mb-6 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.9 }}
          >
            Looking Ahead: Our 2027 Goals
          </motion.h2>
          <motion.ul 
            className="list-disc list-inside text-lg mb-6 space-y-2 text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            <li>Reach 100,000 students across 10 countries</li>
            <li>Develop advanced AI modules for personalized STEM education</li>
            <li>Launch a global peer-to-peer mentorship program</li>
            <li>Achieve a 50% improvement in student well-being metrics</li>
            <li>Establish partnerships with 500 educational institutions worldwide</li>
          </motion.ul>
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.1 }}
          >
            Your support makes these ambitious goals possible. Join us in our mission to revolutionize education and empower the next generation of learners.
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.2 }}
          >
            <a href="/donate" className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300">
              Support Our Mission
            </a>
          </motion.div>
        </section>
      </div>
    </div>
  );
}