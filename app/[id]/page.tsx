import React from "react";
import ProductDetails from "@/components/pages/product-details/product-details";

interface Props {
  params: {
    id: string;
  };
  product: any;
}

async function getProduct(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
    const { id } = params;
    const product = await getProduct(params.id);
  return (
    <div>
      <ProductDetails params={params.id} product={product} />
    </div>
  );
}

