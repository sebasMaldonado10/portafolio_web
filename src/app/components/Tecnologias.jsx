import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiDocker,
  SiRender,
  SiFigma,
  SiSwagger,
  SiVercel,
  SiGnubash,
} from "react-icons/si";

import { BsLightning } from "react-icons/bs";

export default function Tecnologias() {
  return (
    <section
      id="tecnologias"
      className="mx-auto max-w-7xl scroll-mt-36 px-6 py-20"
    >
      <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
        Tecnologías
      </h2>

      <div className="grid items-start gap-6 md:grid-cols-2 xl:grid-cols-4">
        {/* Frontend */}
        <article className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 shadow-lg backdrop-blur-sm">
          <h3 className="mb-6 text-xl text-center font-semibold text-white">
            Frontend
          </h3>

          <div className="grid grid-cols gap-2">
            <Tecnologia icono={<SiHtml5 />} nombre="HTML" color="#E34F26"/>
            <Tecnologia icono={<SiCss />} nombre="CSS" color="#663399" />
            <Tecnologia icono={<SiJavascript />} nombre="JavaScript" color="#F7DF1E" />
            <Tecnologia icono={<SiReact />} nombre="React" color="#61DAFB" />
            <Tecnologia icono={<SiNextdotjs />} nombre="Next.js" color="#000000" />
            <Tecnologia icono={<SiTailwindcss />} nombre="Tailwind CSS" color="#06B6D4" />
          </div>
        </article>

        {/* Backend */}
        <article className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 shadow-lg backdrop-blur-sm">
          <h3 className="mb-6 text-xl text-center font-semibold text-white">
            Backend
          </h3>

          <div className="grid grid-cols gap-2">
            <Tecnologia icono={<SiPython />} nombre="Python" color="#3776AB" />
            <Tecnologia icono={<SiDjango />} nombre="Django" color="#0f4d35" />
            <Tecnologia icono={<SiPostgresql />} nombre="PostgreSQL" color="#597be2" />
            <Tecnologia icono={<SiMysql />} nombre="Mysql" color="#4479A1" />
            
          </div>
        </article>

        {/* DevOps y despliegue */}
        <article className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 shadow-lg backdrop-blur-sm">
          <h3 className="mb-6 text-xl text-center font-semibold text-white">
            DevOps y despliegue
          </h3>

          <div className="grid grid-cols gap-2">
            <Tecnologia icono={<SiDocker />} nombre="Docker" color="#2496ED" />
            <Tecnologia icono={<SiRender />} nombre="Render" color="#000000" />
            <Tecnologia icono={<SiVercel />} nombre="Vercel" color="#000000" />
          </div>
        </article>

        {/* Herramientas */}
        <article className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 shadow-lg backdrop-blur-sm">
          <h3 className="mb-6 text-xl text-center font-semibold text-white">
            Herramientas
          </h3>

          <div className="grid grid-cols gap-2">
            <Tecnologia icono={<SiGit />} nombre="Git" color= "#F03C2E" />
            <Tecnologia icono={<SiGithub />} nombre="GitHub" color="#181717" />
            <Tecnologia icono={<BsLightning />} nombre="Thunder Client" color="#804986"/>
            <Tecnologia icono={<SiGnubash />} nombre="Terminal / Bash" color="#4EAA25"/>
            <Tecnologia icono={<SiFigma />} nombre="Figma" color="#F24E1E"/>
            <Tecnologia icono={<SiSwagger />} nombre="Swagger" color="#85EA2D"/>

          </div>
        </article>
      </div>
    </section>
  );
}

function Tecnologia({ icono, nombre, color }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white/8 p-3 text-zinc-300 transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:text-white">
      <span
        className="shrink-0 text-2xl"
        style={{ color }}
        aria-hidden="true"
      >
        {icono}
      </span>

      <span className="text-sm font-medium">
        {nombre}
      </span>
    </div>
  );
}