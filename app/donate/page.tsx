'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
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
      <h3 className="text-xl font-semibold mb-2 text-gray-800">Your Impact</h3>
      <ul className="space-y-2">
        {achievableImpacts.map((impact, index) => (
          <motion.li
            key={index}
            className="flex items-center space-x-2 text-gray-600"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <impact.icon className="w-5 h-5 text-blue-500" />
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
      setImpactDescription(`Your donation of ₹${donationAmount} can make a real difference.`);
    } else {
      setImpactDescription('');
    }
  }, [donationAmount]);

  return (
    <div className="bg-white min-h-screen text-gray-800">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image src="/images/donate/donate_hero.webp" alt="Hero Image" width={1024} height={576} className="mx-auto rounded-xl shadow-2xl" />
          <h1 className="text-5xl font-bold mt-8 text-blue-600">
            Empower Rural Education Through Donations
          </h1>
          <p className="text-xl mt-4 max-w-3xl mx-auto text-gray-600">
            Your contributions will be primarily used to appoint the most educated women in rural villages to provide free, digitally empowered education to children up to 7th standard. Help us transform these communities and shape the future of the next generation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="bg-gray-100 rounded-xl p-8 shadow-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Make Your Impact</h2>
            <div className="mb-6">
              <label className="block text-lg mb-2 text-gray-700">Select Amount:</label>
              <div className="flex flex-wrap gap-4 mb-4">
                {['50', '100', '250', '500', '1000'].map((amount) => (
                  <button
                    key={amount}
                    className={`px-6 py-2 rounded-full ${
                      donationAmount === amount ? 'bg-blue-500 text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setDonationAmount(amount)}
                  >
                    ₹{amount}
                  </button>
                ))}
                <input
                  type="number"
                  placeholder="Custom Amount"
                  className="px-4 py-2 rounded-full bg-white border border-gray-300 text-gray-700 focus:border-blue-500 focus:outline-none"
                  onChange={(e) => setDonationAmount(e.target.value)}
                  value={donationAmount}/>
                  </div>
                </div>
                <div className="mb-6">
                  <label className="flex items-center space-x-2 text-gray-700">
                    <input
                      type="checkbox"
                      checked={isMonthly}
                      onChange={() => setIsMonthly(!isMonthly)}
                      className="form-checkbox h-5 w-5 text-blue-500"
                    />
                    <span>Make this a monthly donation</span>
                  </label>
                </div>
                <Link
                  href={`/donate/contact-4-donation?amount=${donationAmount}`}
                  className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300"
                >
                  Proceed with Donation
                </Link>
                {impactDescription && <DonationImpact amount={Number(donationAmount)} />}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-3xl font-semibold mb-6 text-gray-800">Why Your Support Matters</h2>
                <p className="text-lg mb-6 text-gray-600">Every contribution, no matter the size, plays a crucial role in our mission:</p>
                <ul className="space-y-4">
                  {impactItems.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start text-gray-600"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    >
                      <item.icon className="w-6 h-6 text-blue-500 mr-4 flex-shrink-0 mt-1" />
                      <span>{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <motion.section
              className="mt-16 bg-gray-100 rounded-xl p-8 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Our Commitment to Transparency</h2>
              <p className="text-lg mb-6 text-center text-gray-600">
                We believe in full transparency. Here's how we allocate your generous donations:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { label: 'Program Development', percentage: 70, icon: Sparkles },
                  { label: 'Technology & Infrastructure', percentage: 20, icon: Zap },
                  { label: 'Administrative Costs', percentage: 10, icon: DollarSign }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <item.icon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                    <div className="text-4xl font-bold mb-2 text-gray-800">{item.percentage}%</div>
                    <div className="text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-center text-gray-600">
                For detailed financial reports, please visit our{' '}
                <a href="/financials" className="text-blue-500 hover:underline">financial transparency page</a>.
              </p>
            </motion.section>
            <motion.section
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Voices of Impact</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { name: "Anonymous", story: "As a Donor and Mentor, I've discovered life's deepest meaning. GuruAvatar's unique educational approach is truly transformative, touching lives in ways I never imagined possible.", image: "/images/donate/anonymous_donor.webp" },
                  { name: "Kamakshi B", story: "GuruAvatar's mentorship didn't just help me achieve my MBA dream; it catapulted me into a prestigious software company. This platform doesn't just educate; it builds futures.", image: "/images/donate/kamakshi_b.webp" },
                  { name: "Malikarjun Gurumath", story: "Donating ₹1,00,000 was more than a financial decision; it was an investment in human potential. Witnessing the direct impact on students' lives has been profoundly rewarding and humbling.", image: "/images/donate/malikarjun_gurumath.webp" },
                  { name: "Shivaling M", story: "As GuruAvatar's first donor, I've watched a dream blossom into a life-changing reality. The impact we've created is just the beginning; I'm thrilled to see this scaling to help millions in need.", image: "/images/donate/shivaling_m.webp" },
                  { name: "Vittal M", story: "Mentoring with GuruAvatar isn't just exciting; it's a fulfilling journey that redefines the essence of education. Every interaction reminds me why I chose this path.", image: "/images/donate/vittal_m.webp" },
                  { name: "Raghvendra S", story: "As a GuruAvatar mentor, I'm not just supporting an initiative; I'm helping build the world's first mentorship-led education system. It's a revolution in learning, and I'm proud to be part of it.", image: "/images/donate/raghvendra_s.webp" }
                ].map((testimonial, index) => (
                  <div key={index} className="bg-gray-100 p-6 rounded-xl shadow-md flex items-start space-x-4">
                    <Image src={testimonial.image} alt={testimonial.name} width={80} height={80} className="rounded-full" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{testimonial.name}</h3>
                      <p className="text-gray-600">"{testimonial.story}"</p>
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
              <h2 className="text-3xl font-semibold mb-6 text-gray-800">Other Ways to Support</h2>
              <p className="text-xl mb-8 text-gray-600">
                Beyond financial contributions, there are many ways to support our mission:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/volunteer" className="bg-teal-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-teal-600 transition duration-300">Volunteer</a>
                <a href="/partner" className="bg-purple-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-600 transition duration-300">Become a Partner</a>
                <a href="/spread-the-word" className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300">Spread the Word</a>
              </div>
            </motion.section>
          </div>
        </div>
      );
    }