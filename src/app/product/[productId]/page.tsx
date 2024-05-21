import { Metadata } from "next";
import React from "react";
import Products from "../page";

type Props = {
  params: {
    productId: string;
  };
};


export const generateMetadata = ({params} : Props) : Metadata => {
    return{
        title: `Product ${params.productId}`,
        openGraph: {
            images: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Flaptops%2F&psig=AOvVaw3X79l6D6fOVUeFRaMwyqZY&ust=1716395653303000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKDpvZuWn4YDFQAAAAAdAAAAABAE'],
          },
    }
}
export  default function ProductDetails({ params }: Props) {
    const productData = Products.filter((item: any) => item.id = params.productId); 
  return (
    <div className="p-5">
      <p>Details for Product {params.productId}</p>
    </div>
  );
}
