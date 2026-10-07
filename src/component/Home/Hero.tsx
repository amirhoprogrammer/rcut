"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    image: "/1.webp",
    title: "تامین ابزارهای تخصصی ماشین‌کاری",
    text: "ارائه ابزارهای تراشکاری، فرزکاری و CNC با کیفیت بالا برای صنایع مختلف",
  },
  {
    image: "/2.webp",
    title: "ابزارهای تراشکاری صنعتی",
    text: "انتخابی مناسب برای کارگاه‌ها و خطوط تولید",
  },
];

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    direction: "rtl",
  });

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="relative overflow-hidden" dir="rtl">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, i) => (
            <div
              key={slide.title}
              className="min-w-0 shrink-0 grow-0 basis-full"
            >
              {/* 700px = 175 */}
              <div className="relative h-175 w-full overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="100vw"
                  priority={i === 0}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative z-10 flex h-full items-center w90">
                  <div className="">
                    <h1 className="max-w-xl text-4xl font-bold leading-tight text-white md:text-5xl">
                      {slide.title}
                    </h1>
                    <p className="mt-4 max-w-xl text-white/80">{slide.text}</p>
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
          className="flex size-12 items-center justify-center rounded-2xl border border-white/30 bg-black/30 text-white backdrop-blur hover:bg-brand"
        >
          <ArrowRight />
        </button>
        <button
          onClick={next}
          aria-label="بعدی"
          className="flex size-12 items-center justify-center rounded-2xl border border-white/30 bg-black/30 text-white backdrop-blur hover:bg-brand"
        >
          <ArrowLeft />
        </button>
      </div>
    </section>
  );
}
