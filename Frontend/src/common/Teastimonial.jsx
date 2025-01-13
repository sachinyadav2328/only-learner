import React from 'react'

const Teastimonial = () => {
  return (
    <section className="mt-24 bg-white rounded-3xl overflow-hidden">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="relative grid md:grid-cols-2 gap-12 items-center">
              <div className="relative z-10 space-y-6">
                {/* <div className="absolute top-0 left-0rounded-full "></div> */}
                <h2 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                  Try <span className="text-black">Mentorix</span>{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-gray-500">For Free Today</span>
                </h2>
                <p className="text-2xl text-gray-600">
                  Since we both value your{' '}
                  <span className="text-blue-600 font-semibold">business</span>,<br />
                  let's establish our{' '}
                  <span className="text-indigo-600 font-semibold">agreement</span>.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-600/25">
                    About us
                  </button>
                  {/* <button size="lg" variant="outline" className="gap-2 border-2">
                    Talk to us
                  </button> */}
                </div>
              </div>
              <div className="relative">
                {/* <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-indigo-600/20 to-purple-600/20 rounded-full blur-3xl"></div> */}
                <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                  <p className="text-xl text-gray-700 font-medium">
                    "This is the best product ever when it comes to making a course. Ten on ten recommended. I just can't wait to see what happens with this product."
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                    <span className="text-lg font-semibold not-italic">
                      Nayan Katiyara
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Teastimonial