import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import Form from "../(components)/form";
import { deleteTodo } from "../actions/action";
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

    revalidatePath("/todos");
  };

  return (
    <div className="flex min-h-screen flex-col justify-center items-center p-24">
      <p className="text-3xl">Todos Page</p>
      <Form />

      <ul className="list-disc">
        {todos.map((todo) => (
          <div key={todo.id} className="flex gap-5 p-2">
            <li>{todo.description}</li>
            <form action={deleteTodo}>
              <input name="id" type="hidden" value={todo.id} />
              <button className="bg-red-500 p-2 rounded-md text-white">
                Delete
              </button>
            </form>
          </div>
        ))}
      </ul>
    </div>
  );
}
