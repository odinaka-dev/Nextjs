"use client";

import React from "react";
import ProductDetails from "@/components/pages/product-details/product-details";

import { useParams } from "next/navigation";

export default function page() {
  const params = useParams();
  return (
    <div>
      <ProductDetails
        params={{
          id: Number(params.id),
        }}
      />
    </div>
  );
}
