import React from "react";
import ProductTitle from "./ProductTitle";
import { value } from "./ProductSelection";
import ProductGrid from "../Home/ProductGrid";
import { ProductSelectionItem } from "@/Data/productSelection";
const ProductTitles = {
  title: "محصولات جدید",
  text: "جدیدترین ابزارهای اضافه شده به مجموعه آرکات",
};
export default function ProductNew() {
  return (
    <section className="py-24">
      <div className="w90" dir="rtl">
        <ProductTitle items={ProductTitles} value={value} />
        <ProductGrid products={ProductSelectionItem} />
      </div>
    </section>
  );
}
