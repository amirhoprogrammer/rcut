import Image from "next/image";
import HeaderItem, { HeaderLink } from "./HeaderItem";
import "../../app/globals.css";
import MobileMenu from "./MobileMenu";
import { Search } from "lucide-react";
const HeaderItems: HeaderLink[] = [
  { name: "خانه", id: "home" },
  {
    name: "محصولات",
    id: "products",
    children: [
      { name: "الماس", id: "products" },
      { name: "فرز انگشتی", id: "products" },
      { name: "مته", id: "products" },
      { name: "قلاویز", id: "products" },
      { name: "اندازه‌گیری", id: "products" },
      { name: "هولدر", id: "products" },
    ],
  },
  { name: "نمایندگی یاماسا", id: "yamasa" },
  { name: "درباره ما", id: "about" },
  { name: "تماس با ما", id: "contact" },
  { name: "سوالات متداول", id: "faq" },
];
export default function Header() {
  return (
    <header className="relative z-50 w-full border-b border-border bg-background/95">
      {/* 100px = 25 */}
      <div className="flex items-center justify-between w90 h-25 ">
        <div className="flex items-center lg:hidden">
          <MobileMenu items={HeaderItems} />
        </div>
        <div className="logo shrink-0">
          {/* 100px = 25 , 90px = 22.5, 80px = 20, 60px = 15 , 50px = 12.5 */}
          <Image
            src={"/logo2.webp"}
            alt={"logo"}
            width={90}
            height={90}
            className="w-15 h-12.5 md:w-20 md:h-16 lg:w-22.5 lg:h-20"
          />
        </div>
        <nav className="hidden items-center gap-x-6 lg:flex 2xl:gap-x-8">
          {HeaderItems.map((item) => (
            <HeaderItem key={item.name} items={item} />
          ))}
        </nav>
        {/*230px = 57.5, 42px =10.5*/}
        <div className="shrink-0 hidden lg:block">
          <div className="relative w-57.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
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
              focus:border-brand"
            />
          </div>
        </div>
        <button
          type="button"
          aria-label="جستجو"
          className="flex size-11 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:border-brand hover:text-brand lg:hidden"
        >
          <Search className="size-5" />
        </button>
      </div>
    </header>
  );
}
