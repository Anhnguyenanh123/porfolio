import gsap from "gsap";
import { Draggable } from "gsap/all";

import {
  Terminal,
  Safari,
  Resume,
  Finder,
  Text,
  Image,
  Contact,
} from "#windows";
import { Navbar, Welcome, Dock } from "@/components";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main className="text-3xl font-bold text-center">
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Image />
      <Text />
      <Contact />
    </main>
  );
};

export default App;
