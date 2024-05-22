// "use client";

import Image from "next/image";
import React from "react";
import laptopImage from "./laptop.jpeg";
import { Suspense } from "react";

type Props = {
  id: number;
  title: string;
  description: string;
  price: number;
  currency: string;
};

async function getData() {
  const res = await fetch(`https://next-js14-course.vercel.app/api/products/`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Products() {
  // const router = useRouter();
  // const handleNavigate = (item: Props) => {
  //   router.push(`/product/${item.id}`);
  // };
  const data = await getData();
  // console.log(data);

  return (
    <div className="p-5">
      <p className="text-2xl font-semibold pb-10">Product Listing Below</p>
      <Suspense fallback={<p>Loading feed...</p>}>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 w-full">
        {data.map((item: Props, index: number) => (
          <div key={index} className="">
            <div className="bg-white rounded-md shadow-md">
              <Image src={laptopImage} alt="Hello" width={500} height={250} />
              <div className="p-5 flex">
                <p className="text-lg">{item.title}</p>
                <p className="text-xl font-semibold ml-auto text-blue-800">
                  {item.currency}
                  {item.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </Suspense>
    </div>
  );
}
