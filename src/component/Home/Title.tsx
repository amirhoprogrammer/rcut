import React from "react";
interface TextTitle {
  title: string;
  text: string;
}

export default function Title({ items }: { items: TextTitle }) {
  return (
    <div>
      <div>
        <h2 className="text-foreground text-2xl font-bold sm:text-3xl lg:text-4xl text-right">
          {items.title}
        </h2>
      </div>
      <div>
        <p className="text-muted-foreground mt-3 text-right">{items.text}</p>
      </div>
    </div>
  );
}
