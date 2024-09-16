"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const QueryForm = () => {
  const formRef = useRef<HTMLFormElement>(null); // Using useRef for the form
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
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
          "service_mjr05ar", // Your EmailJS service ID
          "template_ajf7eyq", // Your EmailJS template ID
          formRef.current, // Form reference
          "ouygEjLnbklGCMcBv" // Your public key
        )
        .then(
          () => {
            alert("Message sent successfully!");
          },
          (error) => {
            console.error("Failed to send message:", error.text);
            alert("Failed to send message. Please try again later.");
          }
        );

      // Clear form fields after submission
      setFormData({ fullName: "", mobile: "", email: "" });
    }
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-2">
        Enquire Now
      </h1>
      <p className="text-center text-base text-gray-600 mb-8">
        Explore our premium projects today. Enquire now to discover how we can
        elevate your dream to a new height.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Map Area */}
        <div className="rounded-lg shadow-lg overflow-hidden w-full h-[300px] lg:h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3755.044614772297!2d72.761155!3d19.753259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDQ1JzExLjciTiA3MsKwNDUnNDAuMiJF!5e0!3m2!1sen!2sin!4v1724999437704!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>

        {/* Query Form */}
        <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8 space-y-6 w-full max-w-lg mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
            Contact Us
          </h2>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
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
                value={formData.mobile}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <input
                name="email"
                type="text"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                required
              />
            </div>

            <div className="flex justify-between items-center mt-6">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-semibold transition duration-300 w-full"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QueryForm;
