'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Smartphone, Wifi, Clock, Eye, Battery, Sun } from 'lucide-react';
import Link from 'next/link';

export default function DigitalMindfulnessPage() {
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
          <Smartphone className="w-12 h-12 mr-4 text-purple-300" />
          Digital Mindfulness
        </motion.h1>
        <div className="mb-8 rounded-xl overflow-hidden">
          <video 
            ref={videoRef}
            className="w-full"
            loop
            muted
            playsInline
          >
            <source src="/videos/mindful-integration/digital-mindfulness.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">What is Digital Mindfulness?</h2>
          <p className="text-lg mb-4">
            Digital mindfulness is the practice of bringing awareness and intention to our use of digital devices and online interactions. It involves being conscious of how, when, and why we use technology, and making deliberate choices about our digital consumption and behaviors.
          </p>
          <p className="text-lg">
            In our increasingly connected world, digital mindfulness helps us maintain a healthy balance between our online and offline lives, reduce digital stress and overwhelm, and use technology in ways that align with our values and well-being.
          </p>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Benefits of Digital Mindfulness</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduced digital stress and anxiety</li>
            <li>Improved focus and productivity</li>
            <li>Better sleep quality</li>
            <li>Enhanced real-world relationships and connections</li>
            <li>Increased self-awareness and intentional living</li>
            <li>Reduced information overload and digital fatigue</li>
            <li>Improved digital boundaries and work-life balance</li>
            <li>Greater control over your time and attention</li>
            <li>Healthier relationship with technology and social media</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Key Principles of Digital Mindfulness</h2>
          <ul className="list-disc list-inside space-y-4">
            <li><strong>Intentional Use:</strong> Use technology with purpose and clear intentions.</li>
            <li><strong>Present Moment Awareness:</strong> Stay mindful of your thoughts, feelings, and behaviors while using digital devices.</li>
            <li><strong>Digital Boundaries:</strong> Set clear limits on when and how you use technology.</li>
            <li><strong>Mindful Consumption:</strong> Be selective about the digital content you consume.</li>
            <li><strong>Digital Detox:</strong> Regularly disconnect from technology to recharge and reconnect with the physical world.</li>
            <li><strong>Conscious Communication:</strong> Practice mindful online communication and social media use.</li>
            <li><strong>Tech-Life Balance:</strong> Strive for a healthy balance between online and offline activities.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Practicing Digital Mindfulness</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>Start your day with a tech-free morning routine.</li>
            <li>Set specific times for checking emails and social media.</li>
            <li>Practice the "Stop, Breathe, Be" technique before using your devices.</li>
            <li>Use mindfulness apps to cultivate awareness during device use.</li>
            <li>Implement regular digital detox periods (e.g., device-free evenings or weekends).</li>
            <li>Create a mindful workspace that minimizes digital distractions.</li>
            <li>Practice mindful scrolling, paying attention to your emotions and impulses.</li>
            <li>Reflect on your digital habits and their impact on your well-being.</li>
          </ol>
        </motion.section>
        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Image 
            src="/images/mindful-integration/digital-mindfulness.webp" 
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
          <h2 className="text-2xl font-semibold mb-4">Mindful Device Break Exercise</h2>
          <p className="text-lg mb-4">
            Take a mindful break from your devices. Use this time to reconnect with your physical surroundings and inner experience. Use our timer for a 5-minute digital detox:
          </p>
          {!showTimer ? (
            <button 
              onClick={startTimer}
              className="bg-purple-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-600 transition duration-300"
            >
              Start 5-Minute Digital Detox
            </button>
          ) : (
            <div className="text-center">
              <p className="text-4xl font-bold mb-4">{Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}</p>
              <p className="text-lg">Step away from your devices. Notice your surroundings, your breath, and your physical sensations.</p>
            </div>
          )}
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Tips for Incorporating Digital Mindfulness into Daily Life</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Use app blockers or screen time settings to limit distracting apps.</li>
            <li>Turn off non-essential notifications to reduce digital interruptions.</li>
            <li>Practice mindful typing and messaging, being fully present as you communicate.</li>
            <li>Implement a "no phones at the table" rule during meals.</li>
            <li>Charge your devices outside your bedroom to improve sleep hygiene.</li>
            <li>Take regular "tech breaks" throughout your day to reset and refocus.</li>
            <li>Use grayscale mode on your devices to reduce their attractiveness.</li>
            <li>Regularly declutter your digital space (email inbox, files, apps).</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Overcoming Digital Mindfulness Challenges</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>FOMO (Fear of Missing Out):</strong> Practice gratitude for the present moment and set realistic expectations for online engagement.</li>
            <li><strong>Phantom vibration syndrome:</strong> Reduce alert settings and practice grounding techniques when you feel phantom notifications.</li>
            <li><strong>Email overload:</strong> Set specific times for checking emails and use mindful strategies to process your inbox.</li>
            <li><strong>Social media addiction:</strong> Use mindfulness to observe your social media habits and implement intentional usage strategies.</li>
            <li><strong>Digital multitasking:</strong> Practice single-tasking and give your full attention to one digital task at a time.</li>
            <li><strong>Mindless scrolling:</strong> Set time limits for social media and practice mindful browsing techniques.</li>
            <li><strong>Digital eye strain:</strong> Implement the 20-20-20 rule (every 20 minutes, look at something 20 feet away for 20 seconds).</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Mindful Online Communication</h2>
          <p className="text-lg mb-4">
            Applying mindfulness to our online interactions can significantly improve our digital relationships and overall online experience:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Think before posting or commenting, considering the impact of your words.</li>
            <li>Practice empathy and compassion in online discussions.</li>
            <li>Be aware of your emotional state when engaging in online conversations.</li>
            <li>Take mindful pauses before responding to emotionally charged messages.</li>
            <li>Use video calls mindfully, giving your full attention to the person you're talking to.</li>
            <li>Practice active listening in online meetings and discussions.</li>
            <li>Be mindful of your digital body language and tone in text-based communications.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Creating a Mindful Digital Environment</h2>
          <p className="text-lg mb-4">
            Your digital environment can significantly impact your ability to practice digital mindfulness:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Organize your digital workspace to minimize clutter and distractions.</li>
            <li>Use calming wallpapers and themes on your devices.</li>
            <li>Curate your social media feeds to promote positivity and inspiration.</li>
            <li>Set up separate user profiles or spaces for work and personal use.</li>
            <li>Use apps and browser extensions that promote mindful browsing.</li>
            <li>Create a dedicated "mindfulness corner" on your device with calming apps and resources.</li>
            <li>Regularly audit and unsubscribe from unnecessary email lists and notifications.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Mindful Technology Selection</h2>
          <p className="text-lg mb-4">
            Being mindful about the technology we choose to use can greatly enhance our digital well-being:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Regularly assess the value and impact of the apps and tools you use.</li>
            <li>Choose technology that aligns with your values and supports your well-being.</li>
            <li>Opt for tools that have built-in mindfulness features or promote healthy usage.</li>
            <li>Be mindful of the data you share and the privacy implications of the technology you use.</li>
            <li>Consider the environmental impact of your digital choices and opt for sustainable tech when possible.</li>
            <li>Reflect on how each piece of technology contributes to or detracts from your quality of life.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Digital Mindfulness for Different Age Groups</h2>
          <ul className="list-disc list-inside space-y-4">
            <li><strong>Children:</strong> Set up age-appropriate content filters, teach mindful media consumption, and model healthy tech habits.</li>
            <li><strong>Teenagers:</strong> Encourage self-reflection on social media use, teach digital citizenship, and promote balanced online-offline activities.</li>
            <li><strong>Adults:</strong> Focus on work-life balance, mindful email management, and intentional social media use.</li>
            <li><strong>Seniors:</strong> Provide support for navigating new technologies, encourage connection through digital tools, and teach online safety practices.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Enhance Your Digital Mindfulness</h2>
          <p className="text-lg mb-6">
            Explore our additional resources to further develop your digital mindfulness practice.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
          <Link href="/mindful-integration/mindfulness-community" className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300">
            Join Our Community
          </Link>
          <Link href="/free-consultation" className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300">
            Schedule a Free Consultation
          </Link>
        </div>
        </motion.section>
      </div>
    </div>
  );
}