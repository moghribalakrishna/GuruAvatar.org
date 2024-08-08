'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Smile, Sun, Globe } from 'lucide-react';
import Image from 'next/image';

export default function LovingKindnessPage() {
  const [showTimer, setShowTimer] = useState(false);
  const [time, setTime] = useState(600); // 10 minutes in seconds
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
          <Heart className="w-12 h-12 mr-4 text-red-300" />
          Loving-Kindness Meditation
        </motion.h1>

        <div className="mb-8 rounded-xl overflow-hidden">
          <video 
            ref={videoRef}
            className="w-full"
            loop
            muted
            playsInline
          >
            <source src="/videos/mindful-integration/loving-kindness.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">What is Loving-Kindness Meditation?</h2>
          <p className="text-lg mb-4">
            Loving-Kindness Meditation, also known as Metta Bhavana in the Buddhist tradition, is a practice that cultivates unconditional love, compassion, and goodwill towards oneself and others. This powerful technique involves directing positive thoughts and wishes to yourself, loved ones, neutral individuals, difficult people, and eventually all beings.
          </p>
          <p className="text-lg">
            The practice typically involves repeating phrases of well-wishing, such as "May you be happy, may you be healthy, may you be safe, may you live with ease." By regularly engaging in Loving-Kindness Meditation, practitioners can develop a more compassionate outlook, reduce negative emotions, and foster a sense of connection with others.
          </p>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Benefits of Loving-Kindness Meditation</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Increased positive emotions and life satisfaction</li>
            <li>Reduced symptoms of depression and anxiety</li>
            <li>Enhanced empathy and compassion for others</li>
            <li>Improved emotional regulation</li>
            <li>Increased social connectedness</li>
            <li>Reduced self-criticism and negative self-talk</li>
            <li>Potential reduction in chronic pain</li>
            <li>Improved vagal tone, associated with better physical and mental health</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">How to Practice Loving-Kindness Meditation</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>Find a comfortable seated position and take a few deep breaths to center yourself.</li>
            <li>Begin by directing loving-kindness towards yourself. Repeat phrases like:
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>"May I be happy"</li>
                <li>"May I be healthy"</li>
                <li>"May I be safe"</li>
                <li>"May I live with ease"</li>
              </ul>
            </li>
            <li>Visualize these wishes as warm light or a gentle embrace enveloping you.</li>
            <li>Next, bring to mind a loved one and direct the same phrases towards them.</li>
            <li>Then, think of a neutral person (someone you neither like nor dislike) and repeat the phrases.</li>
            <li>If you're ready, bring to mind a difficult person and try to direct loving-kindness towards them.</li>
            <li>Finally, extend your loving-kindness to all beings everywhere.</li>
            <li>End the practice by returning your focus to yourself and taking a few deep breaths.</li>
          </ol>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Tips for Effective Loving-Kindness Practice</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Start with short sessions (5-10 minutes) and gradually increase the duration</li>
            <li>If you struggle with self-compassion, begin with a loved one and return to yourself later</li>
            <li>Personalize the phrases to make them more meaningful to you</li>
            <li>Don't worry if you don't feel immediate warmth or compassion - the practice is about intention</li>
            <li>Use visualization techniques, like imagining a warm light radiating from your heart</li>
            <li>Be patient and kind with yourself, especially when directing loving-kindness to difficult people</li>
            <li>Practice regularly, even if it's just for a few minutes each day</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Guided Loving-Kindness Meditation</h2>
          <p className="text-lg mb-4">
            Ready to try a Loving-Kindness meditation? Use our built-in timer for a 10-minute practice session:
          </p>
          {!showTimer ? (
            <button 
              onClick={startTimer}
              className="bg-red-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-600 transition duration-300"
            >
              Start 10-Minute Loving-Kindness Meditation
            </button>
          ) : (
            <div className="text-center">
              <p className="text-4xl font-bold mb-4">{Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}</p>
              <p className="text-lg">Direct loving-kindness to yourself and others. Remember the phrases: "May you be happy, healthy, safe, and live with ease."</p>
            </div>
          )}
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Incorporating Loving-Kindness into Daily Life</h2>
          <p className="text-lg mb-4">
            While formal meditation sessions are valuable, you can also practice loving-kindness throughout your day:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Silently wish well to people you pass on the street or see in public</li>
            <li>Practice loving-kindness while waiting in line or during your commute</li>
            <li>Send kind thoughts to someone before a difficult conversation or meeting</li>
            <li>Use loving-kindness phrases as a way to start or end your day</li>
            <li>Direct loving-kindness towards yourself when facing challenges or self-criticism</li>
            <li>Incorporate loving-kindness into your interactions, truly wishing others well</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Overcoming Common Challenges</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Difficulty feeling loving-kindness:</strong> Focus on the intention rather than the feeling. The emotions often develop with practice.</li>
            <li><strong>Resistance to self-compassion:</strong> Start with easier recipients and gradually work towards self-compassion. Remember that you are worthy of love and kindness.</li>
            <li><strong>Struggling with difficult people:</strong> Begin with neutral people and slowly expand to more challenging individuals. It's okay to take your time with this step.</li>
            <li><strong>Mind wandering:</strong> Gently bring your attention back to the phrases and the intention of loving-kindness when you notice your mind has drifted.</li>
            <li><strong>Feeling overwhelmed:</strong> If extending loving-kindness to all beings feels too much, focus on a smaller group or even a single person.</li>
            <li><strong>Experiencing negative emotions:</strong> It's normal to encounter difficult emotions. Acknowledge them with kindness and gently return to the practice.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Variations of Loving-Kindness Meditation</h2>
          <p className="text-lg mb-4">
            While the traditional practice is powerful, you can explore these variations to keep your practice fresh and aligned with your needs:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Compassion Meditation:</strong> Focus on the wish to alleviate suffering, using phrases like "May you be free from suffering."</li>
            <li><strong>Gratitude-Infused Loving-Kindness:</strong> Combine gratitude with loving-kindness, acknowledging the good in your life while wishing well to others.</li>
            <li><strong>Walking Loving-Kindness:</strong> Practice while walking, directing kind wishes to people and places you pass.</li>
            <li><strong>Loving-Kindness for Specific Situations:</strong> Tailor your practice to specific challenges, like before a difficult meeting or when facing a personal struggle.</li>
            <li><strong>Loving-Kindness Journaling:</strong> Write down your loving-kindness wishes, allowing for deeper reflection and personalization.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <h2 className="text-2xl font-semibold mb-4">The Science Behind Loving-Kindness Meditation</h2>
          <p className="text-lg mb-4">
            Research has shown numerous benefits of Loving-Kindness Meditation:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Increased positive emotions and decreased negative emotions (Fredrickson et al., 2008)</li>
            <li>Reduced symptoms of PTSD and depression (Kearney et al., 2013)</li>
            <li>Activation of empathy and emotional processing in the brain (Klimecki et al., 2013)</li>
            <li>Increased vagal tone, associated with better physical and emotional health (Kok et al., 2013)</li>
            <li>Reduced chronic pain and anger in patients with chronic low back pain (Carson et al., 2005)</li>
          </ul>
          <p className="text-lg mt-4">
            These studies demonstrate that regular practice of Loving-Kindness Meditation can lead to significant improvements in emotional well-being and interpersonal relationships.
          </p>
        </motion.section>
        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Image 
            src="/images/mindful-integration/loving-kindness.webp" 
            alt="Loving-Kindness Meditation Practice" 
            width={800} 
            height={400} 
            className="rounded-xl shadow-2xl"
          />
        </motion.section>
        <motion.section 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Deepen Your Loving-Kindness Practice</h2>
          <p className="text-lg mb-6">
            Explore our additional resources to enhance your understanding and experience of Loving-Kindness Meditation.
          </p>
          <div className="space-x-4">
            <button className="bg-purple-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-600 transition duration-300">
              Join a Guided Group Session
            </button>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300">
              Explore Advanced Practices
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  );
}