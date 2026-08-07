import {
  SiJavascript,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiFlask,
  SiSpringboot,
  SiMysql,
  SiSqlite,
  SiScikitlearn,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import { FaJava, FaFileExcel, FaFileWord, FaFilePowerpoint } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      description: "Interfaces modernas, limpias y orientadas a la experiencia del usuario.",
      skills: [
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "React", icon: <SiReact className="text-cyan-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
      ],
    },
    {
      title: "Backend & Software",
      description: "Lógica de negocio, arquitecturas de software y gestión de bases de datos.",
      skills: [
        { name: "Python", icon: <SiPython className="text-blue-400" /> },
        { name: "Flask", icon: <SiFlask className="text-gray-300" /> },
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "SQLite", icon: <SiSqlite className="text-sky-400" /> },
      ],
    },
    {
      title: "Data & Machine Learning",
      description: "Modelado predictivo, procesamiento de datos e indicadores académicos.",
      skills: [
        { name: "Machine Learning", icon: <SiScikitlearn className="text-orange-400" /> },
        { name: "Scikit-Learn", icon: <SiScikitlearn className="text-orange-500" /> },
        { name: "Python Data", icon: <SiPython className="text-yellow-400" /> },
      ],
    },
    {
      title: "Herramientas & Ofimática",
      description: "Control de versiones, pruebas, documentación técnica y análisis de datos.",
      skills: [
        { name: "Git", icon: <SiGit className="text-orange-500" /> },
        { name: "GitHub", icon: <SiGithub className="text-white" /> },
        { name: "VS Code", icon: <VscVscode className="text-blue-400" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
        { name: "Excel", icon: <FaFileExcel className="text-[#1D6F42]" /> },
        { name: "Word", icon: <FaFileWord className="text-[#1B5AB6]" /> },
        { name: "PowerPoint", icon: <FaFilePowerpoint className="text-[#D04423]" /> },
      ],
    },
  ];

  const softSkills = [
    "Resolución de problemas",
    "Análisis de requerimientos",
    "Comunicación clara",
    "Trabajo en equipo",
    "Atención al detalle",
  ];

  return (
    <section id="habilidades" className="relative px-4 py-16 sm:px-6 sm:py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #2a2a2a 1px, transparent 1px), linear-gradient(to bottom, #2a2a2a 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute right-0 top-10 h-[280px] w-[280px] rounded-full bg-[#fbbf24]/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-8 flex items-center gap-3 font-mono sm:mb-10">
          <span className="text-xl font-bold text-[#fbbf24]">02.</span>
          <h2 className="text-xl font-extrabold tracking-tight text-[#e4e4e4] sm:text-2xl md:text-3xl">
            STACK_TECNOLOGICO
          </h2>
          <div className="ml-4 h-[1px] flex-1 bg-[#2a2a2a]" />
        </div>

        <div className="mb-8 max-w-2xl">
          <p className="text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            Trabajo con un stack enfocado en desarrollo de software, análisis de datos y creación de productos web funcionales e intuitivos.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-[#2a2a2a] bg-[#121212] p-4 shadow-[0_0_30px_rgba(0,0,0,0.2)] sm:p-6"
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

        <div className="mt-10 rounded-2xl border border-[#2a2a2a] bg-[#121212] p-4 sm:p-6">
          <h3 className="mb-4 font-mono text-sm font-semibold uppercase tracking-[0.24em] text-[#fbbf24]">
            Competencias profesionales
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {softSkills.map((skill) => (
              <div
                key={skill}
                className="rounded-lg border border-[#2a2a2a] bg-[#0a0a0a] px-4 py-3 text-sm text-gray-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}