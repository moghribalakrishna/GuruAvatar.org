'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
interface BlogPost {
  id: number;
  attributes: {
    Title: string;
    Excerpt: string;
    PublishDate: string;
  };
}

export default function HomeContent() {
  const karmaKaryaItems = [
    { title: "Jobs & Internships", link: "/jobs-internships", image: "/images/jobs-internships/main_jobs-internships.webp" },
    { title: "Programs & Courses", link: "/programs-and-courses", image: "/images/programs-and-courses/header-image.webp" },
    { title: "AI Masterclasses", link: "/ai-masterclass", image: "/images/ai-masterclass/hero-2.webp" },
    { title: "Our Approach", link: "/our-approach", image: "/images/our-approach/our-approach.webp" },
    { title: "About", link: "/about", image: "/images/about/technology-traditional-education.webp" },
  ];
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    async function fetchRecentPosts() {
      try {
        console.log('Fetching posts from:', process.env.NEXT_PUBLIC_STRAPI_API_URL);
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/blogs?pagination[limit]=3&sort[0]=publishDate:desc`);
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
    <div className="bg-white min-h-screen text-gray-800">
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center mb-12 md:mb-20">
          <div className="lg:w-1/2 lg:pr-12">
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Empowering Minds Through Non-Profit Education
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-4 text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              GuruAvatar is a non-profit organization dedicated to revolutionizing education through:
            </motion.p>
            <motion.ul
              className="text-lg md:text-xl mb-6 md:mb-8 text-gray-600 list-none space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <li><span className="text-yellow-400">✦</span> Habit Formation</li>
              <li><span className="text-teal-400">✦</span> Mindfulness Practices</li>
              <li><span className="text-purple-400">✦</span> Expert Mentorship</li>
              <li><span className="text-orange-400">✦</span> AI-Powered Learning</li>
            </motion.ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-8 md:mb-0"
            >
              <Link href="/our-approach" className="bg-orange-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-lg md:text-xl font-semibold hover:bg-orange-600 transition duration-300 inline-block shadow-lg">
                Discover Our Approach
              </Link>
            </motion.div>
          </div>
          <motion.div
  className="lg:w-1/2 mt-8 lg:mt-0"
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
>
  <Image
    src="/guruavatar-hero.webp"
    alt="GuruAvatar Learning Environment"
    width={800}
    height={450}
    className="rounded-xl shadow-2xl w-full h-auto"
    priority
  />
  <div className="flex justify-center mt-4 space-x-4">
    <a href="https://www.linkedin.com/in/balakrismoghri" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="text-blue-600 text-2xl" />
    </a>
    <a href="https://x.com/BalakrisMoghri" target="_blank" rel="noopener noreferrer">
      <FaTwitter className="text-blue-400 text-2xl" />
    </a>
    <a href="https://www.facebook.com/alienhuBK" target="_blank" rel="noopener noreferrer">
      <FaFacebook className="text-blue-700 text-2xl" />
    </a>
    <a href="https://www.instagram.com/balakrismoghri" target="_blank" rel="noopener noreferrer">
      <FaInstagram className="text-pink-600 text-2xl" />
    </a>
  </div>
</motion.div>
        </section>

        {/* Features Section */}
        <section className="mb-16 md:mb-20">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Non-Profit Approach to Holistic Education
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
               { title: "Expert Mentorship", icon: "👥", description: "Connect with volunteer industry leaders for guidance and insights, bridging education and real-world experience.", link: "/expert-mentorship", image: "/images/expert-mentorship/expert-mentorship.webp" },
               { title: "Mindfulness Integration", icon: "🧘", description: "Enhance well-being through guided mindfulness practices, freely available to all our learners.", link: "/mindful-integration", image: "/mindfulness-integration.webp" },
              { title: "Habit Forging", icon: "🔨", description: "Develop success-driving habits with our scientifically-backed system, offered at no cost.", link: "/habit-forging", image: "/habit-forging.webp" },
              { title: "AI-Powered Learning", icon: "🤖", description: "Personalized learning paths adapted to individual needs, made accessible through our non-profit model.", link: "/ai-learning", image: "/ai-powered-learning.webp" },
            ].map((feature, index) => (
              <Link href={feature.link || '#'} key={index}>
                <motion.div
                  className="bg-gray-100 p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 cursor-pointer h-full flex flex-col"
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
                  <p className="text-gray-600 text-sm flex-grow">{feature.description}</p>
                  <span className="text-orange-400 hover:text-orange-300 font-semibold text-sm mt-4 inline-block">
                    Learn More →
                  </span>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>
      {/* Our Karma & Karya Section */}
      <section className="mb-16 md:mb-20">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Karma & Karya
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {karmaKaryaItems.map((item, index) => (
              <Link href={item.link} key={index}>
                <motion.div 
                  className="bg-gray-100 p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 cursor-pointer h-full flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={225}
                    className="rounded-lg mb-4 w-full h-40 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <span className="text-orange-400 hover:text-orange-300 font-semibold text-sm mt-4 inline-block">
                    Explore →
                  </span>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>
        {/* Blog Section */}
        <section className="mb-16 md:mb-20">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Latest from Our Blog
          </motion.h2>
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/blog/${post.id}`}>
                    <div className="bg-gray-100 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:bg-gray-200 h-full flex flex-col">
                      <h2 className="text-xl md:text-2xl font-semibold mb-4">{post.attributes.Title}</h2>
                      <p className="text-gray-600 mb-4 flex-grow">{post.attributes.Excerpt}</p>
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

        {/* Call to Action Section */}
        <motion.section
          className="text-center bg-gray-100 py-12 md:py-16 rounded-xl shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Join Our Non-Profit Educational Revolution</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-600">
            Support GuruAvatar's mission to provide free, transformative education. Together, we can make quality learning accessible to all.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/get-involved" className="bg-orange-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-lg md:text-xl font-semibold hover:bg-orange-600 transition duration-300 inline-block shadow-lg w-full sm:w-auto">
              Get Involved
            </Link>
            <Link href="/donate" className="bg-teal-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-lg md:text-xl font-semibold hover:bg-teal-600 transition duration-300 inline-block shadow-lg w-full sm:w-auto">
              Donate
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}