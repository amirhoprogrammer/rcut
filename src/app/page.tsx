import About from "./About/page";
import Heros from "./Heros/page";
import Sends from "./Sends/page";

export default function Home() {
  return (
    <div>
      <Heros />
      <About />
      <Sends />
    </div>
  );
}
