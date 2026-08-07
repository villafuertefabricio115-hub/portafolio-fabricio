export default function Trajectory() {
  const milestones = [
    {
      title: "Formación",
      body: "Comencé mis estudios en desarrollo de software en octubre de 2023 en el Instituto Superior Tecnológico Juan Bautista Aguirre, donde fui formando una base técnica orientada a la solución de problemas reales.",
    },
    {
      title: "Enfoque actual",
      body: "Estoy consolidando mi perfil como desarrollador con interés en backend, bases de datos, lógica de negocio y soluciones que aporten valor a personas, instituciones o procesos.",
    },
    {
      title: "Crecimiento profesional",
      body: "He trabajado en proyectos académicos y de desarrollo que me han permitido fortalecer tanto mi pensamiento técnico como mi capacidad para resolver problemas con enfoque práctico.",
    },
  ];

  return (
    <section id="trayectoria" className="relative px-6 py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(to right, #2a2a2a 1px, transparent 1px), linear-gradient(to bottom, #2a2a2a 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute left-0 top-0 h-[260px] w-[260px] rounded-full bg-[#3b82f6]/8 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-10 flex items-center gap-3 font-mono">
          <span className="text-xl font-bold text-[#fbbf24]">04.</span>
          <h2 className="text-2xl font-extrabold tracking-tight text-[#e4e4e4] md:text-3xl">
            TRAYECTORIA_Y_FORMACION
          </h2>
          <div className="ml-4 h-[1px] flex-1 bg-[#2a2a2a]" />
        </div>

        <p className="mb-10 max-w-3xl text-base leading-8 text-gray-400">
          Mi camino se ha construido a través de la formación técnica, la práctica en proyectos y el interés por desarrollar soluciones que tengan un propósito real.
        </p>

        <div className="rounded-2xl border border-[#2a2a2a] bg-[#121212] p-6 shadow-[0_0_30px_rgba(0,0,0,0.2)]">
          <h3 className="mb-5 font-mono text-sm font-semibold uppercase tracking-[0.24em] text-[#fbbf24]">
            Formación y contexto
          </h3>

          <div className="space-y-4">
            {milestones.map((item) => (
              <div key={item.title} className="rounded-xl border border-[#2a2a2a] bg-[#0a0a0a] p-4">
                <h4 className="mb-2 font-mono text-[11px] uppercase tracking-[0.24em] text-[#3b82f6]">
                  {item.title}
                </h4>
                <p className="text-sm leading-7 text-gray-300">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
