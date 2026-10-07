import Link from "next/link";

interface ItemInHeader {
  name: string;
  headerLink: string;
}

export default function HeaderItem({ items }: { items: ItemInHeader }) {
  return (
    <div className="flex">
      <Link href={items.headerLink}>
        <div className="font-black">{items.name}</div>
      </Link>
    </div>
  );
}
