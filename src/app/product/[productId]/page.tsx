import { Metadata } from "next";
import React from "react";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};
export default function ProductDetails({ params }: Props) {
  return (
    <div>
      <p>Details for Product {params.productId}</p>
    </div>
  );
}
