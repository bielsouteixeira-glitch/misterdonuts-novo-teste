import { Flavors } from "./components/Flavors";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { InstagramCta } from "./components/InstagramCta";
import { Locations } from "./components/Locations";
import { Marquee } from "./components/Marquee";
import { Story } from "./components/Story";
import { Videos } from "./components/Videos";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-cream-100">
      <Header />
      <main id="conteudo" className="flex-1">
        <Hero />
        <Marquee />
        <Flavors />
        <Story />
        <Videos />
        <Gallery />
        <Locations />
        <InstagramCta />
      </main>
      <Footer />
    </div>
  );
}
