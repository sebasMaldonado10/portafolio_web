"use client";
// Necesitamos interactividad

import { FaMapMarkerAlt } from "react-icons/fa";

import { useState } from "react";
// Para controlar el estado de mi menu hamburguesa

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="sticky top-5 z-50 px-4 py-4">
      <div className="mx-auto max-w-6xl">
        {/* Fila principal */}
        <div className="flex items-center justify-between md:grid md:grid-cols-3">
          <a
            href="#inicio"
            className="text-xl font-semibold text-white md:justify-self-start md:text-2xl"
          >
            Sebastián Maldonado
          </a>

          {/* Navegación de escritorio */}
          <nav className="hidden justify-self-center rounded-full bg-zinc-800/80 p-1.5 shadow-lg md:block">
            <ul className="flex gap-1">
              <li>
                <a
                  href="#inicio"
                  className="block rounded-full px-3 py-2 text-base text-zinc-300 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
                >
                  Inicio
                </a>
              </li>
              
              <li>
                <a
                  href="#acerca-de-mi"
                  className="block whitespace-nowrap rounded-full px-3 py-2 text-base text-zinc-300 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
                >
                  Acerca de mí
                </a>
              </li>

              <li>
                <a
                  href="#tecnologias"
                  className="block rounded-full px-3 py-2 text-base text-zinc-300 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
                >
                  Tecnologías
                </a>
              </li>


              <li>
                <a
                  href="#proyectos"
                  className="block rounded-full px-3 py-2 text-base text-zinc-300 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
                >
                  Proyectos
                </a>
              </li>

              <li>
                <a
                  href="#contacto"
                  className="block rounded-full px-3 py-2 text-base text-zinc-300 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>

          <div className="hidden items-center gap-2 justify-self-end text-base text-zinc-300 md:flex transition duration-300 hover:-translate-y-0.5 cursor-pointer hover:text-white">
            <FaMapMarkerAlt className="text-base" />
            <span>Río Cuarto, Córdoba</span>
          </div>

          {/* Botón hamburguesa */}
          <button
            type="button"
            aria-label="Abrir menú de navegación"
            aria-expanded={menuAbierto}
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="cursor-pointer rounded-lg bg-zinc-800/80 p-2 text-white transition hover:bg-white/10 md:hidden"
          >
            {menuAbierto ? (
              <span className="text-2xl">×</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>

          <div aria-hidden="true" className="hidden md:block" />
        </div>

        {/* Navegación móvil */}
        {menuAbierto && (
          <nav className="mt-3 rounded-2xl bg-zinc-800/95 p-3 shadow-lg md:hidden">
            <ul className="flex flex-col gap-1 text-center">
              <li>
                <a
                  href="#inicio"
                  onClick={() => setMenuAbierto(false)}
                  className="block rounded-xl px-4 py-3 text-zinc-300 hover:bg-white/10 hover:text-white"
                >
                  Inicio
                </a>
              </li>

              <li>
                <a
                  href="#acerca-de-mi"
                  onClick={() => setMenuAbierto(false)}
                  className="block rounded-xl px-4 py-3 text-zinc-300 hover:bg-white/10 hover:text-white"
                >
                  Acerca de mí
                </a>
              </li>
          
              <li>
                <a
                  href="#tecnologias"
                  onClick={() => setMenuAbierto(false)}
                  className="block rounded-xl px-4 py-3 text-zinc-300 hover:bg-white/10 hover:text-white"
                >
                  Tecnologías
                </a>
              </li>

              <li>
                <a
                  href="#proyectos"
                  onClick={() => setMenuAbierto(false)}
                  className="block rounded-xl px-4 py-3 text-zinc-300 hover:bg-white/10 hover:text-white"
                >
                  Proyectos
                </a>
              </li>

              <li>
                <a
                  href="#contacto"
                  onClick={() => setMenuAbierto(false)}
                  className="block rounded-xl px-4 py-3 text-zinc-300 hover:bg-white/10 hover:text-white"
                >
                  Contacto
                </a>
              </li>

              <div className="mt-2 flex items-center justify-center gap-2 border-t border-white/10 pt-3 text-sm text-zinc-400">
                <FaMapMarkerAlt className="text-base" />
                <span>Río Cuarto, Córdoba</span>
              </div>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}