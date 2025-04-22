"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Base_url = "https://fakestoreapi.com/products";

// the typescript logic for all the products

interface List {
  id: number;
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

// for the list of products

export function ProductsApi() {
  const [productlist, setProductList] = useState<List[]>([]);
  const fetcher = async () => {
    try {
      const res = await fetch(`${Base_url}`);
      const data = await res.json();
      if (res.status === 200) {
        setProductList(data.slice(0, 4));
      }
    } catch (error) {
      console.error("could not fetch the product", error);
    }
  };

  useEffect(() => {
    fetcher();
  }, []);

  return (
    <section className="grid grid-cols-4 gap-8 items-center ">
      {productlist?.map((item: List) => (
        <Link href={`/${item.id}`} key={item.id}>
          <div className="">
            <div className="flex justify-center">
              <img
                src={item.image}
                alt=""
                className="my-6"
                width={150}
                height={120}
              />
            </div>
            <p className="text-balance font-mono text-red-500 font-semibold">
              {item.title}
            </p>
            <p>{item.category}</p>
          </div>
        </Link>
      ))}
      <div className="button flex justify-center my-4">
        <Link href={"/products"}>
          <button className="text-white bg-red-500 py-2 px-8 rounded-sm shadow-sm border border-gray-200">
            View all Products
          </button>
        </Link>
      </div>
    </section>
  );
}

// browse collections aspects

export function CollectBrowser() {}

export const ProductsApIs = { ProductsApi, CollectBrowser };
