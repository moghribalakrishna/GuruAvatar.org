'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function DonatePage() {
  const [donationAmount, setDonationAmount] = useState('');
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <div className="bg-gradient-to-b from-blue-900 to-teal-700 min-h-screen text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Support Our Mission
        </motion.h1>
        
        <section className="mb-16">
          <motion.h2 
            className="text-3xl font-semibold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Your Donation Makes a Difference
          </motion.h2>
          <motion.p 
            className="text-lg mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            As a non-profit organization, GuruAvatar relies on the generosity of donors like you to continue our mission of democratizing education through AI, mindfulness, and mentorship. Your contribution directly supports:
          </motion.p>
          <motion.ul 
            className="list-disc list-inside text-lg mb-6 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <li>Development of our AI-powered learning platform</li>
            <li>Creation of mindfulness and habit-building resources</li>
            <li>Expansion of our mentorship network</li>
            <li>Providing free access to underprivileged students</li>
            <li>Research into innovative educational methods</li>
          </motion.ul>
        </section>

        <section className="mb-16">
          <motion.h2 
            className="text-3xl font-semibold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Make Your Donation
          </motion.h2>
          <div className="bg-white bg-opacity-10 p-8 rounded-xl shadow-xl">
            <div className="mb-6">
              <label className="block text-lg mb-2">Select Amount:</label>
              <div className="flex flex-wrap gap-4">
                {['10', '25', '50', '100', '250'].map((amount) => (
                  <button
                    key={amount}
                    className={`px-6 py-2 rounded-full ${
                      donationAmount === amount
                        ? 'bg-orange-500 text-white'
                        : 'bg-white bg-opacity-20 hover:bg-opacity-30'
                    }`}
                    onClick={() => setDonationAmount(amount)}
                  >
                    ${amount}
                  </button>
                ))}
                <input
                  type="number"
                  placeholder="Other"
                  className="px-4 py-2 rounded-full bg-white bg-opacity-20 focus:bg-opacity-30 focus:outline-none"
                  onChange={(e) => setDonationAmount(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={isMonthly}
                  onChange={() => setIsMonthly(!isMonthly)}
                  className="form-checkbox h-5 w-5 text-orange-500"
                />
                <span>Make this a monthly donation</span>
              </label>
            </div>
            <button className="w-full bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300">
              {isMonthly ? 'Start Monthly Donation' : 'Donate Now'}
            </button>
          </div>
        </section>

        <section className="mb-16">
          <motion.h2 
            className="text-3xl font-semibold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Your Impact
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { amount: '$10', impact: 'Provides access to our AI tutor for one student for a month' },
              { amount: '$50', impact: 'Supports the development of a new mindfulness module' },
              { amount: '$100', impact: 'Enables mentorship sessions for 5 underprivileged students' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white bg-opacity-10 p-6 rounded-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-2">{item.amount}</h3>
                <p>{item.impact}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <motion.h2 
            className="text-3xl font-semibold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            Transparency and Accountability
          </motion.h2>
          <motion.p 
            className="text-lg mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            At GuruAvatar, we are committed to full transparency in how we use donations. Here's how we allocate funds:
          </motion.p>
          <div className="bg-white bg-opacity-10 p-6 rounded-xl mb-6">
            <div className="flex justify-between mb-2">
              <span>Platform Development:</span>
              <span>40%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-orange-500 h-2.5 rounded-full" style={{width: '40%'}}></div>
            </div>
            {/* Add more allocation items here */}
          </div>
          <motion.p 
            className="text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            We provide detailed financial reports annually. You can view our latest report <a href="#" className="text-orange-400 hover:text-orange-300">here</a>.
          </motion.p>
        </section>

        <section>
          <motion.h2 
            className="text-3xl font-semibold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            Other Ways to Support
          </motion.h2>
          <motion.p 
            className="text-lg mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            Your support isn't limited to financial contributions. You can also:
          </motion.p>
          <ul className="list-disc list-inside text-lg mb-6 space-y-2">
            <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.4 }}>
              <a href="#" className="text-orange-400 hover:text-orange-300">Volunteer your time and skills</a>
            </motion.li>
            <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.5 }}>
              <a href="#" className="text-orange-400 hover:text-orange-300">Become a mentor</a>
            </motion.li>
            <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.6 }}>
              <a href="#" className="text-orange-400 hover:text-orange-300">Partner with us as an institution</a>
            </motion.li>
          </ul>
        </section>
      </div>
    </div>
  );
}