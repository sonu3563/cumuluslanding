import React, { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, X } from 'lucide-react';
import logo2 from "../../src/Assets/logo2.png";
import { Link as ScrollLink } from "react-scroll";

function Footer() {
  const [isDialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    // Disable body scrolling when the dialog is open
    if (isDialogOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Reset on unmount
    };
  }, [isDialogOpen]);

  return (
    <footer className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* Logo and Social Media */}
          <div className="flex flex-col items-start">
            <h1 className="flex item-start">
              <span><img src={logo2} alt="" className='h-12' /></span>
            </h1>
            <div className="flex items-center space-x-4 mt-4">
              <div className="flex space-x-4">
                <Link to="#" className="text-gray-600 cursor-pointer hover:text-blue-500">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link to="#" className="text-gray-600 cursor-pointer hover:text-blue-500">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link to="#" className="text-gray-600 cursor-pointer hover:text-blue-500">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link to="#" className="text-gray-600 cursor-pointer hover:text-blue-500">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Menu Links */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-medium text-gray-800">Menu</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <ScrollLink
                  to="features"
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className="text-gray-600 cursor-pointer hover:text-blue-500 focus:outline-none"
                >
                  Features
                </ScrollLink>
              </li>
              <li>
              <ScrollLink
              to="subscription"
              smooth={true}
              duration={500}
              offset={-50}
              className="text-gray-600 cursor-pointer hover:text-blue-500 focus:outline-none"
            >
              Plans & Pricing
            </ScrollLink>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-medium text-gray-800">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <button
                  onClick={() => setDialogOpen(true)}
                  className="text-gray-600 cursor-pointer hover:text-blue-500 focus:outline-none"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => setDialogOpen(true)}
                  className="text-gray-600 cursor-pointer hover:text-blue-500 focus:outline-none"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-center text-gray-500">
        © Cumulus 2024
      </div>

      {/* Dialog Box */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 md:p-0">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl relative">
            {/* Close Icon */}
            <button
              className="absolute top-3 right-5 md:top-3 md:right-3 text-gray-600 hover:text-black"
              onClick={() => setDialogOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>

            {/* Title */}
            <h2 className="text-xl font-bold mb-4 text-black">Terms of Service</h2>

            {/* Terms Text */}
            <p className="text-xs md:text-sm text-gray-600 overflow-y-auto mb-4">
              terms as your use of FidSafe reaffirms your continuing agreement to the then-current User Agreement. This User Agreement is distinct from, and in addition to, any other agreements between you and Fidelity Investments ("Fidelity"), if any. Additionally, you acknowledge that non-Fidelity parties may provide portions of the FidSafe Service ("third-party service provider") in accordance with the terms of this User Agreement.
              By clicking the I Agree button, you agree to be bound by, and to act in accordance with, this User Agreement in order to use FidSafe. You certify that you are at least 18 years of age and are a US resident.
            </p>
            <h2 className="text-xl mb-1 text-black">Cumulus Account</h2>
            <p className="text-xs md:text-sm text-gray-600 overflow-y-auto max-h-60 mb-4">
              You have elected to enroll in the FidSafe Service and to create a secure FidSafe Account ("Account") that will only be accessible to you ("User"). The FidSafe Service may allow you, among other things, to store, upload, access, download, review, share and delete copies of your Content that have been uploaded into your Account via the internet in compliance with this User Agreement. In other circumstances, the FidSafe Service may allow you only to access, download and review copies of electronic files that have been shared with you by another FidSafe user. We make no effort to review your Content for accuracy, legality, non-infringement, or for any
            </p>

            {/* Checkbox */}
            {/* <div className="flex items-center space-x-2 mb-4">
              <input
                type="checkbox"
                id="acceptTerms"
                className="h-4 w-4 border-gray-300 rounded"
              />
              <label htmlFor="acceptTerms" className="text-sm text-gray-600">
                By signing this, you agree to the Privacy Policy and Terms of Service.
              </label>
            </div> */}

            {/* Buttons */}
            {/* <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 text-sm bg-white border border-blue-500 text-blue-500 rounded-md hover:bg-gray-400"
                onClick={() => setDialogOpen(false)}
              >
                Decline
              </button>
              <button
                className="px-4 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={() => setDialogOpen(false)}
              >
                I Agree
              </button>
            </div> */}
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
