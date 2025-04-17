import React from "react";
import styles from "./modules/listbanner.module.scss";
// imports of components
import {ProductsApIs} from "@/components/api/products-api"

export default function ListBanner() {
  return (
    <div className={`max-w-[1200px] mx-auto w-full my-12`}>
      <h1 className={`${styles.h1}`}>Flash sales</h1>
      <div className="flash_sales">
        <div className="time"></div>
        <div className="">
          <ProductsApIs.ProductsApi />
        </div>
      </div>
    </div>
  );
}
