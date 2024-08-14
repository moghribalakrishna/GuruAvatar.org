'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Apple, Clock, Utensils, Droplet, Brain, Heart } from 'lucide-react';
import Link from 'next/link';

export default function MindfulEatingPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Auto-play was prevented:", error);
      });
    }
  }, []);
  const [showTimer, setShowTimer] = useState(false);
  const [time, setTime] = useState(300); // 5 minutes in seconds

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
          <Apple className="w-12 h-12 mr-4 text-green-300" />
          Mindful Eating
        </motion.h1>
        <div className="mb-8 rounded-xl overflow-hidden">
          <video 
            ref={videoRef}
            className="w-full"
            loop
            muted
            playsInline
          >
            <source src="/videos/mindful-integration/mindful-eating.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">What is Mindful Eating?</h2>
          <p className="text-lg mb-4">
            Mindful eating is the practice of paying full attention to the experience of eating and drinking. It involves using all your senses to choose, prepare, and eat your food. This practice helps you savor your meals, develop a healthier relationship with food, and can even aid in better digestion and nutrition.
          </p>
          <p className="text-lg">
            By eating mindfully, you become more aware of your body's hunger and fullness cues, making it easier to eat in moderation and truly enjoy your food. This practice can help reduce overeating, emotional eating, and can lead to a more balanced and enjoyable approach to nutrition.
          </p>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Benefits of Mindful Eating</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Improved digestion and nutrient absorption</li>
            <li>Better portion control and weight management</li>
            <li>Reduced binge eating and emotional eating</li>
            <li>Enhanced enjoyment of food</li>
            <li>Increased awareness of hunger and fullness cues</li>
            <li>Better food choices and a more balanced diet</li>
            <li>Reduced stress and anxiety around eating</li>
            <li>Improved relationship with food</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">How to Practice Mindful Eating</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>Begin by taking a few deep breaths to center yourself before eating.</li>
            <li>Look at your food and notice its colors, shapes, and textures.</li>
            <li>Smell your food and notice any aromas or flavors you can detect.</li>
            <li>Take small bites and chew slowly, savoring each mouthful.</li>
            <li>Pay attention to the taste, texture, and temperature of the food in your mouth.</li>
            <li>Put your utensils down between bites to slow down your eating pace.</li>
            <li>Notice how your hunger levels change as you eat.</li>
            <li>Listen to your body's signals of fullness and satisfaction.</li>
            <li>Express gratitude for your meal and those who prepared it.</li>
            <li>Reflect on how you feel after eating mindfully.</li>
          </ol>
        </motion.section>
        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Image 
            src="/images/mindful-integration/mindful-eating.webp" 
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
          <h2 className="text-2xl font-semibold mb-4">Guided Mindful Eating Exercise</h2>
          <p className="text-lg mb-4">
            Try this simple mindful eating exercise with a small piece of food (like a raisin or a slice of fruit). Use our timer for a 5-minute practice session:
          </p>
          {!showTimer ? (
            <button 
              onClick={startTimer}
              className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300"
            >
              Start 5-Minute Mindful Eating Exercise
            </button>
          ) : (
            <div className="text-center">
              <p className="text-4xl font-bold mb-4">{Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}</p>
              <p className="text-lg">Observe the food with all your senses. Notice its appearance, smell, texture, and taste. Eat slowly and mindfully.</p>
            </div>
          )}
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Tips for Incorporating Mindful Eating into Daily Life</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Start with one mindful meal or snack per day</li>
            <li>Turn off screens and other distractions while eating</li>
            <li>Use smaller plates to help with portion control</li>
            <li>Take time to appreciate the appearance and aroma of your food before eating</li>
            <li>Chew each bite thoroughly before swallowing</li>
            <li>Check in with your hunger levels before, during, and after eating</li>
            <li>Practice gratitude for your food and its origins</li>
            <li>Listen to guided mindful eating meditations</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Overcoming Common Challenges</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Eating too quickly:</strong> Set a timer or count your chews to slow down.</li>
            <li><strong>Distractions:</strong> Designate a specific eating area free from screens and other distractions.</li>
            <li><strong>Emotional eating:</strong> Practice HALT (Hungry, Angry, Lonely, Tired) to identify true hunger vs. emotional needs.</li>
            <li><strong>Mindless snacking:</strong> Keep a food journal to increase awareness of eating habits.</li>
            <li><strong>Lack of time:</strong> Start with one mindful bite at each meal and gradually increase.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Deepen Your Mindful Eating Practice</h2>
          <p className="text-lg mb-6">
            Explore our additional resources to enhance your mindful eating journey.
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