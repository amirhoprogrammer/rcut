"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export interface HeaderLink {
  name: string;
  id: string;
  children?: { name: string; id: string }[];
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function HeaderItem({ items }: { items: HeaderLink }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const el = document.getElementById(items.id);

    const observer = el
      ? new IntersectionObserver(
          ([entry]) => setIsActive(entry.isIntersecting),
          { rootMargin: "-30% 0px -60% 0px" }
        )
      : null;
    if (el) observer?.observe(el);

    const onScroll = () => {
      if (items.id === "home") setIsActive(window.scrollY < 100);
    };
    if (items.id === "home") {
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [items.id]);

  return (
    <div className="group relative">
      <button
        type="button"
        onClick={() => scrollToSection(items.id)}
        className={`relative flex cursor-pointer items-center gap-x-1 py-2 text-[15px] font-semibold transition-colors group-hover:text-brand ${
          isActive ? "text-brand" : "text-foreground/75"
        }`}
      >
        {items.name}

        {items.children && (
          <ChevronDown className="size-4 transition-transform duration-300 group-hover:rotate-180" />
        )}

        <span
          className={`absolute -bottom-1 right-0 h-0.5 w-full origin-right rounded bg-brand transition-transform duration-300 group-hover:scale-x-100 ${
            isActive ? "scale-x-100" : "scale-x-0"
          }`}
        />
      </button>

      {items.children && (
        <div className="invisible absolute right-0 top-full z-50 translate-y-2 pt-4 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
          <ul className="w-60 rounded-xl border border-border bg-background p-2 shadow-lg">
            {items.children.map((child) => (
              <li key={child.name}>
                <button
                  type="button"
                  onClick={() => scrollToSection(child.id)}
                  className="relative block w-full cursor-pointer rounded-lg px-4 py-3 text-right text-sm text-foreground/75 transition-colors duration-200 hover:bg-secondary hover:text-brand"
                >
                  {child.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
