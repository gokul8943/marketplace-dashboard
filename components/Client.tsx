import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TrustedClients() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5);

  const clients = [
    { name: "3M", logo: "3M" },
    { name: "Amentum", logo: "amentum" },
    { name: "Daikin", logo: "DAIKIN" },
    { name: "GE", logo: "GE" },
    { name: "Airwheel", logo: "Airwheel" },
    { name: "Microsoft", logo: "Microsoft" },
    { name: "Amazon", logo: "Amazon" },
    { name: "Google", logo: "Google" },
  ];

  // update itemsPerView on resize
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(2); // mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3); // tablet
      } else {
        setItemsPerView(5); // desktop
      }
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const maxIndex = Math.max(0, clients.length - itemsPerView);

  const nextSlide = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  const visibleClients = clients.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <div className="w-full bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-lg p-8">
        <h2 className="text-center text-2xl md:text-3xl font-medium text-gray-800 mb-8">
          Trusted by leading Clients
        </h2>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          {/* Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mx-12 w-full max-w-4xl">
            {visibleClients.map((client, index) => (
              <div
                key={`${client.name}-${currentIndex}-${index}`}
                className="flex items-center justify-center h-20 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="text-center px-4">
                  {client.name === "3M" && (
                    <div className="text-2xl font-bold text-gray-700">3M</div>
                  )}
                  {client.name === "Amentum" && (
                    <div className="text-lg font-semibold text-gray-700">
                      amentum
                    </div>
                  )}
                  {client.name === "Daikin" && (
                    <div className="text-lg font-bold text-gray-600 tracking-wider">
                      DAIKIN
                    </div>
                  )}
                  {client.name === "GE" && (
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto">
                      <div className="text-white font-bold text-lg italic">GE</div>
                    </div>
                  )}
                  {client.name === "Airwheel" && (
                    <div className="text-lg font-medium text-gray-600">
                      Airwheel
                    </div>
                  )}
                  {client.name === "Microsoft" && (
                    <div className="text-lg font-semibold text-blue-600">
                      Microsoft
                    </div>
                  )}
                  {client.name === "Amazon" && (
                    <div className="text-lg font-bold text-orange-500">amazon</div>
                  )}
                  {client.name === "Google" && (
                    <div className="text-lg font-medium">
                      <span className="text-blue-500">G</span>
                      <span className="text-red-500">o</span>
                      <span className="text-yellow-500">o</span>
                      <span className="text-blue-500">g</span>
                      <span className="text-green-500">l</span>
                      <span className="text-red-500">e</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
