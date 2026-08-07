export default function HeroTerminal() {
  return (
    <div className="z-10 max-w-2xl text-left font-mono">
      <div className="mb-5 inline-flex items-center gap-2 rounded border border-[#2a2a2a] bg-[#141414] px-3 py-1.5 text-[10px] text-[#fbbf24] sm:text-xs">
        <span className="text-[#3b82f6]">&gt;</span>
        <span className="tracking-[0.25em]">DESARROLLADOR_DE_SOFTWARE</span>
      </div>

      <div className="space-y-3">
        <h1 className="text-3xl font-black leading-none tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Fabricio
          <br />
          <span className="text-[#fbbf24]">Villafuerte</span>
        </h1>

        <p className="max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
          Desarrollador de Software enfocado en Backend, modelado de bases de datos relacionales y arquitectura de aplicaciones. Construyo lógica de negocio sólida y sistemas de gestión integrales utilizando Java, Python y MySQL.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.24em] text-gray-500 sm:gap-3 sm:text-[11px]">
        <span className="rounded border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2">Java</span>
        <span className="rounded border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2">Python</span>
        <span className="rounded border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2">MySQL</span>
      </div>
    </div>
  );
}