import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ArtistCardProps {
  name: string;
  date: string;
  image: string;
}

export const ArtistCard: FC<ArtistCardProps> = ({ name, date, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative group cursor-pointer"
    >
      <div className="relative h-[600px] w-full overflow-hidden">
        <Image
          src={`/images/${image}`}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80" />
      </div>

      <div className="absolute bottom-0 left-0 p-6 text-white">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-title font-bold"
        >
          {name}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-3xl font-bold text-primary mt-2"
        >
          {date}
        </motion.p>
      </div>
    </motion.div>
  );
};
