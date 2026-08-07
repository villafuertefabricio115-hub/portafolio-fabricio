import { FaArrowRight } from "react-icons/fa6";
import DownloadCV from "../DownloadCV";

export default function HeroButtons() {
  return (
    <div className="z-10 mt-8 flex flex-col gap-3 font-mono sm:flex-row sm:flex-wrap sm:items-center">
      <a
        href="#proyectos"
        className="inline-flex items-center justify-center gap-2 rounded border border-[#fbbf24]/40 bg-[#fbbf24] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.24em] text-black transition hover:bg-amber-300"
      >
        <span>Ver proyectos</span>
        <FaArrowRight className="text-[11px]" />
      </a>

      <DownloadCV variant="default" />

      <span className="text-[10px] uppercase tracking-[0.24em] text-gray-500 sm:text-[11px]">
        Disponible para trabajar
      </span>
    </div>
  );
}