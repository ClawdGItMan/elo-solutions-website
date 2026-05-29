import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Capabilities } from "@/components/Capabilities";
import { Work } from "@/components/Work";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { ScrollEffects } from "@/components/ScrollEffects";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Capabilities />
        <Work />
        <Process />
        <About />
        <Cta />
      </main>
      <Footer />
      <ScrollEffects />
    </>
  );
}
