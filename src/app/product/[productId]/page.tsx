import { Metadata } from "next";
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
      images: [
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Flaptops%2F&psig=AOvVaw3X79l6D6fOVUeFRaMwyqZY&ust=1716395653303000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKDpvZuWn4YDFQAAAAAdAAAAABAE",
      ],
    },
  };
};
export default async function ProductDetails({ params }: Props) {
  // const productData = productsList.find((item: any) => item.id = params.productId);
  // console.log(productData);
  const data = await getData(params.productId);
  const productData = JSON.stringify(data);
  
  

  return (
    <div className="p-5">
      <p>Details for Product {data?.id}</p>
      <p>{data?.description}</p>
    </div>
  );
}
