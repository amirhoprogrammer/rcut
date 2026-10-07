import Image from "next/image";
import React from "react";
import HeaderItem from "./HeaderItem";
const HeaderItems = [
  { name: "خانه", headerLink: "#" },
  { name: "محصولات", headerLink: "#" },
  { name: "نمایندگی یاماسا", headerLink: "#" },
  { name: "درباره ما", headerLink: "#" },
  { name: "تماس با ما", headerLink: "#" },
  { name: "سوالات متداول", headerLink: "#" },
];
export default function Header() {
  return (
    <header className="flex items-center justify-between bg-background/95">
      <div className="w-90">
        <div className="logo">
          <Image
            src={"../../../public/logo2.webp"}
            alt={"logo"}
            sizes="300px"
          />
        </div>
        <div className="flex items-center gap-x-6 2xl:gap-x-8">
          <HeaderItem items={HeaderItems[0]} />
          <HeaderItem items={HeaderItems[1]} />
          <HeaderItem items={HeaderItems[2]} />
          <HeaderItem items={HeaderItems[3]} />
          <HeaderItem items={HeaderItems[4]} />
          <HeaderItem items={HeaderItems[5]} />
        </div>
        //230px = 57.5, 42px =10.5
        <div className="shrink-0">
          <div className="relative w-57.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-search text-muted-foreground absolute top-1/2 right-3 size-4 -translate-y-1/2"
              aria-hidden="true"
            >
              <path d="m21 21-4.34-4.34"></path>
              <circle cx="11" cy="11" r="8"></circle>
            </svg>
            <input
              type="search"
              placeholder="جستجوی محصول..."
              className="border-border bg-secondary-bg text-foreground placeholder:text-muted-foreground h-10.5 w-full rounded-lg border pr-10 pl-3 text-sm outline-none transition-colors
              focus:border-custom-primary"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
