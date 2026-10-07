import Image from "next/image";
import HeaderItem from "./HeaderItem";
import "../../app/globals.css";
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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur ">
      <div className="flex items-center justify-between w90 py-5">
        <div className="logo">
          <Image src={"/logo2.webp"} alt={"logo"} width={100} height={100} />
        </div>
        {/* منو */}
        <nav className="hidden items-center gap-x-6 lg:flex 2xl:gap-x-8">
          {HeaderItems.map((item) => (
            <HeaderItem key={item.name} items={item} />
          ))}
        </nav>
        {/*230px = 57.5, 42px =10.5*/}
        <div className="shrink-0">
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
      </div>
    </header>
  );
}
