'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AIFeatureCard from './AIFeatureCard';
import { aiFeatures, aiLearningJourney, testimonials } from '../data/aiLearningData';
import { LucideIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AiLearningJourneyStep {
  icon: LucideIcon;
  title: string;
  description: string;
}


const InteractiveAIDemo = () => {
  const [question, setQuestion] = useState("What is the capital of France?");
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userAnswer.toLowerCase().includes("paris")) {
      setFeedback("Correct! The AI has detected that you have a good grasp of European capitals. Would you like to explore more challenging geography questions?");
    } else {
      setFeedback("That's not quite right. The AI suggests reviewing basic European geography. Would you like a quick lesson on French cities?");
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow-md">
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">Interactive AI Tutor Demo</h3>
      <p className="mb-4 text-gray-700">{question}</p>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className="w-full p-2 rounded border border-gray-300 text-gray-800"
          placeholder="Type your answer here"
        />
        <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Submit</button>
      </form>
      {feedback && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-blue-100 p-4 rounded text-blue-800"
        >
          {feedback}
        </motion.div>
      )}
    </div>
  );
};

export default function AILearningContent() {
  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-hidden relative p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-center text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          AI-Powered Learning Revolution
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-12 text-center max-w-4xl mx-auto text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Experience the future of education with our cutting-edge AI-driven learning platform. 
          Personalized, adaptive, and infinitely scalable.
        </motion.p>

        {/* AI Features Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Key AI Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiFeatures.map((feature, index) => (
              <AIFeatureCard key={index} feature={feature} />
            ))}
          </div>
        </section>

        {/* AI Learning Journey Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Your AI Learning Journey</h2>
          <div className="relative">
            {aiLearningJourney.map((step: AiLearningJourneyStep, index: number) => (
              <motion.div 
                key={index}
                className="flex items-center mb-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-blue-100 p-4 rounded-full mr-4">
                  {React.createElement(step.icon, { className: "w-8 h-8 text-blue-600" })}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Experience AI-Powered Learning</h2>
        <InteractiveAIDemo />
        </section>
     
        {/* AI in Action Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">AI in Action</h2>
          <div className="bg-gray-100 p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Real-time Adaptive Learning</h3>
            <p className="text-lg mb-4 text-gray-700">Watch as our AI adapts to your learning style and pace in real-time:</p>
            <div className="aspect-w-16 aspect-h-9">
              <Image 
                src="/ai-learning-demo.gif" 
                alt="AI Learning Demo"
                width={800}
                height={450}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-gray-100 p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-lg mb-4 italic text-gray-700">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <motion.section 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Ready to Transform Your Learning?</h2>
          <p className="text-xl mb-8 text-gray-600">
            Join thousands of learners benefiting from our AI-powered education platform.
          </p>
          <Link href="/get-started" className="bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-orange-600 transition duration-300 inline-block">
            Start Your AI Learning Journey
          </Link>
        </motion.section>
      </div>
    </div>
  );
}