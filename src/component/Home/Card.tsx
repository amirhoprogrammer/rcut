import Image from "next/image";
import { Button } from "@/components/ui/button";
export interface CardItems {
  imageUrl: string;
  alt: string;
  title: string;
  text: string;
}
export default function Card({ items }: { items: CardItems }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-brand">
      {/* aspect-[4/3] = aspect-4/3 */}
      <div className="relative block aspect-square shrink-0">
        <Image
          src={items.imageUrl}
          alt={items.alt}
          fill
          sizes="(min-width:1536px) 20vw, (min-width:1280px) 25vw, (min-width:768px) 33vw, (min-width:640px) 50vw, 100vw"
          className="object-contain p-4"
        />
      </div>

      {/* متن */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold text-foreground">{items.title}</h3>
        <p className="mt-3 line-clamp-2 min-h-12 text-sm leading-6 text-muted-foreground ">
          {items.text}
        </p>
        {/* pt-8 = حداقل ۳۲px فاصله بین متن و دکمه */}
        <div className="mt-8">
          <Button size="full" className="text-base font-semibold">
            استعلام قیمت
          </Button>
        </div>
      </div>
    </div>
  );
}
