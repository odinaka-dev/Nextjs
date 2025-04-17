"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";

interface Items {
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

export default function HomeContent() {
  // typescript
  const [content, setContent] = useState<Items[]>([]);

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
    <div className="max-w-[1200px] mx-auto px-4 py-4">
      <section className="grid grid-cols-4 gap-2 items-center">
        {content?.map((item: Items) => (
          <Link href={`/${item.id}`} key={item.id}>
            <div className="">
              <img src={item.image} alt="" width={120} height={100} />
              <p className="font-bold text-balance font-mono">{item.title}</p>
              <p>{item.category}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
