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
          title: "Prompt Engineering for Conversational AI",
          url: "https://www.youtube.com/live/f32dc5M2Mn0?si=vtWSEeet784-gtXj",
          creator: "DeepLearning.AI",
          thumbnail: "/thumbnails/deeplearning-ai-thumb.jpg"
        },
        {
          type: "article",
          title: "A Beginner's Guide to Prompt Engineering",
          url: "https://www.promptingguide.ai/",
          creator: "DAIR.AI",
          thumbnail: "/thumbnails/dair-ai-thumb.jpg"
        },
        {
          type: "github",
          title: "Awesome Prompt Engineering",
          url: "https://github.com/promptslab/Awesome-Prompt-Engineering",
          creator: "PromptsLab",
          thumbnail: "/thumbnails/github-thumb.jpg"
        }
      ]
    },
    {
      title: "Advanced Prompt Techniques",
      description: "Explore cutting-edge techniques in prompt engineering, including chain-of-thought prompting and advanced strategies for complex tasks. Learn how to craft prompts that yield more accurate and nuanced AI-generated content.",
      resources: [
        {
          type: "video",
          title: "Advanced Prompt Engineering Techniques",
          url: "https://www.youtube.com/watch?v=bBiTR_1sEmI",
          creator: "AI Coffee Break with Letitia",
          thumbnail: "/thumbnails/ai-coffee-break-thumb.jpg"
        },
        {
          type: "article",
          title: "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models",
          url: "https://arxiv.org/abs/2201.11903",
          creator: "arXiv",
          thumbnail: "/thumbnails/arxiv-thumb.jpg"
        },
        {
          type: "github",
          title: "GPT Best Practices",
          url: "https://github.com/openai/openai-cookbook/blob/main/articles/gpt-best-practices.md",
          creator: "OpenAI",
          thumbnail: "/thumbnails/openai-thumb.jpg"
        }
      ]
    },
    {
      title: "Practical Applications",
      description: "Apply your knowledge of prompt engineering to real-world scenarios. This section includes practical examples and projects to help you gain hands-on experience.",
      resources: [
        {
          type: "video",
          title: "Real-World Applications of Prompt Engineering",
          url: "https://www.youtube.com/watch?v=example",
          creator: "AI Expert",
          thumbnail: "/thumbnails/ai-expert-thumb.jpg"
        },
        {
          type: "article",
          title: "Case Studies in Prompt Engineering",
          url: "https://www.example.com/case-studies",
          creator: "AI Researcher",
          thumbnail: "/thumbnails/ai-researcher-thumb.jpg"
        },
        {
          type: "github",
          title: "Prompt Engineering Projects",
          url: "https://github.com/example/prompt-engineering-projects",
          creator: "AI Developer",
          thumbnail: "/thumbnails/ai-developer-thumb.jpg"
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