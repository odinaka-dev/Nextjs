"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

// tanstack functionality
import { getProducts } from "@/server/user";
import { useQuery } from "@tanstack/react-query";

export function ProductsApi() {
  // tanstack query functionality

  const { isPending, error, data } = useQuery({
    queryKey: ["homeProducts"],
    queryFn: getProducts,
  });

  // is pending functionality
  if (isPending) {
    return (
      <div>
        <span>is pending</span>
      </div>
    );
  }


  // error check.
  if (error) {
    return (
      <div>
        <span>error fetching</span>
      </div>
    );
  }


  return (
    <section className="grid grid-cols-4 gap-8 items-center ">
        {data?.slice(0, 4).map((item) => (
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
      <div className="flex justify-center items-center my-4 w-full">
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
export const ProductsApIs = { ProductsApi };
