import React from 'react';
import Image from 'next/image';

export default function ProductCard() {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      {/* 3M Logo */}
      <div className="p-4 pb-0">
        <div className="text-red-600 font-bold text-lg">3M</div>
      </div>
      
      {/* Product Image */}
      <div className="px-4 py-2">
        <div className="relative h-48 w-full bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="w-32 h-32 bg-black rounded-lg relative">
            {/* Helmet silhouette representation */}
            <div className="absolute inset-2 bg-gray-800 rounded-md"></div>
            <div className="absolute top-4 left-4 right-4 h-16 bg-purple-600 rounded opacity-80"></div>
            <div className="absolute top-1 right-1 w-6 h-4 bg-gray-600 rounded-sm"></div>
          </div>
        </div>
      </div>
      
      {/* Product Details */}
      <div className="px-4 pb-4">
        <h3 className="text-gray-800 font-medium text-sm mb-2 line-clamp-2">
          3M Speedglas Welding Helmet
        </h3>
        
        <div className="text-gray-600 text-xs mb-1">
          <span className="font-medium">UNSPC:</span> RYFTG3365
        </div>
        
        <div className="text-gray-600 text-xs mb-4">
          <span className="font-medium">Category:</span> Safety Helmet
        </div>
        
        {/* Send Enquiry Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors duration-200">
          Send Enquiry
        </button>
      </div>
    </div>
  );
}