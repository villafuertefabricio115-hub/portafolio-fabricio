import DownloadCV from './DownloadCV';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-[#2a2a2a]/80 bg-[#0a0a0a]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8 font-mono">
        <a
          href="#inicio"
          className="text-lg font-semibold tracking-[0.2em] text-[#e4e4e4] transition-colors hover:text-[#fbbf24]"
        >
          <span className="text-[#fbbf24]">humfa</span>
          <span className="ml-1 text-gray-400">.dev</span>
        </a>

        <nav className="hidden items-center gap-6 text-[11px] font-medium uppercase tracking-[0.25em] text-gray-400 md:flex">
          <a href="#inicio" className="text-[#fbbf24] transition-colors">
            Inicio
          </a>
          <a href="#sobre-mi" className="transition-colors hover:text-[#e4e4e4]">
            Sobre mí
          </a>
          <a href="#habilidades" className="transition-colors hover:text-[#e4e4e4]">
            Habilidades
          </a>
          <a href="#proyectos" className="transition-colors hover:text-[#e4e4e4]">
            Proyectos
          </a>
          <a href="#trayectoria" className="transition-colors hover:text-[#e4e4e4]">
            Trayectoria
          </a>
          <a href="#contacto" className="transition-colors hover:text-[#e4e4e4]">
            Contacto
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <DownloadCV variant="navbar" />
        </div>
      </div>
    </header>
  );
}