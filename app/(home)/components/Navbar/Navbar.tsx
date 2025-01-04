"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useScroll } from "../../hooks/useScroll";
import logo from "@/public/images/logo.png";
import { Button } from "../Button";

export function Navbar() {
  const scrolled = useScroll(50);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed w-full z-20 top-0 start-0 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/60 backdrop-blur-sm py-6"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src={logo}
            width={scrolled ? 150 : 200}
            height={300}
            alt="Cultural Fest Logo"
            className="transition-all duration-300"
          />
        </Link>

        <div className="flex md:order-2">
        <Button type="submit" fullWidth>
            Compra tu ticket
          </Button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-700 focus:outline-none"
          >
            <span className="sr-only">Abrir menú principal</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto md:order-1`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-title md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-white hover:text-primary transition-colors duration-300"
                aria-current="page"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-white hover:text-primary transition-colors duration-300"
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-white hover:text-primary transition-colors duration-300"
              >
                Artistas
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-white hover:text-primary transition-colors duration-300"
              >
                Actividades
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-white hover:text-primary transition-colors duration-300"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
