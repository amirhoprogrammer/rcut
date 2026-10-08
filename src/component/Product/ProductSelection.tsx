import React from "react";
import ProductTitle from "./ProductTitle";
import ProductGrid from "../Product/ProductGrid";
import { ProductSelectionItem } from "@/Data/productSelection";
import ProductSlider from "./ProductSlider";

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

        <ProductSlider products={ProductSelectionItem} />
      </div>
    </section>
  );
}
