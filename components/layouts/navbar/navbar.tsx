"use client";

import React from "react";
import Image from "next/image";
import Imgpic from "@/public/next.svg";
import { useRouter } from "next/navigation";

import styles from "./navbar.module.scss";

const Navbar = () => {
  const navLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "  All Products",
      href: "/products",
    },
    {
      label: "Contact Us",
      href: "/contact",
    },
  ];

  const router = useRouter();

  return (
    <nav className="border-b border-b-gray-300">
      <div className={`${styles.navbar}`}>
        <div className="">
          <Image src={Imgpic} alt="" width={60} height={60} />
        </div>
        <div className="flex gap-8 items-center">
          {navLinks.map((link) => (
            <button key={link.label} onClick={() => router.push(link.href)}>
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
