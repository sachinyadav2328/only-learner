import React from 'react'
import NavBar from '../common/NavBar'
import HeroSection from '../common/HeroSection'
import Footer from '../common/Footer'
import Teastimonial from '../common/Teastimonial'
import TutorSection from '../common/TutorSection'
import StudentSection from '../common/StudentSection'

const LandingPage = () => {
  return (
    <div>
    <HeroSection/>
    {/* HOW ITS WORKS SECTION */}
    <section className="container mx-auto px-4 py-24 md:px-6">
    <div className="mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl  bg-clip-text ">
          Discover the Simplicity of Selling and Learning
          </h1>
          <p className="mt-4 text-xl text-gray-600">
          Whether you’re a tutor or a student, see how easy it is to get started on your journey with us.
          </p>
        </div>

        <div className='ml-20 space-y-24'>
        <TutorSection/>
        <StudentSection/>
        </div>
        <Teastimonial/>
    </section>
    </div>
  )
}

export default LandingPage