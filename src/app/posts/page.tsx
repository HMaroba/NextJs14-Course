"use client";

import React from "react";

type Props = {
  id: number;
  name: string;
  email: string;
};

type PostListProps = {
  Postdata: Props[];
};

export default function PostList({ Postdata }: PostListProps) {
  console.log(Postdata);

  return (
    <div className="p-3">
      <p className="text-2xl font-semibold pb-10">Posts Listing Below</p>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 w-full">
        {Postdata.map((item, index) => (
          <div key={index} className="">
            <div className="bg-white rounded-md shadow-md border border-gray-300 w-full">
              <div className="p-5 max-h-40 min-h-40">
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
    </div>
  );
}
