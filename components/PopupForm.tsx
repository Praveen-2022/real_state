"use client";
import React, { useState, useEffect } from 'react';

const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false); // Initially, the form is not open
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // WhatsApp URL with message
  const handleSubmit = () => {
    const { fullName, mobile, email } = formData;
    const message = `Full Name: ${fullName}\nMobile: ${mobile}\nEmail: ${email || 'N/A'}`;
    const whatsappUrl = `https://wa.me/<YOUR_WHATSAPP_NUMBER>?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Close the form
  const handleClose = () => {
    setIsOpen(false);
  };

  // Show popup form after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000); // 2000 milliseconds = 2 seconds

    return () => clearTimeout(timer); // Clean up the timeout if the component is unmounted
  }, []);

  return (
    isOpen && (
      <div className="z-11 fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg mx-4 sm:mx-auto space-y-6 transform transition-transform duration-500 ease-in-out scale-100">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600 transition duration-150"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div>Welcome to Divya SShakti Realtors</div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              name="fullName"
              type="text"
              placeholder=""
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mobile
            </label>
            <input
              name="mobile"
              type="text"
              placeholder=""
              value={formData.mobile}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email (optional)
            </label>
            <input
              name="email"
              type="email"
              placeholder=""
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              onClick={handleSubmit}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-semibold transition duration-300"
            >
              Submit
            </button>
            <button
              onClick={handleClose}
              className="text-gray-500 hover:text-gray-700 font-medium transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default PopupForm;
