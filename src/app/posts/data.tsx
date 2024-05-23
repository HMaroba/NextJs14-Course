// "use client";

import Image from "next/image";
import React from "react";
import { Suspense } from "react";
import Loading from "../(components)/loading";
import Link from "next/link";
import PostList from "./page";

type Props = {
  id: number;
  name: string;
  email: string;
};

async function getData() {
  const res = await fetch(`https://next-js14-course.vercel.app\/api/posts/`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Data() {
  const data = await getData();

  return (
    <Suspense fallback={<Loading />}>
      {/* <PostList Postdata={data} /> */}
    </Suspense>
  );
}
