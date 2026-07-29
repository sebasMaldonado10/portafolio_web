// Importamos los iconos

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export default function Contacto() {
  return (
    <section className="mx-auto max-w-6xl scroll-mt-44 px-6 py-24">
      <h2
        id="contacto" 
        className="mb-12 scroll-mt-28 text-center text-3xl font-bold text-white md:text-4xl"
      >
        Contacto
      </h2>

      <div className="grid gap-10 rounded-2xl border border-white/10 bg-zinc-900/70 p-7 shadow-lg backdrop-blur-sm md:grid-cols-2 md:p-10">
        {/* Presentación */}
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
            Hablemos
          </p>

          <h3 className="mt-3 text-3xl font-bold text-white">
            ¿Trabajamos juntos?
          </h3>

          <p className="mt-5 max-w-lg leading-7 text-zinc-300">
            Estoy abierto a nuevas oportunidades laborales, proyectos y
            colaboraciones. Podés comunicarte conmigo mediante cualquiera de
            estos canales.
          </p>

          <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-base text-emerald-300 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-400/20 hover:border-emerald-400/40 hover:text-emerald-250">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Disponible para nuevas oportunidades
          </div>
        </div>

        {/* Enlaces */}
        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href="mailto:sebabstian1720@gmail.com"
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-red-400/30 hover:bg-white/10"
          >
            <SiGmail className="shrink-0 text-3xl text-red-400" />

            <div>
              <h4 className="font-semibold text-white">Gmail</h4>
              <p className="mt-1 text-sm text-zinc-400">Enviar un correo</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/sebastian-maldonado-8a462b32a/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/10"
          >
            <FaLinkedin className="shrink-0 text-3xl text-blue-400" />

            <div>
              <h4 className="font-semibold text-white">LinkedIn</h4>
              <p className="mt-1 text-sm text-zinc-400">Perfil profesional</p>
            </div>
          </a>

          <a
            href="https://github.com/sebasMaldonado10"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
          >
            <FaGithub className="shrink-0 text-3xl text-white" />

            <div>
              <h4 className="font-semibold text-white">GitHub</h4>
              <p className="mt-1 text-sm text-zinc-400">Ver mis proyectos</p>
            </div>
          </a>

          <a
            href="https://wa.me/5493585144550"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-green-400/30 hover:bg-white/10"
          >
            <FaWhatsapp className="shrink-0 text-3xl text-green-400" />

            <div>
              <h4 className="font-semibold text-white">WhatsApp</h4>
              <p className="mt-1 text-sm text-zinc-400">Enviar un mensaje</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}