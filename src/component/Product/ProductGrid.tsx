import Card, { CardItems } from "../Home/Card";

export default function ProductGrid({ products }: { products: CardItems[] }) {
  return (
    <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
      {products.map((p) => (
        <Card key={p.title} items={p} />
      ))}
    </div>
  );
}
