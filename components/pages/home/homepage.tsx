import React, { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";

// imports for the scss files
import styles from "./modules/home.module.scss";

// imports for the images and icons
import Image from "next/image";
import { Images } from "@/components/constants/image";
import { FaArrowRight } from "react-icons/fa6";

export default function HomeContent() {
  const CategoryLinks = [
    {
      id: 1,
      links: "/",
      label: "women's Fashion",
    },
    {
      id: 2,
      links: "/",
      label: "men's Fashion",
    },
    {
      id: 3,
      links: "/",
      label: "Electronics",
    },
    {
      id: 4,
      links: "/",
      label: "Home and lifestyle",
    },
    {
      id: 5,
      links: "/",
      label: "medicine",
    },
    {
      id: 6,
      links: "/",
      label: "Sports and outdoor",
    },
    {
      id: 7,
      links: "/",
      label: "Babies and Toys",
    },
    {
      id: 8,
      links: "/",
      label: "Groceries and pets",
    },
    {
      id: 9,
      links: "/",
      label: "Health and Beauty",
    },
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-4">
      <div className="grid grid-cols-[20%_80%]">
        <div className="navbar_contents border-r border-r-gray-300 mr-4">
          <ul className="flex flex-col gap-6 items-start text-sm text-balance py-4">
            {CategoryLinks.map((item) => (
              <Link href={item.links} key={item.id}>
                <li className={`cursor-pointer`}>{item.label}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="banner_section flex justify-between items-center bg-black px-4 py-8 m-4">
          <div className="relative left-10">
            <div className="flex gap-4 items-center">
              <Image
                src={Images.Apple}
                alt="apple_store"
                width={30}
                height={30}
              />
              <p className={`${styles.textcontents}`}>
                Nextjs store to get all you want
              </p>
            </div>
            <div className={`${styles.textcontents}`}>
              <h1 className={`${styles.h1}`}>Up to 10% off Voucher</h1>
              <div className="btn">
                <button className="font-medium flex gap-2 items-center border-b border-b-white py-2 px-4 cursor-pointer hover:bg-white hover:text-gray-800 duration-300">
                  shop now{" "}
                  <span>
                    <FaArrowRight />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <Image
              src={Images.Hero}
              alt="hero-banner"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
