import React from "react";
import { useFormStatus } from "react-dom";

export default function DeleteButton() {
  const { pending } = useFormStatus();
  return (
    <button className="bg-red-500 p-2 rounded-md text-white">
      {" "}
      {pending ? "Deleting ..." : "Delete"}
    </button>
  );
}
