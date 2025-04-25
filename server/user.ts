"use client";

import axiosInstance from "@/lib/utils/axiosInstance";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";

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

// getting the products data
export async function getProducts(): Promise<List[]> {
  const response = await axiosInstance.get("https://fakestoreapi.com/products");
  if (response.status < 200 || response.status >= 300) {
    // throw new Error("Failed to fetch users");
    return Promise.reject(new Error("failed to fetch data"));
  }
  return response.data;
}

// mutation - adding products data
const addProducts = (newProduct: any) =>
  axiosInstance.post("/products", newProduct);

export function AddMutations() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addProducts,
    // onSuccess - the mutation works
    // onSuccess: () => {
    //   queryClient.invalidateQueries({ queryKey: ["addproducts"] });
    // },
    // onSettled - error or success (a check for if the mutation worked);
    onSettled: () => {
        queryClient.invalidateQueries({queryKey: ["addproducts"]})
    }
  });

  // adding products to the API link.
  // const handleAddProducts = () => {
  //     mutation.mutate({
  //     id: "203",
  //     title: "Vegetables",
  //     category: "Groceries",
  //     image: "image",
  //     price: 205,
  //     description: "my personal product",
  //     rating: {
  //         rate: 1,
  //         count: 2,
  //       }
  //     })
  // }
}
