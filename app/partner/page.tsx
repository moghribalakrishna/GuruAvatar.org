'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Handshake, Zap, Globe, Users, BarChart, Mail } from 'lucide-react';

const benefits = [
  { 
    icon: Zap, 
    title: "Innovative Learning Solutions", 
    description: "Integrate our AI-powered, adaptive learning platform to provide personalized education at scale." 
  },
  { 
    icon: Globe, 
    title: "Global Impact", 
    description: "Join a network of forward-thinking institutions committed to democratizing quality education worldwide." 
  },
  { 
    icon: Users, 
    title: "Student Empowerment", 
    description: "Equip your students with cutting-edge skills, emotional intelligence, and lifelong learning habits." 
  },
  { 
    icon: BarChart, 
    title: "Data-Driven Insights", 
    description: "Gain valuable insights into student performance and learning patterns to continuously improve educational outcomes." 
  }
];

export default function PartnerPage() {
  return (
    <div className="bg-white min-h-screen text-gray-800">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center text-blue-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Partner with GuruAvatar
        </motion.h1>
        
        <motion.p 
          className="text-xl mb-12 text-center max-w-3xl mx-auto text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join us in revolutionizing education. Together, we can empower the next generation with AI-driven, holistic learning experiences that prepare them for the challenges of tomorrow.
        </motion.p>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Why Partner with Us?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-gray-100 p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <benefit.icon className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Our Partnership Approach</h2>
          <div className="bg-gray-100 p-8 rounded-xl shadow-md">
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-lg text-gray-700">Initial Consultation: We begin by understanding your unique needs and goals.</li>
              <li className="text-lg text-gray-700">Customized Integration: Our team works closely with you to tailor our solutions to your institution.</li>
              <li className="text-lg text-gray-700">Training and Support: We provide comprehensive training for your staff and ongoing technical support.</li>
              <li className="text-lg text-gray-700">Continuous Improvement: Regular check-ins and data analysis ensure we're meeting and exceeding expectations.</li>
              <li className="text-lg text-gray-700">Collaborative Innovation: As a partner, you'll have the opportunity to shape the future of our educational tools.</li>
            </ol>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Delhi Public School",
                location: "New Delhi, India",
                quote: "Partnering with GuruAvatar has transformed our approach to education. Our students are more engaged, and we've seen a 30% improvement in overall academic performance.",
                image: "/delhi-public-school.jpg"
              },
              {
                name: "Global Learning Academy",
                location: "Singapore",
                quote: "The integration of GuruAvatar's AI-powered platform has allowed us to provide truly personalized learning experiences. Our teachers are now empowered with data-driven insights to support each student's unique journey.",
                image: "/global-learning-academy.jpg"
              }
            ].map((story, index) => (
              <motion.div 
                key={index}
                className="bg-gray-100 p-6 rounded-xl shadow-md flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <Image 
                    src={story.image} 
                    alt={story.name} 
                    width={80} 
                    height={80} 
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{story.name}</h3>
                    <p className="text-sm text-gray-600">{story.location}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic flex-grow">"{story.quote}"</p>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.section 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Ready to Transform Education Together?</h2>
          <p className="text-xl mb-8 text-gray-600">
            Take the first step towards a revolutionary educational partnership. Our team is excited to explore how we can work together to empower learners and shape the future of education.
          </p>
          <a 
            href="/forms/contact" 
            className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300 inline-flex items-center"
          >
            <Mail className="mr-2" />
            Get in Touch
          </a>
        </motion.section>
      </div>
    </div>
  );
}