"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to change navbar background and text color
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 w-full z-30 transition-colors duration-300",
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between p-4 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Divya Sshakti Realtors"
              width={100}
              height={100}
              className="h-12 w-auto"
            />
          </Link>
        </div>

        {/* Hamburger Button for Small Devices */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              className={clsx("h-6 w-6", isScrolled ? "text-black" : "text-white")}
            />
          </button>
        </div>

        {/* Links for Larger Screens */}
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className={clsx(
              "text-base font-semibold tracking-wider transition-colors duration-300",
              isScrolled ? "text-black" : "text-white"
            )}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={clsx(
              "text-base font-semibold tracking-wider transition-colors duration-300",
              isScrolled ? "text-black" : "text-white"
            )}
          >
            About Us
          </Link>
          <Link
            href="/properties"
            className={clsx(
              "text-base font-semibold tracking-wider transition-colors duration-300",
              isScrolled ? "text-black" : "text-white"
            )}
          >
            Properties
          </Link>
          <Link
            href="/contact"
            className={clsx(
              "text-base font-semibold tracking-wider transition-colors duration-300",
              isScrolled ? "text-black" : "text-white"
            )}
          >
            Contact Us
          </Link>
        </div>

        {/* WhatsApp Button for Large Screens */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className={clsx(
              "bg-green-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out tracking-wider",
              isScrolled ? "hover:bg-green-600" : "hover:bg-green-700"
            )}
          >
            Whatsapp <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      {/* Mobile Menu Dialog */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10 bg-black bg-opacity-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full bg-white px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image
                src="/logo.png"
                alt="Divya Sshakti Realtors"
                width={100}
                height={100}
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="mt-6">
            <div className="space-y-2">
              <Link href="/" className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                Home
              </Link>
              <Link href="/about" className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                About Us
              </Link>
              <Link href="/properties" className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                Properties
              </Link>
              <Link href="/contact" className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                Contact Us
              </Link>
            </div>
          </div>

          {/* WhatsApp Button in Mobile Menu */}
          <div className="mt-6">
            <a
              href="#"
              className="block bg-green-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-green-600"
            >
              Whatsapp
            </a>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
