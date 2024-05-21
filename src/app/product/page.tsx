'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import laptopImage from './laptop.jpeg'

const products = [
  {
    id: 1,
    title: "Laptop",
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Flaptops%2F&psig=AOvVaw3X79l6D6fOVUeFRaMwyqZY&ust=1716395653303000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKDpvZuWn4YDFQAAAAAdAAAAABAE',
    description: "Laptop for Sale here",
  },
  {
    id: 2,
    title: "Laptop",
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Flaptops%2F&psig=AOvVaw3X79l6D6fOVUeFRaMwyqZY&ust=1716395653303000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKDpvZuWn4YDFQAAAAAdAAAAABAE',
    description: "Laptop for Sale here",
  },
  {
    id: 3,
    title: "Laptop",
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Flaptops%2F&psig=AOvVaw3X79l6D6fOVUeFRaMwyqZY&ust=1716395653303000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKDpvZuWn4YDFQAAAAAdAAAAABAE',
    description: "Laptop for Sale here",
  },
  {
    id: 4,
    title: "Laptop",
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Flaptops%2F&psig=AOvVaw3X79l6D6fOVUeFRaMwyqZY&ust=1716395653303000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKDpvZuWn4YDFQAAAAAdAAAAABAE',
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
            <div className="bg-gray-100 rounded-md shadow-md">
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
