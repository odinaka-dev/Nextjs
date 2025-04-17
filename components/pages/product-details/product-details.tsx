"use client";

import React from "react";

interface Props {
  params: {
    id: number;
  };
}

async function getProduct(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  return res.json();
}

export default async function SingleProduct({ params }: Props) {
  const { id } = params;
  const product = await getProduct(params.id.toString());

  return (
    <div className="py-16 flex justify-center items-center">
      <div className="grid grid-cols-2 items-center gap-8">
        <div className="w-full h-100 flex justify-end">
          <img src={product.image} alt="" className="" />
        </div>
        <div className="mr-40">
          <h1 className="font-semibold text-2xl border-b border-gray-400 py-4 cursor-pointer hover:text-red-800 duration-300">
            {product.title}
          </h1>
          <p className="text-base leading-6 py-4">{product.description}</p>
          <div className="btn flex items-center gap-4">
            <button className="bg-black text-white py-2 px-6 hover:bg-red-700 duration-300">
              Add to Cart
            </button>
            <button className="flex gap-4 justify-between items-center font-bold text-black bg-gray-300 py-2 px-6">
              <span className="cursor-pointer text-xl relative right-4">+</span>
              <span>0</span>
              <span className="cursor-pointer text-xl relative left-4">-</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
