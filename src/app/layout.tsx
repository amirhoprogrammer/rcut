import type { Metadata } from "next";
import { iranYekan } from "./fonts";
import Headers from "./Headers/page";
import "./globals.css";
import Footers from "./Footers/page";

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
    <html lang="fa" dir="rtl" className={iranYekan.variable}>
      <body className="font-sans antialiased">
        <Headers />
        {children}
        <Footers />
      </body>
    </html>
  );
}
