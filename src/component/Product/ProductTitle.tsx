import React from "react";
import Title from "../Home/Title";
import { TextTitle } from "@/utils/type";
import { Button } from "@/components/ui/button";
export default function ProductTitle({
  items,
  value,
}: {
  items: TextTitle;
  value: string;
}) {
  return (
    <div className="flex flex-col items-start gap-6 xls:flex-row xls:items-center xls:justify-between">
      <Title items={items} />
      <Button variant="outline" className="px-7 py-3 ">
        {value}
      </Button>
    </div>
  );
}
