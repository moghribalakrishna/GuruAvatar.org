'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HomeContent() {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-teal-700 min-h-screen text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center mb-20">
          <div className="lg:w-1/2 lg:pr-12">
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Revolutionizing 360° Learning with 
              <span className="text-orange-400"> AI</span>, 
              <span className="text-teal-400"> Mindfulness</span>, 
              <span className="text-yellow-400"> Habits</span> & 
              <span className="text-purple-400"> Mentorship</span>
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-blue-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              GuruAvatar combines cutting-edge AI technology with holistic learning approaches to empower the next generation of innovators and leaders.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/contact" className="bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-orange-600 transition duration-300 inline-block shadow-lg">
                Start Your Journey
              </Link>
            </motion.div>
          </div>
          <motion.div 
            className="lg:w-1/2 mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image 
              src="/guruavatar-hero.webp" 
              alt="GuruAvatar Learning Environment" 
              width={800} 
              height={450} 
              className="rounded-xl shadow-2xl"
            />
          </motion.div>
        </section>

        <section className="mb-20">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Innovative Approach
          </motion.h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: "Habit Forging", icon: "🔨", description: "Build lasting habits through intentional practice.", link: "/habit-forging", image: "/habit-forging.webp" },
              { title: "AI-Powered Learning", icon: "🤖", description: "Personalized learning paths tailored to you.", image: "/ai-powered-learning.webp" },
              { title: "Expert Mentorship", icon: "👥", description: "Connect with industry leaders for guidance.", image: "/expert-mentorship.webp" },
              { title: "Mindfulness Integration", icon: "🧘", description: "Enhance focus and reduce stress.", image: "/mindfulness-integration.webp" },
              { title: "Educational Ecosystem", icon: "🌱", description: "A holistic approach to revolutionize learning.", image: "/educational-ecosystem.webp" }
            ].map((feature, index) => (
              <Link href={feature.link || '#'} key={index}>
                <motion.div 
                  className="bg-white bg-opacity-10 p-4 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 cursor-pointer h-full flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Image 
                    src={feature.image}
                    alt={feature.title}
                    width={400}
                    height={225}
                    className="rounded-lg mb-3 w-full h-32 object-cover"
                  />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-blue-100 text-sm flex-grow">{feature.description}</p>
                  <span className="text-orange-400 hover:text-orange-300 font-semibold text-sm mt-2 inline-block">
                    Learn more →
                  </span>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <motion.section 
          className="text-center bg-blue-800 bg-opacity-50 py-16 rounded-xl shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Educational Journey?</h2>
          <p className="text-xl mb-8 text-blue-100">Join GuruAvatar today and experience the future of learning.</p>
          <Link href="/contact" className="bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-orange-600 transition duration-300 inline-block shadow-lg">
            Get Started Now
          </Link>
        </motion.section>
      </div>
    </div>
  );
}