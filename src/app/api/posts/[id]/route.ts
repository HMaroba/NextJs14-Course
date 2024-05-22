import { PostsList } from "@/app/lib/posts";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const { id } = params;

  try {
    const product =  PostsList.find((item: any) => item.id == id);


    const productId = product?.id;

    if (!productId) {
      return NextResponse.json({
        message: "Product does not exists",
        success: false,
      });
    }

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong on the server.",
      status: 500,
    });
  }
}
