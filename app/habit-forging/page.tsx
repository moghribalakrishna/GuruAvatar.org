import Link from 'next/link'

const habits = [
    {
      title: "Goal Setting & Self-Discipline",
      description: "Learn to set SMART goals and develop the self-discipline to achieve them. This foundational habit empowers students to take control of their academic and personal growth.",
      techApproach: "AI-driven goal-setting app with progress tracking, personalized motivation, and adaptive milestone suggestions."
    },
    {
      title: "Mindfulness and Reflection",
      description: "Cultivate awareness of thoughts and emotions, reducing stress and enhancing focus. Regular reflection promotes deeper learning and personal insight.",
      techApproach: "VR-enhanced meditation sessions and AI-guided reflection prompts tailored to individual learning experiences."
    },
    {
      title: "Time Management",
      description: "Master the art of prioritizing tasks, avoiding procrastination, and maximizing productivity. Effective time management is crucial for balancing academics, extracurriculars, and personal life.",
      techApproach: "Smart scheduling system using machine learning to optimize study times and break intervals based on personal productivity patterns."
    },
    {
      title: "Journaling & Reading",
      description: "Develop a habit of regular journaling to process thoughts and experiences. Cultivate a love for reading to expand knowledge and improve language skills.",
      techApproach: "AI-powered journaling app with sentiment analysis and personalized book recommendations based on learning goals and interests."
    },
    {
      title: "Health (Mental & Physical)",
      description: "Prioritize both mental and physical well-being through regular exercise, balanced nutrition, and stress management techniques. A healthy body and mind are essential for optimal learning and performance.",
      techApproach: "Holistic health tracker integrating wearable data, mood logging, and AI-generated wellness plans tailored to academic schedules."
    },
    {
      title: "Effective Communication",
      description: "Hone verbal, written, and digital communication skills. The ability to articulate ideas clearly and listen actively is vital for academic success and future career prospects.",
      techApproach: "AR-powered public speaking simulator and AI writing assistant for developing clear, impactful communication across various mediums."
    },
    {
      title: "Teamwork & Emotional Intelligence",
      description: "Learn to collaborate effectively in diverse groups and develop empathy, self-awareness, and interpersonal skills. These abilities are crucial for success in both academic projects and future workplaces.",
      techApproach: "Virtual team-building exercises with AI-driven feedback on collaboration skills and emotional intelligence development modules."
    },
    {
      title: "Critical Thinking",
      description: "Cultivate the ability to analyze information, question assumptions, and make reasoned judgments. Critical thinking is essential for academic excellence and navigating real-world challenges.",
      techApproach: "Interactive scenario-based learning modules using AI to present complex problems and guide students through critical analysis processes."
    },
    {
      title: "Coaching & Mentorship",
      description: "Develop the habit of seeking guidance from mentors and learning to coach peers. This two-way process accelerates personal growth and deepens understanding of complex topics.",
      techApproach: "AI-facilitated mentor matching platform and virtual coaching simulations to practice mentorship skills."
    },
    {
      title: "Financial Literacy",
      description: "Build a foundation of financial knowledge and responsible money management habits. Understanding budgeting, saving, and investing prepares students for financial independence and success.",
      techApproach: "Gamified financial education app with personalized challenges and real-world simulations to practice financial decision-making."
    }
  ];

export default function HabitForgingPage() {
  return (
    <div className="bg-gradient-to-b from-indigo-900 to-blue-700 min-h-screen text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Habit Forging: Building Success One Habit at a Time</h1>
        <p className="text-xl mb-12 text-blue-200 text-center">
          At GuruAvatar, we believe that success is built through consistent, positive habits. Our Habit Forging approach uses cutting-edge technology to help you develop and maintain these crucial behaviors.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {habits.map((habit, index) => (
            <div key={index} className="bg-white text-indigo-900 p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">{habit.title}</h3>
              <p className="text-gray-700 mb-4">{habit.description}</p>
              <h4 className="font-semibold mb-2">How Technology Helps:</h4>
              <p className="text-gray-700">{habit.techApproach}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/" className="bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-orange-600 transition duration-300 inline-block">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}