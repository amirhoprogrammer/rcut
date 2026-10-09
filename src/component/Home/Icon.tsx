import { ReactNode } from "react";
interface IconTitle {
  icon: ReactNode;
  title: string;
}

export default function Icon({ items }: { items: IconTitle }) {
  return (
    <div className="group flex cursor-pointer flex-col items-center justify-center gap-4 px-4 py-2 text-center">
      <div className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">
        {items.icon}
      </div>
      <p className="text-lg font-medium md:font-semibold text-foreground transition-colors duration-300 group-hover:text-brand">
        {items.title}
      </p>
    </div>
  );
}
