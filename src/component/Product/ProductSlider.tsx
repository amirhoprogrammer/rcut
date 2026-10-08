"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import Card, { CardItems } from "../Home/Card";

export default function ProductSlider({ products }: { products: CardItems[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    direction: "rtl",
    align: "start",
    slidesToScroll: 1,
  });

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="mt-12" dir="rtl">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {products.map((p) => (
            <div
              key={p.title}
              className="min-w-0 shrink-0 grow-0 basis-full px-3 sm:basis-1/2 md:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
            >
              <Card items={p} />
            </div>
          ))}
        </div>
      </div>

      {/* فلش‌ها */}
      <div className="mt-8 flex justify-end gap-2" dir="ltr">
        <Button
          variant="neutral"
          className="text-foreground"
          size="icon"
          onClick={next}
          aria-label="بعدی"
        >
          <ArrowLeft className="size-5" />
        </Button>
        <Button
          size="icon"
          variant="neutral"
          className="text-foreground"
          onClick={prev}
          aria-label="قبلی"
        >
          <ArrowRight className="size-5" />
        </Button>
      </div>
    </div>
  );
}
