import React from 'react'

const StudentSection = () => {
  return (
    <div> <section className="relative">
    {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-primary/10 rounded-3xl transform skew-y-3"></div> */}
    <div className="relative z-10 flex flex-col md:flex-row-reverse items-center justify-between gap-12 p-8">
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-6">For Students</h2>
        <ul className="space-y-6">
          <li className="flex items-start space-x-4">
            {/* <Search className="w-8 h-8 text-primary mt-1" /> */}
            <div>
              <h3 className="font-semibold text-lg mb-2">Browse courses</h3>
              <p className="text-gray-600">Explore courses by category or use our search feature to find exactly what you need.</p>
            </div>
          </li>
          <li className="flex items-start space-x-4">
            {/* <Laptop className="w-8 h-8 text-primary mt-1" /> */}
            <div>
              <h3 className="font-semibold text-lg mb-2">Enroll and start learning</h3>
              <p className="text-gray-600">Begin your learning journey immediately after enrolling in a course.</p>
            </div>
          </li>
          <li className="flex items-start space-x-4">
            {/* <Award className="w-8 h-8 text-primary mt-1" /> */}
            <div>
              <h3 className="font-semibold text-lg mb-2">Earn certifications</h3>
              <p className="text-gray-600">Track your progress and earn certifications to showcase your new skills.</p>
            </div>
          </li>
        </ul>
        <button className="mt-8 px-3 py-3 rounded-lg font-semibold shadow-xl border  border-green-200 hover:bg-green-50" size="lg">Start Learning</button>
      </div>
      <div className="md:w-1/2">
        {/* <img src="/placeholder.svg" alt="Student Learning" className="rounded-lg shadow-2xl" width={500} height={300} /> */}
      </div>
    </div>
  </section></div>
  )
}

export default StudentSection