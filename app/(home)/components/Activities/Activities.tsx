"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Activity {
  number: string;
  description: string;
}

const activities: Activity[] = [
  {
    number: "18",
    description: "atracciones para todos los visitantes",
  },
  {
    number: "24",
    description: "food trucks con comida para todos los gustos",
  },
  {
    number: "36",
    description: "bares con cócteles exclusivos",
  },
  {
    number: "08",
    description: "zonas lounge con música, juegos y actividades",
  },
];

const images = [
  {
    src: "/images/activities-1.png",
    alt: "Noria iluminada en el festival",
  },
  {
    src: "/images/activities-2.png",
    alt: "Comida gourmet del festival",
  },
  {
    src: "/images/activities-3.png",
    alt: "Cóctel especial del festival",
  },
  {
    src: "/images/activities-4.png",
    alt: "Zona lounge del festival",
  },
];

export function Activities() {
  return (
    <section id="activities" className="bg-black py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 md:space-y-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-title font-bold text-white"
            >
              Diversión y <br />
              entretenimiento
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-300 text-base md:text-lg"
            >
              En Cultural Fest encontrarás una gran variedad de actividades,
              atracciones, food trucks, bares y zonas lounge para que disfrutes
              de una experiencia única.
            </motion.p>

            <div className="space-y-4 md:space-y-6">
              {activities.map((activity, index) => (
                <motion.div
                  key={activity.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 md:gap-4"
                >
                  <span className="text-3xl md:text-4xl font-bold text-primary">
                    {activity.number}
                  </span>
                  <span className="text-white text-base md:text-lg">
                    {activity.description}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-3 md:gap-4"
          >
            {images.map((image, index) => (
              <motion.div
                key={image.alt}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative aspect-square overflow-hidden rounded-lg"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
