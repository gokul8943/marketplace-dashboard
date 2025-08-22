"use client";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import ProductTable from "@/components/ProductTable";
import { useState } from "react";

export default function ProductsPage() {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", page],
    queryFn: async () =>
      (await api.get(`/products?page=${page}&limit=10`)).data,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ProductTable
        products={data.data}
        page={page}
        total={data.total}
        limit={data.limit}
        onPageChange={setPage}
      />
    </div>
  );
}
