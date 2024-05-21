"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import laptopImage from "./laptop.jpeg";
import { productsList } from "../lib/productList";

type Props = {
  id: number;
  title: string;
  description: string;
};

export default function Products() {
  const router = useRouter();
  const handleNavigate = (item: Props) => {
    router.push(`/product/${item.id}`);
  };
  return (
    <div className="p-5">
      <p className="text-2xl font-semibold pb-10">Product Listing Below</p>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 w-full">
        {productsList.map((item: Props, index: number) => (
          <div key={index} className="" onClick={() => handleNavigate(item)}>
            <div className="bg-white rounded-md shadow-md">
              <Image src={laptopImage} alt="Hello" width={500} height={250} />
              <div className="p-5">
                <p>{item.id}</p>
                <p>{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
