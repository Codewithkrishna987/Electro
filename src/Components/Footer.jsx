import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                DoorCart
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mt-2"></div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm lg:text-base">
              Your trusted partner for fast, reliable delivery services. We
              bring convenience right to your doorstep with our premium shopping
              experience.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <NavLink
                to="#"
                className="group p-3 bg-gray-100 rounded-full hover:bg-blue-500 transition-all duration-300 transform hover:scale-110 border border-gray-200"
              >
                <FaInstagram
                  className="text-lg text-gray-600
                 group-hover:text-white"
                />
              </NavLink>
              <NavLink
                to="#"
                className="group p-3 bg-gray-100 rounded-full hover:bg-blue-500 transition-all duration-300 transform hover:scale-110 border border-gray-200"
              >
                <FaFacebook className="text-lg text-gray-600 group-hover:text-white" />
              </NavLink>
              <NavLink
                to="#"
                className="group p-3 bg-gray-100 rounded-full hover:bg-blue-500 transition-all duration-300 transform hover:scale-110 border border-gray-200"
              >
                <FaTwitter className="text-lg text-gray-600 group-hover:text-white" />
              </NavLink>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-6 relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-400"></div>
            </h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Products", "Services", "Blog"].map(
                (item) => (
                  <li key={item}>
                    <NavLink
                      to={`/${item.toLowerCase()}`}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm lg:text-base hover:translate-x-1 transform inline-block"
                    >
                      {item}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-6 relative">
              Customer Service
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-400"></div>
            </h3>
            <ul className="space-y-3">
              {[
                "Help Center",
                "Track Order",
                "Returns",
                "Privacy Policy",
                "Terms & Conditions",
              ].map((item) => (
                <li key={item}>
                  <NavLink
                    to="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm lg:text-base hover:translate-x-1 transform inline-block"
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-6 relative">
              Get In Touch
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-400"></div>
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg border border-blue-200">
                  <FaPhone className="text-sm text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-700 text-sm lg:text-base">
                    +1-212-456-7890
                  </p>
                  <p className="text-gray-500 text-xs">Mon-Fri 9AM-6PM</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg border border-blue-200">
                  <FaEnvelope className="text-sm text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-700 text-sm lg:text-base">
                    support@doorcart.com
                  </p>
                  <p className="text-gray-500 text-xs">24/7 Support</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg border border-blue-200 mt-1">
                  <FaMapMarkerAlt className="text-sm text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-700 text-sm lg:text-base">
                    123 Business Street
                  </p>
                  <p className="text-gray-500 text-xs">New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-blue-50 border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Stay Updated
              </h4>
              <p className="text-gray-600 text-sm">
                Get the latest news and exclusive offers
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-white text-gray-800 placeholder-gray-500 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex-1 md:w-64"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm text-center md:text-left">
              © 2024 DoorCart. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <NavLink
                to="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Privacy Policy
              </NavLink>
              <NavLink
                to="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Terms of Service
              </NavLink>
              <NavLink
                to="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Cookie Policy
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
