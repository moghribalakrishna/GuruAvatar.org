export default function Approach() {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Our Approach</h1>
        <p className="text-xl mb-8">At GuruAvatar, we combine cutting-edge technology with proven educational methods to create a revolutionary learning experience.</p>
        
        <h2 className="text-2xl font-semibold mb-4">Our Core Pillars</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { title: "AI-Powered Learning", description: "Leveraging artificial intelligence to personalize and optimize the learning journey for each student." },
            { title: "Expert Mentorship", description: "Connecting students with industry professionals for guidance, inspiration, and real-world insights." },
            { title: "Mindfulness Integration", description: "Incorporating mindfulness and meditation techniques to enhance focus, retention, and overall well-being." }
          ].map((pillar, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
              <p>{pillar.description}</p>
            </div>
          ))}
        </div>
  
        <h2 className="text-2xl font-semibold mb-4">The GuruAvatar Method</h2>
        <ol className="list-decimal list-inside space-y-2 mb-8">
          <li>Personalized learning paths tailored to individual goals and learning styles</li>
          <li>Interactive, project-based curriculum that emphasizes practical skills</li>
          <li>Regular feedback and progress tracking using advanced analytics</li>
          <li>Integration of mindfulness practices to enhance learning and reduce stress</li>
          <li>Ongoing support from AI tutors and human mentors</li>
        </ol>
  
        <p className="text-lg">Experience the future of education with GuruAvatar's innovative approach to learning and personal growth.</p>
      </div>
    )
  }