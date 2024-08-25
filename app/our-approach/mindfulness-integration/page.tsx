'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Focus, Zap, Battery, Smile } from 'lucide-react';
import Image from 'next/image';

export default function MindfulnessIntegrationPage() {
  return (
    <div className="bg-white min-h-screen text-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-6 flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heart className="w-12 h-12 mr-4 text-pink-500" />
          Mindfulness Integration: Nurturing the Whole Learner
        </motion.h1>

        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At GuruAvatar, we believe that true education goes beyond academic knowledge. Our Mindfulness Integration program is designed to enhance focus, reduce stress, and improve overall well-being, creating a holistic learning experience that nurtures both mind and body.
        </motion.p>

        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Image 
            src="/images/our-approach/mindfulness-illustration.webp" 
            alt="Mindfulness Integration Illustration" 
            width={800} 
            height={400} 
            className="rounded-xl shadow-lg"
          />
        </motion.div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">The Power of Mindfulness in Education</h2>
          <p className="text-lg mb-4">
            Integrating mindfulness into education isn't just a trend; it's a scientifically-backed approach to enhancing learning and well-being. Here's how mindfulness transforms the educational experience:
          </p>
          <ul className="space-y-4">
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Focus className="w-6 h-6 text-yellow-500 mr-2 flex-shrink-0 mt-1" />
              <span><strong className="text-yellow-600">Enhanced Focus and Concentration:</strong> Mindfulness practices improve attention span and the ability to concentrate on tasks, leading to more effective learning.</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Zap className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span><strong className="text-green-600">Stress Reduction:</strong> By teaching stress management techniques, we help students navigate academic pressures more effectively.</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Brain className="w-6 h-6 text-pink-500 mr-2 flex-shrink-0 mt-1" />
              <span><strong className="text-pink-600">Improved Emotional Regulation:</strong> Mindfulness helps students recognize and manage their emotions, leading to better decision-making and interpersonal skills.</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Battery className="w-6 h-6 text-purple-500 mr-2 flex-shrink-0 mt-1" />
              <span><strong className="text-purple-600">Increased Resilience:</strong> By fostering a growth mindset, mindfulness practices help students bounce back from setbacks and persevere through challenges.</span>
            </motion.li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Our Mindfulness Integration Approach</h2>
          <p className="text-lg mb-4">
            At GuruAvatar, we've developed a comprehensive mindfulness program that seamlessly integrates with our AI-powered learning platform:
          </p>
          <ol className="space-y-4 list-decimal list-inside">
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <span><strong className="text-blue-600">Daily Mindfulness Exercises:</strong> Short, guided practices integrated into the learning routine to start and end each session mindfully.</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <span><strong className="text-green-600">Mindful Learning Techniques:</strong> Teaching students how to approach their studies with mindfulness, enhancing retention and understanding.</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <span><strong className="text-yellow-600">Stress Management Tools:</strong> Providing students with a toolkit of mindfulness-based stress reduction techniques to use during challenging times.</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <span><strong className="text-pink-600">Mindfulness-Based Emotional Intelligence Training:</strong> Helping students develop self-awareness, empathy, and interpersonal skills.</span>
            </motion.li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">The Science Behind Mindfulness in Education</h2>
          <p className="text-lg mb-4">
            Our mindfulness integration is grounded in rigorous scientific research:
          </p>
          <ul className="space-y-4">
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <Brain className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0 mt-1" />
              <span><strong className="text-blue-600">Neuroplasticity:</strong> Studies show that regular mindfulness practice can physically change the brain, enhancing areas responsible for learning, memory, and emotional regulation.</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <Focus className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span><strong className="text-green-600">Attention Control:</strong> Research demonstrates that mindfulness improves both sustained attention and attention switching, crucial skills for effective learning.</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{duration: 0.5, delay: 1.4 }}
            >
              <Heart className="w-6 h-6 text-pink-500 mr-2 flex-shrink-0 mt-1" />
              <span><strong className="text-pink-600">Stress Reduction:</strong> Multiple studies have shown that mindfulness-based interventions significantly reduce stress and anxiety in students, leading to improved academic performance.</span>
            </motion.li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Mindfulness in Action: Student Experiences</h2>
          <div className="bg-gray-100 p-6 rounded-xl mb-6">
            <blockquote className="text-lg italic mb-4">
              "The mindfulness practices I learned through GuruAvatar have been life-changing. Not only has my ability to focus during study sessions improved dramatically, but I've also noticed a significant decrease in test anxiety. I feel more balanced and confident in my academic journey."
            </blockquote>
            <p className="text-right">- Emily R., High School Senior</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl">
            <blockquote className="text-lg italic mb-4">
              "As a computer science major, I was skeptical about mindfulness at first. But the techniques I've learned have helped me manage the stress of complex coding projects and improved my problem-solving skills. It's become an essential part of my daily routine."
            </blockquote>
            <p className="text-right">- David L., University Student</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Integrating Mindfulness into Your Learning Journey</h2>
          <p className="text-lg mb-4">
            Here's how you can get started with mindfulness through GuruAvatar:
          </p>
          <ol className="space-y-4 list-decimal list-inside">
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <span><strong className="text-blue-600">Initial Assessment:</strong> Take our mindfulness readiness quiz to determine your starting point.</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              <span><strong className="text-green-600">Personalized Program:</strong> Receive a tailored mindfulness curriculum based on your needs and learning style.</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.7 }}
            >
              <span><strong className="text-yellow-600">Daily Practices:</strong> Engage in short, guided mindfulness exercises integrated into your learning sessions.</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              <span><strong className="text-pink-600">Progress Tracking:</strong> Monitor your mindfulness journey with our AI-powered analytics, seeing how it impacts your learning outcomes.</span>
            </motion.li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Beyond Academics: Mindfulness for Life</h2>
          <p className="text-lg mb-4">
            The mindfulness skills you develop through GuruAvatar extend far beyond your educational journey:
          </p>
          <ul className="space-y-4">
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.9 }}
            >
              <Smile className="w-6 h-6 text-yellow-500 mr-2 flex-shrink-0 mt-1" />
              <span><strong className="text-yellow-600">Improved Relationships:</strong> Enhanced emotional intelligence leads to better communication and deeper connections.</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 2.0 }}
            >
              <Zap className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span><strong className="text-green-600">Career Readiness:</strong> Develop crucial soft skills like adaptability, creativity, and resilience that employers value.</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 2.1 }}
            >
              <Heart className="w-6 h-6 text-pink-500 mr-2 flex-shrink-0 mt-1" />
              <span><strong className="text-pink-600">Overall Well-being:</strong> Cultivate a sense of inner peace and balance that enhances all aspects of your life.</span>
            </motion.li>
          </ul>
        </section>

        <motion.section 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.2 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Embrace Mindful Learning with GuruAvatar</h2>
          <p className="text-xl mb-8">
            Ready to transform your educational journey and unlock your full potential? Start your mindfulness-integrated learning experience with GuruAvatar today.
          </p>
          <a href="/get-started" className="bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-orange-600 transition duration-300 inline-flex items-center">
            <Heart className="mr-2" />
            Begin Your Mindful Learning Journey
          </a>
        </motion.section>
      </div>
    </div>
  );
}