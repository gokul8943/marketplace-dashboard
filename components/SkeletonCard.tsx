import React from 'react';

function SkeletonCard() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 animate-pulse">

      <div className="relative mb-4">
        <div className="w-full h-32 bg-gray-200 rounded-md"></div>
      
        <div className="absolute top-2 left-2 w-8 h-4 bg-gray-300 rounded"></div>
      </div>
      
 
      <div className="mb-3">
        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      </div>
      
      {/* Product Details Skeleton */}
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <div className="h-3 bg-gray-200 rounded w-12"></div>
          <div className="h-3 bg-gray-200 rounded w-16"></div>
        </div>
        <div className="flex justify-between">
          <div className="h-3 bg-gray-200 rounded w-16"></div>
          <div className="h-3 bg-gray-200 rounded w-20"></div>
        </div>
        <div className="flex justify-between">
          <div className="h-3 bg-gray-200 rounded w-14"></div>
          <div className="h-3 bg-gray-200 rounded w-18"></div>
        </div>
      </div>
      
      {/* Button Skeleton */}
      <div className="h-9 bg-gray-200 rounded w-full"></div>
    </div>
  );
}

// Main skeleton component that renders multiple cards
export default function ProductSkeleton({ count = 8 }) {
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* Product Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {Array.from({ length: count }, (_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
      
      {/* Pagination Skeleton */}
      <div className="flex items-center justify-center space-x-2 py-4">
        {/* Previous Button Skeleton */}
        <div className="h-10 w-20 bg-gray-200 rounded-lg animate-pulse"></div>
        
        {/* Page Numbers Skeleton */}
        <div className="flex items-center space-x-1">
          {Array.from({ length: 7 }, (_, index) => (
            <div key={index} className="w-10 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
          ))}
        </div>
        
        {/* Next Button Skeleton */}
        <div className="h-10 w-16 bg-gray-200 rounded-lg animate-pulse"></div>
      </div>
    </div>
  );
}