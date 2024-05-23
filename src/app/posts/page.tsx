// "use client";

import Image from "next/image";
import React from "react";
import { Suspense } from "react";
import Loading from "../(components)/loading";
import Link from "next/link";

type Props = {
  id: number;
  name: string;
  email: string;
};

async function getData() {
  const res = await fetch(`https://next-js14-course.vercel.app/api/posts/`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function PostList() {
  const data = await getData();

  return (
    <div className="p-3">
      <p className="text-2xl font-semibold pb-10">Posts Listing Below</p>
      <Suspense fallback={<Loading />}>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 w-full">
          {data.map((item: Props, index: number) => (
            <div key={index} className="">
              <div
                className="bg-white rounded-md shadow-md border border-gray-300 w-full"
          
              >
                <div className="p-5 max-h-40">
                  <p className="text-lg">{item.id}</p>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-xl font-semibold ml-auto text-blue-800">
                    {item.email}
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
