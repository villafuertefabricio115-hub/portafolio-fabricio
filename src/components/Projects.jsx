import { SiPython, SiReact, SiFlask, SiTailwindcss, SiScikitlearn, SiMysql } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
export default function Projects() {
  const projectsList = [
    {
      title: "CITAMED",
      subtitle: "Sistema de gestión de citas médicas",
      status: "EN_DESARROLLO",
      statusColor: "border-amber-500/50 text-[#fbbf24] bg-amber-500/10",
      description:
        "Plataforma pensada para apoyar la gestión de citas médicas con enfoque institucional, organización de información y mejora en el seguimiento de procesos.",
      details: [
        "Diseño de la base de datos para estructurar la información del sistema.",
        "Desarrollo de la interfaz en JavaFX para una experiencia funcional y ordenada.",
        "Implementación de la lógica del sistema para gestionar operaciones clave.",
        "Enfoque en soluciones prácticas para entornos académicos y de apoyo institucional.",
      ],
      technologies: [
        { name: "JavaFX", icon: <span className="text-sm">FX</span> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "Java", icon: <FaJava className="text-red-500" /> },
      ],
      demoAvailable: false,
    },
    {
      title: "PREVIA",
      subtitle: "Prevención de riesgo académico con apoyo de Machine Learning",
      status: "EN_DESARROLLO",
      statusColor: "border-amber-500/50 text-[#fbbf24] bg-amber-500/10",
      description:
        "Proyecto orientado a analizar factores académicos, sociales, económicos y de salud para identificar estudiantes con mayor riesgo de deserción y apoyar intervenciones tempranas mediante alertas y seguimiento institucional.",
      details: [
        "Diseño de un sistema de scoring para evaluar riesgo en base a formularios periódicos.",
        "Análisis de respuestas libres para complementar la evaluación cuantitativa.",
        "Propuesta de alertas y planes de intervención para estudiantes y autoridades.",
        "Integración de bases de datos para almacenar información relevante del proceso.",
      ],
      technologies: [
        { name: "Python", icon: <SiPython className="text-blue-400" /> },
        { name: "Machine Learning", icon: <SiScikitlearn className="text-orange-400" /> },
        { name: "Flask", icon: <SiFlask className="text-gray-300" /> },
        { name: "React", icon: <SiReact className="text-cyan-400" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      ],
      demoAvailable: false,
    },
  ];

  return (
    <section id="proyectos" className="relative px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex items-center gap-3 font-mono">
          <span className="text-xl font-bold text-[#fbbf24]">03.</span>
          <h2 className="text-2xl font-extrabold tracking-tight text-[#e4e4e4] md:text-3xl">
            PROYECTOS
          </h2>
          <div className="ml-4 h-[1px] flex-1 bg-[#2a2a2a]" />
        </div>

        <div className="space-y-8">
          {projectsList.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-[#2a2a2a] bg-[#121212] shadow-[0_0_35px_rgba(0,0,0,0.25)]"
            >
              <div className="grid gap-8 p-6 md:grid-cols-[1.05fr_0.95fr] md:p-8">
                <div className="space-y-5">
                  <div className="flex flex-wrap items-center gap-3 font-mono">
                    <span className={`rounded border px-2.5 py-1 text-[10px] font-bold uppercase ${project.statusColor}`}>
                      Status: {project.status}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#3b82f6]">
                      {project.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="text-base leading-8 text-gray-400">
                    {project.description}
                  </p>

                  <ul className="space-y-3 text-sm leading-7 text-gray-300">
                    {project.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#fbbf24]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-[#2a2a2a] bg-[#0a0a0a] p-5">
                  <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.24em] text-[#fbbf24]">
                    Stack y enfoque
                  </div>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="flex items-center gap-2 rounded-full border border-[#2a2a2a] bg-[#121212] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-300"
                      >
                        <span className="text-sm">{tech.icon}</span>
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  <div className="rounded-xl border border-[#2a2a2a] bg-[#121212] p-4 text-sm text-gray-400">
                    {project.demoAvailable ? (
                      <a href="#" className="inline-flex items-center gap-2 font-mono text-[#fbbf24] transition hover:text-amber-300">
                        <span>Ver demo</span>
                        <FaArrowRight className="text-[11px]" />
                      </a>
                    ) : (
                      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-gray-500">
                        Demo en desarrollo
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}