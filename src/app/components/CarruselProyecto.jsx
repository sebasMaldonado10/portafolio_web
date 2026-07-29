"use client"; // Necesitamos interactividad

import Image from "next/image"; // Imagenes
import { useState } from "react"; // Estados para manejar el carrusel
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Iconos

export default function CarruselProyecto({ imagenes, titulo }) {
  const [imagenActual, setImagenActual] = useState(0);

  function imagenAnterior() {
    setImagenActual((indiceActual) =>
      indiceActual === 0 ? imagenes.length - 1 : indiceActual - 1
    );
  }

  function imagenSiguiente() {
    setImagenActual((indiceActual) =>
      indiceActual === imagenes.length - 1 ? 0 : indiceActual + 1
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
      <Image
        src={imagenes[imagenActual]}
        alt={`${titulo} - captura ${imagenActual + 1}`}
        fill
        className="object-contain"
      />

      <button
        type="button"
        onClick={imagenAnterior}
        aria-label="Ver imagen anterior"
        className="cursor-pointer absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white transition hover:bg-black/80"
      >
        <FiChevronLeft size={22} />
      </button>

      <button
        type="button"
        onClick={imagenSiguiente}
        aria-label="Ver imagen siguiente"
        className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white transition hover:bg-black/80"
      >
        <FiChevronRight size={22} />
      </button>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {imagenes.map((_, indice) => (
          <button
            key={indice}
            type="button"
            onClick={() => setImagenActual(indice)}
            aria-label={`Ver imagen ${indice + 1}`}
            className={`h-2 w-2 rounded-full transition ${
              imagenActual === indice ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}