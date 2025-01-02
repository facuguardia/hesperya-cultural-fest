import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About";
import { Artists } from "./components/Artists";
export default function Home() {
  return (
    <div className="w-full h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Artists />
    </div>
  );
}

