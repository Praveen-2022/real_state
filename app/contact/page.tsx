"use client";

import Image from "next/image";
import React, { useState, useCallback } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    query: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { id, value } = e.target;
      setFormData((prev) => ({ ...prev, [id]: value }));
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);

      const { name, mobile, query } = formData;
      const message = `Name: ${name}%0AMobile No: ${mobile}%0AQuery: ${query}`;
      const whatsappUrl = `https://wa.me/+917510097395?text=${message}`;

      window.open(whatsappUrl, "_blank");

      setFormData({ name: "", mobile: "", query: "" });

      setTimeout(() => setIsSubmitting(false), 1000);
    },
    [formData]
  );

  return (
    <section className="bg-gray-100">
      <div className="w-full">
        <Image
          src="/header/05.jpg"
          alt="Contact"
          width={2000}
          height={2000}
          className="object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Visit Our Location
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="px-6 py-4">
            <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
            <p className="mt-1 text-gray-600">
              123 Main St, San Francisco, CA 94105
            </p>
          </div>
          <div className="border-t border-gray-200 px-6 py-4">
            <h3 className="text-lg font-medium text-gray-900">Hours</h3>
            <p className="mt-1 text-gray-600">Monday - Friday: 9am - 5pm</p>
            <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
            <p className="mt-1 text-gray-600">Sunday: Closed</p>
          </div>
          <div className="border-t border-gray-200 px-6 py-4">
            <h3 className="text-lg font-medium text-gray-900">Contact</h3>
            <p className="mt-1 text-gray-600">Email: info@example.com</p>
            <p className="mt-1 text-gray-600">Phone: +1 23494 34993</p>
          </div>
        </div>

        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3755.044614772297!2d72.761155!3d19.753259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDQ1JzExLjciTiA3MsKwNDUnNDAuMiJF!5e0!3m2!1sen!2sin!4v1724999437704!5m2!1sen!2sin"
                width="600"
                height="450"
                className=""
                loading="lazy"
              ></iframe>
            </div>

            <div>
              <form
                onSubmit={handleSubmit}
                className="max-w-lg mx-auto p-6 bg-white shadow-md rounded"
              >
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="mobile"
                  >
                    Mobile No.
                  </label>
                  <input
                    type="text"
                    id="mobile"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="query"
                  >
                    Query
                  </label>
                  <textarea
                    id="query"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={formData.query}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
