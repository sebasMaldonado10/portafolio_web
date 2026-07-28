export default function FondoPagina({ children }) {
  return (
    <div className="relative min-h-screen w-full bg-[#101014] text-white">
      {/* Fondo decorativo */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              rgba(255,255,255,0.04) 0,
              rgba(255,255,255,0.04) 1px,
              transparent 1px,
              transparent 40px
            ),
            repeating-linear-gradient(
              45deg,
              rgba(0,255,128,0.09) 0,
              rgba(0,255,128,0.09) 1px,
              transparent 1px,
              transparent 20px
            ),
            repeating-linear-gradient(
              -45deg,
              rgba(255,0,128,0.10) 0,
              rgba(255,0,128,0.10) 1px,
              transparent 1px,
              transparent 30px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(255,255,255,0.03) 0,
              rgba(255,255,255,0.03) 1px,
              transparent 1px,
              transparent 80px
            ),
            radial-gradient(
              circle at 60% 40%,
              rgba(0,255,128,0.05) 0,
              transparent 60%
            )
          `,
          backgroundSize:
            "80px 80px, 40px 40px, 60px 60px, 80px 80px, 100% 100%",
          backgroundPosition:
            "0 0, 0 0, 0 0, 40px 40px, center",
        }}
      />

      {/* Contenido de la página */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}