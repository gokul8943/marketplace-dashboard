"use client";
import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

export default function IProcureNavbar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow-sm">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-900">
              <span className="text-blue-900">i</span>PROCURE
            </div>
          </div>

          {/* Center - Products Dropdown and Search */}
          <div className="flex items-center space-x-4 flex-1 max-w-2xl mx-8">
            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-blue-800 border border-gray-300 rounded-md bg-white"
              >
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Category 1</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Category 2</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Category 3</a>
                  </div>
                </div>
              )}
            </div>

            {/* Search Bar */}
            <div className="flex-1 relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Right - Action Buttons */}
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 text-white bg-blue-800 hover:bg-blue-700 rounded-md font-medium transition-colors">
              Register
            </button>
            <button className="px-4 py-2 text-gray-700 bg-white hover:bg-gray-50 border border-gray-300 rounded-md font-medium transition-colors">
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            <a href="#" className="text-white hover:text-blue-200 px-3 py-3 text-sm font-medium transition-colors">
              Products
            </a>
            <a href="#" className="text-white hover:text-blue-200 px-3 py-3 text-sm font-medium transition-colors">
              Suppliers
            </a>
            <a href="#" className="text-white hover:text-blue-200 px-3 py-3 text-sm font-medium transition-colors">
              Services
            </a>
            <a href="#" className="text-white hover:text-blue-200 px-3 py-3 text-sm font-medium transition-colors">
              Service Providers
            </a>
            <a href="#" className="text-white hover:text-blue-200 px-3 py-3 text-sm font-medium transition-colors">
              RFQ Marketplace
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}