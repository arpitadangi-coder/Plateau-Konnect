import { memo } from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

const Footer = memo(() => {
  const date = new Date();

  return (
    <footer className="bg-black text-white p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Contact Us Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
          <p className="flex items-center text-sm">
            <FaMapMarkerAlt className="mr-2" /> 5/12A Calangute Beach, Bardez, Goa - 403516
          </p>
          <p className="flex items-center text-sm mt-2">
            <FaPhoneAlt className="mr-2" /> +91 9156091640
          </p>
          <p className="flex items-center text-sm mt-2">
            <FaEnvelope className="mr-2" /> customerservice@propertyplateau.com
          </p>
          <p className="flex items-center text-sm mt-2">
            <FaGlobe className="mr-2" /> Property Plateau
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4">
            <div className="p-2 bg-black text-white rounded-full cursor-pointer hover:bg-green-700">
              <FaFacebookF />
            </div>
            <div className="p-2 bg-black text-white rounded-full cursor-pointer hover:bg-green-700">
              <FaLinkedinIn />
            </div>
            <div className="p-2 bg-black text-white rounded-full cursor-pointer hover:bg-green-700">
              <FaInstagram />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>Rentals</li>
            <li>Sales</li>
            <li>Contact</li>
            <li>Our Blog</li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm mt-6">
        <p>All Rights Reserved &copy; {date.getFullYear()} Property Plateau Private Ltd.</p>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
