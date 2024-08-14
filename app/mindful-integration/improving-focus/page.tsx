'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
 
import { motion } from 'framer-motion';
import { Brain, Target, Clock, Eye, Sun, Moon } from 'lucide-react';
import Link from 'next/link';

export default function ImprovingFocusPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Auto-play was prevented:", error);
      });
    }
  }, []);

  const [showTimer, setShowTimer] = useState(false);
  const [time, setTime] = useState(1500); // 25 minutes in seconds (Pomodoro technique)

  const startTimer = () => {
    setShowTimer(true);
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-teal-700 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-6 flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Brain className="w-12 h-12 mr-4 text-yellow-300" />
          Improving Focus and Concentration
        </motion.h1>
        <div className="mb-8 rounded-xl overflow-hidden">
          <video 
            ref={videoRef}
            className="w-full"
            loop
            muted
            playsInline
          >
            <source src="/videos/mindful-integration/improving-focus.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Why Focus Matters in Academics</h2>
          <p className="text-lg mb-4">
            In the world of academia, the ability to focus and concentrate is crucial for success. Strong focus allows you to absorb information more effectively, complete tasks efficiently, and perform better on exams. It's the foundation for deep learning and critical thinking.
          </p>
          <p className="text-lg">
            By improving your focus and concentration, you can enhance your overall academic performance, reduce study time, and experience less stress and frustration in your learning journey.
          </p>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Benefits of Improved Focus and Concentration</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Enhanced learning and information retention</li>
            <li>Improved academic performance and grades</li>
            <li>Increased productivity and efficiency in studying</li>
            <li>Better time management skills</li>
            <li>Reduced stress and anxiety related to academic tasks</li>
            <li>Enhanced problem-solving and critical thinking abilities</li>
            <li>Improved ability to understand complex concepts</li>
            <li>Greater sense of accomplishment and self-confidence</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Techniques for Improving Focus and Concentration</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li><strong>Pomodoro Technique:</strong> Work in focused 25-minute intervals, followed by short breaks.</li>
            <li><strong>Mindfulness Meditation:</strong> Practice daily to train your mind to stay present and focused.</li>
            <li><strong>Environment Optimization:</strong> Create a distraction-free study space.</li>
            <li><strong>Time Blocking:</strong> Schedule specific times for different tasks or subjects.</li>
            <li><strong>Active Reading:</strong> Engage with texts through highlighting, note-taking, and summarizing.</li>
            <li><strong>Regular Exercise:</strong> Improve overall brain function and focus through physical activity.</li>
            <li><strong>Adequate Sleep:</strong> Ensure you're well-rested to maintain optimal cognitive function.</li>
            <li><strong>Nutrition:</strong> Eat a balanced diet rich in brain-boosting foods.</li>
            <li><strong>Chunking:</strong> Break large tasks into smaller, manageable parts.</li>
            <li><strong>Visualization:</strong> Use mental imagery to reinforce learning and maintain focus.</li>
          </ol>
        </motion.section>
        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Image 
            src="/images/mindful-integration/improving-focus.webp" 
            alt="Observing thoughts" 
            width={800} 
            height={400} 
            className="rounded-xl shadow-2xl"
          />
        </motion.section>
        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Mindful Pomodoro Technique</h2>
          <p className="text-lg mb-4">
            Try this mindful version of the Pomodoro Technique. Focus intensely on your task for 25 minutes, then take a 5-minute mindful break. Use our timer to guide you:
          </p>
          {!showTimer ? (
            <button 
              onClick={startTimer}
              className="bg-yellow-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition duration-300"
            >
              Start 25-Minute Focus Session
            </button>
          ) : (
            <div className="text-center">
              <p className="text-4xl font-bold mb-4">{Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}</p>
              <p className="text-lg">Focus intently on your task. If your mind wanders, gently bring it back to your work.</p>
            </div>
          )}
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Practical Exercises to Improve Focus</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Mindful Breathing:</strong> Take 5 minutes to focus solely on your breath, bringing your attention back whenever it wanders.</li>
            <li><strong>Single-Tasking Challenge:</strong> Choose one task and focus on it exclusively for 30 minutes, resisting any urge to multitask.</li>
            <li><strong>Observation Exercise:</strong> Spend 5 minutes observing an object in detail, noticing its colors, textures, and features.</li>
            <li><strong>Active Listening:</strong> During a conversation or lecture, practice giving your full attention to the speaker, avoiding mental distractions.</li>
            <li><strong>Memory Game:</strong> Play memory games or use apps designed to improve focus and concentration.</li>
            <li><strong>Body Scan:</strong> Perform a body scan meditation, focusing your attention on each part of your body in turn.</li>
            <li><strong>Mindful Walking:</strong> Take a short walk, focusing on the sensations in your feet and legs as you move.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Overcoming Common Focus Challenges</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Digital Distractions:</strong> Use website blockers and put your phone on "Do Not Disturb" mode during study sessions.</li>
            <li><strong>Mental Fatigue:</strong> Take regular breaks and practice stress-reduction techniques like deep breathing or short meditations.</li>
            <li><strong>Lack of Interest:</strong> Find ways to make the material more engaging, such as relating it to your interests or real-world applications.</li>
            <li><strong>Overwhelm:</strong> Break large tasks into smaller, manageable chunks and celebrate small victories.</li>
            <li><strong>Environmental Distractions:</strong> Create a dedicated study space and use noise-cancelling headphones if needed.</li>
            <li><strong>Wandering Thoughts:</strong> Practice mindfulness to become aware of distracting thoughts and gently redirect your focus.</li>
            <li><strong>Low Energy:</strong> Maintain a consistent sleep schedule and consider the timing of your study sessions to align with your natural energy peaks.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Long-term Strategies for Sustained Focus</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Develop a consistent daily meditation practice to train your attention.</li>
            <li>Regularly challenge your brain with puzzles, new skills, or complex problems.</li>
            <li>Maintain a balanced lifestyle with regular exercise, healthy nutrition, and adequate sleep.</li>
            <li>Practice digital mindfulness to reduce overall distractibility.</li>
            <li>Set clear, achievable goals to maintain motivation and direction in your studies.</li>
            <li>Cultivate curiosity about your subjects to naturally enhance focus and engagement.</li>
            <li>Regularly reflect on your focus habits and adjust your strategies as needed.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Enhance Your Focus and Concentration</h2>
          <p className="text-lg mb-6">
            Explore our additional resources to further develop your focus and concentration skills.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
          <Link href="/mindful-integration/mindfulness-community" className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300">
            Join Our Community
          </Link>
          <Link href="/forms/free-consultation" className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300">
            Schedule a Free Consultation
          </Link>
        </div>
        </motion.section>
      </div>
    </div>
  );
}