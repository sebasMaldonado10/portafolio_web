export default function Footer() {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="w-full">
      {/* Línea divisoria */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-20 text-center">
        <p className="text-base tracking-wide text-zinc-300">
          © {anioActual} Desarrollado por{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text font-bold text-transparent">
            Sebastián Maldonado
          </span>
        </p>
      </div>
    </footer>
  );
}