import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Mixes } from "./components/Mixes";
import { Gallery } from "./components/Gallery";
import { Portfolio } from "./components/Portfolio";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <About />
      <Mixes />
      <Gallery />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  );
}
