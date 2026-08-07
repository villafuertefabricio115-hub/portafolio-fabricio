export default function HeroFrame() {
  return (
    <div className="w-full max-w-[320px] rounded-xl border border-[#2a2a2a] bg-[#121212] p-3 shadow-[0_0_30px_rgba(0,0,0,0.35)]">
      <div className="mb-3 flex items-center justify-between rounded-md border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2 font-mono text-[10px] text-gray-400">
        <span className="text-[#e4e4e4]">fabricio</span>
        <span className="text-[#fbbf24]">online</span>
      </div>

      <div className="overflow-hidden rounded-lg border border-[#2a2a2a] bg-[#0a0a0a]">
        <img
          src="/foto.jpeg"
          alt="Fabricio Villafuerte"
          className="h-[320px] w-full object-cover object-center grayscale transition duration-500 hover:grayscale-0"
        />
      </div>
    </div>
  );
}