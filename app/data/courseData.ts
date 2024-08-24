export interface Course {
  id: string;
  title: string;
  description: string;
  slug: string; // Add the slug property
}

export interface CourseCategory {
  name: string;
  description: string;
  courses: Course[];
}

export const courseCategories: CourseCategory[] = [
  {
    name: "AI-Driven Innovation",
    description: "Cutting-edge courses in artificial intelligence applications",
    courses: [
      { id: "ai1", title: "Prompt Engineering and AI Content Generation", description: "Learn how to engineer prompts for AI content generation.", slug: "prompt-engineering-ai-content-generation" },
      { id: "ai2", title: "AI-Assisted Software Development", description: "Explore AI tools for software development.", slug: "ai-assisted-software-development" },
      { id: "ai3", title: "Large Language Models: Applications and Fine-tuning", description: "Understand the applications and fine-tuning of large language models.", slug: "large-language-models-applications-fine-tuning" },
      { id: "ai4", title: "AI for Business Process Automation", description: "Implement AI for automating business processes.", slug: "ai-business-process-automation" },
      { id: "ai5", title: "Generative AI for Design and Creativity", description: "Use generative AI for creative design.", slug: "generative-ai-design-creativity" },
      { id: "ai6", title: "AI-Powered Data Analysis and Visualization", description: "Leverage AI for advanced data analysis and visualization.", slug: "ai-powered-data-analysis-visualization" },
      { id: "ai7", title: "Conversational AI and Chatbot Development", description: "Build intelligent chatbots and conversational interfaces.", slug: "conversational-ai-chatbot-development" },
      { id: "ai8", title: "AI in Digital Marketing and Customer Engagement", description: "Apply AI to enhance marketing strategies and customer interactions.", slug: "ai-digital-marketing-customer-engagement" },
      { id: "ai9", title: "AI for Content Moderation and Curation", description: "Use AI to manage and curate content at scale.", slug: "ai-content-moderation-curation" },
      { id: "ai10", title: "AI-Enhanced Cybersecurity", description: "Implement AI-driven security measures and threat detection.", slug: "ai-enhanced-cybersecurity" },
      { id: "ai11", title: "AI in E-commerce and Recommendation Systems", description: "Develop AI-powered recommendation engines for e-commerce.", slug: "ai-ecommerce-recommendation-systems" },
      { id: "ai12", title: "AI for Financial Analysis and Forecasting", description: "Apply AI to financial modeling and prediction.", slug: "ai-financial-analysis-forecasting" },
      { id: "ai13", title: "AI in Education and Personalized Learning", description: "Create AI-driven personalized learning experiences.", slug: "ai-education-personalized-learning" },
      { id: "ai14", title: "AI-Driven Healthcare Diagnostics", description: "Explore AI applications in medical diagnosis and healthcare.", slug: "ai-driven-healthcare-diagnostics" },
      { id: "ai15", title: "Ethical AI and Responsible AI Implementation", description: "Understand and implement ethical considerations in AI development.", slug: "ethical-ai-responsible-implementation" },
      { id: "ai16", title: "Low-Code/No-Code AI Development", description: "Build AI solutions using low-code and no-code platforms.", slug: "low-code-no-code-ai-development" }
    ]
  },
  {
    name: "Interview Preparation",
    description: "Courses designed to help freshers prepare for job interviews and excel in the hiring process.",
    courses: [
      { id: "ip1", title: "Aptitude Test Preparation", description: "Master the skills needed to ace aptitude tests during campus placements.", slug: "aptitude-test-preparation" },
      { id: "ip2", title: "Communication Skills for Interviews", description: "Enhance your verbal and non-verbal communication skills for interviews.", slug: "communication-skills-interviews" },
      { id: "ip3", title: "Group Discussion Strategies", description: "Learn effective strategies for participating in group discussions.", slug: "group-discussion-strategies" },
      { id: "ip4", title: "Resume Writing and Cover Letters", description: "Craft impactful resumes and cover letters that stand out.", slug: "resume-writing-cover-letters" },
      { id: "ip5", title: "Mock Interviews and Feedback", description: "Practice with mock interviews and receive constructive feedback.", slug: "mock-interviews-feedback" },
      { id: "ip6", title: "Personal Interview Techniques", description: "Prepare for personal interviews with common questions and best practices.", slug: "personal-interview-techniques" },
      { id: "ip7", title: "Behavioral Interview Preparation", description: "Understand and prepare for behavioral interview questions.", slug: "behavioral-interview-preparation" }
    ]
  },
  {
    name: "Data Science & Analytics",
    description: "Master the art of extracting insights from data",
    courses: [
      { id: "ds1", title: "Data Science Fundamentals", description: "Introduction to core concepts of data science.", slug: "data-science-fundamentals" },
      { id: "ds2", title: "Machine Learning Algorithms", description: "Deep dive into various machine learning techniques.", slug: "machine-learning-algorithms" },
      { id: "ds3", title: "Big Data Technologies", description: "Explore technologies for handling and processing big data.", slug: "big-data-technologies" },
      { id: "ds4", title: "Data Visualization and Storytelling", description: "Learn to create impactful data visualizations.", slug: "data-visualization-storytelling" },
      { id: "ds5", title: "Statistical Analysis and Inference", description: "Apply statistical methods to draw insights from data.", slug: "statistical-analysis-inference" }
    ]
  },
  {
    name: "Web & Mobile Development",
    description: "Build powerful, responsive applications for the modern web",
    courses: [
      { id: "wd1", title: "Full Stack Web Development", description: "Comprehensive course on both front-end and back-end development.", slug: "full-stack-web-development" },
      { id: "wd2", title: "React and React Native", description: "Build web and mobile applications using React.", slug: "react-react-native" },
      { id: "wd3", title: "Node.js and Express", description: "Create scalable server-side applications with Node.js.", slug: "nodejs-express" },
      { id: "wd4", title: "Progressive Web Apps", description: "Develop web apps with native-like capabilities.", slug: "progressive-web-apps" },
      { id: "wd5", title: "Mobile App Development (iOS and Android)", description: "Create native mobile apps for both major platforms.", slug: "mobile-app-development-ios-android" }
    ]
  },
  {
    name: "Cloud & DevOps",
    description: "Master cloud technologies and DevOps practices",
    courses: [
      { id: "cd1", title: "Cloud Computing (AWS, Azure, Google Cloud)", description: "Comprehensive overview of major cloud platforms.", slug: "cloud-computing-aws-azure-google-cloud" },
      { id: "cd2", title: "DevOps and Site Reliability Engineering", description: "Learn DevOps principles and practices.", slug: "devops-site-reliability-engineering" },
      { id: "cd3", title: "Docker and Kubernetes", description: "Master containerization and orchestration technologies.", slug: "docker-kubernetes" },
      { id: "cd4", title: "Microservices Architecture", description: "Design and implement microservices-based applications.", slug: "microservices-architecture" }
    ]
  },
  {
    name: "Cybersecurity",
    description: "Protect digital assets and mitigate security risks",
    courses: [
      { id: "cs1", title: "Network Security", description: "Understand and implement network security measures.", slug: "network-security" },
      { id: "cs2", title: "Ethical Hacking and Penetration Testing", description: "Learn techniques to identify and fix security vulnerabilities.", slug: "ethical-hacking-penetration-testing" },
      { id: "cs3", title: "Digital Forensics", description: "Investigate and analyze digital evidence in cybercrime cases.", slug: "digital-forensics" }
    ]
  },
  {
    name: "Business & Management",
    description: "Develop essential skills for business success",
    courses: [
      { id: "bm1", title: "Project Management (PMP, Agile, Scrum)", description: "Master various project management methodologies.", slug: "project-management-pmp-agile-scrum" },
      { id: "bm2", title: "Business Analytics", description: "Use data to drive business decisions.", slug: "business-analytics" },
      { id: "bm3", title: "Digital Marketing", description: "Develop and implement effective digital marketing strategies.", slug: "digital-marketing" },
      { id: "bm4", title: "Financial Technology (FinTech)", description: "Explore the intersection of finance and technology.", slug: "financial-technology-fintech" }
    ]
  },
  {
    name: "Soft Skills & Professional Development",
    description: "Courses focused on improving interpersonal skills, communication, and other essential soft skills.",
    courses: [
      { id: "ss1", title: "Effective Communication Skills", description: "Learn the art of clear and impactful communication in a professional setting.", slug: "effective-communication-skills" },
      { id: "ss2", title: "Leadership and Team Management", description: "Develop leadership qualities and manage teams effectively.", slug: "leadership-team-management" },
      { id: "ss3", title: "Time Management and Productivity", description: "Master techniques to improve time management and productivity.", slug: "time-management-productivity" },
      { id: "ss4", title: "Conflict Resolution and Negotiation", description: "Learn strategies for resolving conflicts and negotiating effectively.", slug: "conflict-resolution-negotiation" }
    ]
  },
  {
    name: "Entrepreneurship & Startup Essentials",
    description: "Equip aspiring entrepreneurs with the knowledge and skills to start and run successful businesses.",
    courses: [
      { id: "es1", title: "Startup Fundamentals", description: "Learn the basics of launching and scaling a startup.", slug: "startup-fundamentals" },
      { id: "es2", title: "Business Plan Development", description: "Create effective business plans to attract investors.", slug: "business-plan-development" },
      { id: "es3", title: "Fundraising and Venture Capital", description: "Understand the process of raising funds and working with VCs.", slug: "fundraising-venture-capital" },
      { id: "es4", title: "Entrepreneurial Mindset", description: "Cultivate the mindset necessary for entrepreneurial success.", slug: "entrepreneurial-mindset" }
    ]
  },
  {
    name: "Digital Literacy & IT Skills",
    description: "Courses aimed at improving digital literacy and foundational IT skills.",
    courses: [
      { id: "dl1", title: "Basic Computer Skills", description: "Introduction to essential computer operations and software.", slug: "basic-computer-skills" },
      { id: "dl2", title: "Cybersecurity Awareness", description: "Learn to protect yourself and your data in the digital world.", slug: "cybersecurity-awareness" },
      { id: "dl3", title: "Digital Literacy for Everyday Life", description: "Enhance your understanding of digital tools for personal and professional use.", slug: "digital-literacy-everyday-life" },
      { id: "dl4", title: "Introduction to Programming", description: "Get started with programming by learning the basics of coding.", slug: "introduction-to-programming" }
    ]
  },
  {
    name: "Creative Design & Multimedia",
    description: "Develop creative skills for design, media production, and digital art.",
    courses: [
      { id: "cdm1", title: "Graphic Design Basics", description: "Learn the fundamentals of graphic design and visual communication.", slug: "graphic-design-basics" },
      { id: "cdm2", title: "Video Editing and Production", description: "Master the skills needed to create and edit video content.", slug: "video-editing-production" },
      { id: "cdm3", title: "Digital Photography", description: "Explore the techniques and tools of digital photography.", slug: "digital-photography" },
      { id: "cdm4", title: "UI/UX Design", description: "Understand the principles of user interface and user experience design.", slug: "ui-ux-design" }
    ]
  }
];