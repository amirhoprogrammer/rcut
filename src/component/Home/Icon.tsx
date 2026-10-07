import { ReactNode } from "react";
interface IconTitle {
  icon: ReactNode;
  title: string;
}

export default function Icon({ items }: { items: IconTitle }) {
  return (
    <div className="relative flex flex-col items-center justify-center gap-5 px-8 text-center">
      {items.icon}
      <p className="font-semibold text-xl">{items.title}</p>
    </div>
  );
}
