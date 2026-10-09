"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    image: "/1.webp",
    title: "تامین ابزارهای تخصصی ماشین‌کاری",
    text: "ارائه ابزارهای تراشکاری، فرزکاری و CNC با کیفیت بالا برای صنایع مختلف",
  },
  {
    image: "/2.webp",
    title: "ابزارهای فرزکاری",
    text: "مجموعه‌ای از ابزارهای حرفه‌ای برای عملیات ماشین‌کاری",
  },
  {
    image: "/3.webp",
    title: "ابزارهای تراشکاری صنعتی",
    text: "انتخابی مناسب برای کارگاه‌ها و خطوط تولید",
  },
  {
    image: "/4.webp",
    title: "فرز انگشتی و ابزارهای برشی",
    text: "انتخاب مناسب ابزار برای افزایش بهره‌وری تولید",
  },
  {
    image: "/5.webp",
    title: "مته و ابزارهای سوراخکاری",
    text: "تامین ابزارهای دقیق برای کاربردهای صنعتی",
  },
  {
    image: "/6.webp",
    title: "قلاویز و ابزارهای رزوه‌زنی",
    text: "راهکارهای تخصصی برای ایجاد رزوه‌های دقیق",
  },
  {
    image: "/7.webp",
    title: "ابزارهای اندازه‌گیری دقیق",
    text: "کنترل کیفیت با تجهیزات اندازه‌گیری صنعتی",
  },
  {
    image: "/8.webp",
    title: "هولدر و سیستم‌های گیرشی",
    text: "تجهیزات نگهدارنده ابزار برای ماشین‌کاری حرفه‌ای",
  },
  {
    image: "/9.webp",
    title: "برندهای معتبر صنعتی",
    text: "همکاری با تولیدکنندگان مطرح ابزارهای ماشین‌کاری",
  },
];

export default function Hero() {
  const autoplay = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      direction: "rtl",
    },
    [autoplay.current]
  );

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="home" className="relative overflow-hidden" dir="rtl">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, i) => (
            <div
              key={slide.title}
              className="min-w-0 shrink-0 grow-0 basis-full"
            >
              {/* 700px = 175 , ۴۰۰px موبایل، ۴۵۰px، ۵۵۰px تبلت و ۷۰۰px دسکتاپ.*/}
              <div className="relative h-175 w-full overflow-hidden xs:h-112.5 md:h-137.5 xl:h-175">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="100vw"
                  priority={i === 0}
                  className="object-cover object-left lg:object-center"
                />
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative z-10 flex h-full items-center w90">
                  <div className="flex flex-col gap-6">
                    <h1 className="max-w-xl text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
                      {slide.title}
                    </h1>
                    <p className="max-w-xl text-white/80">{slide.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* فلش‌ها */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        <button
          onClick={prev}
          aria-label="قبلی"
          className="flex size-12 items-center justify-center rounded-2xl border border-white/30 bg-black/30 text-white backdrop-blur cursor-pointer hover:bg-brand"
        >
          <ArrowRight />
        </button>
        <button
          onClick={next}
          aria-label="بعدی"
          className="flex size-12 items-center justify-center rounded-2xl border border-white/30 bg-black/30 text-white backdrop-blur cursor-pointer hover:bg-brand"
        >
          <ArrowLeft />
        </button>
      </div>
    </section>
  );
}
