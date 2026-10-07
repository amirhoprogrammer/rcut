import type { Metadata } from "next";
//import { iranYekan } from "./fonts";
import "./globals.css";

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
    <html lang="fa" dir="rtl">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
