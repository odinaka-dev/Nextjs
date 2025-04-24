'use client';

import React from "react";
import Navbar from "@/components/layouts/navbar/navbar";
import Footer from "@/components/layouts/footer/footer";
import {Toaster} from "react-hot-toast";

type MainLayout = { children: React.ReactNode };

export default function MainLayout({ children }: MainLayout) {
  return (
    <div className="">
      <Toaster position="top-right" />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
