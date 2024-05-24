import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import Form from "../(components)/form";
const prisma = new PrismaClient();

export default async function Todo() {
  const todos = await prisma?.post.findMany();

  const addTodo = async (formData: FormData) => {
    "use server";

    const description = formData.get("description");
    await prisma.post.create({
      data: {
        description: description as string,
      },
    });

    revalidatePath("/todos")
  };

  return (
    <div className="flex min-h-screen flex-col justify-center items-center p-24">
      <p className="text-3xl">Todos Page</p>
     <Form />

      <ul className="list-disc">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.description}</li>
        ))}
      </ul>
    </div>
  );
}
