import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-[-1px]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      {/* Curved top using SVG */}
      <div
        className="absolute top-0 left-0 w-full overflow-hidden"
        style={{ height: "80px", transform: "translateY(-99.5%)" }}
        aria-hidden="true"
      >
        <svg
          className="absolute bottom-0 w-full h-full block"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
          <path d="M0,80 C360,0 1080,0 1440,80 V80 H0 V0 Z" fill="#54E0FC" />
        </svg>
      </div>

      <div className="bg-[#54E0FC] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-800">
            {/* Address Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <address className="not-italic space-y-3">
                <p className="flex items-start text-gray-800">
                  <FaMapMarkerAlt className="mr-2 mt-1 flex-shrink-0" />
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </p>
                <p className="flex items-center text-gray-800">
                  <FaPhone className="mr-2 flex-shrink-0" />
                  <span>Tel : {" "}
                    <a
                      href="tel:+9239341037"
                      className="hover:text-blue-800 transition-colors underline"
                      aria-label="Call us at +92 393 410 37"
                    >
                      +92 393 410 37
                    </a>
                  </span>
                </p>
                <p className="flex items-center text-gray-800">
                  <FaEnvelope className="mr-2 flex-shrink-0" />
                  <span>Email : {" "}
                    <a
                      href="mailto:info@onlearn.com"
                      className="hover:text-blue-800 transition-colors underline"
                      aria-label="Email us at info@onlearn.com"
                    >
                      info@onlearn.com
                    </a>
                  </span>
                </p>
              </address>
            </div>

            {/* Social Networks */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
              <ul className="flex flex-col space-y-3 list-none p-0">
                {[
                  { icon: <FaFacebookF />, name: "Facebook", url: "https://facebook.com/onlearn" },
                  { icon: <FaInstagram />, name: "Instagram", url: "https://instagram.com/onlearn" },
                  { icon: <FaLinkedinIn />, name: "LinkedIn", url: "https://linkedin.com/company/onlearn" }
                ].map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      className="flex items-center text-gray-800 hover:text-blue-800 transition-colors group"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <span className="mr-2 text-gray-800 group-hover:text-blue-800 transition-colors">
                        {social.icon}
                      </span>
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <nav aria-label="Footer Navigation">
                <ul className="flex flex-col space-y-3 list-none p-0">
                  {[
                    { name: "Courses", url: "/courses" },
                    { name: "Learning Packs", url: "/packs" },
                    { name: "About Us", url: "/about" },
                    { name: "Contact", url: "/contact" },
                    { name: "Privacy Policy", url: "/privacy" }
                  ].map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.url}
                        className="text-gray-800 hover:text-blue-800 transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-800 mb-4">Subscribe to receive updates about new courses and learning opportunities.</p>
              <form className="space-y-2">
                <div className="bg-white rounded-full overflow-hidden shadow-md flex items-center p-1 max-w-full">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 min-w-0 px-4 py-2 bg-transparent border-none focus:outline-none text-gray-700"
                    aria-label="Email address for newsletter"
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 sm:px-6 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-600 flex-shrink-0 whitespace-nowrap"
                    aria-label="Subscribe to newsletter"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Copyright and Additional Links */}
          <div className="mt-12 pt-6 border-t border-gray-200/30">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-800">
              <p>© {currentYear} OnLearn. All rights reserved.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="/terms" className="text-gray-800 hover:text-blue-800 transition-colors text-sm">
                  Terms of Service
                </a>
                <a href="/privacy" className="text-gray-800 hover:text-blue-800 transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="/cookies" className="text-gray-800 hover:text-blue-800 transition-colors text-sm">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;