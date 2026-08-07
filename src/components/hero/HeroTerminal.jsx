export default function HeroTerminal() {
  return (
    <div className="z-10 max-w-2xl text-left font-mono">
      <div className="mb-5 inline-flex items-center gap-2 rounded border border-[#2a2a2a] bg-[#141414] px-3 py-1.5 text-xs text-[#fbbf24]">
        <span className="text-[#3b82f6]">&gt;</span>
        <span className="tracking-[0.25em]">DESARROLLADOR_WEB</span>
      </div>

      <div className="space-y-3">
        <h1 className="text-4xl font-black leading-none tracking-tight text-white sm:text-5xl md:text-6xl">
          Fabricio
          <br />
          <span className="text-[#fbbf24]">Villafuerte</span>
        </h1>

        <p className="max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
          Creo interfaces web claras, rápidas y con una identidad visual sólida. Trabajo en frontend con React, Tailwind y una mentalidad orientada a la experiencia de usuario.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.24em] text-gray-500">
        <span className="rounded border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2">React</span>
        <span className="rounded border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2">Tailwind</span>
        <span className="rounded border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2">UI Focused</span>
      </div>
    </div>
  );
}