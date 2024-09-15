import { PopoverGroup } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

const Navbar: React.FC = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/properties", label: "Properties" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="bg-white sticky  top-0 z-50 shadow-md">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        {/* Logo */}
        <Link href="/" className="flex lg:flex-1">
          <span className="sr-only">Your Company</span>
          <Image
            src="/Navlogo.png"
            alt="Logo"
            width={500}
            height={500}
            className="h-8 md:h-11 w-auto"
          />
        </Link>

        {/* Mobile Menu for small screens */}
        <div className="lg:hidden">
          <MobileMenu />
        </div>

        {/* Navigation Links for larger screens */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {link.label}
            </Link>
          ))}
        </PopoverGroup>

        {/* WhatsApp button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/login"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            WhatsApp <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
