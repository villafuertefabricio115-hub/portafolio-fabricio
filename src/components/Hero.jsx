import HeroBackground from "./hero/HeroBackground";
import HeroFrame from "./hero/HeroFrame";
import HeroTerminal from "./hero/HeroTerminal";
import HeroButtons from "./hero/HeroButtons";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pb-16 pt-24 sm:px-6 sm:pt-28 lg:px-12"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div className="flex flex-col justify-center">
          <HeroTerminal />
          <HeroButtons />
        </div>

        <div className="flex justify-center lg:justify-end">
          <HeroFrame />
        </div>
      </div>
    </section>
  );
}