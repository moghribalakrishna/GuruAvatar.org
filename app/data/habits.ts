import { Target, CheckCircle, Rocket, Brain, Clock, Heart, Sun, Moon, Book, Pencil, Users, MessageCircle, Briefcase, DollarSign } from 'lucide-react';

export const habitsData = {
  "goal-setting": {
    title: "Goal Setting",
    icon: "🎯",
    description: "Effective goal setting is the cornerstone of personal and professional growth. It provides direction, motivation, and a clear measure of success. By mastering the art of goal setting, you'll be able to focus your efforts, increase motivation, track progress, and overcome procrastination.",
    benefits: [
      "Focus your efforts on what truly matters",
      "Increase your motivation and commitment",
      "Track your progress and celebrate achievements",
      "Overcome procrastination and inertia"
    ],
    keyPoints: [
      { title: "Specific", description: "Clearly define what you want to accomplish", icon: Target },
      { title: "Measurable", description: "Include concrete criteria for measuring progress", icon: CheckCircle },
      { title: "Achievable", description: "Ensure the goal is attainable with effort", icon: Rocket },
      { title: "Relevant", description: "Align with your broader objectives and values", icon: Brain },
      { title: "Time-bound", description: "Set a realistic timeframe for achievement", icon: Clock }
    ],
    imageSrc: "/college-goal-setting-collaboration.webp",
    journeyImageSrc: "/college-goal-setting-journey.webp",
    journeySteps: [
      "Understanding the psychology of goal setting",
      "Crafting SMART goals for different areas of your life",
      "Developing action plans to achieve your goals",
      "Overcoming common obstacles and staying motivated",
      "Tracking progress and adjusting goals as needed"
    ],
    successStory: {
      quote: "GuruAvatar's goal setting course transformed my approach to personal development. I've achieved more in the past six months than in the previous two years combined!",
      author: "Sarah J., Entrepreneur"
    }
  },
  "mindfulness": {
    title: "Mindfulness",
    icon: "🧘",
    description: "Mindfulness is the practice of being fully present and engaged in the moment, aware of your thoughts and feelings without distraction or judgment. It's a powerful tool for reducing stress, improving focus, and enhancing overall well-being.",
    benefits: [
      "Reduces stress and anxiety",
      "Improves focus and concentration",
      "Enhances emotional regulation",
      "Boosts overall well-being and life satisfaction"
    ],
    keyPoints: [
      { title: "Present Moment Awareness", description: "Learn to focus on the here and now", icon: Clock },
      { title: "Non-judgmental Observation", description: "Observe thoughts without criticizing them", icon: Brain },
      { title: "Mindful Breathing", description: "Use breath as an anchor to the present moment", icon: Heart },
      { title: "Body Scan Meditation", description: "Systematically focus on different body parts", icon: Sun },
      { title: "Mindful Daily Activities", description: "Incorporate mindfulness into everyday tasks", icon: Moon }
    ],
    imageSrc: "/images/mindfulness.webp",
    journeyImageSrc: "/images/mindfulness-journey.webp",
    journeySteps: [
      "Understanding the principles of mindfulness",
      "Developing a regular meditation practice",
      "Applying mindfulness techniques to daily life",
      "Overcoming common obstacles in mindfulness practice",
      "Integrating mindfulness with other aspects of personal growth"
    ],
    successStory: {
      quote: "Practicing mindfulness has transformed my life. I'm more focused, less stressed, and much happier overall.",
      author: "Michael L., Software Engineer"
    }
  },
  "time-management": {
    title: "Time Management",
    icon: "⏰",
    description: "Effective time management is crucial for productivity, work-life balance, and achieving your goals. It involves planning, prioritizing, and organizing your time to maximize efficiency and reduce stress.",
    benefits: [
      "Increases productivity and efficiency",
      "Reduces stress and overwhelm",
      "Improves work-life balance",
      "Helps in achieving both short-term and long-term goals"
    ],
    keyPoints: [
      { title: "Prioritization", description: "Focus on high-impact tasks", icon: Target },
      { title: "Time Blocking", description: "Allocate specific time slots for tasks", icon: Clock },
      { title: "Eliminating Distractions", description: "Create a focused work environment", icon: Sun },
      { title: "Delegation", description: "Distribute tasks effectively", icon: Users },
      { title: "Regular Review", description: "Assess and adjust your time management strategies", icon: CheckCircle }
    ],
    imageSrc: "/images/time-management.webp",
    journeyImageSrc: "/images/time-management-journey.webp",
    journeySteps: [
      "Assessing your current time management habits",
      "Learning various time management techniques",
      "Implementing strategies to eliminate time-wasters",
      "Developing a personalized time management system",
      "Continuously refining your approach for optimal results"
    ],
    successStory: {
      quote: "The time management skills I learned have doubled my productivity and given me back control over my schedule.",
      author: "Emma R., Marketing Manager"
    }
  },
"journaling-reading": {
    title: "Journaling & Reading",
    icon: "📚",
    description: "Journaling and reading are powerful habits that enhance self-reflection, creativity, and knowledge acquisition. These practices contribute to personal growth, emotional intelligence, and lifelong learning.",
    benefits: [
      "Improves self-awareness and emotional intelligence",
      "Enhances creativity and problem-solving skills",
      "Expands knowledge and vocabulary",
      "Reduces stress and promotes mental clarity"
    ],
    keyPoints: [
      { title: "Daily Journaling", description: "Cultivate self-reflection through regular writing", icon: Pencil },
      { title: "Diverse Reading", description: "Explore various genres and topics", icon: Book },
      { title: "Critical Analysis", description: "Engage deeply with the material you read", icon: Brain },
      { title: "Habit Tracking", description: "Monitor your reading and journaling progress", icon: CheckCircle },
      { title: "Creative Expression", description: "Use journaling for creative writing and brainstorming", icon: Sun }
    ],
    imageSrc: "/images/journaling-reading.webp",
    journeyImageSrc: "/images/journaling-reading-journey.webp",
    journeySteps: [
      "Establishing a daily journaling routine",
      "Developing a diverse reading list",
      "Learning effective note-taking and summarization techniques",
      "Incorporating reflective practices into your reading",
      "Using journaling to set and track personal goals"
    ],
    successStory: {
      quote: "Journaling and reading have transformed my life. I'm more self-aware, creative, and knowledgeable than ever before.",
      author: "Alex T., Writer"
    }
  },
  "health": {
    title: "Health",
    icon: "🧠",
    description: "Maintaining good health is crucial for overall well-being and success in all areas of life. This habit focuses on physical, mental, and emotional health through proper nutrition, exercise, and self-care practices.",
    benefits: [
      "Increases energy and productivity",
      "Improves mood and reduces stress",
      "Enhances cognitive function and memory",
      "Promotes longevity and quality of life"
    ],
    keyPoints: [
      { title: "Balanced Nutrition", description: "Fuel your body with wholesome foods", icon: Heart },
      { title: "Regular Exercise", description: "Incorporate physical activity into your routine", icon: Rocket },
      { title: "Adequate Sleep", description: "Prioritize quality sleep for recovery", icon: Moon },
      { title: "Stress Management", description: "Develop techniques to handle stress effectively", icon: Brain },
      { title: "Preventive Care", description: "Regular check-ups and health screenings", icon: CheckCircle }
    ],
    imageSrc: "/images/health.webp",
    journeyImageSrc: "/images/health-journey.webp",
    journeySteps: [
      "Assessing your current health status",
      "Creating a balanced nutrition plan",
      "Designing a sustainable exercise routine",
      "Implementing stress reduction techniques",
      "Developing a consistent sleep schedule"
    ],
    successStory: {
      quote: "Prioritizing my health has improved every aspect of my life. I have more energy, focus, and overall happiness.",
      author: "Sophia L., Teacher"
    }
  },
  "communication": {
    title: "Communication",
    icon: "💬",
    description: "Effective communication is key to success in personal and professional relationships. This habit focuses on developing clear, empathetic, and persuasive communication skills across various mediums.",
    benefits: [
      "Improves interpersonal relationships",
      "Enhances leadership and influence",
      "Reduces misunderstandings and conflicts",
      "Boosts confidence and self-expression"
    ],
    keyPoints: [
      { title: "Active Listening", description: "Focus on understanding others fully", icon: MessageCircle },
      { title: "Clear Expression", description: "Articulate thoughts and ideas effectively", icon: Pencil },
      { title: "Empathy", description: "Understand and relate to others' feelings", icon: Heart },
      { title: "Non-verbal Communication", description: "Be aware of body language and tone", icon: Users },
      { title: "Adaptability", description: "Adjust communication style to different audiences", icon: Rocket }
    ],
    imageSrc: "/images/communication.webp",
    journeyImageSrc: "/images/communication-journey.webp",
    journeySteps: [
      "Assessing your current communication strengths and weaknesses",
      "Practicing active listening techniques",
      "Developing clear and concise speaking skills",
      "Learning to read and use non-verbal cues effectively",
      "Mastering various communication mediums (written, verbal, digital)"
    ],
    successStory: {
      quote: "Improving my communication skills has opened up new opportunities in my career and deepened my personal relationships.",
      author: "David R., Sales Executive"
    }
  },
  "teamwork": {
    title: "Teamwork",
    icon: "🤝",
    description: "Effective teamwork is essential in today's collaborative world. This habit focuses on developing skills to work efficiently and harmoniously with others, fostering innovation and achieving shared goals.",
    benefits: [
      "Enhances problem-solving and creativity",
      "Improves productivity and efficiency",
      "Builds stronger relationships and networks",
      "Develops leadership and interpersonal skills"
    ],
    keyPoints: [
      { title: "Collaboration", description: "Work effectively with diverse team members", icon: Users },
      { title: "Communication", description: "Share ideas and feedback clearly", icon: MessageCircle },
      { title: "Conflict Resolution", description: "Address and resolve disagreements constructively", icon: Rocket },
      { title: "Adaptability", description: "Adjust to different team dynamics and roles", icon: Sun },
      { title: "Accountability", description: "Take responsibility for your part in team efforts", icon: CheckCircle }
    ],
    imageSrc: "/images/teamwork.webp",
    journeyImageSrc: "/images/teamwork-journey.webp",
    journeySteps: [
      "Understanding the principles of effective teamwork",
      "Developing strong interpersonal skills",
      "Learning conflict resolution techniques",
      "Practicing effective team communication",
      "Cultivating leadership skills within a team context"
    ],
    successStory: {
      quote: "Learning to work effectively in teams has not only improved my work performance but also made my job much more enjoyable.",
      author: "Emily K., Project Manager"
    }
  },
  "critical-thinking": {
    title: "Critical Thinking",
    icon: "🧐",
    description: "Critical thinking is the ability to analyze information objectively and make reasoned judgments. It involves evaluating sources, questioning assumptions, and considering alternative perspectives.",
    benefits: [
      "Improves decision-making abilities",
      "Enhances problem-solving skills",
      "Promotes creativity and innovation",
      "Develops stronger arguments and reasoning"
    ],
    keyPoints: [
      { title: "Analysis", description: "Break down complex information into parts", icon: Brain },
      { title: "Evaluation", description: "Assess the credibility and relevance of information", icon: CheckCircle },
      { title: "Inference", description: "Draw logical conclusions from available data", icon: Target },
      { title: "Explanation", description: "Clearly communicate your reasoning", icon: MessageCircle },
      { title: "Open-mindedness", description: "Consider alternative viewpoints", icon: Sun }
    ],
    imageSrc: "/images/critical-thinking.webp",
    journeyImageSrc: "/images/critical-thinking-journey.webp",
    journeySteps: [
      "Understanding the fundamentals of logic and reasoning",
      "Learning to identify cognitive biases and logical fallacies",
      "Practicing analytical and evaluative techniques",
      "Developing skills in constructing and deconstructing arguments",
      "Applying critical thinking to real-world problems and decisions"
    ],
    successStory: {
      quote: "Developing my critical thinking skills has made me a more effective problem-solver and decision-maker in both my personal and professional life.",
      author: "Thomas H., Data Analyst"
    }
  },
  "mentorship": {
    title: "Mentorship",
    icon: "🏆",
    description: "Mentorship involves seeking guidance from experienced individuals and providing support to others. It's a powerful tool for personal and professional development, fostering growth and learning.",
    benefits: [
      "Accelerates personal and professional growth",
      "Provides valuable insights and perspectives",
      "Expands networks and opportunities",
      "Develops leadership and coaching skills"
    ],
    keyPoints: [
      { title: "Finding Mentors", description: "Identify and connect with suitable mentors", icon: Users },
      { title: "Being a Mentee", description: "Learn how to maximize mentorship benefits", icon: Book },
      { title: "Becoming a Mentor", description: "Develop skills to guide and support others", icon: Briefcase },
      { title: "Reciprocal Learning", description: "Embrace two-way knowledge exchange", icon: Rocket },
      { title: "Continuous Growth", description: "Use mentorship for ongoing development", icon: Sun }
    ],
    imageSrc: "/images/mentorship.webp",
    journeyImageSrc: "/images/mentorship-journey.webp",
    journeySteps: [
      "Understanding the value and principles of mentorship",
      "Learning how to find and approach potential mentors",
      "Developing skills to be an effective mentee",
      "Transitioning into a mentorship role",
      "Building a network of mentorship relationships"
    ],
    successStory: {
      quote: "My mentor's guidance has been invaluable in navigating my career. Now, as a mentor myself, I find great fulfillment in helping others grow.",
      author: "Rachel M., Executive Coach"
    }
  },
  "financial-literacy": {
    title: "Financial Literacy",
    icon: "💰",
    description: "Financial literacy is the ability to understand and effectively use various financial skills, including personal financial management, budgeting, and investing. It's crucial for achieving financial well-being and independence.",
    benefits: [
      "Improves money management skills",
      "Enables better financial decision-making",
      "Reduces financial stress and anxiety",
      "Helps in achieving long-term financial goals"
    ],
    keyPoints: [
      { title: "Budgeting", description: "Create and maintain a personal budget", icon: DollarSign },
      { title: "Saving", description: "Develop strategies for effective saving", icon: Briefcase },
      { title: "Investing", description: "Understand different investment options", icon: Rocket },
      { title: "Debt Management", description: "Learn to manage and reduce debt", icon: Target },
      { title: "Financial Planning", description: "Set and work towards financial goals", icon: CheckCircle }
    ],
    imageSrc: "/images/financial-literacy.webp",
    journeyImageSrc: "/images/financial-literacy-journey.webp",
    journeySteps: [
      "Assessing your current financial situation",
      "Learning fundamental financial concepts and terminology",
      "Creating a personal budget and savings plan",
      "Understanding credit, loans, and debt management",
      "Exploring investment options and long-term financial planning"
    ],
    successStory: {
      quote: "Becoming financially literate has given me control over my finances and peace of mind. I'm now confidently working towards my long-term financial goals.",
      author: "Mark L., Small Business Owner"
    }
  }
};