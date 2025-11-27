import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive dashboard for managing online stores. Features include real-time analytics, inventory management, and order processing.",
    tech: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "bg-blue-900/20",
  },
  {
    title: "AI Chat Application",
    description:
      "Real-time chat application powered by OpenAI's GPT-4. Includes history persistence, code syntax highlighting, and markdown support.",
    tech: ["React", "Firebase", "OpenAI API", "Framer Motion"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "bg-purple-900/20",
  },
  {
    title: "Task Management Tool",
    description:
      "Collaborative task management tool with Kanban boards, drag-and-drop interface, and team collaboration features.",
    tech: ["Vue.js", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "bg-green-900/20",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <span className="h-px w-12 bg-accent"></span>
          <span className="text-accent font-medium tracking-wider">
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
              className="group bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`h-48 w-full ${project.image} flex items-center justify-center text-gray-500`}
              >
                [Project Preview]
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <Link
                      href={project.github}
                      target="_blank"
                      className="text-gray-400 hover:text-accent transition-colors"
                    >
                      <Github size={20} />
                    </Link>
                    <Link
                      href={project.demo}
                      target="_blank"
                      className="text-gray-400 hover:text-accent transition-colors"
                    >
                      <ExternalLink size={20} />
                    </Link>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium text-accent/80 bg-accent/10 px-2 py-1 rounded"
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
