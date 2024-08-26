'use client';

import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/+917510097395" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-400 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition z-50 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8"
    >
      <FaWhatsapp size={40} />
    </a>
  );
};

export default WhatsAppButton;

