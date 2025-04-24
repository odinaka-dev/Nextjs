import React from "react";
import Products from "@/components/pages/allproducts/all-products";

export default function page() {
  return (
    <div>
      <Products id={""} title={""} category={""} image={""} price={0} description={""} rating={{
        rate: 0,
        count: 0
      }} />
    </div>
  );
}
