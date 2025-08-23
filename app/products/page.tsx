"use client";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import { useMemo, useState } from "react";
import Filters from "@/components/Filters";
import Client from "@/components/Client";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import svg from "../../public/image/SilderImage.svg";
import Pagination from "@/components/Pagination";
import { products as mockProducts, Product } from "@/mock/products";

export default function ProductsPage() {
    const [page, setPage] = useState(1);

    const [selectedFilters, setSelectedFilters] = useState({
        businessType: [] as string[],
        category: [] as string[],
        subCategory: [] as string[],
    });


    const { data, isLoading, isError } = useQuery({
        queryKey: ["products", page, selectedFilters],
        queryFn: async () =>
            (await api.get(`/products?page=${page}&limit=12`, { params: selectedFilters })).data,
    });

    const filteredProducts = useMemo(() => {
        return mockProducts.filter((product: Product) => {
            const matchCategory =
                selectedFilters.category.length === 0 ||
                selectedFilters.category.includes(product.category);

            // add other rules if you map businessType/subCategory to product fields
            return matchCategory;
        });
    }, [selectedFilters]);

    const totalPages = Math.ceil(filteredProducts.length / 12);
    const paginatedProducts = filteredProducts.slice((page - 1) * 12, page * 12);

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading products</p>;

    return (
        <div className="p-6">
            <div className="py-5">
                <Image src={svg} alt="sliderImage" height={318} width={1200} />
            </div>
            <div className="flex gap-6">
                {/* Sidebar Filters */}
                <div className="w-64">
                    <Filters
                        selectedFilters={selectedFilters}
                        setSelectedFilters={setSelectedFilters}
                    />
                </div>

                {/* Product Grid */}
                <div className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {paginatedProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                products={product}
                                page={page}
                                total={data.total}
                                limit={data.limit}
                                onPageChange={setPage} />
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center mt-6">
                        <Pagination
                            currentPage={page}
                            totalPages={totalPages}
                            onPageChange={setPage}
                        />
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <Client />
            </div>
        </div>
    );
}
