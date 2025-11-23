import { Navbar, Welcome, Dock } from "@/components";

const App = () => {
  return (
    <main className="text-3xl font-bold text-center">
      <Navbar />
      <Welcome />
      <Dock />
    </main>
  );
};

export default App;
