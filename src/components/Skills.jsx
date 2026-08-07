import {
  SiJavascript,
  SiPython,
  SiReact,
  SiFlask,
  SiSpringboot,
  SiMysql,
  SiSqlite,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      description: "Interfaces modernas, limpias y orientadas a la experiencia del usuario.",
      skills: [
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "React", icon: <SiReact className="text-cyan-400" /> },
        { name: "Tailwind CSS", icon: <SiReact className="text-sky-400" /> },
      ],
    },
    {
      title: "Backend & Data",
      description: "Lógica de negocio, APIs y estructuras de datos simples y eficientes.",
      skills: [
        { name: "Python", icon: <SiPython className="text-blue-400" /> },
        { name: "Flask", icon: <SiFlask className="text-gray-300" /> },
        { name: "SQL", icon: <SiMysql className="text-blue-500" /> },
      ],
    },
    {
      title: "Herramientas",
      description: "Flujo de trabajo profesional con control de versiones y testing básico.",
      skills: [
        { name: "Git", icon: <SiGit className="text-orange-500" /> },
        { name: "GitHub", icon: <SiGithub className="text-white" /> },
        { name: "VS Code", icon: <VscVscode className="text-blue-400" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      ],
    },
    {
      title: "Aprendizaje",
      description: "Capacidad para adaptarme rápido y seguir creciendo con nuevas tecnologías.",
      skills: [
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
        { name: "SQLite", icon: <SiSqlite className="text-sky-400" /> },
      ],
    },
  ];

  const softSkills = [
    "Resolución de problemas",
    "Comunicación clara",
    "Trabajo en equipo",
    "Atención al detalle",
  ];

  return (
    <section id="habilidades" className="relative px-6 py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "linear-gradient(to right, #2a2a2a 1px, transparent 1px), linear-gradient(to bottom, #2a2a2a 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute right-0 top-10 h-[280px] w-[280px] rounded-full bg-[#fbbf24]/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-5xl relative z-10">
        <div className="mb-10 flex items-center gap-3 font-mono">
          <span className="text-xl font-bold text-[#fbbf24]">02.</span>
          <h2 className="text-2xl font-extrabold tracking-tight text-[#e4e4e4] md:text-3xl">
            STACK_TECNOLOGICO
          </h2>
          <div className="ml-4 h-[1px] flex-1 bg-[#2a2a2a]" />
        </div>

        <div className="mb-8 max-w-2xl">
          <p className="text-base leading-8 text-gray-400">
            Trabajo con un stack orientado a la construcción de productos web funcionales, claros y con buena experiencia de usuario.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-[#2a2a2a] bg-[#121212] p-6 shadow-[0_0_30px_rgba(0,0,0,0.2)]"
            >
              <div className="mb-4 flex items-center justify-between border-b border-[#2a2a2a] pb-3">
                <h3 className="font-mono text-sm font-semibold uppercase tracking-[0.24em] text-[#fbbf24]">
                  {category.title}
                </h3>
                <span className="text-[11px] uppercase tracking-[0.24em] text-[#3b82f6]">
                  focus
                </span>
              </div>

              <p className="mb-5 text-sm leading-7 text-gray-400">{category.description}</p>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <span
                    key={`${category.title}-${index}`}
                    className="flex items-center gap-2 rounded-full border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-gray-300"
                  >
                    <span className="text-base">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-[#2a2a2a] bg-[#121212] p-6">
          <h3 className="mb-4 font-mono text-sm font-semibold uppercase tracking-[0.24em] text-[#fbbf24]">
            Competencias profesionales
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {softSkills.map((skill) => (
              <div key={skill} className="rounded-lg border border-[#2a2a2a] bg-[#0a0a0a] px-4 py-3 text-sm text-gray-300">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}