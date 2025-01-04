"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";
import logo from "@/public/images/logo.png";

const socialLinks = [
  { icon: RiFacebookFill, href: "#", label: "Facebook" },
  { icon: RiInstagramLine, href: "#", label: "Instagram" },
  { icon: RiTwitterFill, href: "#", label: "Twitter" },
  { icon: RiYoutubeFill, href: "#", label: "YouTube" },
];

const footerLinks = [
  { title: "Inicio", href: "#" },
  { title: "Nosotros", href: "#" },
  { title: "Artistas", href: "#" },
  { title: "Actividades", href: "#" },
  { title: "Contacto", href: "#" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          {/* Columna 1: Logo y descripción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Image
              src={logo}
              alt="Cultural Fest"
              width={200}
              height={200}
              className="w-full max-w-[200px] h-auto object-contain"
            />
            <p className="text-gray-400 text-sm">
              El festival cultural más grande de Andalucía, donde la música y la cultura se unen para crear experiencias inolvidables.
            </p>
          </motion.div>

          {/* Columna 2: Enlaces rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-title text-xl font-bold text-center">
              Enlaces rápidos
            </h4>
            <ul className="space-y-2 text-center">
              {footerLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Columna 3: Redes sociales y Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Redes sociales */}
            <div className="space-y-4">
              <h4 className="font-title text-xl font-bold">Síguenos</h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    className="text-gray-400 hover:text-primary transition-colors"
                    aria-label={label}
                  >
                    <Icon size={24} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="font-title text-xl font-bold">Newsletter</h4>
              <p className="text-gray-400 text-sm">
                Suscríbete para recibir las últimas novedades y ofertas especiales.
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu email"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full px-4 py-2 bg-primary hover:bg-primary/80 text-black font-medium rounded-lg transition-colors"
                >
                  Suscribirse
                </motion.button>
                {isSubscribed && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-primary"
                  >
                    ¡Gracias por suscribirte!
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 text-center text-sm text-gray-400"
        >
          <p>
            © {new Date().getFullYear()} Cultural Fest. Todos los derechos
            reservados.
          </p>
          <p className="mt-2">
            Desarrollado por{" "}
            <Link
              href="https://facuguardia.tech"
              className="text-primary hover:text-primary/80 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              facuguardia.tech
            </Link>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
