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
    <div className="flex items-center justify-between">
      <Title items={items} />
      <Button variant="outline" className="px-7 py-3 ">
        {value}
      </Button>
    </div>
  );
}
