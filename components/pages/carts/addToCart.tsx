"use client";

import useCartStore from "@/components/Store/cartStore";
import toast from "react-hot-toast";
import Link from "next/link";
import { MdDeleteOutline } from "react-icons/md";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const total = useCartStore((state) => state.getTotal());

  return (
    <div>
      {cart.length === 0 ? (
        <div className="max-w-[80%] h-[100vh] mx-auto my-8 flex justify-center items-center">
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <div className="max-w-[80%] mx-auto my-8">
          <h1 className="font-bold text-2xl my-8">Cart</h1>
          {cart.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-4 items-center py-3 px-4 shadow-md my-8"
            >
              <div className="img flex gap-4 items-center mr-12">
                <img src={item.image} alt="" width={50} height={50} />
                <h3>{item.title}</h3>
              </div>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <div className="">
                <button
                  onClick={() => {
                    removeFromCart(item.id);
                    toast.error(`${item.title} removed from cart`);
                  }}
                >
                  <MdDeleteOutline />
                </button>
              </div>
            </div>
          ))}

          {cart.length > 0 && (
            <div className="">
              <div className="">
                <div className="flex justify-between">
                  <div>
                    <button
                      className="border border-black text-black px-2 w-full rounded-md py-3"
                      onClick={() => toast("update your cart...")}
                    >
                      Update Cart
                    </button>
                  </div>
                  <div>
                    <button
                      className="border border-black text-black px-2 w-full rounded-md py-3"
                      onClick={() => toast("Proceeding to all products...")}
                    >
                      Return to shop
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-end ">
                <div className="w-1/2 bg-white shadow-md p-4 rounded-md">
                  <h2>Total: ${total.toFixed(2)}</h2>
                  <Link href={"/payments"}>
                    <Button
                      className="w-full py-4 bg-red-500 my-4 capitalize"
                      onClick={() => toast.success("proceed to checkout...")}
                    >
                      checkout your order
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
