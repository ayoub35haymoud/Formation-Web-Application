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
    <footer className="relative mt-[-1px]">
      {/* Curved top using SVG with specific color #54E0FC */}
      <div
        className="absolute top-0 left-0 w-full overflow-hidden"
        style={{ height: "80px", transform: "translateY(-99.5%)" }}
      >
        <svg
          className="absolute bottom-0 w-full h-full block"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
          <path d="M0,80 C360,0 1080,0 1440,80 V80 H0 V0 Z" fill="#54E0FC" />
        </svg>
      </div>

      <div style={{ backgroundColor: "#54E0FC" }} className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-800">
            {/* Address Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold mb-4">Address</h3>
              <div className="space-y-2">
                <p className="flex items-center text-gray-800">
                  <FaMapMarkerAlt className="mr-2" />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="flex items-center text-gray-800">
                  <FaPhone className="mr-2" />
                  Tel:{" "}
                  <a
                    href="tel:+9239341037"
                    className="hover:text-blue-800 transition-colors"
                  >
                    +92 393 410 37
                  </a>
                </p>
                <p className="flex items-center text-gray-800">
                  <FaEnvelope className="mr-2" />
                  Email:{" "}
                  <a
                    href="mailto:info@onlearn.com"
                    className="hover:text-blue-800 transition-colors"
                  >
                    info@onlearn.com
                  </a>
                </p>
              </div>
            </div>

            {/* Social Networks */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold mb-4">Réseaux</h3>
              <div className="flex flex-col space-y-3">
                <a
                  href="#"
                  className="flex items-center text-gray-800 hover:text-blue-800 transition-colors"
                >
                  <FaFacebookF className="mr-2" />
                  Facebook
                </a>
                <a
                  href="#"
                  className="flex items-center text-gray-800 hover:text-blue-800 transition-colors"
                >
                  <FaInstagram className="mr-2" />
                  Instagram
                </a>
                <a
                  href="#"
                  className="flex items-center text-gray-800 hover:text-blue-800 transition-colors"
                >
                  <FaLinkedinIn className="mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold mb-4">Links</h3>
              <div className="flex flex-col space-y-3">
                {["Formations", "Packs", "Contact"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-gray-800 hover:text-blue-800 transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold mb-4">
                Restez informé des derniers cours
              </h3>
              <div className="bg-white rounded-full p-2 flex items-center shadow-md">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-4 py-2 bg-transparent border-none focus:outline-none text-gray-700"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-full transition-colors"
                >
                  Send
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-6 text-center text-gray-800">
            <p>© {currentYear} OnLearn. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
