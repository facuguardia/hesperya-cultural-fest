import Link from "next/link";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";

export function Hero() {
  const socialLinks = [
    { icon: RiFacebookFill, href: "#", label: "Facebook" },
    { icon: RiInstagramLine, href: "#", label: "Instagram" },
    { icon: RiTwitterFill, href: "#", label: "Twitter" },
    { icon: RiYoutubeFill, href: "#", label: "YouTube" },
  ];

  return (
    <div className="relative w-full h-[700px]">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 bg-hero-image bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
      </div>

      {/* Contenedor principal que establece el ancho máximo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-full">
        {/* Contenido superpuesto */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full md:w-2/3 space-y-6">
            <div className="space-y-2">
              <h1 className="text-9xl font-bold text-white tracking-tight">
                Cultural
              </h1>
              <h2 className="text-8xl font-bold text-white tracking-tight">
                Fest
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex gap-52">
                <p className="text-3xl font-medium text-white">
                  28-29 <span className="text-primary">/</span> <br />{" "}
                  <span className="font-medium text-2xl">Diciembre</span>
                </p>
                <p className="text-3xl font-medium text-white">
                  Motril <span className="text-primary">/</span> <br />{" "}
                  <span className="font-medium text-2xl">Granada</span>
                </p>
              </div>
              <div className="pt-12">
                <button className="px-8 py-3 bg-primary hover:bg-primary/80 transition-colors text-black rounded-full text-lg font-medium">
                  Comprar entrada
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="absolute bottom-8 right-0 z-10">
          <div className="flex flex-col gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                className="text-white hover:text-primary transition-colors"
                aria-label={label}
              >
                <Icon size={24} />
              </Link>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
