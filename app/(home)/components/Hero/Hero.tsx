"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { motion } from "framer-motion";
import { Button } from "../Button";

const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1.2, ease: "easeOut" },
  },
  slideUp: {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export function Hero() {
  const socialLinks = [
    { id: "fb-social", icon: RiFacebookFill, href: "#", label: "Facebook" },
    { id: "ig-social", icon: RiInstagramLine, href: "#", label: "Instagram" },
    { id: "tw-social", icon: RiTwitterFill, href: "#", label: "Twitter" },
    { id: "yt-social", icon: RiYoutubeFill, href: "#", label: "YouTube" },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Imagen de fondo con overlay gradiente */}
      <motion.div
        {...animations.fadeIn}
        className="absolute inset-0 bg-hero-image bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-full">
        <div className="relative z-10 h-full flex items-center pt-16">
          <div className="w-full space-y-12">
            {/* Título principal */}
            <div>
              <motion.h1
                {...animations.slideUp}
                className="font-title text-7xl md:text-[10rem] font-bold text-white tracking-tight leading-none"
              >
                Cultural
                <span className="block text-primary">Fest</span>
              </motion.h1>
            </div>

            {/* Información del evento */}
            <motion.div
              {...animations.slideUp}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="flex flex-col md:flex-row md:gap-52 gap-4">
                <div className="p-6 backdrop-blur-sm bg-white/5 rounded-lg border border-white/10">
                  <p className="font-sans text-2xl md:text-4xl font-medium text-white">
                    28-29 <span className="text-primary">/</span> <br />
                    <span className="font-medium text-xl md:text-2xl">
                      Diciembre
                    </span>
                  </p>
                </div>
                <div className="p-6 backdrop-blur-sm bg-white/5 rounded-lg border border-white/10">
                  <p className="font-sans text-2xl md:text-4xl font-medium text-white">
                    Motril <span className="text-primary">/</span> <br />
                    <span className="font-medium text-xl md:text-2xl">
                      Granada
                    </span>
                  </p>
                </div>
              </div>

              <motion.div {...animations.slideUp} transition={{ delay: 0.4 }}>
                <Button type="submit" size="lg">
                  Compra tu ticket
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Redes sociales */}
        <motion.div
          {...animations.fadeIn}
          transition={{ delay: 0.6 }}
          className="absolute bottom-12 right-0 z-10"
        >
          <div className="flex flex-col gap-6">
            {socialLinks.map(({ id, icon: Icon, href, label }) => (
              <Link
                key={id}
                href={href}
                className="text-white/60 hover:text-primary transition-all duration-300"
                aria-label={label}
              >
                <Icon size={24} />
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Indicador de scroll */}
        <motion.div
          {...animations.fadeIn}
          transition={{ delay: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center"
        >
          <p className="text-white/60 text-sm uppercase tracking-widest mb-4">
            Scroll
          </p>
          <div className="w-px h-16 bg-white/20 mx-auto relative">
            <motion.div
              className="absolute top-0 w-px h-1/2 bg-primary"
              animate={{
                y: [0, 32, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
