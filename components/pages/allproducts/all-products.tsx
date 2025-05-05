"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import useCartStore from "@/components/Store/cartStore";
import toast from "react-hot-toast";
import Link from "next/link";

// importing the function for all products from tanstack.
import { AllProducts } from "@/server/user";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";

import { Card, Image, Text } from "@chakra-ui/react";

// add to cart information.
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

export default function HomeContent(product: Items) {
  // typescript
  // state function for the add to cart
  const addToCart = useCartStore((state) => state.addToCart);

  // handling add to cart section
  const handleAdd = () => {
    addToCart(product);
    toast.success(`${product.title} added to cart`);
  };

  // tanstack fetch functionality
  const { isPending, error, data } = useQuery({
    queryKey: ["allProducts"],
    queryFn: AllProducts,
  });

  if (isPending) {
    return (
      <div className="">
        <span>is loading</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="">
        <span>error fetching this page...</span>
      </div>
    );
  }

  return (
    <div className="max-w-[80%] mx-auto px-4 py-4">
      <section className="grid grid-cols-3 gap-2 items-center">
        {data?.map((item: Items) => (
          <Card.Root
            maxWidth="sm"
            overflow="hidden"
            className="border shadow-md hover:border-red-400 duration-300 cursor-pointer"
          >
            <div className="h-[150px] flex justify-center items-center">
              <Image
                src={item.image}
                alt="Green double couch with wooden legs"
                width={100}
                style={{ objectFit: "cover", borderRadius: "8px" }}
              />
            </div>
            {/* <Image
              src={item.image}
              alt="Green double couch with wooden legs"
              width={150}
              style={{ objectFit: "cover", borderRadius: "8px" }}
            /> */}
            <Card.Body gap="2">
              <Card.Title
                fontWeight={600}
                textTransform={"capitalize"}
                lineClamp={1}
              >
                {item.title}
              </Card.Title>
              <Card.Description lineClamp={2}>
                {item.description}
              </Card.Description>
              <Text
                textStyle="2xl"
                fontWeight={600}
                letterSpacing="tight"
                mt="2"
              >
                ${item.price}
              </Text>
            </Card.Body>
            <Card.Footer gap="2">
              <Button>
                <Link href={`/${item.id}`}>Check out</Link>
              </Button>
              <Button onClick={handleAdd}>Add to cart</Button>
            </Card.Footer>
          </Card.Root>
        ))}
      </section>
    </div>
  );
}
