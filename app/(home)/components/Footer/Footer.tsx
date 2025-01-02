"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 content-center gap-12 pb-12 border-b border-white/10">
          {/* Logo y descripción */}
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
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Enlaces rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 text-center"
          >
            <h4 className="font-title text-xl font-bold">Enlaces rápidos</h4>
            <ul className="space-y-2">
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

          {/* Redes sociales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 text-right"
          >
            <h4 className="font-title text-xl font-bold">Síguenos</h4>
            <div className="flex space-x-4 justify-end">
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
