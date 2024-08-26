'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Eye, Brain, Heart, Battery, Moon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function BodyScanPage() {
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
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-6 flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Eye className="w-12 h-12 mr-4 text-green-300" />
          Body Scan Meditation
        </motion.h1>

        <div className="mb-8 rounded-xl overflow-hidden">
          <video 
            ref={videoRef}
            className="w-full"
            loop
            muted
            playsInline
          >
            <source src="/videos/mindful-integration/body-scan.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">What is Body Scan Meditation?</h2>
          <p className="text-lg mb-4 text-gray-600">
            Body scan meditation is a powerful mindfulness technique that involves systematically focusing your attention on different parts of your body, from your toes to the top of your head. This practice helps cultivate a deep awareness of bodily sensations, promoting relaxation, reducing tension, and enhancing the mind-body connection.
          </p>
          <p className="text-lg text-gray-600">
            During a body scan, you'll typically lie down or sit comfortably, then mentally scan through your body, paying attention to sensations, tensions, or areas of comfort in each part. This practice helps you develop a non-judgmental awareness of your physical self and can lead to profound insights about how you carry stress and emotion in your body.
          </p>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Benefits of Body Scan Meditation</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Increased body awareness and mind-body connection</li>
            <li>Reduced physical tension and stress</li>
            <li>Improved sleep quality</li>
            <li>Enhanced ability to recognize and manage emotions</li>
            <li>Greater capacity for relaxation and calm</li>
            <li>Heightened sense of overall well-being</li>
            <li>Potential relief from chronic pain</li>
            <li>Improved focus and concentration</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">How to Practice Body Scan Meditation</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-600">
            <li>Find a comfortable position, either lying down or seated. If lying down, you may want to use a yoga mat or blanket.</li>
            <li>Close your eyes and take a few deep breaths to center yourself.</li>
            <li>Begin by bringing your attention to your feet. Notice any sensations: warmth, coolness, tingling, pressure, or perhaps no sensation at all.</li>
            <li>Slowly move your attention up through your body, focusing on each part in turn: ankles, calves, knees, thighs, hips, lower back, abdomen, chest, upper back, fingers, hands, arms, shoulders, neck, face, and finally, the top of your head.</li>
            <li>For each body part, spend about 20-30 seconds observing any sensations present. If you notice tension, try to breathe into that area and allow it to relax.</li>
            <li>If your mind wanders, gently bring your attention back to the part of the body you were focusing on.</li>
            <li>After reaching the top of your head, take a moment to feel your body as a whole.</li>
            <li>Slowly open your eyes and take a few moments to reflect on your experience.</li>
          </ol>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Tips for a Effective Body Scan Practice</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Start with shorter sessions (5-10 minutes) and gradually increase the duration</li>
            <li>Practice at different times of day to see when it's most effective for you</li>
            <li>If you fall asleep during the practice, don't worry – this is common and can be beneficial for those with sleep issues</li>
            <li>Try both "tension and release" (intentionally tensing then relaxing each body part) and simple awareness techniques</li>
            <li>Use visualization, imagining tension flowing out of your body or healing light flowing into each part</li>
            <li>Be patient and kind with yourself – it's normal for the mind to wander during this practice</li>
            <li>Consider using a guided body scan recording until you're comfortable leading yourself</li>
          </ul>
        </motion.section>
        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Image 
            src="/images/mindful-integration/body-scan.webp" 
            alt="Body Scan Meditation Practice" 
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
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Guided Body Scan Meditation</h2>
          <p className="text-lg mb-4 text-gray-600">
            Ready to experience a body scan meditation? Use our built-in timer for a 15-minute practice session:
          </p>
          {!showTimer ? (
            <button 
              onClick={startTimer}
              className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300"
            >
              Start 15-Minute Body Scan
            </button>
          ) : (
            <div className="text-center">
              <p className="text-4xl font-bold mb-4">{Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}</p>
              <p className="text-lg text-gray-600">Slowly scan through your body, observing sensations without judgment. Gently return your focus when your mind wanders.</p>
            </div>
          )}
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Incorporating Body Scan into Daily Life</h2>
          <p className="text-lg mb-4 text-gray-600">
            While a formal body scan meditation can be deeply beneficial, you can also incorporate elements of this practice into your daily routine:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Do a quick body scan while waiting in line or during your commute</li>
            <li>Practice a short scan before important meetings or exams to center yourself</li>
            <li>Use a body scan to wind down before sleep, promoting relaxation and better rest</li>
            <li>Incorporate brief body awareness moments during your workout routine</li>
            <li>When feeling stressed, take a moment to scan your body and release tension</li>
            <li>Practice mindful eating by scanning bodily sensations before, during, and after meals</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Body Scan for Specific Purposes</h2>
          <p className="text-lg mb-4 text-gray-600">
            The body scan technique can be adapted for various specific purposes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li><strong>For Sleep:</strong> Perform a body scan while lying in bed, focusing on relaxation and letting go of the day's tensions.</li>
            <li><strong>For Pain Management:</strong> Use the body scan to explore sensations around areas of chronic pain, potentially reducing discomfort.</li>
            <li><strong>For Emotional Awareness:</strong> Notice how emotions manifest physically in your body during a scan, enhancing emotional intelligence.</li>
            <li><strong>For Athletic Performance:</strong> Scan your body before competitions to optimize body awareness and reduce pre-performance anxiety.</li>
            <li><strong>For Creativity:</strong> Use a body scan to unlock creative blocks by releasing physical tensions that may be hindering creative flow.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Enhance Your Body Scan Practice</h2>
          <p className="text-lg mb-6 text-gray-600">
            Deepen your understanding and experience of body scan meditation with our additional resources and personalized guidance.
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