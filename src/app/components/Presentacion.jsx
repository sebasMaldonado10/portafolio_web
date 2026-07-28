import Image from "next/image";

export default function Presentacion() {
  return (
    <section
      id="inicio"
      className="mx-auto grid min-h-[85vh] max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2"
    >
      {/* Datos personales */}
      <div className="text-left md:text-left">
        <p className="mb-3 text-lg text-zinc-400">
          Hola, soy Sebastián Maldonado.
        </p>

       <h1 className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-fuchsia-500 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            Software Developer
        </h1>

        <p className="mt-6 max-w-xl text-base leading-7 text-zinc-300 md:text-lg">
            Estudiante avanzado de Desarrollo de Software, con formación en backend y
            frontend. Me apasiona crear soluciones eficientes y orientadas a las
            necesidades del cliente.
        </p>

        <div className="mt-8 flex flex-wrap justify-start gap-2 md:justify-start">
          <a
            href="#proyectos"
            className="rounded-full bg-white px-6 py-3 font-medium text-black transition duration-300 hover:-translate-y-1 hover:bg-zinc-200"
          >
            Ver proyectos
          </a>

          <a
            href="#contacto"
            className="rounded-full border border-white/20 px-6 py-3 font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
          >
            Contactarme
          </a>
        </div>
      </div>

      {/* Foto */}
      <div className="flex justify-center md:justify-end">
        <Image
          src="/foto_perfil.jpg"
          alt="Fotografía de Sebastián Maldonado"
          width={380}
          height={380}
          className="border-4 rounded-xl border-white/20 object-cover shadow-2xl"
          priority
        />
      </div>
    </section>
  );
}