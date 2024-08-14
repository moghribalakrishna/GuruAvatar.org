'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Laptop, Clock, Brain, BookOpen, Coffee, Sun } from 'lucide-react';
import Link from 'next/link';

export default function MindfulWorkStudyPage() {
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
          <Laptop className="w-12 h-12 mr-4 text-yellow-300" />
          Mindful Work and Study
        </motion.h1>
     <div className="mb-8 rounded-xl overflow-hidden">
          <video 
            ref={videoRef}
            className="w-full"
            loop
            muted
            playsInline
          >
            <source src="/videos/mindful-integration/mindful-work.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">What is Mindful Work and Study?</h2>
          <p className="text-lg mb-4">
            Mindful work and study is the practice of bringing full attention and awareness to your academic or professional tasks. It involves staying present and focused on the task at hand, managing distractions effectively, and cultivating a sense of purpose and intention in your work.
          </p>
          <p className="text-lg">
            By applying mindfulness to your work and study habits, you can enhance your productivity, improve the quality of your work, reduce stress, and find greater satisfaction in your tasks. This approach helps you engage more deeply with your studies or work, leading to better understanding, retention, and performance.
          </p>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Benefits of Mindful Work and Study</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Improved focus and concentration</li>
            <li>Enhanced productivity and efficiency</li>
            <li>Better time management</li>
            <li>Reduced stress and burnout</li>
            <li>Increased creativity and problem-solving abilities</li>
            <li>Improved memory and retention of information</li>
            <li>Greater sense of purpose and engagement in tasks</li>
            <li>Better work-life balance</li>
            <li>Enhanced overall well-being and job/academic satisfaction</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Key Principles of Mindful Work and Study</h2>
          <ul className="list-disc list-inside space-y-4">
            <li><strong>Single-tasking:</strong> Focus on one task at a time, avoiding multitasking.</li>
            <li><strong>Present moment awareness:</strong> Stay fully engaged in the current task or study session.</li>
            <li><strong>Intentionality:</strong> Set clear intentions for each work or study period.</li>
            <li><strong>Non-judgmental awareness:</strong> Observe your thoughts and feelings about work without criticism.</li>
            <li><strong>Mindful breaks:</strong> Take regular, conscious breaks to recharge and refocus.</li>
            <li><strong>Mindful environment:</strong> Create a workspace that supports focus and productivity.</li>
            <li><strong>Continuous learning:</strong> Approach tasks with curiosity and a growth mindset.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Practicing Mindful Work and Study</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>Begin each work or study session with a few mindful breaths.</li>
            <li>Set a clear intention for your work period.</li>
            <li>Use the Pomodoro Technique: 25 minutes of focused work followed by a 5-minute break.</li>
            <li>Practice single-tasking, giving your full attention to one task at a time.</li>
            <li>Take mindful breaks, using techniques like brief meditation or mindful walking.</li>
            <li>Regularly check in with your body and mind, noticing any tension or fatigue.</li>
            <li>Practice gratitude for the opportunity to learn or contribute through your work.</li>
            <li>End your work or study session with a brief reflection on what you've accomplished.</li>
          </ol>
        </motion.section>
        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Image 
            src="/images/mindful-integration/mindful-work.webp" 
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
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Mindful Pomodoro Technique</h2>
          <p className="text-lg mb-4">
            Try this mindful version of the Pomodoro Technique. Focus on your work for 25 minutes, then take a 5-minute mindful break. Use our timer to guide you:
          </p>
          {!showTimer ? (
            <button 
              onClick={startTimer}
              className="bg-yellow-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition duration-300"
            >
              Start 25-Minute Mindful Work Session
            </button>
          ) : (
            <div className="text-center">
              <p className="text-4xl font-bold mb-4">{Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}</p>
              <p className="text-lg">Focus mindfully on your task. Notice any distractions and gently return your attention to your work.</p>
            </div>
          )}
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Tips for Incorporating Mindfulness into Work and Study</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Create a dedicated, clutter-free workspace that promotes focus.</li>
            <li>Start your day with a brief mindfulness practice to set your intention.</li>
            <li>Use mindful breathing techniques when you feel stressed or overwhelmed.</li>
            <li>Practice mindful listening during lectures, meetings, or discussions.</li>
            <li>Take regular mindful breaks to stretch, move, or practice brief meditation.</li>
            <li>Use visual reminders (like a small plant or meaningful object) to prompt mindful moments.</li>
            <li>End your work or study day with a mindful reflection on your accomplishments and learnings.</li>
            <li>Cultivate a growth mindset, viewing challenges as opportunities for learning and development.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
       <h2 className="text-2xl font-semibold mb-4">Overcoming Common Work and Study Challenges</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Procrastination:</strong> Break tasks into smaller, manageable steps and focus on starting rather than finishing.</li>
            <li><strong>Distractions:</strong> Create a distraction-free environment and practice gently returning focus when your mind wanders.</li>
            <li><strong>Overwhelm:</strong> Use mindful prioritization techniques to focus on the most important tasks first.</li>
            <li><strong>Burnout:</strong> Practice self-compassion and set realistic expectations for yourself.</li>
            <li><strong>Lack of motivation:</strong> Connect with your deeper purpose and set meaningful goals for your work or study.</li>
            <li><strong>Perfectionism:</strong> Embrace a growth mindset and focus on progress rather than perfection.</li>
            <li><strong>Time management:</strong> Use mindful planning techniques to allocate your time effectively.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Mindful Techniques for Specific Work and Study Tasks</h2>
          <ul className="list-disc list-inside space-y-4">
            <li><strong>Reading:</strong> Practice mindful reading by fully engaging with the text, periodically pausing to reflect on what you've read.</li>
            <li><strong>Writing:</strong> Use freewriting techniques to overcome writer's block, and mindfully edit your work with focused attention.</li>
            <li><strong>Problem-solving:</strong> Apply mindful observation to complex problems, allowing insights to arise without forcing solutions.</li>
            <li><strong>Presentations:</strong> Use mindfulness techniques to manage presentation anxiety and connect authentically with your audience.</li>
            <li><strong>Group work:</strong> Practice mindful listening and communication to enhance collaboration and creativity in group settings.</li>
            <li><strong>Exam preparation:</strong> Use mindfulness to manage stress, improve focus, and enhance memory retention during study sessions.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Creating a Mindful Work or Study Environment</h2>
          <p className="text-lg mb-4">
            Your physical environment can significantly impact your ability to work or study mindfully. Consider these tips:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Declutter your workspace to minimize visual distractions.</li>
            <li>Incorporate plants or natural elements to promote calm and focus.</li>
            <li>Ensure proper lighting to reduce eye strain and maintain alertness.</li>
            <li>Use noise-cancelling headphones or background sounds if helpful for concentration.</li>
            <li>Keep a water bottle nearby to stay hydrated during work sessions.</li>
            <li>Display inspiring quotes or images that remind you of your goals and values.</li>
            <li>Create a designated "mindfulness corner" for brief meditation or breathing exercises.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Mindful Technology Use</h2>
          <p className="text-lg mb-4">
            In today's digital world, mindful technology use is crucial for effective work and study. Try these strategies:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Use website blockers or app timers to limit distractions during focused work periods.</li>
            <li>Practice "tech-free" time blocks to reduce digital overwhelm.</li>
            <li>Set up mindful notifications that remind you to take breaks or check in with your breath.</li>
            <li>Regularly declutter your digital workspace, organizing files and clearing your desktop.</li>
            <li>Use mindfulness apps to support your practice during work breaks.</li>
            <li>Be intentional about your social media use, setting clear boundaries for work and personal time.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Enhance Your Mindful Work and Study Skills</h2>
          <p className="text-lg mb-6">
            Explore our additional resources to further develop your mindful work and study practices.
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