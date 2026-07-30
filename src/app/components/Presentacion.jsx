import Image from "next/image";

export default function Presentacion() {
  return (
    <section
      className="mx-auto grid min-h-[85vh] max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:gap-10 md:py-8"
    >
      {/* Datos personales */}
      <div className="text-left md:text-left">
        <p className="mb-3 text-lg text-zinc-400">
          Hola, soy <span className="font-semibold">Sebastián Maldonado.</span>
        </p>

       <h1 className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-fuchsia-500 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            Software Developer
        </h1>

        <p className="mt-6 max-w-xl text-base leading-7 text-zinc-300 md:text-lg">
            Estudiante avanzado de Desarrollo de Software, con una formación sólida en backend y
            frontend. Me apasiona crear soluciones eficientes y orientadas a las
            necesidades del cliente.
        </p>

        <div className="mt-8 flex flex-wrap justify-start gap-2 md:justify-start">
          <a
            href="#proyectos"
            className="rounded-full border border-white/40 px-6 py-3 font-medium text-white transition duration-300 hover:bg-emerald-500/50 hover:border-emerald-500/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/50"
          >
            Ver proyectos
          </a>

          <a
            href="mailto:sebabstian1720@gmail.com"
            className="rounded-full border border-white/40 px-6 py-3 font-medium text-white transition duration-300 hover:bg-cyan-500/50 hover:-translate-y-1 hover:shadow-lg hover:border-cyan-500/50 hover:shadow-cyan-500/50"
          >
            Contactarme
          </a>
        </div>
      </div>

      {/* Foto */}
      <div className="relative flex justify-center">
        <div className="absolute h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />

        <Image
          src="/perfilmejor.jpg"
          alt="Fotografía de Sebastián Maldonado"
          width={320}
          height={320}
          className="h-80 w-80 rounded-full border border-cyan-400/30 object-cover object-[center_30%] shadow-2xl"
          priority
        />
      </div>
    </section>
  );
}