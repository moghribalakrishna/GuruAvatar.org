export interface Course {
  id: string;
  title: string;
  description: string;
  slug: string;
}

export interface CourseCategory {
  name: string;
  description: string;
  courses: Course[];
  image: string;
}

export const courseCategories: CourseCategory[] = [
  {
    name: "AI-Driven Innovation",
    image: "/images/programs-and-courses/ai-driven-innovation.webp",
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
    image: "/images/programs-and-courses/interview-preparation.webp",
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
    name: "Entrepreneurship & Startup Essentials",
    image: "/images/programs-and-courses/entrepreneurship-startup-essentials.webp",
    description: "Equip aspiring entrepreneurs with the knowledge and skills to start and run successful businesses.",
    courses: [
      { id: "es1", title: "Startup Fundamentals", description: "Learn the basics of launching and scaling a startup.", slug: "startup-fundamentals" },
      { id: "es2", title: "Business Plan Development", description: "Create effective business plans to attract investors.", slug: "business-plan-development" },
      { id: "es3", title: "Fundraising and Venture Capital", description: "Understand the process of raising funds and working with VCs.", slug: "fundraising-venture-capital" },
      { id: "es4", title: "Entrepreneurial Mindset", description: "Cultivate the mindset necessary for entrepreneurial success.", slug: "entrepreneurial-mindset" }
    ]
  },
  {
    name: "Web & Mobile Development",
    image: "/images/programs-and-courses/web-mobile-development.webp",
    description: "Build powerful, responsive applications for the modern web",
    courses: [
      { id: "wd1", title: "Full Stack Web Development", description: "Comprehensive course on both front-end and back-end development.", slug: "full-stack-web-development" },
      { id: "wd2", title: "React and React Native", description: "Build web and mobile applications using React.", slug: "react-react-native" },
      { id: "wd3", title: "Node.js and Express", description: "Create scalable server-side applications with Node.js.", slug: "nodejs-express" },
      { id: "wd4", title: "Progressive Web Apps", description: "Develop web apps with native-like capabilities.", slug: "progressive-web-apps" },
      { id: "wd5", title: "Mobile App Development (iOS and Android)", description: "Create native mobile apps for both major platforms.", slug: "mobile-app-development-ios-android" },
      { id: "wd6", title: "Cross-Platform Mobile Development", description: "Build mobile apps that work seamlessly across different platforms.", slug: "cross-platform-mobile-development" }
    ]
  },
  {
    name: "Data Science & Analytics",
    image: "/images/programs-and-courses/data-science-analytics.webp",
    description: "Master the art of extracting insights from data",
    courses: [
      { id: "ds1", title: "Data Science Fundamentals", description: "Introduction to core concepts of data science.", slug: "data-science-fundamentals" },
      { id: "ds2", title: "Machine Learning Algorithms", description: "Deep dive into various machine learning techniques.", slug: "machine-learning-algorithms" },
      { id: "ds3", title: "Big Data Technologies", description: "Explore technologies for handling and processing big data.", slug: "big-data-technologies" },
      { id: "ds4", title: "Data Visualization and Storytelling", description: "Learn to create impactful data visualizations.", slug: "data-visualization-storytelling" },
      { id: "ds5", title: "Statistical Analysis and Inference", description: "Apply statistical methods to draw insights from data.", slug: "statistical-analysis-inference" },
      { id: "ds6", title: "Data Ethics and Responsible AI", description: "Understand ethical considerations in data science and AI applications.", slug: "data-ethics-responsible-ai" }
    ]
  },
  {
    name: "Game Development",
    image: "/images/programs-and-courses/game-development.webp",
    description: "Learn to design, develop, and monetize engaging games.",
    courses: [
      { id: "gd1", title: "Game Design Fundamentals", description: "Learn core principles of game design and player engagement.", slug: "game-design-fundamentals" },
      { id: "gd2", title: "Unity Game Development", description: "Create games using the Unity engine and C# programming.", slug: "unity-game-development" },
      { id: "gd3", title: "Unreal Engine Game Development", description: "Build games with Unreal Engine and its visual scripting system.", slug: "unreal-engine-game-development" },
      { id: "gd4", title: "Mobile Game Development", description: "Design and develop games for iOS and Android platforms.", slug: "mobile-game-development" },
      { id: "gd5", title: "Game Monetization Strategies", description: "Learn effective monetization techniques for various game types.", slug: "game-monetization-strategies" },
      { id: "gd6", title: "Game Development for Social Impact", description: "Design and develop games with a focus on social impact and community engagement.", slug: "game-development-social-impact" }

    ]
  },
  {
    name: "Cloud & DevOps",
    image: "/images/programs-and-courses/cloud-devops.webp",
    description: "Master cloud technologies and DevOps practices",
    courses: [
      { id: "cd1", title: "Cloud Computing (AWS, Azure, Google Cloud)", description: "Comprehensive overview of major cloud platforms.", slug: "cloud-computing-aws-azure-google-cloud" },
      { id: "cd2", title: "DevOps and Site Reliability Engineering", description: "Learn DevOps principles and practices.", slug: "devops-site-reliability-engineering" },
      { id: "cd3", title: "Docker and Kubernetes", description: "Master containerization and orchestration technologies.", slug: "docker-kubernetes" },
      { id: "cd4", title: "Microservices Architecture", description: "Design and implement microservices-based applications.", slug: "microservices-architecture" },
      { id: "cd5", title: "Cloud Native Development", description: "Master the art of building applications designed for cloud environments.", slug: "cloud-native-development" },
      { id: "cd6", title: "Edge Computing", description: "Understand and implement edge computing solutions.", slug: "edge-computing" },
      { id: "cd7", title: "Infrastructure as Code", description: "Learn to manage and provision infrastructure using code with tools like Terraform and Ansible.", slug: "infrastructure-as-code" },
      { id: "cd8", title: "CI/CD Pipelines", description: "Implement CI/CD pipelines to automate software delivery and deployment.", slug: "ci-cd-pipelines" }

    ]
  },
  {
    name: "Core Programming and Software Engineering",
    image: "/images/programs-and-courses/core-programming-software-engineering.webp",
    description: "Master fundamental programming languages and software engineering principles.",
    courses: [
      { id: "cp1", title: "Java Programming Fundamentals", description: "Learn core Java concepts and object-oriented programming.", slug: "java-programming-fundamentals" },
      { id: "cp2", title: "Advanced C++ for Performance-Critical Applications", description: "Master C++ for developing high-performance software.", slug: "advanced-cpp-performance-critical-applications" },
      { id: "cp3", title: "Python for Scientific Computing and Data Analysis", description: "Use Python for scientific applications and data processing.", slug: "python-scientific-computing-data-analysis" },
      { id: "cp4", title: "Software Design Patterns and Architecture", description: "Understand and implement common software design patterns.", slug: "software-design-patterns-architecture" },
      { id: "cp5", title: "Version Control with Git and GitHub", description: "Master Git for effective code management and collaboration.", slug: "version-control-git-github" },
      { id: "cp6", title: "Golang Programming", description: "Learn Go programming for building efficient and reliable software.", slug: "golang-programming" },
      { id: "cp7", title: "Rust for Systems Programming", description: "Explore Rust for developing safe and concurrent system-level software.", slug: "rust-systems-programming" }
    ]
  },
  {
    name: "Database Systems and Management",
    image: "/images/programs-and-courses/database-systems-management.webp",
    description: "Learn to design, manage, and optimize various database systems.",
    courses: [
      { id: "db1", title: "Relational Database Design and SQL", description: "Master SQL and relational database concepts.", slug: "relational-database-design-sql" },
      { id: "db2", title: "NoSQL Databases", description: "Explore non-relational databases like MongoDB and Cassandra.", slug: "nosql-databases" },
      { id: "db3", title: "Database Administration and Optimization", description: "Learn to manage and optimize database performance.", slug: "database-administration-optimization" },
      { id: "db4", title: "Big Data Storage Systems", description: "Understand Hadoop, HBase, and other big data storage solutions.", slug: "big-data-storage-systems" }
    ]
  },
  {
    name: "Internet of Things (IoT)",
    image: "/images/programs-and-courses/internet-of-things.webp",
    description: "Explore the interconnected world of smart devices and systems.",
    courses: [
      { id: "iot1", title: "IoT Fundamentals", description: "Understanding the basics of IoT architecture and applications.", slug: "iot-fundamentals" },
      { id: "iot2", title: "Embedded Systems Programming", description: "Learn to program microcontrollers and embedded devices.", slug: "embedded-systems-programming" },
      { id: "iot3", title: "Sensor Networks and Data Collection", description: "Design and implement sensor networks for IoT applications.", slug: "sensor-networks-data-collection" }
    ]
  },
  {
    name: "Robotics and Automation",
    image: "/images/programs-and-courses/robotics-automation.webp",
    description: "Learn to design, build, and program robots and automated systems.",
    courses: [
      { id: "ra1", title: "Introduction to Robotics", description: "Understand the basics of robot kinematics, dynamics, and control.", slug: "introduction-to-robotics" },
      { id: "ra2", title: "Automation Systems Design", description: "Learn to design and implement industrial automation systems.", slug: "automation-systems-design" },
      { id: "ra3", title: "Computer Vision for Robotics", description: "Apply computer vision techniques in robotic applications.", slug: "computer-vision-robotics" },
      { id: "ra4", title: "Industrial Robotics Applications", description: "Explore the use of robots in various industrial settings.", slug: "industrial-robotics-applications" }
    ]
  },
  {
    name: "Blockchain Technology",
    image: "/images/programs-and-courses/blockchain-technology.webp",
    description: "Discover the potential of decentralized systems and cryptocurrencies.",
    courses: [
      { id: "bt1", title: "Blockchain Fundamentals", description: "Understand the core concepts and mechanics of blockchain technology.", slug: "blockchain-fundamentals" },
      { id: "bt2", title: "Smart Contract Development", description: "Learn to create and deploy smart contracts on blockchain platforms.", slug: "smart-contract-development" },
      { id: "bt3", title: "Decentralized Application (DApp) Development", description: "Build decentralized applications using blockchain technology.", slug: "dapp-development" },
      { id: "bt4", title: "Cryptocurrency and Financial Applications", description: "Explore the world of digital currencies and blockchain in finance.", slug: "cryptocurrency-financial-applications" }
    ]
  },
  {
    name: "Quantum Computing",
    image: "/images/programs-and-courses/quantum-computing.webp",
    description: "Explore the cutting-edge field of quantum information and computation.",
    courses: [
      { id: "qc1", title: "Introduction to Quantum Computing", description: "Understand the basics of quantum mechanics and quantum computing.", slug: "introduction-quantum-computing" },
      { id: "qc2", title: "Quantum Algorithms", description: "Learn about quantum algorithms and their applications.", slug: "quantum-algorithms" },
      { id: "qc3", title: "Quantum Cryptography", description: "Explore quantum-based methods for secure communication.", slug: "quantum-cryptography" },
      { id: "qc4", title: "Quantum Machine Learning", description: "Discover the intersection of quantum computing and machine learning.", slug: "quantum-machine-learning" }
    ]
  },
  {
    name: "Cybersecurity",
    image: "/images/programs-and-courses/cybersecurity.webp",
    description: "Protect digital assets and mitigate security risks",
    courses: [
      { id: "cs1", title: "Network Security", description: "Understand and implement network security measures.", slug: "network-security" },
      { id: "cs2", title: "Ethical Hacking and Penetration Testing", description: "Learn techniques to identify and fix security vulnerabilities.", slug: "ethical-hacking-penetration-testing" },
      { id: "cs3", title: "Digital Forensics", description: "Investigate and analyze digital evidence in cybercrime cases.", slug: "digital-forensics" },
      { id: "cs4", title: "Cloud Security", description: "Implement security measures for cloud-based systems and applications.", slug: "cloud-security" },
      { id: "cs5", title: "IoT Security", description: "Explore security challenges and solutions in IoT ecosystems.", slug: "iot-security" },
      { id: "cs6", title: "Security Compliance and Regulations", description: "Understand and implement cybersecurity compliance requirements.", slug: "security-compliance-regulations" },
      { id: "cs7", title: "Mobile Security", description: "Understand and implement security measures specific to mobile applications and devices.", slug: "mobile-security" },
      { id: "cs8", title: "Security Operations Center (SOC)", description: "Manage and monitor security incidents and alerts in a SOC.", slug: "security-operations-center" }

    ]
  },
  {
    name: "Business & Management",
    image: "/images/programs-and-courses/business-management.webp",
    description: "Develop essential skills for business success",
    courses: [
      { id: "bm1", title: "Project Management (PMP, Agile, Scrum)", description: "Master various project management methodologies.", slug: "project-management-pmp-agile-scrum" },
      { id: "bm2", title: "Business Analytics", description: "Use data to drive business decisions.", slug: "business-analytics" },
      { id: "bm3", title: "Financial Technology (FinTech) Fundamentals", description: "Explore the intersection of finance and technology.", slug: "financial-technology-fintech-fundamentals" },
      { id: "bm4", title: "Leadership and Team Management", description: "Develop leadership qualities and manage teams effectively.", slug: "leadership-team-management" },
      { id: "bm5", title: "Business Process Management", description: "Understand how to analyze and improve business processes.", slug: "business-process-management" }
    ]
  },
  {
    name: "Soft Skills & Professional Development",
    image: "/images/programs-and-courses/soft-skills-professional-development.webp",
    description: "Courses focused on improving interpersonal skills, communication, and other essential soft skills.",
    courses: [
      { id: "ss1", title: "Effective Communication Skills", description: "Learn the art of clear and impactful communication in a professional setting.", slug: "effective-communication-skills" },
      { id: "ss2", title: "Time Management and Productivity", description: "Master techniques to improve time management and productivity.", slug: "time-management-productivity" },
      { id: "ss3", title: "Conflict Resolution and Negotiation", description: "Learn strategies for resolving conflicts and negotiating effectively.", slug: "conflict-resolution-negotiation" },
      { id: "ss4", title: "Emotional Intelligence in the Workplace", description: "Develop emotional intelligence for better work relationships and performance.", slug: "emotional-intelligence-workplace" },
      { id: "ss5", title: "Remote Work and Virtual Collaboration", description: "Master the skills needed for effective remote work and virtual team collaboration.", slug: "remote-work-virtual-collaboration" },
      { id: "ss6", title: "Cross-Cultural Communication", description: "Enhance your ability to communicate effectively across different cultures.", slug: "cross-cultural-communication" }
    ]
  },
  {
    name: "Digital Literacy & IT Fundamentals",
    image: "/images/programs-and-courses/digital-literacy-it-skills.webp",
    description: "Courses aimed at improving digital literacy and foundational IT skills.",
    courses: [
      { id: "dl1", title: "Basic Computer Skills", description: "Introduction to essential computer operations and software.", slug: "basic-computer-skills" },
      { id: "dl2", title: "Cybersecurity Awareness", description: "Learn to protect yourself and your data in the digital world.", slug: "cybersecurity-awareness" },
      { id: "dl3", title: "Digital Literacy for Everyday Life", description: "Enhance your understanding of digital tools for personal and professional use.", slug: "digital-literacy-everyday-life" },
      { id: "dl4", title: "Introduction to Programming", description: "Get started with programming by learning the basics of coding.", slug: "introduction-to-programming" },
      { id: "dl5", title: "IT Support Fundamentals", description: "Develop skills for providing first-line IT support and help desk services.", slug: "it-support-fundamentals" }
    ]
  },
  {
    name: "Creative Design & Multimedia",
    image: "/images/programs-and-courses/creative-design-multimedia.webp",
    description: "Develop creative skills for design, media production, and digital art.",
    courses: [
      { id: "cdm1", title: "Graphic Design Basics", description: "Learn the fundamentals of graphic design and visual communication.", slug: "graphic-design-basics" },
      { id: "cdm2", title: "Video Editing and Production", description: "Master the skills needed to create and edit video content.", slug: "video-editing-production" },
      { id: "cdm3", title: "Digital Photography", description: "Explore the techniques and tools of digital photography.", slug: "digital-photography" },
      { id: "cdm4", title: "UI/UX Design", description: "Understand the principles of user interface and user experience design.", slug: "ui-ux-design" }
    ]
  },
  
  {
    name: "5G and Telecommunications",
    image: "/images/programs-and-courses/5g-telecommunications.webp",
    description: "Master the latest in wireless communication technologies.",
    courses: [
      { id: "5g1", title: "5G Network Architecture", description: "Understand the architecture and components of 5G networks.", slug: "5g-network-architecture" },
      { id: "5g2", title: "Wireless Communication Systems", description: "Learn about various wireless communication technologies and standards.", slug: "wireless-communication-systems" },
      { id: "5g3", title: "Network Optimization Techniques", description: "Master techniques for optimizing telecommunication networks.", slug: "network-optimization-techniques" },
      { id: "5g4", title: "Telecom Protocols and Standards", description: "Explore key protocols and standards in telecommunications.", slug: "telecom-protocols-standards" },
      { id: "5g5", title: "6G Technology: Future of Wireless", description: "Explore the potential and challenges of upcoming 6G technology.", slug: "6g-technology-future-wireless" }
    ]
  },
  {
    name: "Extended Reality (XR)",
    image: "/images/programs-and-courses/extended-reality.webp",
    description: "Create immersive experiences with AR, VR, and mixed reality technologies.",
    courses: [
      { id: "xr1", title: "AR/VR Development Fundamentals", description: "Learn the basics of developing for AR and VR platforms.", slug: "ar-vr-development-fundamentals" },
      { id: "xr2", title: "3D Modeling for XR", description: "Master 3D modeling techniques for immersive experiences.", slug: "3d-modeling-xr" },
      { id: "xr3", title: "Immersive User Experience Design", description: "Design engaging and intuitive AR/VR user experiences.", slug: "immersive-ux-design" },
      { id: "xr4", title: "XR Applications in Industry", description: "Explore practical applications of XR in various industries.", slug: "xr-industry-applications" },
      { id: "xr5", title: "Mixed Reality Development", description: "Create applications that blend digital and physical worlds.", slug: "mixed-reality-development" }
    ]
  },
  {
    name: "Green Technology and Sustainability",
    image: "/images/programs-and-courses/green-technology-sustainability.webp",
    description: "Learn about sustainable technologies and practices for a greener future.",
    courses: [
      { id: "gt1", title: "Renewable Energy Systems", description: "Understand various renewable energy technologies and their applications.", slug: "renewable-energy-systems" },
      { id: "gt2", title: "Sustainable Engineering Practices", description: "Learn to apply sustainable principles in engineering projects.", slug: "sustainable-engineering-practices" },
      { id: "gt3", title: "Green Building Technologies", description: "Explore technologies and practices for sustainable construction.", slug: "green-building-technologies" },
      { id: "gt4", title: "Environmental Impact Assessment", description: "Learn methods for assessing and mitigating environmental impacts.", slug: "environmental-impact-assessment" }
    ]
  },
  {
    name: "Marketing",
    image: "/images/programs-and-courses/marketing.webp",
    description: "Master the fundamentals and advanced techniques of marketing in the digital age.",
    courses: [
      { id: "mkt1", title: "Marketing Fundamentals", description: "Learn core marketing concepts, strategies, and principles.", slug: "marketing-fundamentals" },
      { id: "mkt2", title: "Digital Marketing", description: "Explore online marketing channels and strategies.", slug: "digital-marketing" },
      { id: "mkt3", title: "Brand Management", description: "Understand how to build and manage strong brands.", slug: "brand-management" },
      { id: "mkt4", title: "Market Research and Analysis", description: "Learn techniques for gathering and analyzing market data.", slug: "market-research-analysis" },
      { id: "mkt5", title: "Content Marketing", description: "Develop strategies for creating and distributing valuable content.", slug: "content-marketing" },
      { id: "mkt6", title: "Social Media Marketing", description: "Master marketing strategies for various social platforms.", slug: "social-media-marketing" },
      { id: "mkt7", title: "Search Engine Optimization (SEO)", description: "Learn techniques to improve website visibility in search engines.", slug: "search-engine-optimization" },
      { id: "mkt8", title: "Marketing Analytics", description: "Use data to measure and optimize marketing efforts.", slug: "marketing-analytics" },
      { id: "mkt9", title: "Marketing Automation", description: "Master tools and strategies for automating marketing processes and campaigns.", slug: "marketing-automation" },
      { id: "mkt10", title: "Influencer Marketing", description: "Learn to leverage influencers to promote brands and products.", slug: "influencer-marketing" },
      { id: "mkt11", title: "Email Marketing", description: "Master email marketing strategies and best practices.", slug: "email-marketing" },
      { id: "mkt12", title: "Marketing Strategy Development", description: "Develop comprehensive marketing strategies for businesses.", slug: "marketing-strategy-development" },
      { id: "mkt13", title: "Marketing Campaign Management", description: "Plan and execute marketing campaigns to achieve business goals.", slug: "marketing-campaign-management" },
      { id: "mkt14", title: "Marketing in the Age of AI", description: "Understand the impact of AI on marketing strategies and practices.", slug: "marketing-ai" }

    ]
  },
  {
    name: "Sales",
    image: "/images/programs-and-courses/sales.webp",
    description: "Develop essential sales skills and strategies for success in various industries.",
    courses: [
      { id: "sls1", title: "Sales Fundamentals", description: "Learn core sales concepts, techniques, and best practices.", slug: "sales-fundamentals" },
      { id: "sls2", title: "B2B Sales Strategies", description: "Master techniques for effective business-to-business sales.", slug: "b2b-sales-strategies" },
      { id: "sls3", title: "Consultative Selling", description: "Learn to build relationships and provide value through consultative sales approaches.", slug: "consultative-selling" },
      { id: "sls4", title: "Sales Management", description: "Develop skills to lead and manage high-performing sales teams.", slug: "sales-management" },
      { id: "sls5", title: "Negotiation Skills", description: "Master the art of negotiation in sales contexts.", slug: "negotiation-skills" },
      { id: "sls6", title: "Sales Analytics and Forecasting", description: "Use data to analyze sales performance and predict future trends.", slug: "sales-analytics-forecasting" },
      { id: "sls7", title: "Sales Training and Development", description: "Design and implement effective sales training programs.", slug: "sales-training-development" },
      { id: "sls8", title: "Sales Enablement", description: "Use technology and tools to enhance sales performance and productivity.", slug: "sales-enablement" },
      { id: "sls9", title: "Sales Process Optimization", description: "Streamline sales processes to improve efficiency and effectiveness.", slug: "sales-process-optimization" },
      { id: "sls10", title: "Sales Compensation and Incentive Programs", description: "Design and implement effective sales compensation and incentive programs.", slug: "sales-compensation-incentive" },
      { id: "sls11", title: "Sales Channel Management", description: "Manage and optimize sales channels to enhance distribution and market reach.", slug: "sales-channel-management" },
      { id: "sls12", title: "Sales and Marketing Alignment", description: "Align sales and marketing strategies to drive business growth.", slug: "sales-marketing-alignment" },
      { id: "sls13", title: "Sales and Customer Service Integration", description: "Integrate sales and customer service to enhance customer satisfaction and retention.", slug: "sales-customer-service-integration" },
      { id: "sls14", title: "Sales and Digital Marketing Integration", description: "Integrate sales and digital marketing strategies to drive business growth.", slug: "sales-digital-marketing-integration" },
      { id: "sls15", title: "Sales and Social Media Integration", description: "Integrate sales and social media strategies to enhance brand visibility and customer engagement.", slug: "sales-social-media-integration" },
      { id: "sls16", title: "Sales and Content Marketing Integration", description: "Integrate sales and content marketing strategies to drive business growth.", slug: "sales-content-marketing-integration" }

    ]
  },
  {
    name: "Enterprise Skills and Systems",
    image: "/images/programs-and-courses/enterprise-skills-systems.webp",
    description: "Develop practical skills and knowledge of systems used in large enterprises.",
    courses: [
      { id: "ess1", title: "Enterprise Resource Planning (ERP) Systems", description: "Learn to work with popular ERP systems used in large organizations.", slug: "erp-systems" },
      { id: "ess2", title: "Customer Service for Tech Companies", description: "Develop skills for providing excellent customer service in tech environments.", slug: "customer-service-tech" },
      { id: "ess3", title: "Software Quality Assurance and Testing", description: "Master techniques for ensuring software quality and reliability.", slug: "qa-testing" },
      { id: "ess4", title: "Technical Writing and Documentation", description: "Learn to create clear, concise technical documents and user guides.", slug: "technical-writing" },
      { id: "ess5", title: "Supply Chain Management in Digital Age", description: "Learn modern supply chain management principles and technologies.", slug: "supply-chain-management" },
      { id: "ess6", title: "Data Entry and Management", description: "Master efficient data entry techniques and data management principles.", slug: "data-entry-management" },
      { id: "ess7", title: "Compliance and Regulatory Affairs in Tech", description: "Understand key compliance issues and regulations in the tech industry.", slug: "compliance-regulatory-affairs" },
      { id: "ess8", title: "Tech Project Management", description: "Master project management techniques for tech projects.", slug: "tech-project-management" },
      { id: "ess9", title: "Tech Sales and Pre-Sales Engineering", description: "Develop skills to effectively sell and support technical products.", slug: "tech-sales-pre-sales" },
    ]
  },
  {
    name: "Emerging Tech Skills and Specializations",
    image: "/images/programs-and-courses/emerging-tech-skills.webp",
    description: "Master cutting-edge skills and specializations highly sought after in the current job market.",
    courses: [
      { id: "ets1", title: "Low-Code/No-Code Development", description: "Learn to build applications using low-code and no-code platforms.", slug: "low-code-no-code-development" },
      { id: "ets2", title: "Data Privacy and GDPR Compliance", description: "Understand data protection regulations and implementation strategies.", slug: "data-privacy-gdpr" },
      { id: "ets3", title: "API Development and Integration", description: "Learn to create and integrate APIs for seamless system connections.", slug: "api-development-integration" },
      { id: "ets4", title: "Robotic Process Automation (RPA)", description: "Automate repetitive tasks using RPA tools and techniques.", slug: "robotic-process-automation" },
      { id: "ets5", title: "Tech Sales and Pre-Sales Engineering", description: "Develop skills to effectively sell and support technical products.", slug: "tech-sales-pre-sales" },
      { id: "ets6", title: "Accessibility in Software Development", description: "Ensure software is usable by people with diverse abilities.", slug: "accessibility-software-development" },
      { id: "ets7", title: "Voice User Interface Design", description: "Learn to design and develop voice-activated interfaces and applications.", slug: "voice-user-interface-design" }
    ]
  },
  
  {
    name: "Bioinformatics",
    image: "/images/programs-and-courses/bioinformatics.webp",
    description: "Explore the intersection of biology, computer science, and data analysis.",
    courses: [
      { id: "bi1", title: "Introduction to Bioinformatics", description: "Understand the basics of bioinformatics and its applications.", slug: "introduction-to-bioinformatics" },
      { id: "bi2", title: "Genomic Data Analysis", description: "Learn techniques for analyzing and interpreting genomic data.", slug: "genomic-data-analysis" },
      { id: "bi3", title: "Computational Biology", description: "Apply computational methods to solve biological problems.", slug: "computational-biology" },
      { id: "bi4", title: "Molecular Modeling and Simulation", description: "Use computational tools to model and simulate biological molecules.", slug: "molecular-modeling-simulation" },
      { id: "bi5", title: "Bioinformatics Algorithms", description: "Study algorithms specifically designed for biological data analysis.", slug: "bioinformatics-algorithms" }
    ]
  },
  {
    name: "Financial Technology (FinTech)",
    image: "/images/programs-and-courses/fintech.webp",
    description: "Explore innovative technologies transforming the financial services industry.",
    courses: [
      { id: "ft1", title: "FinTech Fundamentals", description: "Understand the core concepts and technologies in FinTech.", slug: "fintech-fundamentals" },
      { id: "ft2", title: "Blockchain in Finance", description: "Explore blockchain applications in financial services.", slug: "blockchain-in-finance" },
      { id: "ft3", title: "Digital Banking and Mobile Payments", description: "Learn about modern banking technologies and payment systems.", slug: "digital-banking-mobile-payments" },
      { id: "ft4", title: "Algorithmic Trading", description: "Develop strategies for automated trading in financial markets.", slug: "algorithmic-trading" },
      { id: "ft5", title: "RegTech and Compliance in FinTech", description: "Understand regulatory technologies and compliance in FinTech.", slug: "regtech-compliance-fintech" }
    ]
  },
  {
    name: "Industry-Specific Tech Applications",
    image: "/images/programs-and-courses/industry-specific-tech.webp",
    description: "Learn how technology is applied in various industries.",
    courses: [
      { id: "ist1", title: "HealthTech and Medical Informatics", description: "Explore technology applications in healthcare and medicine.", slug: "healthtech-medical-informatics" },
      { id: "ist2", title: "EdTech: Technology in Education", description: "Understand how technology is transforming education and learning.", slug: "edtech-technology-education" },
      { id: "ist3", title: "AgriTech: Technology in Agriculture", description: "Learn about technological innovations in agriculture and food production.", slug: "agritech-technology-agriculture" },
      { id: "ist4", title: "LegalTech: Technology in Law", description: "Explore how technology is changing legal services and practices.", slug: "legaltech-technology-law" },
      { id: "ist5", title: "RetailTech: Technology in Retail", description: "Understand technology applications in retail and e-commerce.", slug: "retailtech-technology-retail" }
    ]
  }
];