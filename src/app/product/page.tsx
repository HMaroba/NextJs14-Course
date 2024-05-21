'use client'

import { useRouter } from "next/navigation";
import React from "react";

const products = [
  {
    id: 1,
    title: "Laptop",
    description: "Laptop for Sale here",
  },
  {
    id: 2,
    title: "Laptop",
    description: "Laptop for Sale here",
  },
  {
    id: 3,
    title: "Laptop",
    description: "Laptop for Sale here",
  },
  {
    id: 4,
    title: "Laptop",
    description: "Laptop for Sale here",
  },
];

export default function Products() {
    const router = useRouter();
    const handleNavigate = ( ) => {
        router.push('/product/20')
    }
  return (
    <div className="p-5">
      <p className="text-2xl text-blue-400 pb-10">Product Listing Below</p>
      <div className="grid grid-cols-3 gap-10 w-full">
        {products.map((item: any, index: number) => (
          <div key={index} className="" onClick={() => handleNavigate()}>
            <div className="bg-gray-100 p-5 rounded-md shadow-md">
              <p>{item.id}</p>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
