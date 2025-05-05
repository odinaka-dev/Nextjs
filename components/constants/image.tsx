import { StaticImageData } from "next/image";
// imports for the images
import Hero from "@/public/assets/img/Hero.png";
import Apple from "@/public/assets/img/apple.png";
import HeroAuth from "@/public/assets/img/login.avif";

// imports for the icons
import CategoryCamera from "@/public/assets/icons/Category-Camera.png";
import categoryComputer from "@/public/assets/icons/Category-Computer.png";
import categoryCellphone from "@/public/assets/icons/Category-CellPhone.png";
import CategorySmartWatch from "@/public/assets/icons/Category-SmartWatch.png";
import categoryGamepad from "@/public/assets/icons/Category-Gamepad.png";
import categoryHeadphone from "@/public/assets/icons/Category-Headphone.png";

interface ImageProps {
  Hero: StaticImageData;
  Apple: StaticImageData;
  HeroAuth: StaticImageData;
}

interface IconProps {
  CategoryCamera: StaticImageData;
  categoryComputer: StaticImageData;
  categoryCellphone: StaticImageData;
  CategorySmartWatch: StaticImageData;
  categoryGamepad: StaticImageData;
  categoryHeadphone: StaticImageData;
}

export const Images: ImageProps = { Hero, Apple, HeroAuth };

export const Icons: IconProps = {
  CategoryCamera,
  categoryCellphone,
  categoryComputer,
  CategorySmartWatch,
  categoryGamepad,
  categoryHeadphone,
};
