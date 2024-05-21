import { Metadata } from "next";
import React from "react";

type Props = {
  params: {
    productId: string;
  };
};

async function getData(id: string) {
  const res = await fetch(`http:localhost:3000/api/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export  const generateMetadata = ({ params }: Props): Metadata => {
  const data =  getData(params.productId);
  console.log('Data' +data);
  
  return {
    title: `Product ${params.productId}`,
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
  

  return (
    <div className="p-5">
      <p>Details for Product {params.productId}</p>
    </div>
  );
}
