import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
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
      <form action={addTodo} className="flex flex-col w-3/5 p-10">
        <input
          className="p-3 w-full border border-gray-400 rounded-md"
          placeholder="Enter todo"
          name="description"
          required
        />
        <button className="w-full p-2 bg-blue-500 text-white rounded-lg mt-5">
          Save
        </button>
      </form>

      <ul className="list-disc">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.description}</li>
        ))}
      </ul>
    </div>
  );
}
