import { NextResponse } from "next/server";
import { products } from "@/mock/products";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id);
  if (!product) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(product);
}
