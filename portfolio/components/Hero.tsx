import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-mango opacity-10 blur-[120px] animate-pulse pointer-events-none mix-blend-screen dark:mix-blend-normal"></div>
      <div
        className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-yellow-500 opacity-10 blur-[100px] animate-pulse pointer-events-none mix-blend-screen dark:mix-blend-normal"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="absolute inset-0 z-0 grid grid-cols-[repeat(auto-fill,minmax(50px,1fr))] grid-rows-[repeat(auto-fill,minmax(50px,1fr))] opacity-10 pointer-events-none">
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className="border border-white/5" />
        ))}
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/50 to-background pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          Hey, I'm{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
            Damjan
          </span>
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-mango mb-8">
          Full Stack Developer
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
          I’m at the start of my journey as a junior web developer, building
          modern, reliable websites. I’m constantly learning, improving, and
          taking on new challenges to grow my skills. If you’ve got an idea, a
          project, or just want to connect, I’d love to chat and create
          something great together.
        </p>

        <Link
          href="#contact"
          className="inline-block px-8 py-4 text-lg font-bold text-background bg-mango rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-mango/50 hover:brightness-110 active:scale-95"
        >
          Contact me
        </Link>
      </div>
    </section>
  );
};

export default Hero;
