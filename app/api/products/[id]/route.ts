import { NextRequest, NextResponse } from "next/server";
import { products } from "@/mock/products";

type Params = { id: string };

export async function GET(
  _req: NextRequest,
  context: { params: Params } | { params: Promise<Params> }
) {
  // Normalize whether it's a Promise or plain object
  const params = context.params instanceof Promise
    ? await context.params
    : context.params;

  const { id } = params;

  const product = products.find((p) => p.id === id);
  if (!product) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}
