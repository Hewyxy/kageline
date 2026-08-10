import { useGlobalReveal } from "./hooks/useReveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Shop from "./components/Shop";
import Builds from "./components/Builds";
import Events from "./components/Events";
import Club from "./components/Club";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useGlobalReveal();

  return (
    <div className="grain min-h-screen bg-bg">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Shop />
        <Builds />
        <Events />
        <Club />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
