export default function DownloadCV({ variant = 'default', className = '' }) {
  const baseClasses = "flex items-center gap-2 font-mono transition-all duration-300 tracking-wider";
  
  const variants = {
    default: "bg-[#0a0a0a] border border-[#3b82f6]/40 hover:border-[#fbbf24] text-[#3b82f6] hover:text-[#fbbf24] px-4 py-2 text-xs rounded shadow-sm",
    navbar: "bg-[#fbbf24] hover:bg-amber-300 text-black px-3 py-1.5 rounded text-xs font-bold shadow-[0_0_15px_rgba(251,191,36,0.2)] hover:shadow-[0_0_25px_rgba(251,191,36,0.4)]"
  };

  return (
    <a 
      href="/CV_Fabricio_Villafuerte.pdf" 
      download="CV_Fabricio_Villafuerte.pdf"
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      <span>{variant === 'navbar' ? 'CV' : '[ DESCARGAR_CV ]'}</span>
    </a>
  );
}