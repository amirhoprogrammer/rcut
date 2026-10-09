import React from "react";
import FooterList from "./FooterList";
import { FooterContactItem, FooterLists } from "@/Data/FooterLists";
import Image from "next/image";
import FooterContact from "./FooterContact";
const imageUrls = ["/insta.png", "/whatsapp.jpg", "/bale.webp", "/eita.png"];

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-footer-foreground">
      <div className="w90 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <FooterList items={FooterLists[0]} />
          <FooterList items={FooterLists[1]} />
          <FooterList items={FooterLists[2]} />
          <FooterContact items={FooterContactItem} />
        </div>
      </div>
      <div className="border-footer-border border-t ">
        <div
          className="w90 flex flex-col gap-5 items-center lg:flex-row lg:justify-between py-5"
          dir="rtl"
        >
          <p className="text-sm">
            کلیه حقوق مادی و معنوی این وب‌سایت متعلق به آرکات است.
          </p>
          <div className="flex gap-3">
            {/* 30px = 7.5 , 40px = 10, 50px = 12.5*/}
            <Image
              src={imageUrls[0]}
              alt="insta"
              width={50}
              height={50}
              className="w-7.5 h-7.5 md:w-10 md:h-10 lg:w-12.5 lg:h-12.5"
            />
            <Image
              src={imageUrls[1]}
              alt="whatsapp"
              width={50}
              height={50}
              className="w-7.5 h-7.5 md:w-10 md:h-10 lg:w-12.5 lg:h-12.5"
            />
            <Image
              src={imageUrls[2]}
              alt="bale"
              width={50}
              height={50}
              className="w-7.5 h-7.5 md:w-10 md:h-10 lg:w-12.5 lg:h-12.5"
            />
            <Image
              src={imageUrls[3]}
              alt="eitaa"
              width={50}
              height={50}
              className="w-7.5 h-7.5 md:w-10 md:h-10 lg:w-12.5 lg:h-12.5"
            />
          </div>
          <p className="text-sm">طراحی و توسعه توسط آتی هوش بنیان</p>
        </div>
      </div>
    </footer>
  );
}
