import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination({ 
  currentPage = 1, 
  totalPages = 7, 
  onPageChange = (page: number) => {} 
}) {
  const [activePage, setActivePage] = useState(currentPage);

  const handlePageClick = (page:number) => {
    setActivePage(page);
    onPageChange(page);
  };

  const handlePrevious = () => {
    if (activePage > 1) {
      handlePageClick(activePage - 1);
    }
  };

  const handleNext = () => {
    if (activePage < totalPages) {
      handlePageClick(activePage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`w-10 h-10 rounded-lg text-sm font-medium transition-all duration-200 ${
            activePage === i
              ? 'bg-purple-100 text-purple-700 shadow-sm'
              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-center space-x-2 py-4">
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        disabled={activePage === 1}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          activePage === 1
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
        }`}
      >
        <ChevronLeft size={16} />
        <span>Previous</span>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center space-x-1">
        {renderPageNumbers()}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={activePage === totalPages}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          activePage === totalPages
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
        }`}
      >
        <span>Next</span>
        <ChevronRight size={16} />
      </button>
    </div>
  );
}