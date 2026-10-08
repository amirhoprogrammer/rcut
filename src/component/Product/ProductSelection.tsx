import React from "react";
import ProductTitle from "./ProductTitle";
import ProductGrid from "../Home/ProductGrid";
import { ProductSelectionItem } from "@/Data/productSelection";

const ProductTitles = {
  title: "محصولات منتخب آرکات",
  text: "انتخابی از ابزارهای تخصصی ماشین‌کاری",
};
export const value = "مشاهده همه محصولات";
export default function ProductSelection() {
  return (
    <section className="py-24">
      <div className="w90" dir="rtl">
        <ProductTitle items={ProductTitles} value={value} />
        <ProductGrid products={ProductSelectionItem} />
      </div>
    </section>
  );
}
