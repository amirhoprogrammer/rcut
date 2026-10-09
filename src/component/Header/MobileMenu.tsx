"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import type { HeaderLink } from "./HeaderItem";

export default function MobileMenu({ items }: { items: HeaderLink[] }) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [activeId, setActiveId] = useState("home");

  // قفل اسکرول صفحه وقتی منو بازه + بستن با Escape
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // اگه صفحه بزرگ شد (>=1024) منو بسته بشه
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 64rem)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  function go(id: string) {
    setActiveId(id);
    setOpen(false);
    // صبر می‌کنیم قفل اسکرول برداشته بشه، بعد اسکرول کنیم
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }

  return (
    <>
      {/* دکمه همبرگری */}
      <button
        type="button"
        aria-label="باز کردن منو"
        onClick={() => setOpen(true)}
        className="flex size-11 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:border-brand hover:text-brand lg:hidden"
      >
        <Menu className="size-5" />
      </button>

      {/* پس‌زمینه تیره و تار */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-60 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* پنل کشویی (از راست) */}
      <aside
        dir="rtl"
        className={`fixed right-0 top-0 z-70 flex h-full w-[85%] max-w-sm flex-col bg-background shadow-2xl transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* بالای پنل */}
        <div className="flex items-center justify-between border-b border-border p-4">
          <Image
            src="/logo2.webp"
            alt="آرکات"
            width={90}
            height={45}
            className="h-auto w-20"
          />
          <button
            type="button"
            aria-label="بستن منو"
            onClick={() => setOpen(false)}
            className="flex size-11 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:border-brand hover:text-brand"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* لیست آیتم‌ها */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="flex flex-col gap-1">
            {items.map((item) => {
              const isActive = activeId === item.id && !item.children;
              const isOpen = expanded === item.name;

              return (
                <li key={item.name}>
                  <button
                    type="button"
                    onClick={() =>
                      item.children
                        ? setExpanded(isOpen ? null : item.name)
                        : go(item.id)
                    }
                    className={`flex w-full cursor-pointer items-center justify-between rounded-xl px-4 py-3.5 text-right text-[15px] font-semibold transition-colors ${
                      isActive
                        ? "bg-secondary text-brand"
                        : "text-foreground/80 hover:bg-secondary-bg"
                    }`}
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown
                        className={`size-4 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* زیرمنو (آکاردئونی) */}
                  {item.children && (
                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <ul className="overflow-hidden">
                        {item.children.map((child) => (
                          <li key={child.name}>
                            <button
                              type="button"
                              onClick={() => go(child.id)}
                              className="w-full cursor-pointer rounded-lg py-3 pr-8 text-right text-sm text-foreground/70 transition-colors hover:bg-secondary hover:text-brand"
                            >
                              {child.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
