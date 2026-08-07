import { useState } from 'react';
import DownloadCV from './DownloadCV';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#sobre-mi', label: 'Sobre mí' },
    { href: '#habilidades', label: 'Habilidades' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#trayectoria', label: 'Trayectoria' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-[#2a2a2a]/80 bg-[#0a0a0a]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 font-mono sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="text-base font-semibold tracking-[0.2em] text-[#e4e4e4] transition-colors hover:text-[#fbbf24] sm:text-lg"
          onClick={() => setIsOpen(false)}
        >
          <span className="text-[#fbbf24]">humfa</span>
          <span className="ml-1 text-gray-400">.dev</span>
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <DownloadCV variant="navbar" />

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded border border-[#2a2a2a] bg-[#121212] text-[#e4e4e4] transition hover:border-[#fbbf24] hover:text-[#fbbf24] md:hidden"
            aria-label="Abrir menú"
            aria-expanded={isOpen}
          >
            <span className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 rounded-full bg-current" />
              <span className="h-0.5 w-5 rounded-full bg-current" />
              <span className="h-0.5 w-5 rounded-full bg-current" />
            </span>
          </button>
        </div>

        <nav className="hidden w-full flex-col gap-2 border-t border-[#2a2a2a] pt-3 text-[10px] font-medium uppercase tracking-[0.25em] text-gray-400 md:flex md:w-auto md:flex-row md:items-center md:gap-4 md:border-0 md:pt-0 lg:gap-6 lg:text-[11px]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[#e4e4e4]"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {isOpen ? (
          <nav className="flex w-full flex-col gap-2 border-t border-[#2a2a2a] pt-3 text-[10px] font-medium uppercase tracking-[0.25em] text-gray-400 md:hidden">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded border border-[#2a2a2a] bg-[#121212] px-3 py-2 transition-colors hover:border-[#fbbf24] hover:text-[#e4e4e4]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}