import gsap from "gsap";
import { Draggable } from "gsap/all";

import { Terminal } from "#windows";
import { Navbar, Welcome, Dock } from "@/components";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main className="text-3xl font-bold text-center">
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
    </main>
  );
};

export default App;
