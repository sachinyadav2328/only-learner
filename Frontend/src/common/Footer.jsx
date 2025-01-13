import React from 'react'

const Footer = () => {
  return (
    <div>
         <footer className="bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>Courses</li>
              <li>About Us</li>
              <li>Instructors</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                Contact us
              </li>

            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300"></a>
              <a href="#" className="hover:text-gray-300"></a>
              <a href="#" className="hover:text-gray-300"></a>
              <a href="#" className="hover:text-gray-300"></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Course Seller. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer