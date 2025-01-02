"use client";

import { FC } from "react";
import { motion } from "framer-motion";

interface StatItemProps {
  number: string;
  label: string;
}

const StatItem: FC<StatItemProps> = ({ number, label }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex items-center gap-2"
  >
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      className="text-primary text-7xl font-bold"
    >
      {number}
    </motion.span>
    <span className="text-white text-2xl font-semibold">{label}</span>
  </motion.div>
);

export const About = () => {
  return (
    <section className="bg-black text-white p-8 md:p-12">
      <div className="max-w-6xl mx-auto flex justify-around items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col items-start gap-4 justify-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-title font-bold text-white"
          >
            Sobre nosotros
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg max-w-md"
          >
            Somos uno de los festivales musicales más grandes de Andalucía.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg max-w-md mt-4"
          >
            El objetivo de <strong>Cultural Fest</strong> es abrir la cultura
            moderna a la gente de diferentes preferencias y eliminar las
            fronteras de las ciudades, países y estereotipos.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 text-primary hover:text-primary/80 transition-colors"
          >
            Leer más &gt;
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-evenly items-start gap-4"
        >
          <StatItem number="2" label="Días" />
          <StatItem number="3" label="Escenarios" />
          <StatItem number="20" label="Artistas" />
        </motion.div>
      </div>
    </section>
  );
};
