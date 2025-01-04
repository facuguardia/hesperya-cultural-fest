"use client";

import { motion } from "framer-motion";
import { Button } from "../Button";

export function CTA() {
  return (
    <section className="relative bg-cta-image py-24 bg-cover bg-center">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cta-image bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-title font-bold text-white">
            No te pierdas esta experiencia única
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Consigue tus entradas ahora y vive dos días inolvidables de música,
            cultura y diversión
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button type="submit" fullWidth>
              Compra tu ticket
            </Button>
          </motion.div>

          <div className="text-sm text-gray-400">
            * Entradas limitadas disponibles
          </div>
        </motion.div>
      </div>
    </section>
  );
}
