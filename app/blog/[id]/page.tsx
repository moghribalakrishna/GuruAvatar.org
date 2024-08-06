'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  attributes: {
    Title: string;
    Content: Array<{
      type: string;
      children: Array<{
        text: string;
      }>;
    }> | string;
    PublishDate: string;
  };
}

export default function BlogPostPage() {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/blogs/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched post:', data);
        setPost(data.data);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    }
    fetchPost();
  }, [id]);

  if (!post) {
    return <div className="text-center py-16">Loading...</div>;
  }

  const renderContent = (content: BlogPost['attributes']['Content']) => {
    if (typeof content === 'string') {
      return content;
    }
    if (Array.isArray(content)) {
      return content.map((block, index) => {
        if (block.type === 'paragraph') {
          return <p key={index} className="mb-4">{block.children.map(child => child.text).join('')}</p>;
        }
        // Add more conditions here for other block types if needed
        return null;
      });
    }
    return JSON.stringify(content); // Fallback
  };

  return (
    <div className="bg-gradient-to-b from-blue-900 to-teal-700 min-h-screen text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {post.attributes.Title}
        </motion.h1>
        <motion.div 
          className="bg-white bg-opacity-10 rounded-xl p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {renderContent(post.attributes.Content)}
        </motion.div>
      </div>
    </div>
  );
}