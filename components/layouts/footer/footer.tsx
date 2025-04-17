import React from "react";
import styles from "./footer.module.scss";
import Image from "next/image";
// react icons imports
import { BsGithub, BsInstagram, BsTwitterX } from "react-icons/bs";
import FooterImage from "@/public/next.svg";

export default function Footer() {
  return (
    <div className={`${styles.footer} flex justify-between items-center`}>
      <div>
        <Image src={FooterImage} alt="" width={60} height={60} />
      </div>
      <div className="flex gap-8 items-center">
        <p className={`${styles.p}`}>
          <span>
            <BsGithub />
          </span>
          <span>Github</span>
        </p>
        <p className={`${styles.p}`}>
          <span>
            <BsInstagram />
          </span>
          <span>Instagram</span>
        </p>
        <p className={`${styles.p}`}>
          <span>
            <BsTwitterX />
          </span>
          <span>Twitter</span>
        </p>
      </div>
    </div>
  );
}
