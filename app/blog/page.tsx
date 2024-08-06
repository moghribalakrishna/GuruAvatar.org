'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  attributes: {
    Title: string;
    Excerpt: string;
    PublishDate: string;
  };
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/blogs?pagination[limit]=10&sort[0]=PublishDate:desc`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched posts:', data);
        setPosts(data.data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-900 to-teal-700 min-h-screen text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          GuruAvatar Blog
        </motion.h1>
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
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
      </div>
    </div>
  );
}