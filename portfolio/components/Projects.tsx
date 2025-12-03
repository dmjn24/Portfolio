import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
const projects = [
  {
    title: "E-Commerce CoffeGear",
    description:
      "Interactive platform with products and category browsing,cart and wislisht updates, enabling checkout flow and ordering.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Redux",
      "TypeScript",
      "React",
      "PostgreSQL",
      "Laravel-API",
      "PHP",
    ],
    github: "https://github.com/dmjn24",
    demo: "https://github.com/dmjn24",
    image: "/coffe-gear.png",
  },
  {
    title: "Portfolio | Website",
    description:
      "Portfolio website built with React and Next.js, showcasing projects interactively.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/dmjn24",
    demo: "https://github.com/dmjn24",
    image: "/portfoliop.png",
  },
  {
    title: "Playground Skopje",
    description:
      "E-Commerce backend for Igralishte Skopje with Admin Dashboard, integrated OAuth social login for Google/Facebook accounts.",
    tech: ["PHP", "Laravel", "MySQL", "Tailwind", "Blade", "jQuery"],
    github:
      "https://git.brainster.co/Damjan.Trajkovski-FS13/brainsterprojects_damjantrajkovskifs13/-/tree/project03",
    demo: "https://git.brainster.co/Damjan.Trajkovski-FS13/brainsterprojects_damjantrajkovskifs13/-/tree/project03",
    image: "/iigraliste.png",
  },
  {
    title: "Marinov Design",
    description:
      "Hackathons Project has interactive admin dashboards for monitoring and reporting. Integrated ImageKit for efficient image storage + optimization.",
    tech: [
      "PHP",
      "Laravel",
      "MySQL",
      "Tailwind",
      "Blade",
      "Axios",
      "JavaScript",
      "ImageKit",
    ],
    github: "https://github.com/MartinaDimitrievska/Marinov-Hackaton/tree/dev",
    demo: "https://github.com/MartinaDimitrievska/Marinov-Hackaton/tree/dev",
    image: "/marinov.png",
  },
  {
    title: "Book Library",
    description:
      "Full-stack library management system with authentication, book CRUD, and comments.",
    tech: [
      "PHP",
      "MySQL",
      "Tailwind",
      "jQuery",
      "JavaScript",
      "PDO",
      "ImageKit",
    ],
    github:
      "https://git.brainster.co/Damjan.Trajkovski-FS13/brainsterprojects_damjantrajkovskifs13/-/tree/project02",
    demo: "https://git.brainster.co/Damjan.Trajkovski-FS13/brainsterprojects_damjantrajkovskifs13/-/tree/project02",
    image: "/library.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <span className="h-px w-12 bg-mango"></span>
          <span className="text-mango font-medium tracking-wider">
            PROJECTS
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          Some Things I've Built
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-mango/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-48 w-full relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover w-full"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-mango transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <Link
                      href={project.github}
                      target="_blank"
                      className="text-gray-400 hover:text-mango transition-colors"
                    >
                      <Github size={20} />
                    </Link>
                    <Link
                      href={project.demo}
                      target="_blank"
                      className="text-gray-400 hover:text-mango transition-colors"
                    >
                      <ExternalLink size={20} />
                    </Link>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium text-mango/80 bg-mango/10 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
