import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-16 w-full bg-white">
      <div className="border mx-2"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-3">
          {/* Logo Section */}
          <div className="mb-6 lg:mb-0">
            <Link href="/" className="flex justify-center">
              <Image
                src="/Divya Shakti.png"
                width={150}
                height={150}
                alt="Divya Sshakti Realtors"
                priority // Logo loads with priority
              />
            </Link>
            <div className="flex mt-4 space-x-4 justify-center">
              {/* Social Media Icons */}
              <Link href="https://www.facebook.com" aria-label="Facebook">
                <div className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all cursor-pointer">
                  <FaFacebook size={20} />
                </div>
              </Link>
              <Link href="https://www.x.com" aria-label="X (Twitter)">
                <div className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-950 transition-all cursor-pointer">
                  <FaXTwitter size={20} />
                </div>
              </Link>
              <Link href="https://www.instagram.com" aria-label="Instagram">
                <div className="p-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition-all cursor-pointer">
                  <FaInstagram size={20} />
                </div>
              </Link>
            </div>
          </div>

          {/* Get In Touch Section */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-medium text-gray-900 mb-6">
              Get In Touch
            </h4>
            <ul className="text-gray-600">
              <li className="mb-4">support@pagedone.com</li>
              <li className="mb-4">+91 945 658 3256</li>
              <li>61-A, Elm street, Gujarat, India.</li>
            </ul>
          </div>

          {/* Products Section 1 */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-medium text-gray-900 mb-6">
              Quick Links
            </h4>
            <ul className="text-gray-600">
              <li className="mb-4">
                <Link
                  href="/properties"
                  className="hover:text-gray-900 block mb-4"
                >
                  Properties
                </Link>
                <Link href="/contact" className="hover:text-gray-900 block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-6 border-t border-gray-200">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center">
            <span className="text-sm text-gray-500 mb-4 lg:mb-0">
              @ <Link href="http://localhost:3000">Divya Shakti Realtors</Link>
              2024, All rights reserved.
            </span>
            <ul className="flex items-center space-x-4">
              <h1 className="text-gray-500">
                Developed and Maintained By Master_DEV__
              </h1>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
