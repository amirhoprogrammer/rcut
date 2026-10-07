import ProductSelection from "@/component/Product/ProductSelection";
import About from "./About/page";
import Heros from "./Heros/page";
import Sends from "./Sends/page";
import ProductSelections from "./ProductSelections/page";
import ProductsNew from "./ProductsNew/page";

export default function Home() {
  return (
    <div>
      <Heros />
      <ProductSelections />
      <About />
      <ProductsNew />
      <Sends />
    </div>
  );
}
