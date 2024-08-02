export default function ForInstitutions() {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">For Institutions</h1>
        <p className="text-xl mb-8">Empower your institution with GuruAvatar's innovative educational solutions. We partner with schools, colleges, and universities to transform the learning experience.</p>
  
        <h2 className="text-2xl font-semibold mb-4">Our Offerings</h2>
        <ul className="list-disc list-inside space-y-2 mb-8">
          <li>AI-powered learning management systems</li>
          <li>Customized curriculum development</li>
          <li>Teacher training and professional development programs</li>
          <li>Student mentorship networks</li>
          <li>Mindfulness and well-being integration</li>
        </ul>
  
        <h2 className="text-2xl font-semibold mb-4">Benefits for Your Institution</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            { title: "Enhanced Student Engagement", description: "Our AI-driven personalized learning paths keep students motivated and invested in their education." },
            { title: "Improved Learning Outcomes", description: "Data-driven insights help educators identify and address individual student needs more effectively." },
            { title: "Increased Efficiency", description: "Automate administrative tasks and streamline processes to focus more on teaching and less on paperwork." },
            { title: "Future-Ready Graduates", description: "Equip your students with the skills and mindset needed to thrive in the rapidly evolving job market." }
          ].map((benefit, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
  
        <div className="bg-blue-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Ready to Transform Your Institution?</h2>
          <p className="mb-4">Schedule a demo or consultation with our team to learn how GuruAvatar can benefit your institution.</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Request Information</button>
        </div>
      </div>
    )
  }