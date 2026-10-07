import type { Metadata } from "next";
import { iranYekan } from "./fonts";
import Headers from "./Headers/page";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "آرکات | تامین ابزارهای تخصصی ماشین‌کاری",
  description:
    "ارائه ابزارهای تراشکاری، فرزکاری و CNC با کیفیت بالا برای صنایع مختلف",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={cn("font-sans", geist.variable)}>
      <body className="font-sans antialiased">
        <Headers />
        {children}
      </body>
    </html>
  );
}
