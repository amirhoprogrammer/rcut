import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
interface CardItems {
  imageUrl: string;
  alt: string;
  title: string;
  text: string;
  buttonText: string;
}

export default function Card({ items }: { items: CardItems }) {
  return (
    <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      <Image src={items.imageUrl} alt={items.alt} width={0} height={0} />
      <div className="flex flex-col items-center justify-between">
        <div className="flex flex-col gap-5">
          <div>
            <h3 className="text-foreground min-h-6 text-base font-bold">
              {items.title}
            </h3>
          </div>
          <div>
            {/* 48px = 12 */}
            <p className="text-muted-foreground mt-3 line-clamp-2 min-h-12 text-sm leading-6">
              {items.text}
            </p>
          </div>
        </div>
        <div>
          <Button
            className="bg-custom-primary w-full cursor-pointer rounded-lg py-2.5 text-[15px] font-semibold text-white transition-colors duration-300"
            value={items.buttonText}
          />
        </div>
      </div>
    </div>
  );
}
