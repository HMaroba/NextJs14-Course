"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient();

export const addTodo = async (formData: FormData) => {
   

    const description = formData.get("description");
    await prisma.post.create({
      data: {
        description: description as string,
      },
    });

    revalidatePath("/todos")
  };