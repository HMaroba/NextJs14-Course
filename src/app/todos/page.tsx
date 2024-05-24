import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export default async function Todo() {
    const todos = await prisma?.post.findMany();
    
  return (
    <div className="flex min-h-screen flex-col">
      
    </div>
  )
}
