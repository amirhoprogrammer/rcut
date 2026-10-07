import React from "react";
import ProductTitle from "./ProductTitle";
import { value } from "./ProductSelection";
const ProductTitles = {
  title: "محصولات جدید",
  text: "جدیدترین ابزارهای اضافه شده به مجموعه آرکات",
};
export default function ProductNew() {
  return (
    <section className="py-24">
      <div className="w90" dir="rtl">
        <ProductTitle items={ProductTitles} value={value} />
      </div>
    </section>
  );
}
