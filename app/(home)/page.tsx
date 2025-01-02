import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About";
import { Artists } from "./components/Artists";
import { Activities } from "./components/Activities";
import { CTA } from "./components/CTA";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="w-full h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Artists />
      <Activities />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

