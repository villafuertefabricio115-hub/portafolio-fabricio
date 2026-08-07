export default function About() {
  const points = [
    "Me interesa más el desarrollo backend, la lógica de negocio y la construcción de sistemas que funcionen de forma robusta y escalable.",
    "También disfruto trabajar en experiencias de usuario cuando estas están conectadas con una arquitectura sólida y bien pensada.",
    "Estoy interesado en proyectos donde la tecnología pueda aportar valor real a personas, instituciones o procesos.",
  ];

  return (
    <section id="sobre-mi" className="relative px-4 py-16 sm:px-6 sm:py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.09]" style={{ backgroundImage: "linear-gradient(to right, #2a2a2a 1px, transparent 1px), linear-gradient(to bottom, #2a2a2a 1px, transparent 1px)", backgroundSize: "34px 34px" }} />
        <div className="absolute left-1/2 top-1/3 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3b82f6]/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-5xl relative z-10">
        <div className="mb-8 flex items-center gap-3 font-mono sm:mb-10">
          <span className="text-xl font-bold text-[#fbbf24]">01.</span>
          <h2 className="text-xl font-extrabold tracking-tight text-[#e4e4e4] sm:text-2xl md:text-3xl">
            SOBRE_MI
          </h2>
          <div className="ml-4 h-[1px] flex-1 bg-[#2a2a2a]" />
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#2a2a2a] bg-[#121212] shadow-[0_0_35px_rgba(0,0,0,0.25)]">
          <div className="border-b border-[#2a2a2a] bg-[#0a0a0a] px-5 py-3 text-xs text-gray-400">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-gray-500">fabricio_profile.ts</span>
            </div>
          </div>

          <div className="grid gap-6 p-4 sm:p-6 md:grid-cols-[1.1fr_0.9fr] md:gap-8 md:p-8">
            <div className="space-y-4 sm:space-y-5">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#3b82f6]">
                Perfil profesional
              </p>

              <h3 className="text-xl font-semibold text-white sm:text-2xl md:text-3xl">
                Soy un desarrollador en formación con interés particular en backend, bases de datos y el desarrollo de sistemas con propósito real.
              </h3>

              <p className="text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                Me interesa construir productos que sean funcionales, claros y útiles, especialmente cuando resuelven problemas reales. Mi camino ha estado vinculado al desarrollo de software con enfoque en la lógica del sistema, el manejo de datos y la creación de soluciones que puedan sostenerse en el tiempo. También he explorado áreas como análisis de datos, diseño de procesos y desarrollo de aplicaciones orientadas a la acción.
              </p>
            </div>

            <div className="rounded-xl border border-[#2a2a2a] bg-[#0a0a0a] p-4 sm:p-5">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-[#fbbf24]">
                Enfoque actual
              </p>
              <ul className="space-y-3 text-sm leading-7 text-gray-300">
                {points.map((point, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3b82f6]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}