import React from 'react'

const TutorSection = () => {
  return (
    <div>
       <section className="relative">
            {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-primary/10 rounded-3xl transform -skew-y-3"></div> */}
            <div className="relative z-10 flex  flex-col md:flex-row items-center justify-between gap-12 p-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">For Tutors</h2>
                <ul className="space-y-6">
                  <li className="flex items-start space-x-4">
                    {/* <UserCircle className="w-8 h-8 text-primary mt-1" /> */}
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Sign up and create your profile</h3>
                      <p className="text-gray-600">Create a compelling profile to showcase your expertise and attract students.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    {/* <Upload className="w-8 h-8 text-primary mt-1" /> */}
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Upload your course</h3>
                      <p className="text-gray-600">Add videos, resources, and quizzes to create an engaging learning experience.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    {/* <DollarSign className="w-8 h-8 text-primary mt-1" /> */}
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Earn as students enroll</h3>
                      <p className="text-gray-600">Get paid for your expertise as students enroll in your courses.</p>
                    </div>
                  </li>
                </ul>
                <button className="mt-8 px-3 py-3 rounded-lg font-semibold shadow-xl border  border-green-200 hover:bg-green-50" size="lg">Become a Tutor</button>
              </div>
              <div className="md:w-1/2">
                {/* <img src="/placeholder.svg" alt="Tutor Dashboard" className="rounded-lg shadow-2xl " width={500} height={300} /> */}
              </div>
            </div>
          </section>
    </div>
  )
}

export default TutorSection