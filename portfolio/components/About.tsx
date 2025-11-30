import { Code, Palette, Terminal } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-12 bg-mango"></span>
              <span className="text-mango font-medium tracking-wider">
                ABOUT ME
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              I design and build digital products.
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Web developer with a passion for turning ideas into interactive,
              user-friendly websites. I enjoy learning new technologies and
              building projects that help me grow my skills in front-end and
              back-end development.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I’m excited to work on real-world projects, collaborate with
              experienced developers, and continue improving my abilities in
              HTML, CSS, JavaScript, and modern frameworks like React and
              Laravel.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-mango/50 transition-colors">
                <Code className="text-mango mb-3" size={24} />
                <h3 className="text-white font-semibold mb-2">Frontend</h3>
                <p className="text-sm text-gray-400">
                  React, Next.js, Tailwind, TypeScript, Redux
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-mango/50 transition-colors">
                <Terminal className="text-mango mb-3" size={24} />
                <h3 className="text-white font-semibold mb-2">Backend</h3>
                <p className="text-sm text-gray-400">
                  PHP, PostgreSQL, Laravel, MySql
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-mango/50 transition-colors">
                <Palette className="text-mango mb-3" size={24} />
                <h3 className="text-white font-semibold mb-2">Design</h3>
                <p className="text-sm text-gray-400">Figma, UI/UX Principles</p>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white/5 border-2 border-white/10 relative group">
              <div className="absolute inset-0 bg-mango/5 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
              <Image
                src="/portfolio-picture.png"
                alt="Profile Picture"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-mango rounded-2xl -z-10 hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
