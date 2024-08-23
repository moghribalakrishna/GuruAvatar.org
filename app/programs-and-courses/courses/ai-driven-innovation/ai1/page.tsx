'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Book, Video, Users, Github, Twitter } from 'lucide-react';

interface Resource {
  type: string;
  title: string;
  url: string;
  creator: string;
  thumbnail: string;
}

interface CourseSectionProps {
  title: string;
  description: string;
  resources: Resource[];
}

const CourseSection: React.FC<CourseSectionProps> = ({ title, description, resources }) => (
  <section className="mb-12 bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
    <h2 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h2>
    <p className="mb-6 text-gray-600">{description}</p>
    <ul className="space-y-4">
      {resources.map((resource, index) => (
        <li key={index} className="flex items-start">
          <div className="flex-shrink-0 mr-4">
            <Image
              src={resource.thumbnail}
              alt={resource.title}
              width={120}
              height={68}
              className="rounded-md"
            />
          </div>
          <div>
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              {resource.type === 'video' && <Video className="mr-2" />}
              {resource.type === 'article' && <Book className="mr-2" />}
              {resource.type === 'github' && <Github className="mr-2" />}
              <span className="mr-2 font-medium">{resource.title}</span>
              <ExternalLink size={16} />
            </a>
            <p className="text-sm text-gray-500 mt-1">Created by: {resource.creator}</p>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default function PromptEngineeringCoursePage() {
  const courseContent = [
    {
      title: "Introduction to Prompt Engineering",
      description: "Dive into the fundamental concepts of prompt engineering and understand its importance in AI-driven content generation. This section covers the basics of crafting effective prompts and their impact on AI outputs.",
      resources: [
        {
          type: "video",
          title: "What is Prompt Engineering?",
          url: "https://www.youtube.com/watch?v=5ef83Wljm-M",
          creator: "DeepSeek Coder",
          thumbnail: "/thumbnails/deepseek-coder-thumb.jpg"
        },
        {
          type: "article",
          title: "The Art and Science of Prompt Engineering",
          url: "https://towardsdatascience.com/the-art-and-science-of-prompt-engineering-a4621580d6f4",
          creator: "Towards Data Science",
          thumbnail: "/thumbnails/towards-data-science-thumb.jpg"
        }
      ]
    },
    {
      title: "Understanding AI Models for Content Generation",
      description: "Explore the capabilities of AI models like GPT-3 and learn how they can be leveraged for content generation.",
      resources: [
        {
          type: "video",
          title: "GPT-3 and Beyond: The Future of AI Content Generation",
          url: "https://www.youtube.com/watch?v=SY5PvZrJhLE",
          creator: "AI Journal",
          thumbnail: "/thumbnails/ai-journal-thumb.jpg"
        },
        {
          type: "github",
          title: "Awesome GPT-3",
          url: "https://github.com/elyase/awesome-gpt3",
          creator: "elyase",
          thumbnail: "/thumbnails/github-thumb.jpg"
        }
      ]
    },
    {
      title: "Crafting Effective Prompts",
      description: "Learn the techniques to write effective prompts that guide AI models to generate desired outputs.",
      resources: [
        {
          type: "video",
          title: "How to Write Effective Prompts for AI",
          url: "https://www.youtube.com/watch?v=f8PGV3T9w3A",
          creator: "AI Explained",
          thumbnail: "/thumbnails/ai-explained-thumb.jpg"
        },
        {
          type: "article",
          title: "Prompt Engineering 101: Tips and Tricks",
          url: "https://mlq.ai/prompt-engineering-101-tips-and-tricks/",
          creator: "MLQ.ai",
          thumbnail: "/thumbnails/mlq-ai-thumb.jpg"
        }
      ]
    },
    {
      title: "Advanced Techniques in Prompt Engineering",
      description: "Delve into advanced prompt engineering techniques to enhance the quality of AI-generated content.",
      resources: [
        {
          type: "video",
          title: "Advanced Prompt Engineering Techniques",
          url: "https://www.youtube.com/watch?v=Q6-Z1hYz0No",
          creator: "DeepSeek Coder",
          thumbnail: "/thumbnails/deepseek-coder-thumb.jpg"
        },
        {
          type: "github",
          title: "Prompt Engineering Techniques",
          url: "https://github.com/prompt-engineering/techniques",
          creator: "prompt-engineering",
          thumbnail: "/thumbnails/github-thumb.jpg"
        }
      ]
    },
    {
      title: "Real-World Applications of AI Content Generation",
      description: "See how prompt engineering is applied in real-world scenarios across various industries.",
      resources: [
        {
          type: "video",
          title: "AI Content Generation in Marketing and Journalism",
          url: "https://www.youtube.com/watch?v=7QlKtLn9qdY",
          creator: "AI Journal",
          thumbnail: "/thumbnails/ai-journal-thumb.jpg"
        },
        {
          type: "article",
          title: "Case Studies: AI Content Generation in Action",
          url: "https://towardsai.net/p/case-studies-ai-content-generation-in-action",
          creator: "Towards AI",
          thumbnail: "/thumbnails/towards-ai-thumb.jpg"
        }
      ]
    },
    {
      title: "Ethical Considerations and Future Trends",
      description: "Understand the ethical implications of AI content generation and explore future trends in the field.",
      resources: [
        {
          type: "video",
          title: "Ethics in AI Content Generation",
          url: "https://www.youtube.com/watch?v=J4WYwD5cZgI",
          creator: "AI Ethics Lab",
          thumbnail: "/thumbnails/ai-ethics-lab-thumb.jpg"
        },
        {
          type: "article",
          title: "The Future of AI Content Generation",
          url: "https://towardsdatascience.com/the-future-of-ai-content-generation-9f3e67b7e9a9",
          creator: "Towards Data Science",
          thumbnail: "/thumbnails/towards-data-science-thumb.jpg"
        }
      ]
    }
  ];

  const communities = [
    { name: "r/PromptEngineering", url: "https://www.reddit.com/r/PromptEngineering/" },
    { name: "OpenAI Discord", url: "https://discord.com/invite/openai" },
    { name: "Hugging Face Community", url: "https://huggingface.co/spaces" }
  ];

  const twitterExperts = [
    { name: "@goodside", url: "https://twitter.com/goodside" },
    { name: "@drjimfan", url: "https://twitter.com/drjimfan" },
    { name: "@Yaminolabs", url: "https://twitter.com/Yaminolabs" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Prompt Engineering and AI Content Generation</h1>
        <p className="text-xl mb-12 text-center text-gray-600">
          Master the art and science of crafting effective prompts for AI systems and generate high-quality content using cutting-edge AI technologies.
        </p>

        <section className="mb-12 bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Course Overview</h2>
          <p className="mb-6 text-gray-600">
            This course is designed to equip you with the skills and knowledge needed to excel in the field of AI content generation. By mastering prompt engineering, you will be able to create effective prompts that guide AI systems to produce high-quality content. Whether you are a beginner or an experienced professional, this course will provide you with valuable insights and practical skills that are highly sought after in the job market.
          </p>
          <p className="mb-6 text-gray-600">
            The best part? The resources provided in this course are freely available online. We believe that the best education is accessible for free, and we have curated a selection of world-class educational materials to help you achieve your learning goals.
          </p>
        </section>

        {courseContent.map((section, index) => (
          <CourseSection key={index} {...section} />
        ))}

        <section className="mb-12 bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Learning Communities</h2>
          <p className="mb-6 text-gray-600">
            Join these communities to engage with other learners, ask questions, and share your knowledge. Being part of a community can greatly enhance your learning experience and provide you with valuable networking opportunities.
          </p>
          <ul className="space-y-2">
            {communities.map((community, index) => (
              <li key={index}>
                <a
                  href={community.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  <Users className="mr-2" />
                  {community.name}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12 bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Experts to Follow</h2>
          <p className="mb-6 text-gray-600">
            Follow these experts on Twitter to stay updated with the latest trends and insights in the field of AI and prompt engineering. Learning from industry leaders can provide you with valuable perspectives and inspiration.
          </p>
          <ul className="space-y-2">
            {twitterExperts.map((expert, index) => (
              <li key={index}>
                <a
                  href={expert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  <Twitter className="mr-2" />
                  {expert.name}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <div className="text-center mt-12">
          <Link href="/mentor-connect">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors duration-200 shadow-lg">
              Connect with a Mentor
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}