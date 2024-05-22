import { PostsList } from "@/app/lib/posts";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(PostsList);
}
