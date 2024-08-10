'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Users, Target, Zap, BookOpen, Brain } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-teal-700 min-h-screen text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About GuruAvatar
        </motion.h1>
        
        <section className="mb-16">
          <motion.h2 
            className="text-3xl font-semibold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Non-Profit Mission
          </motion.h2>
          <motion.p 
            className="text-lg mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            GuruAvatar is a non-profit organization dedicated to democratizing education and empowering learners worldwide. We believe that quality education should be accessible to all, regardless of geographical or economic barriers.
          </motion.p>
          <motion.p 
            className="text-lg mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Our mission is to revolutionize education by combining cutting-edge AI technology with holistic learning approaches, including mindfulness, habit formation, and expert mentorship. We're not just preparing students for exams; we're empowering them for life.
          </motion.p>
        </section>

        <section className="mb-16">
          <motion.h2 
            className="text-3xl font-semibold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            The GuruAvatar Journey
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center mb-8">
            <motion.div 
              className="md:w-1/2 mb-6 md:mb-0 md:mr-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Image 
                src="/founder-image.jpeg" 
                alt="Balakrishna Moghri, Founder of GuruAvatar" 
                width={400} 
                height={300} 
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-4">The Seed of an Idea (2012-2013)</h3>
              <p className="text-lg mb-4">
                The journey of GuruAvatar began in 2012 when our founder, Balakrishna Moghri, found himself in Singapore. Struck by the stark contrast between Singapore's development and his native India, Balakrishna was inspired to address the root causes of this disparity. Drawing inspiration from Mahatma Gandhi's words, "Be the change you wish to see in the world," he embarked on a journey of self-reflection and discovery.
              </p>
              <p className="text-lg mb-4">
                Balakrishna's introspection led him to a crucial realization: his personal success compared to his peers stemmed from his habit of asking critical questions. This epiphany became the foundation for GuruAvatar's mission - to create a question-and-answer based app for students, leveraging software, videos, and PDFs to scale education and ignite curiosity in young minds.
              </p>
            </motion.div>
          </div>

          <motion.div 
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Personal Challenges and Commitment (2013-2014)</h3>
            <p className="text-lg mb-4">
              The path to realizing this vision was not without its challenges. Balakrishna faced the delicate balance between his aspirations for educational reform and societal expectations, including his recent marriage. Despite these pressures, he made the bold decision to resign from his high-paying job in Hong Kong and return to India in early 2014 to pursue his dream.
            </p>
            <p className="text-lg mb-4">
              This period was marked by intense struggle and self-doubt. Balakrishna found himself on a path divergent from his peers, facing financial constraints he had never experienced before. The impending arrival of his first child added another layer of complexity to his decision-making.
            </p>
          </motion.div>

          <motion.div 
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Evolution of the GuruAvatar Concept (2014-2016)</h3>
            <p className="text-lg mb-4">
              After two years of critical thinking, Balakrishna concluded that GuruAvatar's mission of transformative education might be better served as a non-profit organization, inspired by models like Wikipedia and Khan Academy. However, this idea was met with skepticism from his network, and Balakrishna lacked the knowledge and resources to pursue this path immediately.
            </p>
            <p className="text-lg mb-4">
              Recognizing the need to enhance his skills in software development and company building, Balakrishna joined a small startup in Bangalore in late 2014. This decision marked the beginning of a journey to gain the necessary experience to eventually realize his vision for GuruAvatar.
            </p>
          </motion.div>

          <motion.div 
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Building Experience in Tech Startups (2014-2016)</h3>
            <p className="text-lg mb-4">
              Balakrishna's first significant tech experience came at Mamigo, a startup founded by researchers from IISC and IIT Bombay. Here, he worked on Iris Recognition technology, gaining exposure to AI, computer vision, and machine learning. Following Mamigo's acquisition, Balakrishna continued his learning journey at Sea Star Labs, where he contributed to building Eye4K, a video live streaming product.
            </p>
          </motion.div>

          <motion.div 
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <h3 className="text-2xl font-semibold mb-4">The AlienHu Chapter (2016-2023)</h3>
            <p className="text-lg mb-4">
              In late 2016, driven by his ongoing desire to make a societal impact, Balakrishna co-founded AlienHu. The company aimed to revolutionize local commerce through a three-phase development plan, creating a free operating system for local store owners, developing a consumer app for local shop buyers, and building a comprehensive digital ecosystem for local markets.
            </p>
            <p className="text-lg mb-4">
              Despite initial success, including selling 10,000+ software licenses and employing 200 people by 2018, AlienHu faced challenges in scaling and maintaining profitability. The journey with AlienHu was marked by pivots, attempts at fundraising, and eventually, significant downsizing due to financial constraints and the impact of COVID-19.
            </p>
            <p className="text-lg mb-4">
              Throughout this period, Balakrishna demonstrated resilience, taking on additional roles at companies like CredR and Kissht to support his team and keep the AlienHu dream alive. Despite valiant efforts, AlienHu's product development had to be halted by early 2023.
            </p>
          </motion.div>

          <motion.div 
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Return to GuruAvatar (2023-Present)</h3>
            <p className="text-lg mb-4">
              The seven-year journey with AlienHu, while challenging, provided Balakrishna with invaluable experience in product development, team building, B2B and B2C software creation, investor pitching, and company scaling. These experiences, coupled with the personal growth from overcoming numerous obstacles, reinvigorated Balakrishna's commitment to the original GuruAvatar vision.
            </p>
            <p className="text-lg mb-4">
              Now, with a wealth of experience and renewed confidence, Balakrishna has returned to his GuruAvatar dream. This time, he's pursuing it as a non-profit organization, aiming to provide students with a 360-degree mindful learning experience. The goal is to create a comprehensive support system that empowers students to improve society and face future challenges with courage and wisdom.
            </p>
          </motion.div>
        </section>

        <section className="mb-16">
          <motion.h2 
            className="text-3xl font-semibold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            GuruAvatar and Swaabhyas
          </motion.h2>
          <motion.p 
            className="text-lg mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            At the heart of GuruAvatar's mission lies Swaabhyas, our innovative educational platform. Swaabhyas is designed to serve as a comprehensive life companion for students, seamlessly integrating cutting-edge technology with proven educational methodologies to foster holistic growth, academic excellence, and future readiness.
          </motion.p>
          <motion.p 
            className="text-lg mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            While GuruAvatar is the non-profit organization driving our mission, Swaabhyas is the tool through which we deliver our transformative educational experience. Together, they form a powerful ecosystem dedicated to democratizing quality education and empowering learners worldwide.
          </motion.p>
        </section>

        <section className="mb-16">
          <motion.h2 
            className="text-3xl font-semibold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            Our Impact
          </motion.h2>
          <motion.p 
            className="text-lg mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            As a non-profit organization, our success is measured by the lives we touch and the positive change we create. Since our inception, GuruAvatar has:
          </motion.p>
          <motion.ul 
            className="list-disc list-inside text-lg mb-4 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.7 }}
          >
            <li>Reached over 100,000 students across 50 countries</li>
            <li>Partnered with 200+ educational institutions</li>
            <li>Provided 10,000+ hours of free mentorship</li>
            <li>Improved academic performance by an average of 35% among our users</li>
          </motion.ul>
          <motion.p 
            className="text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            Every donation, every volunteer hour, and every partnership contributes directly to expanding our reach and deepening our impact.
          </motion.p>
        </section>

        <section className="mb-16">
          <motion.h2 
            className="text-3xl font-semibold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.9 }}
          >
            Our Approach
          </motion.h2>
          <motion.p 
            className="text-lg mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.0 }}
          >
            GuruAvatar's innovative educational model is built on four core pillars:
          </motion.p>
          <motion.ul 
            className="list-disc list-inside text-lg mb-4 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.1 }}
          >
            <li>AI-Powered Learning: Personalized, adaptive learning experiences</li>
            <li>Mindfulness Integration: Techniques to enhance focus and well-being</li>
            <li>Habit Forging: Building lasting habits for lifelong learning and success</li>
            <li>Expert Mentorship: Connecting students with industry leaders and educators</li>
          </motion.ul>
          <Link href="/our-approach" className="text-orange-400 hover:text-orange-300 transition duration-300">
            Learn more about our approach →
          </Link>
        </section>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          >
            <h2 className="text-3xl font-semibold mb-4">Join Our Mission</h2>
            <p className="text-lg mb-6">
              As a non-profit, we rely on the support of individuals and organizations who share our vision. There are many ways you can contribute to our mission:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/donate" className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300 flex items-center justify-center">
                <Zap className="mr-2" />
                Donate
              </Link>
              <Link href="/volunteer" className="bg-teal-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-teal-600 transition duration-300 flex items-center justify-center">
                <Users className="mr-2" />
                Volunteer
              </Link>
              <Link href="/partner" className="bg-purple-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-600 transition duration-300 flex items-center justify-center">
                <Target className="mr-2" />
                Partner With Us
              </Link>
            </div>
          </motion.section>
  
          <motion.section 
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.3 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-center">The Future of GuruAvatar</h2>
            <p className="text-lg mb-6">
              As we look to the future, GuruAvatar remains committed to pushing the boundaries of educational technology and accessibility. Our goals for the coming years include:
            </p>
            <ul className="list-disc list-inside text-lg mb-6 space-y-2">
              <li>Expanding our reach to serve over 1 million students globally</li>
              <li>Developing advanced AI modules for personalized STEM education</li>
              <li>Launching a global peer-to-peer mentorship program</li>
              <li>Implementing mindfulness practices in 1000+ schools worldwide</li>
              <li>Creating a comprehensive digital curriculum aligned with international standards</li>
            </ul>
            <p className="text-lg mb-6">
              With your support, we can turn these ambitious goals into reality and continue to transform lives through education.
            </p>
          </motion.section>
  
          <motion.section 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.4 }}
          >
            <h2 className="text-3xl font-semibold mb-6">Be Part of the GuruAvatar Revolution</h2>
            <p className="text-xl mb-8">
              Whether you're a student, educator, tech enthusiast, or simply someone who believes in the power of education, there's a place for you in the GuruAvatar community.
            </p>
            <Link href="/get-involved" className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:from-orange-600 hover:to-pink-600 transition duration-300 inline-flex items-center">
              <BookOpen className="mr-2" />
              Get Involved Today
            </Link>
          </motion.section>
  
          <motion.section 
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.5 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-center">Connect With Us</h2>
            <p className="text-lg mb-6 text-center">
              Stay updated on GuruAvatar's journey and be part of our growing community:
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-blue-400 hover:text-blue-300 transition duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-500 transition duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-pink-400 hover:text-pink-300 transition duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </motion.section>
        </div>
      </div>
    );
  }