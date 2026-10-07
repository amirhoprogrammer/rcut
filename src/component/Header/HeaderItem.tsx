"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface ItemInHeader {
  name: string;
  headerLink: string;
  hasDropdown?: boolean;
}

export default function HeaderItem({ items }: { items: ItemInHeader }) {
  const pathname = usePathname();
  const isActive =
    items.headerLink === "/"
      ? pathname === "/"
      : pathname.startsWith(items.headerLink);

  return (
    <Link
      href={items.headerLink}
      className={`relative flex items-center gap-x-1 py-2 text-[15px] font-medium transition-colors hover:text-brand ${
        isActive ? "text-brand" : "text-foreground"
      }`}
    >
      {items.name}

      {items.hasDropdown && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      )}

      {/* خط زیر لینک فعال */}
      {isActive && (
        <span className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded bg-brand" />
      )}
    </Link>
  );
}
