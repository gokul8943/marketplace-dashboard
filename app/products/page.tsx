"use client";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import { useState } from "react";
import Filters from "@/components/Filters";
import Client from "@/components/Client";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import svg from "../../public/image/SilderImage.svg";
import Pagination from "@/components/Pagination";
import { products as mockProducts, Product } from "@/mock/products";
import SkeletonCard from "@/components/SkeletonCard";

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
      (
        await api.get(`/products?page=${page}&limit=12`, {
          params: selectedFilters,
        })
      ).data,
  });

  // Prefer API data, fallback to mock
  const products: Product[] = data?.products ?? mockProducts;
  const totalPages = data?.total
    ? Math.ceil(data.total / data.limit)
    : Math.ceil(mockProducts.length / 55);
 

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, idx) => (
            <SkeletonCard key={idx} />
          ))}
        </div>
      </div>
    );
  }

  if (isError) return <p>Error loading products</p>;

  return (
    <div className="p-6">
      <div className="py-5">
        <Image src={svg} alt="sliderImage" height={318} width={1200} />
      </div>
      <div className="flex gap-6">
        {/* Sidebar Filters */}
        <div className="w-64 hidden md:block">
          <Filters
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                products={product}
                page={page}
                total={data?.total ?? mockProducts.length}
                limit={data?.limit ?? 12}
                onPageChange={setPage}
              />
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
