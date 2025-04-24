"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import useCartStore from "@/components/Store/cartStore";
import toast from "react-hot-toast";
import Link from "next/link";

interface Items {
  id: string;
  title: string;
  category: string;
  image: string;
  price: number;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function HomeContent(product : Items) {
  // typescript
  const [content, setContent] = useState<Items[]>([]);


  // state function for the add to cart
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAdd = () => {
    addToCart(product);
    toast.success(`${product.title} added to cart`);
  };

  const fetchData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      if (res.status === 200) {
        setContent(data);
        console.log(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-[80%] mx-auto px-4 py-4">
      <section className="grid grid-cols-4 gap-2 items-center">
        {content?.map((item: Items) => (
          <Link href={`/${item.id}`} key={item.id}>
            <div className="">
              <img src={item.image} alt="" width={100} height={100} />
              <p className="font-bold text-balance font-mono">{item.title}</p>
              <p>{item.category}</p>
              <button className="text-sm text-right cursor-pointer">
                View product
              </button>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
