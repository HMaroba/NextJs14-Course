"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import laptopImage from "./laptop.jpeg";

export const productsList = [
  {
    id: 1,
    title: "Laptop",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Flaptops%2F&psig=AOvVaw3X79l6D6fOVUeFRaMwyqZY&ust=1716395653303000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKDpvZuWn4YDFQAAAAAdAAAAABAE",
    description: "Laptop for Sale here",
  },
  {
    id: 2,
    title: "Laptop",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Flaptops%2F&psig=AOvVaw3X79l6D6fOVUeFRaMwyqZY&ust=1716395653303000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKDpvZuWn4YDFQAAAAAdAAAAABAE",
    description: "Laptop for Sale here",
  },
  {
    id: 3,
    title: "Laptop",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Flaptops%2F&psig=AOvVaw3X79l6D6fOVUeFRaMwyqZY&ust=1716395653303000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKDpvZuWn4YDFQAAAAAdAAAAABAE",
    description: "Laptop for Sale here",
  },
  {
    id: 4,
    title: "Laptop",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Flaptops%2F&psig=AOvVaw3X79l6D6fOVUeFRaMwyqZY&ust=1716395653303000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKDpvZuWn4YDFQAAAAAdAAAAABAE",
    description: "Laptop for Sale here",
  },
];

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
      <div className="grid grid-cols-3 gap-10 w-full">
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
