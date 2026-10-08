import Link from "next/link";
import React from "react";
//interface FooterLi {
//  listItemsName: string;
//  listItemLink: string;
//}
type numstr = string | number;
export interface FooterItems {
  title: string;
  listItems: numstr[];
}
export default function FooterList({ items }: { items: FooterItems }) {
  return (
    <div className="px-2 py-2 w-full h-full flex flex-col overflow-hidden gap-4">
      <h3 className="text-footer-foreground text-lg font-bold">
        {items.title}
      </h3>
      <ul className="text-footer-muted mt-6 space-y-4 text-sm">
        {items.listItems.map((item, id) => (
          <li key={id}>
            <Link
              className="hover:text-brand transition-colors duration-300"
              href="#"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
