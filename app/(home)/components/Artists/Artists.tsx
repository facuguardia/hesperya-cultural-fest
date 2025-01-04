"use client";

import { motion } from "framer-motion";
import { ArtistCard } from "./components/ArtistCard/ArtistCard";
import { ArtistGrid } from "./components/ArtistGrid";

const artists = [
  {
    name: "El Langui",
    date: "28/12",
    image: "art-1.png",
  },
  {
    name: "O'Funk'Illo",
    date: "29/12",
    image: "art-2.png",
  },
  {
    name: "Fausto Taranto",
    date: "29/12",
    image: "art-3.png",
  },
];

export function Artists() {
  return (
    <section id="artists" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <ArtistCard
              key={artist.name}
              name={artist.name}
              date={artist.date}
              image={artist.image}
            />
          ))}
        </div>
      </div>

      <ArtistGrid />
    </section>
  );
}
