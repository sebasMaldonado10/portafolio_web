import { FaGraduationCap, FaLanguage } from "react-icons/fa6";

export default function AcercaDeMi() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <h2
        id="acerca-de-mi"
        className="mb-12 scroll-mt-28 text-center text-3xl font-bold text-white md:text-4xl"
      >
        Acerca de mí
      </h2>

      <div className="grid items-start gap-12 md:grid-cols-2">
        {/* Información personal */}
        <div>
          <p className="text-lg leading-8 text-zinc-300">
            Soy estudiante avanzado de la Tecnicatura en Desarrollo de
            Software, con especial interés en el desarrollo backend, la creación
            de APIs REST y el análisis de datos.
          </p>

          <p className="mt-5 text-lg leading-8 text-zinc-300">
            Me gusta resolver probremáticas reáles a través del software, entendiendo que este, es solo un medio para resolver la necesidad de un cliente. Por lo tanto, siempre busco crear soluciones eficientes y escalables, alineadas con una idea de negocio y contexto en el cual estoy trabajando.
          </p>

          <p className="mt-5 text-lg leading-8 text-zinc-300">
            También disfruto trabajar en equipo, aprender nuevas tecnologías y realizar proyectos desafiantes que me conviertan cada día en mejor programador y persona.
          </p>
        </div>

        {/* Datos importantes */}
        <div className="space-y-6">
          {/* Educación */}
          <article className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 shadow-lg backdrop-blur-sm">
            <div className="mb-5 flex items-center gap-3">
              <FaGraduationCap className="text-2xl text-cyan-400" />

              <h3 className="text-xl font-semibold text-white">
                Educación
              </h3>
            </div>

            <div className="space-y-5">
              <div>
                <h4 className="text-base font-medium text-white">
                  Tecnicatura en Desarrollo de Software (2024-2026)
                </h4>

                <p className="mt-1 text-base text-zinc-400">
                  ITEC Rio Cuarto
                </p>

                <p className="mt-1 text-base text-zinc-500">
                  En curso
                </p>
              </div>

              <div>
                <h4 className="font-medium text-white">
                  Educación secundaria (2014 - 2019)
                </h4>

                <p className="mt-1 text-base text-zinc-400">
                  Sagrada Familia
                </p>

                <p className="mt-1 text-base text-zinc-500">
                  Bachiller en Ciencias Naturaless
                </p>
              </div>
            </div>
          </article>

          {/* Idiomas */}
          <article className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 shadow-lg backdrop-blur-sm">
            <div className="mb-5 flex items-center gap-3">
              <FaLanguage className="text-2xl text-fuchsia-400" />

              <h3 className="text-xl font-semibold text-white">
                Idiomas
              </h3>
            </div>

            <div className="space-y-3 text-zinc-300">
              <div className="flex items-center justify-between">
                <span>Español 🇪🇸</span>
                <span className="text-sm text-zinc-500">Nativo</span>
              </div>

              <div className="flex items-center justify-between">
                <span>Inglés 🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
                <span className="text-sm text-zinc-500">
                  Básico - Intermedio
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}