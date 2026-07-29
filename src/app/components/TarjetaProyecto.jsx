"use client";

import { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink, FiEye, FiX } from "react-icons/fi";
import CarruselProyecto from "./CarruselProyecto";

export default function TarjetaProyecto({
  titulo,
  descripcion,
  tecnologias,
  imagenes,
  github,
  demo,
}) {
  const [modalAbierto, setModalAbierto] = useState(false);

  return (
    <>
      <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-zinc-900/80 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-white/20">
        <h3 className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-center text-2xl font-bold text-transparent">
          {titulo}
        </h3>

        <p className="mt-4 leading-7 text-zinc-300">
          {descripcion}
        </p>

        <h4 className="mt-6 text-sm font-semibold uppercase tracking-wide text-cyan-300/80">
          Tecnologías utilizadas
        </h4>

        <div className="mt-3 flex flex-wrap gap-2">
          {tecnologias.map((tecnologia) => (
            <span
              key={tecnologia}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300"
            >
              {tecnologia}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-5">
          <button
            type="button"
            onClick={() => setModalAbierto(true)}
            className="cursor-pointer inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-sm font-medium text-cyan-100 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-400/20"
          >
            <FiEye className="text-lg" />
            Ver
          </button>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-zinc-300 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
          >
            <FaGithub className="text-lg" />
            GitHub
          </a>

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-fuchsia-400/30 bg-fuchsia-500/10 px-4 py-3 text-sm font-medium text-fuchsia-100 transition duration-300 hover:-translate-y-0.5 hover:bg-fuchsia-500/20"
            >
              <FiExternalLink className="text-lg" />
              Demo
            </a>
          )}
        </div>
      </article>

      {modalAbierto && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setModalAbierto(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Capturas de ${titulo}`}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 p-4 shadow-2xl"
            onClick={(evento) => evento.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">
                {titulo}
              </h3>

              <button
                type="button"
                onClick={() => setModalAbierto(false)}
                aria-label="Cerrar capturas"
                className="rounded-full bg-white/5 p-2 text-zinc-300 transition hover:bg-white/10 hover:text-white"
              >
                <FiX className="text-2xl" />
              </button>
            </div>

            <CarruselProyecto imagenes={imagenes} titulo={titulo} />
          </div>
        </div>
      )}
    </>
  );
}