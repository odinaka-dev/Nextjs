"use client";

import React from "react";
import useCartStore from "@/components/Store/cartStore";
import toast from "react-hot-toast";

interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
}

interface Props {
  product: Product;
}

export default function SingleProduct({ product }: Props) {

  

  // state function for the add to cart
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAdd = () => {
    addToCart(product);
    toast.success(`${product.title} added to cart`);

  }


  return (
    <div className="py-16 flex justify-center items-center">
      <div className="grid grid-cols-2 items-center gap-8">
        <div className="w-1/2 h-100 flex justify-end items-end relative left-80">
          <img src={product.image} alt="" className="" />
        </div>
        <div className="mr-40">
          <h1 className="font-semibold text-2xl border-b border-gray-400 py-4 cursor-pointer hover:text-red-800 duration-300">
            {product.title}
          </h1>
          <p className="text-base leading-6 py-4">{product.description}</p>
          <p className="text-3xl font-bold">${Math.floor(product.price)}</p>
          <div className="btn flex items-center gap-4">
            <button className="bg-black text-white py-2 px-6 hover:bg-red-700 duration-300" onClick={handleAdd}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
