import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center mb-4">
              <Image
                src="/logo2.png"
                alt="Gentleman's Cut Logo"
                width={80}
                height={80}
                className="mr-2"
              />
              <h3 className="text-xl font-bold text-amber-500">
                Gentleman's Cut
              </h3>
            </div>
            <p className="text-gray-400 text-sm md:text-base text-center md:text-left">
              Premium barbershop providing exceptional haircuts and grooming
              services for the modern gentleman since 1926.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link
                href="https://facebook.com"
                className="text-gray-400 hover:text-amber-500 transition-colors"
              >
                <FaFacebook size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                className="text-gray-400 hover:text-amber-500 transition-colors"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-gray-400 hover:text-amber-500 transition-colors"
              >
                <FaTwitter size={20} />
              </Link>
              <Link
                href="https://youtube.com"
                className="text-gray-400 hover:text-amber-500 transition-colors"
              >
                <FaYoutube size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-amber-500">
              Quick Links
            </h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#gallery"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-amber-500">
              Contact Us
            </h3>
            <address className="not-italic text-gray-400 space-y-2 text-center md:text-left">
              <p>123 Main Street</p>
              <p>New York, NY 10001</p>
              <p className="pt-2">
                <a
                  href="tel:+12125551234"
                  className="hover:text-white transition-colors"
                >
                  (212) 555-1234
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@gentlemanscut.com"
                  className="hover:text-white transition-colors"
                >
                  info@gentlemanscut.com
                </a>
              </p>
            </address>
          </div>

          {/* Hours & Newsletter */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-amber-500">Hours</h3>
            <ul className="text-gray-400 space-y-2 text-center md:text-left mb-6">
              <li>Monday - Friday: 9am - 8pm</li>
              <li>Saturday: 10am - 6pm</li>
              <li>Sunday: 11am - 5pm</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2 text-amber-500">
              Newsletter
            </h3>
            <p className="text-gray-400 text-sm mb-2 text-center md:text-left">
              Subscribe for special offers
            </p>
            <div className="flex w-full max-w-xs">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 border-gray-700 rounded-r-none focus:ring-amber-500"
              />
              <Button className="bg-amber-500 hover:bg-amber-600 rounded-l-none text-gray-900">
                Join
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2025 Gentleman's Cut. All rights reserved.
          </p>
          <div className="text-center text-sm text-gray-400">
            Designed & developed by{" "}
            <span className="font-semibold text-white">Szymon Wlach</span>
          </div>
          <div className="flex mt-4 md:mt-0 space-x-4 text-sm text-gray-500">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="hover:text-white transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
