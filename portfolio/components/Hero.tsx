import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 grid grid-cols-[repeat(auto-fill,minmax(50px,1fr))] grid-rows-[repeat(auto-fill,minmax(50px,1fr))] opacity-20 pointer-events-none">
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className="border border-white/5" />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          Hey, I'm <span className="text-white">Damjan</span>
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-accent mb-8">
          Full Stack Developer
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
          I've spent the last 5 years building and scaling software for some
          pretty cool companies. I also teach people to paint online (incase
          you've got an empty canvas layin' around 🎨). Let's connect and build
          something awesome.
        </p>

        <Link
          href="#contact"
          className="inline-block px-8 py-4 text-lg font-bold text-background bg-accent rounded hover:bg-accent transition-colors"
        >
          Contact me
        </Link>
      </div>
    </section>
  );
};

export default Hero;
