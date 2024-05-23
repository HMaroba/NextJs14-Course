import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { description } = await request.json();
    const uploaddata = await prisma.post.create({
      data: {
        description,
      },
    });
    return NextResponse.json(uploaddata);
  } catch (error) {
    NextResponse.json("Error when submitting");
  }
}
