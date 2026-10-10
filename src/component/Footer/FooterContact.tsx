import React from "react";
import { FooterItems } from "./FooterList";
const isPhoneNumber = (value: string | number): boolean => {
  return /^[\d\s\-\+()]+$/.test(String(value));
};

const renderItem = (item: string | number) => {
  const text = String(item);
  const parts = text.split("<br>");

  return parts.map((part, i) => (
    <React.Fragment key={i}>
      {part}
      {i < parts.length - 1 && <br />}
    </React.Fragment>
  ));
};

export default function FooterContact({ items }: { items: FooterItems }) {
  return (
    <div className="px-2 py-2 w-full h-full flex flex-col overflow-hidden gap-4">
      <h3 className="text-footer-foreground text-lg font-bold">
        {items.title}
      </h3>
      <ul className="text-footer-muted mt-6 space-y-3 text-sm leading-7">
        {items.listItems.map((item, id) => {
          const isPhone = isPhoneNumber(item);

          return (
            <li key={id} dir={isPhone ? "ltr" : "rtl"}>
              {renderItem(item)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
