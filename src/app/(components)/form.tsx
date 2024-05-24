
'use client'

import React from 'react'
import { addTodo } from '../actions/action'

export default function Form() {
  return (
    <form action={addTodo} className="flex flex-col w-3/5 p-10">
        <input
          className="p-3 w-full border border-gray-400 rounded-md"
          placeholder="Enter todo"
          name="description"
          required
        />

      </form>
  )
}
