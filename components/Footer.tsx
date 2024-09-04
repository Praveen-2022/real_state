import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="w-full">
      <div className="border-2"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <!--Grid--> */}
        <div className="grid grid-cols-12 gap-8 py-14 lg:grid-cols-8">
          <div className="mb-0 col-span-full lg:col-span-3 ">
            <a
              href="/logo.png"
              className="flex justify-center lg:justify-start"
            >
              <Image
                src="/logo.png"
                width={40}
                height={40}
                alt="Divya Sshakti Realtors"
              />
            </a>
            <p className="py-8  text-gray-500 lg:max-w-xs text-center lg:text-left">
              Trusted in more than 100 countries & 5 million customers. Follow
              us on social media.
            </p>
            <div className="flex mt-4 space-x-4 justify-center lg:justify-start sm:mt-0 ">
              <div className="flex space-x-4">
                <Link href="https://www.facebook.com" passHref>
                  <div className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg transition-all cursor-pointer">
                    <FaFacebook size={24} />
                  </div>
                </Link>
                <Link href="https://www.x.com" passHref>
                  <div className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-950 hover:shadow-lg transition-all cursor-pointer">
                    <FaXTwitter size={24} />
                  </div>
                </Link>
                <Link href="https://www.instagram.com" passHref>
                  <div className="p-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 hover:shadow-lg transition-all cursor-pointer">
                    <FaInstagram size={24} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* <!--End Col--> */}
          <div className="w-full text-center lg:w-auto lg:text-left col-span-full sm:col-span-4 md:col-span-4 lg:col-span-2 ">
            <h4 className="text-lg text-gray-900 font-medium mb-7">
              Get In Touch
            </h4>
            <ul className="text-gray-600  transition-all duration-500">
              <li className="mb-6">support@pagedone.com</li>
              <li className="mb-6">+91 945 658 3256</li>
              <li>61-A, Elm street, Gujarat, India.</li>
            </ul>
          </div>
          {/* <!--End Col--> */}
          <div className="w-full text-center lg:w-auto lg:text-left col-span-full sm:order-last sm:col-span-4 md:col-span-4 lg:order-none lg:col-span-1">
            <h4 className="text-lg text-gray-900 font-medium mb-7">Products</h4>
            <ul className="text-gray-600 transition-all duration-500  ">
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Home
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className=" text-gray-600 hover:text-gray-900"
                >
                  About
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className=" text-gray-600 hover:text-gray-900"
                >
                  Pricing
                </a>
              </li>
              <li className="sm:mb-6">
                <a
                  href="javascript:;"
                  className=" text-gray-600 hover:text-gray-900"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>
          {/* <!--End Col--> */}
          <div className="w-full text-center lg:w-auto lg:text-left col-span-full sm:order-last sm:col-span-4 md:col-span-4 lg:order-none lg:col-span-1">
            <h4 className="text-lg text-gray-900 font-medium mb-7">Products</h4>
            <ul className="text-gray-600 transition-all duration-500  ">
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Home
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className=" text-gray-600 hover:text-gray-900"
                >
                  About
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className=" text-gray-600 hover:text-gray-900"
                >
                  Pricing
                </a>
              </li>
              <li className="sm:mb-6">
                <a
                  href="javascript:;"
                  className=" text-gray-600 hover:text-gray-900"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!--Grid--> */}
        <div className="py-7 border-t border-gray-200">
          <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span className="text-sm text-gray-500 ">
              ©<a href="https://pagedone.io/">pagedone</a> 2024, All rights
              reserved.
            </span>
            <ul className="flex items-center gap-9 mt-4 lg:mt-0">
              <li>
                <a href="javascript:;" className="text-sm text-gray-500">
                  Terms
                </a>
              </li>
              <li>
                <a href="javascript:;" className="text-sm text-gray-500">
                  Privacy
                </a>
              </li>
              <li>
                <a href="javascript:;" className="text-sm text-gray-500">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
