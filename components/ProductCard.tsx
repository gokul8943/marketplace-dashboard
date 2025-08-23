import React from 'react';
import Image from 'next/image';
import { Product } from '@/mock/products';

type Props = {
    products: Product;
    page: number;
    total: number;
    limit: number;
    onPageChange: (page: number) => void;
};
export default function ProductCard({ products, page, total, limit, onPageChange }: Props) {
    console.log("products", products)

    return (
        <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            {/* 3M Logo */}
            <div className="p-4 pb-0">
                <div className="text-red-600 font-bold text-lg">3M</div>
            </div>

            {/* Product Image */}
            <div className="px-4 py-2">
                <div className="relative h-48 w-full bg-gray-50 rounded-lg flex items-center justify-center">
                    <img
                        src={products.image} // works with any URL from faker
                        alt={products.name}
                        className="object-cover rounded-lg w-full h-full"
                    />

                </div>
            </div>

            {/* Product Details */}
            <div className="px-4 pb-4">
                <h3 className="text-gray-800 font-medium text-sm mb-2 line-clamp-2">
                    {products?.name}
                </h3>

                <div className="text-gray-600 text-xs mb-1">
                    <span className="font-medium">UNSPC:</span>  {products.unspc || `RY${products.id.slice(0, 6).toUpperCase()}`}
                </div>

                <div className="text-gray-600 text-xs mb-4">
                    <span className="font-medium">Category:</span> {products?.category}
                </div>

                {/* Send Enquiry Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors duration-200">
                    Send Enquiry
                </button>
            </div>
        </div>
    );
}