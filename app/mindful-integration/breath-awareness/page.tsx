'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Clock, Sun } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function BreathAwarenessPage() {
  const [showTimer, setShowTimer] = useState(false);
  const [time, setTime] = useState(300); // 5 minutes in seconds
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Auto-play was prevented:", error);
      });
    }
  }, []);

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
          <Brain className="w-12 h-12 mr-4 text-blue-300" />
          Breath Awareness Meditation
        </motion.h1>

        <div className="mb-8 rounded-xl overflow-hidden">
          <video 
            ref={videoRef}
            className="w-full"
            loop
            muted
            playsInline
          >
            <source src="/videos/mindful-integration/breath-awareness.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">What is Breath Awareness Meditation?</h2>
          <p className="text-lg mb-4">
            Breath awareness meditation, also known as mindful breathing, is a fundamental mindfulness practice that involves focusing your attention on the natural rhythm of your breath. This simple yet powerful technique serves as an anchor to the present moment, helping to calm the mind and body.
          </p>
          <p className="text-lg">
            By observing the breath without trying to change it, practitioners cultivate a non-judgmental awareness of their present experience, leading to increased focus, reduced stress, and improved emotional regulation.
          </p>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Benefits of Breath Awareness Meditation</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Improved focus and concentration</li>
            <li>Reduced stress and anxiety</li>
            <li>Enhanced emotional regulation</li>
            <li>Better sleep quality</li>
            <li>Increased self-awareness</li>
            <li>Lower blood pressure and heart rate</li>
            <li>Strengthened immune system</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">How to Practice Breath Awareness Meditation</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>Find a comfortable seated position, either on a chair or cushion. Keep your back straight but not rigid.</li>
            <li>Gently close your eyes or maintain a soft gaze a few feet in front of you.</li>
            <li>Take a few deep breaths to settle into your body and the present moment.</li>
            <li>Allow your breath to return to its natural rhythm. Don't try to control or change it.</li>
            <li>Focus your attention on the sensation of breathing. This could be the air moving in and out of your nostrils, the rise and fall of your chest, or the expansion and contraction of your belly.</li>
            <li>When you notice your mind has wandered (and it will), gently bring your attention back to your breath without judgment.</li>
            <li>Continue this practice for your desired duration, starting with 5-10 minutes and gradually increasing as you become more comfortable.</li>
          </ol>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Tips for Deepening Your Practice</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Practice consistently, even if it's just for a few minutes each day</li>
            <li>Be patient and kind to yourself when your mind wanders</li>
            <li>Experiment with different points of focus (nostrils, chest, belly) to see what works best for you</li>
            <li>Try counting your breaths (1 to 10, then start over) to help maintain focus</li>
            <li>Use "anchor phrases" like "breathing in, I know I'm breathing in; breathing out, I know I'm breathing out"</li>
            <li>Gradually increase the duration of your practice as you become more comfortable</li>
          </ul>
        </motion.section>
        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Image 
            src="/images/mindful-integration/breath-awareness.webp" 
            alt="Breath Awareness Meditation Practice" 
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
          <h2 className="text-2xl font-semibold mb-4">Guided Breath Awareness Meditation</h2>
          <p className="text-lg mb-4">
            Ready to try a breath awareness meditation? Use our built-in timer for a 5-minute practice session:
          </p>
          {!showTimer ? (
            <button 
              onClick={startTimer}
              className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              Start 5-Minute Meditation
            </button>
          ) : (
            <div className="text-center">
              <p className="text-4xl font-bold mb-4">{Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}</p>
              <p className="text-lg">Focus on your breath. Notice any distractions and gently return your attention to your breath.</p>
            </div>
          )}
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Incorporating Breath Awareness into Daily Life</h2>
          <p className="text-lg mb-4">
            While formal meditation sessions are valuable, you can also practice breath awareness throughout your day:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Take three mindful breaths before starting a new task</li>
            <li>Use your breath as an anchor when feeling stressed or overwhelmed</li>
            <li>Practice breath awareness while waiting in line or during your commute</li>
            <li>Set reminders on your phone to take mindful breathing breaks</li>
            <li>Use the rhythm of your breath to help you fall asleep at night</li>
          </ul>
        </motion.section>

       

        <motion.section 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Ready to Deepen Your Practice?</h2>
          <p className="text-lg mb-6">
            Explore our other mindfulness techniques or connect with a meditation coach for personalized guidance.
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