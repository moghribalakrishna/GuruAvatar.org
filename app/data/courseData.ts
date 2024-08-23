export interface Course {
  id: string;
  title: string;
  description: string;
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
      { id: "ai1", title: "Prompt Engineering and AI Content Generation", description: "Learn how to engineer prompts for AI content generation." },
      { id: "ai2", title: "AI-Assisted Software Development", description: "Explore AI tools for software development." },
      { id: "ai3", title: "Large Language Models: Applications and Fine-tuning", description: "Understand the applications and fine-tuning of large language models." },
      { id: "ai4", title: "AI for Business Process Automation", description: "Implement AI for automating business processes." },
      { id: "ai5", title: "Generative AI for Design and Creativity", description: "Use generative AI for creative design." },
      { id: "ai6", title: "AI-Powered Data Analysis and Visualization", description: "Leverage AI for advanced data analysis and visualization." },
      { id: "ai7", title: "Conversational AI and Chatbot Development", description: "Build intelligent chatbots and conversational interfaces." },
      { id: "ai8", title: "AI in Digital Marketing and Customer Engagement", description: "Apply AI to enhance marketing strategies and customer interactions." },
      { id: "ai9", title: "AI for Content Moderation and Curation", description: "Use AI to manage and curate content at scale." },
      { id: "ai10", title: "AI-Enhanced Cybersecurity", description: "Implement AI-driven security measures and threat detection." },
      { id: "ai11", title: "AI in E-commerce and Recommendation Systems", description: "Develop AI-powered recommendation engines for e-commerce." },
      { id: "ai12", title: "AI for Financial Analysis and Forecasting", description: "Apply AI to financial modeling and prediction." },
      { id: "ai13", title: "AI in Education and Personalized Learning", description: "Create AI-driven personalized learning experiences." },
      { id: "ai14", title: "AI-Driven Healthcare Diagnostics", description: "Explore AI applications in medical diagnosis and healthcare." },
      { id: "ai15", title: "Ethical AI and Responsible AI Implementation", description: "Understand and implement ethical considerations in AI development." },
      { id: "ai16", title: "Low-Code/No-Code AI Development", description: "Build AI solutions using low-code and no-code platforms." }
    ]
  },
  {
    name: "Interview Preparation",
    description: "Courses designed to help freshers prepare for job interviews and excel in the hiring process.",
    courses: [
      { id: "ip1", title: "Aptitude Test Preparation", description: "Master the skills needed to ace aptitude tests during campus placements." },
      { id: "ip2", title: "Communication Skills for Interviews", description: "Enhance your verbal and non-verbal communication skills for interviews." },
      { id: "ip3", title: "Group Discussion Strategies", description: "Learn effective strategies for participating in group discussions." },
      { id: "ip4", title: "Resume Writing and Cover Letters", description: "Craft impactful resumes and cover letters that stand out." },
      { id: "ip5", title: "Mock Interviews and Feedback", description: "Practice with mock interviews and receive constructive feedback." },
      { id: "ip6", title: "Personal Interview Techniques", description: "Prepare for personal interviews with common questions and best practices." },
      { id: "ip7", title: "Behavioral Interview Preparation", description: "Understand and prepare for behavioral interview questions." }
    ]
  },
  {
    name: "Data Science & Analytics",
    description: "Master the art of extracting insights from data",
    courses: [
      { id: "ds1", title: "Data Science Fundamentals", description: "Introduction to core concepts of data science." },
      { id: "ds2", title: "Machine Learning Algorithms", description: "Deep dive into various machine learning techniques." },
      { id: "ds3", title: "Big Data Technologies", description: "Explore technologies for handling and processing big data." },
      { id: "ds4", title: "Data Visualization and Storytelling", description: "Learn to create impactful data visualizations." },
      { id: "ds5", title: "Statistical Analysis and Inference", description: "Apply statistical methods to draw insights from data." }
    ]
  },
  {
    name: "Web & Mobile Development",
    description: "Build powerful, responsive applications for the modern web",
    courses: [
      { id: "wd1", title: "Full Stack Web Development", description: "Comprehensive course on both front-end and back-end development." },
      { id: "wd2", title: "React and React Native", description: "Build web and mobile applications using React." },
      { id: "wd3", title: "Node.js and Express", description: "Create scalable server-side applications with Node.js." },
      { id: "wd4", title: "Progressive Web Apps", description: "Develop web apps with native-like capabilities." },
      { id: "wd5", title: "Mobile App Development (iOS and Android)", description: "Create native mobile apps for both major platforms." }
    ]
  },
  {
    name: "Cloud & DevOps",
    description: "Master cloud technologies and DevOps practices",
    courses: [
      { id: "cd1", title: "Cloud Computing (AWS, Azure, Google Cloud)", description: "Comprehensive overview of major cloud platforms." },
      { id: "cd2", title: "DevOps and Site Reliability Engineering", description: "Learn DevOps principles and practices." },
      { id: "cd3", title: "Docker and Kubernetes", description: "Master containerization and orchestration technologies." },
      { id: "cd4", title: "Microservices Architecture", description: "Design and implement microservices-based applications." }
    ]
  },
  {
    name: "Cybersecurity",
    description: "Protect digital assets and mitigate security risks",
    courses: [
      { id: "cs1", title: "Network Security", description: "Understand and implement network security measures." },
      { id: "cs2", title: "Ethical Hacking and Penetration Testing", description: "Learn techniques to identify and fix security vulnerabilities." },
      { id: "cs3", title: "Digital Forensics", description: "Investigate and analyze digital evidence in cybercrime cases." }
    ]
  },
  {
    name: "Business & Management",
    description: "Develop essential skills for business success",
    courses: [
      { id: "bm1", title: "Project Management (PMP, Agile, Scrum)", description: "Master various project management methodologies." },
      { id: "bm2", title: "Business Analytics", description: "Use data to drive business decisions." },
      { id: "bm3", title: "Digital Marketing", description: "Develop and implement effective digital marketing strategies." },
      { id: "bm4", title: "Financial Technology (FinTech)", description: "Explore the intersection of finance and technology." }
    ]
  },
  {
    name: "Soft Skills & Professional Development",
    description: "Courses focused on improving interpersonal skills, communication, and other essential soft skills.",
    courses: [
      { id: "ss1", title: "Effective Communication Skills", description: "Learn the art of clear and impactful communication in a professional setting." },
      { id: "ss2", title: "Leadership and Team Management", description: "Develop leadership qualities and manage teams effectively." },
      { id: "ss3", title: "Time Management and Productivity", description: "Master techniques to improve time management and productivity." },
      { id: "ss4", title: "Conflict Resolution and Negotiation", description: "Learn strategies for resolving conflicts and negotiating effectively." }
    ]
  },
  {
    name: "Entrepreneurship & Startup Essentials",
    description: "Equip aspiring entrepreneurs with the knowledge and skills to start and run successful businesses.",
    courses: [
      { id: "es1", title: "Startup Fundamentals", description: "Learn the basics of launching and scaling a startup." },
      { id: "es2", title: "Business Plan Development", description: "Create effective business plans to attract investors." },
      { id: "es3", title: "Fundraising and Venture Capital", description: "Understand the process of raising funds and working with VCs." },
      { id: "es4", title: "Entrepreneurial Mindset", description: "Cultivate the mindset necessary for entrepreneurial success." }
    ]
  },
  {
    name: "Digital Literacy & IT Skills",
    description: "Courses aimed at improving digital literacy and foundational IT skills.",
    courses: [
      { id: "dl1", title: "Basic Computer Skills", description: "Introduction to essential computer operations and software." },
      { id: "dl2", title: "Cybersecurity Awareness", description: "Learn to protect yourself and your data in the digital world." },
      { id: "dl3", title: "Digital Literacy for Everyday Life", description: "Enhance your understanding of digital tools for personal and professional use." },
      { id: "dl4", title: "Introduction to Programming", description: "Get started with programming by learning the basics of coding." }
    ]
  },
  {
    name: "Creative Design & Multimedia",
    description: "Develop creative skills for design, media production, and digital art.",
    courses: [
      { id: "cdm1", title: "Graphic Design Basics", description: "Learn the fundamentals of graphic design and visual communication." },
      { id: "cdm2", title: "Video Editing and Production", description: "Master the skills needed to create and edit video content." },
      { id: "cdm3", title: "Digital Photography", description: "Explore the techniques and tools of digital photography." },
      { id: "cdm4", title: "UI/UX Design", description: "Understand the principles of user interface and user experience design." }
    ]
  }
];