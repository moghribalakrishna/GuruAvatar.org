'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  attributes: {
    Title: string;
    Excerpt: string;
    PublishDate: string;
  };
}

export default function HomeContent() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    async function fetchRecentPosts() {
      try {
        console.log('Fetching posts from:', process.env.NEXT_PUBLIC_STRAPI_API_URL);
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/blogs?pagination[limit]=3&sort[0]=PublishDate:desc`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched posts:', data);
        setPosts(data.data);
      } catch (error) {
        console.error('Error fetching recent blog posts:', error);
      }
    }
    fetchRecentPosts();
  }, []);

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
              Empowering Minds Through Non-Profit Education
            </motion.h1>
            <motion.p 
              className="text-xl mb-4 text-blue-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              GuruAvatar is a non-profit organization dedicated to revolutionizing education through:
            </motion.p>
            <motion.ul 
              className="text-xl mb-8 text-blue-100 list-none space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <li><span className="text-orange-400">✦</span> AI-Powered Learning</li>
              <li><span className="text-teal-400">✦</span> Mindfulness Practices</li>
              <li><span className="text-yellow-400">✦</span> Habit Formation</li>
              <li><span className="text-purple-400">✦</span> Expert Mentorship</li>
            </motion.ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link href="/about" className="bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-orange-600 transition duration-300 inline-block shadow-lg">
                Discover Our Mission
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
              priority
            />
          </motion.div>
        </section>

        {/* Our Approach Section */}
        <section className="mb-20">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Non-Profit Approach to Holistic Education
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "AI-Powered Learning", 
                icon: "🤖", 
                description: "Personalized learning paths adapted to individual needs, made accessible through our non-profit model.", 
                image: "/ai-powered-learning.webp" 
              },
              { 
                title: "Mindfulness Integration", 
                icon: "🧘", 
                description: "Enhance well-being through guided mindfulness practices, freely available to all our learners.", 
                image: "/mindfulness-integration.webp" 
              },
              { 
                title: "Habit Forging", 
                icon: "🔨", 
                description: "Develop success-driving habits with our scientifically-backed system, offered at no cost.", 
                link: "/habit-forging", 
                image: "/habit-forging.webp" 
              },
              { 
                title: "Expert Mentorship", 
                icon: "👥", 
                description: "Connect with volunteer industry leaders for guidance and insights, bridging education and real-world experience.", 
                image: "/expert-mentorship.webp" 
              }
            ].map((feature, index) => (
              <Link href={feature.link || '#'} key={index}>
                <motion.div 
                  className="bg-white bg-opacity-10 p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 cursor-pointer h-full flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Image 
                    src={feature.image}
                    alt={feature.title}
                    width={400}
                    height={225}
                    className="rounded-lg mb-4 w-full h-40 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-blue-100 text-sm flex-grow">{feature.description}</p>
                  <span className="text-orange-400 hover:text-orange-300 font-semibold text-sm mt-4 inline-block">
                    Learn More →
                  </span>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>

        {/* Recent Blog Posts Section */}
        <section className="mb-20">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Latest from Our Blog
          </motion.h2>
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <motion.div 
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/blog/${post.id}`}>
                    <div className="bg-white bg-opacity-10 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:bg-opacity-20">
                    <h2 className="text-2xl font-semibold mb-4">{post.attributes.Title}</h2>
                    <p className="text-gray-300 mb-4">{post.attributes.Excerpt}</p>
                      <span className="text-orange-400">Read more →</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-center text-xl">No blog posts found. Check back soon!</p>
          )}
        </section>

        {/* Call to Action */}
        <motion.section 
          className="text-center bg-blue-800 bg-opacity-50 py-16 rounded-xl shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-6">Join Our Non-Profit Educational Revolution</h2>
          <p className="text-xl mb-8 text-blue-100">
            Support GuruAvatar's mission to provide free, transformative education. Together, we can make quality learning accessible to all.
          </p>
          <div className="space-x-4">
            <Link href="/get-involved" className="bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-orange-600 transition duration-300 inline-block shadow-lg">
              Get Involved
            </Link>
            <Link href="/donate" className="bg-teal-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-teal-600 transition duration-300 inline-block shadow-lg">
              Donate
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}