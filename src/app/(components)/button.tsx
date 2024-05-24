import React from "react";
import { useFormStatus } from "react-dom";

export default function Button() {
  const { pending } = useFormStatus();
  return (
    <button className="w-full p-2 bg-blue-500 text-white rounded-lg mt-5">
      {pending ? "Adding todo ...." : "Save"}
    </button>
  );
}
