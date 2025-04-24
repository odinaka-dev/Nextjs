"use client";

import useCartStore from "@/components/Store/cartStore";
import { Checkbox } from "@/components/pages/Bill/checkbox";
import toast from "react-hot-toast";

export default function payment() {

    // getting the purchased items
    const cart = useCartStore((state) => state.cart);
    const total = useCartStore((state) => state.getTotal());

  return (
    <div className="max-w-[80%] mx-auto my-12">
      <h1 className="text-3xl font-semibold capitalize">Billing details</h1>
      <div className="bill-forms grid grid-cols-[60%_40%] gap-8">
        <form action="" className="pr-32">
          <div className="flex flex-col my-4 gap-4">
            <label htmlFor="" className="text-gray-500">
              First name
            </label>
            <input
              type="text"
              className="border border-gray-300 py-3 px-2 rounded-md cursor-pointer outline-none"
            />
          </div>
          <div className="flex flex-col my-4 gap-4">
            <label htmlFor="" className="text-gray-500">
              Company name
            </label>
            <input
              type="text"
              className="border border-gray-300 py-3 px-2 rounded-md cursor-pointer outline-none"
            />
          </div>
          <div className="flex flex-col my-4 gap-4">
            <label htmlFor="" className="text-gray-500">
              Street address
            </label>
            <input
              type="text"
              className="border border-gray-300 py-3 px-2 rounded-md cursor-pointer outline-none"
            />
          </div>
          <div className="flex flex-col my-4 gap-4">
            <label htmlFor="" className="text-gray-500">
              Phone Number
            </label>
            <input
              type="number"
              className="border border-gray-300 py-3 px-2 rounded-md cursor-pointer outline-none"
            />
          </div>
          <div className="flex flex-col my-4 gap-4">
            <label htmlFor="" className="text-gray-500">
              email
            </label>
            <input
              type="email"
              className="border border-gray-300 py-3 px-2 rounded-md cursor-pointer outline-none"
            />
          </div>
          <div className="flex flex-col my-4 gap-4">
            <label htmlFor="" className="text-gray-500">
              Town/city
            </label>
            <input
              type="text"
              className="border border-gray-300 py-3 px-2 rounded-md cursor-pointer outline-none"
            />
          </div>
          <div className="flex my-4 gap-2 items-center" onClick={() => toast.success('information saved successfully.')}>
            <Checkbox />
            <p>Save your information for easy purchase.</p>
          </div>
        </form>
        <div className="cart_info mt-8">
          <div className="cart_lists">
            {cart.map((item) => (
              <div
                className="flex justify-between items-center py-4 overflow-auto max-h-[60%] border-b border-b-gray-300"
                key={item.id}
              >
                <div className="img flex gap-2 items-center">
                  <img src={item.image} alt="" width={50} height={50} />
                  <span className="font-semibold w-1/2">{item.title}</span>
                </div>
                <div className="price">
                  <p>${item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="flex justify-between items-center py-4 px-4 border-b border-gray-300">
              <h1>Total:</h1>
              <h2>${total.toFixed(2)}</h2>
            </div>
            <div className="btn">
              <button
                className="w-full py-3 rounded-md bg-red-500 text-white font-normal cursor-pointer"
                onClick={() => toast.success("order placed successfully...")}
              >
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
