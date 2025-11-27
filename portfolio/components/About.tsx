import { Code, Palette, Terminal } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Text Content */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-12 bg-accent"></span>
              <span className="text-accent font-medium tracking-wider">
                ABOUT ME
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              I design and build digital products.
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Hello! My name is Bob and I enjoy creating things that live on the
              internet. My interest in web development started back in 2012 when
              I decided to try editing custom Tumblr themes — turns out hacking
              together HTML & CSS is pretty fun!
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Fast-forward to today, and I've had the privilege of working at an
              advertising agency, a start-up, a huge corporation, and a
              student-led design studio.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-accent/50 transition-colors">
                <Code className="text-accent mb-3" size={24} />
                <h3 className="text-white font-semibold mb-2">Frontend</h3>
                <p className="text-sm text-gray-400">
                  React, Next.js, Tailwind, TypeScript
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-accent/50 transition-colors">
                <Terminal className="text-accent mb-3" size={24} />
                <h3 className="text-white font-semibold mb-2">Backend</h3>
                <p className="text-sm text-gray-400">
                  Node.js, PostgreSQL, Python, AWS
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-accent/50 transition-colors">
                <Palette className="text-accent mb-3" size={24} />
                <h3 className="text-white font-semibold mb-2">Design</h3>
                <p className="text-sm text-gray-400">
                  Figma, Adobe XD, UI/UX Principles
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white/5 border-2 border-white/10 relative group">
              <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
              {/* Replace with actual image later */}
              <div className="w-full h-full flex items-center justify-center text-gray-500 bg-zinc-900">
                [Profile Image Placeholder]
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-accent rounded-2xl -z-10 hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
