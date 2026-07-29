import TarjetaProyecto from "./TarjetaProyecto";

// Seccion de proyectos
export default function Proyectos() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <h2
        id="proyectos" 
        className="mb-12 scroll-mt-28 text-center text-3xl font-bold text-white md:text-4xl"
      >
        Mis Proyectos
      </h2>

      <div className="grid items-start gap-6 md:grid-cols-2 xl:grid-cols-3">
        <TarjetaProyecto
          titulo="Telemetría Agro"
          descripcion="Proyecto básico de Business Intelligence orientado al análisis de telemetría de maquinaria agrícola. El objetivo del proyecto es simular un escenario AgTech donde se registran datos operativos de máquinas agrícolas y se construyen indicadores para analizar uso, eficiencia, consumo y alertas."
          tecnologias={["Python", "Metabase", "PostgreSQL", "Docker"]}
          imagenes={[
            "/proyectos/telemetria/cap_dash_1.png",
            "/proyectos/telemetria/cap_dash_2.png",
            "/proyectos/telemetria/cap_dash_3.png",
        ]}
          github="https://github.com/sebasMaldonado10/telemetria_agro"
        />

        <TarjetaProyecto
          titulo="API consultorio médico"
          descripcion="API REST desarrollada con Django Rest Framework para la gestión de turnos médicos en un consultorio. El sistema permite administrar usuarios, médicos, especialidades, horarios de atención y turnos, aplicando autenticación, permisos por rol, filtros y validaciones de disponibilidad."
          tecnologias={["Python", "Django Rest Framework", "PostgreSQL", "Swagger UI"]}
          imagenes={[
            "/proyectos/consultorio/medicos.png",
            "/proyectos/consultorio/swagger.png",
            "/proyectos/consultorio/turnos.png",
        ]}
          github="https://github.com/sebasMaldonado10/api_consultorio_medico"
        />

        <TarjetaProyecto
          titulo="OrganizaDevs"
          descripcion="OrganizaDevs es una aplicación web pensada para estudiantes de software que trabajan en proyectos académicos grupales. La idea principal es evitar que recursos como repositorios de GitHub, documentos, diseños o enlaces de entrega se pierdan entre mensajes de WhatsApp, chats o carpetas desordenadas."
          tecnologias={["Next.js", "Tailwind CSS", "Django Rest Framework", "PostgreSQL", "Render", "Vercel"]}
          imagenes={[
            "/proyectos/organizadevs/dashboard.png",
            "/proyectos/organizadevs/home.png",
            "/proyectos/organizadevs/proyecto.png",
        ]}
          github="https://github.com/sebasMaldonado10/frontend_orgdevs"
          demo="https://orgdevs.vercel.app/"
        />
      </div>
    </section>
  );
}