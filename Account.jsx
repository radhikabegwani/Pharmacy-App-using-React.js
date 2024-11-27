// Account.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'; // FontAwesome Home icon
import { FaUser } from 'react-icons/fa'; // User icon for user details

const Account = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    age: '',
    gender: '',
    healthStatus: '',
    medicalConditions: '',
    prescriptions: '',
    skinType: '',
    hairType: '', // Optional field
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [isDetailsSaved, setIsDetailsSaved] = useState(false); // New state to track if details are saved

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDetailsSaved(true); // Set details as saved
    setIsEditing(false); // Exit editing mode
  };

  return (
    <div className="container mx-auto p-5">
      {/* Home Icon */}
      <div className="flex justify-end mb-4">
        <Link to="/">
          <FaHome className="text-4xl hover:text-white transition duration-300 hover:scale-105" /> {/* Black Home icon */}
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-6 text-center text-white">Manage Your Account</h1>

      <div className="flex flex-col ">
        {!isDetailsSaved || isEditing ? (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-gradient-to-br from-white to-gray-300 shadow-md rounded p-6"
          >
            {/* Form Fields */}
            <div className="flex items-center space-x-2">
              <FaUser className="text-2xl text-black" />
              <span className="text-xl text-black">{userDetails.name || 'User'}</span>
            </div>
            {/* Name Field */}
            <div>
              <label className="block text-lg font-medium mb-2 text-black" htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={userDetails.name}
                onChange={handleChange}
                className="p-2 border border-gray-600 rounded w-full bg-gray-200 text-black"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Age Field */}
            <div>
              <label className="block text-lg font-medium mb-2 text-black" htmlFor="age">Age:</label>
              <input
                type="number"
                id="age"
                name="age"
                value={userDetails.age}
                onChange={handleChange}
                className="p-2 border border-gray-600 rounded w-full bg-gray-200 text-black"
                placeholder="Enter your age"
                required
              />
            </div>

            {/* Gender Field */}
            <div>
              <label className="block text-lg font-medium mb-2 text-black" htmlFor="gender">Gender:</label>
              <select
                id="gender"
                name="gender"
                value={userDetails.gender}
                onChange={handleChange}
                className="p-2 border border-gray-600 rounded w-full bg-gray-200 text-black"
                required
              >
                <option value="">Select your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Health Status Field */}
            <div>
              <label className="block text-lg font-medium mb-2 text-black" htmlFor="healthStatus">Health Status:</label>
              <input
                type="text"
                id="healthStatus"
                name="healthStatus"
                value={userDetails.healthStatus}
                onChange={handleChange}
                className="p-2 border border-gray-600 rounded w-full bg-gray-200 text-black"
                placeholder="Enter your health status"
              />
            </div>

            {/* Medical Conditions Field */}
            <div>
              <label className="block text-lg font-medium mb-2 text-black" htmlFor="medicalConditions">Medical Conditions:</label>
              <textarea
                id="medicalConditions"
                name="medicalConditions"
                value={userDetails.medicalConditions}
                onChange={handleChange}
                className="p-2 border border-gray-600 rounded w-full bg-gray-200 text-black"
                placeholder="Enter any medical conditions"
                rows="3"
              />
            </div>

            {/* Prescriptions Field */}
            <div>
              <label className="block text-lg font-medium mb-2 text-black" htmlFor="prescriptions">Prescriptions:</label>
              <textarea
                id="prescriptions"
                name="prescriptions"
                value={userDetails.prescriptions}
                onChange={handleChange}
                className="p-2 border border-gray-600 rounded w-full bg-gray-200 text-black"
                placeholder="Enter your prescriptions"
                rows="3"
              />
            </div>

            {/* Skin Type Field */}
            <div>
              <label className="block text-lg font-medium mb-2 text-black" htmlFor="skinType">Skin Type:</label>
              <input
                type="text"
                id="skinType"
                name="skinType"
                value={userDetails.skinType}
                onChange={handleChange}
                className="p-2 border border-gray-600 rounded w-full bg-gray-200 text-black"
                placeholder="Enter your skin type"
              />
            </div>

            {/* Hair Type Field (Optional) */}
            <div>
              <label className="block text-lg font-medium mb-2 text-black" htmlFor="hairType">Hair Type (Optional):</label>
              <input
                type="text"
                id="hairType"
                name="hairType"
                value={userDetails.hairType}
                onChange={handleChange}
                className="p-2 border border-gray-600 rounded w-full bg-gray-200 text-black"
                placeholder="Enter your hair type (if you want to)"
              />
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-teal-400 to-teal-600 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600 hover:scale-105 transition duration-300 w-full"
            >
              Save Changes
            </button>
          </form>
        ) : (
          <div className="bg-gradient-to-br from-white to-gray-300 shadow-md rounded p-6 text-black text-lg space-y-4">
            {/* Display User Details */}
            <div className="flex items-center space-x-2">
              <FaUser className="text-2xl text-black" />
              <span className="text-xl">{userDetails.name || 'User'}</span>
            </div>
            <div>
              <strong>Age:</strong> {userDetails.age || 'N/A'}
            </div>
            <div>
              <strong>Gender:</strong> {userDetails.gender || 'N/A'}
            </div>
            <div>
              <strong>Health Status:</strong> {userDetails.healthStatus || 'N/A'}
            </div>
            <div>
              <strong>Medical Conditions:</strong> {userDetails.medicalConditions || 'N/A'}
            </div>
            <div>
              <strong>Prescriptions:</strong> {userDetails.prescriptions || 'N/A'}
            </div>
            <div>
              <strong>Skin Type:</strong> {userDetails.skinType || 'N/A'}
            </div>
            <div>
              <strong>Hair Type:</strong> {userDetails.hairType || 'N/A'}
            </div>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-gradient-to-r from-red-400 to-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition duration-300"
            >
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;