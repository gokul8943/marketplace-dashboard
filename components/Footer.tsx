import React from 'react';
import { MapPin, Mail, Phone, MessageCircle } from 'lucide-react';

export default function iProcureFooter() {
  return (
    <footer className="bg-slate-700 text-gray-300 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        {/* Left decorative lines */}
        <div className="absolute left-8 top-8 w-16 h-16 border-l-2 border-t-2 border-gray-500"></div>
        <div className="absolute left-12 top-16 w-12 h-12 border-l border-t border-gray-500"></div>
        
        {/* Right decorative elements */}
        <div className="absolute right-8 bottom-8 w-20 h-20 border-r-2 border-b-2 border-gray-500"></div>
        <div className="absolute right-12 bottom-16 w-16 h-16 border-r border-b border-gray-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Get to Know Us Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get to Know Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors text-sm flex items-center">
                  <span className="text-red-500 mr-2">•</span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors text-sm flex items-center">
                  <span className="text-red-500 mr-2">•</span>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors text-sm flex items-center">
                  <span className="text-red-500 mr-2">•</span>
                  Process
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Useful links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors text-sm flex items-center">
                  <span className="text-red-500 mr-2">•</span>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors text-sm flex items-center">
                  <span className="text-red-500 mr-2">•</span>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors text-sm flex items-center">
                  <span className="text-red-500 mr-2">•</span>
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors text-sm flex items-center">
                  <span className="text-red-500 mr-2">•</span>
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors text-sm flex items-center">
                  <span className="text-red-500 mr-2">•</span>
                  News & Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Center Logo Section */}
          <div className="text-center">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-white">
                <span className="text-blue-400">i</span>PROCURE
              </h2>
            </div>
            <p className="text-sm mb-4 max-w-xs mx-auto">
              An innovative tech platform by Big Trader Technology
              simplifying B2B procurement in Qatar.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex justify-center space-x-3">
              <a href="#" className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <span className="text-white text-xs font-bold">in</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <span className="text-white text-xs">ig</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <span className="text-white text-xs">t</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <span className="text-white text-xs">x</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <span className="text-white text-xs">yt</span>
              </a>
            </div>
          </div>

          {/* Contact Information Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Informations</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-0.5 text-gray-400" />
                <div>
                  <p className="text-white font-medium text-sm">Get in Touch With Us</p>
                  <p className="text-sm">iProcure.ai, Doha, Qatar</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-0.5 text-gray-400" />
                <div>
                  <p className="text-white font-medium text-sm">Email Address</p>
                  <p className="text-sm">info@iprocure.ai</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-0.5 text-gray-400" />
                <div>
                  <p className="text-white font-medium text-sm">Phone Number</p>
                  <p className="text-sm">+974 7799 9600</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border and Copyright */}
        <div className="border-t border-gray-600 mt-8 pt-6 text-center">
          <p className="text-sm">
            Copyright © 2025 <span className="text-red-400">iProcure.ai</span> All Rights Reserved
          </p>
        </div>
      </div>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-700 pr-2 ">
              Chat with us
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}