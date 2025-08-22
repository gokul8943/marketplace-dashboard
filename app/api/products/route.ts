import { NextResponse } from "next/server";
import { products } from "@/mock/products";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");
  const category = searchParams.get("category");
  const status = searchParams.get("status");
  const sortBy = searchParams.get("sortBy") || "createdAt";
  const sortOrder = searchParams.get("sortOrder") || "desc";

  let filtered = [...products];

  if (category) filtered = filtered.filter(p => p.category === category);
  if (status) filtered = filtered.filter(p => p.status === status);

  filtered.sort((a, b) => {
    if (sortOrder === "asc") return a[sortBy as keyof typeof a] > b[sortBy as keyof typeof b] ? 1 : -1;
    return a[sortBy as keyof typeof a] < b[sortBy as keyof typeof b] ? 1 : -1;
  });

  const start = (page - 1) * limit;
  const paginated = filtered.slice(start, start + limit);

  return NextResponse.json({
    data: paginated,
    total: filtered.length,
    page,
    limit,
  });
}
