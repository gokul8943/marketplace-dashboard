import React from 'react';

export default function ProductBanner() {
  return (
    <div className="relative w-full h-32 md:h-40 bg-gradient-to-r from-black via-gray-900 to-gray-700 rounded-lg overflow-hidden">
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Worker image representation - positioned on the right */}
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-gray-400 to-transparent opacity-60">
        {/* Stylized worker silhouette */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
          <div className="relative">
            {/* Hard hat */}
            <div className="w-8 h-6 bg-white rounded-t-full mb-1 relative">
              <div className="absolute top-1 left-2 text-xs font-bold text-red-600">3M</div>
            </div>
            {/* Head/face with respirator */}
            <div className="w-8 h-8 bg-gray-300 rounded-full relative">
              {/* Safety glasses */}
              <div className="absolute top-2 left-1 w-6 h-2 bg-gray-600 rounded"></div>
              {/* Respirator */}
              <div className="absolute bottom-1 left-1 w-6 h-3 bg-white rounded"></div>
            </div>
            {/* Body */}
            <div className="w-10 h-12 bg-gray-400 rounded-b-lg -mt-1"></div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-8">
        <div className="max-w-2xl">
          {/* Main heading */}
          <h2 className="text-white text-lg md:text-xl font-semibold leading-tight mb-4">
            Durable Construction: The 3M 6200 half face respirator,
            <br />
            ensuring a durable and long-lasting product.
          </h2>
          
          {/* CTA Button */}
          <button className="bg-blue-800 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-full transition-colors duration-200 text-sm md:text-base">
            Buy Now
          </button>
        </div>
      </div>
      
      {/* Subtle pattern overlay for texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-20"></div>
    </div>
  );
}