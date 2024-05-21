import { productsList } from "@/app/product/page";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(productsList);
}
