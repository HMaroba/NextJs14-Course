
'use client'

import React from 'react'

export default function Form() {
  return (
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
  )
}
