import React from "react";
import Navbar from "@/components/layouts/navbar/navbar";
import Footer from "@/components/layouts/footer/footer";

type MainLayout = { children: React.ReactNode };

export default function MainLayout({ children }: MainLayout) {
  return (
    <div className="">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
