import { Metadata } from "next";
import { Suspense } from 'react'
import React from "react";

type Props = {
  params: {
    productId: number;
  };
};

async function getData(id: number) {
  const res = await fetch(`https://next-js14-course.vercel.app/api/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
 
  return res.json();
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const data = await getData(params.productId);

  return {
    title: data?.title,
    description : data?.description,
    openGraph: {
      title: data?.title,
      description : data?.description,
      images: {
        url: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        width: 800,
        height: 600,
        alt: data?.title,
      }
    },
  };
};
export default async function ProductDetails({ params }: Props) {
  // const productData = productsList.find((item: any) => item.id = params.productId);
  // console.log(productData);
  const data = await getData(params.productId);
  const productData = JSON.stringify(data);
  
  

  return (
    <Suspense fallback={<p>Loading feed...</p>}>
    <div className="p-5">
      <p>Details for Product {data?.id}</p>
      <p>{data?.description}</p>
    </div>
    </Suspense>
  );
}
