"use client";
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const PopupForm = () => {
  const formRef = useRef<HTMLFormElement>(null); // Using useRef for the form
  const [isOpen, setIsOpen] = useState(false);
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

  // EmailJS submit function using the official sendForm method
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          'service_mjr05ar',           // Your EmailJS service ID
          'template_ajf7eyq',           // Your EmailJS template ID
          formRef.current,              // Form reference
          'ouygEjLnbklGCMcBv'           // Your public key
        )
        .then(
          () => {
            alert('Message sent successfully!');
          },
          (error) => {
            console.error('Failed to send message:', error.text);
            alert('Failed to send message. Please try again later.');
          }
        );

      // Clear form fields after submission
      setFormData({ fullName: '', mobile: '', email: '' });
      setIsOpen(false); // Close the form after submission
    }
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
<div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
  <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-2xl p-8 w-full max-w-lg mx-4 sm:mx-auto space-y-6">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold text-white">Contact Us</h2>
      <button
        onClick={handleClose}
        className="text-white hover:text-red-300 transition duration-150"
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
    <div className="text-white">Welcome to Divya Shakti Realtors</div>
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-white">Full Name</label>
        <input
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-2 bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-md shadow-inner focus:ring-2 focus:ring-white focus:outline-none"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-white">Mobile</label>
        <input
          name="mobile"
          type="text"
          value={formData.mobile}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-2 bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-md shadow-inner focus:ring-2 focus:ring-white focus:outline-none"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-white">Email</label>
        <input
          name="email"
          type="text"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-2 bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-md shadow-inner focus:ring-2 focus:ring-white focus:outline-none"
          required
        />
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-semibold transition duration-300"
        >
          Submit
        </button>
        <button
          onClick={handleClose}
          className="text-white hover:text-red-300 font-medium transition duration-300"
        >
          Close
        </button>
      </div>
    </form>
  </div>
</div>
    )
  );
};

export default PopupForm;
