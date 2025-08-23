"use client";
import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

type SectionKey = "businessType" | "category" | "subCategory";

type FilterItem = {
  name: string;
  count: number;
};

type FiltersProps = {
  selectedFilters: Record<SectionKey, string[]>;
  setSelectedFilters: React.Dispatch<
    React.SetStateAction<Record<SectionKey, string[]>>
  >;
};

export default function FiltersComponent({
  selectedFilters,
  setSelectedFilters,
}: FiltersProps) {
  const [expandedSections, setExpandedSections] = useState<
    Record<SectionKey, boolean>
  >({
    businessType: true,
    category: true,
    subCategory: true,
  });

  const toggleSection = (section: SectionKey) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleFilterChange = (section: SectionKey, value: string) => {
    setSelectedFilters((prev) => {
      if (value === "All") {
        return {
          ...prev,
          [section]: prev[section].includes("All") ? [] : ["All"],
        };
      }
      const isSelected = prev[section].includes(value);
      return {
        ...prev,
        [section]: isSelected
          ? prev[section].filter((item) => item !== value)
          : [...prev[section].filter((item) => item !== "All"), value],
      };
    });
  };

  const clearAll = () => {
    setSelectedFilters({
      businessType: [],
      category: [],
      subCategory: [],
    });
  };

  const businessTypes: FilterItem[] = [
    { name: "All", count: 18 },
    { name: "Supplier", count: 12 },
    { name: "Service Provider", count: 23 },
    { name: "Manufacture", count: 67 },
    { name: "Distribution", count: 34 },
    { name: "Contract Services", count: 12 },
  ];

  const categories: FilterItem[] = [
    { name: "General Civil Contracting", count: 18 },
    { name: "Utilities and Services", count: 12 },
    { name: "Earthworks and Site Preparation", count: 23 },
    { name: "Concrete Works", count: 67 },
    { name: "Steel and Structural Works", count: 34 },
    { name: "Masonry and Finishing Works", count: 12 },
  ];

  const subCategories: FilterItem[] = [
    { name: "Water Supply", count: 18 },
    { name: "Electrical", count: 96 },
    { name: "Sewerage Systems", count: 23 },
    { name: "Drainage Management", count: 67 },
    { name: "Stormwater Management", count: 34 },
    { name: "Gas Pipeline Installation", count: 12 },
  ];

  const FilterSection = ({
    title,
    items,
    section,
    showMore = false,
  }: {
    title: string;
    items: FilterItem[];
    section: SectionKey;
    showMore?: boolean;
  }) => {
    const [showAll, setShowAll] = useState(false);
    const displayItems = showMore && !showAll ? items.slice(0, 4) : items;

    return (
      <div className="border-b border-gray-200 pb-4 mb-4">
        <button
          onClick={() => toggleSection(section)}
          className="flex items-center justify-between w-full text-left mb-3"
        >
          <h3 className="text-sm font-medium text-gray-900">{title}</h3>
          {expandedSections[section] ? (
            <ChevronUp className="w-4 h-4 text-gray-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-400" />
          )}
        </button>

        {expandedSections[section] && (
          <div className="space-y-2">
            {displayItems.map((item, index) => (
              <label key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    checked={selectedFilters[section].includes(item.name)}
                    onChange={() => handleFilterChange(section, item.name)}
                  />
                  <span className="ml-2 text-gray-700">{item.name}</span>
                </div>
                <span className="text-gray-400">({item.count})</span>
              </label>
            ))}
            {showMore && items.length > 4 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-blue-600 text-sm hover:text-blue-800 mt-2"
              >
                {showAll ? "Show less" : "Show more"}
              </button>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-64 bg-white p-4 border-r border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-medium text-gray-900">Filters</h2>
        <button
          onClick={clearAll}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          Clear All
        </button>
      </div>

      {/* Filter Sections */}
      <div className="space-y-0">
        <FilterSection title="Business Type" items={businessTypes} section="businessType" showMore />
        <FilterSection title="Category" items={categories} section="category" showMore />
        <FilterSection title="Sub Category" items={subCategories} section="subCategory" showMore />
      </div>
    </div>
  );
}
