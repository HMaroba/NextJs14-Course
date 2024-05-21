import { productsList } from "@/app/lib/productList";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(productsList);
}
