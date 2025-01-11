import React from 'react'

const HeroSection = () => {
  return (
    <div>
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="flex flex-col items-center text-center space-y-8">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-slate-900 max-w-3xl mx-auto">
                Create, Upload, <br />And Sell Your Courses.
              </h1>
              <p className="text-gray-500 md:text-xl max-w-[600px] mx-auto">
                Empower Learning, Share Knowledge, and Earn with Ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 min-[400px]:gap-6">
                <button size="lg" className="text-base bg-black hover:bg-black/90 text-white px-8 py-2 rounded-lg">
                  Teach on Ol
                </button>
                <button size="lg"  className="text-base px-8 py-2 bg-gray-200 rounded-lg">
               Explore
                </button>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default HeroSection