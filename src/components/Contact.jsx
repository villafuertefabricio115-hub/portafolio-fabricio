import { useState } from "react";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa6";

// Clave directa de Web3Forms para producción
const ACCESS_KEY = "a2f6c570-b0d5-4b85-bae0-50e601a0c2a0";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    botcheck: "",
  });
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.botcheck) {
      setStatus({ type: "error", message: "Solicitud no válida." });
      return;
    }

    if (!ACCESS_KEY) {
      setStatus({ type: "error", message: "La clave de acceso no está configurada." });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Nuevo mensaje desde el portafolio",
          message: formData.message,
          from_name: "Portafolio Fabricio",
          replyto: formData.email,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ type: "success", message: "Mensaje enviado correctamente. Responderé pronto." });
        setFormData({ name: "", email: "", subject: "", message: "", botcheck: "" });
      } else {
        setStatus({ type: "error", message: result.message || "No se pudo enviar el mensaje. Inténtalo más tarde." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "No se pudo conectar con el servicio de envío." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="relative px-4 py-16 sm:px-6 sm:py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(to right, #2a2a2a 1px, transparent 1px), linear-gradient(to bottom, #2a2a2a 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute bottom-0 right-0 h-[260px] w-[260px] rounded-full bg-[#fbbf24]/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-8 flex items-center gap-3 font-mono sm:mb-12">
          <span className="text-xl font-bold text-[#fbbf24]">05.</span>
          <h2 className="text-xl font-extrabold tracking-tight text-[#e4e4e4] sm:text-2xl md:text-3xl">
            INICIAR_CONEXION
          </h2>
          <div className="ml-4 h-[1px] flex-1 bg-[#2a2a2a]" />
        </div>

        <div className="grid gap-6 rounded-2xl border border-[#2a2a2a] bg-[#121212] p-4 shadow-[0_0_35px_rgba(0,0,0,0.25)] sm:p-6 md:grid-cols-[0.95fr_1.05fr] md:gap-8 md:p-8">
          <div className="space-y-6">
            <div className="inline-flex rounded border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.24em] text-[#3b82f6]">
              Status: canal abierto
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
                ¿Tienes una propuesta, un proyecto o una idea que quieras discutir?
              </h3>
              <p className="text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                Estoy abierto a colaboraciones, oportunidades laborales y conversaciones sobre desarrollo web, sistemas de gestión, productos digitales y soluciones con impacto real.
              </p>
            </div>

            <div className="rounded-2xl border border-[#2a2a2a] bg-[#0a0a0a] p-5">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.24em] text-[#fbbf24]">
                También puedes encontrarme en
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/villafuertefabricio115-hub"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded border border-[#2a2a2a] bg-[#121212] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.24em] text-gray-300 transition hover:text-[#fbbf24]"
                >
                  <FaGithub className="text-sm" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/fabriciovillafuerte"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded border border-[#2a2a2a] bg-[#121212] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.24em] text-gray-300 transition hover:text-[#3b82f6]"
                >
                  <FaLinkedin className="text-sm" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-[#2a2a2a] bg-[#0a0a0a] p-4 sm:p-6">
            <div className="mb-4 hidden">
              <label htmlFor="botcheck">Bot check</label>
              <input
                type="text"
                id="botcheck"
                name="botcheck"
                value={formData.botcheck}
                onChange={handleChange}
                className="hidden"
                autoComplete="off"
              />
            </div>

            <div className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm text-gray-300">
                  <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.24em] text-gray-500">
                    Nombre
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded border border-[#2a2a2a] bg-[#121212] px-4 py-3 text-sm text-white outline-none transition focus:border-[#fbbf24]"
                    placeholder="Tu nombre"
                  />
                </label>

                <label className="block text-sm text-gray-300">
                  <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.24em] text-gray-500">
                    Correo
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded border border-[#2a2a2a] bg-[#121212] px-4 py-3 text-sm text-white outline-none transition focus:border-[#fbbf24]"
                    placeholder="tu correo"
                  />
                </label>
              </div>

              <label className="block text-sm text-gray-300">
                <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.24em] text-gray-500">
                  Asunto
                </span>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded border border-[#2a2a2a] bg-[#121212] px-4 py-3 text-sm text-white outline-none transition focus:border-[#fbbf24]"
                  placeholder="Proyecto, colaboración, consulta..."
                />
              </label>

              <label className="block text-sm text-gray-300">
                <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.24em] text-gray-500">
                  Mensaje
                </span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full rounded border border-[#2a2a2a] bg-[#121212] px-4 py-3 text-sm text-white outline-none transition focus:border-[#fbbf24]"
                  placeholder="Cuéntame brevemente qué estás buscando..."
                />
              </label>
            </div>

            {status.message ? (
              <div
                className={`mt-4 rounded border px-4 py-3 text-sm ${
                  status.type === "success"
                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                    : "border-red-500/30 bg-red-500/10 text-red-300"
                }`}
              >
                {status.message}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 inline-flex items-center gap-2 rounded bg-[#fbbf24] px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-black transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              <FaPaperPlane className="text-sm" />
            </button>
          </form>
        </div>

        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#2a2a2a] pt-6 text-center font-mono text-xs text-gray-500 sm:flex-row">
          <div>
            Diseñado &amp; construido por <span className="text-[#e4e4e4]">Fabricio Villafuerte</span>
          </div>
          <div className="text-gray-600">React + Tailwind CSS v4</div>
        </footer>
      </div>
    </section>
  );
}