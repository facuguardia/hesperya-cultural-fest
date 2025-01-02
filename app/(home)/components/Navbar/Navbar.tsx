"use client";

import Image from "next/image";
import Link from "next/link";
import { useScroll } from "../../hooks/useScroll";
import logo from "@/public/images/logo.png";

export function Navbar() {
  const scrolled = useScroll(50);

  return (
    <nav
      className={`fixed w-full z-20 top-0 start-0 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse transition-transform duration-300"
        >
          <Image
            src={logo}
            width={scrolled ? 150 : 200}
            height={300}
            alt="Hesperya Logo"
            className="transition-all duration-300"
          />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="px-4 py-2 text-black font-nav font-medium rounded-lg text-sm text-center bg-primary hover:bg-primary/80 transition-colors duration-300 ease-in-out cursor-pointer">
            Compra tu ticket
          </div>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
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
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-nav md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-transparent">
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
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
