
import React from "react";
import ProductDetails from "@/components/pages/product-details/product-details";


export default function Page({ params }: { params: { id: string } }) {  
  return (
    <div>
      <ProductDetails params={{ id: params.id }} />
    </div>
  );
}

