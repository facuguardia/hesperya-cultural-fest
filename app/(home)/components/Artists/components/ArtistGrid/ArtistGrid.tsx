import Image from "next/image";
import { motion } from "framer-motion";

interface Artist {
  id: number;
  name: string;
  image: string;
  category?: string;
}

const artists: Artist[] = [
  {
    id: 1,
    name: "Tino JJ",
    image: "/images/art-4.jpg",
    category: "EDM",
  },
  {
    id: 2,
    name: "Megara",
    image: "/images/art-5.jpg",
    category: "EDM",
  },
  {
    id: 3,
    name: "Talim",
    image: "/images/art-6.jpg",
    category: "Electronic",
  },
  {
    id: 4,
    name: "El Don",
    image: "/images/art-7.jpg",
    category: "Electronic",
  },
  {
    id: 5,
    name: "Tino JJ",
    image: "/images/art-4.jpg",
    category: "EDM",
  },
  {
    id: 6,
    name: "Megara",
    image: "/images/art-5.jpg",
    category: "EDM",
  },
  {
    id: 7,
    name: "Talim",
    image: "/images/art-6.jpg",
    category: "Electronic",
  },
  {
    id: 8,
    name: "El Don",
    image: "/images/art-7.jpg",
    category: "Electronic",
  },
];

export function ArtistGrid() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {artists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group cursor-pointer aspect-square"
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold text-center">{artist.name}</h3>
                  {artist.category && (
                    <p className="text-primary mt-2">{artist.category}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}