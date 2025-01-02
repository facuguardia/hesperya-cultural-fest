"use client";

import Link from "next/link";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { motion } from "framer-motion";

export function Hero() {
  const socialLinks = [
    { icon: RiFacebookFill, href: "#", label: "Facebook" },
    { icon: RiInstagramLine, href: "#", label: "Instagram" },
    { icon: RiTwitterFill, href: "#", label: "Twitter" },
    { icon: RiYoutubeFill, href: "#", label: "YouTube" },
  ];

  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const socialIconsAnimation = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      {/* Imagen de fondo con zoom suave */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-hero-image bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
      </motion.div>

      {/* Contenedor principal que establece el ancho máximo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-full">
        {/* Contenido superpuesto */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="relative z-10 h-full flex items-center"
        >
          <div className="w-full md:w-2/3 space-y-6">
            <div className="space-y-2">
              <motion.h1
                variants={fadeInUp}
                className="font-title text-9xl font-bold text-white tracking-tight"
              >
                Cultural
              </motion.h1>
              <motion.h2
                variants={fadeInUp}
                className="font-title text-8xl font-bold text-white tracking-tight"
              >
                Fest
              </motion.h2>
            </div>

            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="flex gap-52">
                <motion.p
                  variants={fadeInUp}
                  className="font-sans text-3xl font-medium text-white"
                >
                  28-29 <span className="text-primary">/</span> <br />{" "}
                  <span className="font-medium text-2xl">Diciembre</span>
                </motion.p>
                <motion.p
                  variants={fadeInUp}
                  className="font-sans text-3xl font-medium text-white"
                >
                  Motril <span className="text-primary">/</span> <br />{" "}
                  <span className="font-medium text-2xl">Granada</span>
                </motion.p>
              </div>
              <motion.div variants={fadeInUp} className="pt-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="font-sans px-8 py-3 bg-primary hover:bg-primary/80 transition-colors text-black rounded-full text-lg font-medium"
                >
                  Comprar entrada
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Redes sociales */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 right-0 z-10"
        >
          <div className="flex flex-col gap-4">
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <motion.div
                key={label}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
              >
                <Link
                  href={href}
                  className="text-white hover:text-primary transition-colors"
                  aria-label={label}
                >
                  <Icon size={24} />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
