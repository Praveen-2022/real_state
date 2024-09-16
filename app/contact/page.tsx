"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import QueryForm from "@/components/QueryForm";

const Contact: React.FC = () => {
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

        <QueryForm />
      </div>
    </section>
  );
};

export default Contact;
