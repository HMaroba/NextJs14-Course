// "use client";

import Image from "next/image";
import React from "react";
import laptopImage from "./laptop.jpeg";
import { Suspense } from "react";
import Loading from "../(components)/loading";
import Link from "next/link";

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
  const data = await getData();

  return (
    <div className="p-5">
      <p className="text-2xl font-semibold pb-10">Product Listing Below</p>
      <Suspense fallback={<Loading />}>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 w-full">
          {data.map((item: Props, index: number) => (
            <div key={index} className="">
              <Link
                className="bg-white rounded-md shadow-md"
                href={`/product/${item.id}`}
              >
                <Image src={laptopImage} alt="Hello" width={500} height={250} />
                <div className="p-5 flex">
                  <p className="text-lg">{item.title}</p>
                  <p className="text-xl font-semibold ml-auto text-blue-800">
                    {item.currency}
                    {item.price}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Suspense>
    </div>
  );
}
