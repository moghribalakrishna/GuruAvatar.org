'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, BookOpen, Globe, Zap, DollarSign, Sparkles } from 'lucide-react';

const impactItems = [
  { icon: Users, text: "Empower 100 students with AI-driven personalized learning for a month", amount: 50 },
  { icon: BookOpen, text: "Develop a new adaptive course module in a critical subject area", amount: 100 },
  { icon: Globe, text: "Expand our reach to a new underserved region, impacting thousands", amount: 250 },
  { icon: Zap, text: "Provide a year of mentorship and advanced courses to a high-potential student", amount: 500 },
];

const DonationImpact = ({ amount }: { amount: number }) => {
  const achievableImpacts = impactItems.filter(item => item.amount <= amount);
  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold mb-2">Your Impact</h3>
      <ul className="space-y-2">
        {achievableImpacts.map((impact, index) => (
          <motion.li 
            key={index}
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <impact.icon className="w-5 h-5 text-orange-400" />
            <span>{impact.text}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default function DonatePage() {
  const [donationAmount, setDonationAmount] = useState('');
  const [isMonthly, setIsMonthly] = useState(false);
  const [impactDescription, setImpactDescription] = useState('');

  useEffect(() => {
    if (donationAmount) {
      setImpactDescription(`Your donation of $${donationAmount} can make a real difference.`);
    } else {
      setImpactDescription('');
    }
  }, [donationAmount]);

  return (
    <div className="bg-gradient-to-b from-blue-900 via-blue-800 to-teal-900 min-h-screen text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Empower the Future of Education
        </motion.h1>
        
        <motion.p 
          className="text-xl mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Your donation is the catalyst for transforming lives through AI-powered education. Together, we can break barriers and create opportunities for learners worldwide.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="bg-white bg-opacity-10 rounded-xl p-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl font-semibold mb-6">Make Your Impact</h2>
            <div className="mb-6">
              <label className="block text-lg mb-2">Select Amount:</label>
              <div className="flex flex-wrap gap-4 mb-4">
                {['50', '100', '250', '500', '1000'].map((amount) => (
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
                  placeholder="Custom Amount"
                  className="px-4 py-2 rounded-full bg-white bg-opacity-20 focus:bg-opacity-30 focus:outline-none"
                  onChange={(e) => setDonationAmount(e.target.value)}
                  value={donationAmount}
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
              {isMonthly ? 'Donate Monthly' : 'Donate Now'}
            </button>
            {impactDescription && <DonationImpact amount={Number(donationAmount)} />}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-semibold mb-6">Why Your Support Matters</h2>
            <p className="text-lg mb-6">Every contribution, no matter the size, plays a crucial role in our mission:</p>
            <ul className="space-y-4">
              {impactItems.map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <item.icon className="w-6 h-6 text-orange-400 mr-4 flex-shrink-0 mt-1" />
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.section 
          className="mt-16 bg-white bg-opacity-10 rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-center">Our Commitment to Transparency</h2>
          <p className="text-lg mb-6 text-center">
            We believe in full transparency. Here's how we allocate your generous donations:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: 'Program Development', percentage: 70, icon: Sparkles },
              { label: 'Technology & Infrastructure', percentage: 20, icon: Zap },
              { label: 'Administrative Costs', percentage: 10, icon: DollarSign }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <item.icon className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">{item.percentage}%</div>
                <div>{item.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center">
            For detailed financial reports, please visit our{' '}
            <a href="/financials" className="text-orange-400 hover:underline">financial transparency page</a>.
          </p>
        </motion.section>

        <motion.section 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-center">Voices of Impact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Priya S.", story: "GuruAvatar's AI-powered learning helped me achieve my dream of studying engineering at a top university.", image: "/priya.jpg" },
              { name: "Michael T.", story: "As a donor, seeing the direct impact of my contributions on students' lives has been incredibly rewarding.", image: "/michael.jpg" }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-xl flex items-start space-x-4">
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  width={80} 
                  height={80} 
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
                  <p>"{testimonial.story}"</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Other Ways to Support</h2>
          <p className="text-xl mb-8">
            Beyond financial contributions, there are many ways to support our mission:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/volunteer" className="bg-teal-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-teal-700 transition duration-300">Volunteer</a>
            <a href="/partner" className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300">Become a Partner</a>
            <a href="/spread-the-word" className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">Spread the Word</a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}