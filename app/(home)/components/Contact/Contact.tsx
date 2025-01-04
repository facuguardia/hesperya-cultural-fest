"use client";

import { motion } from "framer-motion";
import { RiMailLine, RiMapPinLine, RiPhoneLine } from "react-icons/ri";
import { Button } from "../Button";

interface ContactInfo {
  icon: React.ElementType;
  title: string;
  content: string;
  href?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: RiMapPinLine,
    title: "Dirección",
    content: "Motril, Granada, España",
  },
  {
    icon: RiPhoneLine,
    title: "Teléfono",
    content: "+34 123 456 789",
    href: "tel:+34123456789",
  },
  {
    icon: RiMailLine,
    title: "Email",
    content: "info@culturalfest.es",
    href: "mailto:info@culturalfest.es",
  },
];

export function Contact() {
  return (
    <section id="contact" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Columna de información */}
          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-title font-bold text-white"
            >
              Contacto
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-300 text-lg"
            >
              ¿Tienes alguna pregunta? No dudes en contactarnos.
            </motion.p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <info.icon className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-lg">{info.title}</h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-300 hover:text-primary transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-300">{info.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Columna del formulario */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 rounded-lg"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="Tu mensaje"
                ></textarea>
              </div>
              <Button type="submit" fullWidth>
                Enviar mensaje
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 