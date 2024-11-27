import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Registration = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#001f3f] to-[#FFD700]">
      {/* Home Icon Link */}
      <Link to="/" className="absolute top-4 right-4 text-[#001f3f] hover:text-white transition duration-300">
        <FaHome className="w-10 h-10" />
      </Link>

      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm">
        {/* Fun Fact Header */}
        <h1 className="text-2xl font-bold text-center mb-4 text-[#001f3f]">
          Fun Fact! 🩺
        </h1>
        <p className="text-center text-md text-gray-600 mb-6">
        Did you know? Over 80% of prescriptions are filled at pharmacies!
        </p>

        <h2 className="text-3xl font-bold text-center mb-6 text-[#001f3f]">Register</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-lg font-semibold mb-2 text-[#001f3f]">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold mb-2 text-[#001f3f]">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-lg font-semibold mb-2 text-[#001f3f]">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#001f3f] text-white py-2 rounded hover:bg-[#FFD700] transition duration-300"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account? <a href="/login" className="text-[#001f3f] font-semibold">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;