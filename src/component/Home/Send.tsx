import React from "react";
import Title from "./Title";
import { Boxes, Package, Truck } from "lucide-react";
import Icon from "./Icon";
const titleSend = {
  title: "روش‌های ارسال",
  text: "سفارش‌های شما با روش‌های مطمئن و متناسب با نیازتان ارسال می‌شود",
};
//48px = 12 , 36px = 9 , 24px = 6
const icons = [
  {
    icon: (
      <Truck
        className="w-6 h-6 md:w-9 md:h-9 lg:w-12 lg:h-12 text-brand"
        strokeWidth={1.5}
      />
    ),
    title: "باربری",
  },
  {
    icon: (
      <Package
        className="w-6 h-6 md:w-9 md:h-9 lg:w-12 lg:h-12 text-brand"
        strokeWidth={1.5}
      />
    ),
    title: "پست",
  },
  {
    icon: (
      <Boxes
        className="w-6 h-6 md:w-9 md:h-9 lg:w-12 lg:h-12 text-brand"
        strokeWidth={1.5}
      />
    ),
    title: "تیپاکس",
  },
];
export default function Send() {
  return (
    // 14px = 3.5
    <section className="py-20">
      <div className="w90">
        {/* عنوان */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-foreground ">
            {titleSend.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{titleSend.text}</p>
        </div>

        {/* آیتم‌ها */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-3">
          {icons.map((item, index) => (
            <div
              key={item.title}
              className={
                index !== icons.length - 1 ? "border-l border-border" : ""
              }
            >
              <Icon items={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
