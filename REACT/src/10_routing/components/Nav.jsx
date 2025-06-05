import React from 'react'
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-lg">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">MyApp</h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="flex items-baseline ml-10 space-x-8">
              <NavLink
                
                to="/"
                className={(e)=> e.isActive ? "px-3 py-2 text-xl font-medium text-grey-700 transition-colors duration-200 rounded-md hover:text-blue-600 hover:bg-blue-50" : "px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 rounded-md hover:text-blue-600 hover:bg-blue-50"}
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 rounded-md hover:text-blue-600 hover:bg-blue-50"
              >
                Products
              </NavLink>
              <NavLink
                to="/service"
                className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 rounded-md hover:text-blue-600 hover:bg-blue-50"
              >
                Service
              </NavLink>
              <NavLink
                to="/about"
                className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 rounded-md hover:text-blue-600 hover:bg-blue-50"
              >
                About
              </NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav