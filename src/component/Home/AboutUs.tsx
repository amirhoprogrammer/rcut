import React from "react";
const texts = {
  text1:
    "آرکات با هدف تامین ابزارهای تخصصی تراشکاری، قالب‌سازی و CNC فعالیت خود را آغاز کرده است. ما تلاش می‌کنیم با ارائه محصولات باکیفیت از برندهای معتبر، تجربه‌ای مطمئن و حرفه‌ای برای صنعتگران، تولیدکنندگان و کارگاه‌های ماشین‌کاری فراهم کنیم.",
  text2:
    "با تکیه بر تجربه، شناخت فنی و توجه به نیاز مشتریان، همواره در تلاش هستیم تا علاوه بر عرضه محصولات، در انتخاب ابزار مناسب نیز همراه شما باشیم.",
  text3:
    "هدف ما تنها فروش ابزار نیست، بلکه ایجاد یک مرجع قابل اعتماد برای  تامین ابزارهای صنعتی و ارائه اطلاعات تخصصی در این حوزه است.",
};
export default function AboutUs() {
  return (
    <section className="py-28">
      <div className="w90" dir="rtl">
        <div className="flex flex-col gap-10 sm:flex-col md:flex-col lg:flex-row ">
          <div className="leftside w-[90%] text-right lg:w-[52%] ">
            {/* [1.25] = tight */}
            <h2 className="about-brand-title text-6xl leading-tight font-bold xl:text-7xl">
              <span className="block text-foreground">دقت و کیفیت</span>
              <span className="mt-3 block text-brand">در هر انتخاب</span>
            </h2>
            {/* 3px = 0.75 */}
            <div className="about-brand-line bg-brand mt-8 h-0.75 w-40"></div>
            <p className="about-brand-description mt-6 max-w-sm text-lg leading-9 text-muted-foreground">
              همراه صنعتگران برای تامین ابزارهای دقیق و راهکارهای حرفه‌ای
              ماشین‌کاری
            </p>
          </div>
          <div className="rightside about-content text-right w-full lg:w-[48%]">
            <div className="space-y-7 text-lg leading-10 text-muted-foreground">
              <p>{texts.text1}</p>
              <p>{texts.text2}</p>
              <p>{texts.text3}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
