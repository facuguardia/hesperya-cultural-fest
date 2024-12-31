import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";


export default function Home() {
  return (
    <div className="w-full h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Hero />
    </div>
  );
}

