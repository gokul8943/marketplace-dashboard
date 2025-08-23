"use client";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import { useState } from "react";
import Filters from "@/components/Filters";
import Slider from "@/components/Slider";
import Client from "@/components/Client";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import svg from "../../public/image/SilderImage.svg";
import Pagination from "@/components/Pagination";

export default function ProductsPage() {
    const [page, setPage] = useState(1);

    const { data, isLoading, isError } = useQuery({
        queryKey: ["products", page],
        queryFn: async () =>
            (await api.get(`/products?page=${page}&limit=12`)).data,
    });
    
    const totalPages = data?.total && data?.limit 
    ? Math.ceil(data.total / data.limit) 
    : 1;

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
                    <Filters />
                </div>

                {/* Product Grid */}
                <div className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {data.data.map((product: any) => (
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
