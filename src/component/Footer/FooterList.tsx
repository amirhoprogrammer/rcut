import React from "react";
//interface FooterLi {
//  listItemsName: string;
//  listItemLink: string;
//}
interface FooterItems {
  title: string;
  listItems: string[];
}
export default function FooterList({ items }: { items: FooterItems }) {
  return (
    <div className="px-2 py-2 w-full h-full flex flex-col overflow-hidden gap-4">
      <h3 className="flex text-2xl">{items.title}</h3>
      <ul className="flex flex-col gap-2">
        {items.listItems.map((item, id) => (
          <li className="flex text-base" key={id}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
